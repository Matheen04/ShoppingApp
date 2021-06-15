import { useState } from 'react';
import '../App.css';
import GoogleLogin from '../Google/GoogleLogin';
import GoogleLogout from '../Google/GoogleLogout';
import SkipLogin from './SkipLogin';
import DisplayProducts from './DisplayProducts';

const LoginComponent = () => {
    const [showLoginSection, setShowLoginSection] = useState(true);

    



    return (
        <>
            {
                showLoginSection &&
                <div className="App">
                    <header className="App-header">
                        <h1 className="headerText">Welcome to Shopping Zone</h1>
                        <GoogleLogin />
                        <GoogleLogout />
                        <SkipLogin setShowLoginSection={setShowLoginSection} />
                    </header>
                </div>
            }
            {
                !showLoginSection &&
                <>
                    <header className="Shopping-Page-App-header">
                        <h1 className="shoppingPageHeaderText">Shopping Zone</h1>
                    </header>
                    <DisplayProducts />
                </>

            }
        </>
    );
}

export default LoginComponent;
