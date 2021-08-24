(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["assets/css/global.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "*{box-sizing:border-box}*:before,*:after{box-sizing:inherit}body,h1,h2,h3,h4,p,ul,ol,li,dd,figure,figcaption,dl,dd,dt{margin:0px;padding:0px}body{-ms-overflow-style:-ms-autohiding-scrollbar;scroll-behavior:smooth;font-size:1rem;min-height:100vh}ul[class],ol[class]{list-style:none}a:not([class]){text-decoration:underline;text-decoration-skip-ink:auto;cursor:pointer}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder,select::-webkit-input-placeholder{line-height:normal}img{max-width:100%}@media(prefers-reduced-motion: reduce){*{-webkit-animation:none !important;animation:none !important;transition:none !important;scroll-behavior:auto !important}}.sf-flow{--flow-space: 1em}.sf-flow>*+*{margin-top:1em;margin-top:var(--flow-space)}.align-start{align-items:flex-start}.align-center{align-items:center}.align-end{align-items:flex-end}.bg-primary{background:#173854}.bg-primary-shade{background:#102538}.bg-primary-glare{background:#22547c}.bg-highlight{background:#a7dcfa}.bg-light{background:#ffffff}.bg-mid{background:#cccccc}.bg-dark{background:#333333}.bg-slate{background:#404040}.color-primary{color:#173854}.color-primary-shade{color:#102538}.color-primary-glare{color:#22547c}.color-highlight{color:#a7dcfa}.color-light{color:#ffffff}.color-mid{color:#cccccc}.color-dark{color:#333333}.color-slate{color:#404040}.box-block{display:block}.box-flex{display:flex}.box-inline-flex{display:inline-flex}.box-hide{display:none}.font-base{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'}.font-serif{font-family:'Lora', serif}.gap-top-300{margin-top:0.8rem}.gap-top-500{margin-top:1.25rem}.gap-top-600{margin-top:1.56rem}.gap-top-700{margin-top:1.95rem}.gap-top-800{margin-top:2.44rem}.gap-top-900{margin-top:3.05rem}.gap-top-base{margin-top:1rem}.gap-top-max{margin-top:4rem}.gap-bottom-300{margin-bottom:0.8rem}.gap-bottom-500{margin-bottom:1.25rem}.gap-bottom-600{margin-bottom:1.56rem}.gap-bottom-700{margin-bottom:1.95rem}.gap-bottom-800{margin-bottom:2.44rem}.gap-bottom-900{margin-bottom:3.05rem}.gap-bottom-base{margin-bottom:1rem}.gap-bottom-max{margin-bottom:4rem}.leading-tight{line-height:1.2}.leading-mid{line-height:1.5}.leading-loose{line-height:1.7}.measure-long{max-width:75ch}.measure-short{max-width:60ch}.measure-compact{max-width:40ch}.pad-top-300{padding-top:0.8rem}.pad-top-500{padding-top:1.25rem}.pad-top-600{padding-top:1.56rem}.pad-top-700{padding-top:1.95rem}.pad-top-800{padding-top:2.44rem}.pad-top-900{padding-top:3.05rem}.pad-top-base{padding-top:1rem}.pad-top-max{padding-top:4rem}.pad-bottom-300{padding-bottom:0.8rem}.pad-bottom-500{padding-bottom:1.25rem}.pad-bottom-600{padding-bottom:1.56rem}.pad-bottom-700{padding-bottom:1.95rem}.pad-bottom-800{padding-bottom:2.44rem}.pad-bottom-900{padding-bottom:3.05rem}.pad-bottom-base{padding-bottom:1rem}.pad-bottom-max{padding-bottom:4rem}.pad-left-300{padding-left:0.8rem}.pad-left-500{padding-left:1.25rem}.pad-left-600{padding-left:1.56rem}.pad-left-700{padding-left:1.95rem}.pad-left-800{padding-left:2.44rem}.pad-left-900{padding-left:3.05rem}.pad-left-base{padding-left:1rem}.pad-left-max{padding-left:4rem}.space-between{justify-content:space-between}.space-around{justify-content:space-around}.space-before{justify-content:flex-end}.stack-300{z-index:0}.stack-400{z-index:10}.stack-500{z-index:20}.stack-600{z-index:30}.stack-700{z-index:40}.ta-right{text-align:right}.ta-left{text-align:left}.ta-center{text-align:center}.text-300{font-size:0.8rem}.text-500{font-size:1.25rem}.text-600{font-size:1.56rem}.text-700{font-size:1.95rem}.text-800{font-size:2.44rem}.text-900{font-size:3.05rem}.text-base{font-size:1rem}.text-max{font-size:4rem}.weight-light{font-weight:300}.weight-regular{font-weight:400}.weight-mid{font-weight:600}.weight-bold{font-weight:700}.width-full{width:100%}.width-half{width:50%}.width-quarter{width:25%}.width-third{width:33.3333333333%}@media screen and (min-width: 48rem){.md\\:align-start{align-items:flex-start}.md\\:align-center{align-items:center}.md\\:align-end{align-items:flex-end}.md\\:box-block{display:block}.md\\:box-flex{display:flex}.md\\:box-inline-flex{display:inline-flex}.md\\:box-hide{display:none}.md\\:space-between{justify-content:space-between}.md\\:space-around{justify-content:space-around}.md\\:space-before{justify-content:flex-end}.md\\:ta-right{text-align:right}.md\\:ta-left{text-align:left}.md\\:ta-center{text-align:center}.md\\:text-300{font-size:0.8rem}.md\\:text-500{font-size:1.25rem}.md\\:text-600{font-size:1.56rem}.md\\:text-700{font-size:1.95rem}.md\\:text-800{font-size:2.44rem}.md\\:text-900{font-size:3.05rem}.md\\:text-base{font-size:1rem}.md\\:text-max{font-size:4rem}.md\\:width-full{width:100%}.md\\:width-half{width:50%}.md\\:width-quarter{width:25%}.md\\:width-third{width:33.3333333333%}}:root{--color-primary:#173854;--color-primary-shade:#102538;--color-primary-glare:#22547c;--color-highlight:#a7dcfa;--color-light:#ffffff;--color-mid:#cccccc;--color-dark:#333333;--color-slate:#404040;--color-mode: \"light\";--color-bg: #ffffff;--color-bg-glare: #ffffff;--color-text: #333333;--color-text-glare: #333333;--color-selection-text: #ffffff;--color-selection-bg: #333333;--color-stroke: #cccccc;--color-action-bg: #173854;--color-action-text: #ffffff;--color-theme-primary: #173854;--color-theme-primary-glare: #22547c;--color-theme-highlight: #a7dcfa;--color-theme-highlight-block: #a7dcfa}@media(prefers-color-scheme: dark){:root{--color-mode: \"dark\"}:root:not([data-user-color-scheme]){--color-bg: #333333;--color-bg-glare: #404040;--color-text: #ffffff;--color-selection-text: #333333;--color-selection-bg: #ffffff;--color-stroke: #404040;--color-theme-primary: #8bb8df;--color-theme-primary-glare: #b3d2ea;--color-action-bg: var(--color-theme-primary-glare);--color-action-text: #333333;--color-theme-highlight: #a7dcfa;--color-theme-highlight-block: #404040;--color-theme-feature-text: #a7dcfa}}[data-user-color-scheme=dark]{--color-bg: #333333;--color-bg-glare: #404040;--color-text: #ffffff;--color-selection-text: #333333;--color-selection-bg: #ffffff;--color-stroke: #404040;--color-theme-primary: #8bb8df;--color-theme-primary-glare: #b3d2ea;--color-action-bg: var(--color-theme-primary-glare);--color-action-text: #333333;--color-theme-highlight: #a7dcfa;--color-theme-highlight-block: #404040;--color-theme-feature-text: #a7dcfa}body{color:var(--color-text);background-color:var(--color-bg)}main{overflow:hidden}::selection{color:var(--color-selection-text);background-color:var(--color-selection-bg)}@font-face{font-family:\"Lora\";font-style:normal;font-weight:700;font-display:swap;src:local(\"Lora Bold\"),local(\"Lora-Bold\"),url(\"/fonts/lora-v13-latin-700.woff\") format(\"woff\")}body{line-height:1.56;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'}h1,h2,h3{font-family:'Lora', serif}h1{font-size:1.95rem}h2{font-size:1.56rem}h3{font-size:1.25rem}@media(min-width: 48rem){h1{font-size:3.05rem}h2{font-size:2.44rem}h3{font-size:1.95rem}}html,body{height:100%}body{scroll-behavior:smooth;display:flex;flex-direction:column}main{flex:1 0 auto}main:focus{outline:none}hr{display:block;height:1px;max-width:500px;background:var(--color-stroke);border:none;margin:3.05rem auto}img{height:auto}:focus{outline:1px solid var(--color-theme-primary-glare);outline-offset:.25rem}.inner-wrapper{max-width:52rem;margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem}.skip-link:not(:focus),.post__footer h2 a,.visually-hidden{border:0;clip:rect(0 0 0 0);height:auto;margin:0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.wrapper{max-width:58rem;margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem}.button{display:inline-block;border:none;background-color:var(--color-action-bg);color:var(--color-action-text);padding:.8rem 1rem;line-height:1;margin:0;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none}.button:hover,.button:focus{filter:brightness(1.2)}.button:focus:hover{outline:none}.button:focus:not(:hover){outline:1px solid var(--color-action-text);outline-offset:-4px}.button:active{transform:scale(0.99)}form{max-width:35rem}form br{display:none}label{display:block;font-weight:600}input,select{line-height:1}input,textarea,select{background-color:#fff;font:inherit;border:1px solid var(--color-text);margin-top:.15rem;padding:.5rem 1rem;width:100%;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'}label input{margin:-0.25rem .5rem 0 0;width:auto;vertical-align:middle}fieldset{border:0;margin:0;padding:0}legend{display:block;font-weight:bold}.field-list{margin:0;padding:0;list-style:none}.field-list__field-group{margin-bottom:2rem;transition:transform 150ms}.field-list__field-group__description{display:block;margin-top:.3rem;font-size:.875rem;line-height:1.25}textarea+.field-list__field-group__description{margin-top:0}.field-list__field-group--confirm{font-weight:normal}.field-list__field-group__list{list-style:none;margin:0}.field-list__field-group__list label{font-weight:normal}.field-list__field-group__list .field-list__field-group__description{margin:0 0 0 1.35rem}.heading-permalink{color:var(--color-theme-primary-glare);font-size:.8em;margin-left:.3em;margin-top:.2em}@media(min-width: 48rem){.heading-permalink{font-size:.6em;margin-top:.4em}}.intro{background:var(--color-theme-highlight-block)}.intro__summary{--flow-space: 1.25rem;font-size:1.25rem}.intro__summary a{color:currentColor}.intro__summary a:hover{text-decoration:none}.intro__heading{max-width:40ex;color:var(--color-theme-feature-text)}.intro__heading--compact{max-width:20ex}.nav__list{overflow-x:auto;padding:.5rem;margin:-0.5rem;-webkit-overflow-scrolling:touch;-ms-overflow-style:none}.nav__list::-webkit-scrollbar{display:none}.nav__list>*+*{margin-left:1.25rem}.nav__item{padding:.8rem 0;flex-shrink:0}.nav__item a{color:currentColor;font-weight:600}.nav__item a:not(:hover){text-decoration:none}.pagination{flex-wrap:wrap}.pagination a{color:var(--color-theme-primary)}.pagination a:not(:hover){text-decoration:none}.pagination a[data-direction=backwards]{flex-direction:row-reverse}.pagination a[data-direction=backwards] svg{transform:rotate(-180deg)}.pagination a[data-direction=forwards]:only-child{margin-left:auto}.pagination svg{pointer-events:none}.post__body{--flow-space: 2.44rem}.post__body h2+*,.post__body h3+*{--flow-space: 1.25rem}.post__body h2,.post__body h3{position:relative;line-height:1.2}.post__body a{color:currentColor}.post__body a:hover{text-decoration:none}.post__body a:not([class]):hover{text-decoration:underline}.post__body code{font-size:1.2em;color:var(--color-theme-primary);font-weight:600;margin-left:.01ch;margin-right:.01ch}.post__body pre>code{margin-right:0;border:1px solid rgba(255,255,255,.1);overflow-x:auto;-webkit-overflow-scrolling:touch;color:var(--color-mid)}.post__body blockquote{border-left:.4rem solid var(--color-theme-primary-glare);margin-left:0;padding-left:1.25rem;font-style:italic;font-size:1.56rem}.post__body blockquote p{opacity:.85;padding:1.25rem 0}.post__body ol:not([class]),.post__body ul:not([class]){margin-left:2.44rem}.post__body ol:not([class]) li+li,.post__body ul:not([class]) li+li{margin-top:.8rem}.post__body figure,.post__body figure+*,.post__body pre>code,.post__body .video-player,.post__body .video-player+*,.post__body video{--flow-space: 4rem}.post__body figure,.post__body pre>code,.post__body .video-player,.post__body video{width:100vw;max-width:58rem;margin-left:50%;transform:translateX(-50%);position:relative}.post__body figure img,.post__body pre>code,.post__body .video-player{box-shadow:0 10px 30px rgba(0,0,0,.15)}.post__body figure img{position:relative;z-index:1}.post__body figcaption{font-size:.8em;font-style:italic;max-width:52rem;margin:.5rem auto 0 auto;padding:0 1.25rem}.post__body pre>code{display:block;background:var(--color-dark);padding:1.95rem;font-size:1.25rem}.post__footer{background:var(--color-theme-highlight)}.post__footer h2{flex-shrink:0;margin-right:1rem;color:var(--color-dark)}.post__footer a{background:var(--color-bg);padding:.4rem .6rem}.post-list__item{--flow-space: 1.25rem}.post-list__link,.post-list__link:visited{color:var(--color-theme-primary);text-decoration:none}.post-list__link:hover{text-decoration:underline}.post-list__tag{color:var(--color-dark);position:relative;display:inline-block;background:var(--color-theme-highlight);padding:.2rem .4rem .3rem .4rem;text-decoration:none;word-break:break-word;margin:.4rem .4rem;line-height:1.2;font-weight:600}.site-head__site-name{font-weight:700;text-decoration:none;color:var(--color-text)}.site-foot{background:var(--color-bg-glare);color:var(--color-text);border-top:1px solid var(--color-stroke)}.site-foot a{color:currentColor}.site-foot a:hover{text-decoration:none}.site-foot__credit{text-align:center}.skip-link:focus{display:inline-block;position:absolute;top:0;left:0;padding:.8rem 1.25rem 1rem 1.25rem;background-color:var(--color-action-bg);color:var(--color-action-text);line-height:1;text-decoration:none;font-weight:700}code[class*=language-],pre[class*=language-]{color:#f8f8f2;background:none;font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;text-align:left;word-spacing:normal;word-break:normal;word-wrap:normal;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#d4d0ab}.token.punctuation{color:#fefefe}.token.property,.token.tag,.token.constant,.token.symbol,.token.deleted{color:#ffa07a}.token.boolean,.token.number{color:#00e0e0}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#abe338}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string,.token.variable{color:#00e0e0}.token.atrule,.token.attr-value,.token.function{color:gold}.token.keyword{color:#00e0e0}.token.regex,.token.important{color:gold}.token.important,.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}@media screen and (-ms-high-contrast: active){code[class*=language-],pre[class*=language-]{color:windowText;background:window}:not(pre)>code[class*=language-],pre[class*=language-]{background:window}.token.important{background:highlight;color:window;font-weight:normal}.token.atrule,.token.attr-value,.token.function,.token.keyword,.token.operator,.token.selector{font-weight:bold}.token.attr-value,.token.comment,.token.doctype,.token.function,.token.keyword,.token.operator,.token.property,.token.string{color:highlight}.token.attr-value,.token.url{font-weight:normal}}.video-player{position:relative;padding-top:56.25%}.video-player>iframe{position:absolute;top:0;left:0;width:100%;height:100%}.post .video-player{padding-top:63%}@media(min-width: 48rem){.post .video-player{padding-top:66%}}/*# sourceMappingURL=global.css.map */\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["icons/arrow.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"1em\"\n  height=\"1em\"\n  viewBox=\"0 0 24 24\"\n  focusable=\"false\"\n  aria-hidden=\"true\"\n  fill=\"currentColor\"\n>\n  <path\n    d=\"M9.707 18.707l6-6a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L13.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414z\"\n  />\n</svg>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/archive.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/archive.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
;
return output;
})()
;
frame.set("introSummary", t_5, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_5);
}
if(frame.topLevel) {
context.addExport("introSummary", t_5);
}
output += "\n\n";
output += "\n";
var t_6;
t_6 = "All posts";
frame.set("postListHeading", t_6, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_6);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_6);
}
output += "\n";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts");
frame.set("postListItems", t_7, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_7);
}
if(frame.topLevel) {
context.addExport("postListItems", t_7);
}
output += "\n\n";
output += "\n";
var t_8;
t_8 = "All notes";
frame.set("notesListHeading", t_8, true);
if(frame.topLevel) {
context.setVariable("notesListHeading", t_8);
}
if(frame.topLevel) {
context.addExport("notesListHeading", t_8);
}
output += "\n";
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"notes");
frame.set("notesListItems", t_9, true);
if(frame.topLevel) {
context.setVariable("notesListItems", t_9);
}
if(frame.topLevel) {
context.addExport("notesListItems", t_9);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
output += t_10;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 14;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/archive.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/tags-list.njk", false, "layouts/archive.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
callback(null,t_16);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
callback(null,t_18);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/post-list.njk", false, "layouts/archive.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
callback(null,t_20);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
callback(null,t_22);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/notes-list.njk", false, "layouts/archive.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
callback(null,t_24);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
callback(null,t_26);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\" class=\"no-js\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"alternate\" type=\"application/rss+xml\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"title"), env.opts.autoescape);
output += "\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"url"), env.opts.autoescape);
output += "/feed.xml\" />\n  <link rel=\"icon\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"faviconPath"), env.opts.autoescape);
output += "\" type=\"image/png\" />\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/meta-info.njk", false, "layouts/base.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  \n  <script>document.documentElement.classList.remove('no-js');</script>\n  <style>";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("assets/css/global.css", false, "layouts/base.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "</style>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
output += "\n</head>\n<body>\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/site-head.njk", false, "layouts/base.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
output += t_15;
output += "\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/site-foot.njk", false, "layouts/base.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("foot"))(env, context, frame, runtime, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
output += t_21;
output += "\n  <script type=\"module\" src=\"/js/components/theme-toggle.js\" async defer></script>\n  <script>\n    if ('serviceWorker' in navigator) {\n      window.addEventListener('load', () => {\n        navigator.serviceWorker.register('/service-worker.js');\n      });\n    }\n  </script>\n  <script src=\"https://identity.netlify.com/v1/netlify-identity-widget.js\" defer></script>\n</body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = 12;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_foot(env, context, frame, runtime, cb) {
var lineno = 20;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_head: b_head,
b_content: b_content,
b_foot: b_foot,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/contact.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/contact.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/contact.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 pad-bottom-900 text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/contact-form.njk", false, "layouts/contact.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/home.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += "\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/social-media-links.njk", false, "layouts/home.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
});
return output;
})()
;
frame.set("introSummary", t_5, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_5);
}
if(frame.topLevel) {
context.addExport("introSummary", t_5);
}
output += "\n\n";
output += "\n";
var t_10;
t_10 = "Posts";
frame.set("postListHeading", t_10, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_10);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_10);
}
output += "\n";
var t_11;
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"featuredPosts");
frame.set("postListItems", t_11, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_11);
}
if(frame.topLevel) {
context.addExport("postListItems", t_11);
}
output += "\n\n";
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length") < runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts")),"length")) {
output += " \n  ";
var t_12;
t_12 = "all posts";
frame.set("paginationNextText", t_12, true);
if(frame.topLevel) {
context.setVariable("paginationNextText", t_12);
}
if(frame.topLevel) {
context.addExport("paginationNextText", t_12);
}
output += "\n  ";
var t_13;
t_13 = "/posts";
frame.set("paginationNextUrl", t_13, true);
if(frame.topLevel) {
context.setVariable("paginationNextUrl", t_13);
}
if(frame.topLevel) {
context.addExport("paginationNextUrl", t_13);
}
output += "\n";
;
}
output += "\n\n";
output += "\n";
var t_14;
t_14 = "Talks";
frame.set("featuredTalksHeading", t_14, true);
if(frame.topLevel) {
context.setVariable("featuredTalksHeading", t_14);
}
if(frame.topLevel) {
context.addExport("featuredTalksHeading", t_14);
}
output += "\n";
var t_15;
t_15 = "all talks";
frame.set("featuredTalksText", t_15, true);
if(frame.topLevel) {
context.setVariable("featuredTalksText", t_15);
}
if(frame.topLevel) {
context.addExport("featuredTalksText", t_15);
}
output += "\n";
var t_16;
t_16 = "/talks";
frame.set("featuredTalksUrl", t_16, true);
if(frame.topLevel) {
context.setVariable("featuredTalksUrl", t_16);
}
if(frame.topLevel) {
context.addExport("featuredTalksUrl", t_16);
}
output += "\n";
var t_17;
t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"featuredTalks");
frame.set("featuredTalksItems", t_17, true);
if(frame.topLevel) {
context.setVariable("featuredTalksItems", t_17);
}
if(frame.topLevel) {
context.addExport("featuredTalksItems", t_17);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 25;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/home.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
callback(null,t_20);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
callback(null,t_22);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/home-post-list.njk", false, "layouts/home.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
callback(null,t_24);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
callback(null,t_26);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/pagination.njk", false, "layouts/home.njk", false, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
callback(null,t_28);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
callback(null,t_30);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/talks-list.njk", false, "layouts/home.njk", false, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
callback(null,t_32);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
callback(null,t_34);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/page.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/page.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/page.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 pad-bottom-900 text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/post.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/post.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += "\n<p class=\"[ intro__meta ] [ text-500 leading-tight ]\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "date")) {
output += "\n    <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "\" class=\"dt-published\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "</time>\n  ";
;
}
output += "\n  <span>— ";
output += runtime.suppressValue((lineno = 9, colno = 35, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "helpers")),"getReadingTime"), "helpers[\"getReadingTime\"]", context, [runtime.contextOrFrameLookup(context, frame, "content")])), env.opts.autoescape);
output += " minute read</span>\n</p>\n";
;
return output;
})()
;
frame.set("introSummary", t_5, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_5);
}
if(frame.topLevel) {
context.addExport("introSummary", t_5);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 13;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/post.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 ";
output += runtime.suppressValue((!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")?"pad-bottom-900":""), env.opts.autoescape);
output += " text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")) {
output += "\n        <hr />\n        <aside class=\"[ post__body ] [ inner-wrapper ] [ pad-bottom-900 text-500 ]\">\n          ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/third-party-comments.njk", false, "layouts/post.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </aside>\n      ";
});
}
output += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "tags")) {
output += "\n        <footer class=\"[ post__footer ] [ pad-top-500 pad-bottom-500 ]\">\n          <div class=\"inner-wrapper\">\n            <div class=\"[ nav ] [ box-flex align-center ]\">\n              <h2 class=\"font-base text-600 weight-mid\">Filed under</h2>\n              <ul class=\"[ nav__list ] [ box-flex align-center pad-left-400 ] [ p-category ]\">\n                ";
frame = frame.push();
var t_18 = runtime.contextOrFrameLookup(context, frame, "tags");
if(t_18) {t_18 = runtime.fromIterator(t_18);
var t_17 = t_18.length;
for(var t_16=0; t_16 < t_18.length; t_16++) {
var t_19 = t_18[t_16];
frame.set("item", t_19);
frame.set("loop.index", t_16 + 1);
frame.set("loop.index0", t_16);
frame.set("loop.revindex", t_17 - t_16);
frame.set("loop.revindex0", t_17 - t_16 - 1);
frame.set("loop.first", t_16 === 0);
frame.set("loop.last", t_16 === t_17 - 1);
frame.set("loop.length", t_17);
output += "\n                  <li class=\"nav__item\">\n                    <a href=\"/tags/";
output += runtime.suppressValue(t_19, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_19, env.opts.autoescape);
output += "</a>\n                  </li>\n                ";
;
}
}
frame = frame.pop();
output += "\n              </ul>\n            </div>\n          </div>\n        </footer>\n      ";
;
}
output += "\n    </article>\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros/form.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
var macro_t_1 = runtime.makeMacro(
["text", "name"], 
[], 
function (l_text, l_name, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
frame.set("name", l_name);
var t_2 = "";t_2 += "\n  <label class=\"question__label\" for=\"field-";
t_2 += runtime.suppressValue(l_name, env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
t_2 += "</label>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("label");
context.setVariable("label", macro_t_1);
output += "\n\n";
var macro_t_3 = runtime.makeMacro(
["type", "name", "data"], 
[], 
function (l_type, l_name, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("type", l_type);
frame.set("name", l_name);
frame.set("data", l_data);
var t_4 = "";t_4 += "\n  <br>\n  <input class=\"question__field\"\n        type=\"";
t_4 += runtime.suppressValue(l_type, env.opts.autoescape);
t_4 += "\"\n        name=\"";
t_4 += runtime.suppressValue(l_name, env.opts.autoescape);
t_4 += "\"\n        id=\"field-";
t_4 += runtime.suppressValue(l_name, env.opts.autoescape);
t_4 += "\"\n        ";
if(runtime.memberLookup((l_data),"required")) {
t_4 += "required aria-required=\"true\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"placeholder")) {
t_4 += "placeholder=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"placeholder"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"pattern")) {
t_4 += "pattern=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"pattern"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"description")) {
t_4 += "aria-describedby=\"description-";
t_4 += runtime.suppressValue(l_name, env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"autocomplete")) {
t_4 += "autocomplete=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"autocomplete"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"autocorrect")) {
t_4 += "autocorrect=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"autocorrect"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"spellcheck")) {
t_4 += "spellcheck=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"spellcheck"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"autocapitalize")) {
t_4 += "autocapitalize=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"autocapitalize"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        >\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_4 += "\n    <br>\n    ";
t_4 += runtime.suppressValue((lineno = 25, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_4 += "\n  ";
;
}
t_4 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_4);
});
context.addExport("field");
context.setVariable("field", macro_t_3);
output += "\n\n";
var macro_t_5 = runtime.makeMacro(
["text", "name", "data"], 
[], 
function (l_text, l_name, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
frame.set("name", l_name);
frame.set("data", l_data);
var t_6 = "";t_6 += "\n  <label for=\"field-";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\" class=\"question--confirm\">\n    <input class=\"question__field question__field--confirm\"\n          type=\"checkbox\"\n          name=\"";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\"\n          id=\"field-";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\"\n          value=\"1\"\n          ";
if(runtime.memberLookup((l_data),"required")) {
t_6 += "required aria-required=\"true\"";
;
}
t_6 += "\n          ";
if(runtime.memberLookup((l_data),"description")) {
t_6 += "aria-describedby=\"description-";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\"";
;
}
t_6 += "\n          >\n    ";
t_6 += runtime.suppressValue(l_text, env.opts.autoescape);
t_6 += "\n  </label>\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_6 += "\n    <br>\n    ";
t_6 += runtime.suppressValue((lineno = 43, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_6 += "\n  ";
;
}
t_6 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_6);
});
context.addExport("confirm");
context.setVariable("confirm", macro_t_5);
output += "\n\n";
var macro_t_7 = runtime.makeMacro(
["name", "options", "data"], 
[], 
function (l_name, l_options, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("options", l_options);
frame.set("data", l_data);
var t_8 = "";t_8 += "\n  <br>\n  <select id=\"field-";
t_8 += runtime.suppressValue(l_name, env.opts.autoescape);
t_8 += "\"\n          name=\"";
t_8 += runtime.suppressValue(l_name, env.opts.autoescape);
t_8 += "\"\n          ";
if(runtime.memberLookup((l_data),"required")) {
t_8 += "required aria-required=\"true\"";
;
}
t_8 += "\n          ";
if(runtime.memberLookup((l_data),"multiple")) {
t_8 += "multiple";
;
}
t_8 += "\n          ";
if(runtime.memberLookup((l_data),"description")) {
t_8 += "aria-describedby=\"description-";
t_8 += runtime.suppressValue(l_name, env.opts.autoescape);
t_8 += "\"";
;
}
t_8 += "\n          >\n    ";
frame = frame.push();
var t_11 = runtime.memberLookup((l_data),"options_before");
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("opt", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
t_8 += "\n      ";
t_8 += runtime.suppressValue((lineno = 56, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "option"), "option", context, [t_12])), env.opts.autoescape);
t_8 += "\n    ";
;
}
}
frame = frame.pop();
t_8 += "\n    ";
frame = frame.push();
var t_15 = l_options;
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("opt", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
t_8 += "\n      ";
t_8 += runtime.suppressValue((lineno = 59, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "option"), "option", context, [t_16])), env.opts.autoescape);
t_8 += "\n    ";
;
}
}
frame = frame.pop();
t_8 += "\n    ";
frame = frame.push();
var t_19 = runtime.memberLookup((l_data),"options_after");
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("opt", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
t_8 += "\n      ";
t_8 += runtime.suppressValue((lineno = 62, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "option"), "option", context, [t_20])), env.opts.autoescape);
t_8 += "\n    ";
;
}
}
frame = frame.pop();
t_8 += "\n  </select>\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_8 += "\n    <br>\n    ";
t_8 += runtime.suppressValue((lineno = 67, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_8 += "\n  ";
;
}
t_8 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_8);
});
context.addExport("select");
context.setVariable("select", macro_t_7);
output += "\n\n";
var macro_t_21 = runtime.makeMacro(
["data"], 
[], 
function (l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("data", l_data);
var t_22 = "";t_22 += "\n  ";
if(runtime.memberLookup((l_data),"value")) {
t_22 += "\n    <option value=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((l_data),"value"), env.opts.autoescape);
t_22 += "\">";
t_22 += runtime.suppressValue(runtime.memberLookup((l_data),"label"), env.opts.autoescape);
t_22 += "</option>\n  ";
;
}
else {
t_22 += "\n    <option>";
t_22 += runtime.suppressValue(l_data, env.opts.autoescape);
t_22 += "</option>\n  ";
;
}
t_22 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_22);
});
context.addExport("option");
context.setVariable("option", macro_t_21);
output += "\n\n";
var macro_t_23 = runtime.makeMacro(
["name", "data"], 
[], 
function (l_name, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("data", l_data);
var t_24 = "";t_24 += "\n  <br>\n  <textarea id=\"field-";
t_24 += runtime.suppressValue(l_name, env.opts.autoescape);
t_24 += "\"\n            name=\"";
t_24 += runtime.suppressValue(l_name, env.opts.autoescape);
t_24 += "\"\n            ";
if(runtime.memberLookup((l_data),"rows")) {
t_24 += "rows=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"rows"), env.opts.autoescape);
t_24 += "\"";
;
}
else {
t_24 += "rows=\"5\"";
;
}
t_24 += "\n            cols=\"100\"\n            ";
if(runtime.memberLookup((l_data),"required")) {
t_24 += "required aria-required=\"true\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"autocorrect")) {
t_24 += "autocorrect=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"autocorrect"), env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"spellcheck")) {
t_24 += "spellcheck=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"spellcheck"), env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"autocapitalize")) {
t_24 += "autocapitalize=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"autocapitalize"), env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"description")) {
t_24 += "aria-describedby=\"description-";
t_24 += runtime.suppressValue(l_name, env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ></textarea>\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_24 += "\n    ";
t_24 += runtime.suppressValue((lineno = 92, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_24 += "\n  ";
;
}
t_24 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_24);
});
context.addExport("textarea");
context.setVariable("textarea", macro_t_23);
output += "\n\n";
var macro_t_25 = runtime.makeMacro(
["label", "name", "options", "data"], 
[], 
function (l_label, l_name, l_options, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("label", l_label);
frame.set("name", l_name);
frame.set("options", l_options);
frame.set("data", l_data);
var t_26 = "";t_26 += "\n  <fieldset>\n    <legend\n      ";
if(runtime.memberLookup((l_data),"description")) {
t_26 += "aria-describedby=\"description-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "\"";
;
}
t_26 += "\n      >";
t_26 += runtime.suppressValue(l_label, env.opts.autoescape);
t_26 += "</legend>\n    <ul class=\"field-list__field-group__list\">\n      ";
frame = frame.push();
var t_29 = l_options;
if(t_29) {t_29 = runtime.fromIterator(t_29);
var t_28 = t_29.length;
for(var t_27=0; t_27 < t_29.length; t_27++) {
var t_30 = t_29[t_27];
frame.set("option", t_30);
frame.set("loop.index", t_27 + 1);
frame.set("loop.index0", t_27);
frame.set("loop.revindex", t_28 - t_27);
frame.set("loop.revindex0", t_28 - t_27 - 1);
frame.set("loop.first", t_27 === 0);
frame.set("loop.last", t_27 === t_28 - 1);
frame.set("loop.length", t_28);
t_26 += "\n        <li>\n          ";
if(runtime.memberLookup((t_30),"value")) {
t_26 += "\n            <label for=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\">\n              <input type=\"radio\"\n                    name=\"";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "\"\n                    id=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\"\n                    value=\"";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\"\n                    ";
if(runtime.memberLookup((t_30),"note")) {
t_26 += "aria-describedby=\"description-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\"";
;
}
t_26 += "\n                    >";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"label"), env.opts.autoescape);
t_26 += "</label>\n          ";
;
}
else {
t_26 += "\n            <label for=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "\">\n              <input type=\"radio\"\n                    name=\"";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "\"\n                    id=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "\"\n                    value=\"";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "\"\n                    >";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "</label>\n          ";
;
}
t_26 += "\n          ";
if(runtime.memberLookup((t_30),"note")) {
t_26 += "\n            <br>\n            ";
t_26 += runtime.suppressValue((lineno = 122, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [(l_name + "-" + runtime.memberLookup((t_30),"value")),runtime.memberLookup((t_30),"note")])), env.opts.autoescape);
t_26 += "\n          ";
;
}
t_26 += "\n        </li>\n      ";
;
}
}
frame = frame.pop();
t_26 += "\n    </ul>\n    ";
if(runtime.memberLookup((l_data),"description")) {
t_26 += "\n      ";
t_26 += runtime.suppressValue((lineno = 128, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_26 += "\n    ";
;
}
t_26 += "\n  </fieldset>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_26);
});
context.addExport("radios");
context.setVariable("radios", macro_t_25);
output += "\n\n";
var macro_t_31 = runtime.makeMacro(
["label", "name", "options", "data"], 
[], 
function (l_label, l_name, l_options, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("label", l_label);
frame.set("name", l_name);
frame.set("options", l_options);
frame.set("data", l_data);
var t_32 = "";t_32 += "\n  <fieldset>\n    <legend\n      ";
if(runtime.memberLookup((l_data),"description")) {
t_32 += "aria-describedby=\"description-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "\"";
;
}
t_32 += "\n      >";
t_32 += runtime.suppressValue(l_label, env.opts.autoescape);
t_32 += "</legend>\n    <ul class=\"field-list__field-group__list\">\n      ";
frame = frame.push();
var t_35 = l_options;
if(t_35) {t_35 = runtime.fromIterator(t_35);
var t_34 = t_35.length;
for(var t_33=0; t_33 < t_35.length; t_33++) {
var t_36 = t_35[t_33];
frame.set("option", t_36);
frame.set("loop.index", t_33 + 1);
frame.set("loop.index0", t_33);
frame.set("loop.revindex", t_34 - t_33);
frame.set("loop.revindex0", t_34 - t_33 - 1);
frame.set("loop.first", t_33 === 0);
frame.set("loop.last", t_33 === t_34 - 1);
frame.set("loop.length", t_34);
t_32 += "\n        <li>\n          ";
if(runtime.memberLookup((t_36),"value")) {
t_32 += "\n            <label for=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\">\n              <input type=\"checkbox\"\n                    name=\"";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "[]\"\n                    id=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\"\n                    value=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\"\n                    ";
if(runtime.memberLookup((t_36),"note")) {
t_32 += "aria-describedby=\"description-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\"";
;
}
t_32 += "\n                    >";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"label"), env.opts.autoescape);
t_32 += "</label>\n          ";
;
}
else {
t_32 += "\n            <label for=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "\">\n              <input type=\"checkbox\"\n                    name=\"";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "[]\"\n                    id=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "\"\n                    value=\"";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "\"\n                    >";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "</label>\n          ";
;
}
t_32 += "\n          ";
if(runtime.memberLookup((t_36),"note")) {
t_32 += "\n            <br>\n            ";
t_32 += runtime.suppressValue((lineno = 159, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [(l_name + "-" + runtime.memberLookup((t_36),"value")),runtime.memberLookup((t_36),"note")])), env.opts.autoescape);
t_32 += "\n          ";
;
}
t_32 += "\n        </li>\n      ";
;
}
}
frame = frame.pop();
t_32 += "\n    </ul>\n    ";
if(runtime.memberLookup((l_data),"description")) {
t_32 += "\n      ";
t_32 += runtime.suppressValue((lineno = 165, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_32 += "\n    ";
;
}
t_32 += "\n  </fieldset>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_32);
});
context.addExport("checkboxes");
context.setVariable("checkboxes", macro_t_31);
output += "\n\n";
var macro_t_37 = runtime.makeMacro(
["id", "html"], 
[], 
function (l_id, l_html, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("id", l_id);
frame.set("html", l_html);
var t_38 = "";t_38 += "\n  <em class=\"[ field-list__field-group__description ]\" id=\"description-";
t_38 += runtime.suppressValue(l_id, env.opts.autoescape);
t_38 += "\">";
t_38 += runtime.suppressValue(env.getFilter("safe").call(context, l_html), env.opts.autoescape);
t_38 += "</em>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_38);
});
context.addExport("description");
context.setVariable("description", macro_t_37);
output += "\n\n";
var macro_t_39 = runtime.makeMacro(
["name", "value"], 
[], 
function (l_name, l_value, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("value", l_value);
var t_40 = "";t_40 += "\n  <input type=\"hidden\" name=\"";
t_40 += runtime.suppressValue(l_name, env.opts.autoescape);
t_40 += "\" id=\"field-";
t_40 += runtime.suppressValue(l_name, env.opts.autoescape);
t_40 += "\" value=\"";
t_40 += runtime.suppressValue(l_value, env.opts.autoescape);
t_40 += "\">\n";
;
frame = callerFrame;
return new runtime.SafeString(t_40);
});
context.addExport("hidden_field");
context.setVariable("hidden_field", macro_t_39);
output += "\n\n";
var macro_t_41 = runtime.makeMacro(
["text"], 
[], 
function (l_text, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
var t_42 = "";t_42 += "\n  <button type=\"submit\" class=\"[ button ] [ font-base text-base weight-bold ]\">";
t_42 += runtime.suppressValue(l_text, env.opts.autoescape);
t_42 += "</button>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_42);
});
context.addExport("button");
context.setVariable("button", macro_t_41);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros/site.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/contact-form.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("macros/form.njk", false, "partials/components/contact-form.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "label")) {
var t_4 = t_1.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_4);
if(Object.prototype.hasOwnProperty.call(t_1, "field")) {
var t_5 = t_1.field;
} else {
cb(new Error("cannot import 'field'")); return;
}
context.setVariable("field", t_5);
if(Object.prototype.hasOwnProperty.call(t_1, "textarea")) {
var t_6 = t_1.textarea;
} else {
cb(new Error("cannot import 'textarea'")); return;
}
context.setVariable("textarea", t_6);
if(Object.prototype.hasOwnProperty.call(t_1, "button")) {
var t_7 = t_1.button;
} else {
cb(new Error("cannot import 'button'")); return;
}
context.setVariable("button", t_7);
output += "\n\n<form name=\"contact\" method=\"POST\" data-netlify=\"true\" action=\"/thank-you\" netlify-honeypot=\"bot-field\">\n  <ol class=\"[ field-list ]\">\n    <li class=\"[ field-list__field-group ]\">\n      ";
output += runtime.suppressValue((lineno = 5, colno = 14, runtime.callWrap(t_4, "label", context, ["What’s your name?","name"])), env.opts.autoescape);
output += "\n      ";
output += runtime.suppressValue((lineno = 6, colno = 14, runtime.callWrap(t_5, "field", context, ["text","name",{"required": true,"placeholder": "Katherine Johnson","autocomplete": "name","autocorrect": "off","autocapitalize": "off"}])), env.opts.autoescape);
output += "\n    </li>\n    <li class=\"[ field-list__field-group ]\">\n      ";
output += runtime.suppressValue((lineno = 9, colno = 14, runtime.callWrap(t_4, "label", context, ["What’s your email address?","email"])), env.opts.autoescape);
output += "\n      ";
output += runtime.suppressValue((lineno = 10, colno = 14, runtime.callWrap(t_5, "field", context, ["email","email",{"required": true,"placeholder": "katherine@johnson.tld","autocomplete": "email"}])), env.opts.autoescape);
output += "\n    </li>\n    <li class=\"[ field-list__field-group ]\">\n      ";
output += runtime.suppressValue((lineno = 13, colno = 14, runtime.callWrap(t_4, "label", context, ["What’s on your mind?","message"])), env.opts.autoescape);
output += "\n      ";
output += runtime.suppressValue((lineno = 14, colno = 17, runtime.callWrap(t_6, "textarea", context, ["message",{"required": true,"autocapitalize": "sentences","spellcheck": "true"}])), env.opts.autoescape);
output += "\n    </li>\n    <li hidden>\n      <label>Don’t fill this out if you're human: <input name=\"bot-field\" /></label>\n    </li>\n  </ol>\n  ";
output += runtime.suppressValue((lineno = 20, colno = 11, runtime.callWrap(t_7, "button", context, ["Send message"])), env.opts.autoescape);
output += "\n</form>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/home-post-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length")) {
output += "\n  <section class=\"[ post-list ] [ pad-top-700 gap-bottom-900 ]\">\n    <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n      <h2 class=\"[ post-list__heading ] [ text-700 md:text-800 ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "postListHeading"), env.opts.autoescape);
output += "</h2>\n      <ol class=\"[ post-list__items ] [ sf-flow ] [ pad-top-300 ]\" reversed>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "postListItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          ";
if((lineno = 6, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"date")),"getTime"), "item[\"date\"][\"getTime\"]", context, [])) <= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "global")),"now")) {
output += "\n            <li class=\"post-list__item\">\n              <h3 class=\"font-base leading-tight text-500 weight-mid\">\n                ";
output += "\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/home-post-list.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"override_url")) {
output += "\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"override_url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n                ";
;
}
else {
output += "\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n                ";
;
}
output += "\n              </h3>\n            </li>\n          ";
});
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ol>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/intro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header class=\"[ intro ] [ pad-top-900 pad-bottom-max ]\">\n  <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n    <h1 class=\"[ intro__heading";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") === "/"?" intro__heading--compact":""), env.opts.autoescape);
output += " ] [ text-800 md:text-900 leading-tight ] [ p-name ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "introHeading"), env.opts.autoescape);
output += "</h1>\n    ";
if(runtime.contextOrFrameLookup(context, frame, "introSummary")) {
output += "\n      <div class=\"[ intro__summary ] [ sf-flow ] [ leading-mid measure-short ]\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "introSummary")), env.opts.autoescape);
output += "</div>\n    ";
;
}
output += "\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/nav.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items")) {
output += "\n  <nav class=\"nav\" aria-label=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ariaLabel"), env.opts.autoescape);
output += "\">\n    <ul class=\"[ nav__list ] [ box-flex align-center md:space-before ]\">\n      ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        ";
var t_5;
t_5 = "";
frame.set("relAttribute", t_5, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_5);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_5);
}
output += "\n        ";
var t_6;
t_6 = "";
frame.set("currentAttribute", t_6, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_6);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_6);
}
output += "\n\n        ";
if(runtime.memberLookup((t_4),"rel")) {
output += "\n          ";
var t_7;
t_7 = " rel=\"" + runtime.memberLookup((t_4),"rel") + "\"";
frame.set("relAttribute", t_7, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_7);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_7);
}
output += "\n        ";
;
}
output += "\n\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == runtime.memberLookup((t_4),"url")) {
output += "\n          ";
var t_8;
t_8 = " aria-current=\"page\"";
frame.set("currentAttribute", t_8, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_8);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_8);
}
output += "\n        ";
;
}
output += "\n\n        <li class=\"nav__item\">\n          <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "relAttribute")), env.opts.autoescape);
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "currentAttribute")), env.opts.autoescape);
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</a>\n        </li>\n      ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n  </nav>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/notes-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "notesListItems")),"length")) {
output += "\n  <section class=\"[ post-list ] [ pad-top-700 gap-bottom-900 ]\">\n    <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n      <h2 class=\"[ post-list__heading ] [ text-600 md:text-700 ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "notesListHeading"), env.opts.autoescape);
output += "</h2>\n      <ol class=\"[ post-list__items ] [ sf-flow ] [ pad-top-300 ]\" reversed>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "notesListItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          ";
if((lineno = 6, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"date")),"getTime"), "item[\"date\"][\"getTime\"]", context, [])) <= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "global")),"now")) {
output += "\n            <li class=\"post-list__item\">\n              <h3 class=\"font-base leading-tight text-500 weight-mid\">\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n              </h3>\n            </li>\n          ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ol>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/pagination.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "leading-tight text-500 weight-mid box-inline-flex align-center pad-bottom-300";
frame.set("paginationLinkTokens", t_1, true);
if(frame.topLevel) {
context.setVariable("paginationLinkTokens", t_1);
}
if(frame.topLevel) {
context.addExport("paginationLinkTokens", t_1);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl") || runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n  <div class=\"inner-wrapper\">\n    <footer class=\"[ pagination ] [ pad-bottom-900 ]\">\n      <nav class=\"[ pagination__nav ] [ box-flex space-between align-center ]\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"backwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationPrevText")?runtime.contextOrFrameLookup(context, frame, "paginationPrevText"):"Previous"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"forwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationNextText")?runtime.contextOrFrameLookup(context, frame, "paginationNextText"):"Next"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n      </nav>\n    </footer>\n  </div>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/post-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length")) {
output += "\n  <section class=\"[ post-list ] [ pad-top-700 gap-bottom-900 ]\">\n    <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n      <h2 class=\"[ post-list__heading ] [ text-600 md:text-700 ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "postListHeading"), env.opts.autoescape);
output += "</h2>\n      <ol class=\"[ post-list__items ] [ sf-flow ] [ pad-top-300 ]\" reversed>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "postListItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          ";
if((lineno = 6, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"date")),"getTime"), "item[\"date\"][\"getTime\"]", context, [])) <= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "global")),"now")) {
output += "\n            <li class=\"post-list__item\">\n              <h3 class=\"font-base leading-tight text-500 weight-mid\">\n                <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "</time> - \n                \n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"override_url")) {
output += "\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"override_url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n                ";
;
}
else {
output += "\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n                ";
;
}
output += "\n              </h3>\n            </li>\n          ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ol>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/social-media-links.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<p>\n    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"socialMedia")),"github"), env.opts.autoescape);
output += "\">GitHub</a> |\n    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"socialMedia")),"linkedin"), env.opts.autoescape);
output += "\">LinkedIn</a> |\n    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"socialMedia")),"twitter"), env.opts.autoescape);
output += "\">Twitter</a> |\n    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"socialMedia")),"medium"), env.opts.autoescape);
output += "\">Medium</a> |\n    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"socialMedia")),"dev"), env.opts.autoescape);
output += "\">DEV</a>\n</p>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/tags-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length")) {
output += "\n  <section class=\"[ post-list ] [ pad-top-700 gap-bottom-300 ]\">\n    <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n      <h3 class=\"[ post-list__heading ] [ text-600 md:text-700 ]\">Tags</h3>\n        <p>\n            ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"tagList");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("tag", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n            <a href=\"/tags/";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\" class=\"post-list__tag\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</a>\n            ";
;
}
}
frame = frame.pop();
output += "\n        </p>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/talks-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<section class=\"[ post-list ] [ pad-top-700 gap-bottom-900 ]\">\n<div class=\"[ inner-wrapper ] [ sf-flow ]\">\n    <h2 class=\"[ post-list__heading ] [ text-700 md:text-800 ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "featuredTalksHeading"), env.opts.autoescape);
output += "</h2>\n    <ol class=\"[ post-list__items ] [ sf-flow ] [ pad-top-300 ]\" reversed>\n    ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "featured_talks")),"items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        ";
output += "\n        <li class=\"post-list__item\">\n            <h3 class=\"font-base leading-tight text-500 weight-mid\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "\n            </h3>\n            <p class=\"text-400 gap-top-300 weight-mid\">\n                ";
output += "\n                <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "</time> |\n                ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"conf"), env.opts.autoescape);
output += " |\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"video"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">Video</a> |\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"slides"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">Slides</a>\n            </p>\n        </li>\n        ";
output += "\n    ";
;
}
}
frame = frame.pop();
output += "\n    </ol>\n</div>\n</section>\n\n";
var t_5;
t_5 = "leading-tight text-500 weight-mid box-inline-flex align-center pad-bottom-300";
frame.set("featuredTalksLinkTokens", t_5, true);
if(frame.topLevel) {
context.setVariable("featuredTalksLinkTokens", t_5);
}
if(frame.topLevel) {
context.addExport("featuredTalksLinkTokens", t_5);
}
output += "\n\n<div class=\"inner-wrapper\">\n<footer class=\"[ pagination ] [ pad-bottom-900 ]\">\n    <nav class=\"[ pagination__nav ] [ box-flex space-between align-center ]\">\n    ";
if(runtime.contextOrFrameLookup(context, frame, "featuredTalksUrl")) {
output += "\n        <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "featuredTalksUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "featuredTalksLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"forwards\">\n        <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "featuredTalksText")?runtime.contextOrFrameLookup(context, frame, "featuredTalksText"):"Next"), env.opts.autoescape);
output += "</span>\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/talks-list.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </a>\n    ";
});
}
output += "\n    </nav>\n</footer>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/google-analytics.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"googleAnalytics")),"trackingId"), env.opts.autoescape);
output += "\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', '";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"googleAnalytics")),"trackingId"), env.opts.autoescape);
output += "');\n</script>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/meta-info.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "title") + " | " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("pageTitle", t_1, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_1);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_1);
}
output += "\n";
var t_2;
t_2 = "";
frame.set("pageDesc", t_2, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_2);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_2);
}
output += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("siteTitle", t_3, true);
if(frame.topLevel) {
context.setVariable("siteTitle", t_3);
}
if(frame.topLevel) {
context.addExport("siteTitle", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"url") + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url");
frame.set("currentUrl", t_4, true);
if(frame.topLevel) {
context.setVariable("currentUrl", t_4);
}
if(frame.topLevel) {
context.addExport("currentUrl", t_4);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaTitle")) {
output += "\n  ";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "metaTitle");
frame.set("pageTitle", t_5, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_5);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_5);
}
output += "\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  ";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "metaDesc");
frame.set("pageDesc", t_6, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_6);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_6);
}
output += "\n";
;
}
output += "\n\n<title>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "</title>\n<link rel=\"canonical\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n<meta property=\"og:site_name\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "siteTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:title\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:type\" content=\"website\" />\n<meta property=\"og:url\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle")) {
output += "\n  <meta name=\"twitter:creator\" content=\"@";
output += runtime.suppressValue(env.getFilter("replace").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle"),"@",""), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  <meta name=\"description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "socialImage")) {
output += "  \n  <meta property=\"og:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer")) {
output += "\n  <meta name=\"monetization\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-foot.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<footer role=\"contentinfo\" class=\"[ site-foot ] [ pad-top-700 pad-bottom-900 ]\">\n  <div class=\"wrapper\">\n    <div class=\"[ site-foot__inner ] [ md:box-flex space-between align-start ]\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"shortDesc")) {
output += "\n        <div>\n          <article class=\"[ site-foot__details ] [ sf-flow measure-compact ]\">\n            <h2 class=\"font-base text-600\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "</h2>\n            ";
output += runtime.suppressValue(env.getFilter("safe").call(context, env.getFilter("markdownFilter").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"shortDesc"))), env.opts.autoescape);
output += "\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/social-media-links.njk", false, "partials/global/site-foot.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </article>\n        </div>\n      ";
});
}
output += "\n      <div>\n        ";
var t_5;
t_5 = "footer navigation";
frame.set("ariaLabel", t_5, true);
if(frame.topLevel) {
context.setVariable("ariaLabel", t_5);
}
if(frame.topLevel) {
context.addExport("ariaLabel", t_5);
}
output += "\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/global/site-foot.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        <theme-toggle></theme-toggle>\n      </div>\n    </div>\n    <p class=\"[ site-foot__credit ] [ pad-top-900 ]\">\n        👩🏾‍💻 <a href=\"https://github.com/isabelcosta/isabelcosta.github.io\" rel=\"external\">Source code on GitHub</a> and <a href=\"/credits\" rel=\"external\">Credits</a>.\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"showThemeCredit")) {
output += "\n        Powered by the <a href=\"https://hylia.website\" rel=\"external\">Hylia Eleventy Starter Kit v";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pkg")),"version"), env.opts.autoescape);
output += "</a>.\n      ";
;
}
output += "\n    </p>\n  </div>\n</footer>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-head.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<a class=\"skip-link\" href=\"#main-content\">Skip to content</a>\n<header role=\"banner\" class=\"[ site-head ] [ pad-top-700 pad-bottom-700 \">\n  <div class=\"wrapper\">\n    <div class=\"[ site-head__inner ] [ md:box-flex space-between align-center ]\">\n      <a href=\"/\" class=\"[ site-head__site-name ] [ leading-tight ]\">\n        <span class=\"visually-hidden\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += " - Home</span>\n        <span class=\"[ site-head__site-name ] [ text-600 ]\" aria-hidden=\"true\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "</span>\n      </a>\n      ";
var t_1;
t_1 = "navigation";
frame.set("ariaLabel", t_1, true);
if(frame.topLevel) {
context.setVariable("ariaLabel", t_1);
}
if(frame.topLevel) {
context.addExport("ariaLabel", t_1);
}
output += "\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/global/site-head.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </div>\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/third-party-comments.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!-- ADD YOUR THIRD PARTY COMMENTS CODE HERE -->\n<!-- COMMENTO EXAMPLE \n<div id=\"commento\"></div>\n<script defer\n  src=\"https://cdn.commento.io/js/commento.js\">\n</script>\n-->\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

