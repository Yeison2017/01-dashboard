import { Box, Typography } from "@mui/material";
import { mockTransactions } from "../../data";
import { useTheme } from "../../hooks";
import { IStyles, ITokens } from "../../interfaces";

const styles = (colors?: ITokens): IStyles => ({
  containerTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `4px solid ${colors?.primary[500]}`,
    colors: colors?.grey[100],
    p: "15px",
  },
  title: {
    fontWeight: "600",
    color: colors?.grey[100],
  },
  table: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `4px solid ${colors?.primary[500]}`,
    p: "15px",
  },
});

const StatRecentTransactions = () => {
  const { colors } = useTheme();
  return (
    <>
      <Box sx={styles(colors).containerTitle}>
        <Typography variant="h5" sx={styles(colors).title}>
          Recent Transactions
        </Typography>
      </Box>
      {mockTransactions.map((transaction, i) => (
        <Box key={`${transaction.txId}-${i}`} sx={styles(colors).table}>
          <Box>
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.greenAccent[500]}
            >
              {transaction.txId}
            </Typography>
            <Typography color={colors.grey[100]}>{transaction.user}</Typography>
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
    </>
  );
};

export default StatRecentTransactions;
