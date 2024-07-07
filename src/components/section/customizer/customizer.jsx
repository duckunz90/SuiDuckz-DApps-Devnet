import React, { useState } from 'react';
import {
  CustomizePageContainer,
  Canvas,
  AssetPanel,
  ArrowButtons,
  ControlsContainer,
} from './customizer.style';
import assets from '../../../common/programAsset/programAsset';

const CustomizePage = () => {
  const assetFolders = Object.keys(assets);
  const [selectedFolder, setSelectedFolder] = useState(assetFolders[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleFolderChange = (folder) => {
    setSelectedFolder(folder);
    setSelectedImageIndex(0);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : assets[selectedFolder].length - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < assets[selectedFolder].length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <CustomizePageContainer>
      <Canvas>
        {console.log(`../../../assets/images/customize/${selectedFolder}/${assets[selectedFolder][selectedImageIndex]}`)}
        <img
          src={`../../../assets/images/customize/${selectedFolder}/${assets[selectedFolder][selectedImageIndex]}`}
          alt="Customized Image"
        />
      </Canvas>

      <ControlsContainer>
        <AssetPanel>
          {assetFolders.map((folder, index) => (
            <button
              key={index}
              onClick={() => handleFolderChange(folder)}
              className={folder === selectedFolder ? 'selected' : ''}
            >
              {folder}
            </button>
          ))}
        </AssetPanel>

        <ArrowButtons>
          <button onClick={handlePrevImage}>&larr;</button>
          <button onClick={handleNextImage}>&rarr;</button>
        </ArrowButtons>
      </ControlsContainer>
    </CustomizePageContainer>
  );
};

export default CustomizePage;
