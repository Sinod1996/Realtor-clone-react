import React, {useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged} from "firebase/auth";

function UseAuthStatus(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
            }
            setCheckingStatus(false);
        })
    }, [])
    return {loggedIn, checkingStatus};
}

export default UseAuthStatus;