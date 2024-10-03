'use client'

import { Container, Heading, Text, SimpleGrid, Divider, Link } from "@chakra-ui/react"
import { WorkGridItem } from "../components/work-grid-item"
import Section from "../components/section"

import workInProgress from "../public/images/GGJ.png"
import soilSensing from "../public/images/SS.png"
import  multiCultural from "../public/images/MCFC.png"
import porfolioSite from "../public/images/portfolio.png"
import rainingHelvetica from "../public/images/helvetica.png"
import holeInTheGround from "../public/images/hole.png"

export default function Projects() {
    return (
        <Container alignContent="center">
            <Heading as="h1" size="lg" mb={30} textAlign="center">
                Projects
            </Heading>

            <Heading as="h1" size="sm" textAlign="center">
                Personal (stuff I've made or largely contributed to!)
            </Heading>
            <SimpleGrid columns={[1, 2, 2]} gap={3} paddingTop={'10px'}>
                <Section delay={0.05}>
                    <WorkGridItem
                        href="https://globalgamejam.org/games/2024/work-progress-4"
                        title="Work In Progress"
                        thumbnail={workInProgress.src}>
                        Global Game Jam 2024;
                        Ren'Py & PyGame
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        A visual novel that was developed solely by me with art and music from two of my friends.  I ran into some hurdles as I went into this with no game development experience; however, we ended up outputing a final product demo!  Built with Ren'Py and PyGame.
                    </Text>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://devpost.com/software/soilsensing-43q0ga?ref_content=user-portfolio&ref_feature=in_progress"
                        title="Soil Sensing"
                        thumbnail={soilSensing.src}>
                        Quality Engineering @ HackUIowa 2023
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        A hackathon project between myself and two of my colleagues in Social Coding.  We built a web application to send soil information to farmers such as moisture, temperature, and pH levels.  I worked on the web application both frontend and backend.
                    </Text>
                </Section>
                <Section delay={0.15}>
                    <WorkGridItem
                        href="https://www.corinanc.site"
                        title="Multicultural Food Club"
                        thumbnail={multiCultural.src}>
                        React, Next.js, Express.js, ChakraUI
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        Multicultural Food Club was both a project and club which I served as the vice president.  We are currently in the process of deploying a website for U of MN students to use to review restaurants around campus.  I serve as the lead fullstack developer for this project.
                    </Text>
                </Section>
                <Section delay={0.15}>
                    <WorkGridItem
                        href="https://www.corinanc.site"
                        title="Portfolio"
                        thumbnail={porfolioSite.src}>
                        Next.js & ChakraUI
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        This website!  I didn't want my portfolio to be from a template - which is what I used before - so I designed this layout on Figma (took design inspiration from <Link fontFamily="Inter" textDecoration="underline" href="https://github.com/craftzdog">Takuya Matsuyama</Link>) and built it from scratch.  I'm still working on it, but I'm proud of what I've done so far.
                    </Text>
                </Section>
            </SimpleGrid>
            <Heading as="h1" size="sm" textAlign="center">
                School (archive of assignments and projects for school!)
                </Heading>
                <SimpleGrid columns={[1, 2, 2]} gap={3} paddingTop={'10px'}>
                <Section delay={0.05}>
                    <WorkGridItem
                        href="https://csci-4611-fall-2024.github.io/assignment-1-CorinaNC/"
                        title="It's Raining  Helvetica"
                        thumbnail={rainingHelvetica.src}>
                        GopherGFX
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        My first assignment for CSCI 4611 (Programming Graphics & Games).  We were assigned to create falling text which interacted with video input from the webcam.  I used U of MN's custom GopherGFX library to create this project. My contribution was the falling text, physics, and image manipulation.
                    </Text>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://csci-4611-fall-2024.github.io/assignment-2-CorinaNC/"
                        title="Hole in the Ground"
                        thumbnail={holeInTheGround.src}>
                        GopherGFX
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        For this assignment, we were tasked with programming 3D physics for hole and rigid body interactions.  I had less contribution for this assignment, as it was mostly based around the starter code which provided premade objects. I did however, implement the physics for the hole and the rigid bodies.
                    </Text>
                </Section>
            </SimpleGrid>
            <Divider mb={30} />
        </Container>
    )
}