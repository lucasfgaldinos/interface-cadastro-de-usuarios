import { useEffect, useState } from 'react'
import { TiArrowSortedUp } from 'react-icons/ti'
import { ToastContainer, toast } from 'react-toastify'
import Button from '../../components/Button'
import ButtonToTop from '../../components/ButtonToTop'
import Header from '../../components/Header'
import ModalDeleteUser from '../../components/ModalDeleteUser'
import ModalUpdateUser from '../../components/ModalUpdateUser'
import api from '../../services/api'
import { Container, Content, SearchUserContainer } from './styles'

function UserList() {
	const [users, setUsers] = useState([])
	const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
	const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
	const [firstNameInputValue, setFirstNameInputValue] = useState()
	const [userEmailInputValue, setUserEmailInputValue] = useState()
	const [changeBackground, setChangeBackground] = useState(false)
	const [showButtonBackToTop, setShowButtonBackToTop] = useState(false)

	window.onscroll = () => {
		if (window.scrollY > 100) {
			setShowButtonBackToTop(true)
			setChangeBackground(true)
		} else {
			setShowButtonBackToTop(false)
			setChangeBackground(false)
		}
	}

	useEffect(() => {
		getUsers()
	}, [])

	async function getUsers() {
		const { data } = await api.get('/users')

		setUsers(data)
	}

	async function searchUserByFirstName(firstName) {
		try {
			if (firstName) {
				const { data: users } = await api.get(
					`/users-first-name/${firstName.toUpperCase()}`
				)
				setUsers(users)
			} else {
				toast.error('Digite o primeiro nome para fazer a busca!')
			}
		} catch (error) {
			if (error) {
				const { mensagem } = error.response.data
				toast.error(mensagem)
			}
		}
	}

	async function searchUserByEmail(userEmail) {
		try {
			if (userEmail) {
				const { data: user } = await api.get(
					`/users-email/${userEmail.toLowerCase()}`
				)
				setUsers([user])
			} else {
				toast.error('Digite o email para fazer a busca!')
			}
		} catch (error) {
			if (error) {
				const { mensagem } = error.response.data
				toast.error(mensagem)
			}
		}
	}

	function changeFirstNameInput({ target: { value } }) {
		setFirstNameInputValue(value)
	}

	function changeEmailInput({ target: { value } }) {
		setUserEmailInputValue(value)
	}

	function backToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<Container>
			<Header $changeBackground={changeBackground} />

			<h2>Lista de usuários</h2>

			<div className="div-button-list-users">
				<Button onClick={getUsers} type="button">
					Listar todos os usuários
				</Button>
			</div>

			<SearchUserContainer>
				<label>
					Buscar usuário pelo primeiro nome
					<div>
						<input
							onChange={changeFirstNameInput}
							placeholder="Digite o primeiro nome..."
							type="text"
						/>
						<button
							onClick={() => searchUserByFirstName(firstNameInputValue)}
							type="button"
						>
							Buscar
						</button>
					</div>
				</label>

				<label>
					Buscar usuário pelo e-mail
					<div>
						<input
							onChange={changeEmailInput}
							placeholder="Digite o e-mail..."
							type="text"
						/>
						<button
							onClick={() => searchUserByEmail(userEmailInputValue)}
							type="button"
						>
							Buscar
						</button>
					</div>
				</label>
			</SearchUserContainer>

			<Content>
				<ul>
					{users.length
						? users.map((user) => (
								<li key={user.id}>
									<p>
										Nome: <span>{user.name}</span>
									</p>
									<p>
										Idade: <span>{user.age}</span>
									</p>
									<p>
										E-mail: <span>{user.email}</span>
									</p>
									<p>
										Telefone: <span>{user.phoneNumber}</span>
									</p>

									<div className="buttons-div">
										<button
											onClick={() => setShowModalUpdateUser(user)}
											type="button"
										>
											Editar usuário
										</button>

										<button
											onClick={() => setShowModalDeleteUser(user)}
											type="button"
										>
											Deletar usuário
										</button>
									</div>
								</li>
							))
						: 'Não foram encontrados usuários com os filtros estabelecidos.'}
				</ul>
			</Content>

			<ModalDeleteUser
				$users={users}
				$setUsers={setUsers}
				$setShowModalDeleteUser={setShowModalDeleteUser}
				$showModalDeleteUser={showModalDeleteUser}
			/>

			<ModalUpdateUser
				$users={users}
				$setUsers={setUsers}
				$showModalUpdateUser={showModalUpdateUser}
				$setShowModalUpdateUser={setShowModalUpdateUser}
			/>

			<ButtonToTop
				$showButtonBackToTop={showButtonBackToTop}
				onClick={backToTop}
			>
				<TiArrowSortedUp />
			</ButtonToTop>

			<ToastContainer />
		</Container>
	)
}

export default UserList
