import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import api from '../../services/api'
import Button from '../Button'
import { Background, Container } from './styles'

function ModalUpdateUser({
	$users,
	$setUsers,
	$setShowModalUpdateUser,
	$showModalUpdateUser
}) {
	const user = $showModalUpdateUser

	const { register, handleSubmit, reset } = useForm()
	const onSubmit = (data) => updateUser(data)

	async function updateUser(data) {
		try {
			const {
				data: { mensagem }
			} = await api.put(`/users/${user.id}`, data)

			const newUsers = $users.map((item) => {
				if (item.id === user.id) {
					return {
						id: item.id,
						name: data.name.toUpperCase(),
						age: data.age,
						email: data.email.toLowerCase(),
						phoneNumber: data.phoneNumber
					}
				}

				return item
			})

			$setUsers(newUsers)

			mensagem && toast.success(mensagem)
			$setShowModalUpdateUser(false)
		} catch (error) {
			if (error.response) {
				toast.error(error.response.data.mensagem)
			} else {
				toast.error('Erro no servidor! Por favor, tente novamente mais tarde.')
			}
		}
		reset()
	}

	return (
		<Background $showModalUpdateUser={$showModalUpdateUser}>
			<Container>
				<p>Atualizar dados</p>
				{user && (
					<form onSubmit={handleSubmit(onSubmit)}>
						<label>
							Nome
							<input
								type="text"
								defaultValue={user.name}
								{...register('name')}
								required
							/>
						</label>

						<label>
							Idade
							<input
								type="number"
								defaultValue={user.age}
								{...register('age')}
								required
							/>
						</label>

						<label>
							E-mail
							<input
								type="email"
								defaultValue={user.email}
								{...register('email')}
								required
							/>
						</label>

						<label>
							Telefone
							<input
								type="tel"
								defaultValue={user.phoneNumber}
								{...register('phoneNumber')}
								required
							/>
						</label>

						<div className="button-div">
							<Button type="submit">Atualizar dados</Button>
							<button
								onClick={() => {
									$setShowModalUpdateUser(false)
									reset()
								}}
								type="button"
								className="cancel-button"
							>
								Cancelar
							</button>
						</div>
					</form>
				)}
			</Container>
			<ToastContainer />
		</Background>
	)
}

export default ModalUpdateUser
