import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import api from "../../services/api";

interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  };
}

export default function OrphanageData() {
  const [nome, setNome] = useState("");
  const [sobre, setSobre] = useState("");
  const [instruções, setInstruções] = useState("");
  const [aberto_entre, setAberto_entre] = useState("");
  const [
    aberto_nos_finais_de_semana,
    setAberto_nos_finais_de_semana,
  ] = useState(true);

  const [images, setImages] = useState<string[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrphanageDataRouteParams;

 async function handleCreateOrphanage() {
    const { latitude, longitude } = params.position;

    console.log({
      nome,
      sobre,
      instruções,
      aberto_entre,
      aberto_nos_finais_de_semana,
      latitude,
      longitude,
      images
    });
    const data = new FormData();

    data.append('nome', nome);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('sobre', sobre);
    data.append('instruções', instruções);
    data.append('aberto_entre', aberto_entre);
    data.append('aberto_nos_finais_de_semana', String(aberto_nos_finais_de_semana));

    images.forEach((image, index) => {
      data.append('Imagens', {
        name: `image${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })

    console.log(data)

  await api.post('orfanatos', data)

  navigation.navigate('OrphanagesMap')
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== "granted") {
      alert(
        "Amigo, precisamos de acesso a sua galeria, se você quiser cadastrar um orfanato"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, // permitir usuário editar antes de subir
      quality: 1, // vai de 0 a 1 a qualidade
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // pra dizer q só aceitamos image
    });

    if (result.cancelled) {
      return;
    }

    const { uri } = result;

    setImages([...images, uri])
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={sobre}
        onChangeText={(text) => setSobre(text)}
      />

      {/* <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={styles.input}
      /> */}

      <Text style={styles.label}>Fotos</Text>

      <View style={styles.uploadedImagesContainer}>
        {images.map(image => (
            <Image key={image} source={{ uri: image}} style={styles.uploadedImage}/>
          )
        )}
      </View>

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name='plus' size={24} color='#15B6D6' />
      </TouchableOpacity>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={instruções}
        onChangeText={(text) => setInstruções(text)}
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={aberto_entre}
        onChangeText={(text) => setAberto_entre(text)}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch
          thumbColor='#fff'
          trackColor={{ false: "#ccc", true: "#39CC83" }}
          value={aberto_nos_finais_de_semana}
          onValueChange={setAberto_nos_finais_de_semana}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: "#5c8599",
    fontSize: 24,
    fontFamily: "Nunito700",
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: "#D3E2E6",
  },

  label: {
    color: "#8fa7b3",
    fontFamily: "Nunito600",
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: "#8fa7b3",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#d3e2e6",
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: "top",
  },

  uploadedImagesContainer: {
    flexDirection: 'row'
  },
  uploadedImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8
  },

  imagesInput: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderStyle: "dashed",
    borderColor: "#96D2F0",
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: "Nunito800",
    fontSize: 16,
    color: "#FFF",
  },
});
