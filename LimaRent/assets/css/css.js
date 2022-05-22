import { StyleSheet } from 'react-native';
// #30e210

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button__home: {
    marginRight: 40,
  },
  darkbg: {
    backgroundColor: '#333',
  },
  login__icon: {
    marginBottom: 20,
  },
  login__msg: (text = 'none') => ({
    fontWeight: 'bold',
    fontSize: 22,
    color: 'red',
    marginBottom: 15,
    display: text,
    alignSelf: 'center',
  }),
  login__form: {
    width: '80%',
  },
  login__input: {
    backgroundColor: '#fff',
    fontSize: 19,
    padding: 7,
    marginBottom: 5,
    marginTop: 15,
  },
  login__button: {
    padding: 12,
    backgroundColor: '#30e210',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  login__buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#333',
  },

  round_btn: {
    marginTop: 20,
    width: '30%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#99FF33',
    flexDirection: 'row',
  },

  round_btnRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  round_btnText: {
    fontSize: 23,
    color: '#000',
  },

  background_Entry: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export { css };
