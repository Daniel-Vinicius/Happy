import { ErrorRequestHandler, response } from "express";
import {ValidationError} from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {

    let erros: ValidationErrors = {};

    error.inner.forEach(err => {
      erros[err.path] = err.errors;
    });

    return response.status(400).json({Mensagem: 'Erro de validação', erros})
  }

  console.error(error);

  return response.status(500).json({
    Mensagem: "Ocorreu um Erro interno no nosso servidor",
  });
};

export default errorHandler;