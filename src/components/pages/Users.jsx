import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useState } from "../../store/UserState";
import { useRecoilState } from "recoil";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `だいすけ-${val}`,
    image:
      "https://source.unsplash.com/tiWcNvpQF4E",
    email: "test.sample@example.com",
    phone: "090-086-6583",
    company: {
      name: "テスト株式会社"
    },
    website: "https://gggg.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(
  //   UserContext
  // );
  const [userInfo, setUserInfo] = useRecoilState(
    useState
  );
  const onClickSwitch = () =>
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>USERSページです</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>
        切り替え
      </SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  );
  grid-gap: 20px;
`;
