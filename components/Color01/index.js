import React from 'react'
import { SimpleGrid, Box, IconButton, Heading, useToast, Divider, Text } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

const Color01 = ({colors, handlerCopyColor}) => {
	return (
		<Box id="colors" mb={6}>
			<Heading>COLORS</Heading>
			<Divider orientation='horizontal' my={2} />
			<SimpleGrid columns={4} rows={2} gap={2}>
				{
					colors.map((color, index) => (
						<Box key={index} {...color.props} borderRadius={4}>
							<Box display='flex' justifyContent="space-between">
								{color.name}
								<IconButton
									variant="none"
									size="sm"
									onClick={() => handlerCopyColor(color.code)}
									icon={<CopyIcon />}
								/>
							</Box>
							<Text fontSize='sm'isTruncated>{color.codeName}</Text>
						</Box>
					))
				}
			</SimpleGrid>
		</Box>
	)
}

export default Color01