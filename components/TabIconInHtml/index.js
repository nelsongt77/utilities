import React from 'react'
import { Box, Heading, Code, Image } from '@chakra-ui/react'
import Head from 'next/head'

const TabIconInHtml = ({src=''}) => {
	return (
		<Box id="tab-icon-html">
			<Head>
				<link rel="icon" href="/resources/beer.png" type="image/x-icon" />
			</Head>
			<Heading>TAB ICON IN HTML</Heading>
			<Code colorScheme="facebook" children={'<head><link rel="icon" href="..." type="image/x-icon" /></head>'} />
			<Image htmlWidth={200} src="/resources/tab-icon-html.png"/>
		</Box>	
	)
}

export default TabIconInHtml