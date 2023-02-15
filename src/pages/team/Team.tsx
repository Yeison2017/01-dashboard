import { PageWithTable } from "../../components";
import TeamTable from "./TeamTable";

const Team = () => {
  return (
    <PageWithTable title="Team" subtitle="Managing the Team Members">
      <TeamTable />
    </PageWithTable>
  );
};

export default Team;
