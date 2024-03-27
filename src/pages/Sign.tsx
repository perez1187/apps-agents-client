import AuthLayout from '@/component/layouts/AuthLayout'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Sign() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <AuthLayout>
      <div>
        <Box className="sign">
          <Box className="sign_min">
            <Typography component={"h2"} className='def_h2_hd'>LOGO HERE</Typography>
            <Typography className='def_p_titl'>Sign in to Application</Typography>

            <Box className="flx_log_input">
              <Box component="form">
                <Box className="input-box">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="Email"
                    autoFocus
                    className="user-input"
                  />
                </Box>
                <Box className="input-box">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="user-input"
                    autoComplete="current-password"
                    placeholder="Password"
                  />
                  <Box className="toggleButtonv2" onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Box>
                </Box>
                <Box className="input-box">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="user-input"
                    autoComplete="current-password"
                    placeholder="Confirm Password"
                  />
                  <Box className="toggleButtonv2" onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Box>
                </Box>
              </Box>
              <Button className='def_btn'>Login</Button>
            </Box>

          </Box>
        </Box>
      </div>
    </AuthLayout>
  )
}
