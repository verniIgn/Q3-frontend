import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
 root: {
   flex: 1
 },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%'
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'montserrat'
  },
  contentContainer: {
    flex: 1
  },
  chatCard: {
    height: 200,
    width: 175,
    marginHorizontal: '1.5%',
    backgroundColor: '$redColor'
  },
  chatCardTopContainer: {
    flex: 1,
    position: 'relative'
  },
  chatCardTitle: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%'
  },
  chatCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%'
  },
  chatCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat'
  },
  chatCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight'
  }
});

export default styles;
