import { StyleSheet, Text, View } from 'react-native';

const colourMap: { [key: string]: any } = {
  1: '#ffd700', // Gold
  2: '#c0c0c0', // Silver
  3: '#cd7f32', // Bronze
  4: '#eeeeee' // General
};

const FriendScore: React.FC<{ name: string, bits: number, standing: number }> = ({
  name,
  bits,
  standing
}) => {
  const colour = colourMap[standing] || '#eeeeee';

  return (
    <View style={[styles.scoreContainer, { backgroundColor: colour }]}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.metric}>{bits} bits</Text>
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

export default FriendScore;
