import { Text, View } from "react-native";
import { Image } from "expo-image";

export function Movie({ title, image, tagline }) {
  // console.log(image);
  return (
    <View style={{ padding: 15, alignItems: "center" }}>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>{title}</Text>
      <Image
        source={image}
        style={{
          width: 300,
          height: 250,

          borderRadius: 8,
        }}
      />
      <Text style={{ fontStyle: "italic", fontSize: 20 }}>{tagline}</Text>
    </View>
  );
}
