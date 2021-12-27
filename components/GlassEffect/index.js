import React from 'react'
import { Box, Heading, Divider, Text, Flex, Code } from '@chakra-ui/react'

const GlassEffect = () => {
	return (
		<Box id="glass-effect" mb={6}>
			<Heading>GLASS EFFECT</Heading>
			<Divider orientation='horizontal' my={2} />
			<Flex h="20rem" gap={2}>
				<Box w="100%" h="100%">
					<Flex height="inherit" rounded={4} alignItems="center" justifyContent="center"
						backgroundImage="url(https://images.pexels.com/photos/1673973/pexels-photo-1673973.jpeg?cs=srgb&dl=pexels-julian-paolo-dayag-1673973.jpg&fm=jpg)"
						backgroundPosition="center"
						backgroundRepeat="no-repeat"
						backgroundSize="cover"
					>
						<Box
							w="50%"
							h="50%"
							style={{
								backgroundColor: '#ffffff10',
								backdropFilter: 'blur(12px)'
							}}
						>
							<Text>Hello World</Text>
						</Box>
					</Flex>
				</Box>

				<Box w="100%" h="100%">
					<Code>
						background-color: #ffff10;
						backdrop-filter: blur(12px);
						-webkit-backdrop-filter: blur(12px);
					</Code>
				</Box>
			</Flex>
		</Box>
	)
}

export default GlassEffect
