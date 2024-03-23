import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <>
        <Box className="footer">
            <Typography>
                © Copyright 2024 Poker Management. All right reserved.
            </Typography>
            <a href='#' target='_blank'>
                <img src='img/telegram.svg' alt='' />
            </a>
        </Box>
    </>
  )
}
