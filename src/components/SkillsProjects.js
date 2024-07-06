// // import React from 'react'
// // import { Box, Container, Flex, Heading, Text, Wrap } from '@chakra-ui/react'
// // import Projects from './Projects'
// // import CustomSkillTag from './utils/CustomSkillTag'
// // import FrameworkTag from './utils/FrameworkTag'
// // import ToolTag from './utils/ToolTag'

// // export default function SkillsProjects() {
// //     return (
// //         <Container maxW={'7xl'} alignItems='center' my={5}>

// //             <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>

// //                 <Box me={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
// //                     <Heading>
// //                         Projects
// //                     </Heading>
// //                     <Projects />
// //                 </Box>


// //                 <Flex id='skills' width={['md', 'md', 'md']} flexDir={'column'} justifyContent='start' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>

// //                     <Heading textAlign={'start'}>Skills</Heading>

// //                     <Text fontSize={'sm'} textAlign='start'>
// //                         My toolkit, to power my projects.
// //                     </Text>

// //                     <Box my={5}>
// //                         <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Programming Languages</Heading>

// //                         <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
// //                         {/* Icons  */}

// //                         <Wrap>
// //                             <CustomSkillTag skill={'Python'} />
// //                             <CustomSkillTag skill={'Javascript'} />
// //                             <CustomSkillTag skill={'Java'} />
// //                             <CustomSkillTag skill={'HTML'} />
// //                             <CustomSkillTag skill={'CSS'} />
// //                         </Wrap>
// //                     </Box>
// //                     <Box my={2}>
// //                         <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Frameworks</Heading>
// //                         <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
// //                         <Wrap>
// //                             <FrameworkTag skill={'Express JS'} />
// //                             <FrameworkTag skill={'React JS'} />
// //                             <FrameworkTag skill={'Bootstrap'} />
// //                             <FrameworkTag skill={'Redux'} />
// //                         </Wrap>

// //                     </Box>
// //                     <Box my={5}>
// //                         <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Other Tools</Heading>

// //                         <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />

// //                         <Wrap>
// //                             <ToolTag skill={'Postman'} />
// //                             <ToolTag skill={'VS Code'} />
// //                             <ToolTag skill={'NetBeans IDE'} />
// //                             <ToolTag skill={'Git'} />
// //                             <ToolTag skill={'Github'} />
// //                             <ToolTag skill={'Jupyter Notebook'} />
// //                             <ToolTag skill={'Figma'} />
// //                             <ToolTag skill={'Balsamiq'} />
// //                             <ToolTag skill={'Moqups'} />

// //                         </Wrap>

// //                     </Box>
// //                 </Flex>
// //             </Flex>
// //         </Container>
// //     )
// // }
// import React from 'react';
// import { Box, Container, Flex, Heading, Text, Wrap } from '@chakra-ui/react';
// import Projects from './Projects';
// import CustomSkillTag from './utils/CustomSkillTag';
// import FrameworkTag from './utils/FrameworkTag';
// import ToolTag from './utils/ToolTag';

// export default function SkillsProjects() {
//     return (
//         <Container maxW={'7xl'} alignItems='center' my={5}>
//             <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>
//                 <Box me={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
//                     <Heading>
//                         Projects
//                     </Heading>
//                     <Projects />
//                 </Box>

//                 <Flex id='skills' width={['md', 'md', 'md']} flexDir={'column'} justifyContent='start' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
//                     <Heading textAlign={'start'}>Skills</Heading>
//                     <Text fontSize={'sm'} textAlign='start'>
//                         My toolkit, to power my projects.
//                     </Text>

//                     <Box my={5}>
//                         <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Programming Languages</Heading>
//                         <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
//                         {/* Icons  */}
//                         <Wrap>
//                             <CustomSkillTag skill={'Python'} />
//                             <CustomSkillTag skill={'Javascript'} />
//                             <CustomSkillTag skill={'Java'} />
//                             <CustomSkillTag skill={'HTML'} />
//                             <CustomSkillTag skill={'CSS'} />
//                         </Wrap>
//                     </Box>

//                     <Box my={2}>
//                         <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Frameworks</Heading>
//                         <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
//                         <Wrap>
//                             <FrameworkTag skill={'Express JS'} />
//                             <FrameworkTag skill={'React JS'} />
//                             <FrameworkTag skill={'Bootstrap'} />
//                             <FrameworkTag skill={'Redux'} />
//                         </Wrap>
//                     </Box>

//                     <Box my={5}>
//                         <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Data Processing & AI Libraries</Heading>
//                         <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />
//                         <Wrap>
//                             <ToolTag skill={'matplotlib'} />
//                             <ToolTag skill={'pandas'} />
//                             <ToolTag skill={'numpy'} />
//                             <ToolTag skill={'TensorFlow'} />
//                             <ToolTag skill={'seaborn'} />
//                             <ToolTag skill={'keras'} />
//                             <ToolTag skill={'Scikit-Learn'} />
//                             <ToolTag skill={'pytorch'} />
//                             <ToolTag skill={'openCV'} />
//                         </Wrap>
//                     </Box>

//                     <Box my={5}>
//                         <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Database</Heading>
//                         <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />
//                         <Wrap>
//                             <ToolTag skill={'Oracle SQL'} />
//                             <ToolTag skill={'MySQL'} />
//                             <ToolTag skill={'MS SQL Server'} />
//                             <ToolTag skill={'MongoDB'} />
//                         </Wrap>
//                     </Box>

//                     <Box my={5}>
//                         <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Other Tools</Heading>
//                         <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />
//                         <Wrap>
//                             <ToolTag skill={'Postman'} />
//                             <ToolTag skill={'VS Code'} />
//                             <ToolTag skill={'NetBeans IDE'} />
//                             <ToolTag skill={'Git'} />
//                             <ToolTag skill={'Github'} />
//                             <ToolTag skill={'Jupyter Notebook'} />
//                             <ToolTag skill={'Figma'} />
//                             <ToolTag skill={'Balsamiq'} />
//                             <ToolTag skill={'Moqups'} />
//                         </Wrap>
//                     </Box>
//                 </Flex>
//             </Flex>
//         </Container>
//     );
// }
import React from 'react';
import { Box, Container, Flex, Heading, Text, Wrap } from '@chakra-ui/react';
import Projects from './Projects';
import CustomSkillTag from './utils/CustomSkillTag';
import FrameworkTag from './utils/FrameworkTag';
import ToolTag from './utils/ToolTag';

export default function SkillsProjects() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>
            <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>
                <Box me={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                        Projects
                    </Heading>
                    <Projects />
                </Box>

                <Flex id='skills' width={['md', 'md', 'md']} flexDir={'column'} justifyContent='start' bgColor={'white'} color='black' maxHeight='4xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10} overflowY={'auto'}>
                    <Heading textAlign={'start'}>Skills</Heading>
                    <Text fontSize={'sm'} textAlign='start'>
                        My toolkit, to power my projects.
                    </Text>

                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Programming Languages</Heading>
                        <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
                        {/* Icons  */}
                        <Wrap>
                            <CustomSkillTag skill={'Python'} />
                            <CustomSkillTag skill={'Javascript'} />
                            <CustomSkillTag skill={'Java'} />
                            <CustomSkillTag skill={'HTML'} />
                            <CustomSkillTag skill={'CSS'} />
                        </Wrap>
                    </Box>

                    <Box my={2}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Frameworks</Heading>
                        <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
                        <Wrap>
                            <FrameworkTag skill={'Express JS'} />
                            <FrameworkTag skill={'React JS'} />
                            <FrameworkTag skill={'Bootstrap'} />
                            <FrameworkTag skill={'Redux'} />
                        </Wrap>
                    </Box>

                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Data Processing & AI Libraries</Heading>
                        <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />
                        <Wrap>
                            <ToolTag skill={'matplotlib'} />
                            <ToolTag skill={'pandas'} />
                            <ToolTag skill={'numpy'} />
                            <ToolTag skill={'TensorFlow'} />
                            <ToolTag skill={'seaborn'} />
                            <ToolTag skill={'keras'} />
                            <ToolTag skill={'Scikit-Learn'} />
                            <ToolTag skill={'pytorch'} />
                            <ToolTag skill={'openCV'} />
                        </Wrap>
                    </Box>

                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Database</Heading>
                        <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />
                        <Wrap>
                            <ToolTag skill={'Oracle SQL'} />
                            <ToolTag skill={'MySQL'} />
                            <ToolTag skill={'MS SQL Server'} />
                            <ToolTag skill={'MongoDB'} />
                        </Wrap>
                    </Box>

                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Other Tools</Heading>
                        <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />
                        <Wrap>
                            <ToolTag skill={'Postman'} />
                            <ToolTag skill={'VS Code'} />
                            <ToolTag skill={'NetBeans IDE'} />
                            <ToolTag skill={'Git'} />
                            <ToolTag skill={'Github'} />
                            <ToolTag skill={'Jupyter Notebook'} />
                            <ToolTag skill={'Figma'} />
                            <ToolTag skill={'Balsamiq'} />
                            <ToolTag skill={'Moqups'} />
                        </Wrap>
                    </Box>
                </Flex>
            </Flex>
        </Container>
    );
}

