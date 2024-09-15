import { StyleSheet, Image, Platform, Text } from 'react-native';

import FriendScore from '@/components/FriendScore'

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Leaderboard() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/cloud.png')}
          style={styles.banner}
        />
      }>
      <Text style={styles.title}>Leaderboard</Text>
      <FriendScore name='Kashish' bits={700} pictureNumber={1} standing={1} />
      <FriendScore name='Caitlyn' bits={650} pictureNumber={5} standing={2} />
      <FriendScore name='Katherine' bits={450} pictureNumber={2} standing={3} />
      <FriendScore name='Adrian' bits={300} pictureNumber={4} standing={4} />
      <FriendScore name='Donald' bits={100} pictureNumber={3} standing={5} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#343a40',
    marginHorizontal: 'auto',
    textAlign: 'center',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  banner: {
    height: 200,
    width: 400,
    position: 'absolute',
  },
});
