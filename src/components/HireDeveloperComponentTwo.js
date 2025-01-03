
import { NavLink, Outlet } from 'react-router-dom';
import Theme from '../Theme';
import { useEffect, useState } from 'react';
import StaffaugementationComponent from './StaffaugementationComponent';
import DeveloperCompoent from './DeveloperCompoent';
import { styled } from "@mui/system";
import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Typography } from '@mui/material'
import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, } from '@mui/material';
import Flag from 'react-world-flags';
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import ModalComponent from './ModalComponent';
import Select from 'react-select';



const checkContent = [
  "React.js Developer", "React Native Developer", "Ruby Developer", "Manual QA", "UI/UX Designer", "Frontend Developers", "Backend Developers", "MERN Stack Developers", "MEAN Stack Developers", "Others"]


const HireDeveloperComponentTwo = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [developer, setDeveloper] = useState(false)
  const [staff, setStaff] = useState(false)
  const [checkedItems, setCheckedItems] = useState([checkContent[0]]);
  const [modal, setModal] = useState(false)
  const [develop, setDevelop] = useState(true)
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
  const StyledNavLink = styled(NavLink)(({ theme, active, index }) => ({
    textDecoration: "none",
    display: "inline-block",
    border: "2px solid #FFE4BB",
    borderRadius: "15px 15px 2px 2px",
    borderBottom: "none",
    color: active ? theme.palette.background.default : "black",
    backgroundColor: active ? "white" : theme.palette.background.bg,
    textAlign: "center",
    alignItems: "center",
    cursor: "pointer",
    padding: theme.breakpoints.down("xs") ? "4px 8px" : "8px 16px",
    paddingTop: theme.breakpoints.down("xs") ? "7px" : "10px",
    paddingBottom: theme.breakpoints.down("xs") ? "7px" : "10px",
    position: "absolute",
    zIndex: 500,


  }));


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
      from_name: dataToSubmit.FullName,
      from_companyName: dataToSubmit.CompanyName,
      from_email: dataToSubmit.email,
      from_number: dataToSubmit.PhoneNumber,
      message: dataToSubmit.requirements,
      from_Expert: dataToSubmit.checkboxGroup,
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
  useEffect(() => {
    handleFunction()
  })

  const links = [
    { name: "Hire a Developer", },
    { name: "Staff Augmentation" },
  ];
  const handleFunction = () => {
    if (activeLink === 0) {
      setDeveloper(true)
      setStaff(false)
    }
    else {
      setStaff(true)
      setDeveloper(false)
    }
  }


  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',


      }}
    >
      <Box
        component="img"
        src="../assets/images/orange2.svg"
        alt="Top Left SVG"
        sx={{
          position: 'absolute',
          top: '-150px',
          left: '-180px',
          width: '500px',
          height: '500px',
          zIndex: -5,
        }}
      />
      <Box
        component="img"
        src="../assets/images/orange.svg"
        alt="Top Left SVG"
        sx={{
          position: 'absolute',
          top: '350px',
          right: '0px',
          width: 'auto',
          height: '800px',
          zIndex: -1,

        }}
      />
      <Grid container justifyContent="center" sx={{ width: '90%' }}>
        <Grid item xs={12} mt={12} sx={{ justifyContent: "center", }}>
          <Grid item justifyContent={{ xs: "center", sm: "start" }} display="flex" spacing={0} xs={11} sm={11} md={11.5} sx={{ marginX: "auto" }}>
            {links.map((link, index) => (
              <Grid item key={index}>
                <StyledNavLink
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(index);
                  }}
                  active={activeLink === index}
                  sx={{
                    position: "absolute",
                    transition: "all 0.3s ease",
                    top: index === 0
                      ? (activeLink ? { xs: 58, sm: 59, md: 59, lg: 59, xl: 58 } : { xs: 61, sm: 61, md: 60, lg: 60, xl: 62 })
                      : index === 1
                        ? (activeLink ? { xs: 61, sm: 61, md: 60, lg: 62 } : { xs: 58, sm: 59, md: 59, lg: 59, xl: 58 })
                        : "",
                    left: index === 0
                      ? (activeLink ? { xs: 35, sm: 70, md: 90, lg: 120, xl: 170 } : { xs: 35, sm: 70, md: 90, lg: 120, xl: 170 })
                      : index === 1
                        ? (activeLink ? { xs: 152, sm: 275, md: 297, lg: 310, xl: 360 } : { xs: 152, sm: 275, md: 297, lg: 310, xl: 360 })
                        : "",
                    zIndex: 500,
                  }}
                >
                  <Typography
                    variant="caption1"
                    sx={{
                      fontSize: { xs: "12px", sm: "16px", lg: "14px" },
                      paddingX: {
                        xs: "2px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                        xl: "30px",
                      },
                      zIndex: 20,
                    }}
                  >
                    {link.name}
                  </Typography>
                </StyledNavLink>



              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{
            marginX: 'auto',
            display: 'flex',
            alignItems: 'center',

          }}
        >
          <Grid item xs={12} sx={{ justifyContent: "center", marginX: "auto", border: `2px solid ${Theme.palette.background.border}`, borderRadius: 5, alignItems: "center", display: "flex", backgroundColor: '#FFFFFF', position: "relative", zIndex: 50 }}>
            <Grid item sx={{ display: { xs: "block", md: "flex" }, justifyContent: { xs: "", sm: "space-between", } }} xs={12} >
              <Grid item md={6} p={{ xs: 2, sm: 5, }}>
                {developer && <DeveloperCompoent />}
                {staff && <StaffaugementationComponent />}
              </Grid>
              <Grid item py={3} sx={{ display: { xs: "none", md: "flex" } }}>
                <Divider orientation='vertical' sx={{ backgroundColor: Theme.palette.background.border, width: "0.5px" }}></Divider>
              </Grid>
              <Grid item md={6} p={{ xs: 2, sm: 5 }} sx={{ overflow: "visible" }}>
                {modal ? <ModalComponent /> :

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
                                  <Grid item sm={6} sx={{ overflow: "visible" }}>
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
                                            <Grid item key={index} xs={12} sm={6} md={12} lg={6} sx={{}}>
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
      </Grid>
    </Box>

  );
};


export default HireDeveloperComponentTwo;
