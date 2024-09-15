import { StyleSheet, Image, Platform, View, Text, Modal, Button, TextInput, TouchableOpacity } from 'react-native';

import { useState } from 'react';

// import useHealthData from '@/hooks/useHealthData';

import Factor from '@/components/Factor'

import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { auth } from '@/firebaseConfig';
import RegisterComponent from '../../components/RegisterComponent';
import RegisterButton from '../../components/RegisterButton';

export default function HaBits() {
  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2
  };

  const [authMode, setAuthMode] = useState('login');
  const [registered, setRegistered] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const showRegisterComponent = () => {
    setIsRegisterVisible(true); setAuthMode('register');
  };
  const hideRegisterComponent = () => {
    setIsRegisterVisible(false); setRegistered(true)
  }
  const closeRegister = () => setAuthMode('login');

  const senderId = auth.currentUser?.uid;
  const requestId = auth.currentUser?.uid;

  const images = [
    require('@/assets/profile-pictures/pfp1.png'),
    require('@/assets/profile-pictures/pfp2.png'),
    require('@/assets/profile-pictures/pfp3.png'),
    require('@/assets/profile-pictures/pfp4.png'),
    require('@/assets/profile-pictures/pfp5.png'),
    require('@/assets/profile-pictures/pfp6.png'),
  ];


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#3d3c3c' }}
      headerImage={
        <Image
          source={require('@/assets/images/cloud.png')}
          style={styles.banner}
        />
      }>
      <Text style={styles.title}>HaBits</Text>
      {authMode === 'login' && registered === false &&
        <>
          <TextInput style={styles.searchbar} placeholder='email address' />
          <TextInput style={styles.searchbar} placeholder='password' />
          <Button title='Submit'></Button>
          <TouchableOpacity onPress={showRegisterComponent}>
            <Text style={styles.text}>Not a registered user? Register here!</Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <View style={styles.row}>
              {images.map((image, index) => (
                <Image
                  key={index}
                  source={image}
                  style={styles.image}
                />
              ))}
            </View>
          </View>

          <View style={styles.blank} />
        </>

      }
      {authMode === 'register' && registered === false &&
        <>

          <Modal
            visible={isRegisterVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={hideRegisterComponent}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <RegisterComponent onRegister={hideRegisterComponent} />
                <Button title="Close" onPress={closeRegister} />
              </View>
            </View>
          </Modal>

          <View style={styles.blank} />
        </>
      }
      {registered === true &&
        <>
          <Text style={styles.title}>HaBits</Text>
          <View style={styles.progressContainer}>
            {/* Biggest Ring */}
            <AnimatedCircularProgress // Steps
              size={220}
              width={15}
              fill={90}
              tintColor="#ff758f"
              backgroundColor="#ffd6dd"
              style={styles.progressRing}
            />
            <AnimatedCircularProgress // Sleep
              size={180}
              width={15}
              fill={80}
              tintColor="#c8b6ff"
              backgroundColor="#e9e2ff"
              style={styles.progressRing}
            />
            <AnimatedCircularProgress // Meditation
              size={140}
              width={15}
              fill={60}
              tintColor="#57cc99"
              backgroundColor="#cdf0e0"
              style={styles.progressRing}
            />
            {/* Smallest Ring */}
            <Image source={require('@/assets/profile-pictures/pfp4.png')} style={{ width: 100, height: 100, margin: 0, borderRadius: 100 }} />
          </View>
          <Text style={styles.bits}>... bits</Text>
          <Factor text="Steps" metric={100} backgroundColor="#ff758f" />
          <Factor text="Sleep" metric={100} backgroundColor="#c8b6ff" />
          <Factor text="Meditation" metric={100} backgroundColor="#57cc99" />
        </>
      }
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

  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  searchbar: {
    width: 245,
    fontSize: 20,
    padding: 10,
    borderColor: '#eeeeee',
    borderWidth: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },

  text: {
    fontSize: 10,
    padding: 10,
    borderColor: '#eeeeee',
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },

  // friendContainer: {
  //   width: 100%,
  //   height: 100%,
  //   paddingHorizontal: 20,
  //   marginVertical: 10,
  //   backgroundColor: '#eeeeee',
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   marginHorizontal: 'auto'
  // },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute space evenly
    alignItems: 'center', // Center items vertically
    width: '100%',
  },
  image: {
    width: 60, // Set desired width
    height: 60, // Set desired height
    borderRadius: 10, // Optional: add border radius
  },
  blank: {
    width: '200%',
    height: 100,
    bottom: 0,
    backgroundColor: '#a27fbc',
    left: -50,
    marginVertical: 150,
    zIndex: 3,
  },
});
