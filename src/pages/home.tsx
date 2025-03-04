import { ProjectList } from "./project-list";
import styled from "@emotion/styled";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useAuth } from "context/auth-context";
import Logo from "assets/software-logo.svg";
export const Home = () => {
  const { user, logout } = useAuth();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div style={{ textAlign: "center" }} onClick={logout}>
          登 出
        </div>
      ),
    },
  ];
  return (
    <Container>
      <Header>
        <HeaderLogo></HeaderLogo>
        <h1 style={{ marginRight: "2rem" }}>项目</h1>
        <h1 style={{ marginRight: "2rem" }}>用户</h1>
        <div style={{ flex: 1 }}></div>
        <Dropdown menu={{ items }}>
          <Button type="link" onClick={(e) => e.preventDefault()}>
            <Space>
              Hi {user?.username}! <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Header>
      <Main>
        <ProjectList></ProjectList>
      </Main>
      <Footer></Footer>
    </Container>
  );
};

const HeaderLogo = styled.div`
  background-image: url(${Logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 14rem;
  height: 5rem;
  margin-right: 2rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
  height: 100vh;
`;
const Header = styled.div`
  grid-area: header;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;
const Main = styled.div`
  grid-area: main;
  overflow: auto;
  padding: 2rem;
`;
// const aside = styled.div`grid-area: aside;`
const Footer = styled.div`
  grid-area: footer;
`;
