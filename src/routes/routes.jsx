import { Route, Routes } from 'react-router'
import Home from '../screens/Home'
import Register from '../screens/RegisterNewUser'
import UserList from '../screens/UserList'

function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register />} />
			<Route path="/users" element={<UserList />} />
		</Routes>
	)
}

export default AllRoutes
