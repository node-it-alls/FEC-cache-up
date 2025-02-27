import React from 'react';
import PropTypes from 'prop-types';
import RelatedProductCard from './components/RelatedProductCard.jsx';
import AbstractList from './AbstractList.jsx';
import { useRelatedProducts } from './hooks/UseRelatedProducts.jsx';
import ProductComparisonModal from './components/ProductComparisonModal.jsx';
import { useComparisonModal } from './hooks/UseComparisonModal.jsx';

const RelatedProductList = ({ productId, setProductId }) => {
  const { relatedProducts, isLoading, error } = useRelatedProducts(productId);
  const {
    showModal,
    relatedProduct,
    selectedProduct,
    handleCardClick,
    handleCloseModal,
  } = useComparisonModal(productId);

  return (
    <div className={''}>
      <ProductComparisonModal
        show={showModal}
        onHide={handleCloseModal}
        relatedProduct={relatedProduct}
        selectedProduct={selectedProduct}
      />
      <AbstractList
        items={relatedProducts}
        isLoading={isLoading}
        error={error}
        heading="Related Products"
        CardComponent={RelatedProductCard}
        action={handleCardClick}
        setProductId={setProductId}
      />
    </div>
  );
};

RelatedProductList.propTypes = {
  productId: PropTypes.string,
  setProductId: PropTypes.func,
};

export default RelatedProductList;
