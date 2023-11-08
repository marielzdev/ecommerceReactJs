import cart from "./assets/cart.png";
import "bulma/css/bulma.css";

const CartWidget = () => {
  return (
    <section>
      <div>
        <img src={cart} alt="cart-widget" />
      </div>
      <div>0</div>
    </section>
  );
};

export default CartWidget;
