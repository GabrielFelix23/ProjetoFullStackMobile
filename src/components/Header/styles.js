import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#20295f',
        borderBottomWidth: 5,
        borderBottomColor: '#ee6b26',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 100,
        height: 40    
    },
    notification:{
        position: 'absolute',
        right: 20,
    },
    notificationImage:{
        width: 30,
        height: 35,
    },
    notificationText:{
        fontWeight: 'bold',
        color: '#ee6b26'
    },
    circle:{
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
    },
    leftIcon:{
        position: 'absolute',
        left: 20,
    },
    leftIconImage: {
        width: 30,
        height: 30
    },
})

export default styles