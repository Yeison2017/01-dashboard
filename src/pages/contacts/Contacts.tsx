import { useState } from "react";
import { PageWithTable } from "../../components";
import ContactsTable from "./ContactsTable";

const Contacts = () => {
  const [addStylesGrid, setAddStylesGrid] = useState<object | undefined>(
    undefined
  );

  return (
    <PageWithTable
      title="CONTACTS"
      subtitle="List of Contacts for Future Reference"
      addStylesGrid={addStylesGrid}
    >
      <ContactsTable setAddStylesGrid={setAddStylesGrid} />
    </PageWithTable>
  );
};

export default Contacts;
