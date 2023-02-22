import { Box } from "@mui/material";

import { GeographyChart, PageLayout } from "../components";
import { useTheme } from "../hooks";

const GeographyPage = () => {
  const { colors } = useTheme();
  return (
    <PageLayout title="Geography Chart" subtitle="Simple Geography Chart">
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart />
      </Box>
    </PageLayout>
  );
};

export default GeographyPage;
