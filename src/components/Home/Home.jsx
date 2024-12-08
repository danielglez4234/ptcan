import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Paper, Typography } from "@mui/material";
import galaxyIcon from '../../assets/img/galaxy.svg';
import controlSolorSystem from '../../assets/img/control_solor_system.svg';
import statisticsIcon from '../../assets/img/statistics.svg';
import startMapIcon from '../../assets/img/start_map.svg';
import statisticsViewIcon from '../../assets/img/statistics_view.svg';
import gearsIcon from '../../assets/img/gears.svg';
import { Link } from "react-router-dom";
import { navComponents } from "../../constants/navComponents";

function CardItem({ title, description, icon }) {
    const trimText = title.toLowerCase().replace(/\s+/g, '') // used for url navigation
    return (
        <Link to={`/${trimText}`} style={{textDecoration: "none"}}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{padding: "20px"}}>
                <CardMedia
                    component="img"
                    height="200"
                    sx={{ width: "200px", position: "relative", left: "50%", marginLeft: "-100px" }}
                    image={icon}
                    alt={title}
                />
                <CardContent>
                <Divider sx={{borderColor: "#DC6969", marginBottom: "10px", borderWidth: "1.5px"}} />
                <Typography gutterBottom variant="h5" sx={{fontFamily: "JosefinSans-SemiBold", textAlign: "center"}} component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "JosefinSans-Regular", color: 'text.secondary' }}>
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
    )
}



function Home() {

    return (
        <Box sx={{ display: 'flex', flexDirection: "column", width: "100%", padding: "30px" }}>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{fontFamily: "JosefinSans-Bold", color: "#413B3B"}}>
                    User Tools
                </Typography>
            </Box>

            <Divider sx={{"&::before, &::after": {borderColor: "#DC6969", borderWidth: "2px"} }}> - </Divider>

            <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
                <Grid container sx={{justifyContent: "space-between", alignItems: "flex-start",}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                
                {
                    navComponents.map((item, index) => {
                        if (item.title === "Home") return 
                        return (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <CardItem title={item.title} description={item.description} icon={item.icon} />
                            </Grid>
                        )
                    })
                }        
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;