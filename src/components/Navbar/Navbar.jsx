import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react'
import RecommendIcon from '@mui/icons-material/Recommend';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import styles from './navbar.module.css'

function Navbar() {
    const [value, setValue] = useState(0);
    return (
        <div className={styles.navbar}>
            <BottomNavigation
                sx={{ bgcolor: "LightCyan" }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Recommend" icon={<RecommendIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default Navbar