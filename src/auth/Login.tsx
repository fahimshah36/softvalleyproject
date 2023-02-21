import {Form, Input, Row, Button, Col, Card} from "antd";
import {useNavigate} from "react-router-dom";
import "./Login.css";
import logo from "../components/assets/logo.png";
import {ILoginType} from "./authTypes";
import {useLoginMutation} from "./loginApi";
import {useEffect} from "react";
import {Alert} from "antd";

function Login() {
  const navigate = useNavigate();
  const [login, {data}] = useLoginMutation();
  useEffect(() => {
    localStorage.setItem("token", data?.data.token as string);
  }, [data]);
  if (data?.data.token) {
    navigate("/home");
  }

  const onFinish = async (values: ILoginType) => {
    const body: ILoginType = {
      email: values.email,
      password: values.password,
    };
    await login(body);
  };
  return (
    <>
      <Row className="login-page">
        <Form initialValues={{remember: true}} onFinish={onFinish}>
          <Card
            style={{
              borderRadius: "8px",
              marginTop: "1rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Col xs={24} sm={24} md={24} lg={6}>
              <img
                className="illustration-wrapper"
                src={logo}
                alt="Logo"
                width={250}
              />
            </Col>

            <Form.Item
              style={{marginTop: "20px"}}
              name="email"
              rules={[{required: true, message: "Please input your username!"}]}
            >
              <Input type="email" placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{required: true, message: "Please input your password!"}]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Row justify={"center"}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Row>
          </Card>
          <Row style={{marginTop: "1rem"}}>
            <Alert
              message="Warning"
              description={
                <>
                  This website is loaded over HTTPS but the api request is HTTP,
                  <br />
                  so it throws an error from the browser saying Mixed Content.
                  <br />
                  To Log in you will have to allow Insecure Content
                  <br /> by going to site settings from the browser
                </>
              }
              type="warning"
              showIcon
            />
          </Row>
        </Form>
      </Row>
    </>
  );
}

export default Login;
