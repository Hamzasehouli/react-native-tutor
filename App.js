import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

const App = function () {
  const [data, setData] = useState();

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={{
          uri: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg',
        }}
        resizeMode="cover"
        style={styles.background}> */}
      <Text>ssss</Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo=',
        }}
      />
      <Text style={styles.text}>{data}</Text>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // jusitfyContent: 'center',
    // alignItems: 'center',
    width: 100 + '%',
    height: 100 + '%',
  },
  text: {
    color: 'red',
    fontSize: 30,
  },
  background: {
    width: 100 + '%',
    height: 100 + '%',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default App;
