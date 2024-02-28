
import { useTranslations } from "next-intl";
import PageLayout from "components/PageLayout";
import { getAllUsers } from "apis/apisUser";
import { PAGE_SIZE } from "utils/constants";
import { Suspense } from "react";
import Users from "./components/Users";

type Props = {
  // params: {locale: string};
};

const UsersPage = async (props: any) => {
  const currentPage = +(props?.searchParams?.page ?? 1);
  const res = await getAllUsers({ currentPage, PAGE_SIZE });
  const totalCount = +(res.headers?.get("X-Total-Count") ?? 1);
  const data = await res.json();
  console.log(data);
  return (
    <Users
    users={data?.code === 404 ? [] : data ?? []}
    metadata={{
      totalCount,
      currentPage,
      PAGE_SIZE,
    }}
  ></Users>
  );
};

export default UsersPage;
