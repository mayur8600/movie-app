import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from './corousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ReactCarousel(props) {
    const [castData, setCastData] = useState([])
    const fetchCredits = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${props.media_type}/${props.id}/credits?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`
        );
        setCastData(data.cast);
    };
    useEffect(() => {
        fetchCredits();
    }, []);
    return (
        <Carousel showThumbs={false}
            autoPlay={true}
            showStatus={false}
            infiniteLoop={true}
            swipeable={false}
            useKeyboardArrows
            transitionTime={500}
            centerSlidePercentage={20}
            centerMode={true}
            interval={2000}>
            {
                castData.map((cast) => {
                    return (
                        <div key={cast.id} className={styles.styles}>
                            <img width={'100px'} height={'100px'}
                                src={
                                    cast?.profile_path ? `https://image.tmdb.org/t/p/w300/${cast?.profile_path}` : ''
                                }
                                alt={"cast"} />
                        </div>
                    )

                })
            }
        </Carousel>
    )
}

export default ReactCarousel