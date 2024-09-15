import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, StyleSheet, Image, Platform, View, Modal, Button } from 'react-native';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { db } from '../../firebaseConfig';

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

import AddFriendComponent from '../../components/AddFriendComponent';
import AddFriendButton from '../../components/AddFriendButton';
import PendingRequestBox from '@/components/PendingRequestBanner';
import PendingRequestsScreen from "@/components/PendingRequestScreen";

export default function TabTwoScreen() {
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const showRegisterComponent = () => setIsRegisterVisible(true);
  const hideRegisterComponent = () => setIsRegisterVisible(false);

  const senderId = auth.currentUser?.uid;
  const requestId = auth.currentUser?.uid;
  // const requestId = "mNqCquSeWja20u2wUe3Ql02yrVG2";
  // const senderId = "mNqCquSeWja20u2wUe3Ql02yrVG2";
  // const userName = getUsername(senderId);

  // async function getUsername(string: string) {
  //   const userRef = doc(getFirestore(), 'users', senderId);
  //   const userDoc = await getDoc(userRef);
  //   if (userDoc.exists()) {
  //     const userData = userDoc.data();
  //     return userData.name;
  //   }
  // }


  const handleFriendRequestSent = () => {
    alert("Friend request sent successfully!");
  };

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
      <Collapsible title="register tester">
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

      <Collapsible title="add friend tester">
        <View style={styles.titleContainer}>

          {senderId ? (
            <AddFriendComponent onAdd={handleFriendRequestSent} senderId={senderId} />
          ) : (
            <Text>"Please log in to send friend requests."</Text>
          )}

        </View>
      </Collapsible>

      <Collapsible title="Pending Friends Tester">
        <View style={styles.titleContainer}>
          <PendingRequestsScreen userId={requestId} />
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
