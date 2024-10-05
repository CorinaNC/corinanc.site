"use client"

import { Container, Text, Box, Image, Heading } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { StaticImageData } from "next/image";
import Zurich from "../public/images/zurich.png";
import UofM from "../public/images/uofM.png";

interface Experience {
    title: string;
    company: string;
    timePeriod: string;
    icon: StaticImageData;
    location: string;
    description?: string;
}

export default function Experience() {
    const experiences: Experience[] = [
        {
            title: "Software Developer Intern",
            company: "Zurich Insurance",
            timePeriod: "May 2024 - Aug 2024",
            location: "Anoka, MN",
            icon: Zurich,
            description: "I worked on the Internet Services team for Zurich's subsidary RCIS (Rural Crop Insurance Services). I used .NET, Visual Studio, and SQL to do backend development on the company's RESTful API endpoints while using frontend frameworks Angular and Bootstrap for their internal web applications.",
        },
        {
            title: "B.S. Computer Science + Creative Writing Minor",
            company: "University of Minnesota-Twin Cities",
            timePeriod: "Expected to Graduate May 2026",
            location: "Minneapolis, MN",
            icon: UofM,
            description: "I'm apart of the College of Science and Engineering!  My favorite course thus far has been Programming Interactive Games and Graphics :)",
        },
    ];

    return (
        <Container maxW="3xl">
            <Heading as="h1" size="lg" textAlign="center" mb={6}>Education & Experience</Heading>
            <VerticalTimeline layout={'2-columns'} lineColor="white">
                {experiences.map((experience, index) => (
                    <VerticalTimelineElement 
                        visible={true}
                        key={index}
                        animate={true}
                        icon={
                            <Box>
                              <Image
                                padding="1px"
                                paddingLeft="1px"
                                background="white"
                                borderRadius="50%"
                                alt=""
                                src={experience.icon.src}
                              />
                            </Box>
                          }
                        iconStyle={{ background: "#FFD700" }}>
                            <Heading as="h2" size="md" color="#000000">{experience.company}</Heading>
                            <Heading as="h1" fontFamily="inter" fontWeight="light" mt={2} size="sm" color="#7F7287">{experience.title}</Heading>
                            <Text fontFamily="" color="#7F7287">{experience.timePeriod}</Text>
                            <Text fontFamily="" color="#000000">{experience.description}</Text>
                            <Text fontFamily="" color="#7F7287">{experience.location}</Text>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </Container>
    );
}