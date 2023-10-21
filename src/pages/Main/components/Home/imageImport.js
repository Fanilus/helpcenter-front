export const importAllImages = (context) => {
  let images = {};
  context.keys().forEach((item) => {
    const imageName = item.replace('./', '');
    images[imageName] = context(item).default;
  });
  return images;
};
