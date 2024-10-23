import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';

import {useState} from 'react';

// You can import supported modules from npm
import { Card ,TextInput,Button} from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const mobHeight = Dimensions.get('window').height;
  const mobWidth = Dimensions.get('window').width;

  const [email,setEmail] = useState(null);
  const [pass,setPass] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <ImageBackground
        source={{
          uri: 'https://wallpapers.com/images/hd/wall-e-cool-android-vector-c0v6b0zfijwfthcm.jpg',
        }}
        blurRadius={20}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: mobWidth,
        }}>

        <Card
          style={{
            backgroundColor: 'white',
            height: mobHeight - 200,
            width: mobWidth / 1.1,
            padding:20,
          }}
          
          >
          <Image
          source={{uri:'https://img.freepik.com/free-psd/3d-nft-icon-digital-artist-male_629802-8.jpg'}}
          style={{height:200,}}
          />
          <View style={{flex:1,justifyContent:'center'}}>
          <TextInput 
          label='email'
          value={email}
          onChangeText={setEmail}
          onPress={()=>console.log(email)}
          style={{marginBottom:20,}}
          />
          <TextInput 
          label='password'
          value={pass}
          onChangeText={setPass}
          onPress={()=>console.log(pass)}
          style={{marginBottom:20,}}
          />
          <Button
          mode="contained"
          >
          Login
          </Button>

          </View>
        </Card>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // back:{
  //   width:mobWidth,
  // }
});
