<p align="center">
   <img src="./public/logo.png" alt="Move It" width="300"/>
</p>

<p align="center">
 <a href="#projeto">Projeto</a> •
 <a href="#tecnologias">Tecnologias Utilizadas</a> • 
 <a href="#execucao">Como Executar</a> • 
 <a href="#documentacao">Documentação</a> • 
 <a href="#construcao">Em Construção</a> •
 <a href="#licenca">Licença</a> •
 <a href="#autor">Autor</a> •
 <a href="#contato">Contato</a> 
</p>

--------------------------- 

<br>

# :fire: <Strong> Obrigado por visualizar este repositório </Strong> <img src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif" width="28px" alt="hi">

<p align="justify"> Primeiramente, olá me chamo Gabriel Kenji Poli Ozaki, sou um estudante de Ciência da Computação e estou querendo atuar na área de Desenvolvimento Web como Desenvolvedor Front-end. </p>

<p align="justify"> Para uma descrição melhor sobre minha pessoa, acesse o README em meu perfil do GITHUB ou acesse meu LinkedIn. Nele contém minha história, tecnologias nas quais já programei e ambições pessoais. </p>

## :computer: <strong id="projeto">Sobre o Projeto </strong>

<img src="https://github.com/rocketseat-education/nlw-05-reactjs/blob/main/.github/podcastr.png?raw=true"></img>

<p align="justify">Podcastr é um app voltado à exibição e reprodução de novos e antigos episódios podcast. Permitindo que o usuário tenho um acesso único a listagem dos conteúdos do podcast, através desse Web site.</p>

<p align="justify"> Você pode visualizar o layout do projeto através <a href="https://www.figma.com/file/UwFEntsHpHYJlHNQAQr4gA/Podcastr/duplicate">desse link</a>. É necessário ter conta no <a href="https://www.figma.com/">Figma</a> para acessá-lo </p>

<p align="justify">Essa aplicação Podcastr foi desenvolvida, através do evento NLW#5 na Trilha de ReactJS, oferecida pela empresa Rocketseat e mentoreada pelo Diego Fernandes.</p>

<span> #missaoespacial | #embuscadoproximonivel | #astronautas | #universoinfinito | #missaocumprida </span>

## :rocket: <Strong id="tecnologias"> Tecnologias Utilizadas </Strong>

<p align="justify"> Este projeto foi desenvolvido utilizando as seguintes tecnologias: </p>

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](https://reactjs.org/)  [![Typescript Badge](https://img.shields.io/badge/-Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)](https://www.typescriptlang.org/)  [![Next JS](https://img.shields.io/badge/Nextjs-blueviolet.svg?style=for-the-badge&amp;logo=Next.js&amp;labelColor=000000&amp;logoWidth=20")](https://nextjs.org/)

## :runner: <strong id="execucao"> Como executar o projeto </strong>

[![Yarn Badge](https://img.shields.io/badge/yarn-1.22.5-brightgreen)](https://classic.yarnpkg.com/en/docs/install/#windows-stable) [![NPM Badge](https://img.shields.io/badge/npm-6.14.11-brightgreen)](https://nodejs.org/en/download/)

```bash
# Fazer o clone do Repositorio.
>> Git Clone: https://github.com/WD-GabrielKenji/NLW5-TrilhaReactJS-Podcastr
```

```bash
# Se utiliza YARN como ferramenta para auxiliar as instalações dos pacotes dentro do Node.js, executar os procedimentos abaixo:

# Instalar as dependencias do yarn: 
>> yarn install

# Iniciar a API Fake via yarn:
>> yarn server

# Iniciar o servidor via yarn:
>> yarn dev
```

```bash
# Se utiliza NPM como ferramenta para auxiliar as instalações dos pacotes dentro do Node.js, executar os procedimentos abaixo:

# Instalar as dependencias do npm:
>> npm install

# Iniciar a API Fake via npm:
>> npm run server

# Iniciar o servidor via npm:
>> npm run dev
```

<pre>
Agora basta acessar <a href="http://localhost:3000" rel="nofollow"><code>localhost:3000</code></a> no seu Browser e usufruir da aplicação!
</pre>


## :book: <strong id="documentacao"> Detalhes aprofundados sobre o projeto </strong>

<details>
<summary>
  Documentação com os detalhes técnicos do projeto...
</summary>

<br>

<h2><strong>Conceitos e Praticas utilizados no desenvolvimento:</strong></h2>

<p align="justify">Utilizamos os conceitos do React de Componentes, Fragment, Propriedades e Estados na criação e comunicação de informações em eles.</p>

<p align="justify">TypeScript serve para utilizar uma linguagem de tipagem, dando um formato ou parâmetros aos dados que estão sendo recebidos, ou seja, podemos assim saber os dados presentes dentro de uma variável ou os dados que uma função necessita receber, o que facilitaria o entendimento e principalmente na necessidade de uma manutenção do código.</p>

<p align="justify">O framework NextJS que é um framework por cima do React irá diminuir as responsabilidades do Back-end e ajudará na criação das interfaces da aplicação com o conceito SSG (Static Site Generation), fazendo o fluxo de forma totalmente automatizada, onde determinamos um tempo para ela seja atualizada e após esse tempo o NextJS irá recarrega-la com o novo conteúdo.</p>

<p align="justify">Desenvolvemos para esta aplicação, o conceito de SSG, para que ela seja gerada de forma estática (SSG), trazendo assim, mais performance e uma melhor experiencia para o usuário.</p>

<p align="justify">O conceito SSG, foi utilizado nesta aplicação, pois como os conteúdos dos episódios podcasts, contém, para ambos os usuários, os mesmos detalhes para cada episódio, sendo somente alterado a lista dos episódios a cada lançamento, em um determinado período (determinado dentro do “getStaticProps”). Assim, não há necessidade de ser feita várias requisições ao Back-end, para obter os mesmos conteúdos e também para melhorar a indexação nas paginas da aplicação (SEO), pois assim que os conteúdos forem carregados na primeira requisição feita, o conteúdo da página ficará disponível para qualquer mecanismo de busca ou Crawlers que vierem buscar as informações desejadas, até mesmo se alguns deles estiverem com o JavaScript desabilitado.</p>

<p align="justify">Junto com o conceito SSG, foi utilizado o conceito de Incremental Static Regeneration, que podemos fazer especificações dos conteúdos que devem ser gerados estaticamente junto com o build/requisição da página.</p>

<h2><strong>Ferramentas e Bibliotecas utilizadas no desenvolvimento:</strong></h2>

<p align="justify">A ferramenta JSON Server é muito boa, para simular uma API Fake, principalmente quando estamos desenvolvendo o Front-end e ainda não temos um API pronta para uso.  Essa ferramenta irá converter um arquivo JSON e transforma-la em uma API com listagem, filtro, relacionamento, paginação, criação, update, delete, para assim ir criando o projeto já consumindo uma API.</p>

<p align="justify">A ferramenta SASS/SCSS é um pré-processador CSS que permite escrever CSS de uma maneira diferente, onde podemos utilizar diversas funcionabilidades que está ferramenta oferece, por exemplo, o encadeamento de elementos dentro de um elemento pai.</p>

<p align="justify">A biblioteca Axios para fazer requisições HTTP, que traz algumas funcionabilidades, que são o entendimento pelo padrão do JSON e configuração de um baseURL (caminho URL padrão), assim só será necessário fazer a chamada da rota(s) com seu(s) parâmetro(s).</p>

<h2><strong>BÔNUS:</strong></h2>

<p align="justify"> <strong>O deploy</strong> foi feito da maneira mais pratica, onde utilizamos um serviço de deploy especializados para aplicações Front-end, chamado <strong>“Vercel”</strong> e seguimos a seguintes etapas para concluir o deploy: </p>

```bash
# Crie uma conta no site da Vercel:
>> https://vercel.com/

# Baixar o CLI Vercel pelo npm na aplicação:
>> npm i -g vercel

# Verificar se está disponivel o CLI Vercel:
>> vercel -h

# Fazendo o login (Siga os passos apresentados):
>> vercel login

# Preparando o deploy da aplicação (Responda e siga os passos apresentados):
>> vercel
```

</details>

## :construction: <strong id="construcao"> Em construção </strong>

<p> Elementos que estão sendo preparados para serem incrementados dentro dessa aplicação: </p>

<ul>
    <li> Melhorar a responsividade </li>
    <li> Criar uma versão PWA (Progress Web Apps) </li>
    <li> Acrescentar o tema Dark ao visual </li>
</ul>

## :closed_book: <strong id="licenca"> Licença </strong>

<img alt="GitHub" src="https://img.shields.io/github/license/facebook/react"/>

Esse projeto esta sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## :boy: <strong id="autor"> Autor </strong>

<a href="https://github.com/WD-GabrielKenji">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/77596710?s=400&u=70de2ffcac45b9e0db00c828fe785d4a76ac3f65&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gabriel Kenji Poli Ozaki</b></sub></a> <a href="https://github.com/WD-GabrielKenji" title="Perfil Github"> :star2: 
</a>


Feito de ❤️ por Gabriel Kenji Poli Ozaki - Desenvolvedor Front-end 👋🏽

### :mailbox_with_mail: <strong id="contato"> Redes Sociais para Contato: </strong>

<p> Entre em contato, atraves destas redes sociais: </p>

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel_Kenji_Poli_Ozaki-0e76a8?style=flat&labelColor=0e76a8&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wdkenji/)  [![Mail Badge](https://img.shields.io/badge/-@biel.kenjii-C63381?style=flat&labelColor=C63381&logo=instagram&logoColor=white)](https://www.instagram.com/biel.kenjii/)  [![Mail Badge](https://img.shields.io/badge/-g.kenjiJS-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white)](mailto:g.kenjiJS@gmail.com)

[![GitHub followers](https://img.shields.io/github/followers/WD-GabrielKenji.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/WD-GabrielKenji)
