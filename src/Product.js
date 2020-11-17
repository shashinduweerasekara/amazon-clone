import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, description, img, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>
          {title} : {description}
        </p>
        <p className="product-priice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt={title} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
