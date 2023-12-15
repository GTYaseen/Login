"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Text } from "@/components/text/Text";
import styles from "./page.module.css";
import { Input } from "@/components/input/Input";
import { Space } from "@/components/space/Space";
import { Button } from "@/components/button/button";
import { Modal } from "@/components/modal/Modal";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://server-yaseen.onrender.com/login",
        { username, password }
      );
     //hello
      // Handle successful login
      const token = response.data.token;
      localStorage.setItem("token", token);
      alert("Login successful");
      router.push("/home");
    } catch (error) {
      alert("Invalid username or password");
    }
  };
  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://server-yaseen.onrender.com/register",
        { newUser, newPass }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      alert("Registration successful, please login");
      handleCancel();
    } catch (error) {
      alert("Invalid username or password");
    }
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginHeader}>
          <Space height="20px" />
          <Text size="30px">Welcome</Text>
        </div>
        <Space height="40px" />
        <div className={styles.input}>
          <center>
            <Text size="20px">Enter Username</Text>
            <Input
              placeholder={"Enter Username"}
              width={"350px"}
              height={"40px"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Space height="20px" />
            <Text size="20px">Enter Password</Text>
            <Input
              placeholder={"Enter Password"}
              width={"350px"}
              height={"40px"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Space height="20px" />
            <div className={styles.button}>
              <Button size={"large"} type={"primary"} onClick={handleLogin}>
                Login
              </Button>
              <Button size={"large"} type={"default"} onClick={showModal}>
                Register
              </Button>
            </div>
          </center>
        </div>
      </div>

      <Modal
        title={"register"}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"400px"}
        height={"350px"}
      >
        <div className={styles.input}>
          <Space height="20px" />
          <Text size="20px">Enter Username</Text>
          <Input
            width={"300px"}
            height={"40px"}
            placeholder={"Enter Username"}
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <Space height="20px" />
          <Text size="20px">Enter Password</Text>
          <Input
            width={"300px"}
            height={"40px"}
            placeholder={"Enter Password"}
            type="password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
          <Space height="20px" />
          <Button size={"large"} type={"primary"} onClick={handleRegister}>
            Register
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Login;
