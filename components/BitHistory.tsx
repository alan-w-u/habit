import { StyleSheet, Text, View, Image } from 'react-native';

const FriendScore: React.FC<{ date: string, bits: number}> = ({
  date,
  bits
}) => {
  return (
    <View style={[styles.bitContainer]}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.metric}>{bits} bits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bitContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 75,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 'auto',
    marginVertical: 5,
    backgroundColor: '#eeeeee'
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
  },
  metric: {
    fontSize: 16,
    marginLeft: 'auto'
  }
});

export default FriendScore;
