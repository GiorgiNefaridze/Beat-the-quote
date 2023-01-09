import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { UserContext } from "../../context/UserContext";
import { AllUsersContext } from "../../context/AllUsersContext";

import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { userGetUserNumeration } from "../../hooks/useGetUserNumeration";

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

interface IUserStats {
  userNumeration: number;
  score: number;
}

const Dashboard: React.FC = () => {
  const [userStats, setUserStats] = useState<IUserStats>({
    userNumeration: 0,
    score: 0,
  });

  const { users, setUsers } = AllUsersContext();
  const { getAllUsers, loading } = useGetAllUsers();
  const { getUserNumeration } = userGetUserNumeration();
  const { user } = UserContext();

  useEffect(() => {
    let allowToFetch = true;

    const isLogin = localStorage.getItem("isLogin");

    (async () => {
      if (allowToFetch) {
        const allUsers = await getAllUsers();
        setUsers(allUsers);

        if (isLogin) {
          const stats = await getUserNumeration(user?.userName);
          setUserStats(stats);
        }
      }
    })();

    return () => {
      allowToFetch = false;
    };
  }, [user]);

  return (
    <DashboardWrapeper>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" width={450} sx={{ fontSize: "2.5rem" }} />
          <Skeleton variant="text" width={450} sx={{ fontSize: "2.5rem" }} />
          <Skeleton variant="text" width={450} sx={{ fontSize: "2.5rem" }} />
          <Skeleton variant="text" width={450} sx={{ fontSize: "2.5rem" }} />
          <Skeleton
            variant="text"
            style={{ marginBottom: "40px" }}
            width={450}
            sx={{ fontSize: "3rem" }}
          />

          <Skeleton variant="text" width={450} sx={{ fontSize: "2.5rem" }} />
        </Stack>
      ) : (
        <>
          <h1>LEADERBOARD</h1>
          <UserWrapper>
            {users?.map(({ image, userName, score }, idx) => (
              <User owner={userName === user?.userName} key={idx}>
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
            ))}
            <br />
            {user?.email?.length ? (
              <User visibility={true} owner={true}>
                <p>{userStats?.userNumeration + 1}</p>
                <AvatarWrapper>
                  {user?.image ? (
                    <img src={user?.image} />
                  ) : (
                    <img src={process.env.PUBLIC_URL + "images/avatar.png"} />
                  )}
                  <UserImage
                    display={"none"}
                    src={process.env.PUBLIC_URL + "images/golden.png"}
                  />
                  <span>{user?.userName}</span>
                </AvatarWrapper>
                {userStats?.userNumeration < 5 ? (
                  <img
                    style={{ width: "15px", height: "15px" }}
                    src={process.env.PUBLIC_URL + "images/green-arrow.png"}
                  />
                ) : (
                  <p>{userStats?.score}</p>
                )}
              </User>
            ) : null}
          </UserWrapper>
        </>
      )}
    </DashboardWrapeper>
  );
};

export default Dashboard;
