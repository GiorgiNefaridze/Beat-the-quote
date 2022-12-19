import React, { useState, useEffect } from "react";

import { UserContext } from "../../context/UserContext";

import { useGetAllUsers } from "../../hooks/useGetAllUsers";

import {
  DashboardWrapeper,
  AvatarWrapper,
  UserImage,
  UserWrapper,
  User,
} from "./Dashboard.style";

export interface IUsers {
  _id: string;
  __v: number;
  userName: string;
  email: string;
  password: string;
  score: number;
  quotes: [];
  image?: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  const { getAllUsers } = useGetAllUsers();
  const { user } = UserContext();

  useEffect(() => {
    let allowToFetch = true;
    (async () => {
      if (allowToFetch) {
        const usersData = await getAllUsers();
        setUsers(usersData);
      }
    })();

    return () => {
      allowToFetch = false;
    };
  }, []);

  return (
    <DashboardWrapeper>
      <h1>LEADERBOARD</h1>
      <UserWrapper>
        {users?.map((userInfo, idx) => {
          const { image, userName, email, score } = userInfo;
          if (idx <= 4)
            return (
              <User owner={email === user?.email} key={idx}>
                <h4>{idx + 1}</h4>
                <AvatarWrapper>
                  {image ? (
                    <img src={image} />
                  ) : (
                    <img src={process.env.PUBLIC_URL + "images/avatar.png"} />
                  )}
                  <UserImage
                    display={idx === 0 ? "block" : "none"}
                    src={process.env.PUBLIC_URL + "images/golden.png"}
                  />
                  <span>{userName}</span>
                </AvatarWrapper>
                <div></div>
                <p>{score}</p>
              </User>
            );
        })}
      </UserWrapper>
    </DashboardWrapeper>
  );
};

export default Dashboard;
