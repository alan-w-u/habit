import { StyleSheet, Text, View } from 'react-native';

const Factor: React.FC<{ text: string, metric: number, backgroundColor?: string }> = ({
  text,
  metric,
  backgroundColor = '#eeeeee',
}) => {
  return (
    <View style={[styles.progress, { backgroundColor }]}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.metrics}>
        <Text style={styles.metric}>{metric} {findUnit(text)}</Text>
        <Text style={styles.metric}>{calculateHaBits(text, metric) + ' haBits'}</Text>
      </View>
    </View>
  );
};

const findUnit = (text: string) => {
  switch (text) {
    case 'Steps':
      return 'steps';
    case 'Sleep':
      return "hours";
    case 'Meditation':
      return 'minutes';
    default:
      return "";
  }
}

const calculateHaBits = (text: string, metric: number) => {
  switch (text) {
    case 'Steps':
      return metric / 50;
    case 'Sleep':
      return metric * 1.25;
    case 'Meditation':
      return metric * 2;
    default:
      return 0;
  }
}

const styles = StyleSheet.create({
  progress: {
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
  metrics: {
    marginLeft: 'auto'
  },
  metric: {
    fontSize: 18,
    marginVertical: 3,
    marginLeft: 'auto',
  }
});

export default Factor;
