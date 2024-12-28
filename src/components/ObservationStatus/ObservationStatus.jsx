import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { navComponents } from "../../constants/navComponents";



const TextInput = ({label = "", insideLabel = "", type = "", textAdornment = "", mask = false }) => {
    
    return (
        <div>
            <p style={{}}>{label}</p>
            <TextField
                label={label}
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                size="small"
                mask={mask}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start">{textAdornment}</InputAdornment>,
                    },
                }}
            />
        </div>
    )
}




function ObservationStatus() {
    const url = window.location.href
    const title = url.substring(url.lastIndexOf('/') + 1).replace(/%20/g, '').toLowerCase()
    const component = navComponents.find(comp => comp.title.replace(/\s+/g, '').toLowerCase() === title)

    return ( 
        <Box sx={{ display: 'flex', flexDirection: "column", width: "100%", padding: "30px" }}>

            <Box sx={{ display: "flex", flexDirection: "row", height: "100%", gap: "10px" }}>

                <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
                    <Box sx={{ width: "100%", boxShadow: "2px 2px 3px #80808044", height: "60px", display: "flex", alignItems: "center", justifyContent: "flex-start", backgroundColor: "#E4E4E4", marginRight: "10px", borderTopRightRadius: "4px", borderBottomRightRadius: "4px" }}>
                        <div style={{ width: "20px", height: "100%", backgroundColor: "rgb(238 93 123)"}} ></div>
                        <Typography variant="h4" component="h4" sx={{ flex:1, position: "relative", top: "5px", marginLeft: "10px",  fontFamily: "JosefinSans-Bold", color: "#413B3B"}}>
                            Observation Status
                        </Typography>
                        <img src={component.icon} alt="icon" style={{width: "50px", height: "50px", position: "relative", marginRight: "20px"}} />
                    </Box>

                    <Box sx={{height: "100%", marginTop: "15px", padding:"15px", overflowY: "auto"}}>
                        <TextInput label={"Right Ascension"} textAdornment={":"} mask={"00:00:00.0"} />
                        <TextInput label={"Declination"} textAdornment={":"} />
                    </Box>
                </Box>
                    {/* <Box sx={{border: "1px solid #eaeaea", height: "100%", marginTop: "15px", padding:"15px", overflowY: "auto"}}>
                    </Box> */}
                <Box sx={{ flexGrow: 2, backgroundColor: "white", boxShadow: "2px 2px 3px #80808044", height: "100%",  }}>

                </Box>
            </Box>



       

        </Box>
    );
}

export default ObservationStatus;