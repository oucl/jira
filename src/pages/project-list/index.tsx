import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useState } from "react";
import styled from "@emotion/styled";
import { useProjects } from "utils/useProjects";
import { useUsers } from "utils/useUsers";

export function ProjectList() {
  const [params, setParams] = useState({
    projectTitle: "",
    personId: undefined,
  });
  const { data: projectData, isLoading } = useProjects(params);
  const { data: userData } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        users={userData || []}
        params={params}
        setParams={setParams}
      />
      <List
        users={userData || []}
        dataSource={projectData || []}
        loading={isLoading}
      />
    </Container>
  );
}

const Container = styled.div``;
