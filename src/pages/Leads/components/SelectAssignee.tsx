import React from "react";
import {Select, Form} from "antd";
import {useGetAssigneeQuery} from "../api/leadsApi";

type Props = {name: string; label: string};

function SelectAssignee({name, label}: Props) {
  const {data: assignee} = useGetAssigneeQuery();
  const assignees = assignee?.data;
  const assigneesChildren: React.ReactNode[] = [];
  if (assignees) {
    for (let i = 0; i < assignees.length; i++) {
      assigneesChildren.push(
        <Select.Option key={assignees[i].id} value={assignees[i].id}>
          {assignees[i].name}
        </Select.Option>
      );
    }
  }
  return (
    <Form.Item name={name} label={label}>
      <Select
        mode="multiple"
        allowClear
        placeholder={"Select Assignee"}
        placement="bottomRight"
        showSearch
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
      >
        {assigneesChildren}
      </Select>
    </Form.Item>
  );
}

export default SelectAssignee;
