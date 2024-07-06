import { Box, ButtonGroup, Container, Flex, Heading, HStack, IconButton, Image, Tag, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import myImage from '../images/mylogo.png';
import Education from './Education';

export default function Banner() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>
            <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>
                <Flex width={['md', 'md', '2xl']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Box>
                        <Flex alignItems={'center'} justifyContent='center'>
                            <Image borderColor={'gray.100'} src={myImage} width='32' />
                        </Flex>

                        <Heading textAlign={'center'}>Indrayani</Heading>

                        <Text fontSize={'sm'} textAlign='center'>
                            A passionate Full Stack Developer with a knack for blending <strong>DESIGN</strong> and <strong>FUNCTIONALITY</strong>.
                        </Text>

                        <VStack my={4}>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>Full Stack</Tag>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>UI/UX</Tag>
                        </VStack>
                        <Box orientation='horizontal' bgColor='gray.300' my={4} height={0.2} />
                        {/* Icons */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box me={2}>
                                    <IconButton 
                                        shadow={'md'} 
                                        variant={'ghost'} 
                                        border='1px solid' 
                                        borderColor={'gray.300'}
                                        as="a"
                                        href="mailto:metlakuntaindrayani@gmail.com"
                                        aria-label="Email"
                                    >
                                        <FaEnvelope />
                                    </IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Email</Text>
                                    <Text fontWeight={'600'}>Get in Touch</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton 
                                        shadow={'md'} 
                                        variant={'ghost'} 
                                        border='1px solid' 
                                        borderColor={'gray.300'}
                                        as="a"
                                        href="https://github.com/Indrayani-Metlakunta"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Github"
                                    >
                                        <FaGithub />
                                    </IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Github</Text>
                                    <Text fontWeight={'600'}>Check Out My Projects</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton 
                                        shadow={'md'} 
                                        variant={'ghost'} 
                                        border='1px solid' 
                                        borderColor={'gray.300'}
                                        as="a"
                                        href="https://www.linkedin.com/in/indrayani-metlakunta/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Linkedin"
                                    >
                                        <FaLinkedin />
                                    </IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Linkedin</Text>
                                    <Text fontWeight={'600'}>Connect with Me!</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </Box>

                    <ButtonGroup justifyContent={'center'} alignItems={'center'} variant='ghost' spacing={1.9}>
                        <IconButton 
                            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
                            as="a"
                            href="mailto:metlakuntaindrayani@gmail.com"
                            aria-label="Email"
                        >
                            <FaEnvelope size={24} />
                        </IconButton>
                        <IconButton 
                            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
                            as="a"
                            href="https://github.com/Indrayani-Metlakunta"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"
                        >
                            <FaGithub size={24} />
                        </IconButton>
                        <IconButton 
                            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
                            as="a"
                            href="https://www.linkedin.com/in/indrayani-metlakunta/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin"
                        >
                            <FaLinkedin size={24} />
                        </IconButton>
                    </ButtonGroup>
                </Flex>
                <Box ms={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                        Education
                    </Heading>
                    <Education />
                </Box>
            </Flex>
        </Container>
    )
}
