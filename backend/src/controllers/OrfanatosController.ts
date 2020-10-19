import { Request, Response } from "express";
import { getRepository } from "typeorm";
import OrfanatoView from "../views/orfanatos_view";
import * as Yup from "yup";

import Orfanato from "../models/Orfanato";

export default {
  async listar(request: Request, response: Response) {
    const orfanatoRepository = getRepository(Orfanato);

    const orfanatos = await orfanatoRepository.find({
      relations: ["Imagens"],
    });
    response.status(200).json(OrfanatoView.renderMany(orfanatos));
  },
  async deletar(request: Request, response: Response) {
    const { id } = request.params;
    const orfanatoRepository = getRepository(Orfanato);
    const orfanato = await orfanatoRepository.findOne(id);

    if (!orfanato) {
      response.status(400).json({
        Mensagem: "Não existe um orfanato com este id",
      });
    } else {
      orfanatoRepository.delete(id);
      response.status(200).json({
        Mensagem: "Orfanato deletado com sucesso",
      });
    }
  },

  async listarUm(request: Request, response: Response) {
    const { id } = request.params;
    const orfanatoRepository = getRepository(Orfanato);
    try {
      const orfanato = await orfanatoRepository.findOneOrFail(id, {
        relations: ["Imagens"],
      });
      response.status(200).json(OrfanatoView.render(orfanato));
    } catch (error) {
      response.status(400).json({ Erro: "Não existe um orfanato com este id" });
    }
  },

  async criar(request: Request, response: Response) {
    const {
      nome,
      latitude,
      longitude,
      sobre,
      instruções,
      aberto_entre,
      aberto_nos_finais_de_semana,
    } = request.body;

    console.log(request.body)



    const orfanatoRepository = getRepository(Orfanato); // pega o model

    const requestImages = request.files as Express.Multer.File[];

    const Imagens = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      // tem a estrutura exata do model
      nome,
      latitude,
      longitude,
      sobre,
      instruções,
      aberto_entre,
      aberto_nos_finais_de_semana: aberto_nos_finais_de_semana === "true",
      Imagens,
    };

    console.log(request.files)

    const schema = Yup.object().shape({
      nome: Yup.string().required("Campo obrigatório"),
      latitude: Yup.number().required("Campo obrigatório"),
      longitude: Yup.number().required("Campo obrigatório"),
      sobre: Yup.string().required("Campo obrigatório").max(300),
      instruções: Yup.string().required("Campo obrigatório"),
      aberto_entre: Yup.string().required("Campo obrigatório"),
      aberto_nos_finais_de_semana: Yup.boolean().required("Campo obrigatório"),
      Imagens: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ).required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orfanato = orfanatoRepository.create(data); // cria um registro na estrutura exata do data

    await orfanatoRepository.save(orfanato);

    return response.status(201).json({ orfanato });
  },
};
