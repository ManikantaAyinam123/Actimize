import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Grid } from "@mui/material";

const features = [
    {
        image: "../assets/images/Icon5.svg", // Replace with your image URLs
        title: "Smart Code Optimization",
        description: "AI helps optimize code for better performance and efficiency.",
    },
    {
        image: "../assets/images/Icon5.svg",
        title: "Security-First",
        description: "Automated testing powered by AI reduces errors and speeds up delivery.",
    },
    {
        image: "../assets/images/Icon5.svg",
        title: "Automated Testing",
        description: "AI-driven insights help identify innovative features to enhance UX.",
    },
    {
        image: "../assets/images/Icon5.svg",
        title: "Feature Discovery",
        description: "Reducing repetitive tasks with automated solutions for faster progress.",
    },
    {
        image: "../assets/images/Icon5.svg",
        title: "Continuous Enhancements",
        description: "AI-driven insights help identify innovative features to enhance UX.",
    },
    {
        image: "../assets/images/Icon5.svg",
        title: "Scalable Solutions",
        description: "Reducing repetitive tasks with automated solutions for faster progress.",
    }, {
        image: "../assets/images/Icon5.svg",
        title: "Feature Discovery",
        description: "Reducing repetitive tasks with automated solutions for faster progress.",
    },
    {
        image: "../assets/images/Icon5.svg",
        title: "Continuous Enhancements",
        description: "AI-driven insights help identify innovative features to enhance UX.",
    },
    {
        image: "../assets/images/Icon5.svg",
        title: "Scalable Solutions",
        description: "Reducing repetitive tasks with automated solutions for faster progress.",
    },
];

export default function HomeCardsComponent5() {
    const theme = useTheme();
    return (
        <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        
        
        
        }}
      >
        <Box sx={{ textAlign: "center", mt: { xs: '70px', md: '160px' },width:'90%' }}>
            {/* Title */}
            <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '40px' }, lineHeight: { xs: '30px', md: '64px' }, color: '#363636', }}>
                Redefining Web & Mobile{" "}
                <span style={{ color: theme.palette.background.default, fontFamily: "'ADLaM Display',serif", }}>
                    Development with AI
                </span>
            </Typography>
            <Typography sx={{ mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '18px' }, lineHeight: { xs: '20px', md: '30px' }, color: '#363636', }}>
                AI plays a pivotal role in modern development, driving innovation and efficiency at every stage.
            </Typography>

            {/* Features */}
            <Grid contaier justifyContent="center" sx={{ mt: '50px', mb: '20px' }}>
                <Grid item display={"flex"} flexWrap={'wrap'} justifyContent={"space-evenly"} sx={{ mt: '20px', mb: '20px' }}>
                    <Box
                        sx={{
                            position: "relative",
                            padding: "32px",
                            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                        }}
                    >
                        {/* Image container */}
                        <Box
                            component="img"
                            src={features[0].image}
                            alt={features[0].title}
                            sx={{
                                position: "absolute",
                                top: "-24px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                objectFit: "cover",

                                padding: '5px'
                            }}
                        />
                        {/* Title */}
                        <Typography sx={{  fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                            {features[0].title}
                        </Typography>
                        {/* Description */}
                        <Typography sx={{  mx: "auto", maxWidth:'250px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
                            {features[0].description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: "relative",


                            padding: "32px",
                            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                        }}
                    >
                        {/* Image container */}
                        <Box
                            component="img"
                            src={features[0].image}
                            alt={features[0].title}
                            sx={{
                                position: "absolute",
                                top: "-24px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                objectFit: "cover",

                                padding: '5px'
                            }}
                        />
                        {/* Title */}
                        <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                            {features[1].title}
                        </Typography>
                        {/* Description */}
                        <Typography sx={{  mx: "auto",maxWidth:'280px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
                            {features[1].description}
                        </Typography>
                    </Box>
                </Grid>
                <Grid container xs={12} sx={{ mt: '20px' }}>

                    <Grid item xs={12}  md={4} lg={4}  >
                        <Box
                            sx={{
                                position: "relative",
                                padding: "32px",
                                // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                textAlign: "center",
                                // transition: "transform 0.3s ease, box-shadow 0.3s ease",

                                // "&:hover": {
                                //     transform: "translateY(-4px)",
                                //     boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                                // },
                            }}
                        >
                            {/* Image container */}
                            <Box
                                component="img"
                                src={features[0].image}
                                alt={features[0].title}
                                sx={{
                                    position: "absolute",
                                    top: "-24px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    padding: '5px'
                                }}
                            />
                            {/* Title */}
                            <Typography sx={{ ml:'8px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                                {features[2].title}
                            </Typography>
                            {/* Description */}
                            <Typography sx={{  mx: "auto",maxWidth:'250px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
                                {features[2].description}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                position: "relative",

                                mt:'10px',
                                padding: "32px",
                                // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                textAlign: "center",
                                // transition: "transform 0.3s ease, box-shadow 0.3s ease",

                                // "&:hover": {
                                //     transform: "translateY(-4px)",
                                //     boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                                // },
                            }}
                        >
                            {/* Image container */}
                            <Box
                                component="img"
                                src={features[0].image}
                                alt={features[0].title}
                                sx={{
                                    position: "absolute",
                                    top: "-24px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    objectFit: "cover",

                                    padding: '5px'
                                }}
                            />
                            {/* Title */}
                            <Typography sx={{ ml:'8px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                                {features[3].title}
                            </Typography>
                            {/* Description */}
                            <Typography sx={{  mx: "auto",maxWidth:'280px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
                                {features[3].description}
                            </Typography>
                        </Box>


                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Box
                            sx={{
                                height: '100%',
                                width: '100%',


                            }}
                        >
                            <img
                                src='../assets/images/HomeCardsComponent5.svg'
                                alt="Woman with folder"
                                style={{
                                    height: '80%',
                                    width: '80%',

                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Box
                            sx={{
                                position: "relative",
                                padding: "32px",
                                // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                textAlign: "center",
                                // transition: "transform 0.3s ease, box-shadow 0.3s ease",

                                // "&:hover": {
                                //     transform: "translateY(-4px)",
                                //     boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                                // },
                            }}
                        >
                            {/* Image container */}
                            <Box
                                component="img"
                                src={features[0].image}
                                alt={features[0].title}
                                sx={{
                                    position: "absolute",
                                    top: "-24px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    objectFit: "cover",

                                    padding: '5px'
                                }}
                            />
                            {/* Title */}
                            <Typography sx={{ ml:'8px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                                {features[4].title}
                            </Typography>
                            {/* Description */}
                            <Typography sx={{  mx: "auto",maxWidth:'250px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
                                {features[4].description}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                position: "relative",

                                mt:'10px',
                                padding: "32px",
                                // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                textAlign: "center",
                                // transition: "transform 0.3s ease, box-shadow 0.3s ease",

                                // "&:hover": {
                                //     transform: "translateY(-4px)",
                                //     boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                                // },
                            }}
                        >
                            {/* Image container */}
                            <Box
                                component="img"
                                src={features[0].image}
                                alt={features[0].title}
                                sx={{
                                    position: "absolute",
                                    top: "-24px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    objectFit: "cover",

                                    padding: '5px'
                                }}
                            />
                            {/* Title */}
                            <Typography sx={{ ml:'8px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                                {features[5].title}
                            </Typography>
                            {/* Description */}
                            <Typography sx={{  mx: "auto",maxWidth:'280px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
                                {features[5].description}
                            </Typography>
                        </Box>


                    </Grid>

                </Grid>
                <Grid item display={"flex"} flexWrap={'wrap'} justifyContent={"space-evenly"} >

                    <Box
                        sx={{
                            position: "relative",
                            padding: "32px",
                            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            // transition: "transform 0.3s ease, box-shadow 0.3s ease",

                            // "&:hover": {
                            //     transform: "translateY(-4px)",
                            //     boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                            // },
                        }}
                    >
                        {/* Image container */}
                        <Box
                            component="img"
                            src={features[0].image}
                            alt={features[0].title}
                            sx={{
                                position: "absolute",
                                top: "-24px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                objectFit: "cover",

                                padding: '5px'
                            }}
                        />
                        {/* Title */}
                        <Typography sx={{ ml:'8px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                            {features[6].title}
                        </Typography>
                        {/* Description */}
                        <Typography sx={{  mx: "auto", maxWidth:'280px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
                            {features[6].description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: "relative",


                            padding: "32px",
                            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            // transition: "transform 0.3s ease, box-shadow 0.3s ease",

                            // "&:hover": {
                            //     transform: "translateY(-4px)",
                            //     boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                            // },
                        }}
                    >
                        {/* Image container */}
                        <Box
                            component="img"
                            src={features[0].image}
                            alt={features[0].title}
                            sx={{
                                position: "absolute",
                                top: "-24px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                objectFit: "cover",

                                padding: '5px'
                            }}
                        />
                        {/* Title */}
                        <Typography sx={{ ml:'8px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                            {features[7].title}
                        </Typography>
                        {/* Description */}
                        <Typography sx={{  mx: "auto", maxWidth:'250px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
                            {features[7].description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            padding: "32px",
                            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            // transition: "transform 0.3s ease, box-shadow 0.3s ease",

                            // "&:hover": {
                            //     transform: "translateY(-4px)",
                            //     boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                            // },
                        }}
                    >
                        {/* Image container */}
                        <Box
                            component="img"
                            src={features[0].image}
                            alt={features[0].title}
                            sx={{
                                position: "absolute",
                                top: "-24px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                objectFit: "cover",

                                padding: '5px'
                            }}
                        />
                        {/* Title */}
                        <Typography sx={{ ml:'8px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                            {features[8].title}
                        </Typography>
                        {/* Description */}
                        <Typography sx={{  mx: "auto", maxWidth:'280px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
                            {features[8].description}
                        </Typography>
                    </Box>




                </Grid>
            </Grid>

        </Box>
        </Box>

    );
}