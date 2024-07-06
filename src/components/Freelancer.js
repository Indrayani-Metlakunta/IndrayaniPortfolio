import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export default function Freelancer() {
    return (

        <Box id='freelance' as="section" >
            <Container py={{ base: '16', md: '24' }}>
                <Stack spacing={{ base: '8', md: '10' }}>
                    <Stack spacing={{ base: '4', md: '5' }} align="center">
                        <Heading size={useBreakpointValue({ base: 'sm', md: 'lg' })} color={'primary.800'}>Let's connect and build something amazing!</Heading>
                        <Text color="gray.500" maxW="2xl" textAlign="center" fontSize="xl">
                       

"As a versatile web developer with a Master’s in Information Systems and a Bachelor's in Computer Science, I blend frontend aesthetics with backend logic. Proficient in HTML, CSS, JavaScript, and React for dynamic, responsive websites, I also excel in Node.js, Express.js, and SQL for robust backend systems."                            <br/>
                        </Text>
                    </Stack>
                    <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">

                        <Button variant={'primary'} size='lg' bg={'primary.700'}
                            href={'#'}
                            _hover={{
                                bg: 'primary.900',
                            }}>
                            Send an Email                        
                            </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}