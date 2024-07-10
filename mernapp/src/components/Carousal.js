import React from 'react'

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>

                    </div>
                    <div className="carousel-item active">
                        <img src="https://static4.businessinsider.com/image/5d8ca1222e22af53447766c2-1395/screen-shot-2019-09-26-at-72719-am.png" className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/u/l/p6285-15730363025dc2a10e8b0b5.jpg?tr=tr:n-xlarge" className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/R.eaf22abd44f28f5445c81d4ed7bd1be4?rik=dbAd85udwsWZDQ&riu=http%3a%2f%2fmalizzicakes.com%2fwp-content%2fuploads%2f2017%2f01%2fwedding-cake.jpg&ehk=qAyuua8PxuyMFJ4mhVEOXjkXZotgDup7dA7kmXMfV7E%3d&risl=&pid=ImgRaw&r=0 " className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
