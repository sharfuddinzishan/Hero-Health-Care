import { useEffect, useState } from 'react';
import initialization from './../firebase/firebaseInitialize';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification
} from "firebase/auth";
import Login from '../component/Login/Login';
import { Redirect } from 'react-router';

initialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            // .then(response => {
            //     setUser(response.user);
            //     setError('');
            // })
            // .catch(error => setError(error.message))
            .finally(() => { setLoading(false) });
    }
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
            .finally(() => {
                setLoading(false);
                sendVerification();
            });
    }
    const signInEmailPass = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
            .finally(() => {
                setLoading(false);
            });
    }
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }
    const sendVerification = () => sendEmailVerification(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    return {
        user,
        loading,
        setUser,
        setError,
        error,
        signInGoogle,
        signInEmailPass,
        logOut,
        createUser
    };
};

export default useFirebase;