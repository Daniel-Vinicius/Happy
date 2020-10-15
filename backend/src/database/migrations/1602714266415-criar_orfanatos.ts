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
            unsigned: true, // sempre positivo
            isPrimary: true, // é chave primária
            isGenerated: true, // é gerada automáticamente, sem nescessidade de ser passada na hora de criar um orfanato
            generationStrategy: "increment", // se autoincrementa
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },

          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: 'sobre',
            type: 'text',
          },
          {
            name: 'instruções',
            type: 'text',
          },
          {
            name: 'aberto_entre',
            type: 'text',
          },
          {
            name: 'aberto_nos_finais_de_semana',
            type: 'boolean',
            default: false
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Orfanatos')
  }
}

// como rodar a migration:
// yarn typeorm migration:run