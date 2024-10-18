import React from 'react';
import { Box, chakra, Container, Text, VStack, Heading } from '@chakra-ui/react';

const blogs = [
    {
        id: 1,
        title: 'What Drives the Creation of New Content by Generative AI?',
        description: 'An insightful dive into the mechanisms that power generative AI models and how they create new content.',
        link: 'https://medium.com/@metlakuntaindrayani/what-drives-the-creation-of-new-content-by-generative-ai-826de1250677'
    },
    {
        id: 2,
        title: 'Unleashing the Power of Generative AI for the Public Sector',
        description: 'Exploring how AI is reshaping the public sector and solving complex challenges.',
        link: 'https://medium.com/@metlakuntaindrayani/unleashing-the-power-of-generative-ai-for-the-public-sector-982789b884a2'
    },
    {
        id: 3,
        title: 'Ever Felt Frustrated with the Job Application Process? AI Can Help',
        description: 'How AI can make the job application process smoother and less frustrating.',
        link: 'https://medium.com/@metlakuntaindrayani/ever-felt-frustrated-with-the-job-application-process-ai-can-help-888eabb5c0f3'
    },
    {
        id: 4,
        title: 'What Can a Mix of Multimodal LLMs and AI Agents Do?',
        description: 'A discussion on how multimodal LLMs and AI agents can combine to solve complex tasks.',
        link: 'https://medium.com/@metlakuntaindrayani/what-can-a-mix-of-multimodal-llms-and-ai-agents-do-6b9d5e478603'
    }
];

const Blogs = () => {
    return (
        <Container maxW="7xl" p={8} mt={10}>
            {/* Outer box around everything */}
            <Box 
                p={8} 
                bg="white" 
                borderRadius="lg" 
                boxShadow="lg" 
                border="1px solid" 
                borderColor="gray.200"
            >
                {/* Heading and Catchy Line */}
                <Heading as="h2" size="2xl" mb={4} textAlign="center" color="blue.700">
                    Blogs
                </Heading>
                <Text fontSize="lg" mb={10} textAlign="center" color="gray.600">
                    Exploring the world of AI, sharing insights, and making technology approachable through writing.
                </Text>

                {/* Blog Cards */}
                <VStack spacing={6} align="stretch">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </VStack>
            </Box>
        </Container>
    );
};

const BlogCard = ({ title, description, link }) => {
    return (
        <Box
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.200"
            _hover={{ boxShadow: 'xl', borderColor: 'blue.300' }}
        >
            <VStack align="start" spacing={4}>
                <chakra.h1 fontSize="xl" fontWeight="bold" color="blue.700">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </chakra.h1>
                <Text fontSize="md" color="gray.600">
                    {description}
                </Text>
            </VStack>
        </Box>
    );
};

export default Blogs;
