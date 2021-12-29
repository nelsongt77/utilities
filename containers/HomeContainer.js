import React from 'react'
import { useToast, Flex, Divider } from '@chakra-ui/react'

import {colors} from '../utils'
import Colors from '@/components/Colors'
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
		<Flex direction="column" gap={4}>
			<Colors colors={colors} handlerCopyColor={_handlerCopyColor} />
			<Divider orientation='horizontal' />
			<GlassEffect />
			<Divider orientation='horizontal' />
		</Flex>
	)
}

export default HomeContainer