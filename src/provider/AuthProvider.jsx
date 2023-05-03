import React, { createContext, useState, useEffect } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // Email and Password Sign In
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign In
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    // Github Sign In
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubAuthProvider);
    }
    
    // Log Out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // updateProfileName and photo url url
    const updateProfileAndPhoto = (user, name, photo) =>{
        setLoading(true);
        return updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }

    // observer user with auth state
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })

        // stop observing while mounting
        return () =>{
            return unsubscribe();
        }
    }, [])
    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        updateProfileAndPhoto,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;