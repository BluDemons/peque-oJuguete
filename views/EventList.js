import React, { Component } from 'react';
import {
  StyleSheets,
  Text,
  View,
  FlatList
} from 'react-native';

export default class LibrosList extends Component {
  state = {
    books: {}
  }

  componentDidMount(){
    const books = require('./db.json');
    this.setState(books);
  }

  render(){
    return(
      <FlatList style={{marginTop:50,backgroundColor:'#000'}}
        data={this.state.books}
        renderItem={({ item }) => <Text style={{padding:25,marginTop:50, backgroundColor:'#eee',}}>Libro: {item.title} por: {item.author}</Text>}
        keyExtractor={item => item.id}
      />
    )
  }
}