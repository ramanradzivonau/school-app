import { FC } from "react";
import { Pressable, PressableProps, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

interface ButtonProps extends PressableProps {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <Pressable style={Styles.button} {...props}>
      <Text style={Styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 58,
    borderRadius: Radius.r10,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    // fontFamily: 'Fira Sans',
    fontSize: Fonts.f18,
    lineHeight: 1.2,
    color: Colors.white,
  },
});
