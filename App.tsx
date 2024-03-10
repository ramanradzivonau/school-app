import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Gaps, Fonts, Input, Button } from "./shared";
import LogoSvg from "./assets/LoginScreen/LogoSvg";

export default function App() {
  return (
    <SafeAreaView style={Styles.screen}>
      <StatusBar style="light" />
      <View style={Styles.container}>
        <LogoSvg />
        <View style={Styles.form}>
          <Input placeholder="Email" />
          <Input type="password" placeholder="Пароль" />
          <Button text="Войти" />
        </View>
        <Text style={Styles.resetLink}>Восстановить пароль</Text>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  container: {
    flex: 1,
    paddingHorizontal: 55,
    justifyContent: "center",
    alignItems: "center",
    gap: Gaps.g50,
  },
  logo: {
    width: 163,
  },
  form: {
    alignSelf: "stretch",
    gap: Gaps.g16,
  },
  resetLink: {
    // fontFamily: "Fira Sans",
    fontSize: Fonts.f18,
    lineHeight: 1.2,
    textAlign: "center",
    color: Colors.link,
  },
});
