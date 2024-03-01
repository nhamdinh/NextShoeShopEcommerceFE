import { getAllUsers } from "apis/apisUser";
import { PAGE_SIZE } from "utils/constants";
import Login from "./components/Login";

type Props = {
  // params: {locale: string};
};

const LoginPage = async (props: any) => {
  const currentPage = +(props?.searchParams?.page ?? 1);
  const res = await getAllUsers({ currentPage, PAGE_SIZE });
  const totalCount = +(res.headers?.get("X-Total-Count") ?? 1);
  const data = await res.json();
  // console.log(data);
  return (
    <Login
      users={data?.code === 404 ? [] : data ?? []}
      metadata={{
        totalCount,
        currentPage,
        PAGE_SIZE,
      }}
    ></Login>
  );
};

export default LoginPage;
