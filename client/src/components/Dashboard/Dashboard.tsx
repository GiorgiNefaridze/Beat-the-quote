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

const Dashboard: React.FC = () => {
  const [numeration, setNumeration] = useState<number>(0);

  const { users, setUsers } = AllUsersContext();
  const { getAllUsers, loading } = useGetAllUsers();
  const { getUserNumeration } = userGetUserNumeration();
  const { user } = UserContext();

  useEffect(() => {
    let allowToFetch = true;
    (async () => {
      if (allowToFetch) {
        const [usersData, { userNumeration }] = await Promise.all([
          getAllUsers(),
          getUserNumeration(user?.userName),
        ]);

        setUsers(usersData);
        setNumeration(userNumeration);
      }
    })();

    return () => {
      allowToFetch = false;
    };
  }, [user?.userName]);

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
            {users?.map((userInfo, idx) => {
              const { image, userName, score } = userInfo;
              return (
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
              );
            })}
            <br />
            {user?.email?.length ? (
              <User visibility={true} owner={true}>
                <p>{numeration + 1}</p>
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
                {numeration < 5 ? (
                  <img
                    style={{ width: "15px", height: "15px" }}
                    src={process.env.PUBLIC_URL + "images/green-arrow.png"}
                  />
                ) : (
                  <img
                    style={{ width: "15px", height: "15px" }}
                    src={process.env.PUBLIC_URL + "images/red-arrow.png"}
                  />
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
