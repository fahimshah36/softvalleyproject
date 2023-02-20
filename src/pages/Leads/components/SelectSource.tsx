import React from "react";
import {Select, Form} from "antd";
import {useGetSourceQuery} from "../api/leadsApi";

type Props = {name: string; label: string};

function SelectSource({name, label}: Props) {
  const {data: source} = useGetSourceQuery();
  const sources = source?.data;

  const sourcesChildren: React.ReactNode[] = [];
  if (sources) {
    for (let i = 0; i < sources.length; i++) {
      sourcesChildren.push(
        <Select.Option key={sources[i].id} value={sources[i].id}>
          {sources[i].name}
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
        showSearch
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
      >
        {sourcesChildren}
      </Select>
    </Form.Item>
  );
}

export default SelectSource;
