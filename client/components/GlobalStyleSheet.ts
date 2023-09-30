import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputWrapper: {
    marginBottom: 0,
    padding: 40,
  },
  errorText: {
    color: 'red',
    paddingHorizontal: 10,
    paddingTop: 0
  }
});

export default styles;