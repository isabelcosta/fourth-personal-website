---
title: Ficheiros base num projeto Open Source
date: '2020-11-07'
featured: true
tags:
  - portugues
  - open-source
crossposts:
  medium: https://isabelcmdcosta.medium.com/ficheiros-base-num-projeto-open-source-f034823b56a9
  devto: https://dev.to/isabelcmdcosta/ficheiros-base-num-projeto-open-source-488n
---

Um projecto Open Source costuma ter uma base de ficheiros, que permite colaboradores perceber como devem interagir com o projecto e quais as expectativas de quem mantém o projecto (maintainer). Estes são os ficheiros base que projetos open source costumam ter.

## Licença

A Licença de um projeto open source é importante para os colaboradores saberem em que condições podem usar o projeto. No que diz respeito ao tipo de licença que se deve escolher, isso depende do projeto. Eu sei que há umas licenças mais permissivas que outras. Há licenças que permite a modificação e reutilização, etc, desde que o crédito seja devidamente atribuído aos criadores do projeto.

Este ficheiro costuma estar na raiz do projeto. E normalmente tem o seguinte nome: `LICENSE.md` ou `LICENSE.txt`.

Há um website que explica diferentes tipos de licenças - [choosealicense.com](https://choosealicense.com/). Aqui podes tentar perceber qual o que se adequa melhor ao teu projeto open source.

## Código de conduta

É muito importante ter um código de conduta num projeto open source. Isto permite aos colaboradores saberem que tipo de conduta é a adequada e a que não é aceitável na comunidade a volta de um projeto de modo a manter o conjunto de interações, na comunidade, segura e amigável para todos. Este ficheiro, também deve conter informações de como reportar violações deste código de conduta por parte de membros da comunidade, para que o ou a maintainer possa tomar as devidas ações.

Se quiseres saber de exemplos de código de conduta, podes encontrar um bom exemplo, já adotado por vários projetos, em [www.contributor-covenant.org](https://www.contributor-covenant.org/). Este modelo de código de conduta tem traduções em várias linguas, incluindo [versão em português](https://www.contributor-covenant.org/pt/version/1/4/code-of-conduct/).

## README.md

O `README` é o ponto de partida de um colaborador num projeto Open Source. É neste ficheiro que se espera aprender mais sobre o projeto, como a sua missão e descrição, instruções para ter o projeto a funcionar, etc... Por isso é super importante que haja informação relevante para colaboradores sobre o projeto e links para o resto da documentação. O formato e o conteúdo deste ficheiro pode variar de projeto para projeto, o que interessa é que novos potenciais colaboradores, encontrem informação necessária para explorar mais sobre o projeto. Há projetos em que o `README` representa a maior parte do projeto em si, por exemplo se o repositório for apenas conteúdo informativo como awesome lists (ex.: [vinta/awesome-python](https://github.com/vinta/awesome-python) no GitHub). Este ficheiro, encontra-se na raiz do projeto. Por vezes, podem haver outros tipos de `README` presentes em pastas do repositório, que podem explicar em detalhe informações relevantes sobre o conteúdo específico da pasta.

## Guia de contribuição

O guia de contribuição, `CONTRIBUTING.md`, ajuda colaboradores a perceber o tipo de e os passos para uma contribuição bem sucedida. Os passos de contribuição para um projeto podem diferir de projeto para projeto. Na comunidade onde estou, [AnitaB.org Open Source](https://github.com/anitab-org), nós pedimos aos colaboradores para criar uma _issue_ antes de submeter uma pull request (caso a issue não exista). Isto pode ser útil para nós que por vezes temos muitas contribuições, e podemos assim validar rapidamente _Pull Requests_ que são spam ou inválidas, e fechá-las. No entanto, já contribui para projetos, como na [minha primeira contribuição para Open Source](/posts/my-first-open-source-contribution), no qual podia simplesmente criar PRs com as minhas sugestões de melhoria do projeto, sem necessidade de criar uma issue antes. Como _maintainer_, é neste ficheiro que se deve definir as expectativas que temos para com e dos colaboradores.

Dependendo do projeto, podes encontrar este ficheiro na raiz do projeto, ou em pastas específicas (exemplos de pastas são `.github` no GitHub, `.gitlab` no GitLab ou docs).

## Modelos de Issue e PRs

Modelos de _issues_ e de _Pull Requests_ (PRs) pode ser útil para fazer com que haja consistência nas descrições das mesmas. Estes ficheiros, servem de exemplo e são usados no ato de criação das mesmas. No GitHub e no GitLab podes tê-las numas pastas especificas `.github` ou `.gitlab`, respectivamente, para as issues e PRs serem automaticamente preenchidas com os modelos, que depois os colaboradores apenas terão de editar. Como _maintainer_, isto será útil para que colaboradores prestem especial atenção às expectativas dos maintainers para contribuições. Nestes modelos podes ter uma lista de pré-requisitos de uma contribuição, que pode facilitar o trabalho de triagem das _issues_ e PRs (exemplo: link para documentação regras de estilo de código, secção para descrever testes manuais feitos para uma nova funcionalidade adicionada, seção para incluir imagens tiradas das modificações a interface de utilizador como ecrã da aplicação, etc...).

Se quiseres um exemplo de modelos de issues, um dos projectos que mantenho tem [diferentes tipos de modelos para issues](https://github.com/anitab-org/mentorship-backend/tree/develop/.github/ISSUE_TEMPLATE) e exemplo de [modelo de descrição de PRs](https://github.com/anitab-org/mentorship-backend/blob/develop/.github/PULL_REQUEST_TEMPLATE.md). Também podes encontrar diferentes modelos neste repositorio - [devspace/awesome-github-templates](https://github.com/devspace/awesome-github-templates).

## Descrição e Tópicos

Descrição e Tópicos não são representados em forma de ficheiros, mas são igualmente importantes para a base de um projeto open source. Estes no GitHub, como dois campos que podes preencher sobre um repositório. Ambos os campos são das primeiras informações que um colaborador pode ver sobre o projeto. Este aparece quando o projeto é listado, sem precisarmos de estar na página do repositório. Por isso uma boa descrição e tópicos relevantes podem ser a diferença entre um colaborador decidir ver mais sobre o projeto ou não. Isto também se aplica a tópicos.
Como _developer_ de uma certa tech stack, eu posso pesquisar projectos que usam uma _tech stack_ específica. Mesmo não sendo developer, posso querer encontrar projetos de impacto social, e pesquisar esse tópico específico. Isto ajuda a um colaborador ter uma ideia de um projeto, antes de ir a página do projeto e também perceber se é algo para o qual quer contribuir.

---

Espero que isto te ajude se estiveres a começar um projeto ou a melhorá-lo para conseguires ter um projeto mais atrativo para novos colaboradores.
