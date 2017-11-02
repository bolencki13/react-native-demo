import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: Metrics.buttonRadius,
    overflow: 'hidden',
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.button
  },
  buttonHelper: {
    flex: 1,
    borderRadius: Metrics.buttonRadius,
    overflow: 'hidden',
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.buttonHelper
  },
  buttonAction: {
    flex: 1,
    borderRadius: Metrics.buttonRadius,
    overflow: 'hidden',
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.buttonAction
  },
  buttonLong: {
    flex: 2.35,
    borderRadius: Metrics.buttonRadius,
    overflow: 'hidden',
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.button
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.input,
    marginVertical: Metrics.baseMargin,
    borderRadius: Metrics.borderRadius,
    overflow: 'hidden'
  },
})
