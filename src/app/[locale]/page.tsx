import { useTranslations } from "next-intl";
import PageLayout from "components/PageLayout";
import ContactInfo from "components/homeComponents/ContactInfo";
import { getAllUsers } from "apis/apisUser";
import Users from "./users/components/Users";
import ShopSection from "components/homeComponents/ShopSection";

type Props = {
  params: { locale: string };
};

const HomePage = async (props: any) => {
  const currentPage = +(props?.searchParams?.page ?? 1);
  const brand = props?.searchParams?.brand ?? "";
  const keyword = props?.searchParams?.keyword ?? "";

  return (
    <>
      <ShopSection keyword={keyword} pagenumber={currentPage} brand={brand} />
      <ContactInfo></ContactInfo>
    </>
  );
};

export default HomePage;
