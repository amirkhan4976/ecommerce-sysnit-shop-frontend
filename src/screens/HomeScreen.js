import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import couroselImage1 from "../Images/couroselImage1.jpg"
import couroselImage2 from "../Images/couroselImage2.jpg"
import couroselImage3 from "../Images/couroselImage3.jpg"

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    async function fetchProducts() {
        const { data } = await axios.get("/api/products/");
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            {/* <!-- Carousel wrapper --> */}
            <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active">
                        <img src={couroselImage1} className="d-block w-100" alt="Sunset Over the City" />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item">
                        <img src={couroselImage2} className="d-block w-100" alt="Canyon at Nigh" />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item">
                        <img src={couroselImage3} className="d-block w-100" alt="Cliff Above a Stormy Sea" />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container'>
                <div className="row mt-5 mb-4">
                    {products.map((product) => {
                        return <ProductCard key={product._id} product={product} />
                    })}
                </div>
            </div>

        </>
    )
}

export default HomeScreen