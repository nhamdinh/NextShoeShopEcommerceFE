import { useRouter } from "next/router";
import { NextApiResponse } from "next";
import { serialize, CookieSerializeOptions } from "cookie";
import moment from "moment";
import { BUFFER_1, BUFFER_2, REGEX_CURRENCY, SVG_SPIN, regexPassword } from "./constants";

export const passwordCheck = (pass: any) => {
  if (regexPassword.exec(pass) === null) {
    return false;
  } else {
    return true;
  }
};

export const getUrlParams = (param: string) => {
  const router = useRouter();
  let valueUrl = router.query[param];
  return valueUrl;
};
export const emailCheck = (email: string) => {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.exec(email) === null) {
    // alert("invalparam password!");
    return false;
  } else {
    // console.log("valparam");
    return true;
  }
};
// accept only number, no characters and special characters
export const formatPhone = (val: string) => {
  return val.replace(" ", "").replace(/[^0-9 ]+/g, "");
};

export const removeNonNumeric = (num: string) => {
  const result = ~~num.replace(/[^\d]/g, "");
  return result;
};

export const addCommas = (num: any, style = ",") => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, style);
};

export const formatMoney = (text: any, isChinaMoney?: boolean) => {
  if (!text) {
    return "0";
  }
  //format korea currency delivery_type === 2
  if (!isChinaMoney) {
    return addCommas(removeNonNumeric(text.toString()));
  } else {
    //format china currency delivery_type === 1
    return text.toFixed(2).toString();
  }
};

export const formatMoneyCurrency = (text: any) => {
  if (!text) {
    return "0.00";
  }
  //format china currency delivery_type === 1
  // console.log(text)
  let numberText = +text;
  if (+text < 0) {
    numberText = +numberText * -1;
  }

  let string = numberText.toFixed(2).toString();
  let length = string.length;
  let string_slice = string.substr(0, length - 3);
  let string_slice3 = string.substr(length - 3, length - 1);
  if (+text < 0)
    return (
      "-" +
      string_slice.toString().replace(REGEX_CURRENCY, "$1,") +
      string_slice3
    );
  return string_slice.toString().replace(REGEX_CURRENCY, "$1,") + string_slice3;
};

export const rawMarkup = (rawMarkup = "") => {
  return { __html: rawMarkup };
};

export const SpinCus = () => {
  return { __html: SVG_SPIN };
};

export const nameCheck = (pass: any) => {
  let regex = /^[a-zA-Z0-9]*$/;
  if (regex.exec(pass) === null) {
    // alert("invalparam password!");
    return false;
  } else {
    // console.log("valparam");
    return true;
  }
};

export const formatProductWeight = (weight: number) => {
  return Number(weight / 100);
};

export const formatCustomerPhoneNumber = (value: string) => {
  if (!value) return;
  //KOC 516
  return `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
};

export function getCookie(cname:any) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}

/**
 * This sets `cookie` using the `res` object
 */
export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if (typeof options.maxAge === "number") {
    options.expires = new Date(Date.now() + options.maxAge * 1000);
  }

  res.setHeader("Set-Cookie", serialize(name, stringValue, options));
};

export const formatPoint = (text: any, isChinaMoney = false) => {
  if (!text) {
    if (!isChinaMoney) {
      return "0원";
    } else {
      //format china currency delivery_type === 1
      return "￥ 0";
    }
  }
  //format korea currency delivery_type === 2
  if (!isChinaMoney) {
    return addCommas(removeNonNumeric(text.toString())) + "원";
  } else {
    //format china currency delivery_type === 1
    return "￥ " + addCommas(removeNonNumeric(text.toString()));
  }
};

export const getDurationBetween = (afterDate: any, beforeDate: any) => {
  var afterTime = moment(afterDate);
  var beforeTime = moment(beforeDate);
  let seconds = afterTime.diff(beforeTime, "seconds");
  let hour = afterTime.diff(beforeTime, "hours");
  let min =
    afterTime.diff(beforeTime, "minutes") -
    afterTime.diff(beforeTime, "hours") * 60;
  if (hour < 0 || Number.isNaN(hour)) hour = 0;
  if (min < 0 || Number.isNaN(min)) min = 0;
  let duration = hour * 60 + min;

  return seconds;
};

export const formatMoneyPoint = (text: any, isChinaMoney = false) => {
  if (!text) {
    if (!isChinaMoney) {
      return "0";
    } else {
      //format china currency delivery_type === 1
      return "0.00";
    }
  }
  //format korea currency delivery_type === 2
  if (!isChinaMoney) {
    return addCommas(removeNonNumeric(text.toString()));
  } else {
    //format china currency delivery_type === 1
    let numberText = +text;
    let string = numberText.toFixed(2).toString();
    let length = string.length;
    let string_slice = string.substr(0, length - 3);
    let string_slice3 = string.substr(length - 3, length - 1);
    return addCommas(removeNonNumeric(string_slice)) + string_slice3;
  }
};

export const setItemWishlist = (wishlistArr: any, idProduct: any) => {
  let itemId = "";
  wishlistArr?.map((wishlistProduct: any, index: any) => {
    if (idProduct === wishlistProduct?.product_id) {
      itemId = wishlistProduct?.id;
    }
  });
  return itemId;
};

export const displayTimeLeft = (seconds:any) => {
  let min = Math.floor(seconds / 60);
  let secondsLeft = seconds % 60;
  let sec =
    secondsLeft.toString().length === 1 ? "0" + secondsLeft : secondsLeft;
  return `${min}:${sec}`;
};

export function Format2Decimal(value:any) {
  const regex = /([0-9]*[\.|\,]{0,1}[0-9]{0,2})/s;
  return Number(value.match(regex)[0]);
}

export const findUniqueElements = (array1:any, array2:any) => {
  const result = array1.filter((item:any) => !array2.includes(item));
  return result;
};

export const findUniqueOneArr = (arrString:any) => {
  return arrString.reduce((acc:any, item:any) => {
    const isExist = acc.includes(item);
    if (!isExist) {
      acc.push(item);
    }
    return acc;
  }, []);
};

export const renderValueOpt = (variantCustom:any) => {
  let valueOpt: any =
    variantCustom?.title === "default"
      ? BUFFER_1
      : variantCustom?.title ?? BUFFER_1;
  if (valueOpt !== BUFFER_1) {
    if (variantCustom?.options?.length > 0) {
      const optionsArr = [...variantCustom?.options] ?? [];
      valueOpt = optionsArr
        .sort((aa, bb) =>
          aa.option_id > bb.option_id ? -1 : bb.option_id > aa.option_id ? 1 : 0
        )
        .reduce(
          (acc, opt) => {
            return acc + BUFFER_2 + opt?.value;
          },
          [""]
        );
      return valueOpt.replace(BUFFER_2, "");
    }
  }
  return valueOpt;
};

export const renderBrandName = (dataProductDetail:any) => {
  return dataProductDetail?.brand_id? dataProductDetail?.brand?.name: dataProductDetail?.brand_tag;
};

export const toNonAccentVietnamese = (str:string) => {
  str = str.replace(/A|Á|À|Ã|Ạ|Ả|Â|Ấ|Ầ|Ẫ|Ậ|Ẩ|Ă|Ắ|Ằ|Ẵ|Ặ|Ẳ/g, "A");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ẻ|Ê|Ế|Ề|Ễ|Ệ|Ể/, "E");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/I|Í|Ì|Ĩ|Ị|Ỉ/g, "I");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ỏ|Ô|Ố|Ồ|Ỗ|Ộ|Ổ|Ơ|Ớ|Ờ|Ỡ|Ợ|Ở/g, "O");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ủ|Ư|Ứ|Ừ|Ữ|Ự|Ử/g, "U");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ|Ỷ/g, "Y");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  // str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}
