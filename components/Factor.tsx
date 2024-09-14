import { StyleSheet, Text, View } from 'react-native';

const Factor: React.FC<{text: string, metric: string, backgroundColor?: string, textColor?: string}> = ({
  text,
  metric,
  backgroundColor = '#A9A9A9',
  textColor = '#343a40'
}) => {
  return (
    <View style={[styles.box, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      <Text style={[styles.metric, { color: textColor }]}>{metric}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 75,
    paddingHorizontal: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 'auto'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  metric: {
    fontSize: 18,
    marginLeft: 'auto'
  }
});

export default Factor;
