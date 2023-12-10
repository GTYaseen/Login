"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {Text} from "@/components/text/Text";
import styles from "./page.module.css";
import { Input } from "@/components/input/Input";
import { Space } from "@/components/space/Space";
import { Button } from "@/components/button/button";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://server-yaseen.onrender.com/login', { username, password });

      // Handle successful login
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Login successful', token);
      router.push('/home');
    } catch (error) {
      alert('Invalid username or password');
    }
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
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default Login;
