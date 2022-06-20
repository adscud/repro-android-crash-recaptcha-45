import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha";

function HomeScreen({navigation}: any) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button title={'Do crash'} onPress={() => {
                navigation.navigate('WithRecaptcha')
            }}/>
        </View>
    );
}

function WithRecaptcha() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>WithRecaptcha</Text>
            <FirebaseRecaptchaVerifierModal
                firebaseConfig={{
                    apiKey: "AIzaSyA0x05x4FDnCY0xVv8bD-lYAUIRYaSOnps",
                    authDomain: "repro-android-crash.firebaseapp.com",
                    projectId: "repro-android-crash",
                    storageBucket: "repro-android-crash.appspot.com",
                    messagingSenderId: "987245785523",
                    appId: "1:987245785523:web:af91174bdf3c5a6e1d5bc6"
                }}
                attemptInvisibleVerification
                androidHardwareAccelerationDisabled
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="WithRecaptcha" component={WithRecaptcha}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
