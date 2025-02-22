import { TiUserAdd } from 'react-icons/ti'
import { TiThList } from 'react-icons/ti'
import { useNavigate } from 'react-router'
import Register from '../../assets/register.svg'
import Button from '../../components/Button'
import { Container, Content } from './styles'

function Home() {
	const navigate = useNavigate()

	return (
		<Container>
			<h1>Cadastro de Usuários</h1>

			<Content>
				<div>
					<Button onClick={() => navigate('/register')}>
						Cadastrar novo usuário <TiUserAdd />
					</Button>
					<Button onClick={() => navigate('/users')}>
						Ver lista os usuários <TiThList />
					</Button>
				</div>
				<img src={Register} alt="Ilustração" />
			</Content>
		</Container>
	)
}

export default Home
