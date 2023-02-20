import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useTheme } from "../../hooks";

interface IFaqProps {
  title: string;
}

const Faq = ({ title }: IFaqProps) => {
  const { colors } = useTheme();
  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            unde, iure laboriosam rerum esse corporis ducimus sint nam
            consequuntur voluptatum, dolore soluta aliquid quia? A amet ipsum
            consequatur itaque natus.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Faq;
