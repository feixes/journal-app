
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"

const formData = {
    email: 'xavier@xavi.com',
    password: '1234',
    displayName: 'Xavier Feixas'
}


export const RegisterPage = () => {

    const {
        displayName,
        email,
        password,
        onInputChange,
        formState,
        isFormValid,
        passwordValid,
        emailValid,
        displayNameValid
    } = useForm(formData, formValidations)

    const formValidations = {
        email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
        password: [(value) => value.length >= 6, 'La contraseña debe de tener más de 6 letras'],
        displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],

    }


    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }


    return (

        <AuthLayout title='Crear cuenta'>
            <form onSubmit={onSubmit}>

                <Grid container >
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre"
                            type="text"
                            placeholder="nombre completo"
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!displayNameValid}
                            helperText='El nombre debe tener más de 6 letras'
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@email.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="pasword"
                            placeholder="password"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
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