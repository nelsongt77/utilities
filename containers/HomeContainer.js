import React from 'react'
import { useToast } from '@chakra-ui/react'

import {colors, colors2} from '../utils'
import Color01 from '@/components/Color01'
import GlassEffect from '@/components/GlassEffect'

const HomeContainer = () => {
	const toast = useToast()
	const _handlerCopyColor = async (text) => {
		try {
			await window.navigator.clipboard.writeText(text)
			toast({
				title: 'copied color',
				status: 'success',
				position: 'bottom-right',
				duration: 5000,
				isClosable: true
			})
		} catch(e) {
			console.error('_handlerCopyColor error:', e)
		}
	}

	return (
		<>
			<Color01 colors={colors} handlerCopyColor={_handlerCopyColor} />
			<GlassEffect />
		</>
	)
}

export default HomeContainer