<p align="center">
      <img id="imagem" title="#Projeto" src="https://github.com/Daniel-Vinicius/Happy/blob/main/.github/Imagem.png" width="10%" alt="Happy Logo"/>
</p>

<h1 align="center">Next Level Week, terceira edição, projeto "Happy". 🥳</h1>

---

 <p id="sobre">
A Next Level Week é um evento online gratuito promovido pela Rocketsat, em que durante 5 dias desenvolvemos uma aplicação completa. Na trilha OmniStack, criamos uma aplicação web e mobile em que lares adotivos, podem cadastrar seus endereços e informações para as pessoas visitarem.
</p>


![](https://img.shields.io/badge/license-MIT-green)
![](https://img.shields.io/badge/languege-Portuguese-yellow)
![GitHub Repo stars](https://img.shields.io/github/stars/Daniel-Vinicius/Happy?style=social)

---

### Features 
- [x] Ver direções via Google Maps 🗺
- [x] Ver fotos do Orfanato 📱
- [x] Entre em contato pelo Whatsapp 📞
- [x] Acessar horários e dias de funcionamento 📅
- [x] Cadastar um Orfanato ➕

Features Adicionais que não existem no projeto original
- [x] Animação na Landing utilizando o Framer Motion
- [x] Rota para exclusão de orfanatos

---

<h4> 
	Happy 1.0 concluido ✔
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

# Para executar o projeto backend é necessário criar o banco de dados com todas as tabelas utilizadas, para isso execute o comando:

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

> ⚠️ Após executar o Backend e o Web, o navegador padrão abrirá uma aba em <http://localhost:3000>. E é lá que você vai testar a aplicação. 😉
---

### **Executando a Aplicação Mobile**
**Com o backend em execução!!!**

No arquivo <a href='https://github.com/Daniel-Vinicius/Happy/blob/main/mobile/src/services/api.ts'>api</a> você verá esta variável
```
 baseURL: 'http://192.168.1.109:3333'
 # substitua 'http://192.168.1.109:3333' pelo IP que fica em exp://SEU-IP:3003
 ```

 na <a href='https://github.com/Daniel-Vinicius/Proffy/blob/master/github/mobile-connection.JPG'>tela de conexão</a>

Agora depois de configurar seu IP execute

````
# Executando o mobile
$ cd mobile
$ expo start
````

Agora você verá uma tela parecida a essa, 
OBS: É recomendado uma conta Expo

<img alt="Conexão" src="https://github.com/Daniel-Vinicius/Proffy/blob/master/github/mobile-connection.JPG">

Configure para ficar com a configuração igual ao da foto

```json
{
    "CONNECTION": "LAN",
    "PRODUCTION MODE": "false",    
}
```

No projeto mobile com o servidor em execução,
execute o comando yarn start e escaneie o QR CODE com o <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR">App da Expo </a>, e você verá está tela:


Pronto você executou corretamente.

### 🛠 Tecnologias <a id='tecnologias'></a>

  <details>
  <summary>Web</summary>
	
  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Leaflet](https://leafletjs.com/)
  - [React Leaflet](https://react-leaflet.js.org/)
  - [Open Street Map](https://www.openstreetmap.org/) ou [Mapbox](https://www.mapbox.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  
  </details>

  <details>
  <summary>Backend</summary>
	
  - [Nodejs](https://nodejs.org/en/)
  - [Express](https://expressjs.com/) 
  - [Typeorm](https://typeorm.io/)
  - [Multer](https://github.com/expressjs/multer)
  - [Yup](https://github.com/jquense/yup)
  
  </details>
  
  <details>
  <summary>Mobile</summary>
	
-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.io/learn)
-   [@expo/vector-icons](https://docs.expo.io/guides/icons/)
-   [expo-image-picker](https://docs.expo.io/tutorial/image-picker/#installing-expo-image-picker)
-   [Styled Components](https://styled-components.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [React Navigation](https://reactnavigation.org/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [Expo Google Fonts](https://github.com/expo/google-fonts)
-   [React-native-maps](https://github.com/expo/react-native-appearance)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>


### 👨‍💻 Contribuidores <a id="contribuidores"> </a>

💜 As pessoas que contribuiram para o projeto

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

---

### 👨‍💻Autor <a id="autor"> </a>

<a href="https://github.com/Daniel-Vinicius" style="text-decoration: none;">
<img style="border-radius: 70%;" src="https://avatars0.githubusercontent.com/u/66279500?s=460&u=03d962bd1fda436ca49d4bbfbf2f30bdd566221d&v=4" width="100px;"  alt="Seu nome"/>

<br />
<span> Feito com ❤️ por Daniel Vinícius 👋 Entre em contato! </span> 
</a> 
