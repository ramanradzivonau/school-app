import { FC, useState } from "react";
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../tokens";
import EyeOpenedIconSvg from "../../assets/icons/EyeOpenedIconSvg";
import EyeClosedIconSvg from "../../assets/icons/EyeClosedIconSvg";

interface InputProps extends TextInputProps {
  type?: "text" | "password";
}

export const Input: FC<InputProps> = ({ type = "text", ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View>
      <TextInput
        style={[Styles.input, type === "password" && { paddingRight: 60 }]}
        placeholderTextColor={Colors.gray}
        secureTextEntry={type === "password" && !isPasswordVisible}
        cursorColor={Colors.primary}
        {...props}
      />
      {type === "password" && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible((state) => !state)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={Styles.icon}
        >
          {isPasswordVisible ? <EyeOpenedIconSvg /> : <EyeClosedIconSvg />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    height: 58,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: Colors.violetDark,
    // fontFamily: 'Fira Sans',
    fontSize: 16,
    lineHeight: 19,
    color: Colors.gray,
  },
  icon: {
    position: "absolute",
    top: "50%",
    right: 20,
    transform: [{ translateY: -12 }],
  },
});
