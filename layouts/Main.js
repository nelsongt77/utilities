import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import {NavBar, SidebarLeft} from '@/components/LayoutPartial'

const MainLayout = (props) => {

	return (
		<Grid
			h="100vh"
            gridTemplateRows="56px 1fr 2fr"
            gridTemplateColumns=".2fr 1fr"
            gridGap={2}
		>
			<GridItem paddingX={2} boxShadow="base" colSpan={2}>
				<NavBar />
			</GridItem>
			<GridItem p={2}>
				<SidebarLeft />
			</GridItem>
			<GridItem p={2}>
				{props.children}
			</GridItem>
		</Grid>
	)
}

export default MainLayout
