import React from "react";
import FormInput from "../forminput/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { ButtonsContainer, SignInContainer } from "./sign-in.styles";
import { googleSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (e) {
      console.error(e);
    }
  };
  handleChane = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <h2>i already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            handleChange={this.handleChane}
            type="email"
            name={"email"}
            value={this.state.email}
            required
          />
          <FormInput
            label="password"
            handleChange={this.handleChane}
            type="password"
            name={"password"}
            value={this.state.password}
            required
          />

          <ButtonsContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={googleSignInStart}
              type="button"
            >
              Sign In With Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});
export default connect(null, mapDispatchToProps)(SignIn);
