import AuthLayout from '@/component/layouts/AuthLayout'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ForgotPassword() {
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
            <Typography className='def_p_titl'>Forgot Password</Typography>           

            <Box className="flx_log_input">
            <Typography className='def_p_forget'>Enter your email for the verification proccess,we will send
              4 digits code to your email.</Typography>
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
              </Box>
              <Button className='def_btn'>Continue</Button>
            </Box>

          </Box>
        </Box>
      </div>
    </AuthLayout>
  )
}
