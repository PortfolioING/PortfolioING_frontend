import styled from "styled-components";
import { Roles } from "../../utils/constant/Roles";

const RoleColor = (role) => Roles[role] || Roles["default"];

const Role = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  background-color: #ffffff;
  color: ${(props) => RoleColor(props.role)};
  border-radius: 5px;
  padding: 3px 5px;
  font-size: 11.5px;
  border: 1px solid ${(props) => RoleColor(props.role)};
`;
export default Role;
