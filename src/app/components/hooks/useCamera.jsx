import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useState , useRef} from 'react';


function useCamera() {
    const [permission, requestPermission] = useCameraPermissions()
    const cameraRef = useRef(null);
    const [facing, setFacing] = useState('back')
        
    const takePicture = async (options = {quality: 0.5, base64: true}) => {
        if (cameraRef.current) {
            try{
            const data = await cameraRef.current.takePictureAsync(options)
            return data
            }
            catch(error){
                return null
            }
           }
            return null
            }

        const toggleCameraType = () => {
          setFacing(current => (current === 'back' ? 'front' : 'back'));
            
        }
    return {
       permission,
       cameraRef,
       facing,
       takePicture,
       toggleCameraType,
       requestPermission
    }
}


export default useCamera
