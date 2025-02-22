import { useLocation, useNavigate } from 'react-router'
import AddUserIcon from '../../assets/add_user_icon.png'
import { Container, NavLink } from './styles'

function Header({ $changeBackground }) {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<Container $changeBackground={$changeBackground}>
			<header>
				<button title="Início" onClick={() => navigate('/')} type="button">
					<div> </div>
					<img src={AddUserIcon} alt="Ícone de adicionar usuário" />
				</button>

				<nav className="desktop">
					<NavLink $ishere={pathname === '/register'} to={'/register'}>
						Cadastrar novo usuário
					</NavLink>
					<NavLink $ishere={pathname === '/users'} to={'/users'}>
						Ver todos os usuários
					</NavLink>
				</nav>

				<nav className="mobile">
					<NavLink $ishere={pathname === '/register'} to={'/register'}>
						Cadastrar novo usuário
					</NavLink>
					<NavLink $ishere={pathname === '/users'} to={'/users'}>
						Ver todos os usuários
					</NavLink>
				</nav>

				<div />
			</header>
		</Container>
	)
}

export default Header
