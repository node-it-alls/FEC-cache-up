// components/OutfitList.jsx
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useOutfitData } from './hooks/UseOutfitData.jsx';
import OutfitCard from './components/OutfitCard.jsx';
import AbstractList from './AbstractList.jsx';

const OutfitList = ({ selectedProduct, setProductId }) => {
  const { outfitIds, isLoading, error, addProduct, removeProduct } =
    useOutfitData();

  const handleAddToOutfit = useCallback(
    (id) => {
      addProduct(id);
    },
    [addProduct],
  );

  return (
    <AbstractList
      items={outfitIds}
      isLoading={isLoading}
      error={error}
      heading="Your Outfit"
      CardComponent={OutfitCard}
      action={removeProduct}
      isOutfit={true}
      selectedProduct={selectedProduct}
      handleAddToOutfit={handleAddToOutfit}
      setProductId={setProductId}
    />
  );
};

OutfitList.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
  setProductId: PropTypes.func.isRequired,
};

export default OutfitList;
