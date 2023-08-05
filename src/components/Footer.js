// import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const [email, setEmail] = useState({ "email": "" })

    const handleSubscribe = async (element) => {
        element.preventDefault();
        // const data = await axios.post("api/products/subscribe/", email, config);
        // console.log(data);
        const url = "http://127.0.0.1:8000/api/products/subscribe/";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": email.email
            })
        })
        const json = await response.json();
        console.log(json);
    }

    const handleEmailChange = (element) => {
        setEmail({ ...email, [element.target.name]: element.target.value })
    }

    return (
        <>
            {/* // < !--footer --> */}
            <footer className="text-center text-white mt-4" style={{ backgroundColor: "#607d8b" }}>

                <div className='d-flex justify-content-center'>
                    <form method="post" className="m-5" onSubmit={handleSubscribe} style={{ width: "25rem" }} encType="application/x-www-form-urlencoded">
                        <label className="form-label text-white" htmlFor="email">Subscribe for latest product news:</label>
                        <input type="email" name="email" id="email" value={email.email} onChange={handleEmailChange} className="form-control m-2" />

                        <button type="submit" className="btn btn-info">Subscribe</button>
                    </form>
                </div>

                <hr className="text-dark m-0 p-0" />

                <div className="container">
                    <section className="m-3">
                        <a className="btn-link btn-floating btn-lg text-white mx-3" href="#!" role="button" data-mdb-ripple-color="dark">About</a>

                        <a className="btn-link btn-floating btn-lg text-white mx-3" href="#!" role="button" data-mdb-ripple-color="dark">Contact</a>

                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>

                <hr className="text-dark m-0 p-0" />
                {/* <!-- Grid container --> */}
                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2); text-color: #e0e0e0" }}>
                    © 2023 Copyright:
                    <Link className="text-white" to="/"> Sysnit Shop</Link>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    )
}

export default Footer
