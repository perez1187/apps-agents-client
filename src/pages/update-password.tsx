import AuthLayout from '@/component/layouts/AuthLayout'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function UpdatePassword() {
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
            <Typography className='def_p_titl'>New Password</Typography>

            <Box className="flx_log_input">
            <Typography className='def_p_forget'>Set the new password for your account so you can login and access all features.</Typography>
              <Box component="form">
                <Box className="input-box">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="user-input"
                    autoComplete="current-password"
                    placeholder="Enter new password"
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
                    placeholder="Confirm password"
                  />
                  <Box className="toggleButtonv2" onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Box>
                </Box>
              </Box>
              <Button className='def_btn'>UpdatePassword</Button>
            </Box>

          </Box>
        </Box>
      </div>
    </AuthLayout>
  )
}
