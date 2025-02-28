import { Flex, Input, Select } from "antd";
interface SearchPanelProps {
  params: any;
  users: any[];
  setParams: (params: any) => void;
}
export function SearchPanel({ params, setParams, users }: SearchPanelProps) {
  return (
    <Flex justify={"center"} style={{ marginBottom: "20px" }}>
      <Input
        style={{ flex: 2 }}
        value={params.projectTitle}
        allowClear
        onChange={(e) =>
          setParams({
            ...params,
            projectTitle: e.target.value,
          })
        }
      />
      <Select
        style={{ flex: 1, marginLeft: "20px" }}
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
    </Flex>
  );
}
