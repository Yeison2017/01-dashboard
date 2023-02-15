import { useState } from "react";

import { PageWithTable } from "../../components";
import InvoicesTable from "./InvoicesTable";

const Invoices = () => {
  const [addStylesGrid, setAddStylesGrid] = useState<object | undefined>(
    undefined
  );

  return (
    <PageWithTable
      title="INVOICE"
      subtitle="List of Invoice Balances"
      addStylesGrid={addStylesGrid}
    >
      <InvoicesTable setAddStylesGrid={setAddStylesGrid} />
    </PageWithTable>
  );
};

export default Invoices;
