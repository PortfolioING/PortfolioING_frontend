// FormField.js
import styled from "styled-components";
import Label from "./FormLabel";
import TextArea from "./FormTextArea";
import Input from "./FormInput";
const FormFieldWrapper = styled.div`
  margin-bottom: 25px;
`;

const FormField = ({ label, onChange, onFocus, id, size = "lg", ...props }) => {
  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        onChange={onChange} // onChange handler 추가
        chat={props.chat}
        placeholder={props.placeholder}
        size={size}
        type={props.type}
        onFocus={onFocus}
      />
    </FormFieldWrapper>
  );
};

export default FormField;
