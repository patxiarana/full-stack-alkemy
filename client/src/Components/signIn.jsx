import React, { useEffect, useState } from "react"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Paper, Avatar, TextField, CssBaseline } from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { Button, Typography } from "@mui/material";
import Swal from 'sweetalert2'
import Checkbox from '@mui/material/Checkbox';
/////////////// material ui /////////////////
const useStyles = makeStyles(theme => ({
	root: {

		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh',

	},
	container: {
		opacity: '0.8',
		height: '90%',
		marginTop: theme.spacing(7),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		},
		border: "1px solid black",
	},
	div: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.dark
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(3, 0, 2)
	},
	divgoogle2: {
		marginTop: theme.spacing(3),
	}
}))





export const   SignIn = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('')
	const classes = useStyles()

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('token')
		if (loggedUserJSON) {
			navigate("/home")
		}
	}, [navigate])

	const handleRegister = async (event) => {
		try {

			axios({
				method: 'POST',
				url: `http://localhost:3000/user/Signin`,
				data: {
					email: email,
					password: password,
				
				}
			}).then(response => {
                console.log(response)
                if(response.data.token){
				window.localStorage.setItem("token", response.data.token)
				window.localStorage.setItem("id", response.data.user.id)
                window.location.reload();
            }
			}).catch(err => {
                console.log(err.response.data)
				if (err.response.status === 400 ||err.response.status === 401) {
					Swal.fire(err.response.data.msg)

				}
			})
		} catch (e) {
			console.log("HandleRegister", e)
		}
	}

	return (

		<React.StrictMode>
			<Grid container component='main' className={classes.root}>
				<CssBaseline />
				<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
					<div className={classes.div}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>iniciar sesion</Typography>
						<form className={classes.form}>
							
                        <TextField
								fullWidth
								autoFocus
								color='primary'
								margin='normal'
								variant='outlined'
								label='email'
								name='email'
								value={email}
								onChange={(e) => { setEmail(e.target.value) }}
							/>
                            <TextField
								fullWidth
								autoFocus
								type='password'
								color='primary'
								margin='normal'
								variant='outlined'
								label='password'
								name='password'
								value={password}
								onChange={(e) => { setPassword(e.target.value) }}
							/>
							<Button
								fullWidth
								variant='contained'
								color='secondary'
								className={classes.button}
								onClick={() => handleRegister()}
							>
								iniciar sesion
							</Button>

						</form>
					</div>
				</Container>
			</Grid>
		</React.StrictMode>


	);
}