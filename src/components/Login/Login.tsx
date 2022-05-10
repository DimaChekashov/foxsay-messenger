import React, { useContext } from 'react';
import { Context } from '../../index';
import firebase from 'firebase';
import './Login.scss';

const Login: React.FC = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  }

  return (
    <div className="login">
      <button className="login__btn" onClick={login}>Login via Google</button>
    </div>
  );
}

export default Login;
