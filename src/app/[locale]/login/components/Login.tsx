"use client";
import { login } from "apis/apisUser";
import Message from "components/LoadingError/Error";
import Loading from "components/LoadingError/Loading";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  ACCESSTOKEN_STORAGE,
  NAME_STORAGE,
  REFRESHTOKEN_STORAGE,
} from "utils/constants";
import { Button, Modal, message } from "antd";

const Login = (props: any) => {
  window.scrollTo(0, 0);
  const { data } = props;
  const router = useRouter();

  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [isError, setisError] = useState<any>(false);

  const onLogin = async (values: any) => {
    setisError(false);
    setIsLoading(true)
    const res = await login(values);
    //@ts-ignore
    const data = res?.metadata;

    if (data) {
      localStorage.setItem(ACCESSTOKEN_STORAGE, data?.token);
      localStorage.setItem(REFRESHTOKEN_STORAGE, data?.refreshToken);
      localStorage.setItem(NAME_STORAGE, data?.name);

      messageApi.open({
        type: "success",
        content: "Login thanh cong",
      });

      router.replace(`/`);

      //   navigate("/");
    } else {
      setisError(true);
      //@ts-ignore
      // const error = res?.error;
      // const dataError = error?.data ?? [];
      // if (dataError?.length > 0) {
      //   console.log(dataError);
      //   dataError.map((err: any) => {
      //     const content = err?.msg ?? "Operate Failed";
      //     const myTimeout = setTimeout(() => {
      //       dispatch(
      //         openToast({
      //           isOpen: Date.now(),
      //           content: content,
      //           step: 2,
      //         })
      //       );
      //     }, 100);

      //     return () => clearTimeout(myTimeout);
      //   });
      // }
    }
    setIsLoading(false)

  };
  const [isLoading, setIsLoading] = useState<any>(false);
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center login-center">
      {contextHolder}

      {isError && <Message variant="alert-danger" mess={data} />}
      <form
        className="Login col-md-8 col-lg-4 col-11"
        onSubmit={(e) => {
          e.preventDefault();
          // onLogin({ email: "admin@example.com", password: "123456" });
          onLogin({ email: email, password: password });
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setisError(false);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setisError(false);
          }}
        />
        <button type="submit">{isLoading ? <Loading /> : "Login"}</button>
        <p
          onClick={() => {
            // navigate("/register");
          }}
        >
          Create Account
        </p>
      </form>
    </div>
  );
};

export default Login;
