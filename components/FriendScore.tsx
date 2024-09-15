import { StyleSheet, Text, View } from 'react-native';

const Factor: React.FC<{name: string, haBits: number, backgroundColor?: string}> = ({
  name,
  haBits,
  backgroundColor = '#eeeeee',
}) => {
  return (
    <View style={[styles.scoreContainer, { backgroundColor }]}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.metric}>{haBits} haBits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 75,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 'auto'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40',
  },
  metric: {
    fontSize: 18,
    marginLeft: 'auto'
  }
});

export default Factor;
