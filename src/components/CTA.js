import { Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export default function CTA() {
    return (

        <Container id='freelance' as="section" maxW='7xl' py={{ base: '10', md: '12' }} my={{ base: '10', md: '12' }} bg='white' borderRadius='20' alignItems='center'>
            <Stack spacing={{ base: '8', md: '10' }}>
                <Stack spacing={{ base: '4', md: '5' }} align="center">
                    <Heading size={useBreakpointValue({ base: 'lg', md: 'xl' , lg : '2xl' })} fontWeight='800' color={'primary.800'}>Let's connect and build something amazing!</Heading>
                    <Text color="gray.700" maxW="2xl" textAlign="center" fontSize="md">
                    As a Software Developer with expertise in Generative AI, I create impactful AI-driven solutions. Proficient in Python and Java, I work with frameworks like LangChain and TensorFlow. I also excel in React.js and Next.js for dynamic front-end development and robust backend systems using Node.js and Express.js.                    </Text>
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