import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/scss/navigation';
import AddToOutfitCard from './components/AddToOutfitCard.jsx';
import Icon from '@/components/icons.jsx';

const AbstractList = ({
  items = [],
  isLoading = false,
  error = '',
  heading = '',
  CardComponent,
  action = () => {},
  isOutfit = false,
  selectedProduct = '',
  handleAddToOutfit = () => {},
  setProductId = () => {},
}) => {
  const renderLoadingMessage = () => <p>Loading...</p>;

  const renderErrorMessage = () => (
    <p className="error-message secondary-color">{error}</p>
  );

  const renderNoItemsMessage = () => <p>No items found</p>;

  const renderNavigationButton = (direction) => (
    <button
      id={`custom-swiper-button-${direction}-${isOutfit}`}
      className={`transparent-button custom-swiper-button-${direction} m-2 z-0`}
      aria-label={`Scroll ${direction}`}
    >
      <Icon
        icon={`fa-chevron-${direction === 'prev' ? 'left' : 'right'}`}
        className="fs-3"
      />
    </button>
  );

  const renderSwiperCarousel = () => {
    const hasMultipleItems = items.length > 3;

    return (
      <div className="abstract-list-container d-flex">
        {hasMultipleItems && renderNavigationButton('prev')}
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          loop
          centeredSlides
          navigation={{
            prevEl: `#custom-swiper-button-prev-${isOutfit}`,
            nextEl: `#custom-swiper-button-next-${isOutfit}`,
          }}
          modules={hasMultipleItems ? [Navigation] : []}
          className="mySwiper"
          watchOverflow
        >
          {items.map((itemId, index) => (
            <SwiperSlide key={`${itemId}-${index}`}>
              <div className="d-flex align-items-center justify-content-center">
                <CardComponent
                  productId={itemId}
                  action={action}
                  setProductId={setProductId}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {hasMultipleItems && renderNavigationButton('next')}
      </div>
    );
  };

  const renderContent = () => {
    if (isLoading) return renderLoadingMessage();
    if (error) return renderErrorMessage();
    if (items.length === 0) return renderNoItemsMessage();
    return renderSwiperCarousel();
  };

  return (
    <>
      <h5 className="section-header">
        {heading}
        {isOutfit && (
          <AddToOutfitCard
            productId={selectedProduct}
            action={handleAddToOutfit}
            items={items}
          />
        )}
      </h5>
      <div className="secondary-bg z-n1 section">{renderContent()}</div>
    </>
  );
};

AbstractList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  heading: PropTypes.string,
  CardComponent: PropTypes.elementType.isRequired,
  action: PropTypes.func,
  isOutfit: PropTypes.bool,
  selectedProduct: PropTypes.string,
  handleAddToOutfit: PropTypes.func,
  setProductId: PropTypes.func,
};

export default AbstractList;
