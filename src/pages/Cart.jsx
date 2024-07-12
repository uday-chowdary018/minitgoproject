import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useContext, useEffect } from "react";
import myContext from "../components/context/MyContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addQuantity,
  deleteQuantity,
  removeFromCart,
  deleteWishList,
} from "../components/redux/Slices/CartSlice";
import { selectTotalQuantity } from "../components/redux/Slices/CartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const context = useContext(myContext);

  function calculateTotalPrice() {
    let totalPrice = 0;
    cartData.forEach((cartItem) => {
      totalPrice += parseInt(cartItem.product_price) * cartItem.quantity;
    });
    return totalPrice;
  }

  const products = [
    {
      id: 1,
      img: "http://localhost:5173/src/components/images/product.png",
      name: "Organic Shampoo",
      description: "Seller name",
      size: "Xl, Sm, M, L",
      price: "₹299",
    },
    {
      id: 2,
      img: "http://localhost:5173/src/components/images/product.png",
      name: "Luxury Handmade Soap",
      description: "Pamper your skin with our  ",
      size: "Xl, Sm, M, L",
      price: "$34.67",
    },
    {
      id: 2,
      img: "http://localhost:5173/src/components/images/product.png",
      name: "Luxury Handmade Soap",
      description: "Pamper your skin with our  ",
      size: "Xl, Sm, M, L",
      price: "$34.67",
    },
    {
      id: 3,
      img: "http://localhost:5173/src/components/images/product.png",
      name: "Anti-Aging Face Cream",
      description: "Pamper your skin with our ",
      size: "Xl, Sm, M, L",
      price: "$28.67",
    },
    {
      id: 4,
      img: "http://localhost:5173/src/components/images/product.png",
      name: "Exfoliating Body Scrub",
      description: "Pamper your skin with our ",
      size: "Xl, Sm, M, L",
      price: "$24.67",
    },
    {
      id: 5,
      img: "http://localhost:5173/src/components/images/product.png",
      name: "Hydrating Lip Balm",
      description: "Pamper your skin with our ",
      size: "Xl, Sm, M, L",
      price: "$21.27",
    },
    {
      id: 5,
      img: "http://localhost:5173/src/components/images/product.png",
      name: "Hydrating Lip Balm",
      description: "Pamper your skin with our ",
      size: "Xl, Sm, M, L",
      price: "$21.27",
    },
    {
      id: 5,
      img: "http://localhost:5173/src/components/images/product.png",
      name: "Hydrating Lip Balm",
      description: "Pamper your skin with our ",
      size: "Xl, Sm, M, L",
      price: "$21.27",
    },
  ];

  //redux code start

  const cart = useSelector((state) => state.cart);
  const cartData = cart.items;
  const wishListData = cart.wishList;
  const totalQuantity = useSelector(selectTotalQuantity);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ product_id: productId }));
  };

  const handleAddQty = (productId) => {
    dispatch(addQuantity({ product_id: productId }));
  };

  const DeleteQty = (productId) => {
    dispatch(deleteQuantity({ product_id: productId }));
  };

  const handleDeleteFromWishList = (productId) => {
    dispatch(deleteWishList({ product_id: productId }));
  };

  return (
    <>
    
      <section className="h-100 gradient-custom">
        <div className="container h-100">
          <div className="row justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3 rounded-pill">
                  <h5 className="mb-0">Cart - {totalQuantity} items</h5>
                </div>
                <div className="card-body">
                  {cartData?.map((cart_item, index) => {
                    return (
                      <div className="row my-2" key={index}>
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div className="bg-image rounded hover-zoom hover-overlay">
                            <img
                              src={cart_item.product_image1}
                              className="w-100"
                              alt="Product"
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>{cart_item.client_name}</strong>
                          </p>
                          <p>Color: {cart_item.product_color1}</p>
                          <p>Size: {cart_item.product_size}</p>
                          <br></br>
                          <button
                            className="btn btn-danger mx-2"
                            onClick={() =>
                              handleRemoveFromCart(cart_item.product_id)
                            }
                          >
                            <BsTrash3 />
                          </button>
                          <button className="btn btn-secondary">
                            {" "}
                            <AiOutlineHeart />
                          </button>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              className="btn btn-primary px-3 me-2"
                              onClick={() => DeleteQty(cart_item.product_id)}
                            >
                              <i className="minus"> - </i>
                            </button>
                            <div
                              className="form-control text-center"
                              placeholder="Quantity"
                            >
                              {cart_item.quantity}
                            </div>
                            <button
                              className="btn btn-primary px-3 ms-2 "
                              onClick={() => handleAddQty(cart_item.product_id)}
                            >
                              <i className="plus"> + </i>
                            </button>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>
                              {cart_item.quantity} * {cart_item.product_price}
                            </strong>
                          </p>
                        </div>
                        <hr className="my-2" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>

              {/* wistlist */}
              {wishListData?.length > 0 ? (
                <div className="row mt-4">
                  <div className="card">
                    <div className="card-header py-2 rounded-pill">
                      <h5 className="mb-0">WishList Items</h5>
                    </div>
                    <div className="d-flex scrollable-content gap-3  my-3 overflow-y-hidden">
                      <div className="card">
                        <div className="d-flex gap-3   overflow-x-auto my-1">
                          {wishListData.map((prod, index) => (
                            <div
                              key={index}
                              className="col-6 col-sm-3 py-2"
                              style={{ width: "220px" }}
                            >
                              <div className="product-card">
                                <div
                                  className="product-image"
                                  style={{ height: "250px" }}
                                >
                                  <img
                                    src={prod.product_image1}
                                    alt="Product 1"
                                    className="h-100 img-fluid"
                                  />
                                </div>

                                <div className="product-content">
                                  <h6>{prod.product_name} </h6>
                                  <h5>
                                    Price: <sup>&#x20B9;</sup>
                                    {prod.product_price}
                                    <span className="text-decoration-line-through text-muted fs-6 fw-light">
                                      599
                                    </span>
                                    <span
                                      className="text-muted"
                                      style={{
                                        fontSize: "13px",
                                      }}
                                    >
                                      {" "}
                                      {prod.product_stock}
                                    </span>
                                  </h5>
                                </div>
                                <div className="d-flex justify-content-center align-items-center ">
                                  <button
                                    className="btn btn-dark mx-2"
                                    onClick={() =>
                                      handleDeleteFromWishList(prod.product_id)
                                    }
                                  >
                                    <BsTrash3 />
                                  </button>
                                  <button className="btn btn-dark w-100 mx-2 px-5">
                                    <Link
                                      to="/checkout"
                                      style={{
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                    >
                                      {" "}
                                      Buy
                                    </Link>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header rounded-pill">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{calculateTotalPrice()} RS</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>100 RS</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <p className="mb-0">(including VAT)</p>
                      </div>
                      <span>
                        <strong>{calculateTotalPrice() + 100} RS</strong>
                      </span>
                    </li>
                  </ul>
                  {cartData.length > 0 && (
                    <Link to="/checkout">
                      <button className="btn btn-lg btn-block btn-primary">
                        Go to checkout
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              {/* div for Recomended */}
              <div className="card">
                <div className="card-header py-2 rounded-pill">
                  <h5 className="mb-0">Recommended Items</h5>
                </div>
                <div className="d-flex gap-3   overflow-x-auto my-3">
                  {products.map((prod, index) => (
                    <div
                      key={index}
                      className="d-flex  flex-column justify-content-between bg-light  shadow rounded px-4"
                      style={{ height: "430px" }}
                    >
                      <img
                        className="w-100 h-50 rounded"
                        src={prod.img}
                        alt={`Image ${prod.id}`}
                      />
                      <div className="d-flex flex-column justify-content-between p-1">
                        <div className="d-flex flex-column">
                          <h1 className="fs-4">{prod.name}</h1>
                          <p className="text-muted">{prod.description}</p>
                          <p className="text-muted">{prod.size}</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center fs-4 my-1 pb-1 mt-auto">
                          <button className="btn  btn-dark w-100">❤</button>
                          <div className="d-flex ">
                            <button className="btn btn-dark w-100 mx-2 px-5">
                              Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
