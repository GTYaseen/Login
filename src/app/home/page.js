"use client";
import { Button } from "../../components/button/button";
import Container from "../../components/container/container";
import IconButton from "../../components/iconButton/IconButton";
import { Input } from "../../components/input/Input";
import { Space } from "../../components/space/Space";
import { Text } from "../../components/text/Text";
import { useState, useEffect } from "react";
import "./home.css";
import { Modal } from "../../components/modal/Modal";
import { Table } from "../../components/table/Table";
import { Tag } from "../../components/tag/Tag";
import { Header } from "../../components/header/Header";
import { useRouter } from "next/navigation";
import Image from "next/image";
import jwtDecode from "jwt-decode";
import { decodeToken } from "../auth";

function Home() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    } else {
      const decodedToken = decodeToken(token);
      setUser(decodedToken);
      console.log(decodedToken);
    }
  }, []);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
    console.log("Clicked cancel button");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
  ];
  const list = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      tag: <Tag color={"#176B87"}>math</Tag>,
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      tag: <Tag color={"#64CCC5"}>prog...</Tag>,
    },
    {
      key: "3",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      tag: (
        <Tag color={"#EEEEEE"}>
          <a href="https://www.youtube.com/watch?v=g_En83zHGTQ">link</a>
        </Tag>
      ),
    },
  ];
  const headerLinks = [
    {
      title: "Home",
      href: "https://www.youtube.com/watch?v=zR6fECxF44I",
    },
    {
      title: "About",
      href: "https://www.youtube.com/watch?v=qfFmZa9jgoY",
    },
    {
      title: "Contact",
      href: "https://www.youtube.com/watch?v=I-P2d5SxlgQ",
    },
  ];
  return (
    <>
      <Header headerLinks={headerLinks} brand={"Yasoo"} width={1300} />
      <Container width={1300}>
        <Space height={"20px"} />
        {user && (
          <div className="flex">
            <Text size={30} bold={"true"}>
              {user.username}
            </Text>
            <div>
              <Image src={user.image} width={100} height={100} />
            </div>
          </div>
        )}
        <Space height={"20px"} />
        <Button onClick={showModal} size={"large"}>
          Open Modal
        </Button>
        <Modal
          title={"yasoo"}
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Text bold={"true"} size={20}>
            Modal Content
          </Text>
          <Space width={100} height={"10px"} />
          <Text size={20}>your name</Text>
          <Input
            placeholder="Input"
            onChange={(e) => console.log(e.target.value)}
          />
          <Space height={"20px"} />
          <div className="flex">
            <Button type={"primary"} size={"large"}>
              <IconButton icon={"FaceBook"} size={"large"} type={"default"} />
              Click Here
            </Button>
            <Button type={"secondary"} size={"medium"}>
              <IconButton icon={"instagram"} size={"large"} type={"primary"} />
              Click
            </Button>
            <Button type={"default"} size={"small"}>
              <IconButton icon={"folder"} size={"large"} type={"secondary"} />
              Click
            </Button>
          </div>
        </Modal>
        <Table columns={columns} list={list} />
      </Container>
    </>
  );
}

export default Home;
