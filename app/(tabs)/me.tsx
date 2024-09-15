import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { Collapsible } from '../../components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import BitHistory from '@/components/BitHistory'

export default function Me() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/cloud.png')}
          style={styles.banner}
        />
      }>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={require('@/assets/profile-pictures/pfp4.png')} style={{ width: 100, height: 100, margin: 0, borderRadius: 100 }} />
        <Text style={styles.name}>John Jacobs</Text>
        <Text style={styles.email}>john.jacobs@gmail.com</Text>
      </View>
      <Collapsible title='Bit History'>
        <BitHistory date='Sep 9' bits={500} />
        <BitHistory date='Sep 8' bits={450} />
        <BitHistory date='Sep 7' bits={525} />
        <BitHistory date='Sep 6' bits={580} />
        <BitHistory date='Sep 5' bits={450} />
      </Collapsible>
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
  banner: {
    height: 200,
    width: 400,
    position: 'absolute',
  },
  profileContainer: {
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 15,
  },
});
