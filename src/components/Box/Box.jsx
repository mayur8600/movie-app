import { Badge } from '@mui/material'
import React from 'react'
import ModalComp from '../Modal/Modal'
import styles from './box.module.css'

function Box({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) {
  return (
    <ModalComp media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className={styles.poster}
        src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : ''}
        alt={title}
      />
      <b className={styles.title}>{title}</b>
      <span className={styles.subTitle}>
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className={styles.subTitle}>{date}</span>
      </span>
    </ModalComp>
  )
}

export default Box