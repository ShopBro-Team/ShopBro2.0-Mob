import { StyleSheet } from 'react-native'
import { black } from 'ansi-colors'

export default StyleSheet.create ({
    buttonContainer: {
        backgroundColor: '#85756E',
        paddingVertical: 15
      },
      buttonText: {
        textAlign: 'center',
        fontWeight: '700'
      },
      input: {  
        height: 40,
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1
      }


})