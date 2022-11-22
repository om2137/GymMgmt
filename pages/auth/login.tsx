import React, { useState } from "react";
import Box from "@mui/material/Box";
import Router from 'next/router'
import Button from '../../components/Button';
import { signIn } from "next-auth/react";

export default function login() {
  
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("LogIn");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
      body: JSON.stringify({ username, password }),
    })
    if ( res?.status === 200) {
      Router.replace("/");
    }else{
      setMessage("Invalid username or password");
    }
  };



  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    
    bgcolor: "background.paper",
    border: "1px solid #000000",
    borderRadius: "4px",
    boxShadow: 12,
    pt: 3,
    px: 2,
    pb: 3,
  };
  return (
    <>
      <Box
        sx={{ ...style }}
        className=" md:w-[35rem] md:h-[40rem] flex justify-center my-auto items-center "
      >
        <div className="w-64">
          <h1 className="flex justify-center items-center text-4xl font-semibold ">
            {message}
          </h1>
          <form
            onSubmit={handleSubmit}
            method="POST"
            action="/api/login"
            className="flex flex-col p-10"
          >
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" border border-black rounded-lg p-2 text-lg"
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
        </div>
        
      </Box>
    </>
  );
}
