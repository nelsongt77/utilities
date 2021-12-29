import React from 'react'
import { Box, Heading, Divider, Text, Flex, Code } from '@chakra-ui/react'

const GlassEffect = () => {
	return (
		<Box id="glass-effect">
			<Heading>GLASS EFFECT</Heading>
			<Flex h="20rem" gap={2}>
				<Box w="100%" h="100%">
					<Flex height="inherit" rounded={4} alignItems="center" justifyContent="center"
						backgroundImage="url(https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
						backgroundPosition="center"
						backgroundRepeat="no-repeat"
						backgroundSize="cover"
					>
						<Box
							w="50%"
							h="50%"
							borderRadius={4}
							style={{
								backgroundColor: '#ffffff10',
								backdropFilter: 'blur(12px)'
							}}
							display="flex"
							flexDirection="columns"
							justifyContent="center"
							alignItems="center"
						>
							<Text fontSize="2xl" color="white">Hello World</Text>
						</Box>
					</Flex>
				</Box>

				<Box w="100%" h="100%">
					<Code colorScheme="facebook">
						background-color: #ffff10;<br />
						backdrop-filter: blur(12px);<br />
						-webkit-backdrop-filter: blur(12px);
					</Code>
				</Box>
			</Flex>
		</Box>
	)
}

export default GlassEffect
