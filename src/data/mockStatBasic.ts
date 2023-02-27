import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";

import { StatBoxProps } from "../interfaces";

export const mockStatBasic: StatBoxProps[] = [
  {
    title: "12,361",
    subtitle: "Email Sent",
    progress: "0.75",
    increase: "+14%",
    Icon: EmailIcon,
  },
  {
    title: "431,225",
    subtitle: "Sales Obtained",
    progress: "0.5",
    increase: "+21%",
    Icon: PointOfSaleIcon,
  },
  {
    title: "32,441",
    subtitle: "New Clients",
    progress: "0.30",
    increase: "+5%",
    Icon: PersonAddIcon,
  },
  {
    title: "1,325,134",
    subtitle: "Traffic Inbound",
    progress: "0.80",
    increase: "+43%",
    Icon: TrafficIcon,
  },
];
