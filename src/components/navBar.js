import { AppBar, Typography, Toolbar } from '@mui/material'


export default function () {

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'center' }} >

                <Typography variant="h6" component="div"  >
                    Weather App
                </Typography>

            </Toolbar>
        </AppBar>
    )
}