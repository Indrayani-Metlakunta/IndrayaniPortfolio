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
        title: 'CareWing',
        description: `CareWing bridges NGOs and volunteers for child welfare. Users can teach courses, donate items, and support fund-raising campaigns for NGOs. The platform facilitates local connections, empowering communities through educational and material support.`
    },
    {
        id: 2,
        date: 'April, 2024',
        title: 'UniKart',
        description: `UniKart is an integrated e-commerce platform developed to consolidate shopping features across multiple stores, significantly improving user efficiency and enhancing the shopping experience. Key features include real-time price alerts and personalized recommendations, which boosted user engagement by 25%. The platform was developed using Figma, Mocqup, and Balsamiq, and was launched within four months, resulting in a 20% increase in team productivity.`
    },
    {
        id: 3,
        date: 'July 2023',
        title: 'Anti-Fraud Model for Internet Loans',
        description:
       ' Developed an advanced anti-fraud model for internet loan applications using a deep learning model on the Lending Club dataset. Enhanced data preprocessing with techniques like Random Forest imputation and SMOTE, reducing false positives and improving fraud detection efficiency.'    },
       {
        id: 4,
        date: 'Jan, 2023',
        title: 'Sentiment Analysis of Restaurant Reviews',
        description: `Developed a sentiment analysis model using Python and VADER to classify over 500,000 restaurant reviews. Designed and implemented a review categorization system, optimizing data processing workflows for better efficiency.`,
    },
];

const Projects = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

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

            {milestones.map((milestone) => (
                <Flex key={milestone.id} mb="10px">
                    {/* Desktop view(left card) */}
                    {isDesktop && milestone.id % 2 === 0 && (
                        <>
                            <EmptyCard />
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}

                    {/* Mobile view */}
                    {isMobile && (
                        <>
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}

                    {/* Desktop view(right card) */}
                    {isDesktop && milestone.id % 2 !== 0 && (
                        <>
                            <Card {...milestone} />

                            <LineWithDot />
                            <EmptyCard />
                        </>
                    )}
                </Flex>
            ))}
        </Container>
    );
};



const Card = ({ id, title, description, date }) => {
    // For even id show card on left side
    // For odd id show card on right side
    const isEvenId = id % 2 === 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';

    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        leftValue = '-15px';
        rightValue = 'unset';
        borderWidthValue = '15px 15px 15px 0';
    }

    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.300', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: borderWidthValue,
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
        >
            <Box>
                {/* <Text fontSize="md" color={isEvenId ? 'primary.800' : 'blue.700'}>
                    {date}
                </Text>

                <VStack spacing={2} mb={3} textAlign="left">
                    <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
                        {title}
                    </chakra.h1>
                    <Text fontSize="sm">{description}</Text>
                </VStack>

                <HStack>
                    <Tag variant={'subtle'}>React.js</Tag>
                    <Tag variant={'subtle'}>Node.js</Tag>
                    <Tag variant={'subtle'}>TypeScript</Tag>


                </HStack>
            </Box>
        </HStack>
    );
}; */}
 <Text fontSize="md" color={isEvenId ? 'primary.800' : 'blue.700'}>
                    {date}
                </Text>
                <VStack spacing={2} mb={3} textAlign="left">
                    <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
                        {title}
                    </chakra.h1>
                    <Text fontSize="sm">{description}</Text>
                </VStack>
                <HStack spacing={2}>
                    {id === 1 && (
                        <>
                            <Tag variant={'subtle'}>React.js</Tag>
                            <Tag variant={'subtle'}>Node.js</Tag>
                            <Tag variant={'subtle'}>TypeScript</Tag>
                        </>
                    )}
                    {id === 2 && (
                        <>
                            <Tag variant={'subtle'}>Figma</Tag>
                            <Tag variant={'subtle'}>Mocqup</Tag>
                            <Tag variant={'subtle'}>Balsamiq</Tag>
                        </>
                    )}
                    {id === 3 && (
                        <>
                            <Tag variant={'subtle'}>Python</Tag>
                            <Tag variant={'subtle'}>ML</Tag>
                            <Tag variant={'subtle'}>Data Analysis</Tag>
                        </>
                    )}
                    {id === 4 && (
                        <>
                            <Tag variant={'subtle'}>Python</Tag>
                            <Tag variant={'subtle'}>VADER</Tag>
                            <Tag variant={'subtle'}>NLP</Tag>
                            <Tag variant={'subtle'}>ML</Tag>
                        </>
                    )}
                </HStack>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex id = "projects"
            pos="relative"
            alignItems="center"
            mr={{ base: '40px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.400', 'gray.700')}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    right="0"
                    width="100%"
                    height="100%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    bg={useColorModeValue('primary.800', 'gray.200')}
                    borderRadius="100px"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Projects;
