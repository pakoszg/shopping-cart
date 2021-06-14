export const decimalNumber = (number) => {
  if (!isNaN(number)) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
};
