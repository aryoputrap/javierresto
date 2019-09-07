import { StyleSheet} from 'react-native'

export const Color = {
  backgroundColor : '#FAFAFA',
  primaryColor : '#e67e22',
  darkPrimaryColor : '#e67e22',
  accentColor : '#FFF',
  lightPrimaryColor : '#B3E5FC',
  primaryTextColor : '#e67e22',
  secondaryTextColor : '#757575',
  deviderColor : '#BDBDBD',
  whiteColor : '#FFFFFF',
  errorColor : '#E53935',
  successColor: '#018786'
}
export const Styles = StyleSheet.create({
  container : {
    flex:1
  },
  content:{
    padding:10
  },
  cardSimpleContainer: {
    shadowColor: '#000000',
    shadowOffset: {
      height: 3,
      width: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: Color.whiteColor,
    borderRadius: 3,
    elevation: 4
  },
  hurufKonten:{
    fontSize:16,
    color:Color.primaryTextColor
  }
})