import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

	const dispatch = useDispatch();

	const [formLoginValues, handleLoginInputChange] = useForm({
		lEmail: '',
		lPassword: ''
	});

	const {lEmail, lPassword} = formLoginValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLogin(lEmail,lPassword));
	}

	const [formRegisterValues, handleRegisterInputChange] = useForm({
		rName: '',
		rEmail: '',
		rPassword: '',
		rConfirm: ''
	});

	const {rName,rEmail,rPassword,rConfirm} = formRegisterValues;

	const handleRegister = (e) => {
		e.preventDefault();
		if(rPassword !== rConfirm){
			return Swal.fire('Error', 'The password must be equal', 'error');
		}
		dispatch(startRegister(rName,rEmail,rPassword));
		
	}

	return (
		<div className="container login-container">
			<div className="row">
				<div className="col-md-6 login-form-1">
					<h3>Login</h3>
					<form onSubmit = {handleLogin}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Email"
								name = "lEmail"
								value = {lEmail}
								onChange = {handleLoginInputChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								name = "lPassword"
								value = {lPassword}
								onChange = {handleLoginInputChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="submit"
								className="btnSubmit"
								value="Login"
							/>
						</div>
					</form>
				</div>

				<div className="col-md-6 login-form-2">
					<h3>Register</h3>
					<form onSubmit = {handleRegister}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Nombre"
								value={rName}
								name = 'rName'
								onChange = { handleRegisterInputChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								placeholder="Correo"
								value={rEmail}
								name = 'rEmail'
								onChange = { handleRegisterInputChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								placeholder="Contraseña"
								value={rPassword}
								name = 'rPassword'
								onChange = { handleRegisterInputChange}
							/>
						</div>

						<div className="form-group">
							<input
								type="password"
								className="form-control"
								placeholder="Repita la contraseña"
								value={rConfirm}
								name = 'rConfirm'
								onChange = { handleRegisterInputChange}
							/>
						</div>

						<div className="form-group">
							<input
								type="submit"
								className="btnSubmit"
								value="Crear cuenta" />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}