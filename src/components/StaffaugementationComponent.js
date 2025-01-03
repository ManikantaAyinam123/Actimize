import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Theme from '../Theme'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, } from '@mui/material';
import { CheckBox, Toys } from '@mui/icons-material';
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import ModalComponent from './ModalComponent';


const checkContent = [
    "React.js Developer", "React Native Developer", "Ruby Developer", "Manual QA", "UI/UX Designer", "Frontend Developers", "Backend Developers", "MERN Stack Developers", "MEAN Stack Developers", "Others"]



const StaffaugementationComponent = () => {


    const content = [
        "Augment your team with qualified experts.", "Enhance capabilities for both short-term and long-term projects.", "Access a pool of developers across various tech stacks.",
        "A cost-effective solution for scaling your team without hiring full-time employees."
    ]


    const checkContentTwo = ["Developer", "Developer", "Developer", "Developer", "Developer", "Developer", "Developer"
    ]
    return (
        <>
            <Grid
                container
                justifyContent="center"
                sx={{
                    marginX: 'auto',
                    display: 'flex',
                    // Optionally, use these to ensure alignment in both axes
                    alignItems: 'center',
                }}
            >
               

                        <Grid item sx={{ textAlign: "start", alignItems: "center", marginTop: { xs: 0, sm: 6 } }} md={12} >
                            <Grid item sm={10} md={12} lg={10}>
                                <Typography variant='caption1' sx={{ fontSize: { xs: "18px", sm: "38px", md: "30px", lg: "35px" }, lineHeight: { xs: "38px", sm: "64px" }, }}>Scale Your Team with
                                </Typography><br />
                                <Typography variant='caption1' sx={{ fontSize: { xs: "18px", sm: "38px", md: "30px", lg: "35px" }, lineHeight: { xs: "38px", sm: "64px" }, }}> Flexible Staff Augmentation</Typography>
                            </Grid>
                            <Grid item my={{ xs: 2, sm: 3 }}>
                                <Typography variant='caption2' sx={{ color: "#6A6A6A" }}>Expand your in-house team with specialized developers through our staff augmentation services. Whether you need to ramp up quickly for a large project or fill skill gaps, we provide skilled professionals that integrate smoothly into your existing workforce. This is the ideal solution for businesses seeking to remain agile while managing growth.</Typography>
                            </Grid>

                            <Grid item xs={12} mt={{ xs: 0.5, sm: 1 }}>
                                {content.map((item, index) => (
                                    <Grid item key={index} sx={{ display: "flex" }} gap={1} mb={1}>
                                        <Grid item sx={{ marginTop: 0.2 }}>
                                            <Box component='img' src="/assets/images/vector (2).png" />
                                        </Grid>
                                        <Grid item >
                                            <Typography variant='caption2' sx={{ color: Theme.palette.background.descp, }}>{item}</Typography>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>


                        </Grid>

                    </Grid>
                {/* </Grid>
            </Grid> */}
        </>
    )
}

export default StaffaugementationComponent