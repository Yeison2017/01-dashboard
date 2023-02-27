import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface StatBoxProps {
  title: string;
  subtitle: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  progress: string;
  increase: string;
}
