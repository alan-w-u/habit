import getPendingRequests from '@/PendingRequests';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AcceptFriendIcon from './AcceptFriendButton';
import RejectFriendIcon from './RejectFriendButton';
import { acceptFriendRequest } from '@/friendRequests';
import { rejectFriendRequest } from '@/friendRequests';

interface Request {
  requestId: string;
  senderId: string;
}

interface PendingRequestsProps {
  userId: string | undefined;
}

const PendingRequestsScreen: React.FC<PendingRequestsProps> = ({ userId }) => {
  const [pendingRequests, setPendingRequests] = useState<Request[]>([]);
  const [error, setError] = useState<string | null>(null);

  try {
    useEffect(() => {
      const fetchPendingRequests = async () => {
        const requests = await getPendingRequests(userId);
        setPendingRequests(requests);
      };

      fetchPendingRequests();
    }, [userId]);
  } catch (error) {
    setError("Pending requests failed");
    console.error(error);

  }


  return (
    <View>
      {pendingRequests.length === 0 ? (
        <Text>No pending requests</Text>
      ) : (
        <FlatList
          data={pendingRequests}
          keyExtractor={(item) => item.requestId}
          renderItem={({ item }) => (
            <View>
              <Text>Request from: {item.senderId}</Text>
              <AcceptFriendIcon onPress={acceptFriendRequest} />
              <RejectFriendIcon onPress={rejectFriendRequest} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default PendingRequestsScreen;

