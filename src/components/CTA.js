import { Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export default function CTA() {
    return (

        <Container id='freelance' as="section" maxW='7xl' py={{ base: '10', md: '12' }} my={{ base: '10', md: '12' }} bg='white' borderRadius='20' alignItems='center'>
            <Stack spacing={{ base: '8', md: '10' }}>
                <Stack spacing={{ base: '4', md: '5' }} align="center">
                    <Heading size={useBreakpointValue({ base: 'lg', md: 'xl' , lg : '2xl' })} fontWeight='800' color={'primary.800'}>Let's connect and build something amazing!</Heading>
                    <Text color="gray.700" maxW="2xl" textAlign="center" fontSize="md">
                    As a versatile web developer with a Master’s in Information Systems and a Bachelor's in Computer Science, I blend frontend aesthetics with backend logic. Proficient in HTML, CSS, JavaScript, and React for dynamic, responsive websites, I also excel in Node.js, Express.js, and SQL for robust backend systems.                    <br/>
                    <br />
                    </Text>
                </Stack>
                <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
                    <Button as='a' variant={'ghost'} size='lg' bg={'primary.800'} color='white'
                        href={'mailto:metlakuntaindrayani@gmail.com'}
                        transition='all ease-in 200ms'
                        _hover={{
                            bg: 'primary.900',
                            textDecoration: 'none',
                            px: '10',
                            transition: 'all ease-in 200ms'
                        }}>
                        Send an Email
                    </Button>
                </Stack>
            </Stack>
        </Container>

    );
}