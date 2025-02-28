import { Table } from "antd";

interface ListProps {
  tableData: any[];
  users: any[];
}
export function List({ tableData, users }: ListProps) {
  return (
    <Table dataSource={tableData}>
      <Table.Column title={"项目名称"} dataIndex={"projectTitle"} />
      <Table.Column
        title={"负责人"}
        dataIndex={"personId"}
        render={(value) =>
          users.find((user) => user.id === value)?.name || value || "--"
        }
      />
    </Table>
  );
}
