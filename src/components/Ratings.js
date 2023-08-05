import React from 'react'

const Ratings = ({ rating, numReviews }) => {
    return (
        <div>
            {rating < 1 ? rating > 0 ? <span className="fa fas fa-star-half-alt half-star-fontawesome"></span> :
                <span className="fa fa-star unchecked"></span> :
                <span className="fa fa-star checked"></span>}

            {rating < 2 ? rating > 1 ? <span className="fa fas fa-star-half-alt half-star-fontawesome"></span> :
                <span className="fa fa-star unchecked"></span> :
                ""}
            {rating >= 2 && <span className="fa fa-star checked"></span>}

            {rating < 3 ? rating > 2 ? <span className="fa fas fa-star-half-alt half-star-fontawesome"></span> :
                <span className="fa fa-star unchecked"></span> :
                ""}
            {rating >= 3 && <span className="fa fa-star checked"></span>}

            {rating < 4 ? rating > 3 ? <span className="fa fas fa-star-half-alt half-star-fontawesome"></span> :
                <span className="fa fa-star unchecked"></span> :
                ""}
            {rating >= 4 && <span className="fa fa-star checked"></span>}

            {rating < 5 ? rating > 4 ? <span className="fa fas fa-star-half-alt half-star-fontawesome"></span> :
                <span className="fa fa-star unchecked"></span> :
                <span className="fa fa-star checked"></span>}
            <small> {numReviews} reviews</small>
        </div>
    )
}

export default Ratings