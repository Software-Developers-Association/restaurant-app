import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../components/InputField';
import Button from '../components/Button';
import {UserContext} from '../context/UserContext';

const genericPhoto = "https://www.shareicon.net/data/512x512/2015/09/24/106687_user_512x512.png";

const propTypes = {
    onDismissed: PropTypes.func
};

export default function SignIn(props) {
    const {
        onDismissed = undefined,
        authCallback = undefined
    } = props;

    const userContext = React.useContext(UserContext);
    const [user, setUser] = userContext;

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const doSignIn = () => {
        fetch(
            'http://localhost:9000/auth',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                }),
                mode: 'cors'
            })
            .then(response => response.json())
            .then(serverResponse => {
                setUser(serverResponse.user);

                switch(serverResponse.code) {
                    case 400: {
                        authCallback(false);
                    } break;
                    case 200: {
                        authCallback(true);
                    } break;
                    default: {
                        authCallback(false);
                    } break;
                }
            })
            .catch(err => {
                console.log("Request failed: " + err);

                authCallback(false);
            });
    };

    return (
        <div
            style={{
                zIndex: 0
            }}
            className="absolute left-0 bottom-0 h-full w-full bg-black bg-opacity-50 flex flex-col justify-end md:justify-center md:bg-white">
            <div
                style={{
                    zIndex: -1
                }}
                className="absolute h-full w-full md:hidden"
                onClick={() => {
                    onDismissed && onDismissed();
                }}>
            </div>
            
            <div
                style={{
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px'
                }}
                className="signup-form bg-white max-w-xs mx-auto px-5 py-5 space-y-5">
                {/* Header Section */}
                <div className="flex justify-between items-start">
                    <span className="text-xl font-bold">
                        Welcome back!
                    </span>
                    <div className="h-10 w-10 rounded-full bg-white overflow-hidden">
                        <img className="h-full object-cover" src={`${genericPhoto}`} alt="user icon" />
                    </div>
                </div>

                {/* Body Section */}
                <div className="flex flex-col space-y-2">
                    <InputField
                        label="Username"
                        onChange={(ev) => setUsername(ev.target.value)} />
                    <InputField
                        isPassword={true}
                        label="Password"
                        onChange={(ev) => setPassword(ev.target.value)} />
                    <a href="#" className="text-right px-3 text-purple-500">Forgot password?</a>
                </div>

                <div className="flex space-x-2">
                    <Button
                        className="w-full"
                        buttonStyle={`${Button.styles.contained}`}
                        text="Sign in"
                        onClick={(ev) => doSignIn(ev)} />
                    <Button className="w-full hidden md:inline-block" buttonStyle={`${Button.styles.text}`} text="Cancel" onClick={() => {
                        onDismissed && onDismissed();
                    }} />
                </div>
            </div>
        </div>
    );
}

SignIn.propTypes = propTypes;