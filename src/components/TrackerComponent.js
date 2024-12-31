import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Theme from '../Theme'
 
const TrackerComponent = () => {
    const isMobileScreen = useMediaQuery('(max-width:600px)');
    const content = [
        { image: "./assets/images/Frame 92.png", name: "Discussion", descp: "We listen, plan, and create customized solutions." },
        { image: "./assets/images/Frame 92 (1).png", name: "Document", descp: " Clear roadmaps for seamless execution." },
        { image: "./assets/images/Frame 92 (2).png", name: "Design", descp: "Stunning, user-friendly designs that impress." },
       
    ]
 
    const contentOne = [
        { image: "./assets/images/Frame 92 (3).png", name: "Develop", descp: "Tailored solutions built to perfection." },
        { image: "./assets/images/Frame 92 (4).png", name: "Deploy", descp: "Smooth project rollouts with zero hiccups." },
        { image: "./assets/images/Frame 92 (5).png", name: "Deliver", descp: "On-time, high-quality results that exceed expectations." },
    ]
    return (
        <>
            <Grid container justifyContent="center" sx={{mt:'120px'}}>
                <Grid item xs={12} sx={{ justifyContent: "center", }}>
                    <Grid item sx={{ justifyContent: "center", margin: "auto", textAlign: "center" }}>
                        <Grid item>
                            <Typography variant='caption1' sx={{ fontSize: { xs: '18px', sm: '22px', md: "30px", lg: '38px', xl: "40px" } }}>The Actimize</Typography><Typography variant='caption1' sx={{ color: Theme.palette.background.default, fontSize: { xs: '18px', sm: '22px', md: "30px", lg: '38px', xl: "40px" }, }}> Way</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='caption2' sx={{color:Theme.palette.background.descp}}>Our 6-step process we follow to bring your vision to life.</Typography>
                        </Grid>
                    </Grid>
 
                   { ! isMobileScreen ?
                   <Grid container justifyContent="center" mt={5} p={2}>
                        {content.map((item, index) => (
                            <React.Fragment key={index}>
                             
                                <Grid item sm={3.3}md={3.5}lg={3.52}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    border: `1px solid ${Theme.palette.background.border}`,
                                    borderRadius: 5,
                                    backgroundColor: "white"
                                }} gap={2} py={{xs:3,xl:5}}>
                                    <Box component="img" src={item.image} sx={{ maxWidth: "100%", display: "block", margin: "0 auto" }} />
                                    <Typography variant="caption1" sx={{ textAlign: "center" }}>
                                        {item.name}
                                    </Typography>
                                    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                                        <Typography variant="caption2" sx={{ color: Theme.palette.background.descp, textAlign: "center",fontSize:{xs:"10px",sm:"12px",md:"14px"}  }}>
                                            {item.descp}
                                        </Typography>
                                    </Grid>
                                </Grid>
 
                             
                                {(index < content.length - 1 ) && (
                                    <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box component="img" src="/assets/images/Frame 93 --_ Frame 94.svg" sx={{ width: {xs:"50px",lg:"80px",}, height: "30px" }} />
                                    </Grid>
                                )}
                             
 
                            </React.Fragment>
                        ))}
                          <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} sm={9}md={8.9} lg={12} xl={9}>
                                        <Box component="img" src="/assets/images/Frame 95 --_ Frame 96.svg" sx={{ width: "100%", height: "100%" }} />
                                    </Grid>
 
                                    {contentOne.map((item, index) => (
                            <React.Fragment key={index}>
                             
                                <Grid item sm={3.3}md={3.5}lg={3.52}  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    border: `1px solid ${Theme.palette.background.border}`,
                                    borderRadius: 5,
                                    backgroundColor: "white"
                                }} gap={2} py={3}>
                                    <Box component="img" src={item.image} sx={{ maxWidth: "100%", display: "block", margin: "0 auto" }} />
                                    <Typography variant="caption1" sx={{ textAlign: "center" }}>
                                        {item.name}
                                    </Typography>
                                    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                                        <Typography variant="caption2" sx={{ color: Theme.palette.background.descp, textAlign: "center",fontSize:{xs:"10px",sm:"12px",md:"14px"} }}>
                                            {item.descp}
                                        </Typography>
                                    </Grid>
                                </Grid>
 
                             
                                {(index < contentOne.length - 1 && index !== 2) && (
                                    <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box component="img" src="/assets/images/Frame 93 --_ Frame 94.svg" sx={{ width: {xs:"50px",lg:"80px"}, height: "30px" }} />
                                    </Grid>
                                )}
                             
 
                            </React.Fragment>
                        ))}
                    </Grid> :
                    <Grid item xs={12}>
                         {content.concat(contentOne).map((item, index) => (
                            <React.Fragment key={index}>
                             
                                <Grid item xs={12}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    border: `1px solid ${Theme.palette.background.border}`,
                                    borderRadius: 5,
                                    backgroundColor: "white"
                                }} gap={2} py={{xs:3,xl:5}}>
                                    <Box component="img" src={item.image} sx={{ maxWidth: "100%", display: "block", margin: "0 auto" }} />
                                    <Typography variant="caption1" sx={{ textAlign: "center" }}>
                                        {item.name}
                                    </Typography>
                                    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                                        <Typography variant="caption2" sx={{ color: Theme.palette.background.descp, textAlign: "center",fontSize:{xs:"12px",sm:"12px",md:"14px"}  }}>
                                            {item.descp}
                                        </Typography>
                                    </Grid>
                                </Grid>
 
                             
                                {(index < content.concat(contentOne).length - 1 ) && (
                                   <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                   <Box
                                     component="img"
                                     src="/assets/images/Frame 93 --_ Frame 94.svg"
                                     sx={{
                                       width: { xs: "50px", lg: "80px" },
                                       height: "50px",
                                       transform: "rotate(90deg)" // Rotates the image by 45 degrees, change the value as needed
                                     }}
                                   />
                                 </Grid>
                                 
                                )}
                             
 
                            </React.Fragment>
                        ))}
 
                    </Grid>
                    }
                </Grid>
            </Grid>
        </>
    )
}
 
export default TrackerComponent