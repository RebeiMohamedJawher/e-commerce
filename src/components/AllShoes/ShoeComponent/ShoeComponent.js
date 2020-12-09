import React from 'react';

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import './ShoeComponent.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const ShoeComponent = ({ image, id, title, before, after, category }) => {

  // eslint-disable-next-line no-unused-vars
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        image: image,
        title: title,
        before: before,
        after: after,
        category: category,
      },
    })
  };

  return (
    <div className="shoeComponent">
      <img src={image} alt="Nike Metcon 6" />
      <div className="shoeComponent__name1 shoeComponent__name2 shoeComponent__name3">
        <span>{title}</span>
      </div>
      <div className="shoeComponent__price">
        <span className="shoeComponent__before">Before: <span className="shoeComponent__beforePrice">{before}DNT</span></span>
        <span className="shoeComponent__after">Now: <span className="shoeComponent__afterPrice">{after}DNT</span></span>
      </div>
      <span className="shoeComponent__category">{category}</span>
      <div className="shoeComponent__add" onClick={addToCart} >
        <div className="oneMore">
          <span>Add To Cart</span>
          <ShoppingCartRoundedIcon />
        </div>
      </div>
      {/* <button onClick={addToCart} >Add To Cart <ShoppingCartRoundedIcon /></button> */}
    </div>
  );
}

export default ShoeComponent;