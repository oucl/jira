import { useArray } from "utils";
import { Table, Button } from "antd";

export const TryUseArray = () => {
  const persons = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
    { name: "tom", age: 20 },
  ];
  const { value, add, clear, removeIndex } = useArray(persons);
  return (
    <div>
      <h1>TS + React Test</h1>
      <Button onClick={() => add({ name: "john", age: 22 })}>add john</Button>
      <Button onClick={() => removeIndex(0)}>remove 0</Button>
      <Button onClick={() => clear()}>clear</Button>
      <Table
        dataSource={value}
        rowKey={"name"}
        columns={[
          { title: "名称", dataIndex: "name" },
          { title: "年龄", dataIndex: "age" },
        ]}
      />
    </div>
  );
};
