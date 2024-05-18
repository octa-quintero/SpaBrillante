import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ServiceSelection from "../ServiceSelection/serviceSelection";
import ScheduleSelection from '../ScheduleSelection/scheduleSelection';
import BookingConfirmation from "../BookingConfirmation/bookingConfirmation";
import Shifts from "../Shifts/shifts"
import NavBar from "../../components/NavBar/navbar";
import Home from "../Home/Home"
import Style from './BaseLayout.module.scss';
import logo from '../../assets/Logo.png'; 

export default function BaseLayout() {
  return (
    <Box className={Style.container}> 
        <Grid item>
          <NavBar/>
        </Grid>
        <Grid item xs={12} className={Style.main} sx={{ flexGrow: 1 }}> 
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/service-selection" element={<ServiceSelection />} />
            <Route path="/select-time/:serviceName" element={<ScheduleSelection />} />
            <Route path="/confirmar-turno/:serviceName/:date/:selectedTimeSlot" element={<BookingConfirmation />} />
            <Route path="/turnos" element={<Shifts />} />
          </Routes>
        </Grid>
        <Grid>
  <Box
    component={'footer'}
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    py={'0.5rem'}
    sx={{ opacity: 0.7, width: '100%' }}
    paddingBottom={'10px'}
  >
    <img src={logo} alt="Logo" style={{ width: '150px', maxWidth: '100%' }} />
    <p style={{ fontSize: '12px', margin: '20px 0 2px 0' }}>Octavio Quintero</p>
    <p style={{ fontSize: '10px', margin: '2px 0' }}>&copy; 2024</p>
  </Box>
</Grid>
    </Box>
  );
}
