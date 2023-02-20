import {ColumnsType} from "antd/lib/table";
import {Button, Space, Popconfirm} from "antd";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons/lib/icons";
import {ILeadData, ILeadDataType} from "../types/leadsTypes";

export const leadUtils = (): ColumnsType<ILeadDataType> => {
  return [
    {
      title: "Lead Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Followup Date",
      dataIndex: "followup_date",
      key: "followup_date",
    },
    {
      title: "Assigned",
      key: "id",
      render: (_, record) => (
        <>
          {record.lead_assignees.map((item, index) =>
            record.lead_assignees.length > 1 &&
            index !== record.lead_assignees.length - 1
              ? `${item.name} , `
              : item.name
          )}
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Preferred Countries",
      key: "id",
      render: (_, record) => (
        <>
          {record.lead_preferred_countries.map((item) =>
            record.lead_preferred_countries.length > 1
              ? `${item.name} , `
              : item.name
          )}
        </>
      ),
    },
    {
      title: "Status",
      key: "id",
      render: (_, record) => (
        <h1 style={{color: `${record.lead_status.color}`}}>
          {record.lead_status.name}
        </h1>
      ),
    },
    {
      title: "Source",
      key: "id",
      render: (_, record) => <>{record.source.name}</>,
    },
    {
      title: "Action",
      key: "operation",
      render: (_, record) => (
        <Space size="small">
          <Button size="small" type="primary" icon={<EditOutlined />}></Button>
          <Popconfirm title="Sure to delete?">
            <Button
              size="small"
              type="primary"
              danger
              icon={<DeleteOutlined />}
            ></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
};
