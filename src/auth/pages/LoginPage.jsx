import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch } from "react-redux"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth"

export const LoginPage = () => {


    const dispatch = useDispatch()

    const { email, password, onInputChange } = useForm({
        email: 'xavier@xavi.com',
        password: '1234'
    })

    const onSubmit = (event) => {
        event.preventDefault()

        dispatch(checkingAuthentication())

        console.log({ email, password })
    }

    const onGoogleSignIn = () => {

        dispatch(startGoogleSignIn())

        console.log('Google Sign In')
    }


    return (

        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>

                <Grid container >
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="email"
                            type="email"
                            placeholder="email@email.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="password"
                            type="pasword"
                            placeholder="password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={onGoogleSignIn}
                                variant="contained"
                                fullWidth
                            >
                                <Google />
                                <Typography sx={{ ml: 2 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='end'

                    >

                        <Link component={RouterLink} color='inherit' to='/auth/register'>Crear una cuenta</Link>
                    </Grid>
                </Grid>

            </form>
        </AuthLayout>

    )
}
