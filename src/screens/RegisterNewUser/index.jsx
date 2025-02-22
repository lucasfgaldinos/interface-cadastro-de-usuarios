import { StatusCodes } from 'http-status-codes'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import AddNewUserImage from '../../assets/add_user.svg'
import Button from '../../components/Button'
import Header from '../../components/Header'
import api from '../../services/api'
import { Container, Content } from './styles'

function Register() {
	const [changeBackground, setChangeBackground] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	window.onscroll = () => {
		window.scrollY > 100
			? setChangeBackground(true)
			: setChangeBackground(false)
	}

	async function onSubmit(data) {
		try {
			const response = await api.post('/users', data)

			if (response.status === StatusCodes.CREATED) {
				toast.success('Usuário cadastrado com sucesso!')
			}
		} catch (err) {
			err.response
				? toast.error(err.response.data.message)
				: toast.error('Erro no servidor! Por favor tente mais tarde.')
		}
	}

	return (
		<Container>
			<Header $changeBackground={changeBackground} />

			<h2>Cadastrar novo usuário</h2>

			<Content>
				<div className="form-div">
					<form onSubmit={handleSubmit(onSubmit)}>
						<label>
							Nome
							<input type="text" {...register('name', { required: true })} />
							<div>
								{errors.name ? <span>Este campo é obrigatório</span> : ' '}
							</div>
						</label>

						<label>
							E-mail
							<input type="email" {...register('email', { required: true })} />
							<div>
								{errors.email ? <span>Este campo é obrigatório</span> : ' '}
							</div>
						</label>

						<label>
							Idade
							<input type="number" {...register('age', { required: true })} />
							<div>
								{errors.age ? <span>Este campo é obrigatório</span> : ' '}
							</div>
						</label>

						<label>
							Telefone
							<input
								type="tel"
								{...register('phoneNumber', { required: true })}
							/>
							<div>
								{errors.phoneNumber ? (
									<span>Este campo é obrigatório</span>
								) : (
									' '
								)}
							</div>
						</label>

						<Button type="submit">Cadastrar</Button>
					</form>
				</div>

				<div className="image-div">
					<img src={AddNewUserImage} alt="Ilustração" />
				</div>
			</Content>
			<ToastContainer />
		</Container>
	)
}

export default Register
