import { Box, Button, IconButton, Typography } from "@mui/material";

import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";

import {
  PageLayout,
  LineChart,
  BarChart,
  GeographyChart,
  StatBox,
  ProgressCircle,
  TitlePage,
} from "../components";
import { IStyles, ITokens } from "../interfaces";
import { useTheme } from "../hooks";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    m: "20px",
  },
  containerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonDownload: {
    backgroundColor: colors?.blueAccent[700],
    color: colors?.grey[100],
    fontSize: "14px",
    fontWeight: "bold",
    padding: "10px 20px",
  },
  icon: {
    mr: "10px",
  },
  containerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridAutoRows: "140px",
    gap: "20px",
  },
  row1: {
    gridColumn: "span 3",
    backgroundColor: colors?.primary[400],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerRow2: {
    gridColumn: "span 8",
    gridRow: "span 2",
    backgroundColor: colors?.primary[400],
  },
  row2: {
    mt: "25px",
    p: "0 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerTransition: {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: colors?.primary[400],
    overflow: "auto",
  },
  cartTransition: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `4px solid ${colors?.primary[500]}`,
    colors: colors?.grey[100],
    p: "15px",
  },
});

const Dashboard = () => {
  const { colors } = useTheme();

  return (
    <Box m="20px">
      <Box sx={styles().containerHeader}>
        <TitlePage title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button sx={styles(colors).buttonDownload}>
            <DownloadOutlinedIcon sx={styles().icon} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box sx={styles().containerGrid}>
        {/* ROW 1 */}
        <Box sx={styles(colors).row1}>
          <StatBox
            title="12,361"
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            Icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box sx={styles(colors).row1}>
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            Icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box sx={styles(colors).row1}>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            Icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box sx={styles(colors).row1}>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            Icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box sx={styles(colors).containerRow2}>
          <Box sx={styles().row2}>
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRANSACTIONS */}
        <Box sx={styles(colors).containerTransition}>
          <Box sx={styles(colors).cartTransition}>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.greenAccent[500]}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                sx={{ backgrounColor: colors.greenAccent[500] }}
                px="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{ backgroundColor: colors.primary[400] }}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generrated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        {/*  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/*  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{ backgroundColor: colors.primary[400] }}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
