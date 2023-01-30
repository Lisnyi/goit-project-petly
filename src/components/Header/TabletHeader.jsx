import React from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Flex, Container, IconButton, Box } from '@chakra-ui/react'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'
import logo from '../../media/logo.svg'

export default function TabletHeader({ active, setActive }) {
    const isLogin = true  ///////// Временно

    return (
        <Container maxW='768px' pl='32px' pr='32px' position='relative' zIndex='10'>
            <Flex justify='space-between' bg='red'>
                <Flex width='94px' height='48px' justify='center'>
                    <img src={logo} alt="Logo" />
                </Flex>
                <Flex>
                    {isLogin ? <UserNav /> : <AuthNav />}
                    <IconButton onClick={() => setActive()} variant='unstyled' icon={active ? <CloseIcon w='20px' h='20px' /> : <HamburgerIcon w='30px' h='20px' />} />
                </Flex>
            </Flex>
        </Container>
    )
}
