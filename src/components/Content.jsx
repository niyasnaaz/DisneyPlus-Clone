import React from 'react'
import './Content.css'

function Content() {
    return (
        <div className="container">
            <div className="row">
            <h3 className='text-center mb-4 ms-3 text-light fw-bold'>CATEGORIES</h3>
                <div className="col" id="disney">
                    <img  src="https://beforeifly.com/new/wp-content/uploads/2016/09/logo-disney-white.png" style={{ width: "130px" }} alt="" />
                </div>
                <div className="col" id="pixar">
                    <img src="https://quiin.s3.us-east-1.amazonaws.com/vendors/logos/000/249/386/original/Pixar_Brand_Logo_Black-01.png?1605162958" style={{ width: "140px", height: "70%", marginTop: "15px" }} alt="" />
                </div>
                <div className="col" id="marvel">
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2000-2012.png" style={{ width: "120px", height: "60px" }} alt="" />
                </div>
                <div className="col" id="spiderman">
                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsspider-man_lob_log_02_paddingsizeddown_1.png" style={{ width: "145px", height: "55px" }} alt="" />
                </div>
                <div className="col" id="starwars">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/star-wars-stacked-white-logo-800x385_0451f886.png?region=0,0,800,385" style={{ width: "120px" }} alt="" />
                </div>
                <div className="col" id="hotstar">
                    <img src="https://campaigns.hotstar.com/test-directory/disney-hotstar-logo.png" style={{ width: "100%" }} alt="" />
                </div>
            </div>
            <div className="category">
                <div className="row">
                <h4 className='ms-2 text-light fw-bold'>Popular Languages</h4>
                <a href="" className='text-end text-secondary fs-5 mb-2 ms-2 fw-bold'>View All &#62;</a>
                    <div className="col" id='col-1'>
                    </div>
                    <div className="col" id='col-2'>
                    </div>
                    <div className="col" id='col-3'>
                    </div>
                    <div className="col" id='col-4'>
                    </div>
                    <div className="col" id='col-5'>
                    </div>
                    <div className="col" id='col-6'>
                    </div>

                </div>
            </div>
            <div className="PopularChannels">
                <div className="row">
                <h4 className='ms-2 text-light fw-bold'>Popular Channels</h4>
                <a href="" className='text-end text-secondary fs-5 mb-2 ms-2 fw-bold'>View All &#62;</a>
                    <div className="col" id='col-1'>
                    </div>
                    <div className="col" id='col-2'>
                    </div>
                    <div className="col" id='col-3'>
                    </div>
                    <div className="col" id='col-4'>
                    </div>
                    <div className="col" id='col-5'>
                    </div>
                    <div className="col" id='col-6'>
                    </div>

                </div>
            </div>
            <div className="PopularGenres">
                <div className="row">
                <h4 className='ms-2 text-light fw-bold'>Popular Genres</h4>
                <a href="" className='text-end text-secondary fs-5 mb-2 ms-2 fw-bold'>View All &#62;</a>
                    <div className="col" id='col-1'>
                    </div>
                    <div className="col" id='col-2'>
                    </div>
                    <div className="col" id='col-3'>
                    </div>
                    <div className="col" id='col-4'>
                    </div>
                    <div className="col" id='col-5'>
                    </div>
                    <div className="col" id='col-6'>
                    </div>

                </div>
            </div>
            <div className="PopularSports">
                <div className="row">
                <h4 className='ms-2 text-light fw-bold'>Popular Sports</h4>
                <a href="" className='text-end text-secondary fs-5 mb-2 ms-2 fw-bold'>View All &#62;</a>
                    <div className="col" id='col-1'>
                    </div>
                    <div className="col" id='col-2'>
                    </div>
                    <div className="col" id='col-3'>
                    </div>
                    <div className="col" id='col-4'>
                    </div>
                    <div className="col" id='col-5'>
                    </div>
                    <div className="col" id='col-6'>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Content