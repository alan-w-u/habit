import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

const imageMap: { [key: string]: any } = {
  1: require('@/assets/profile-pictures/pfp1.png'),
  2: require('@/assets/profile-pictures/pfp2.png'),
  3: require('@/assets/profile-pictures/pfp3.png'),
  4: require('@/assets/profile-pictures/pfp4.png'),
  5: require('@/assets/profile-pictures/pfp5.png'),
  6: require('@/assets/profile-pictures/pfp6.png')
};

const FriendRequest: React.FC<{ name: string, pictureNumber: number }> = ({
  name,
  pictureNumber
}) => {
  const profileImage = imageMap[pictureNumber];

  return (
    <View style={[styles.requestContainer]}>
      <Image source={profileImage} style={{ width: 50, height: 50, borderRadius: 100 }} />
      <Text style={styles.text}>{name}</Text>
      <View style={styles.requestButtons}>
        <Pressable style={styles.acceptButton}>
          <Text style={styles.acceptText}>✓</Text>
        </Pressable>
        <Pressable style={styles.denyButton}>
          <Text style={styles.denyText}>x</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  requestContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 75,
    paddingHorizontal: 10,
    backgroundColor: '#fcefb4',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 'auto'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40'
  },
  requestButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  acceptButton: {
    backgroundColor: '#cdf0e0',
    borderRadius: 10,
    marginRight: 5
  },
  acceptText: {
    width: 50,
    height: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  denyButton: {
    backgroundColor: '#ffd6dd',
    borderRadius: 10,
    marginLeft: 5
  },
  denyText: {
    width: 50,
    height: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default FriendRequest;
