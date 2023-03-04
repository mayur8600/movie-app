import { Stack } from '@mui/material'
import React from 'react'
import Pagination from '@mui/material/Pagination';
function MaterialPagination(props) {
    const handlePageChange = (page) => {
        props.setPage(page);
        window.scroll(0, 0);
    };
    return (
        <div style={{ background: '#000', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '100px' }}>
            <Stack spacing={2}>
                <Pagination onChange={(e) => handlePageChange(e.target.textContent)} sx={{ button: { color: 'red' } }} color="secondary" count={props.totalPages} shape="rounded" />
            </Stack>
        </div>
    )
}

export default MaterialPagination