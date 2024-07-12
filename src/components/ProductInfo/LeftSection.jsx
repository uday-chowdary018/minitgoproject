import React, { useContext, useEffect, useState } from "react";
import CarouselComponent from "./CarouselComponent";
import StarRatings from "./StarRatings";
import storeIcon from "../../assets/store.svg";
import axios from "axios";
import myContext from "../context/MyContext";

function LeftSection({ productId, scrollToReviews }) {
  const [product, setProduct] = useState(null);
  const [imageIndexCounter, setImageIndexCounter] = useState(0);

  const { handleImageClick, selectedImageIndex } = useContext(myContext);

  useEffect(() => {
    axios
      .get("https://minitgo.com/api/fetch_products.php")
      .then((response) => {
        const products = response.data.data;
        const foundProduct = products.find(
          (product) => product.product_id === productId
        );
        if (foundProduct) {
          setProduct(foundProduct);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [productId]);

  return (
    <>
      {product && (
        <section className="w-100 md:w-50 d-flex flex-column gap-4  position-relative px-md-4 h-100   ">
          <div className="w-100  rounded-lg position-relative  d-flex justify-between  ">
            <div className="col-2 d-flex flex-column gap-3">
              {Array.from({ length: 5 }).map(
                (_, index) =>
                  product[`product_image${index + 1}`] && ( // Check if product image URL exists
                    <div
                      key={index}
                      className="border rounded-2"
                      style={{ height: "80px", cursor: "pointer" }}
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={product[`product_image${index + 1}`]}
                        alt={`Image ${index + 1}`}
                        style={{ width: "100%", height: "100%" }}
                        className="rounded-2"
                      />
                    </div>
                  )
              )}
            </div>
            <div className="col-10 ps-3  " style={{ height: "500px" }}>
              <CarouselComponent
                productId={productId}
                selectedImageIndex={selectedImageIndex}
              />
            </div>
          </div>
          <div className=" d-flex ">
            <div className="border rounded d-flex flex-column  w-100 px-md-4 gap-2 px-1">
              <div
                className="d-flex  flex-row justify-content-between align-items-center pt-2  "
                style={{ height: "40px" }}
              >
                <div
                  className=" d-flex align-items-center justify-content-start"
                  style={{ width: "120px" }}
                >
                  <img src={storeIcon} alt="logo" style={{ width: "35px" }} />
                  <div className="fs-6  " style={{ fontWeight: "bold" }}>
                    {product.product_brand}
                  </div>
                </div>

                <div className="d-flex  gap-1 gap-md-4 ">
                  <div
                    className="bg-body-secondary  d-flex align-items-center justify-content-center rounded py-1"
                    style={{ width: "60px", fontSize: "12px" }}
                  >
                    Shirts
                  </div>
                  <div
                    className="bg-body-secondary  d-flex align-items-center justify-content-center rounded py-1"
                    style={{ width: "60px", fontSize: "12px" }}
                  >
                    Jackets
                  </div>
                  <div
                    className="bg-body-secondary  d-flex align-items-center justify-content-center rounded py-1"
                    style={{ width: "60px", fontSize: "12px" }}
                  >
                    Hoodies
                  </div>
                </div>
              </div>

              <div
                className="d-flex justify-content-between align-items-center border-top pt-2"
                style={{ fontSize: "12px" }}
              >
                <p>100+ Positive Feedback</p>
                <p>Missing Information</p>
              </div>
            </div>
          </div>

          <div
            className="  d-flex flex-column  py-3  rounded gap-4"
            onClick={scrollToReviews}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex flex-column gap-1 border rounded px-4 pt-3 ">
              <h2 className=" fs-4 text-start mt-1">Ratings & Reviews</h2>
              <div className="d-flex fl ">
                <div className="w-50 d-flex flex-column  gap-2 ">
                  <span className="fs-1">{product.product_ratings}</span>
                  <StarRatings rating={product.product_ratings} />
                  <span style={{ fontSize: "14px" }}>40 Ratings</span>
                </div>

                <div className="w-50  py-2">
                  <ul className="list-unstyled   h-100  d-flex flex-column gap-1">
                    <li className="d-flex gap-1">
                      <span>5</span>
                      <div className=" w-100 d-flex justify-content-center align-items-center pl-1">
                        <div className=" w-100 bg-body-secondary">
                          <div
                            className="border bg-black w-75"
                            style={{ padding: "1px" }}
                          ></div>
                        </div>
                      </div>
                    </li>

                    <li className="d-flex gap-1">
                      <span>4</span>
                      <div className=" w-100 d-flex justify-content-center align-items-center pl-1">
                        <div className=" w-100 bg-body-secondary">
                          <div
                            className="border bg-black w-50"
                            style={{ padding: "1px" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex gap-1">
                      <span>3</span>
                      <div className=" w-100 d-flex justify-content-center align-items-center pl-1">
                        <div className=" w-100 bg-body-secondary">
                          <div
                            className="border bg-black w-50"
                            style={{ padding: "1px" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex gap-1">
                      <span>2</span>
                      <div className=" w-100 d-flex justify-content-center align-items-center pl-1">
                        <div className=" w-100 bg-body-secondary">
                          <div
                            className="border bg-black w-75"
                            style={{ padding: "1px" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex gap-1">
                      <span>1</span>
                      <div className=" w-100 d-flex justify-content-center align-items-center pl-1">
                        <div className=" w-100 bg-body-secondary">
                          <div
                            className="border bg-black w-25"
                            style={{ padding: "1px" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default LeftSection;
