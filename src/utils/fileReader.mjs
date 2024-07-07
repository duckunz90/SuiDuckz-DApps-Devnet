// src/utils/fileReader.js

const importAll = async (context) => {
    const images = {};
    const keys = context.keys();
    for (const key of keys) {
      const fileName = key.replace('./', '');
      images[fileName] = (await context(key)).default;
    }
    return images;
  };
  
  const imagesContext = import.meta.globEager('../../assets/images/customize/**/*.png');

  const imageFiles = Object.keys(imagesContext).map((key) => imagesContext[key]);
  
  export default imageFiles;
  