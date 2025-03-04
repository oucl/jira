import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { clearObject } from "utils";
import { useMount } from "utils/use";
import { useHttp } from "utils/http";
import { Flex, Button, Divider } from "antd";
import { useAuth } from "context/auth-context";

export function ProjectList() {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({ projectTitle: "", personId: "" });
  const [tableData, setTableData] = useState([]);
  const auth = useAuth();
  const userHttp = useHttp();
  useEffect(() => {
    userHttp("projects", { data: clearObject(params) }).then(setTableData);
  }, [params]);

  useMount(() => {
    userHttp("users").then(setUsers);
  });
  return (
    <div style={{ width: "600px", margin: "0 auto", padding: "20px" }}>
      <Flex justify="flex-end" align="center" style={{ marginBottom: "20px" }}>
        {auth.user?.username}
        <Divider type="vertical"></Divider>
        <Button type="default" onClick={() => auth.logout()}>
          退出
        </Button>
      </Flex>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <List users={users} tableData={tableData} />
    </div>
  );
}
