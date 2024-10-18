// // // import React from 'react';
// // // import {
// // //     Box,
// // //     chakra,
// // //     Container,
// // //     Text,
// // //     HStack,
// // //     VStack,
// // //     Flex,
// // //     useColorModeValue,
// // //     useBreakpointValue,
// // //     Tag
// // // } from '@chakra-ui/react';

// // // const milestones = [
// // //     {
// // //         id: 1,
// // //         date: 'April, 2024',
// // //         title: 'CareWing',
// // //         description: `CareWing bridges NGOs and volunteers for child welfare. Users can teach courses, donate items, and support fund-raising campaigns for NGOs. The platform facilitates local connections, empowering communities through educational and material support.`
// // //     },
// // //     {
// // //         id: 2,
// // //         date: 'April, 2024',
// // //         title: 'UniKart',
// // //         description: `UniKart is an integrated e-commerce platform developed to consolidate shopping features across multiple stores, significantly improving user efficiency and enhancing the shopping experience. Key features include real-time price alerts and personalized recommendations, which boosted user engagement by 25%. The platform was developed using Figma, Mocqup, and Balsamiq, and was launched within four months, resulting in a 20% increase in team productivity.`
// // //     },
// // //     {
// // //         id: 3,
// // //         date: 'July 2023',
// // //         title: 'Anti-Fraud Model for Internet Loans',
// // //         description:
// // //        ' Developed an advanced anti-fraud model for internet loan applications using a deep learning model on the Lending Club dataset. Enhanced data preprocessing with techniques like Random Forest imputation and SMOTE, reducing false positives and improving fraud detection efficiency.'    },
// // //        {
// // //         id: 4,
// // //         date: 'Jan, 2023',
// // //         title: 'Sentiment Analysis of Restaurant Reviews',
// // //         description: `Developed a sentiment analysis model using Python and VADER to classify over 500,000 restaurant reviews. Designed and implemented a review categorization system, optimizing data processing workflows for better efficiency.`,
// // //     },
// // // ];

// // // const Projects = () => {
// // //     const isMobile = useBreakpointValue({ base: true, md: false });
// // //     const isDesktop = useBreakpointValue({ base: false, md: true });

// // //     return (
// // //         <Container maxWidth="7xl" maxHeight={'3xl'} overflowX={'auto'} p={{ base: 2, sm: 10 }}
// // //             my={2}
// // //             css={{
// // //                 '&::-webkit-scrollbar': {
// // //                     marginTop: '8px',
// // //                     width: '8px',
// // //                     height: '8px',
// // //                 },
// // //                 '&::-webkit-scrollbar-track': {
// // //                     marginTop: '8px',
// // //                     width: '2px',
// // //                     height: '4px',
// // //                 },
// // //                 '&::-webkit-scrollbar-thumb': {
// // //                     marginTop: '8px',
// // //                     background: '#121212',
// // //                     borderRadius: '12px',
// // //                 },
// // //             }}
// // //         >

// // //             {milestones.map((milestone) => (
// // //                 <Flex key={milestone.id} mb="10px">
// // //                     {/* Desktop view(left card) */}
// // //                     {isDesktop && milestone.id % 2 === 0 && (
// // //                         <>
// // //                             <EmptyCard />
// // //                             <LineWithDot />
// // //                             <Card {...milestone} />
// // //                         </>
// // //                     )}

// // //                     {/* Mobile view */}
// // //                     {isMobile && (
// // //                         <>
// // //                             <LineWithDot />
// // //                             <Card {...milestone} />
// // //                         </>
// // //                     )}

// // //                     {/* Desktop view(right card) */}
// // //                     {isDesktop && milestone.id % 2 !== 0 && (
// // //                         <>
// // //                             <Card {...milestone} />

// // //                             <LineWithDot />
// // //                             <EmptyCard />
// // //                         </>
// // //                     )}
// // //                 </Flex>
// // //             ))}
// // //         </Container>
// // //     );
// // // };



// // // const Card = ({ id, title, description, date }) => {
// // //     // For even id show card on left side
// // //     // For odd id show card on right side
// // //     const isEvenId = id % 2 === 0;
// // //     let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
// // //     let leftValue = isEvenId ? '-15px' : 'unset';
// // //     let rightValue = isEvenId ? 'unset' : '-15px';

// // //     const isMobile = useBreakpointValue({ base: true, md: false });
// // //     if (isMobile) {
// // //         leftValue = '-15px';
// // //         rightValue = 'unset';
// // //         borderWidthValue = '15px 15px 15px 0';
// // //     }

// // //     return (
// // //         <HStack
// // //             flex={1}
// // //             p={{ base: 3, sm: 6 }}
// // //             bg={useColorModeValue('gray.300', 'gray.800')}
// // //             spacing={5}
// // //             rounded="lg"
// // //             alignItems="center"
// // //             pos="relative"
// // //             _before={{
// // //                 content: `""`,
// // //                 w: '0',
// // //                 h: '0',
// // //                 borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
// // //                 borderStyle: 'solid',
// // //                 borderWidth: borderWidthValue,
// // //                 position: 'absolute',
// // //                 left: leftValue,
// // //                 right: rightValue,
// // //                 display: 'block'
// // //             }}
// // //         >
// // //             <Box>
// // //                 {/* <Text fontSize="md" color={isEvenId ? 'primary.800' : 'blue.700'}>
// // //                     {date}
// // //                 </Text>

// // //                 <VStack spacing={2} mb={3} textAlign="left">
// // //                     <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
// // //                         {title}
// // //                     </chakra.h1>
// // //                     <Text fontSize="sm">{description}</Text>
// // //                 </VStack>

// // //                 <HStack>
// // //                     <Tag variant={'subtle'}>React.js</Tag>
// // //                     <Tag variant={'subtle'}>Node.js</Tag>
// // //                     <Tag variant={'subtle'}>TypeScript</Tag>


// // //                 </HStack>
// // //             </Box>
// // //         </HStack>
// // //     );
// // // }; */}
// // //  <Text fontSize="md" color={isEvenId ? 'primary.800' : 'blue.700'}>
// // //                     {date}
// // //                 </Text>
// // //                 <VStack spacing={2} mb={3} textAlign="left">
// // //                     <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
// // //                         {title}
// // //                     </chakra.h1>
// // //                     <Text fontSize="sm">{description}</Text>
// // //                 </VStack>
// // //                 <HStack spacing={2}>
// // //                     {id === 1 && (
// // //                         <>
// // //                             <Tag variant={'subtle'}>React.js</Tag>
// // //                             <Tag variant={'subtle'}>Node.js</Tag>
// // //                             <Tag variant={'subtle'}>TypeScript</Tag>
// // //                         </>
// // //                     )}
// // //                     {id === 2 && (
// // //                         <>
// // //                             <Tag variant={'subtle'}>Figma</Tag>
// // //                             <Tag variant={'subtle'}>Mocqup</Tag>
// // //                             <Tag variant={'subtle'}>Balsamiq</Tag>
// // //                         </>
// // //                     )}
// // //                     {id === 3 && (
// // //                         <>
// // //                             <Tag variant={'subtle'}>Python</Tag>
// // //                             <Tag variant={'subtle'}>ML</Tag>
// // //                             <Tag variant={'subtle'}>Data Analysis</Tag>
// // //                         </>
// // //                     )}
// // //                     {id === 4 && (
// // //                         <>
// // //                             <Tag variant={'subtle'}>Python</Tag>
// // //                             <Tag variant={'subtle'}>VADER</Tag>
// // //                             <Tag variant={'subtle'}>NLP</Tag>
// // //                             <Tag variant={'subtle'}>ML</Tag>
// // //                         </>
// // //                     )}
// // //                 </HStack>
// // //             </Box>
// // //         </HStack>
// // //     );
// // // };

// // // const LineWithDot = () => {
// // //     return (
// // //         <Flex id = "projects"
// // //             pos="relative"
// // //             alignItems="center"
// // //             mr={{ base: '40px', md: '40px' }}
// // //             ml={{ base: '0', md: '40px' }}
// // //         >
// // //             <chakra.span
// // //                 position="absolute"
// // //                 left="50%"
// // //                 height="calc(100% + 10px)"
// // //                 border="1px solid"
// // //                 borderColor={useColorModeValue('gray.400', 'gray.700')}
// // //                 top="0px"
// // //             ></chakra.span>
// // //             <Box pos="relative" p="10px">
// // //                 <Box
// // //                     pos="absolute"
// // //                     top="0"
// // //                     left="0"
// // //                     bottom="0"
// // //                     right="0"
// // //                     width="100%"
// // //                     height="100%"
// // //                     backgroundSize="cover"
// // //                     backgroundRepeat="no-repeat"
// // //                     backgroundPosition="center center"
// // //                     bg={useColorModeValue('primary.800', 'gray.200')}
// // //                     borderRadius="100px"
// // //                     backgroundImage="none"
// // //                     opacity={1}
// // //                 ></Box>
// // //             </Box>
// // //         </Flex>
// // //     );
// // // };

// // // const EmptyCard = () => {
// // //     return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
// // // };

// // // export default Projects;
// // import React from 'react';
// // import {
// //     Box,
// //     chakra,
// //     Container,
// //     Text,
// //     HStack,
// //     VStack,
// //     Flex,
// //     useColorModeValue,
// //     useBreakpointValue,
// //     Tag
// // } from '@chakra-ui/react';

// // const milestones = [
// //     {
// //         id: 1,
// //         date: 'April, 2024',
// //         dateValue: '2024-04',
// //         title: 'CareWing',
// //         description: `CareWing bridges NGOs and volunteers for child welfare. Users can teach courses, donate items, and support fund-raising campaigns for NGOs. The platform facilitates local connections, empowering communities through educational and material support.`,
// //         techStack: ['React.js', 'Node.js', 'TypeScript']
// //     },
// //     {
// //         id: 2,
// //         date: 'April, 2024',
// //         dateValue: '2024-04',
// //         title: 'UniKart',
// //         description: `UniKart is an integrated e-commerce platform developed to consolidate shopping features across multiple stores, significantly improving user efficiency and enhancing the shopping experience. Key features include real-time price alerts and personalized recommendations, which boosted user engagement by 25%.`,
// //         techStack: ['Figma', 'Mocqup', 'Balsamiq']
// //     },
// //     {
// //         id: 3,
// //         date: 'July, 2023',
// //         dateValue: '2023-07',
// //         title: 'Anti-Fraud Model for Internet Loans',
// //         description: 'Developed an advanced anti-fraud model for internet loan applications using a deep learning model on the Lending Club dataset. Enhanced data preprocessing with techniques like Random Forest imputation and SMOTE, reducing false positives and improving fraud detection efficiency.',
// //         techStack: ['Python', 'ML', 'Data Analysis']
// //     },
// //     {
// //         id: 4,
// //         date: 'Jan, 2023',
// //         dateValue: '2023-01',
// //         title: 'Sentiment Analysis of Restaurant Reviews',
// //         description: `Developed a sentiment analysis model using Python and VADER to classify over 500,000 restaurant reviews. Designed and implemented a review categorization system, optimizing data processing workflows for better efficiency.`,
// //         techStack: ['Python', 'VADER', 'NLP', 'ML']
// //     },
// //     {
// //         id: 5,
// //         date: 'September, 2024',
// //         dateValue: '2024-09',
// //         title: 'Generative AI RAG Project: Driving Rules & Regulations Assistant',
// //         description: `Developed a generative AI retrieval-augmented generation (RAG) application using Python, LangChain, GPT-4, and Streamlit that interprets user queries about driving rules and provides accurate, contextually relevant responses using a comprehensive driving manual.`,
// //         techStack: ['Python', 'LangChain', 'GPT-4', 'Streamlit']
// //     },
// //     {
// //         id: 6,
// //         date: 'July, 2024',
// //         dateValue: '2024-07',
// //         title: 'Predicting Term Deposit Subscriptions',
// //         description: `Developed and implemented classification models using Decision Tree, Logistic Regression, and Random Forest algorithms to predict customer subscription to term deposits, improving model accuracy by 95%. Leveraged customer data from bank marketing campaigns to analyze key features influencing customer decisions, driving targeted marketing strategies.`,
// //         techStack: ['Python', 'ML', 'Logistic Regression', 'Random Forest']
// //     },
// //     {
// //         id: 7,
// //         date: 'May, 2024',
// //         dateValue: '2024-05',
// //         title: 'Prediction of House Prices',
// //         description: `Analyzed and predicted house prices using various features from the Innercity house price dataset, applying machine learning models such as Regression and Ensemble techniques. Implemented grid search algorithm to optimize hyperparameters, improving model accuracy and performance in house price prediction.`,
// //         techStack: ['Python', 'Regression', 'Ensemble', 'Grid Search']
// //     },
// // ];

// // const Projects = () => {
// //     // const isMobile = useBreakpointValue({ base: true, md: false });
// //     const isDesktop = useBreakpointValue({ base: false, md: true });

// //     // Sort milestones by dateValue in descending order
// //     const sortedMilestones = [...milestones].sort((a, b) => new Date(b.dateValue) - new Date(a.dateValue));

// //     return (
// //         <Container maxWidth="7xl" maxHeight={'3xl'} overflowX={'auto'} p={{ base: 2, sm: 10 }}
// //             my={2}
// //             css={{
// //                 '&::-webkit-scrollbar': {
// //                     marginTop: '8px',
// //                     width: '8px',
// //                     height: '8px',
// //                 },
// //                 '&::-webkit-scrollbar-track': {
// //                     marginTop: '8px',
// //                     width: '2px',
// //                     height: '4px',
// //                 },
// //                 '&::-webkit-scrollbar-thumb': {
// //                     marginTop: '8px',
// //                     background: '#121212',
// //                     borderRadius: '12px',
// //                 },
// //             }}
// //         >
// //             {sortedMilestones.map((milestone, index) => (
// //                 <Flex 
// //                     key={milestone.id} 
// //                     mb="10px" 
// //                     align="center" 
// //                     justifyContent={isDesktop && index % 2 === 0 ? 'flex-end' : 'flex-start'}
// //                     position="relative"
// //                 >
// //                     {/* Line with Dot */}
// //                     <LineWithDot />

// //                     {/* Card */}
// //                     <Card {...milestone} />
// //                 </Flex>
// //             ))}
// //         </Container>
// //     );
// // };

// // const Card = ({ id, title, description, date, techStack }) => {
// //     return (
// //         <HStack
// //             flex={1}
// //             p={{ base: 3, sm: 6 }}
// //             bg={useColorModeValue('gray.300', 'gray.800')}
// //             spacing={5}
// //             rounded="lg"
// //             alignItems="center"
// //             pos="relative"
// //             maxWidth="48%"
// //         >
// //             <Box>
// //                 <Text fontSize="md" color={'primary.800'}>
// //                     {date}
// //                 </Text>
// //                 <VStack spacing={2} mb={3} textAlign="left">
// //                     <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
// //                         {title}
// //                     </chakra.h1>
// //                     <Text fontSize="sm">{description}</Text>
// //                 </VStack>
// //                 <HStack spacing={2}>
// //                     {techStack.map((tech, index) => (
// //                         <Tag key={index} variant={'subtle'}>
// //                             {tech}
// //                         </Tag>
// //                     ))}
// //                 </HStack>
// //             </Box>
// //         </HStack>
// //     );
// // };

// // const LineWithDot = () => {
// //     return (
// //         <Flex
// //             pos="absolute"
// //             left="50%"
// //             height="100%"
// //             alignItems="center"
// //             justifyContent="center"
// //         >
// //             <Box
// //                 position="absolute"
// //                 top="50%"
// //                 transform="translateY(-50%)"
// //                 width="12px"
// //                 height="12px"
// //                 backgroundColor="blue.500"
// //                 borderRadius="50%"
// //                 zIndex={1}
// //             />
// //             <Box
// //                 position="absolute"
// //                 width="2px"
// //                 height="100%"
// //                 backgroundColor="blue.500"
// //                 top="0"
// //                 zIndex={0}
// //             />
// //         </Flex>
// //     );
// // };

// // export default Projects;
// import React from 'react';
// import {
//     Box,
//     chakra,
//     Container,
//     Text,
//     HStack,
//     VStack,
//     Flex,
//     useColorModeValue,
//     useBreakpointValue,
//     Tag
// } from '@chakra-ui/react';

// const milestones = [
//     {
//         id: 1,
//         date: 'April, 2024',
//         dateValue: '2024-04',
//         title: 'CareWing',
//         description: `CareWing bridges NGOs and volunteers for child welfare. Users can teach courses, donate items, and support fund-raising campaigns for NGOs. The platform facilitates local connections, empowering communities through educational and material support.`,
//         techStack: ['React.js', 'Node.js', 'TypeScript']
//     },
//     {
//         id: 2,
//         date: 'April, 2024',
//         dateValue: '2024-04',
//         title: 'UniKart',
//         description: `UniKart is an integrated e-commerce platform developed to consolidate shopping features across multiple stores, significantly improving user efficiency and enhancing the shopping experience. Key features include real-time price alerts and personalized recommendations, which boosted user engagement by 25%.`,
//         techStack: ['Figma', 'Mocqup', 'Balsamiq']
//     },
//     {
//         id: 3,
//         date: 'July, 2023',
//         dateValue: '2023-07',
//         title: 'Anti-Fraud Model for Internet Loans',
//         description: 'Developed an advanced anti-fraud model for internet loan applications using a deep learning model on the Lending Club dataset. Enhanced data preprocessing with techniques like Random Forest imputation and SMOTE, reducing false positives and improving fraud detection efficiency.',
//         techStack: ['Python', 'ML', 'Data Analysis']
//     },
//     {
//         id: 4,
//         date: 'Jan, 2023',
//         dateValue: '2023-01',
//         title: 'Sentiment Analysis of Restaurant Reviews',
//         description: `Developed a sentiment analysis model using Python and VADER to classify over 500,000 restaurant reviews. Designed and implemented a review categorization system, optimizing data processing workflows for better efficiency.`,
//         techStack: ['Python', 'VADER', 'NLP', 'ML']
//     },
//     {
//         id: 5,
//         date: 'September, 2024',
//         dateValue: '2024-09',
//         title: 'Generative AI RAG Project: Driving Rules & Regulations Assistant',
//         description: `Developed a generative AI retrieval-augmented generation (RAG) application using Python, LangChain, GPT-4, and Streamlit that interprets user queries about driving rules and provides accurate, contextually relevant responses using a comprehensive driving manual.`,
//         techStack: ['Python', 'LangChain', 'GPT-4', 'Streamlit']
//     },
//     {
//         id: 6,
//         date: 'July, 2024',
//         dateValue: '2024-07',
//         title: 'Predicting Term Deposit Subscriptions',
//         description: `Developed and implemented classification models using Decision Tree, Logistic Regression, and Random Forest algorithms to predict customer subscription to term deposits, improving model accuracy by 95%. Leveraged customer data from bank marketing campaigns to analyze key features influencing customer decisions, driving targeted marketing strategies.`,
//         techStack: ['Python', 'ML', 'Logistic Regression', 'Random Forest']
//     },
//     {
//         id: 7,
//         date: 'May, 2024',
//         dateValue: '2024-05',
//         title: 'Prediction of House Prices',
//         description: `Analyzed and predicted house prices using various features from the Innercity house price dataset, applying machine learning models such as Regression and Ensemble techniques. Implemented grid search algorithm to optimize hyperparameters, improving model accuracy and performance in house price prediction.`,
//         techStack: ['Python', 'Regression', 'Ensemble', 'Grid Search']
//     },
//     {
//         id: 8,
//         date: 'October, 2024',
//         dateValue: '2024-10',
//         title: 'Automation of Job Application Process',
//         description: `This project automates the job application process by using OpenAI API for generating cover letters, Selenium for scraping job portals, NLP for resume matching, and Streamlit for building a user-friendly interface to streamline the process.`,
//         techStack: ['OpenAI API', 'Selenium', 'NLP', 'Streamlit']
//     }
// ];

// const Projects = () => {
//     const isDesktop = useBreakpointValue({ base: false, md: true });

//     // Sort milestones by dateValue in descending order
//     const sortedMilestones = [...milestones].sort((a, b) => new Date(b.dateValue) - new Date(a.dateValue));

//     return (
//         <Container maxWidth="7xl" maxHeight={'3xl'} overflowX={'auto'} p={{ base: 2, sm: 10 }}
//             my={2}
//             css={{
//                 '&::-webkit-scrollbar': {
//                     marginTop: '8px',
//                     width: '8px',
//                     height: '8px',
//                 },
//                 '&::-webkit-scrollbar-track': {
//                     marginTop: '8px',
//                     width: '2px',
//                     height: '4px',
//                 },
//                 '&::-webkit-scrollbar-thumb': {
//                     marginTop: '8px',
//                     background: '#121212',
//                     borderRadius: '12px',
//                 },
//             }}
//         >
//             {sortedMilestones.map((milestone, index) => (
//                 <Flex 
//                     key={milestone.id} 
//                     mb="10px" 
//                     align="center" 
//                     justifyContent={isDesktop && index % 2 === 0 ? 'flex-end' : 'flex-start'}
//                     position="relative"
//                 >
//                     {/* Line with Dot */}
//                     <LineWithDot />

//                     {/* Card */}
//                     <Card {...milestone} />
//                 </Flex>
//             ))}
//         </Container>
//     );
// };

// const Card = ({ id, title, description, date, techStack }) => {
//     return (
//         <HStack
//             flex={1}
//             p={{ base: 3, sm: 6 }}
//             bg={useColorModeValue('gray.300', 'gray.800')}
//             spacing={5}
//             rounded="lg"
//             alignItems="center"
//             pos="relative"
//             maxWidth="48%"
//         >
//             <Box>
//                 <Text fontSize="md" color={'primary.800'}>
//                     {date}
//                 </Text>
//                 <VStack spacing={2} mb={3} textAlign="left">
//                     <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
//                         {title}
//                     </chakra.h1>
//                     <Text fontSize="sm">{description}</Text>
//                 </VStack>
//                 <HStack spacing={2}>
//                     {techStack.map((tech, index) => (
//                         <Tag key={index} variant={'subtle'}>
//                             {tech}
//                         </Tag>
//                     ))}
//                 </HStack>
//             </Box>
//         </HStack>
//     );
// };

// const LineWithDot = () => {
//     return (
//         <Flex
//             pos="absolute"
//             left="50%"
//             height="100%"
//             alignItems="center"
//             justifyContent="center"
//         >
//             <Box
//                 position="absolute"
//                 top="50%"
//                 transform="translateY(-50%)"
//                 width="12px"
//                 height="12px"
//                 backgroundColor="blue.500"
//                 borderRadius="50%"
//                 zIndex={1}
//             />
//             <Box
//                 position="absolute"
//                 width="2px"
//                 height="100%"
//                 backgroundColor="blue.500"
//                 top="0"
//                 zIndex={0}
//             />
//         </Flex>
//     );
// };

// export default Projects;
import myfigma from '../images/UniKart.pdf';
import React from 'react';
import {
    Box,
    chakra,
    Container,
    Text,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Tag
} from '@chakra-ui/react';

const milestones = [
    {
        id: 1,
        date: 'April, 2024',
        dateValue: '2024-04',
        title: 'CareWing',
        description: `CareWing bridges NGOs and volunteers for child welfare. Users can teach courses, donate items, and support fund-raising campaigns for NGOs. The platform facilitates local connections, empowering communities through educational and material support.`,
        techStack: ['React.js', 'Node.js', 'TypeScript'],
        link: 'https://github.com/Indrayani-Metlakunta/CareWing'
    },
    {
        id: 2,
        date: 'April, 2024',
        dateValue: '2024-04',
        title: 'UniKart',
        description: `UniKart is an integrated e-commerce platform developed to consolidate shopping features across multiple stores, significantly improving user efficiency and enhancing the shopping experience. Key features include real-time price alerts and personalized recommendations, which boosted user engagement by 25%. The platform was developed using Figma, Mocqup, and Balsamiq, and was launched within four months, resulting in a 20% increase in team productivity.`,
        techStack: ['Figma', 'Mocqup', 'Balsamiq'],
        link: myfigma  
    },
    {
        id: 3,
        date: 'July, 2023',
        dateValue: '2023-07',
        title: 'Anti-Fraud Model for Internet Loans',
        description: 'Developed an advanced anti-fraud model for internet loan applications using a deep learning model on the Lending Club dataset. Enhanced data preprocessing with techniques like Random Forest imputation and SMOTE, reducing false positives and improving fraud detection efficiency.',
        techStack: ['Python', 'ML', 'Data Analysis'],
        link: 'https://your-project-link-here'
    },
    {
        id: 4,
        date: 'Jan, 2023',
        dateValue: '2023-01',
        title: 'Sentiment Analysis of Restaurant Reviews',
        description: `Developed a sentiment analysis model using Python and VADER to classify over 500,000 restaurant reviews. Designed and implemented a review categorization system, optimizing data processing workflows for better efficiency.`,
        techStack: ['Python', 'VADER', 'NLP', 'ML'],
        link: 'https://your-project-link-here'
    },
    {
        id: 5,
        date: 'September, 2024',
        dateValue: '2024-09',
        title: 'Generative AI RAG Project: Driving Rules & Regulations Assistant',
        description: `Developed a generative AI retrieval-augmented generation (RAG) application using Python, LangChain, GPT-4, and Streamlit that interprets user queries about driving rules and provides accurate, contextually relevant responses using a comprehensive driving manual.`,
        techStack: ['Python', 'LangChain', 'GPT-4', 'Streamlit'],
        link: 'https://github.com/Indrayani-Metlakunta/drivingmanualassistant'
    },
    {
        id: 6,
        date: 'July, 2024',
        dateValue: '2024-07',
        title: 'Predicting Term Deposit Subscriptions',
        description: `Developed and implemented classification models using Decision Tree, Logistic Regression, and Random Forest algorithms to predict customer subscription to term deposits, improving model accuracy by 95%. Leveraged customer data from bank marketing campaigns to analyze key features influencing customer decisions, driving targeted marketing strategies.`,
        techStack: ['Python', 'ML', 'Logistic Regression', 'Random Forest'],
        link: 'https://github.com/Indrayani-Metlakunta/Predicting-Term-Deposit-Subscriptions'
    },
    {
        id: 7,
        date: 'May, 2024',
        dateValue: '2024-05',
        title: 'Prediction of House Prices',
        description: `Analyzed and predicted house prices using various features from the Innercity house price dataset, applying machine learning models such as Regression and Ensemble techniques. Implemented grid search algorithm to optimize hyperparameters, improving model accuracy and performance in house price prediction.`,
        techStack: ['Python', 'Regression', 'Ensemble', 'Grid Search'],
        link: 'https://github.com/Indrayani-Metlakunta/House-Price-Prediction'
    },
    {
        id: 8,
        date: 'October, 2024',
        dateValue: '2024-10',
        title: 'Automation of Job Application Process',
        description: `This project automates the job application process by using OpenAI API for generating cover letters, Selenium for scraping job portals, NLP for resume matching, and Streamlit for building a user-friendly interface to streamline the process.`,
        techStack: ['OpenAI API', 'Selenium', 'NLP', 'Streamlit'],
        link: 'https://github.com/Indrayani-Metlakunta/Automation-Of-JobApplicationProcess'
    }
];

const Projects = () => {
    const isDesktop = useBreakpointValue({ base: false, md: true });

    const sortedMilestones = [...milestones].sort((a, b) => new Date(b.dateValue) - new Date(a.dateValue));

    return (
        <Container maxWidth="7xl" maxHeight={'3xl'} overflowX={'auto'} p={{ base: 2, sm: 10 }}
            my={2}
            css={{
                '&::-webkit-scrollbar': {
                    marginTop: '8px',
                    width: '8px',
                    height: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    marginTop: '8px',
                    width: '2px',
                    height: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    marginTop: '8px',
                    background: '#121212',
                    borderRadius: '12px',
                },
            }}
        >
            {sortedMilestones.map((milestone, index) => (
                <Flex 
                    key={milestone.id} 
                    mb="10px" 
                    align="center" 
                    justifyContent={isDesktop && index % 2 === 0 ? 'flex-end' : 'flex-start'}
                    position="relative"
                >
                    {/* Line with Dot */}
                    <LineWithDot />

                    {/* Card */}
                    <Card {...milestone} />
                </Flex>
            ))}
        </Container>
    );
};

const Card = ({ id, title, description, date, techStack, link }) => {
    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.300', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            maxWidth="48%"
        >
            <Box>
                <Text fontSize="md" color={'primary.800'}>
                    {date}
                </Text>
                <VStack spacing={2} mb={3} textAlign="left">
                    <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
                        <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#2b6cb0', textDecoration: 'underline' }}>
                            {title}
                        </a>
                    </chakra.h1>
                    <Text fontSize="sm">{description}</Text>
                </VStack>
                <HStack spacing={2}>
                    {techStack.map((tech, index) => (
                        <Tag key={index} variant={'subtle'}>
                            {tech}
                        </Tag>
                    ))}
                </HStack>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex
            pos="absolute"
            left="50%"
            height="100%"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                position="absolute"
                top="50%"
                transform="translateY(-50%)"
                width="12px"
                height="12px"
                backgroundColor="blue.500"
                borderRadius="50%"
                zIndex={1}
            />
            <Box
                position="absolute"
                width="2px"
                height="100%"
                backgroundColor="blue.500"
                top="0"
                zIndex={0}
            />
        </Flex>
    );
};

export default Projects;
