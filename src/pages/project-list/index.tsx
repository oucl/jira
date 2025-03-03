import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { clearObject } from "utils";
import qs from "qs";
import { useMount } from "utils/use";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
export function ProjectList() {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({ projectTitle: "", personId: "" });
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const searchParams = clearObject(params);
    fetch(`${apiBaseUrl}/projects?${qs.stringify(searchParams)}`).then(
      async (response) => {
        if (response.ok) {
          const data = await response.json();
          setTableData(data);
        }
      },
    );
  }, [params]);

  useMount(() => {
    fetch(`${apiBaseUrl}/users`).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    });
  });
  return (
    <div style={{ width: "600px", margin: "0 auto", padding: "20px" }}>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <List users={users} tableData={tableData} />
    </div>
  );
}
