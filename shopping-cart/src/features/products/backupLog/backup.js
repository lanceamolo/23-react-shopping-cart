// import React, { useState, useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import { selectProducts, productsAsync } from "./productsSlice"
// import { selectCart, addItem } from "./cartSlice.js" // selectCart is from line 17, addItem is from the reducer

// export function Products() {
//   const dispatch = useDispatch()
//   const products = useSelector(selectProducts)
//   const cart = useSelector(selectCart)
//   const [toggleCart, setToggleCart] = useState("true")

//   useEffect(() => {
//     dispatch(productsAsync())
//   }, [])

//   return (
//     <div>
//       <div className="container">
//         <div className="col1">
//           <h1 className="topLeftBox">LA</h1>
//         </div>
//         <div className="col2">
//           <div className="sidebar">
//             <h4 className="sizeHeader">Sizes:</h4>
// <button className="sizeButtons">XS</button>
// <button className="sizeButtons">S</button>
// <button className="sizeButtons">M</button>
// <button className="sizeButtons">ML</button>
// <button className="sizeButtons">L</button>
// <button className="sizeButtons">XL</button>
//             <button className="sizeButtons">XXL</button>
//             <p className="gitHubStar">
//               Leave a star on Github if this repository was useful :)
//             </p>
// <span className="starReviews">
//   <button className="starButton">* Star</button>
//   <button>1,513</button>
// </span>
//           </div>
//         </div>
//         <div className="col3">
//           <div className="col3row1">
//             <p className="productsFound">{products.length} Product(s) found</p>
//             <div className="orderBy">
//               <label>Order by </label>
//               <select className="selectDropDown">
//                 <option value="Select">Select</option>
//               </select>
//             </div>
//           </div>
//           <br />
//           <div className="col3row2">
//             {products.map((item) => (
//               <div
//                 className="card"
//                 onClick={() => dispatch(addItem(item))}
//                 key={item.sku}
//               >
//                 <p
//                   className={
//                     item.isFreeShipping ? "freeShipping" : "notFreeShipping"
//                   }
//                 >
//                   {item.isFreeShipping ? "Free shipping" : "Free shipping"}
//                 </p>
//                 <img className="normalImg" src={item.img.normal}></img>
//                 <p className="itemTitle">{item.title}</p>
//                 <span className="signAndPrice">
//                   <p className="dollarSign">{item.currencyFormat}</p>
//                   <h3 className="itemPrice">{item.price.toFixed(2)}</h3>
//                 </span>
//                 <span className="itemInstallment">
//                   <p>or {item.installments} x</p>
//                   <h3>
//                     {item.currencyFormat}
//                     {(item.price / item.installments).toFixed(2)}
//                   </h3>
//                 </span>
//                 <button className="addToCart">Add to Cart</button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="col4"></div>
//       </div>
//       <div className="checkoutCart">
//         <h1 className="cartToggle">X</h1>
//         <div className="cart">
//           <div className="cartHeader">
//             <p>## </p>
//             <p className="cartTitle"> Cart</p>
//           </div>
//           <div className="cartBody">
//             {cart.map((item) => (
//               <div className="cartSlot">
//                 <div className="leftSideSlot">
//                   <img className="thumbnailImg" src={item.img.thumb} />
//                 </div>
//                 <div className="middleSideSlot">
//                   <p className="middleSlot1">{item.title}</p>
//                   <p className="middleSlot2">
//                     {item.availableSizes[0]} |{" "}
//                     {item.description == ""
//                       ? "No description available"
//                       : item.description}
//                   </p>
//                   <p className="middleSlot3">Quantity: 1</p>
//                 </div>
//                 <div className="rightSideSlot">
//                   <h3 className="rightSlot1">X</h3>
//                   <p className="rightSlot2">
//                     {item.currencyFormat} {item.price.toFixed(2)}
//                   </p>
//                   <span className="rightSlotButtons">
//                     <button className="minusQuantity">-</button>
//                     <button className="addQuantity">+</button>
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
