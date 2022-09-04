import React, { useState } from "react";
import Box from "@mui/material/Box";
import Router from 'next/router'
import Button from '../../components/Button';
import { signIn } from "next-auth/react";

export default function login() {
  
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("Not logged in");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
      body: JSON.stringify({ username, password }),
    })
    console.log(res);
    if ( res?.status === 200) {
      Router.replace("/");
    }else{
      setMessage("Invalid username or password");
    }
    console.log(res);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    
    bgcolor: "background.paper",
    border: "2px solid #9e9e9e",
    borderRadius: "8px",
    boxShadow: 24,
    pt: 3,
    px: 2,
    pb: 3,
  };
  return (
    <>
      <Box
        sx={{ ...style }}
        className="max-w-2xl justify-center align-center overflow-auto "
      >
        <h1 className="flex justify-center items-center text-4xl font-semibold pt-10">
          {message}
        </h1>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="/api/login"
          className="flex justify-center align-center items-center flex-col p-10"
        >
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=" border border-black rounded-lg p-2"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" border border-black rounded-lg p-2"
          />
          <br />

          <Button label="login" type="submit" className="flex justify-center items-center bg-blue-500 hover:bg-blue-400 px-3"/>
          <br />
        </form>
      </Box>
    </>
  );
}
