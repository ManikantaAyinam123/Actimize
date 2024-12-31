import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Theme from '../Theme'

const HireDeveloperThirdComponent = () => {

    const content = [
        "Cost-Effectiveness", "Quick Onboarding", "Expertise and Specialization", "Scalability and Flexibility", "Ongoing Support", "Faster Time to Market", "Quality Assurance", "Customized Engagement"
    ]
    const content2 = [
        "Pay only for the skills and time you need.Flexible payment options.", "Ready-to-go developers with specialized skills. No waiting for lengthy recruitment processes.", "Access to a pool of highly skilled and experienced developers across various technologies.",
        "Easily scale your team up or down based on project requirements, without any long-term commitments.", "We provide continuous support and ensure the developers meet your quality standards throughout the project.", "With skilled developers already on hand, your project can move forward faster and get to market sooner.",
        "We ensure developers follow best practices and maintain high-quality standards, providing peace of mind and reducing your management burden.", "Choose engagement models that best suit your needs—whether it's a full-time developer, part-time, or a specific project-based commitment."
    ]
    const content3 = [
        "High recruitment fees, ongoing salary expenses, and added overhead for benefits.", "Hiring can take weeks or even months. Additional time for training and team integration.",
        "Finding specialized talent is challenging and may require a long search.", "Full-time hires are permanent, and scaling requires new hiring processes and HR management.", "Once hired, the responsibility for performance and quality falls entirely on you.",
        "The recruitment and onboarding process delays project timelines and prolongs delivery.", "The responsibility of monitoring and maintaining high-quality work lies solely with you after recruitment.", "Limited to standard full-time roles that may not align with your project-based needs."
    ]
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12} sx={{ justifyContent: "center", alignItems: "center", marginX: "auto" ,textAlign:"center"}} mt={7}>
                    <Grid item >
                        <Typography variant='caption1' sx={{ fontSize: { xs: "20px", sm: "40px", md: "35px", lg: "40px" }, lineHeight: { xs: "38px", sm: "64px" }, }}>Why Choose </Typography>
                        <Typography variant='caption1' sx={{ color: Theme.palette.background.default, fontSize: { xs: "20px", sm: "40px", md: "35px", lg: "40px" }, lineHeight: { xs: "38px", sm: "64px" }, }}> Actimize Over Traditional Recruitment?</Typography>
                    </Grid>
                    <Grid item mb={5}>
                        <Typography variant='caption2' sx={{ color: Theme.palette.background.descp, }}>Unlock the Power of Scalable Talent with Actimize’s Developer Solutions
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ display: {xs:"block",sm:"flex"} }} gap={{sm:1,md:5,lg:13}}>
                        <Grid item sm={3}lg={3}  mt={{xs:0,sm:12.5,md:9.5,lg:11,xl:12}}  mb={{xs:2,sm:0}}>
                            <Grid item xs={12}>
                                <Grid item sx={{ border: `3px solid ${Theme.palette.background.border}`, borderRadius: 4 }} px={{xs:1,md:2}}>
                                    {content.map((item, index) => (
                                        <Grid item key={index} sx={{ borderBottom: index === content.length - 1 ? "none" : `2px dashed ${Theme.palette.background.border}`, textAlign: "center", marginX: "auto", paddingY: 3.73 }} >
                                            <Typography variant='caption1' sx={{ textAlign: "center", fontSize: { xs: "13px",sm:"9px",md:"13px",lg:"13px",xl:"13px"}, fontWeight: "bold" }}>{item}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            sm={4.5}
                            mb={{xs:2,sm:0}}
                            sx={{
                                minHeight: { xs: 760 },
                                // border: "2px solid red",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between", // Ensures equal spacing for the entire content
                            }}
                        >
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    border: "3px solid #1FBC59",
                                    borderRadius: 5,
                                    backgroundColor: "#1FBC59",
                                    boxShadow: "0px 8px 15px rgba(31, 188, 89, 0.4)", // Drop shadow
                                }}
                                pt={2}
                                p={0.5}
                            >
                                <Grid
                                    item
                                    sx={{
                                        margin: "auto",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        variant="caption1"
                                        sx={{
                                            color: "white",
                                            fontSize: { xs: "25px", textAlign: "center" },
                                        }}
                                    >
                                        Actimize
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    p={1}
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: 3,
                                        height: "auto",
                                        minHeight: { xs: 720 },
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between", 
                                        textAlign:"start"
                                    }}
                                >
                                    {content2.map((item, index) => (
                                        <Grid
                                            key={index}
                                            item
                                            sx={{
                                                display: "flex",
                                                // alignItems: "center",
                                                gap: 1,
                                            }}
                                        >
                                            <Grid item>
                                                <Box component="img" src="/assets/images/solar_like-bold.png" />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="caption3" sx={{fontWeight:"normal",textAlign:"start",fontSize:{xs:"13px",sm:"10px",md:"13px",xl:"15px"}}}>{item}</Typography>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid
                            item
                            sm={4.5}
                            mb={{xs:1,sm:0}}
                            sx={{
                                height: "auto",
                                minHeight: { xs: 720 },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                   textAlign:"start"
                            }}
                        >
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    border: `3px solid ${Theme.palette.background.border}`,
                                    borderRadius: 5,
                                    backgroundColor: Theme.palette.background.border,
                                }}
                                pt={2}
                                p={0.5}
                            >
                                <Grid
                                    item
                                    sx={{
                                        margin: "auto",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }} py={.5}
                                >
                                    <Typography
                                        variant="caption1"
                                        sx={{
                                            color: "black",
                                            fontSize: { xs: "20px",  textAlign: "center" },
                                        }}
                                    >
                                        Traditional Recruitment
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    p={1}
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: 5,
                                        height: "auto",
                                        minHeight: { xs: 720 },
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    {content3.map((item, index) => (
                                        <Grid
                                            key={index}
                                            item
                                            sx={{ display: "flex", alignItems: "center", gap: 1 }}
                                        >
                                            <Box component="img" src="/assets/images/solar_dislike-bold.png" />
                                            <Typography variant="caption3" sx={{fontWeight:"normal",textAlign:"start",fontSize:{xs:"13px",sm:"10px",md:"13px",xl:"15px"}}}>{item}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default HireDeveloperThirdComponent