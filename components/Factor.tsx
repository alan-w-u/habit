import { StyleSheet, Text, View } from 'react-native';

const Factor: React.FC<{ text: string, metric: number, goal: number, backgroundColor?: string }> = ({
  text,
  metric,
  goal,
  backgroundColor = '#eeeeee',
}) => {
  return (
    <View style={[styles.progress, { backgroundColor }]}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.metrics}>
        <Text style={styles.metric}>{metric} / {goal} {findUnit(text)}</Text>
        <Text style={styles.metric}>{calculateBits(text, metric) + ' bits'}</Text>
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

const calculateBits = (text: string, metric: number) => {
  switch (text) {
    case 'Steps':
      return metric / 10;
    case 'Sleep':
      return metric * 4;
    case 'Meditation':
      return metric * 6;
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
