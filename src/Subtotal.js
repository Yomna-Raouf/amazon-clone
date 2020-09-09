import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) => {
    let basketTotal = 0;
    basket.map((basketItem) => (basketTotal += basketItem.price));
    return basketTotal;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {`${basket.length}`} items):{" "}
              <strong> {`*${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
