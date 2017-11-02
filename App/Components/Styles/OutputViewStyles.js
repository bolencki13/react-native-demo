import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  output: {
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.windowTint,
    margin: Metrics.baseMargin,
    marginTop: Metrics.doubleBaseMargin,
    borderRadius: Metrics.buttonRadius,
    overflow: 'hidden',
    padding: 5
  },
  outputText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: Fonts.size.h4,
    height: Fonts.size.h4,
    textAlign: 'right',
  },
})
