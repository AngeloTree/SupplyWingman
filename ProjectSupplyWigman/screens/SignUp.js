import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const SignUp = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image style={styles.dogImg} source={require("../assets/topdog.png")} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.heading}>Create Account</Text>
        <View style={styles.formView}>
          <TextInput
            placeholder={"Full Name"}
            placeholderTextColor={"#000"}
            style={styles.textInput}
          ></TextInput>
          <TextInput
            placeholder={"Email"}
            placeholderTextColor={"#000"}
            style={styles.textInput}
          ></TextInput>
          <TextInput
            placeholder={"Password"}
            placeholderTextColor={"#000"}
            secureTextEntry={true}
            style={styles.textInput}
          ></TextInput>
          <TextInput
            placeholder={"Confirm Password"}
            placeholderTextColor={"#000"}
            secureTextEntry={true}
            style={styles.textInput}
          ></TextInput>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  topView: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    width: "100%",
    height: "80%",
    backgroundColor: "#facf0f",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: "flex",
  },
  heading: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 60,
  },
  dogImg: {
    width: "50%",
    height: "80%",
    resizeMode: "contain",
  },
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  textInput: {
    width: "90%",
    height: 52,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 20,
  },
  buttonStyle: {
    width: "90%",
    backgroundColor: "#facf0f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#fff",
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SignUp;
