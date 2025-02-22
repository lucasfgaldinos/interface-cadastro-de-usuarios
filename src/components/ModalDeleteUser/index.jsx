import { ToastContainer, toast } from 'react-toastify'
import api from '../../services/api'
import { Background, Container } from './styles'

function ModalDeleteUser({
	$users,
	$setUsers,
	$showModalDeleteUser,
	$setShowModalDeleteUser
}) {
	const user = $showModalDeleteUser

	async function deleteUser() {
		try {
			await api.delete(`/users/${user.id}`)
			const newUsers = $users.filter((item) => item.id !== user.id)
			$setUsers(newUsers)
			$setShowModalDeleteUser(false)
			toast.success('Usuário(a) deletado(a) com sucesso!')
		} catch (error) {
			toast.error('Erro no servidor! Por favor tente novamente mais tarde.')
			$setShowModalDeleteUser(false)
		}
	}

	return (
		<Background $showModalDeleteUser={$showModalDeleteUser}>
			{user && (
				<Container>
					<p>
						Você realmente deseja excluir o usuário(a) <b>{user.name}</b>? Esta
						ação não pode ser desfeita.
					</p>
					<div>
						<button
							onClick={() => $setShowModalDeleteUser(false)}
							className="cancel"
							type="button"
						>
							Cancelar
						</button>
						<button onClick={deleteUser} className="delete" type="button">
							Deletar
						</button>
					</div>
				</Container>
			)}
			<ToastContainer />
		</Background>
	)
}

export default ModalDeleteUser
