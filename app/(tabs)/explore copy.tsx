import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Modal, Button } from 'react-native';

import { Collapsible } from '../../components/Collapsible';
import { ExternalLink } from '../..//components/ExternalLink';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

import RegisterComponent from '../../components/RegisterComponent';
import RegisterButton from '../../components/RegisterButton';

import React, { useState } from 'react';
import { registerUser } from '../../newUser.js';
import { auth } from '../../firebaseConfig.js';

export default function TabTwoScreen() {
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const showRegisterComponent = () => setIsRegisterVisible(true);
  const hideRegisterComponent = () => setIsRegisterVisible(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>

      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
          to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
      <Collapsible title="tester">
        <View style={styles.titleContainer}>
          <RegisterButton onPress={showRegisterComponent} />

          {/* Modal to display RegisterComponent */}
          <Modal
            visible={isRegisterVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={hideRegisterComponent}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <RegisterComponent onRegister={hideRegisterComponent} />
                <Button title="Close" onPress={hideRegisterComponent} />
              </View>
            </View>
          </Modal>
        </View>
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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

});
