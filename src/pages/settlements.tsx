import React, { Component, useState } from 'react';
import Head from "next/head";
import Layout from "@/component/layouts/Layout";
import { Box, Button, Grid, Modal } from "@mui/material";
import Typography from '@mui/material/Typography';
import moment from 'moment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import SettlementsTabal from '@/component/Settlements/SettlementsTabal';



export default function Settlements() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  //datepicker
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const range = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
    'Last Year': [
      moment().subtract(1, 'year').startOf('year'),
      moment().subtract(1, 'year').endOf('year'),
    ],
  };

  const handleEvent = (event: any, picker: any) => {
    setFromDate(picker.startDate._d.toISOString());
    setToDate(picker.endDate._d.toISOString());
  };

  //pop//
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Box>
            <Box className="tabl_p_btn_v2">
              <Typography className="def_had_txt">Settlements</Typography>
              <Button onClick={handleClickOpen}>Add Aettlement</Button>
            </Box>
            <SettlementsTabal />
          </Box>
        </div>
      </Layout>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='def_modal dilog settlements_modl'
      >
        <Box>
          <Box className="sign">
            <Box className="sign_min">
              <Typography component={"h2"} className='def_h2_hd mrg_colr'>Add Settlements</Typography>
              <Box className="flx_log_input">
                <Box component="form">
                  <Box className="date_min_prnt">
                    <DateRangePicker
                      ranges={range}
                      alwaysShowCalendars={true}
                      onEvent={handleEvent}
                    >
                      <button className='def_date_pickr'>
                        {moment(fromDate).format('LL')}
                        &nbsp; - &nbsp;
                        {moment(toDate).format('LL')}
                        <KeyboardArrowDownIcon />
                      </button>
                    </DateRangePicker>
                    <Box className='selct_minbx mrg_sp'>
                      <FormControl className='def_selct'>
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                          className='selct'
                        >
                          <MenuItem value="">
                            None
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box className="input-box">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      autoComplete="username"
                      placeholder="Amount"
                      autoFocus
                      className="user-input"
                    />
                  </Box>

                  <textarea id="story" name="story" placeholder='Description' className='textarea_def'>
                  </textarea>
                </Box>
                <Button className='def_btn'>Add settlement</Button>
              </Box>

            </Box>
          </Box>
        </Box>
      </Dialog>



    </>
  );
}
