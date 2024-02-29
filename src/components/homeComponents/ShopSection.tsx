"use client";
import "./styles.scss";
import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Pagination from "./Pagination";
import { formatMoneyCurrency } from "../../utils/commonFunction";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ShopSection = (props: any) => {
  const { data, pagenumber, keyword, brand } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const error = data?.code === 404;
  const [isLoading, setIsLoading] = useState<any>(false);

  useEffect(() => {
    if (data?.metadata?.products) setIsLoading(false);
  }, [data]);

  // const navigate = useNavigate();
  // console.log(data?.metadata?.totalPages)
  // console.log(data?.metadata)
  // console.log(data?.metadata)
  // console.log(data?.metadata)

  // const [currentPage, setCurrentPage] = useState<any>(1);
  // const [total, setTotal] = useState<any>(1);

  // const [params, setParams] = useState<any>({
  //   page: pagenumber ?? 1,
  //   keyword: keyword ?? "",
  //   limit: PAGE_SIZE,
  //   brand: brand ?? "",
  //   order: "desc",
  //   orderBy: "createdAt",
  // });

  // useEffect(() => {
  //   setParams({
  //     ...params,
  //     page: pagenumber ?? 1,
  //     keyword: keyword ?? "",
  //     brand: brand ?? "",
  //   });
  // }, [pagenumber, keyword, brand]);

  // const {
  //   data: dataProducts,
  //   error,
  //   isSuccess,
  //   isLoading,
  // } = useGetProductsQuery(params, {
  //   refetchOnMountOrArgChange: true,
  //   skip: false,
  // });
  // useEffect(() => {
  //   if (isSuccess) {
  //     setdataFetched(dataProducts?.metadata?.products);
  //     setTotal(dataProducts?.totalPages);
  //     setCurrentPage(dataProducts?.page);
  //   }
  // }, [dataProducts]);

  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            <div className="shopcontainer row minh5">
              {isLoading && (
                <div className="mb-5 fixed__50__50">
                  <Loading />
                </div>
              )}
              {error ? (
                <Message variant="alert-danger" mess={data} />
              ) : data?.metadata?.products?.length > 0 ? (
                <>
                  {data?.metadata?.products?.map((product: any) => (
                    <div
                      className="shop col-lg-4 col-md-6 col-sm-6"
                      key={product?._id}
                    >
                      <div className="border-product">
                        <div
                          onClick={() => {
                            // navigate(`/product-detail?id=${product?._id}`);
                          }}
                        >
                          <div className="shopBack">
                            <img
                              className="shopBack__img"
                              src={product?.product_thumb}
                              alt={product?.product_name}
                            />
                            <div
                              className="shopBack__shopName"
                              onClick={(e) => {
                                e.stopPropagation();
                                // navigate(
                                //   `/shop/${product?.product_shop?._id}`
                                // );
                              }}
                            >
                              {product?.product_shop?.productShopName}
                            </div>
                          </div>
                        </div>

                        <div className="shoptext">
                          <p>
                            <div
                              onClick={() => {
                                // navigate(
                                //   `/product-detail?id=${product?._id}`
                                // );
                              }}
                            >
                              {product?.product_name}
                            </div>
                          </p>

                          <Rating
                            value={product?.product_ratings ?? 5}
                            text={`${product?.numReviews ?? 0} reviews`}
                          />
                          <h3>
                            ${formatMoneyCurrency(product?.product_price)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <Message variant="alert-danger" messText="No Products" />
              )}
              {/* Pagination */}
              <Pagination
                totalPage={+(data?.metadata?.totalPages ?? 1)}
                currentPage={+(data?.metadata?.page ?? 1)}
                keyword={keyword ?? ""}
                brand={brand ?? ""}
                cb_setCurrentPage={(page: any) => {
                  setIsLoading(true);
                  const __searchParams = new URLSearchParams(searchParams);
                  __searchParams.set("page", page);
                  router.replace(`${pathname}?${__searchParams.toString()}`);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
