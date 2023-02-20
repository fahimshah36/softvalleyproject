import React from "react";
import {Select, Form} from "antd";
import {useGetStatusQuery} from "../api/leadsApi";

type Props = {name: string; label: string};

function SelectStatus({name, label}: Props) {
  const {data: status} = useGetStatusQuery();
  const statuses = status?.data;
  const statusesChildren: React.ReactNode[] = [];
  if (statuses) {
    for (let i = 0; i < statuses.length; i++) {
      statusesChildren.push(
        <Select.Option key={statuses[i].id} value={statuses[i].id}>
          {statuses[i].name}
        </Select.Option>
      );
    }
  }

  return (
    <Form.Item name={name} label={label}>
      <Select
        mode="multiple"
        allowClear
        placeholder={"Select Status"}
        placement="bottomRight"
        onChange={(e) => console.log(e)}
        showSearch
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
      >
        {statusesChildren}
      </Select>
    </Form.Item>
  );
}

export default SelectStatus;
