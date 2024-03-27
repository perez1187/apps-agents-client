import AuthLayout from '@/component/layouts/AuthLayout'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Verification() {
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
            <Typography className='def_p_titl'>Verification</Typography>

            <Box className="flx_log_input">
              <Typography className='def_p_forget'>Enter your 4 digits code that you received on your email.</Typography>
              <Box className="verification_input">
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
              </Box>
              <Button className='def_btn def_btn_v2'>Continue</Button>
              <Typography className='def_p_forget def_p_forget_v2'>If you didn’t receive a code! <a>Resend</a></Typography>

            </Box>

          </Box>
        </Box>
      </div>
    </AuthLayout>
  )
}
