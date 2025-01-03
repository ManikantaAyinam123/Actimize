import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Select, Typography } from '@mui/material'
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
    const [modal, setModal] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState({
        code: "IN",
        phone: "+91",
    });

    const countries = [
        { code: "US", name: "United States", phone: "+1" },
        { code: "CA", name: "Canada", phone: "+1" },
        { code: "GB", name: "United Kingdom", phone: "+44" },
        { code: "IN", name: "India", phone: "+91" },
        // Add more countries here
    ];

    const handleChange = (event) => {
        const { value, checked } = event.target;
        setCheckedItems((prevCheckedItems) =>
            checked
                ? [...prevCheckedItems, value]
                : prevCheckedItems.filter((item) => item !== value)
        );
    };
    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption.value);
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
       
        const fullPhoneNumber = `${selectedCountry.phone}${values.PhoneNumber}`;
  const dataToSubmit = {
    ...values,
    PhoneNumber: fullPhoneNumber, 
  };
  console.log("Form Values:", dataToSubmit);
        actions.resetForm();
        const service_id = 'service_nnu1lu4'
        const template_id = 'template_p2n7w53'
        const user_id = 'H9mKbRUHuFIU-z7Bh'
        const template_params = {
            from_name: values.FullName,
            from_companyName: values.CompanyName,
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
         
                        <Grid item sx={{ textAlign: "start", alignItems: "center", marginTop: { xs: 0, sm: 5 } }} md={12} >
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

                     
        
        </>
    )
}

export default DeveloperCompoent