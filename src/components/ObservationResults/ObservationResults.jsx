import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { navComponents } from "../../constants/navComponents";
import a1 from '../../assets/img/galaxys/a1.jpg';
import a2 from '../../assets/img/galaxys/a2.jpg';
import a3 from '../../assets/img/galaxys/a3.jpg';
import a4 from '../../assets/img/galaxys/a4.jpg';
import a5 from '../../assets/img/galaxys/a5.jpg';
import a6 from '../../assets/img/galaxys/a6.jpg';

// {/* <TextField
// label="With normal TextField"
// id="outlined-start-adornment"
// sx={{ m: 1, width: '25ch' }}
// slotProps={{
//     input: {
//     startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//     },
// }}
// /> */}

function CardItem({ title, description, image }) {
    const trimText = title.toLowerCase().replace(/\s+/g, '') // used for url navigation
    return (
        // <Link to={`/${trimText}`} style={{textDecoration: "none"}}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{padding: "20px"}}>
                <CardMedia
                    component="img"
                    height="200"
                    sx={{ width: "200px", position: "relative", left: "50%", marginLeft: "-100px" }}
                    image={image}
                    alt={title}
                />
                <CardContent>
                
                <Typography gutterBottom variant="h6" sx={{fontFamily: "JosefinSans-SemiBold", textAlign: "left"}} component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "JosefinSans-Regular", color: 'text.secondary' }}>
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        // </Link>
    )
}

function ObservationResults() {
    const url = window.location.href;
    const title = url.substring(url.lastIndexOf('/') + 1).replace(/%20/g, '').toLowerCase()
    const component = navComponents.find(comp => comp.title.replace(/\s+/g, '').toLowerCase() === title)

    return ( 
        <Box sx={{ display: 'flex', flexDirection: "column", width: "100%", padding: "30px" }}>

            <Box sx={{ display: "flex" }}>

                <Box sx={{ flexGrow: 0.4, boxShadow: "2px 2px 3px #80808044", height: "60px", display: "flex", alignItems: "center", justifyContent: "flex-start", backgroundColor: "#E4E4E4", marginRight: "10px", borderTopRightRadius: "4px", borderBottomRightRadius: "4px" }}>
                    <div style={{ width: "20px", height: "100%", backgroundColor: "#AB4459"}} ></div>
                    <Typography variant="h4" component="h4" sx={{ flex:1, position: "relative", top: "5px", marginLeft: "10px",  fontFamily: "JosefinSans-Bold", color: "#413B3B"}}>
                        Observation Results
                    </Typography>
                    <img src={component.icon} alt="icon" style={{width: "50px", height: "50px", position: "relative", marginRight: "20px"}} />
                </Box>

                <Box sx={{ flexGrow: 1, backgroundColor: "white", boxShadow: "2px 2px 3px #80808044" }}>
                    
                </Box>

            </Box>

            <Box sx={{border: "1px solid #eaeaea", height: "100%", marginTop: "15px", padding:"15px"}}>
                <Grid container sx={{ alignItems: "flex-start",}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 18 }}>
                
                    <Grid item xs={2} sm={4} md={4}>
                        <CardItem title={"Nebulame esta"} description={"algo porahji"} image={a1} />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CardItem title={"Nebulame esta"} description={"algo porahji"} image={a2} />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CardItem title={"Nebulame esta"} description={"algo porahji"} image={a3} />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CardItem title={"Nebulame esta"} description={"algo porahji"} image={a4} />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CardItem title={"Nebulame esta"} description={"algo porahji"} image={a5} />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CardItem title={"Nebulame esta"} description={"algo porahji"} image={a6} />
                    </Grid>
    
                </Grid>
            </Box>

            {/* pagination */}
            <Box sx={{height: "60px", backgroundColor: "white", boxShadow: "2px 2px 3px #80808044", marginTop: "15px" }}>
                
            </Box>
        </Box>
    );
}

export default ObservationResults;