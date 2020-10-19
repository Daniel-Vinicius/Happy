import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Feather, FontAwesome } from "@expo/vector-icons";

import mapMarkerImg from "../images/map-marker.png";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

import api from "../services/api";

interface OrphanageDetailsRouteParams {
  id: number;
}

interface Orfanato {
  id: number;
  nome: string;
  latitude: number;
  longitude: number;
  sobre: string;
  instruções: string;
  aberto_entre: string;
  aberto_nos_finais_de_semana: boolean;
  images: Array<{
    // aray de objeto
    id: number;
    url: string;
  }>;
}

export default function OrphanageDetails() {
  const route = useRoute();
  const [orfanato, setOrfanato] = useState<Orfanato>();

  const params = route.params as OrphanageDetailsRouteParams;

  useEffect(() => {
    api.get(`orfanatos/${params.id}`).then((response) => {
      setOrfanato(response.data);
    });
  }, [params.id]);

  if (!orfanato) {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Carregando...</Text>
      </View>
    );
  }

  function DirecionaAoGoogleMaps() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orfanato?.latitude},${orfanato?.longitude}`);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          {orfanato.images.map((image) => {
            return (
              <Image
                key={image.id}
                style={styles.image}
                source={{
                  uri: image.url,
                }}
              />
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{orfanato.nome}</Text>
        <Text style={styles.description}>{orfanato.sobre}</Text>

        <View style={styles.mapContainer}>
          <MapView
            initialRegion={{
              latitude: orfanato.latitude,
              longitude: orfanato.longitude,
              latitudeDelta: 2.0,
              longitudeDelta: 2.0,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orfanato.latitude,
                longitude: orfanato.longitude,
              }}
            />
          </MapView>

          <TouchableOpacity
            onPress={DirecionaAoGoogleMaps}
            style={styles.routesContainer}
          >
            <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <Text style={styles.title}>Instruções para visita</Text>
        <Text style={styles.description}>{orfanato.instruções}</Text>

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name='clock' size={40} color='#2AB5D1' />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>
              Segunda à Sexta {orfanato.aberto_entre}
            </Text>
          </View>

          {orfanato.aberto_nos_finais_de_semana ? (
            <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
              <Feather name='info' size={40} color='#39CC83' />
              <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>
                Atendemos fim de semana
              </Text>
            </View>
          ) : (
            <View style={[styles.scheduleItem, styles.scheduleItemRed]}>
              <Feather name='info' size={40} color='#FF669D' />
              <Text style={[styles.scheduleText, styles.scheduleTextRed]}>
                Não atendemos fim de semana
              </Text>
            </View>
          )}
        </View>

        <RectButton style={styles.contactButton} onPress={() => {}}>
          <FontAwesome name='whatsapp' size={24} color='#FFF' />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get("window").width,
    height: 240,
    resizeMode: "cover",
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: "#4D6F80",
    fontSize: 30,
    fontFamily: "Nunito700",
  },

  description: {
    fontFamily: "Nunito600",
    color: "#5c8599",
    lineHeight: 24,
    marginTop: 16,
  },

  mapContainer: {
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1.2,
    borderColor: "#B3DAE2",
    marginTop: 40,
    backgroundColor: "#E6F7FB",
  },

  mapStyle: {
    width: "100%",
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  routesText: {
    fontFamily: "Nunito700",
    color: "#0089a5",
  },

  separator: {
    height: 0.8,
    width: "100%",
    backgroundColor: "#D3E2E6",
    marginVertical: 40,
  },

  scheduleContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  scheduleItem: {
    width: "48%",
    padding: 20,
  },

  scheduleItemBlue: {
    backgroundColor: "#E6F7FB",
    borderWidth: 1,
    borderColor: "#B3DAE2",
    borderRadius: 20,
  },

  scheduleItemGreen: {
    backgroundColor: "#EDFFF6",
    borderWidth: 1,
    borderColor: "#A1E9C5",
    borderRadius: 20,
  },

  scheduleItemRed: {
    backgroundColor: "#FEF6F9",
    borderWidth: 1,
    borderColor: "#FFBCD4",
    borderRadius: 20,
  },

  scheduleText: {
    fontFamily: "Nunito600",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  scheduleTextBlue: {
    color: "#5C8599",
  },

  scheduleTextGreen: {
    color: "#37C77F",
  },

  scheduleTextRed: {
    color: "#FF669D",
  },

  contactButton: {
    backgroundColor: "#3CDC8C",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 40,
  },

  contactButtonText: {
    fontFamily: "Nunito800",
    color: "#FFF",
    fontSize: 16,
    marginLeft: 16,
  },
});
