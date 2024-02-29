"use client";

import React, { useState, useEffect } from "react";

const Pagination = (props: any) => {
  const { totalPage, currentPage, keyword, brand, cb_setCurrentPage } = props;
  //@ts-ignore
  const iterator = [...Array(totalPage).keys()];
  // const [iterator, setiterator] = useState<any>([]);
  // const [total, settotal] = useState<any>(1);
  // const [currentPage, setpage] = useState<any>(1);
  // const [keyword, setkeyword] = useState<any>("");
  // const [brand, setbrand] = useState<any>("");

  useEffect(() => {
    //@ts-ignore
    // setiterator([...Array(props?.total).keys()]);
    // settotal(props?.total ?? 1);
    // setpage(props?.page ?? 1);
    // setkeyword(props?.keyword ?? "");
    // setbrand(props?.brand ?? "");
  }, [props]);

  return totalPage > 1 ? (
    <nav>
      <ul className="pagination justify-content-center">
        {iterator.map((x: any) => (
          <li
            className={`page-item ${x + 1 === currentPage ? "active" : ""}`}
            key={x + 1}
          >
            <div
              onClick={() => {
                cb_setCurrentPage(+x + 1);
                // navigate(`/?page=${x + 1}&&search=${keyword}&&brand=${brand}`);
              }}
              className="page-link"
            >
              {x + 1}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <></>
  );
};

export default Pagination;
