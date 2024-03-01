"use client";
import "./style.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   useGetProfileQuery,
//   useLogoutMutation,
// } from "../store/components/auth/authApi";
import { CONST_ALL, NAME_STORAGE } from "../utils/constants";
// import { setUserInfo, userLogout } from "../store/components/auth/authSlice";
// import { useCheckCartQuery } from "../store/components/orders/ordersApi";
// import {
//   setStProductsCart,
//   setStoProducts,
// } from "../store/components/products/productsSlice";
// import {
//   useCreateCoMutation,
//   useGetBrandsQuery,
//   useGetCoQuery,
//   useGetProductsQuery,
// } from "../store/components/products/productsApi";
// import { getDataProducts, getUserInfo } from "../store/selector/RootSelector";
import mainLogo from "./../../public/images/AVA79.svg";

import axios from "axios";
import { Link } from "navigation";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "store";
import { setAuthState } from "store/slices/authSlice";
import { getIsUserLogin, getProductList } from "store/rootSelector";
import { setStoProducts } from "store/slices/productsSlice";
import { toNonAccentVietnamese } from "utils/commonFunction";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Header = (props: any) => {
  const { data, pagenumber, dataBrands } = props;
  // console.log(data.metadata.products)
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const dispatch = useAppDispatch();

  const dataProducts1 = useAppSelector(getProductList);
  // console.log(dataProducts1);

  // const dispatch = useDispatch();
  const isUserLogin = useAppSelector(getIsUserLogin);

  dispatch(setStoProducts({ dataProducts: data?.metadata?.products ?? [] }));

  const [keyword, setKeyword] = useState<any>("");

  // const [
  //   createCo,
  //   { isLoading: LoadingcreateReview, error: errorcreateReview },
  // ] = useCreateCoMutation();

  // const onCreateReviewProduct = async (values: any) => {
  //   const res = await createCo({});
  //   //@ts-ignore
  //   const data = res?.data;
  //   console.log(data);
  //   if (data) {
  //   } else {
  //   }
  // };

  let axiosConfig = {
    withCredentials: true,
    credentials: "include",
  };

  const loginUser = async (data: any) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/cookie`,
        axiosConfig
      );
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  // const {
  //   data: datacookie,
  //   error: errBrandsx,
  //   isSuccess: isSuccessBrandsx,
  //   isLoading: isLoadingBrandsx,
  // } = useGetCoQuery(
  //   {},
  //   {
  //     refetchOnMountOrArgChange: true,
  //     skip: false,
  //   }
  // );

  // console.log(datacookie);

  const [brand, setBrand] = useState<any>(CONST_ALL);
  const [brands, setBrands] = useState<any>(dataBrands?.brands ?? []);

  const [dropdown, setdropdown] = useState<any>(false);

  const [cartItems, setcartItems] = useState<any>([]);
  // const { data: dataCart, isSuccess: isSuccessCart } = useCheckCartQuery(
  //   {},
  //   {
  //     refetchOnMountOrArgChange: true,
  //     skip: false,
  //   }
  // );

  // useEffect(() => {
  //   if (isSuccessCart) {
  //     const productsCart = dataCart?.metadata.flatMap(
  //       (cart: any) => cart.cart_products
  //     );

  //     setcartItems(productsCart || []);
  //     dispatch(setStProductsCart(productsCart));
  //   }
  // }, [dataCart]);

  const submitHandler = (value: any, bra: any) => {
    setKeyword(value);

    if (value.trim() || bra) {
      // navigate(`/?search=${value.trim()}&&brand=${bra}`);
      const __searchParams = new URLSearchParams(searchParams);
      __searchParams.set("keyword", value);
      __searchParams.set("brand", bra);
      __searchParams.set("page", "1");
      router.replace(`${pathname}?${__searchParams.toString()}`);
    } else {
      // navigate("/");
    }
  };
  // const [userInfo, setdataFetched] = useState<any>({});
  // const userInfo = useSelector(getUserInfo);
  const userInfo: any = {};

  // const {
  //   data: dataProfile,
  //   error,
  //   isSuccess: isSuccessProfile,
  //   isLoading,
  // } = useGetProfileQuery(
  //   {},
  //   {
  //     refetchOnMountOrArgChange: true,
  //     skip: false,
  //   }
  // );

  // useEffect(() => {
  //   if (isSuccessProfile) {
  //     // setdataFetched(dataProfile?.metadata);
  //     dispatch(setUserInfo({ ...dataProfile?.metadata }));
  //     localStorage.setItem(NAME_STORAGE, dataProfile?.metadata?.name);
  //   }
  // }, [dataProfile]);

  // useEffect(() => {
  //   // console.log(error);
  // }, [error]);

  // const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    // await logout({});
    // setdataFetched({});
    // dispatch(userLogout());
    // navigate("/");
  };

  return (
    <div className="header">
      <div className="container">
        <div
          className="mobile-header"
          tabIndex={0}
          onBlur={(e) => {
            e.stopPropagation();
            // setdropdown(false);
          }}
        >
          <div className="container ">
            <div className="row ">
              <div className="col-6 d-flex align-items-center">
                <Link className="navbar-brand" href="/"></Link>
                <Image
                  src={mainLogo}
                  // className="to-top"
                  alt="to-top"
                  width={240}
                  height={240}
                />
                {/* <button onClick={loginUser}>zzzzz</button> */}
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                {userInfo?.name ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" href="/profile">
                        Profile
                      </Link>

                      <a className="dropdown-item" onClick={logoutHandler}>
                        Logout
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" href="/login">
                        Login
                      </Link>

                      <Link className="dropdown-item" href="/register">
                        Register
                      </Link>
                    </div>
                  </div>
                )}

                <Link href="/cart" className="cart-mobile-icon">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
              <div className="col-12 d-flex align-items-center zxc">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value);
                      setdropdown(true);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        submitHandler(keyword, brand);
                        setdropdown(false);
                      }
                    }}
                  />
                  <button
                    type="submit"
                    onClick={() => {
                      setdropdown(false);
                      submitHandler(keyword, brand);
                    }}
                    className="search-button"
                  >
                    search
                  </button>

                  <select
                    className="search-button"
                    value={brand}
                    onChange={(e) => {
                      setBrand(e.target.value);
                      submitHandler(keyword, e.target.value);
                    }}
                  >
                    <option className="option__br">{CONST_ALL}</option>

                    {brands.map((bra: any, index: number) => {
                      return (
                        <option
                          className="option__br"
                          key={index}
                          value={bra?.brand}
                        >
                          {bra?.brand}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {dropdown && (
                  <div className="search-container">
                    <div className="dropdown">
                      {dataProducts1
                        .filter((item: any) => {
                          const searchTerm =
                            toNonAccentVietnamese(keyword).toLowerCase();
                          const fullName = toNonAccentVietnamese(
                            item?.product_name
                          ).toLowerCase();
                          return (
                            searchTerm && fullName.includes(searchTerm) /* &&
                            fullName !== searchTerm */
                          );
                        })
                        .slice(0, 10)
                        .map((item: any) => (
                          <div
                            className="dropdown-row"
                            onClick={(e) => {
                              e.stopPropagation();
                              submitHandler(item?.name, brand);

                              // navigate(`product-detail?id=${item?._id}`);
                              setKeyword("");
                            }}
                            key={item?._id}
                          >
                            {item?.product_name}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="pc-header"
          tabIndex={1}
          onBlur={(e) => {
            e.stopPropagation();

            // setdropdown(false);
          }}
        >
          <div className="row">
            <div className="col-md-3 col-4 d-flex align-items-center">
              <Link className="navbar-brand" href="/">
                <Image
                  src={mainLogo}
                  // className="to-top"
                  alt="to-top"
                  width={120}
                  height={70}
                />
              </Link>
              {/* <button onClick={loginUser}>zzzzz</button> */}
            </div>
            <div className="col-md-6 col-8 d-flex align-items-center zxc">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Search"
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    setdropdown(true);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      submitHandler(keyword, brand);
                      setdropdown(false);
                    }
                  }}
                />
                <button
                  type="submit"
                  onClick={() => {
                    setdropdown(false);
                    submitHandler(keyword, brand);
                  }}
                  className="search-button"
                >
                  search
                </button>
                <select
                  className="search-button"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                    submitHandler(keyword, e.target.value);
                  }}
                >
                  <option className="option__br">{CONST_ALL}</option>

                  {brands.map((bra: any, index: number) => {
                    return (
                      <option
                        className="option__br"
                        key={index}
                        value={bra?.brand}
                      >
                        {bra?.brand}
                      </option>
                    );
                  })}
                </select>
              </div>
              {dropdown && (
                <div className="search-container">
                  <div className="dropdown">
                    {dataProducts1
                      .filter((item: any) => {
                        const searchTerm =
                          toNonAccentVietnamese(keyword).toLowerCase();
                        const fullName = toNonAccentVietnamese(
                          item?.product_name
                        ).toLowerCase();
                        // console.log(searchTerm);
                        // console.log(fullName);
                        return (
                          searchTerm && fullName.includes(searchTerm) /* &&
                          fullName !== searchTerm */
                        );
                      })
                      .slice(0, 10)
                      .map((item: any, index: number) => (
                        <div
                          className="dropdown-row"
                          onClick={(e) => {
                            e.stopPropagation();
                            submitHandler(item?.name, brand);
                            // navigate(`product-detail?id=${item?._id}`);
                            setKeyword("");
                          }}
                          key={item?._id}
                        >
                          <div className="name">{item?.product_name}</div>
                          <img src={item?.product_thumb} alt="" />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
              {userInfo?.name ? (
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, {userInfo?.name}
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" href="/profile">
                      Profile
                    </Link>

                    <a className="dropdown-item" onClick={logoutHandler}>
                      Logout
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/register">Register</Link>
                  <Link href="/login">Login</Link>
                </>
              )}

              <Link href="/cart">
                <i className="fas fa-shopping-bag"></i>
                <span className="badge">{cartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
