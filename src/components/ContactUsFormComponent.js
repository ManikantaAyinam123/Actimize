import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Grid, Typography, RadioGroup, Radio,InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import Theme from '../Theme'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, } from '@mui/material';
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import ModalComponent from './ModalComponent';
import Select from 'react-select';
 
const ContactUsFormComponent = () => {
    const [modalThree, setModalThree] = useState(false)
      const [selectedCountry, setSelectedCountry] = useState({
        code: "IN",
        phone: "+91",
      });
    
      const countries = [
        { code: "US", name: "United States", phone: "+1" },
        { code: "CA", name: "Canada", phone: "+1" },
        { code: "GB", name: "United Kingdom", phone: "+44" },
        { code: "IN", name: "India", phone: "+91" },
    
      ];
    const validationSchema = Yup.object({
        FullName: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters long')
            .matches(/^[A-Za-z\s]+$/, 'Name must contain only alphabets'),
        subject: Yup.string()
            .required('subject Name is required')
            .min(3, 'Name must be at least 3 characters long')
            .matches(/^[A-Za-z\s]+$/, 'Name must contain only alphabets'),
        email: Yup.string()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be a valid email address')
            .required('Email is required'),
        PhoneNumber: Yup.string()
                   .required('Mobile number is required')
                   .matches(/^[9876][0-9]{9}$/, 'Mobile number must be exactly 10 digits and start with 9, 8, 7, or 6'),
       
        radioGroup: Yup.string().required("Please select an option."),
 
        requirements: Yup.string()
            .required('Requirements field is required')
            .min(10, 'Requirements must be at least 10 characters long'),
    });
 
 
 
 
    const onSubmit = (values, actions) => {
        
        actions.resetForm();
        const fullPhoneNumber = `${selectedCountry.phone}${values.PhoneNumber}`;
        const dataToSubmit = {
            ...values,
            PhoneNumber: fullPhoneNumber,
          };
          console.log("Form Values:", dataToSubmit);
 
        const service_id = 'service_nnu1lu4'
        const template_id = 'template_p2n7w53'
        const user_id = 'H9mKbRUHuFIU-z7Bh'
        const template_params = {
            from_name: dataToSubmit.FullName,
            from_companyName: dataToSubmit.subject ,
            from_email: dataToSubmit.email,
            from_number: dataToSubmit.PhoneNumber,
            message: dataToSubmit.requirements,
            from_Expert: dataToSubmit.radioGroup,
            to_name: "Actimize"
        }
        emailjs.send(service_id, template_id, template_params, user_id)
            .then((response) => {
                console.log("Email sent successfully", response)
                setModalThree(true)
                toast.success("Your request sent successfully!");
            })
            .catch((error) => {
                console.log("error sending Email", error)
                toast.error("Error sending request. Please try again.");
            })
 
    };

 
 

    const checkContent = [
        "Hire a Developer", "Outsource Project", "Partnership", "Others"]
 
 
    return (
        <>
         <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
     
    
    
    }}
  >
            <Grid container justifyContent="center" width={'90%'}>
                <Grid item xs={12} sx={{ justifyContent: {xs:"",md:"center"}, display: {xs:"block",md:"flex"}, }}>
                    <Grid item md={6} sx={{ borderRadius: 5, backgroundColor: "white", border: `1px solid ${Theme.palette.background.border}` ,height:"auto",margin:"auto"}} p={3}>
                        {!modalThree ? <>
                        <Grid item>
                            <Typography variant='caption1' sx={{ fontSize: { xs: "20px",sm:"30px" }, lineHeight: "40px" }}>Reach Out to Us</Typography>
                        </Grid>
                            <Grid item mt={2}>
                                <Typography variant='caption2' sx={{ color: Theme.palette.background.descp ,fontSize:"20px",fontWeight:"medium"}}>We’d love to hear from you! </Typography> <Grid item mb={3}><Typography variant='caption2' sx={{ color: Theme.palette.background.descp }}>
                                    Fill out the form, and we’ll get back to you shortly!</Typography></Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Grid item xs={12} sx={{height:"auto"}}>
                                    <Formik
                                        initialValues={{
                                            FullName: '',
                                            subject: '',
                                            email: '',
                                            PhoneNumber: '',
                                            radioGroup: "",
                                            requirements: '',
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={onSubmit}
                                    >
                                        {({ errors, touched, isSubmitting }) => (
                                            <Form sx={{height:"auto"}}>
                                                <Grid container sx={{ justifyContent: "center" }}>
                                                    <Grid item sx={{ display: { xs: "block", sm: "flex" } }} xs={12} gap={2} mb={2}>
                                                        <Grid item sm={6}>
                                                            <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}>Name</Typography></Grid>
                                                            <Field
                                                                name="FullName"
                                                                as={TextField}
                                                                placeholder="Your Name"
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
                                                            <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}> Email Address</Typography></Grid>
                                                            <Field
                                                                name="email"
                                                                as={TextField}
                                                                // type="email"
                                                                placeholder="Your  email address"
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
                                                    </Grid>
                                                    <Grid item sx={{ display: { xs: "block", sm: "flex" } }} xs={12} gap={2} mb={2}>
                                                        <Grid item sm={6}>
                                                            <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}>Phone Number</Typography></Grid>
                                                            <Field
                                      name="PhoneNumber"
                                      as={TextField}
                                      placeholder="Your Phone Number"
                                      variant="outlined"
                                      fullWidth
                                      size="small"
                                      sx={{
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": { borderColor: "#FFE4BB" },
                                          "&:hover fieldset": { borderColor: "darkorange" },
                                          "&.Mui-focused fieldset": { borderColor: "#FFE4BB" },
                                          height: "40px",
                                          padding: "0 10px",
                                        },
                                        "& .MuiInputBase-input": { height: "1.6em", padding: "0px 0px", },
                                      }}
                                      InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <Select
                                              options={countries.map((country) => ({
                                                label: (
                                                  <div style={{ display: "flex", alignItems: "center" }}>
                                                    <img
                                                      src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                                      alt={country.code}
                                                      style={{ width: "20px", height: "15px", marginRight: "5px" }}
                                                    />
                                                    {country.phone}
                                                  </div>
                                                ),
                                                value: country,
                                              }))}
                                              value={{
                                                label: (
                                                  <div style={{ display: "flex", alignItems: "center" }}>
                                                    <img
                                                      src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                                                      alt={selectedCountry.code}
                                                      style={{ width: "20px", height: "15px", marginRight: "5px" }}
                                                    />
                                                    {selectedCountry.phone}
                                                  </div>
                                                ),
                                                value: selectedCountry,
                                              }}
                                              onChange={(option) => setSelectedCountry(option.value)}
                                              styles={{
                                                control: (provided) => ({
                                                  ...provided,
                                                  border: "none",
                                                  boxShadow: "none",
                                                  // padding: 0,
                                                  // paddingLeft: 0,
                                                  // paddingRight: 0,
                                                  // minHeight: "auto",
                                                  width: "90px",
                                                }),
                                                container: (provided) => ({
                                                  ...provided,
                                                  width: "100px", 
                                                  // padding: 0,
                                                  // margin: 0
                                                }),
                                                singleValue: (provided) => ({
                                                  ...provided,
                                                  color:Theme.palette.background.descp
                                                  // padding: 0,
                                                  // overflow: "visible",
                                                }),
                                                menuPortal: (provided) => ({
                                                  ...provided,
                                                  zIndex: 9999,
                                                }),
                                                menu: (provided) => ({
                                                  ...provided,
                                                  zIndex: 9999,
                                                }),
                                                dropdownIndicator: (provided) => ({
                                                  ...provided,
                                                  padding: 1,
                                                  borderRight:"1px solid lightgray",
                                                }),
                                                indicatorSeparator: (provided) => ({
                                                  ...provided,
                                                  display: 'none',
                                                }),
                                                input: (provided) => ({
                                                  ...provided,
                                                  margin: 0,
                                                  padding: "0 5px",
                                                  maxWidth: "70px",
                                                  color:Theme.palette.background.desc
                                                  // textOverflow: "ellipsis",
                                                  // overflow: "hidden",
                                                }),
                                                valueContainer: (provided) => ({
                                                  ...provided,
                                                  padding: 0,
                                                  margin: 0,
                                                }),
                                              }}
                                              menuPortalTarget={document.body}
                                            />





                                          </InputAdornment>
                                        ),
                                      }}
                                      error={touched.PhoneNumber && Boolean(errors.PhoneNumber)}
                                      helperText={touched.PhoneNumber && errors.PhoneNumber}
                                    />
                                                        </Grid>
                                                        <Grid item sm={6}>
                                                            <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}> Subject</Typography></Grid>
                                                            <Field
                                                                name="subject"
                                                                as={TextField}
                                                                placeholder="Enter the subject"
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                error={touched.subject && Boolean(errors.subject)}
                                                                helperText={touched.subject && errors.subject}
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
                                                    <Grid item xs={12}>
 
                                                        <Grid item xs={12}>
                                                            <FormControl component="fieldset">
                                                                <FormLabel
                                                                    id="expert-radio-group-label"
                                                                    sx={{
                                                                        display: 'block',
                                                                        margint: 1,
                                                                        color: '#363636',
                                                                        fontFamily: 'Inter',
                                                                    }}
                                                                >
                                                                    The Services you Seek
                                                                </FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="expert-radio-group-label"
                                                                    name="radioGroup"
                                                                    sx={{
                                                                        display: {xs:"block",sm:'flex',md:"block",lg:"flex"},
                                                                        justifyContent: {xs:"",sm:'flex-start'},
                                                                        flexWrap: 'nowrap',
                                                                        gap: 2,
                                                                    }}
                                                                >
                                                                    {checkContent.map((item, index) => (
                                                                        <FormControlLabel
                                                                            key={index}
                                                                            value={item}
                                                                            control={
                                                                                <Field
                                                                                    type="radio"
                                                                                    name="radioGroup"
                                                                                    value={item}
                                                                                    as={Radio}
                                                                                    sx={{
                                                                                        '& .MuiSvgIcon-root': {
                                                                                            color: Theme.palette.background.default,
                                                                                            fontSize: 'medium',
                                                                                        },
                                                                                    }}
                                                                                />
                                                                            }
                                                                            label={item}
                                                                            sx={{
                                                                                fontSize: '12px',
                                                                                color: Theme.palette.background.descp,
                                                                            }}
                                                                        />
                                                                    ))}
                                                                </RadioGroup>
                                                                {errors.radioGroup && touched.radioGroup && (
                                                                    <Typography color="error" variant="caption" sx={{ marginTop: 1 }}>
                                                                        {errors.radioGroup}
                                                                    </Typography>
                                                                )}
                                                            </FormControl>
                                                        </Grid>
 
 
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid item><Typography variant='caption2' sx={{ color: "#363636" }}>Message</Typography></Grid>
                                                        <Grid item xs={12}>
                                                            <Field rows={5} name="requirements"
                                                                as={TextField}
                                                                placeholder="Write your Message here..."
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
 
                                                    <Grid item xs={12} sx={{ justifyContent: "center" ,}} mb={0} mt={2}>
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
                            </Grid> </> :
                        <ModalComponent/>}
                        </Grid>
                        <Grid item md={6}>
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 'auto',
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/assets/images/contact2.png"
                                    alt="Contact"
                                    sx={{
                                        maxWidth: '100%', // Ensures the image is responsive
                                        height: 'auto',   // Maintains the aspect ratio
                                    }}
                                />
                            </Grid>
 
                        </Grid>
                       
 
 
                    </Grid>
                </Grid>
                </Box>
            </>
            )
}
 
            export default ContactUsFormComponent