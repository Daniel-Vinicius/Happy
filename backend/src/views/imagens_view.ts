import Imagem from "../models/Imagem";

export default {
  render(imagem: Imagem) {
    return {
      id: imagem.id,
      url: `http://localhost:3333/uploads/${imagem.path}`,
    };
  },

  renderMany(imagem: Imagem[]) {
    return imagem.map((imagem) => this.render(imagem));
  },
};
