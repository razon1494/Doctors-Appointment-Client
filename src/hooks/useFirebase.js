import {useEffect, useState} from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/Firebase.init";
import {getAuth, createUserWithEmailAndPassword,signInWithPopup, signInWithEmailAndPassword ,GoogleAuthProvider ,updateProfile , onAuthStateChanged, getIdToken, signOut} from "firebase/auth";



//initialize firebase app
initializeFirebase();
const useFirebase=() => {
  const [user, setUser]=useState({});
  const [isLoading, setIsLoading]=useState(true);
  const [authError, setAuthError]=useState('');
  const [admin, setAdmin]=useState(false);
  const [token, setToken]=useState('');
    const auth=getAuth();
  const googleProvider=new GoogleAuthProvider();

    //register user
  const registerUser=(email, password, history, name) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           setAuthError('');
           const newUser={email, displayName: name}
           //send name to firebase after creation
           setUser(newUser);
           //save user to the database
          saveUser(email, name, 'POST')
              updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {

              }).catch((error) => {

              });
           history.replace('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage=error.message;
    setAuthError(errorMessage)
    // ..
  })
          .finally(()=>  setIsLoading(false));
    }
    //sign in
  const loginUser=(email, password, location, history) => {
    setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
    //location set
            const destination=location.state?.from||'/';
            history.replace(destination);
    // Signed in
    setAuthError('');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage=error.message;
    setAuthError(errorMessage)
  }).finally(()=>  setIsLoading(false));
  }

  //google sign in
  const signInWithGoogle=(location, history) => {
    setIsLoading(true);
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user=result.user;
    saveUser(user.email, user.displayName, 'PUT')
    setAuthError('');
    const destination=location.state?.from||'/';
            history.replace(destination);

  }).catch((error) => {
    setAuthError(error.message)
  }).finally(()=>  setIsLoading(false));

}
//observer
    useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {

    setUser(user);
    getIdToken(user)
    .then(idToken => {
      setToken(idToken)
    })
  } else {
    setUser({})
    }
    setIsLoading(false);
  });
        return () => unsubscribe;
    }, [auth]);

  useEffect(() => {
    fetch(`https://ancient-spire-33110.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
      setAdmin(data.admin)
    })
  },[user.email])
    //log out
    const logout= () => {
    signOut(auth).then(() => {
  // Sign-out successful.
    }).catch((error) => {
  setAuthError(error.message)
  // An error happened.
}).finally(()=>  setIsLoading(false));;
  }
  const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://ancient-spire-33110.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
      user,
      admin,
      token,
      isLoading,
      signInWithGoogle,
        registerUser,
      loginUser,
        authError,
        logout
    }

};

export default useFirebase;