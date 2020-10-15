import Orfanato from "../models/Orfanato";
import imagensView from "./imagens_view";

export default {
  render(orfanato: Orfanato) {
    return {
      id: orfanato.id,
      nome: orfanato.nome,
      latitude: orfanato.latitude,
      longitude: orfanato.longitude,
      sobre: orfanato.sobre,
      instruções: orfanato.instruções,
      aberto_entre: orfanato.aberto_entre,
      aberto_nos_finais_de_semana: orfanato.aberto_nos_finais_de_semana,
      images: imagensView.renderMany(orfanato.Imagens)
    };
  },

  renderMany(orfanatos: Orfanato[]) {
    return orfanatos.map((orfanato) => this.render(orfanato));
  },
};
