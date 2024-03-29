"use client";
import React, { useEffect, useState } from "react";
import { useSendEmailMutation } from "../../store/components/auth/authApi";
import { useDispatch } from "react-redux";
import { openToast } from "../../store/components/customDialog/toastSlice";
import Loading from "../LoadingError/Loading";
import { useSelector } from "react-redux";
import { getUserInfo } from "../../store/selector/RootSelector";

const CalltoActionSection = () => {
  const userInfo = useSelector(getUserInfo);
  const [email, setemail] = useState<any>("");
  const [sendEmail, { isLoading, error }] = useSendEmailMutation();
  const dispatch = useDispatch();

  const onSendEmail = async (values: any) => {
    const res = await sendEmail(values);

    //@ts-ignore
    const data = res?.data;

    if (data) {
      console.log(data);
      setemail("");
      dispatch(
        openToast({
          isOpen: Date.now(),
          content: "A Email Has been send !",
          step: 1,
        })
      );
    } else {
      //@ts-ignore
      const error = res?.error;
      const dataError = error?.data ?? [];
      if (dataError?.length > 0) {
        dataError.map((err: any) => {
          const content = err?.msg ?? "Operate Failed";
          const myTimeout = setTimeout(() => {
            dispatch(
              openToast({
                isOpen: Date.now(),
                content: content,
                step: 2,
              })
            );
          }, 100);

          return () => clearTimeout(myTimeout);
        });
      }
    }
  };

  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>FOLLOW SHOP</h2>
              <p>Sign up free and get the latest tips.</p>
              <div className="form-section">
                <input
                  placeholder="Your Email..."
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e: any) => {
                    setemail(e.target.value);
                  }}
                />

                {isLoading ? (
                  <Loading />
                ) : (
                  <input
                    onClick={() => {
                      onSendEmail({
                        email: email,
                        productShopName: userInfo?.productShopName,
                      });
                    }}
                    value="Yes. I want!"
                    name="subscribe"
                    type="submit"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
