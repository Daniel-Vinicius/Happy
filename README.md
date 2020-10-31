<<<<<<< HEAD
<h2 align="center">  <img alt="Imagem do Projeto" id="imagem" title="#Projeto" src="https://github.com/Daniel-Vinicius/Happy/blob/main/.github/Imagem.JPG" />  </h2>
<h1> Happy </h1>
 <p id="sobre" align="center">
👾 A Next Level Week é um evento online gratuito promovido pela Rocketsat, em que durante 5 dias desenvolvemos uma aplicação completa. Na trilha OmniStack, criamos uma aplicação web e mobile em que lares adotivos, podem cadastrar seus endereços e informações para as pessoas visitarem.

![](https://img.shields.io/badge/license-MIT-green)

![](https://img.shields.io/badge/languege-Portuguese-yellow)

![GitHub Repo stars](https://img.shields.io/github/stars/Daniel-Vinicius/Happy?style=social)

### Features 
- [x] Ver direções via Google Maps 🗺
- [x] Ver fotos do Orfanato 📱
- [x] Entre em contato pelo Whatsapp 📞
- [x] Acessar horários e dias de funcionamento 📅
- [x] Cadastar um Orfanato ➕

<h4 align="center"> 
	Happy 1.0 concluido 🎂
</h4>

<!--ts-->
* [Sobre](#sobre) 
* [Pre Requisitos](#pre-requisitos)
* [Executando a aplicação](#rodando)
* [Tecnologias](#tecnologias)
* [Autor](#autor)
 <!--te-->

<h2> 
<img src="https://i.dlpng.com/static/png/6577858_preview.png" width="50px" align="center"/>
Pré-requisitos <a id="pre-requisitos"></a>
</h2> 
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

<!--ts-->
 * <a target="_blank" href="https://reactjs.org">React</a> 
 * <a target="_blank" href="https://npmjs.com/">NPM</a> 
 * <a target="_blank" href="https://yarnpkg.com/">Yarn</a> 
 * <a target="_blank" href="https://nodejs.org/pt-br/">Node</a> 
 * <a target="_blank" href="https://docs.expo.io/">Expo</a> 
 
 * <a target="_blank" href="https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329"> Como instalar Node, React e NPM</a>	
 * <a target="_blank" href="https://www.devmedia.com.br/primeiro-app-com-react-native/40737"> Como instalar Expo e React Native</a>
 <!--te-->

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


---
<h3 id='rodando'> 📀 Executar o Projeto </h3>

```bash
# Clone este repositório
$ git clone <https://github.com/Daniel-Vinicius/Happy>

# Acesse a pasta do projeto no terminal/cmd
$ cd Happy

# Acesse a pasta backend, instale as dependências e saia da pasta backend
$ cd backend
$ yarn install
$ cd..

# Acesse a pasta web, instale as dependências e saia da pasta web
$ cd web
$ yarn install
$ cd..


# Acesse a pasta mobile, instale as dependências e saia da pasta mobile
$ cd mobile
$ yarn install
$ cd..

# Inicie o backend
$ cd backend

# Para executar o projeto backend é necessário criar o banco de dados com todas as tabelas utilizadas, para isso, use no diretório correspondente:

$ yarn typeorm migration:run
$ yarn dev

# Em outro terminal, inicie o web
$ cd web

# Para executar o projeto web completo é necessário ter um token de autenticação da API do Mapbox. Acesse sua conta no site e crie um token para ser utilizado no projeto. Com o token em mãos, crie um arquivo .env e coloque seu token como valor da chave REACT_APP_MAPBOX_TOKEN.

# Exemplo:
REACT_APP_MAPBOX_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Agora starte o projeto em seu ambiente com:
$ yarn start
```

> ⚠️ Após executar o Server e o Web, o navegador padrão abrirá uma aba em <http://localhost:3000>. E é lá que você vai testar a aplicação. 😉
---

### **Testando a Aplicação Web**
Você está na aplicação e verá uma tela parecida a essa:


<img alt="study" src="./github/demo-desk-study.gif">

O banco já vem com um proffy e uma conexão (quando o usuário clica em entrar em contato) cadastrados, sou eu, preencha os dados como na imagem abaixo e veja se o retorno foi como esse:

<img alt="study" src="./github/study.JPG">

Se tudo deu certo até agora, basta testar o cadastro, preencha os dados de uma forma parecida a essa:

<img alt="give-classes" src="./github/demo-desk-give-classes.gif">

Agora faça uma busca passando os filtros de acordo com o usuário que você acabou de cadastrar e veja se o retorno foi como o esperado.

### **Testando a Aplicação Mobile**
**Com o server em execução!!!**
````
# Executando o mobile
$ cd mobile
$ expo start
````

Você verá uma tela parecida a essa, 
OBS: É recomendado uma conta Expo

<img alt="" src="./github/mobile-connection.JPG">

Configure para ficar com a configuração igual ao da foto

```json
{
    "CONNECTION": "LAN",
    "PRODUCTION MODE": "false",    
}
```
Neste <a href="https://github.com/Daniel-Vinicius/Proffy/blob/master/mobile/src/services/api.ts" target="_blank">arquivo</a>
configure para  baseURL estar de acordo com o seu IP.

Por exemplo, o IP do Joãozinho é http://192.168.1.112, e baseURL é http://192.168.1.113, o projeto mobile não se conectará com a API.

Para saber seu ip abra o terminal e digite ipconfig o IP que estiver em:

Endereço IPv4. . . . . . . .  . . . . . . . : 192.168.1.113

é o IP que você deve colocar em baseURL.

No projeto mobile com o servidor em execução,
execute o comando yarn start ou npm start e escaneie o QR CODE com o <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR">App da Expo </a>, e você verá está tela:

<img alt="study" src="./github/demo-mobile-study.gif">

Pronto você executou corretamente.







































=======
# Happy
Projeto em desenvolvimento
>>>>>>> 0122d5360880a43ad70fcfccdc9f20e7e6342871


### 👨‍💻 Contribuidores <a id="contribuidores"> </a>

💜 As pessoas que contribuiram para o projeto

<<<<<<< HEAD
=======

>>>>>>> 0122d5360880a43ad70fcfccdc9f20e7e6342871
<table>

<tr>  

<td  align="center">
<a  href="https://github.com/Daniel-Vinicius">
<img  style="border-radius: 50%;"  src="https://avatars3.githubusercontent.com/u/66279500?s=460&u=2978b74f2bfcfec553cdd62c2cf15a0eca6652a3&v=4"
width="100px;"  alt="Daniel Vinícius"/>
<br />
<sub><b>Daniel Vinícius</b></sub>
</a> <br />
</td>

  

<td  align="center">
<a  href="https://github.com/pgThiago">
<img  style="border-radius: 50%;"  src="https://avatars0.githubusercontent.com/u/48173784?s=460&u=470bec2e5deab6f808308e7230c1c52b59579c41&v=4"
width="100px;"  alt="Nome do contribuidor"/>
<br />
<sub><b>Thiago</b></sub>
</a> <br />
</td>

<td  align="center">
<a  href="https://github.com">
<img  style="border-radius: 50%;"  src="https://avatars1.githubusercontent.com/u/71185268?s=460&v=4"
width="100px;"  alt="Nome do contribuidor"/>
<br />
<sub><b>Nome do contribuidor</b></sub>
</a> <br />
</td>

  

<td  align="center">
<a  href="https://github.com">
<img  style="border-radius: 50%;"  src="https://avatars1.githubusercontent.com/u/71185268?s=460&v=4"
width="100px;"  alt="Nome do contribuidor"/>
<br />
<sub><b>Nome do contribuidor</b></sub>
</a> <br />
</td>

  
  

<td  align="center">
<a  href="https://github.com">
<img  style="border-radius: 50%;"  src="https://avatars1.githubusercontent.com/u/71185268?s=460&v=4"
width="100px;"  alt="Nome do contribuidor"/>
<br />
<sub><b>Nome do contribuidor</b></sub>
</a> <br />
</td>

</tr>  

<tr>  

<td  align="center">
<a  href="https://github.com">
<img  style="border-radius: 50%;"  src="https://avatars1.githubusercontent.com/u/71185268?s=460&v=4"
width="100px;"  alt="Nome do contribuidor"/>
<br />
<sub><b>Nome do contribuidor</b></sub>
</a> <br />
</td>

  

<td  align="center">
<a  href="https://github.com">
<img  style="border-radius: 50%;"  src="https://avatars1.githubusercontent.com/u/71185268?s=460&v=4"
width="100px;"  alt="Nome do contribuidor"/>
<br />
<sub><b>Nome do contribuidor</b></sub>
</a> <br />
</td>

<td  align="center">
<a  href="https://github.com">
<img  style="border-radius: 50%;"  src="https://avatars1.githubusercontent.com/u/71185268?s=460&v=4"
width="100px;"  alt="Nome do contribuidor"/>
<br />
<sub><b>Nome do contribuidor</b></sub>
</a> <br />
</td>

  

<td  align="center">
<a  href="https://github.com">
<img  style="border-radius: 50%;"  src="https://avatars1.githubusercontent.com/u/71185268?s=460&v=4"
width="100px;"  alt="Nome do contribuidor"/>
<br />
<sub><b>Nome do contribuidor</b></sub>
</a> <br />
</td>

  
  

<td  align="center">
<a  href="https://github.com">
<img  style="border-radius: 50%;"  src="https://avatars1.githubusercontent.com/u/71185268?s=460&v=4"
width="100px;"  alt="Nome do contribuidor"/>
<br />
<sub><b>Nome do contribuidor</b></sub>
</a> <br />
</td>

</tr>

  

</table>
