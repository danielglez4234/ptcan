import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Paper, Typography } from "@mui/material";
import galaxyIcon from '../../assets/img/galaxy.svg';
import telescopeLogo from '../../assets/img/telescope-logo.svg';
import galaxyIcon from '../../assets/img/galaxy.svg';
import galaxy1Icon from '../../assets/img/galaxy_1.svg';
import startMapIcon from '../../assets/img/start_map.svg';
import blackHoleIcon from '../../assets/img/blackHole.svg';

function CardItem({ title, description, icon }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="140"
            image={icon}
            alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}



function Home() {


    return (
        <Box sx={{ display: 'flex', flexDirection: "column", width: "100%", height: "100%", padding: "30px" }}>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{fontFamily: "JosefinSans-Bold", color: "#413B3B"}}>
                    User Tools
                </Typography>
            </Box>

            <Divider> - </Divider>

            <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    
                <Grid item xs={2} sm={4} md={4}>
                    <CardItem title="Observation Results" description="" icon={galaxyIcon} />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardItem title="Observation Results" description="" icon={galaxyIcon} />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardItem title="Observation Results" description="" icon={galaxyIcon} />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardItem title="Observation Results" description="" icon={galaxyIcon} />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardItem title="Observation Results" description="" icon={galaxyIcon} />
                </Grid>
                  
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;