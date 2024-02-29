import { useTranslations } from "next-intl";
import PageLayout from "components/PageLayout";
import ContactInfo from "components/homeComponents/ContactInfo";
import Users from "./users/components/Users";
import ShopSection from "components/homeComponents/ShopSection";
import { getAllProducts } from "apis/apisProduct";
import { PAGE_SIZE } from "./../../utils/constants";
import { removeNullObject } from "utils/commonFunctionServer";

type Props = {
  params: { locale: string };
};

const HomePage = async (props: any) => {
  const currentPage = +(props?.searchParams?.page ?? 1);
  const brand = props?.searchParams?.brand ?? "";
  const keyword = props?.searchParams?.keyword ?? "";

  const params = {
    page: currentPage,
    limit: PAGE_SIZE,
    keyword,
  };

  const res = await getAllProducts({ ...params });
  const data = await res.json();

  return (
    <>
      <ShopSection
        data={data}
        // keyword={keyword}
        // pagenumber={currentPage}
        // brand={brand}
      />
      <ContactInfo></ContactInfo>
    </>
  );
};

export default HomePage;
