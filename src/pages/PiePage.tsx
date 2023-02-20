import { Box } from "@mui/material";
import { PieChart, PageLayout } from "../components";

const PiePage = () => {
  return (
    <PageLayout title="Pie Chart" subtitle="Simple Pie Chart">
      <Box height="75vh">
        <PieChart />
      </Box>
    </PageLayout>
  );
};

export default PiePage;
