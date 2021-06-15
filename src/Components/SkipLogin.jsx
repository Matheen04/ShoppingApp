import React from 'react';
import googleSymbol from '../Icons/google.png'
import '../App.css';

const SkipLogin = (props) => {
  const {setShowLoginSection} = props;
  const onSkipLogin = () => {
    setShowLoginSection(false);
  }

  return (
    <a onClick = {onSkipLogin} className="link">
      <span className="linkText">Skip Login</span>
    </a>
  );
}

export default SkipLogin;