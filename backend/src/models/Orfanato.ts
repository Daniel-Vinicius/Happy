import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Imagem from "./Imagem";

@Entity("Orfanatos")
export default class Orfanato {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  sobre: string;

  @Column()
  instruções: string;

  @Column()
  aberto_entre: string;

  @Column()
  aberto_nos_finais_de_semana: boolean;

  @OneToMany(() => Imagem, (imagem) => imagem.orfanato, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "orfanato_id" })
  Imagens: Imagem[];
}
