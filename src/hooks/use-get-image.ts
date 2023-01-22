const images = {
  guyWithNotebooks: require("../../assets/images/guy-with-notebooks.png"),
};
export const useGetImage = (imageName: keyof typeof images) => {
  return images[imageName];
};
