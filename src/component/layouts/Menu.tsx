import React from 'react'
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
    const router = useRouter()
  return (
    <>
    <Box className='draw_link'>
      <Box className='agent_arow'>
        <Typography>Agent</Typography>
        <KeyboardArrowDownIcon />
      </Box>
      <ul className='draw_ul'>
        <li className={router.pathname == '/' ? 'active' : ''}>
          <Link href="/">Summary</Link>
        </li>
        <li className={router.pathname == '/reports-agents' ? 'active' : ''}>
          <Link href="/reports-agents">Reports</Link>
        </li>
        <li className={router.pathname == '/deals-agents' ? 'active' : ''}>
          <Link href="/deals-agents">Deals</Link>
        </li>
        <li className={router.pathname == '/player-results' ? 'active' : ''}>
          <Link href="/player-results">Player Results</Link>
        </li>
        <li className={router.pathname == '/settlements' ? 'active' : ''}>
          <Link href="/settlements">Settlements</Link>
        </li>
        <li className={router.pathname == '/settings' ? 'active' : ''}>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
      <Box className='agent_arow'>
        <Typography>Players</Typography>
        <KeyboardArrowDownIcon />
      </Box>
      <ul className='draw_ul'>
        <li>
          <Link href="">Summary</Link>
        </li>
        <li>
          <Link href="">Deals</Link>
        </li>
        <li>
          <Link href="">Player Results</Link>
        </li>
        <li>
          <Link href="">Settlements</Link>
        </li>
        <li>
          <Link href="">Settings</Link>
        </li>
      </ul>
      <Box className='agent_arow'>
        <Typography>Player</Typography>
        <KeyboardArrowDownIcon />
      </Box>
      <ul className='draw_ul'>
        <li>
          <Link href="">Summary</Link>
        </li>
        <li>
          <Link href="">Deals</Link>
        </li>
        <li>
          <Link href="">Player Results</Link>
        </li>
        <li>
          <Link href="">Settlements</Link>
        </li>
        <li>
          <Link href="">Settings</Link>
        </li>
      </ul>
      {/* <Link href="/" className='agent_arow agent_arow_v2'>
        <Typography>Pricing</Typography>
        <KeyboardArrowDownIcon />
      </Link> */}
    </Box>
    </>
  )
}
