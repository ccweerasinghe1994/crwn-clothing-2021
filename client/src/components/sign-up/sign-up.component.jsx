import React, { useState } from "react";
import FormInput from "../forminput/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";
import { SignUpContainer, TitleContainer } from "./sign-up.styles";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userDetails, setUserDetails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userDetails;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      signUpStart({ email, password, displayName });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SignUpContainer className={"sign-up"}>
      <TitleContainer className={"title"}>
        i do not have a account{" "}
      </TitleContainer>
      <span>sign up with your email and password</span>
      <form className={"sign-up-form"} onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type={"text"}
          name={"displayName"}
          value={displayName}
          label={"Display Name"}
          required
        />
        <FormInput
          handleChange={handleChange}
          type={"email"}
          name={"email"}
          value={email}
          label={"Email"}
          required
        />
        <FormInput
          handleChange={handleChange}
          type={"password"}
          name={"password"}
          value={password}
          label={"Password"}
          required
        />
        <FormInput
          handleChange={handleChange}
          type={"password"}
          name={"confirmPassword"}
          value={confirmPassword}
          label={"Confirm Password"}
          required
        />
        <CustomButton type={"submit"}>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
