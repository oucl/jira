import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { clearObject } from "utils";
import { useMount } from "utils/use";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

export function ProjectList() {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({
    projectTitle: "",
    personId: undefined,
  });
  const [tableData, setTableData] = useState([]);
  const userHttp = useHttp();
  useEffect(() => {
    userHttp("projects", { data: clearObject(params) }).then(setTableData);
  }, [params]);

  useMount(() => {
    userHttp("users").then(setUsers);
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <List users={users} dataSource={tableData} />
    </Container>
  );
}

const Container = styled.div``;
