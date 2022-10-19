import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: require('./assets/1.jpg') },
  { id: 2, text: 'Card #2', uri: require('./assets/2.jpg')},
  { id: 3, text: 'Card #3', uri: require('./assets/3.jpg') },
  { id: 4, text: 'Card #4', uri: require('./assets/4.jpg') },
  { id: 5, text: 'Card #5', uri: require('./assets/5.jpg') },
  { id: 6, text: 'Card #6', uri: require('./assets/1.jpg') },
  { id: 7, text: 'Card #7', uri: require('./assets/2.jpg') },
  { id: 8, text: 'Card #8', uri: require('./assets/3.jpg') },
];

export default class App extends React.Component {
  renderCard(item) {
    return (
      <Card
      marginTop={50}
      marginBottom={10}
        key={item.id}
        title={item.text}
        image={item.uri}
      >
        <Text style={{marginBottom: 10}}>
          I can customize the card {item.text} further 
        </Text>
        <View>
          <Image
          style={styles.container}
            source={item.uri} />
        </View>
        
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card 
      marginTop={50}
      title='All Done!'>
        <Text style={{marginBottom: 10}}>
          There's no more content here!
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title=' more!'
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width:300,
    flex: 1,
    backgroundColor: '#fff'
  },
});
