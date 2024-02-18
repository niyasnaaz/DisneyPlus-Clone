import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axiosInstance from '../axios.instance';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState();
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async () => {
        const { data } = await axiosInstance.get(fetchUrl);
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
    }

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 5000); // Change image every 5 seconds (adjust as needed)

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <MDBCarousel>
                <MDBCarouselItem itemId={1} interval={5000}>
                    <div className="banner-item" style={{
                        height: "700px",
                        backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        transition: 'background-image 1s ease-in-out', // Added transition
                    }}></div>
                    <MDBCarouselCaption>
                        <div className='banner-content'>
                            <h1>{movie?.title}</h1>
                            <h5>{movie?.overview}</h5>
                        </div>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    )
}

export default Banner;

