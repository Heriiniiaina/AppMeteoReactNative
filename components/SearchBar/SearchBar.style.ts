import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  
  input: {
    backgroundColor: 'white',
    height: 40,
    paddingLeft: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20, // Laisser de l'espace quand le clavier est ouvert
  },
});
