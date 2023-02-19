import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { PageLayout } from "../components";

const Fab = () => {
  return (
    <PageLayout title="FAQ" subtitle="Frequently Asked Questions Page">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
      </Accordion>
    </PageLayout>
  );
};

export default Fab;
