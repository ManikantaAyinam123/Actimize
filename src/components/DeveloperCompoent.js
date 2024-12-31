import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Theme from '../Theme'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, } from '@mui/material';
import { CheckBox, Toys } from '@mui/icons-material';


const checkContent = [
    "React.js Developer", "React Native Developer", "Ruby Developer",]


const DeveloperCompoent = () => {
    const [checkedItems, setCheckedItems] = useState([checkContent[0]]);

    const handleChange = (event) => {
        const { value, checked } = event.target;
        setCheckedItems((prevCheckedItems) =>
            checked
                ? [...prevCheckedItems, value]
                : prevCheckedItems.filter((item) => item !== value)
        );
    };

    const validationSchema = Yup.object({
        FullName: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters long')
            .matches(/^[A-Za-z]+$/, 'Name must contain only alphabets'),
        CompanyName: Yup.string()
            .required('Company Name is required')
            .min(3, 'Name must be at least 3 characters long')
            .matches(/^[A-Za-z]+$/, 'Name must contain only alphabets'),
        email: Yup.string()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be a valid email address')
            .required('Email is required'),
        PhoneNumber: Yup.string()
            .required('Mobile number is required')
            .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
        checkboxGroup: Yup.array()
            .min(1, 'At least one checkbox must be selected')
            .required('This field is required'),
        requirements: Yup.string()
            .required('Requirements field is required')
            .min(10, 'Requirements must be at least 10 characters long'),
    });




    const onSubmit = (values, actions) => {
        console.log("Form Values:", values);
        actions.resetForm();
    };
    const content = [
        "Access to experienced developers for specific project requirements.", "Developers skilled in the latest technologies for custom solutions.", "Flexibility to hire on a short-term or long-term basis.",
        "Developers who are a perfect fit for your business culture."
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
                <Grid item xs={12} sx={{ justifyContent: "center", marginX: "auto", border: `1px solid ${Theme.palette.background.border}`, borderRadius: 5, alignItems: "center", display: "flex" }}>
                    <Grid item sx={{ display: { xs: "block", md: "flex" }, justifyContent: { xs: "", sm: "space-between", } }} xs={12} >

                        <Grid item sx={{ textAlign: "start", alignItems: "center", marginTop: { xs: 0, sm: 6 } }} md={6} p={{ xs: 2, sm: 3 }}>
                            <Grid item sm={10} md={12} lg={10}>
                                <Typography variant='caption1' sx={{ fontSize: { xs: "20px", sm: "40px", md: "35px", lg: "40px" }, lineHeight: { xs: "38px", sm: "64px" }, }}>Hire Developers </Typography><br />
                                <Typography variant='caption1' sx={{ fontSize: { xs: "20px", sm: "40px", md: "35px", lg: "40px" }, lineHeight: { xs: "38px", sm: "64px" }, }}>Who Build Your Vision</Typography>
                            </Grid>
                            <Grid item my={{ xs: 2, sm: 3 }}>
                                <Typography variant='caption2' sx={{ color: "#6A6A6A" }}>Our expert developers are ready to join your team and bring your ideas to life. Whether you need a front-end specialist, back-end expert, full-stack developer or other roles, we’ve got the right talent to meet your unique requirements. With years of experience our developers ensure your project is in the best hands.</Typography>
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

                        <Grid item py={3} sx={{ display: { xs: "none", md: "flex" } }}>
                            <Divider orientation='vertical' sx={{ backgroundColor: Theme.palette.background.border, width: "0.5px" }}></Divider>
                        </Grid>
                        <Grid item md={6} p={3}>
                            <Grid item>
                                <Typography variant='caption1' sx={{ fontSize: { xs: "20px" }, lineHeight: "40px" }}>Connect  with Us</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='caption2' sx={{ color: Theme.palette.background.descp }}>Fill out the form, and we’ll get back to you shortly!</Typography>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            FullName: '',
                                            CompanyName: '',
                                            email: '',
                                            PhoneNumber: '',
                                            checkboxGroup: [],  
                                            requirements: '',  
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={onSubmit}
                                    >
                                        {({ errors, touched, isSubmitting }) => (
                                            <Form>
                                                <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                                                    <Grid item sx={{ display: { xs: "block", sm: "flex" } }} xs={12} gap={2}>
                                                        <Grid item sm={6}>
                                                            <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}>Full Name</Typography></Grid>
                                                            <Field
                                                                name="FullName"
                                                                as={TextField}
                                                                label="Full Name"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={touched.FullName && Boolean(errors.FullName)}
                                                                helperText={touched.FullName && errors.FullName}
                                                                sx={{
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                        "&:hover fieldset": {
                                                                            borderColor: "darkorange",
                                                                        },
                                                                        "&.Mui-focused fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                    },
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item sm={6}>
                                                            <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}>Company Name</Typography></Grid>
                                                            <Field
                                                                name="CompanyName"
                                                                as={TextField}
                                                                type="email"
                                                                label="Email"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={touched.CompanyName && Boolean(errors.CompanyName)}
                                                                helperText={touched.CompanyName && errors.CompanyName}
                                                                sx={{
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                        "&:hover fieldset": {
                                                                            borderColor: "darkorange",
                                                                        },
                                                                        "&.Mui-focused fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                    },
                                                                }}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item sx={{ display: { xs: "block", sm: "flex" } }} xs={12} gap={2}>
                                                        <Grid item sm={6}>
                                                            <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}>Work Email Address</Typography></Grid>
                                                            <Field
                                                                name="email"
                                                                as={TextField}
                                                                label="Your work email address"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={touched.email && Boolean(errors.email)}
                                                                helperText={touched.email && errors.email}
                                                                sx={{
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                        "&:hover fieldset": {
                                                                            borderColor: "darkorange",
                                                                        },
                                                                        "&.Mui-focused fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                    },
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item sm={6}>
                                                            <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}>Phone Number</Typography></Grid>
                                                            <Field
                                                                name="PhoneNumber"
                                                                as={TextField}
                                                                label="Your Phone Number"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                sx={{
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                        "&:hover fieldset": {
                                                                            borderColor: "darkorange",
                                                                        },
                                                                        "&.Mui-focused fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                    },
                                                                }}
                                                                error={touched.PhoneNumber && Boolean(errors.PhoneNumber)}
                                                                helperText={touched.PhoneNumber && errors.PhoneNumber}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>

                                                        <Grid item xs={12} sx={{ display: { xs: "block", sm: "flex" } }}>
                                                            <FormControl sx={{ display: "block", flexDirection: "row", alignItems: "center", }} >
                                                                <FormLabel id="expert-radio-group-label" sx={{ marginRight: 2, color: "#363636", fontFamily: "Inter" ,}}>
                                                                    Choose your Expert
                                                                </FormLabel>
                                                                <Grid container >
                                                                    <Grid container spacing={2}>
                                                                        {checkContent.concat(checkContentTwo).map((item, index) => (
                                                                            <Grid item key={index} xs={6} sm={4}>
                                                                                <FormControlLabel
                                                                                    control={
                                                                                        <Field
                                                                                            type="checkbox"
                                                                                            name="checkboxGroup"
                                                                                            value={item}
                                                                                            as={Checkbox}
                                                                                            sx={{
                                                                                                '& .MuiSvgIcon-root': {
                                                                                                    color: Theme.palette.background.default,
                                                                                                    fontSize: "medium",
                                                                                                },
                                                                                            }}
                                                                                        />
                                                                                    }
                                                                                    label={item}
                                                                                    sx={{ fontSize: "12px", color: Theme.palette.background.descp }}
                                                                                />
                                                                            </Grid>
                                                                        ))}
                                                                    </Grid>
                                                                    {errors.checkboxGroup && touched.checkboxGroup && (
                                                                        <Typography color="error" variant="caption">
                                                                            {errors.checkboxGroup}
                                                                        </Typography>
                                                                    )}

                                                                </Grid>
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}>Your Requirements</Typography></Grid>
                                                        <Grid item xs={12}>
                                                            <Field rows={6} name="requirements"
                                                                as={TextField}
                                                                label="Write your Requirements"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                multiline
                                                                row={6}
                                                                error={touched.requirements && Boolean(errors.requirements)}
                                                                helperText={touched.requirements && errors.requirements}
                                                                sx={{
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                        "&:hover fieldset": {
                                                                            borderColor: "darkorange",
                                                                        },
                                                                        "&.Mui-focused fieldset": {
                                                                            borderColor: "#FFE4BB",
                                                                        },
                                                                    },
                                                                }} />
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item xs={12} sx={{ justifyContent: "center" }}>
                                                        <Button
                                                            type="submit"
                                                            variant="contained"
                                                            sx={{ backgroundColor: Theme.palette.background.default, borderRadius: 2, textTransform: "initial", fontFamily: "ADLaM Display" }}
                                                            fullWidth
                                                            disabled={isSubmitting}
                                                        >
                                                            Send Message
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>


                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default DeveloperCompoent