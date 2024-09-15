import { StyleSheet, Image, View, Text } from 'react-native';

import Factor from '@/components/Factor'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HaBits() {
  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/cloud.png')}
          style={styles.banner}
        />
      }>
      <Text style={styles.title}>HaBits</Text>
      <View style={styles.progressContainer}>
        {/* Biggest Ring */}
        <AnimatedCircularProgress // Steps
          size={220}
          width={15}
          fill={83}
          tintColor="#ff758f"
          backgroundColor="#ffd6dd"
          style={styles.progressRing}
        />
        <AnimatedCircularProgress // Sleep
          size={180}
          width={15}
          fill={100}
          tintColor="#c8b6ff"
          backgroundColor="#e9e2ff"
          style={styles.progressRing}
        />
        <AnimatedCircularProgress // Meditation
          size={140}
          width={15}
          fill={67}
          tintColor="#57cc99"
          backgroundColor="#cdf0e0"
          style={styles.progressRing}
        />
        {/* Smallest Ring */}
        <Image source={require('@/assets/profile-pictures/pfp4.png')} style={{ width: 100, height: 100, margin: 0, borderRadius: 100 }} />
      </View>
      <Text style={styles.bits}>592 / 722 bits</Text>
      <Factor text="Steps" metric={5000} goal={6000} backgroundColor="#ff758f" />
      <Factor text="Sleep" metric={8} goal={8} backgroundColor="#c8b6ff" />
      <Factor text="Meditation" metric={10} goal={15} backgroundColor="#57cc99" />
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
  progressContainer: {
    position: 'relative',
    marginVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressRing: {
    position: 'absolute',
  },
  bits: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 'auto'
  },
});
