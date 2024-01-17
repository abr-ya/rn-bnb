import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Colors from '@/constants/Colors'
import { Button, Text, View } from 'react-native'
import { Link } from 'expo-router';

const Profile = () => {
  const { isSignedIn, signOut } = useAuth();

  return (
    <View>
      <Text>Profile</Text>
      {isSignedIn 
        ? <Button title="Log Out" onPress={() => signOut()} color={Colors.dark} />
        : (<Link href={'/(modals)/login'} asChild>
            <Button title="Log In" color={Colors.dark} />
          </Link>)
      }
    </View>
  )
}

export default Profile