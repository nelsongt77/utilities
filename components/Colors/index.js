import React from 'react'
import { SimpleGrid, Box, IconButton, Heading, useToast, Divider, Text, Flex, Spacer, Tooltip } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

const Colors = ({colors, handlerCopyColor}) => {
	return (
		<Box id="colors">
			<Heading>COLORS</Heading>
			<SimpleGrid columns={4} rows={2} gap={2}>
				{
					colors.map((color, index) => (
						<Flex key={index} {...color.props} borderRadius={4} direction="column">
							<Flex>
								{color.name}
								<Spacer />
								<IconButton
									variant="none"
									size="sm"
									onClick={() => handlerCopyColor(color.code)}
									icon={<CopyIcon />}
								/>
							</Flex>
							<Text fontSize="sm" isTruncated>{color.codeName}</Text>
						</Flex>
					))
				}
			</SimpleGrid>
		</Box>
	)
}

export default Colors