import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const user = null

const authInfo = {
    user,
}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;