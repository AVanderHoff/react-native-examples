/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class QuickApp extends Component {

  // Set initial states associated with zip and forecast
  constructor(props){
    super(props);
    this.state = {
      zip: "",
      forecast: ""  
    };
  }

  // Render to the DOM
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>
  //         Zip Code!
  //       </Text>
  //       <TextInput style={styles.form} onChangeText />
  //       <Text style={styles.instructions}>
  //         Weather Forecast: Sunny
  //       </Text>
  //       <Text style={styles.instructions}>
  //         Temperature: 77 F
  //       </Text>
  //     </View>
  //   );
  // }

render() {
    return (
      <View style={styles.container}>

          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={styles.mainText}>
               Current weather for 
             </Text>
             <View style={styles.zipContainer}>
               <TextInput
                 style={[styles.zipCode, styles.mainText]}
                 onChangeText={(text)=>this.setState({zip: text})}
                 value={this.state.zip}/>
               
             </View>
           </View>

          <Text style={styles.mainText}>{this.state.zip}</Text>

         </View>
        </Image>
      </View>
    );
  }









}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('QuickApp', () => QuickApp);


/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AnotherLive extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AnotherLive', () => AnotherLive);
*/