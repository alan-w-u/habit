import { Image, StyleSheet, Platform, View } from 'react-native';

import useHealthData from '../../hooks/useHealthData';

import Factor from '../../components/Factor'

import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const props = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.2
};

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/cloud.png')}
          style={styles.cloud}
        />
      }>
      <View style={styles.progressContainer}>
        {/* Biggest Ring */}
        <AnimatedCircularProgress // Steps
          size={160}
          width={15}
          fill={90}
          tintColor="#ff758f"
          backgroundColor="#ffd6dd"
          style={styles.progressRing}
        />
        <AnimatedCircularProgress // Sleep
          size={120}
          width={15}
          fill={80}
          tintColor="#c8b6ff"
          backgroundColor="#e9e2ff"
          style={styles.progressRing}
        />
        <AnimatedCircularProgress // Meditation
          size={80}
          width={15}
          fill={60}
          tintColor="#57cc99"
          backgroundColor="#cdf0e0"
          style={styles.progressRing}
        />
        {/* Smallest Ring */}
      </View>
      <Factor text="Steps" metric="100" backgroundColor="#ff758f" />
      <Factor text="Sleep" metric="100" backgroundColor="#c8b6ff" />
      <Factor text="Meditation" metric="100" backgroundColor="#57cc99" />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  cloud: {
    height: 200,
    width: 400,
    position: 'absolute',
  },
  progress: {
    marginVertical: 10,
    marginHorizontal: 'auto'
  },
  progressContainer: {
    position: 'relative',
    marginVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressRing: {
    position: 'absolute',
  },
});
