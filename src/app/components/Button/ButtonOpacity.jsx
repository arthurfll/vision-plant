import {TouchableOpacity, Text, StyleSheet} from 'react-native';


const ButtonOpacity = ({text, onPress}) => {
    return (
        
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
    )
}

export default ButtonOpacity;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width:150,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    }
})