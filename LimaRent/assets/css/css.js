import { StyleSheet } from "react-native";
// #30e210

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  button__home: {
    marginRight: 40,
  },
  darkbg: {
    backgroundColor: "#333",
  },
  login__icon: {
    marginBottom: 20,
  },
  login__msg: (text = "none") => ({
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginBottom: 15,
    display: text,
    alignSelf: "center",
  }),
  login__form: {
    width: "80%",
  },
  login__input: {
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 5,
    marginTop: 15,
  },
  login__button: {
    padding: 12,
    backgroundColor: "#30e210",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  login__buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
  },
});

export { css };
