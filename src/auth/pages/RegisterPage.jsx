
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
    return (

        <AuthLayout title='Crear cuenta'>
            <form>

                <Grid container >
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre"
                            type="text"
                            placeholder="nombre completo"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@email.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="password"
                            type="pasword"
                            placeholder="password"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>Crear cuenta</Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='end'

                    >
                        <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>Ingresar</Link>
                    </Grid>
                </Grid>

            </form>
        </AuthLayout>

    )
}