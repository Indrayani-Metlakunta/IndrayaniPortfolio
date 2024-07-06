import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export const Footer = () => (
  <Container maxW={'100%'} as="footer" role="contentinfo" py={{ base: '8', md: '8' }} bg='white' color={'primary.800'}>
    <Stack justify="center" spacing={{ base: '4', md: '5' }}>
      <Stack justify="center" direction="row" align="center">
        <ButtonGroup justifyContent={'center'} alignItems={'center'} variant='ghost' spacing={1.9}>
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/indrayani-metlakunta/"
            aria-label="LinkedIn"
            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
          >
            <FaLinkedin size={24} />
          </IconButton>
          <IconButton
            as="a"
            href="https://github.com/your-https://github.com/Indrayani-Metlakunta"
            aria-label="GitHub"
            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
          >
            <FaGithub size={24} />
          </IconButton>
          <IconButton
            as="a"
            href="mailto:metlakuntaindrayani@gmail.com"
            aria-label="Email"
            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
          >
            <FaEnvelope size={24} />
          </IconButton>
        </ButtonGroup>
      </Stack>
      <Text textAlign={'center'} fontSize='20px' fontWeight={'bold'} color='gray.600'>Indrayani</Text>
    </Stack>
  </Container>
)
