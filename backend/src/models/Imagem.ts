import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Orfanato from "./Orfanato";

@Entity("Imagens")
export default class Imagem {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orfanato, (orfanato) => orfanato.Imagens)
  @JoinColumn({ name: "orfanato_id" })
  orfanato: Orfanato;
}
