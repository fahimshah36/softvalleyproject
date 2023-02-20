import {Typography, Row, Divider, Col, Form, Input} from "antd";

type Props = {};

function Leads({}: Props) {
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
          <Typography.Title level={3}>Leads</Typography.Title>
        </Row>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
          <Typography.Text>
            Difficulties increase the nearer we get to the goal
          </Typography.Text>
        </Row>
        <Divider />
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
          <Col span={6} xs={24} sm={24} md={24} lg={4}>
            <Form.Item
              name="account_acctype_id"
              label="Search"
              rules={[
                {required: true, message: "Please Select Payment Method!!"},
              ]}
            >
              <Input placeholder="Search in leads table" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Leads;
