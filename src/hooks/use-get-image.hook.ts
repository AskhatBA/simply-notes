const images = {
  guyWithNotebooks: require("../../assets/images/guy-with-notebooks.png"),
};
export const useGetImageHook = (imageName: keyof typeof images) => {
  return images[imageName];
};
