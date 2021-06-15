import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import googleSymbol from '../Icons/google.png'

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function GoogleLogout() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src={googleSymbol} className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default GoogleLogout;