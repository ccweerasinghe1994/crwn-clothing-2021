import React from "react";
import './sign-in.styles.scss';
import FormInput from "../forminput/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: "",
            password: ""
        })
    }
    handleChane = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className={'sign-in'}>
                <h2>i already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" handleChange={this.handleChane} type="email" name={"email"}
                               value={this.state.email} required/>
                    <FormInput label="password" handleChange={this.handleChane} type="password" name={"password"}
                               value={this.state.password}
                               required/>

                    <div className={"buttons"}>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle} type="submit">Sign In With
                            Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;