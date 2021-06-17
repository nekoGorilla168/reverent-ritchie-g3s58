import React, { memo, useContext } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { useState } from "../../../store/UserState";

export const UserIconWithName = memo((props) => {
  const { img, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(useState);
  const isAdmin = userInfo
    ? userInfo.isAdmin
    : false;

  return (
    <SContainer>
      <SImage
        height={160}
        width={160}
        src={img}
        alt={name}
      />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SContainer = styled.div`
  text-align: center;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
