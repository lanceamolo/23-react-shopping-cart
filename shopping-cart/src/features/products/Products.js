import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectProducts, productsAsync } from "./productsSlice"
import { selectCart, addItem, subItem } from "./cartSlice.js" // selectCart is from line 17, addItem is from the reducer
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Products() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const cart = useSelector(selectCart)
  const [toggleCart, setToggleCart] = useState(true)
  const productsNumber = products.length

  useEffect(() => {
    dispatch(productsAsync())
  }, [])

  function handleClick() {
    setToggleCart(false)
    if (!toggleCart) {
      setToggleCart(true)
    }
  }

  function handleClick2() {
    setToggleCart(false)
  }

  let prices = cart.map((item) => item.price)

  function sum(num1, num2) {
    return num1 + num2
  }
  let total = prices.reduce(sum, 0)

  let quantity = cart.map((item) => {
    return item.length
  })

  return (
    <div>
      <h1 className="topLeftBox">LA</h1>
      <div className="container">
        <div className="column1">
          <h4 className="sizeTitle">Sizes:</h4>
          <button className="sizeButtons">XS</button>
          <button className="sizeButtons">S</button>
          <button className="sizeButtons">M</button>
          <button className="sizeButtons">ML</button>
          <button className="sizeButtons">L</button>
          <button className="sizeButtons">XL</button>
          <button className="sizeButtons">XXL</button>
          <div className="starButtonContainer">
            <p>{`Leave a star on Github if this repository was useful :)`}</p>
            <span className="starReviews">
              <button className="starButton">
                <span>
                  <i class="far fa-star">Star</i>
                </span>
              </button>
              <button>1,513</button>
            </span>
          </div>
        </div>
        <div className="column2">
          <div className="column2Header">
            <p className="productsFound">{`${productsNumber} Product(s) found.`}</p>
            <div class="sortSection">
              Order by
              <select className="sortDropDown">
                <option value="">Select</option>
                <option value="lowestPrice">Lowest to highest</option>
                <option value="highestPrice">Highest to lowest</option>
              </select>
            </div>
            <div className="productBody">
              {products.map((item) => (
                <div
                  className="productCard"
                  onClick={() => dispatch(addItem(item))}
                  key={item.sku}
                  id={item.id}
                >
                  <div className="freeShippingTab">
                    <p
                      className={
                        item.isFreeShipping ? "freeShipping" : "notFreeShipping"
                      }
                    >
                      {item.isFreeShipping ? "Free shipping" : "Free shipping"}
                    </p>
                  </div>
                  <div className="normalImg">
                    <img className="normalPic" src={item.img.normal} />
                  </div>
                  <p className="itemTitle">{item.title}</p>
                  <div className="priceArea">
                    <span className="signAndPrice">
                      <p className="dollarSign">{item.currencyFormat}</p>
                      <h3 className="itemPrice">{item.price.toFixed(2)}</h3>
                    </span>
                    <span className="itemInstallment">
                      <p>or {item.installments} x</p>
                      <h3>
                        {item.currencyFormat}
                        {(item.price / item.installments).toFixed(2)}
                      </h3>
                    </span>
                  </div>
                  <button onClick={handleClick2} className="addToCart">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={!toggleCart ? "showCart" : "hideCart"}>
        <div className="toggleCart" onClick={handleClick}>
          <i className="far fa-shopping-cart"></i>
        </div>
        <div className="cart">
          <div className="cartContent">
            <div className="cartHeader">
              <h2>
                <i className="far fa-shopping-cart cartIconTop"></i>
                Cart <p className="cartAmount">{cart.length}</p>{" "}
              </h2>
            </div>
            <div className="cartBody">
              {cart.map((item) => (
                <div className="cartSlot">
                  <div className="leftSideSlot">
                    <img className="thumbnailImg" src={item.img.thumb} />
                  </div>
                  <div className="middleSideSlot">
                    <p className="middleSlot1">{item.title}</p>
                    <p className="middleSlot2">
                      {item.availableSizes[0]} |{" "}
                      {item.description == ""
                        ? "No description available"
                        : item.description}
                    </p>
                    <p className="middleSlot3">Quantity:{item.quantity}</p>
                  </div>
                  <div className="rightSideSlot">
                    <h3
                      className="rightSlot1"
                      onClick={() => dispatch(subItem(item.id))}
                    >
                      X
                    </h3>
                    <p className="rightSlot2">
                      {item.currencyFormat} {item.price.toFixed(2)}
                    </p>
                    <span className="rightSlotButtons">
                      <button className="minusQuantity">-</button>
                      <button className="addQuantity">+</button>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cartFooter">
            <div className="subTotal">SUBTOTAL</div>
            <div class="subPrice">
              <p class="subPriceTotal">${total.toFixed(2)}</p>
              <p class="subPriceInstallment">
                <span>OR UP TO 5 x $ 5.89</span>
              </p>
            </div>
            <div className="checkoutCart">
              <button className="checkoutButton">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
