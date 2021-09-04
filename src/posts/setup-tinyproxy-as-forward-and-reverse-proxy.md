---
title: How I set up Tinyproxy as a forward proxy and reverse proxy
date: '2018-09-06'
featured: true
tags:
  - tech
crossposts:
  medium: https://isabelcmdcosta.medium.com/how-i-set-up-tinyproxy-as-a-forward-proxy-and-reverse-proxy-2a5dc1ed64e4
  devto: https://dev.to/isabelcmdcosta/how-i-set-up-tinyproxy-as-a-forward-and-reverse-proxy-5135
---

[Tinyproxy](https://tinyproxy.github.io/) is a light-weight HTTP/HTTPS proxy daemon for POSIX operating systems, which is [open source on Github](https://github.com/tinyproxy/tinyproxy).

I tried out this tool to set up a [forward proxy](https://en.wikipedia.org/wiki/Proxy_server) on the client side of the communication and a [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy) on the server side. I wanted to use this so that I could do experiments on the network between the forward proxy and reverse proxy, without the client and server’s involvement.

Reverse proxies are mostly used as a load balancer, where we connect with a reverse proxy which then decides to which machine it should send the request.

>  “(…) With reverse proxying it’s possible to make a number of sites appear as if they were part of a single site (…)”

from the manual of the configuration file of Tinyproxy.

## Requirements

The following requirements represent what I used in my experiment:

* An image with a Linux OS distribution — I used a [Debian](https://www.debian.org/) GNU/Linux 8.9 (Jessie);
* 4 virtual machines to serve as client, forward proxy, reverse proxy and server — I used [VirtualBox](https://www.virtualbox.org/) to run these machines, with the Debian’s OS image;
* The server has to run a Web Server — I used [Apache HTTP server](https://httpd.apache.org/), to return the default HTML page saying “It works!”;
* The client has to have a browser or a command-line tool installed such as [curl](https://curl.haxx.se/), to do HTTP requests;
* The forward and reverse proxy machines should have [tinyproxy](https://tinyproxy.github.io/) installed — Next I’ll show how to install it on the Debian machines. The version I used was 1.8.3.

## Test architecture

![Test architecture for the experiment](/images/tinyproxy-trial-architecture.png)

I created [isabelcosta/testing-tiny-proxy](https://github.com/isabelcosta/testing-tiny-proxy) repository on Github with the configuration files needed to run both roles of forward proxy and reverse proxy.

## Network Configuration

VirtualBox lets you configure the network settings of the virtual machines. I used Nat Network setting which allowed me to have all the machines within the same network. These were the IP assigned to each machine.

* Client — 10.0.2.33
* Forward Proxy — 10.0.2.35
* Reverse Proxy — 10.0.2.36
* Server — 10.0.2.34

These IP addresses will be important, because they will appear in the examples of how to test the system.

## Install Tinyproxy

To install Tinyproxy, you have to type the following command into the forward and reverse proxy machines’s terminal:

```
apt-get install tinyproxy
```

## Setting up the system

Tinyproxy works according to configuration files. I wrote two configurations, one for the forward proxy and another for the reverse proxy.

**Forward proxy configuration files:**

```
## forwardproxy.conf -- tinyproxy daemon configuration file

User nobody
Group nogroup

Port 8888
Listen 10.0.2.35
BindSame yes

Timeout 600

DefaultErrorFile "/usr/share/tinyproxy/default.html"
StatFile "/usr/share/tinyproxy/stats.html"
Logfile "/var/log/tinyproxy/tinyproxy.log"
#Syslog On
LogLevel Info
PidFile "/var/run/tinyproxy/tinyproxy.pid"

# Comment to use only the forward proxy
# Uncomment to forward the traffic to the reverse proxy
#Upstream 10.0.2.36:8888

MaxClients 100
MinSpareServers 2
MaxSpareServers 5
StartServers 2
MaxRequestsPerChild 0

Allow 127.0.0.1
Allow 10.0.2.0/24

ViaProxyName "tinyproxy1"

ConnectPort 8888
ConnectPort 80

# The following two ports are used by SSL.
ConnectPort 443
ConnectPort 563
```

**Reverse proxy configuration files:**

```
## reverseproxy.conf -- tinyproxy daemon configuration file

User nobody
Group nogroup

Port 8888
Listen 10.0.2.36

BindSame yes
Timeout 600

StatFile "/usr/share/tinyproxy/stats.html"
Logfile "/var/log/tinyproxy/tinyproxy.log"
#Syslog On
LogLevel Info
PidFile "/var/run/tinyproxy/tinyproxy.pid"

MaxClients 5
MinSpareServers 2
MaxSpareServers 5
StartServers 2

MaxRequestsPerChild 0

Allow 127.0.0.1
Allow 10.0.2.0/24
Allow 10.0.2.35

ViaProxyName "tinyproxy2"

ConnectPort 8888
ConnectPort 80

# The following two ports are used by SSL.
ConnectPort 443
ConnectPort 563

ReversePath "/test/" "http://10.0.2.34:80/"
#ReversePath "/" "http://10.0.2.34:80/"
ReversePath "/wired/" "http://www.wired.com/"

ReverseOnly Yes
ReverseMagic Yes
ReverseBaseURL "http://10.0.2.36:8888/"
```

To run tinyproxy with a specific configuration just do the following:

```
tinyproxy -c <configuration-file>
```

E.g.: tinyproxy -c forwardproxy.conf

## Testing the system

First make sure that the server is running accordingly and you can access the server with the following command, from any of the machines, since all of them are in the same network. You can test this using [curl](https://curl.haxx.se/) command line tool or on a browser:

```
curl http://10.0.2.34:80/ 
```

Now to test the whole system, if you want to use curl you can type this on the client machine console:

```
curl -v --proxy http://10.0.2.35:8888 http://10.0.2.36:8888/
```

This is the output of the previous command:

```
root@debian:/home/debian# curl -v --proxy http://10.0.2.35:8888 http://10.0.2.36:8888
* Rebuilt URL to: http://10.0.2.36:8888/
* Hostname was NOT found in DNS cache
*   Trying 10.0.2.35...
* Connected to 10.0.2.35 (10.0.2.35) port 8888 (#0)
> GET http://10.0.2.36:8888/ HTTP/1.1
> User-Agent: curl/7.38.0
> Host: 10.0.2.36:8888
> Accept: */*
> Proxy-Connection: Keep-Alive
> 
< HTTP/1.1 200 OK
< Via: 1.0 tinyproxy2 (tinyproxy/1.8.3), 1.1 tinyproxy1 (tinyproxy/1.8.3)
< Last-Modified: Mon, 11 Jun 2007 18:53:14 GMT
< Date: Tue, 12 Dec 2017 23:01:37 GMT
< Content-Type: text/html
< ETag: "2d-432a5e4a73a80"
< Set-Cookie: yummy_magical_cookie=/; path=/
* Server Apache/2.4.29 (Unix) is not blacklisted
< Server: Apache/2.4.29 (Unix)
< Content-Length: 45
< Accept-Ranges: bytes
< 
<html><body><h1>It works!</h1></body></html>
* Connection #0 to host 10.0.2.35 left intact
```

Another way to see that this is working, is by using [Wireshark](https://www.wireshark.org/) tool. This tool allows you to see network traffic. Before testing the system start running Wireshark. By testing in a local network you can see the whole traffic from the client to the server. After requesting and receiving the response from the server, if you filter the Wireshark captures by “http”, you should see a result similar to the following image.

![[Wireshark](https://www.wireshark.org/) capture of the communication between the client and the server, passing through the proxies.](/images/tinyproxy-trial-wireshark.png)

In this [Wireshark](https://www.wireshark.org/) capture you can see the traffic in both directions: client ↔ forward proxy ↔ reverse proxy ↔ server.

To check log file and the forward and reverse proxies, you can type the following on either the machines:

```
cat /var/log/tinyproxy/tinyproxy.log
```

If you want to test this in another way you can change the proxies’ configuration files on [isabelcosta/testing-tiny-proxy](https://github.com/isabelcosta/testing-tiny-proxy) repository.

## Tips & Notes

* If you want to set up other paths you can do it with the “ReversePath” keyword. E.g.: ReversePath “/test” “http://10.0.2.34:80/” — in this way you can access the server by typing “http://10.0.2.36:8888/test”
* I was always getting the error 400 Bad Request, because I was using this tool in the wrong way. I was using curl to connect with the server as the endpoint instead of the reverse proxy. The reverse proxy does not work as a forward proxy, so don’t use the “upstream” keyword to forward the traffic to the reverse proxy.
