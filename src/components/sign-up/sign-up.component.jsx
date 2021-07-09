import React from "react";
import './sign-in.styles.scss';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from "../forminput/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ""
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password, confirmPassword, displayName} = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ""
            })
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className={'sign-up'}>
                <h2 className={'title'}>i do not have a account </h2>
                <span>sign up with your email and password</span>
                <form className={'sign-up-form'} onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} type={'text'} name={'displayName'} value={displayName}
                               label={'Display Name'} required/>
                    <FormInput handleChange={this.handleChange} type={'email'} name={'email'} value={email}
                               label={"Email"} required/>
                    <FormInput handleChange={this.handleChange} type={'password'} name={'password'} value={password}
                               label={'Password'} required/>
                    <FormInput handleChange={this.handleChange} type={'password'} name={'confirmPassword'}
                               value={confirmPassword}
                               label={'Confirm Password'} required/>
                    <CustomButton type={'submit'}>Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;