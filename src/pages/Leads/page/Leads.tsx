import {
  Typography,
  Row,
  Divider,
  Col,
  Form,
  Input,
  DatePicker,
  Button,
  Table,
} from "antd";
import SelectAssignee from "../components/SelectAssignee";
import SelectSource from "../components/SelectSource";
import SelectStatus from "../components/SelectStatus";
import {ILeadReqFormData} from "../types/leadsTypes";
import dayjs from "dayjs";
import {useFilterDataMutation} from "../api/leadsApi";
import {leadUtils} from "../utils/leadUtils";
import {useEffect, useState} from "react";

function Leads() {
  const [form] = Form.useForm();
  const [filter, {data}] = useFilterDataMutation();
  const [filterButton, setFilterButton] = useState<boolean>(false);
  useEffect(() => {
    filter({});
  }, []);
  const onFinish = async (values: ILeadReqFormData) => {
    const setFrom_date =
      values.contact_date && dayjs(values.contact_date[0]).toISOString();
    const setTo_date =
      values.contact_date && dayjs(values.contact_date[1]).toISOString();

    const body: ILeadReqFormData = {
      search: values.search,
      lead_status_id: values.lead_status_id,
      source_id: values.source_id,
      user_id: values.user_id,
      contacted_date_from: setFrom_date as string,
      contacted_date_to: setTo_date as string,
    };
    filterButton ? filter(body) : filter({});
  };
  console.log(data);

  return (
    <div>
      <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
        <Typography.Title level={3}>Leads</Typography.Title>
      </Row>
      <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
        <Typography.Text>
          Difficulties increase the nearer we get to the goal
        </Typography.Text>
      </Row>
      <Divider />
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
          <Col span={6} xs={24} sm={24} md={24} lg={4}>
            <Form.Item name="search" label="Search">
              <Input placeholder="Search in leads table" />
            </Form.Item>
          </Col>
          <Col span={6} xs={24} sm={24} md={24} lg={4}>
            <SelectStatus name="lead_status_id" label="Select Status" />
          </Col>
          <Col span={6} xs={24} sm={24} md={24} lg={4}>
            <SelectSource name="source_id" label="Select Source" />
          </Col>
          <Col span={6} xs={24} sm={24} md={24} lg={4}>
            <SelectAssignee name="user_id" label="Select Source" />
          </Col>
          <Col span={6} xs={24} sm={24} md={24} lg={4}>
            <Form.Item name="contact_date" label="Contacted Date">
              <DatePicker.RangePicker />
            </Form.Item>
          </Col>
          <Col span={6} xs={24} sm={24} md={24} lg={2}>
            <Form.Item label=" ">
              <Button
                htmlType="submit"
                type="primary"
                onClick={() => {
                  setFilterButton(true);
                }}
              >
                Filter
              </Button>
            </Form.Item>
          </Col>
          <Col span={6} xs={24} sm={24} md={24} lg={2}>
            <Form.Item label=" ">
              <Button
                htmlType="submit"
                type="primary"
                danger
                onClick={() => {
                  setFilterButton(false);
                }}
              >
                Reset Filter
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Table bordered columns={leadUtils()} dataSource={data?.data?.data} />
      </Form>
    </div>
  );
}

export default Leads;
