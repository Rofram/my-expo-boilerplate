import { Text, View } from "react-native";
import { styles } from "./styles";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
}