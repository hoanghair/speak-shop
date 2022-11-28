import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext, ACTIONS } from "../../store";
import "./ProductItem.scss";

const ProductItem = (props) => {
  const navigate = useNavigate();
  const handelNavigateToDetailPage = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };
  const { dispatch } = useContext(AppContext);

  const handleAddProductInCart = (dataProduct) => {
    dispatch({ type: ACTIONS.ADD_PRODUCT_CART, payload: dataProduct });
  };

  return (
    <div className="ProductItem">
      <img
        src={props.img}
        alt=""
        onClick={() => handelNavigateToDetailPage(props.id)}
      />
      <div className="ProductItem__info">
        <h2 className="ProductItem__info-title">{props.title}</h2>
        <div className="ProductItem__info-action">
          <p className="ProductItem__info-price">{props.price}$</p>
          <span
            onClick={() => {
              handleAddProductInCart({ ...props, quantity: 1 });
            }}
            className="ProductItem__info-cart"
          >
            <i className="fa-solid fa-cart-plus"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
