import { Faq, PageLayout } from "../components";

const FaqPage = () => {
  return (
    <PageLayout title="FAQ" subtitle="Frequently Asked Questions Page">
      <Faq title="Am Important Question" />
      <Faq title="Another Important Question" />
      <Faq title="Your Favorite Question" />
      <Faq title="Some Random Question" />
      <Faq title="The Final Question" />
    </PageLayout>
  );
};

export default FaqPage;
