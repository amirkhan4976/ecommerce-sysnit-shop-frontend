import React from 'react'
import { Link } from 'react-router-dom'
import Ratings from './Ratings';

const ProductCard = (props) => {
    const { product } = props;
    return (
        <div className="col-md-4 my-3 col-sm-12 col-lg-3" >
            <div className="card" style={{ width: "100%" }}>
                <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                >
                    <Link to={`/product/${product._id}/`}>
                        <img
                            src={product.image}
                            className="img-fluid"
                            alt="Product Thumbnail"
                        />
                    </Link>

                    <Link to={`/product/${product._id}/`}>
                        <div
                            className="mask"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                    </Link>
                </div>
                <div className="card-body">
                    <div>
                        <Link to={`/product/${product._id}/`}>
                            <span className="card-title"> {product.name}</span>
                        </Link>
                    </div>
                    <Ratings rating={product.rating} numReviews={product.numReviews} />
                    {/* <div>
                        <small>{product.numReviews} reviews</small>
                    </div> */}
                    <div>
                        <p>₹{product.price}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductCard