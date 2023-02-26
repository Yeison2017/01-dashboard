import { PageWithTable } from "../../components";
import TeamTable from "./TeamTable";

const TeamPage = () => {
  return (
    <PageWithTable title="Team" subtitle="Managing the Team Members">
      <TeamTable />
    </PageWithTable>
  );
};

export default TeamPage;
