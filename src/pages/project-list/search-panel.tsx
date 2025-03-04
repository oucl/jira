import { Flex, Form, Input, Select } from "antd";
interface SearchPanelProps {
  params: any;
  users: any[];
  setParams: (params: any) => void;
}
export function SearchPanel({ params, setParams, users }: SearchPanelProps) {
  return (
    <Form layout="inline" style={{ marginBottom: "1rem" }}>
      <Form.Item>
        <Input
          value={params.projectTitle}
          allowClear
          placeholder="项目名称"
          onChange={(e) =>
            setParams({
              ...params,
              projectTitle: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          placeholder="负责人"
          style={{ width: 120 }}
          allowClear
          value={params.personId}
          onChange={(value) =>
            setParams({
              ...params,
              personId: value,
            })
          }
        >
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
}
