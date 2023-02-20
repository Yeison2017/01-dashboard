import { Box } from "@mui/material";
import { BarChart, PageLayout } from "../components";

const BarPage = () => {
  return (
    <PageLayout title="Bar Chart" subtitle="Simple Bar Chart">
      <Box height="75vh">
        <BarChart isDashboard={false} />
      </Box>
    </PageLayout>
  );
};

export default BarPage;
