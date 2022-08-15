import React, { useState } from "react";
import jwt from "jsonwebtoken";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";

const axios = require("axios").default;

export default function login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("Not logged in");
  async function submitForm() {
    console.log(username, password);
    const res = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      console.log(json);
      setMessage(
        `welcome ${json.username} and you are ${
          json.admin ? "admin" : "normal user"
        }`
      );
    } else {
      setMessage("Invalid username or password");
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    console.log(res);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
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
        className="w-3/5 max-w-2xl justify-center align-center overflow-auto "
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

          <Button type="submit" className="flex justify-center items-center">
            login
          </Button>
          <br />
        </form>
      </Box>
    </>
  );
}
