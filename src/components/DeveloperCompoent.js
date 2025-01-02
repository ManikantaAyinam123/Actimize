import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Theme from '../Theme'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, } from '@mui/material';
import Flag from 'react-world-flags';
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import ModalComponent from './ModalComponent';


const checkContent = [
    "React.js Developer", "React Native Developer", "Ruby Developer", "Manual QA", "UI/UX Designer", "Frontend Developers", "Backend Developers", "MERN Stack Developers", "MEAN Stack Developers", "Others"]


const DeveloperCompoent = () => {
    const [checkedItems, setCheckedItems] = useState([checkContent[0]]);
    const [modal,setModal] = useState(false)

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
            .matches(/^[A-Za-z\s]+$/, 'Name must contain only alphabets'),
        CompanyName: Yup.string()
            .required('Company Name is required')
            .min(3, 'Name must be at least 3 characters long')
            .matches(/^[A-Za-z\s]+$/, 'Name must contain only alphabets '),
        email: Yup.string()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be a valid email address')
            .required('Email is required'),
        PhoneNumber: Yup.string()
            .required('Mobile number is required')
            .matches(/^[9876][0-9]{9}$/, 'Mobile number must be exactly 10 digits and start with 9, 8, 7, or 6'),

        checkboxGroup: Yup.array()
            .min(1, 'Please select at least one role')
            .required('This field is required'),
        requirements: Yup.string()
            .required('Requirements field is required')
            .min(10, 'Requirements must be at least 10 characters long'),
    });




    const onSubmit = (values, actions) => {
        console.log("Form Values:", values);
        actions.resetForm();
        const service_id = 'service_nnu1lu4'
        const template_id = 'template_p2n7w53'
        const user_id = 'H9mKbRUHuFIU-z7Bh'
        const template_params = {
            from_name: values.FullName,
            from_companyName: values.CompanyName ,
            from_email: values.email,
            from_number: values.PhoneNumber,
            message: values.requirements,
            from_Expert: values.checkboxGroup,
            to_name: "Actimize"
        }
        emailjs.send(service_id, template_id, template_params, user_id)
            .then((response) => {
                console.log("Email sent successfully", response)
                setModal(true)
                toast.success("Your request sent successfully!");
            })
            .catch((error) => {
                console.log("error sending Email", error)
                toast.error("Error sending request. Please try again.");
            })
 
    

    };
    const content = [
        "Access to experienced developers for specific project requirements.", "Developers skilled in the latest technologies for custom solutions.", "Flexibility to hire on a short-term or long-term basis.",
        "Developers who are a perfect fit for your business culture."
    ]


    return (
        <>
            <Grid
                container
                justifyContent="center"
                sx={{
                    marginX: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    
                }}
            >
                <Grid item xs={12} sx={{ justifyContent: "center", marginX: "auto", border: `2px solid ${Theme.palette.background.border}`, borderRadius: 5, alignItems: "center", display: "flex" }}>
                    <Grid item sx={{ display: { xs: "block", md: "flex" }, justifyContent: { xs: "", sm: "space-between", } }} xs={12} >

                       <Grid item sx={{ textAlign: "start", alignItems: "center", marginTop: { xs: 0, sm: 5 } }} md={6} p={{ xs: 2, sm: 5 }}>
                            <Grid item sm={10} md={12} lg={10}>
                                <Typography variant='caption1' sx={{ fontSize: { xs: "20px", sm: "40px", md: "35px", lg: "40px" }, lineHeight: { xs: "38px", sm: "64px" }, }}>Hire Developers </Typography><br />
                                <Typography variant='caption1' sx={{ fontSize: { xs: "20px", sm: "40px", md: "35px", lg: "40px" }, lineHeight: { xs: "38px", sm: "64px" }, }}>Who Built Your Vision</Typography>
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
                      
                        <Grid item md={6} p={{ xs: 2, sm: 5 }}>
                        {modal ?  <ModalComponent/>:
                           
                           <><Grid item>
                                <Typography variant='caption1' sx={{ fontSize: { xs: "30px" }, lineHeight: "40px" }}>Connect  with Us</Typography>
                            </Grid>
                            <Grid item my={1}>
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
                                                        <Grid item sm={6} >
                                                            <Grid item mb={0.5}><Typography variant='caption3' sx={{ color: "#363636" }}>Full Name</Typography></Grid>
                                                            <Field
                                                                name="FullName"
                                                                as={TextField}
                                                                placeholder="Full Name"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={touched.FullName && Boolean(errors.FullName)}
                                                                helperText={touched.FullName && errors.FullName}
                                                                sx={{
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "#FFE4BB", // Default border color
                                                                        },
                                                                        "&:hover fieldset": {
                                                                            borderColor: "darkorange", // Border color on hover
                                                                        },
                                                                        "&.Mui-focused fieldset": {
                                                                            borderColor: "#FFE4BB", // Border color when focused
                                                                        },
                                                                    },
                                                                }}
                                                            />

                                                        </Grid>
                                                        <Grid item sm={6}>
                                                            <Grid item mb={0.5}><Typography variant='caption3' sx={{ color: "#363636" }}>Company Name</Typography></Grid>
                                                            <Field
                                                                name="CompanyName"
                                                                as={TextField}

                                                                placeholder="Company Name"
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
                                                            <Grid item mb={0.5}><Typography variant='caption3' sx={{ color: "#363636" }}>Work Email Address</Typography></Grid>
                                                            <Field
                                                                name="email"
                                                                as={TextField}
                                                                placeholder="Your work email address"
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
                                                            <Grid item mb={0.5}><Typography variant='caption3' sx={{ color: "#363636", fontFamily: "Inter" }}>Phone Number</Typography></Grid>
                                                            <Field
                                                                name="PhoneNumber"
                                                                as={TextField}
                                                                placeholder="Your Phone Number"
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

                                                                        height: "40px",
                                                                        padding: "0 14px",
                                                                    },
                                                                    "& .MuiInputBase-input": {
                                                                        height: "1.6em",
                                                                        padding: "10px 14px"
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
                                                                <FormLabel id="expert-radio-group-label" sx={{ color: "#363636", fontFamily: "Inter", }}>
                                                                    Choose your Expert
                                                                </FormLabel>
                                                                <Grid container >
                                                                    <Grid container >
                                                                        {checkContent.map((item, index) => (
                                                                            <Grid item key={index} xs={12} sm={6} md={12} lg={6}sx={{}}>
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
                                                                                    labelPlacement="end"
                                                                                    sx={{
                                                                                        '& .MuiFormControlLabel-label': {
                                                                                            fontSize: '14px',
                                                                                            color: Theme.palette.background.descp,
                                                                                        },
                                                                                    }}
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
                                                        <Grid item mb={0.5}><Typography variant='caption3' sx={{ color: "#363636" }}>Your Requirements</Typography></Grid>
                                                        <Grid item xs={12}>
                                                            <Field rows={6} name="requirements"
                                                                as={TextField}
                                                                placeholder="Write your requirements here...."
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
                            </>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default DeveloperCompoent