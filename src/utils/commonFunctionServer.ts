export const removeNullObject = (obj:any) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    });
  
    return obj;
  };