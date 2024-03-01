export const getUserLogin = (state: any) => state.auth.isUserLogin;
export const getAccessToken = (state: any) => state.auth.accessToken;
export const getUserInfo = (state: any) => state.auth.userInfo;
export const getIsUserLogin = (state: any) => state.auth.isUserLogin;

// product selector
export const getProductList = (state: any) => state.product.storeProducts;

// custom dialog for confirm
export const getDialogContent = (state: any) => state.dialog.content;
export const getSubContent = (state: any) => state.dialog.subContent;
export const getDialogTitle = (state: any) => state.dialog.title;
export const getDialogStatus = (state: any) => state.dialog.isOpen;
export const getDialogMaskClosable = (state: any) => state.dialog.maskClosable;
export const getDialogConfirmText = (state: any) => state.dialog.confirmText;
export const getDialogCloseText = (state: any) => state.dialog.closeText;
export const getActionConfirm = (state: any) => state.dialog.actionConfirm;
export const getActionCancel = (state: any) => state.dialog.actionCancel;
export const getActionAfterClose = (state: any) =>
  state.dialog.actionAfterClose;
export const getDialogType = (state: any) => state.dialog.type;
export const getWidthDialog = (state: any) => state.dialog.width;

// addressModal
export const getIsOpenAddressModal = (state: any) => state.addressModal.isOpen;
export const getAddressModalData = (state: any) => state.addressModal.data;

//get search keywords
export const getSearchLstRecent = (state: any) =>
  state.product.searchListRecent;
export const getSearchLstResult = (state: any) =>
  state.product.searchKeyWordResult;
export const getSelectedKeyword = (state: any) => state.product.keywords;

export const getCartItemsState = (state: any) => state.product.cart;

export const getWishlistIdState = (state: any) => state.wishlist.wishlistId;
export const getWishlistProductsState = (state: any) => state.wishlist.wishlistProducts;

// Change My Page view
export const getInitialView = (state: any) => state.view.viewLabel;
export const getViewData = (state: any) => state.view.data;

// Orders
export const getLimitOrdersList = (state: any) => state.orders.limitOrdersList;
export const getOrdersList = (state: any) => state.orders.ordersList;

// Coupon
export const getCouponList = (state: any) => state.coupon.couponList;
//brand info
export const getBrandInfo = (state: any) => state.brand.list.brands

// custom modal
export const modalStatus = (state: any) => state.modal.isOpen;
export const modalTemplate = (state: any) => state.modal.template;
export const modalData = (state: any) => state.modal.data;
export const modalWidth = (state: any) => state.modal.width;
export const modalHeight = (state: any) => state.modal.height;
export const modalConfirm = (state: any) => state.modal.actionConfirm;
export const modalCancel = (state: any) => state.modal.actionCancel;
//auth 
export const redirectMyPage = (state: any) => state.auth.to_myPage;
