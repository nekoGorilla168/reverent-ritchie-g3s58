import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeder>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeder>
  );
};

const SHeder = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
