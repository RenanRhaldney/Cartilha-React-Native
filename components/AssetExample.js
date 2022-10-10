import * as React from 'react';
import { Text, View, StyleSheet, Image,ScrollView } from 'react-native';

export default function AssetExample() {
  return (
  <ScrollView>
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/amarelo-1.jpg')} />
      <Text style={styles.paragraph}>
        Local Encontre a motivação que precisa dentro do seu coração! Você é forte e será sempre capaz de lutar pelo que
        acredita, de vencer todos os desafios que a vida lhe propuser. Lute com esperança, com força e coragem para 
        onquistar mais uma vitória na sua vida! Erga sua cabeça e agradeça a chance de estar aqui e poder continuar a
        escrever sua história.
      </Text>
    <Image style={styles.logo} source={require('../assets/crianca.jpg')} />
    <Text style={styles.paragraph}>
      Chegou o momento de partirmos para um novo dia e a determinação é a chave para conseguirmos o sucesso. Já chega de
      perdermos tempo com dúvidas desnecessárias e permitirmos que o medo nos paralise.      
      Nunca se esqueça que as melhores oportunidades surgem apenas uma vez na vida. Aproveite agora as que estão ao seu
      alcance para que no futuro não lamente as boas chances desperdiçadas.
    </Text>
    <Image style={styles.logo} source={require('../assets/cachorro.JPG')} />
    <Text style={styles.paragraph}>
    Ser feliz é reconhecer que vale a pena viver, apesar de todos os desafios, incompreensões e períodos de crise. Ser 
    eliz é deixar de ser vítima dos problemas e se tornar autor da própria história. É atravessar desertos fora de si, 
    as ser capaz de encontrar um oásis no recôndito da sua alma.
    </Text>
    <Image style={styles.logo} source={require('../assets/imagem-final.jpg')} />

    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'yellow'
  },

  paragraph: {
    marginTop: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    textAlign:'justify'
  },
  logo: {
    height: 250,
    width: 330,
  }
});
