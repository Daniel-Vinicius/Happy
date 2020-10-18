import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function OrphanagesMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.calloutText}>Navegação Realizada !!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    top: 24,
  },
  calloutText: {
    color: "#0089A5",
    fontSize: 32,
    fontFamily: "Nunito700",
  },
});
