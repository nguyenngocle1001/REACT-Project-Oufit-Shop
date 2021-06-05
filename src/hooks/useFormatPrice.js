export const useFormatPrice = () => {
  const formatter = new Intl.NumberFormat("en-vi", {
    style: "currency",
    currency: "VND",
  });

  return {
    format: (price) => formatter.format(price),
  };
};
