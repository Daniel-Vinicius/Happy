import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class criarImagens1602722912055 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Imagens",
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
            name: "path",
            type: "varchar"
           },
          { 
            name: "orfanato_id",
            type: "integer"
           },
        ],
        foreignKeys: [
          {
          name: 'ImagenOrfanato',
          columnNames: ['orfanato_id'],
          referencedTableName: 'Orfanatos',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Imagens');
  }
}

// yarn typeorm migration:run