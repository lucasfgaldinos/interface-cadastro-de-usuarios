import { useState } from 'react'
import { Container } from './styles'

function ButtonToTop({ $showButtonBackToTop, children, ...props }) {
	return (
		<Container {...props} $showButtonBackToTop={$showButtonBackToTop}>
			{children}
		</Container>
	)
}

export default ButtonToTop
