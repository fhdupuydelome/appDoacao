import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import colors from '../styles/colors'



interface cardProps {
  nome: string;
}
export const CardProduto = (params: cardProps) => {
  return(
    <View 
      style={styles.container}
    >
      <Text
        style={styles.textoCard}
      >{params.nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#e7dddd',    
    height: 50,
    textAlign: 'center'
    
  },
  textoCard: {
    fontSize: 18,
    color: colors.body_dark,
    
  }
})

