import { Box } from "@mui/material";
import { LineChart, PageLayout } from "../components";

const LinePage = () => {
  return (
    <PageLayout title="Line Chart" subtitle="Simple Line Chart">
      <Box height="75vh">
        <LineChart isDashboard={false} />
      </Box>
    </PageLayout>
  );
};

export default LinePage;
