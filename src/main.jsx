import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Routes from './routes/routes'
import GlobalStyles from './styles/global_styles'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<GlobalStyles />
			<Routes />
		</BrowserRouter>
	</StrictMode>
)
