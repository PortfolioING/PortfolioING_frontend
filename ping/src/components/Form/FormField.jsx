// FormField.js
import styled from "styled-components";
import Label from "./FormLabel";
import Input from "./FormInput";

const FormFieldWrapper = styled.div`
  margin-bottom: 25px;
`;

const FormField = ({ label, onChange, id, ...props }) => {
  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        onChange={onChange} // onChange handler 추가
        chat={props.chat}
        placeholder={props.placeholder}
        width={props.width}
        height={props.height}
        type={props.type}
      />
    </FormFieldWrapper>
  );
};

export default FormField;
