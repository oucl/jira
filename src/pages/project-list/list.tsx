import { Table } from "antd";

interface ListProps {
  tableData: any[];
  users: any[];
}
export function List({ tableData, users }: ListProps) {
  return (
    <Table
      dataSource={tableData}
      rowKey={"id"}
      columns={[
        {
          title: "项目名称",
          dataIndex: "projectTitle",
          sorter: (a, b) => a.projectTitle.localeCompare(b.projectTitle),
        },
        { title: "id", dataIndex: "id" },
        { title: "部门", dataIndex: "organization" },
        {
          title: "负责人",
          dataIndex: "personId",
          render: (value) =>
            users.find((user) => user.id === value)?.name || value || "--",
        },
        { title: "创建时间", dataIndex: "created" },
      ]}
    />
  );
}
