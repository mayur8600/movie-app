import { Box, Fade, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styles from './modal.module.css'
import boxStyle from '../Box/box.module.css'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import ReactPlayer from 'react-player/lazy'
import ReactCarousel from '../Carousel/Carousel';

function ModalComp({ children, media_type, id }) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`
        );
        setContent(data);
    };

    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`
        );

        setVideo(data.results[0]?.key);
    };

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, []);
    const paper = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "90%",
        height: "80%",
        backgroundColor: "#39445a",
        border: "1px solid #282c34",
        borderRadius: 10,
        color: "white",
        boxShadow: 24,
        padding: 4,
    }
    return (
        <>
            <div
                className={boxStyle.media}
                style={{ cursor: "pointer" }}
                color="inherit"
                onClick={handleOpen}
            >
                {children}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    {content && (
                        <Box sx={paper}
                        >
                            <div className={styles.closeModal} onClick={handleClose}><CloseIcon /></div>
                            <div className={styles.contentModal}>
                                <ReactPlayer controls={true} width={'40%'} height={'100%'} light={<img width={'100%'} height={'100%'}
                                    src={
                                        content.poster_path
                                            ? `https://image.tmdb.org/t/p/w500/${content.poster_path}` : ''
                                    }
                                    alt={content.name || content.title} />} url={`https://www.youtube.com/watch?v=${video}`} />
                                <div className={styles.contentModal__about}>
                                    <span className={styles.contentModal__title}>
                                        {content.name || content.title} (
                                        {(
                                            content.first_air_date ||
                                            content.release_date ||
                                            "-----"
                                        ).substring(0, 4)}
                                        )
                                    </span>
                                    {content.tagline && (
                                        <i className={styles.tagline}>{content.tagline}</i>
                                    )}

                                    <span className={styles.contentModal__description}>
                                        {content.overview}
                                    </span>

                                    <div style={{ height: "100px" }}>
                                        <ReactCarousel id={id} media_type={media_type} />
                                    </div>
                                </div>
                            </div>
                        </Box>
                    )}
                </Fade>
            </Modal>
        </>
    )
}

export default ModalComp