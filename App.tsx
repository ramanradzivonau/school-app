import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={Styles.screen}>
      <StatusBar style="light" />
      <View style={Styles.container}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 22,
            fontWeight: "600",
            textAlign: "center",
            color: "#FAFAFA",
          }}
        >
          PurpleSchool
        </Text>
        <View style={Styles.form}>
          <TextInput
            placeholder="Email"
            style={Styles.input}
            placeholderTextColor="#AFB2BF"
          />
          <TextInput
            placeholder="Пароль"
            style={Styles.input}
            placeholderTextColor="#AFB2BF"
          />
          <Pressable style={Styles.logInButton}>
            <Text style={Styles.logInButtonText}>Войти</Text>
          </Pressable>
        </View>
        <Text style={Styles.resetButton}>Восстановить пароль</Text>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#16171D",
  },
  container: {
    flex: 1,
    paddingHorizontal: 55,
    justifyContent: "center",
    gap: 50,
  },
  form: {
    gap: 16,
  },
  input: {
    height: 58,
    paddingLeft: 26,
    paddingRight: 24,
    borderRadius: 10,
    backgroundColor: "#2E2D3D",
    // fontFamily: 'Fira Sans',
    fontSize: 16,
    lineHeight: 19,
    color: "#AFB2BF",
  },
  logInButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 58,
    borderRadius: 10,
    backgroundColor: "#6C38CC",
  },
  logInButtonText: {
    // fontFamily: 'Fira Sans',
    fontSize: 18,
    lineHeight: 22,
    color: "#FAFAFA",
  },
  resetButton: {
    // fontFamily: "Fira Sans",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#A97BFF",
  },
});
