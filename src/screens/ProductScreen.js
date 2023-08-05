import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Ratings from '../components/Ratings';

const ProductScreen = (props) => {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    async function fetch_product() {
        try {
            const { data } = await axios.get(`/api/products/${id}/`);
            setProduct(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetch_product();

        // eslint-disable-next-line
    }, []);

    return (
        <>
            {/* < !--Main layout-- > */}
            <main className="pt-4">
                <div className="container mt-5">
                    {/* <!--Grid row--> */}
                    <div className="row">
                        {/* <!--Grid column--> */}
                        <div className="col-md-6 mb-4">
                            <img src={product.image} className="img-fluid" alt="" />
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-md-6 mb-4">
                            {/* <!--Content--> */}
                            <div className="p-4">
                                <strong><p style={{ fontSize: "20px" }}>{product.name}</p></strong>
                                <div className="mb-3">

                                    {product.category && product.category.name ? <Link to="/">
                                        <span className="badge bg-dark me-1">{product.category.name}</span>
                                    </Link> : <span className="badge bg-dark me-1">Loading...</span>}

                                    {/* <Link to="/">
                                        <span className="badge bg-info me-1">New</span>
                                    </Link>
                                    <Link to="/">
                                        <span className="badge bg-danger me-1">Bestseller</span>
                                    </Link> */}
                                </div>

                                <p className="lead">
                                    {/* <span className="me-1">
                                        <del>$200</del>
                                    </span> */}
                                    <span>₹{product.price}</span>
                                </p>

                                <Ratings rating={product.rating} numReviews={product.numReviews} />

                                <strong><p style={{ fontSize: "20px" }}>Description</p></strong>

                                <p>{product.description}</p>

                                <form className="d-flex justify-content-left">
                                    {/* <!-- Default input --> */}
                                    <div className="form-outline me-1" style={{ width: "100px" }}>
                                        <input type="number" value="1" className="form-control" />
                                    </div>
                                    <button className="btn btn-primary ms-1" type="submit">
                                        Add to cart
                                        <i className="fas fa-shopping-cart ms-1"></i>
                                    </button>
                                </form>
                            </div>
                            {/* <!--Content--> */}
                        </div>
                        {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}

                    <hr />

                    {/* <!--Grid row--> */}
                    <div className="row d-flex justify-content-center">
                        {/* <!--Grid column--> */}
                        <div className="col-md-6 text-center">
                            <h4 className="my-4 h4">Reviews</h4>
                        </div>
                        {/* <!--Grid column--> */}
                    </div>


                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <p>Each review</p>
                        </div>
                    </div>
                </div>
            </main>
            {/* // <!--Main layout-- > */}

        </>

    )
}

export default ProductScreen