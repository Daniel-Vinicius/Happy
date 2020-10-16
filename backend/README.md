Comandos usados para criar o projeto: {

1- yarn init -y


2- yarn add express


3- yarn add @types/express -D


4- yarn add typescript -D


5- yarn tsc --init


6- Mudar (tsconfig.json):


"target": "es5",


para "target": "es2017",  


 7- yarn add ts-node-dev -D
 
 
8- Criar este script no package.json {


"scripts": {


"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",


"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"


},


9- Instalar o Typeorm e o sqlite3:


yarn add typeorm sqlite3


}
10 - Mudar isto (tsconfig.json) pra false: 


"strictPropertyInitialization": false, / * Habilita a verificação estrita da inicialização da propriedade nas classes. * /


11- Mudar isso (tsconfig.json) pra true: 


  "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
  
  
    "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
    
    
12- instalar isso: yarn add express-async-errors e isso  yarn add yup e isso @types/yup


13- instalar isso: yarn add @types/cors -D e isso yarn add cors

}

Rodar o projeto: yarn dev

O que eu aprendi em ralação a parametros:

// Rota = código digitado
// Recurso = Usuário
// Métodos HTTP = POST

app.post("/users/:id", (request, response) => {
// console.log(request.query) // ter um parametro na url como page=3
// console.log(request.params) // ter um rota/:id na rota
// console.log(request.body) // ter um app.use(express.json())

return response.json({
message: "Hello world",
queryParams: request.query,
routeParams: request.params,
body: request.body
});

});

// REQUEST é tudo que vem do frontend como por exemplo o valor informado pelo usuário, uma senha
// RESPONSE é tudo o que o backend responde por exemplo um pdf, um salvamento no banco de dados

// Parâmetros

// Query Params são os Parâmetros passados na URL como por exemplo:
// http://localhost:3333/users?search=daniel&page=2
// São usados geralmente pra filtros, paginação e busca

// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// São usados geralmente para DELETE E PUT

// Body
// São as informações que vem do frontend geralmente em JSON e em formulários
// Exemplo : {
// "name": "Daniel", telefone: 1232387
// }

// Tudo isso vem do REQUEST OU SEJA DO FRONTEND, você pode ver isso com o
//(request.query) // Para Query Params
//(request.params) // Para Route Params
//(request.body) // Para Body
//(request.files) // Para arquivos

O que eu aprendi em relação a conexão com banco de dados:
3 formas de conectar:

1- Driver nativo como o tedius para sql server ou pg para postgress
Nele você escreve o SQL da maneira normal como se você estivesse no banco, o que é bom para ser mais simples,
mas ruim se você precisar mudar algum dia para outro banco ou se ocorrer uma atualização no banco

2- Query Builder
O Knex.js é o melhor query builder, que é um conversor de js para SQL
No query builder você escreve em js o que é ruim, porém é bom porque caso ocorra uma
atualização no banco de dados ele já converte automático.

3- ORM
Existem muitas orms como Sequelize ou TYPEORM, nelas você escreve em forma de classe js,
mais complexo que o query builder, mas em compensação você escreve um model para vários bancos de dados,
como postgress, sql server, mysql etc.. tudo atualizado automaticamente e se um dia você quiser mudar de
banco é so mudar o arquivo de configuração, que todos os models e operações de banco são salvas.

O que eu aprendi em relação a migrations:
up criar
down desfazer

como rodar a migration:
// yarn typeorm migration:run
como desfazer migration: 
// yarn typeorm migration:revert

o que eu aprendi em relação a TypeORM :
unsigned: true, // sempre positivo
isPrimary: true, // é chave primária
isGenerated: true, // é gerada automáticamente, sem nescessidade de ser passada na hora de criarrfanato
generationStrategy: "increment", // se autoincremeta

      Exemplo:

    import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class criarOrfanatos1602714266415 implements MigrationInterface {
public async up(queryRunner: QueryRunner): Promise<void> {
await queryRunner.createTable(
new Table({
name: "Orfanatos",
columns: [
{
name: "id",
type: "integer",
unsigned: true,
isPrimary: true,
isGenerated: true,
generationStrategy: "increment",
},

Criar tabela:
yarn typeorm migration:create -n nomedatabela

Chave estrangeira exemplo: 

        foreignKeys: [
          {
          name: 'ImagenOrfanato',   // nome da coluna
          columnNames: ['orfanato_id'], // coluna que referencia a outra tabela
          referencedTableName: 'Orfanatos', // tabela referenciada
          referencedColumnNames: ['id'], // coluna da outra tabela referenciada
          onUpdate: 'CASCADE', // padrao
          onDelete: 'CASCADE' // padrao
        }
      ]
