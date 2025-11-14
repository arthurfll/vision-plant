import React from 'react';
import useCamera from '../hooks/useCamera';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { CameraView } from 'expo-camera';


export default function CameraScreen({onPictureTaken, onClose}) {
     const {
        permission,
        cameraRef,
        facing,
        takePicture,
        toggleCameraType,
        requestPermission
     } = useCamera()

     const handleCapture = async () => {
        const data = await takePicture()
        if(data){
            onPictureTaken(data.uri)
        }
     }

     if (!permission) {
        return <View>
            <TouchableOpacity styles={styles.container}>
                <Text>Verificando permissão da câmera...</Text>
            </TouchableOpacity>
        </View>
     }

     if (!permission.granted){
        return (
            <View style={styles.container}>
                <Text>Permissão negada para uso da Câmera.</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}>
                    <Text style={styles.text}>Dar Permissão</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose} style={styles.button}>
                    <Text style={styles.text}>Voltar</Text>
                </TouchableOpacity>
            </View>
        )
     }
     
     return (
        <View style={styles.container}>
            <View style={{width: '100%', height: '90%'}}>
                <CameraView
                  facing={facing}
                  style={styles.camera}
                  ref={cameraRef}                
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.analisarButton} onPress={handleCapture}>
                        <Text style={styles.text}>Analisar Planta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trocarCamera} onPress={toggleCameraType}>
                        <Text style={styles.text}>Trocar Câmera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.fecharCamera} onPress={onClose}>
                        <Text style={styles.text}>Fechar Câmera</Text>
                    </TouchableOpacity>
                
                </View>

            </View>
        </View>
     )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    camera: {
        flex: 1,
    },
    button:{
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width:150,
    },
     text: {
        color: '#fff',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
        
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        gap: 5
    },
    analisarButton: {
        backgroundColor: '#2196F3',
        padding: 20,
        alignItems: 'center',
        width:120,
        borderRadius: 10,
    },
    trocarCamera: {
        backgroundColor: '#0aee62ff',
        padding: 20,
        alignItems: 'center',
        width:125,
        borderRadius: 10,
    },
    fecharCamera: {
        backgroundColor: '#rgba(241, 20, 4, 1)',
        padding: 20,
        alignItems: 'center',
        width:120,
        borderRadius: 10,
    }
})