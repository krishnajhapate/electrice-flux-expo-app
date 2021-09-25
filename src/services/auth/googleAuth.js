import * as GoogleAuthentication from 'expo-google-app-auth';
import firebase from 'firebase';

export const signInWithGoogle = () => 
    GoogleAuthentication.logInAsync({
        androidStandaloneAppClientId: 'ANDROID_STANDALONE_APP_CLIENT_ID',
        iosStandaloneAppClientId: 'IOS_STANDALONE_APP_CLIENT_ID',
        scopes: ['profile', 'email']
    })
        .then((logInResult) => {
            if (logInResult.type === 'success') {
                const { idToken, accessToken } = logInResult;
                const credential = firebase.auth.GoogleAuthProvider.credential(
                    idToken,
                    accessToken
                );

                return firebase.auth().signInWithCredential(credential);
                // Successful sign in is handled by firebase.auth().onAuthStateChanged
            }
            return Promise.reject(); // Or handle user cancelation separatedly
        })
        .catch((error) => {
            // ...
        });