import React, {Component} from 'react';
import Request from 'superagent';
import './../../styles/login/index.css';

class Login extends Component {
    loginCall() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        Request.post('http://localhost:5555/api/login')
        .send({
            email: email,
            password: password
        }).then(function(res) {
            let message = res.text,
                messageContainer = document.querySelector('.messages');

            messageContainer.innerHTML = '<div class="message is--success">' + message + '</div>';

            document.cookie = "auth=";

        }).catch(function(err) {
            let message = err.message,
                messageContainer = document.querySelector('.messages');

            messageContainer.innerHTML = '<div class="message is--error">' + message + '</div>';
        });

    }
    render() {
        return (
            <div className={"login--container"}>
                <div className={"messages"}/>
                <div className={"login--form"}>
                    <input placeholder={"Emailadresse"} type={"text"} id={"email"} name={"email"} />
                    <input placeholder={"Passwort"} type={"password"} id={"password"} name={"password"} />
                    <button onClick={this.loginCall}>Anmelden</button>
                </div>
            </div>
        );
    }
}

export default Login;