import {AppstoreOutlined} from "@ant-design/icons";
import {
  DollarCircleOutlined,
  ExportOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons/lib/icons";
import {Menu, MenuProps, Layout, Row, Col} from "antd";
import React from "react";
import {Link, Outlet} from "react-router-dom";
import logo from "../components/assets/logo.png";

type Props = {};
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

function Layouts({}: Props) {
  const {Header, Content, Footer, Sider} = Layout;

  const items: MenuItem[] = [
    getItem(<Link to="/home">Dashboard</Link>, "/home", <AppstoreOutlined />),
    getItem(<Link to="/home">Leads</Link>, "/leads", <UserAddOutlined />),
    getItem(
      <Link to="/home">Customer</Link>,
      "/customer",
      <UsergroupAddOutlined />
    ),
    getItem(<Link to="/home">Sales</Link>, "/sales", <DollarCircleOutlined />),
    getItem(<Link to="/home">Expense</Link>, "/expense", <ExportOutlined />),
  ];
  return (
    <>
      <div>
        <Layout style={{minHeight: "100vh"}}>
          <Sider>
            <div>
              <Link to="/home">
                <img
                  className="logo"
                  src={logo}
                  alt="Trabill"
                  style={{marginTop: "1rem"}}
                  width={190}
                />
              </Link>
            </div>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
              <Col style={{margin: "auto"}}>
                <h1 style={{color: "white"}}>Hello! Good Evening</h1>
                <h1 style={{color: "white"}}>Admin</h1>
              </Col>
            </Row>
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="vertical"
              items={items}
            />
          </Sider>
          <Layout
            className="site-layout"
            style={{
              overflow: "hidden",
              minHeight: "100vh",
            }}
          >
            <Header
              style={{
                padding: 0,
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
              }}
            />
            <Content
              className="container m-auto mt-4 bg-white p-6"
              style={{
                padding: "25px 25px 0",
                height: "auto",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Outlet />
            </Content>
            <Row justify={"center"}>
              <Footer>{`Soft Valley Assessment - DEVELOPED WITH ❤️ BY FAHIM SHAHRIAR`}</Footer>
            </Row>
          </Layout>
        </Layout>
      </div>
    </>
  );
}

export default Layouts;
