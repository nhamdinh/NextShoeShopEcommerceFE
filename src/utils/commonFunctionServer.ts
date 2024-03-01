export const removeNullObject = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  });

  return obj;
};

export const nullObjectToEmpty = (obj: any) => {
  const final = { ...obj };
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined) {
      final[key] = "";
    }
  });

  return final;
};

export const renderParamString = (obj: any) => {
  let paramString = "";
  Object.keys(obj).map((keyword) => {
    paramString += keyword + "=" + obj[keyword] + "&";
  });
  return paramString;
};
