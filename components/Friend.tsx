import { StyleSheet, Text, View, Image } from 'react-native';

const imageMap: { [key: string]: any } = {
  1: require('@/assets/profile-pictures/pfp1.png'),
  2: require('@/assets/profile-pictures/pfp2.png'),
  3: require('@/assets/profile-pictures/pfp3.png'),
  4: require('@/assets/profile-pictures/pfp4.png'),
  5: require('@/assets/profile-pictures/pfp5.png'),
  6: require('@/assets/profile-pictures/pfp6.png')
};

const Friend: React.FC<{ name: string, pictureNumber: number }> = ({
  name,
  pictureNumber
}) => {
  const profileImage = imageMap[pictureNumber];

  return (
    <View style={[styles.friendContainer]}>
      <Image source={profileImage} style={{ width: 100, height: 100, borderRadius: 100 }} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  friendContainer: {
    width: 130,
    height: 150,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#eeeeee',
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

export default Friend;
