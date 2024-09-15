import { StyleSheet, Text, View, Image } from 'react-native';

const colourMap: { [key: string]: any } = {
  1: '#ffd700', // Gold
  2: '#c0c0c0', // Silver
  3: '#cd7f32', // Bronze
  4: '#eeeeee' // General
};

const imageMap: { [key: string]: any } = {
  1: require('@/assets/profile-pictures/pfp1.png'),
  2: require('@/assets/profile-pictures/pfp2.png'),
  3: require('@/assets/profile-pictures/pfp3.png'),
  4: require('@/assets/profile-pictures/pfp4.png'),
  5: require('@/assets/profile-pictures/pfp5.png'),
  6: require('@/assets/profile-pictures/pfp6.png')
};

const FriendScore: React.FC<{ name: string, bits: number, pictureNumber: number, standing: number }> = ({
  name,
  bits,
  pictureNumber,
  standing
}) => {
  const colour = colourMap[standing] || '#eeeeee';
  const profileImage = imageMap[pictureNumber];

  return (
    <View style={[styles.scoreContainer, { backgroundColor: colour }]}>
      <Image source={profileImage} style={{ width: 50, height: 50, borderRadius: 100 }} />
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
    paddingHorizontal: 10,
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
