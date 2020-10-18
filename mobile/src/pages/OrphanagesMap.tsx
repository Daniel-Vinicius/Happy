import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import mapMarker from '../images/map-marker.png';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function OrphanagesMap() {
    const navigation = useNavigation();

    function handleNavigateToOrphanageDetails() {

        navigation.navigate('OrphanagesDetails')

    }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.0061559,
          longitude: -45.6107683,
          latitudeDelta: 2.0,
          longitudeDelta: 2.0,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -23.0061559,
            longitude: -45.6107683,
          }}
        >
          <Callout
            tooltip
            onPress={handleNavigateToOrphanageDetails}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar do Caminho</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>

        <TouchableOpacity
          style={styles.createOrphanageButton}
          onPress={() => {}}
        >
          <Feather name='plus' size={20} color='#FFF' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
  },
  calloutText: {
    color: "#0089A5",
    fontSize: 14,
    fontFamily: "Nunito700",
  },
  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: "#FFF",
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },
  footerText: {
    fontFamily: "Nunito700",
    color: "#8fa7b3",
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
});
