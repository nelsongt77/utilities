import React from 'react'
import NextLink from 'next/link'
import { Flex, Link, Box, List, ListItem } from '@chakra-ui/react'

import {menus} from '../../utils'

export const NavBar = () => {
    return (
        <Flex h="56px" justifyContent="center" alignItems="center">
            {process.env.NEXT_PUBLIC_APP_NAME}
        </Flex>
    )
}

export const SidebarLeft = () => {

    return (
        <Box borderRadius={4} borderWidth='1px' p={2}>
            <List>
                {
                    menus.map((menu, index) => (
                            <ListItem key={index}>
                                {
                                    menu.link ? (
                                        <NextLink href={menu.link} passHref>
                                            <Link>{menu.name}</Link>
                                        </NextLink>
                                    ) : (
                                        <Link href={`#${menu.id}`} onClick={(evt) => evt.preventDefault()}>
                                            {menu.name}
                                        </Link>
                                    )
                                }
                            </ListItem>
                        )
                    )
                }
            </List>
        </Box>    
    )
}