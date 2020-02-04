import React, { Component } from "react";
import { StyleSheet, Image, Text, View, TouchableHighlight, ScrollView } from "react-native";

export default class Pedidos extends Component {
  state = {
    pedidos: {},
    count: {}
  };

  fedex = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  correosEcuador = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  serviEntrega = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView vertical={true}>
          <View>
            <Image
              style={styles.image}
              source={require('./assets/silla.jpg')}
            />
          </View>
          <View style={styles.separator} />
          <View>
            <Text style={{ fontSize: 25 }}>Modo de envio que desea:</Text>
            <View style={styles.separator} />
            <TouchableHighlight onPress={this.fedex}>
              <Text style={styles.button}>Fedex</Text>
            </TouchableHighlight>
            <View style={styles.separator} />
            <TouchableHighlight onPress={this.correosEcuador}>
              <Text style={styles.button}>Correos Ecuador</Text>
            </TouchableHighlight>
            <View style={styles.separator} />
            <TouchableHighlight onPress={this.serviEntrega}>
              <Text style={styles.button}>Servientrega</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center"
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    borderRadius: 10,
    width: 200,
    height: 200,
    resizeMode: 'stretch'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
})
