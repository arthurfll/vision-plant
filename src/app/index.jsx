import {View, Text, StyleSheet, Image, Button} from 'react-native';
import visionplant from '../../assets/img/visionplant.png';
import ButtonOpacity from './components/Button/ButtonOpacity'
import CameraScreen from './components/CameraScreen/CameraScreen';
import {useState} from 'react';

export default function Index () {
  const [cameraVisible, setCameraVisible] = useState(false);
  const [PictureUri, setPictureUri] = useState(null);

  const handlePictureTaken = (uri) => {
    setPictureUri(uri);
    setCameraVisible(false);
  }

  const handleCloseCamera = () => {
    setCameraVisible(false);
  }

  if (cameraVisible) {
    return  <CameraScreen 
               onPictureTaken={handlePictureTaken}
               onClose={handleCloseCamera}
            />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo ao <Text style={styles.spanVision}>Vision</Text> <Text style={styles.spanPlant}>Plant!</Text></Text>
      <Image source={visionplant} style={{width: 300, height: 300, resizeMode: 'contain'}} />
      <ButtonOpacity text={PictureUri ? "Identificar outra Planta" : "Identificar Planta"}
      onPress={()=> setCameraVisible(true)}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5ab'
  },
  spanPlant: {
    color: '#4CAF50'
  },
  spanVision: {
    color: '#2196F3'
  }
})

