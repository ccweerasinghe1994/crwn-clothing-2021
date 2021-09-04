import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  LabelContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <LabelContainer value={otherProps.value}>{label}</LabelContainer>
    ) : null}
  </GroupContainer>
);

export default FormInput;
