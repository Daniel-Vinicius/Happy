import Imagem from "../models/Imagem";

export default {
  render(imagem: Imagem) {
    return {
      id: imagem.id,
      url: `http://192.168.1.109:3333/uploads/${imagem.path}`,
    };
  },

  renderMany(imagem: Imagem[]) {
    return imagem.map((imagem) => this.render(imagem));
  },
};
