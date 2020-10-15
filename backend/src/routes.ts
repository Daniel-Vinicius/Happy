import { Router } from "express";
import multer from 'multer';

import uploadConfig from './config/upload'
import OrfanatosController from './controllers/OrfanatosController'

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orfanatos", OrfanatosController.listar);
routes.get("/orfanatos/:id", OrfanatosController.listarUm);
routes.post("/orfanatos", upload.array('Imagens'), OrfanatosController.criar);
routes.delete("/orfanatos/:id", OrfanatosController.deletar);

  export default routes;