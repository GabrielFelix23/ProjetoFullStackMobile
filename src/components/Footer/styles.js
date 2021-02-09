import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 70,
        backgroundColor: '#20295f',
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 5,
        borderTopColor: '#ee6b26',
        alignItems: 'center'
    },
    button: {
        position: 'relative',
        top: -48
    },
    image:{
        width: 80,
        height: 80
    },
    text: {
        position: 'relative',
        top: -40,
        color: '#fff'
    }
})

export default styles