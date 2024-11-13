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
import earthquakeVisualizer from "../public/images/earthQuake.png"
import antsDance from "../public/images/ant.png"
import tomoBread from "../public/images/tomoBread.png"

export default function Projects() {
    return (
        <Container alignContent="center">
            <Heading as="h1" size="xl" mb={30} textAlign="center">
                Projects
            </Heading>

            <Heading as="h1" size="md" textAlign="center">
                Personal (stuff I've made or largely contributed to!)
            </Heading>
            <SimpleGrid columns={[1, 2, 2]} gap={3} paddingTop={'10px'}>
            <Section delay={0.05}>
                    <WorkGridItem
                        href="https://devpost.com/software/tomobread"
                        title="TomoBread"
                        thumbnail={tomoBread.src}>
                        Hacker's Choice Award @ MadHacks 2024
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        TomoBread is an anti-procrastination app that promotes productivity by letting the user interact with the TomoBread character!  The character's design and spritework were done by my roommate.  We learned a lot about API integration, full stack interaction, game development, and authentication.
                    </Text>
                </Section>
                <Section delay={0.05}>
                    <WorkGridItem
                        href="https://globalgamejam.org/games/2024/work-progress-4"
                        title="Work In Progress"
                        thumbnail={workInProgress.src}>
                        Global Game Jam 2024;
                        Ren'Py & PyGame
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        A visual novel that was developed and written individually by myself with art and music from two of my friends.  I ran into some hurdles as I went into this with no game development experience; however, we ended up outputing a final product demo!  Built for Global Game Jam 2024.
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
                        A hackathon project between myself and three of my colleagues from U of MN's Social Coding club.  We utilized an arduino to measure soil information - such as moisture, temperature, and light sensitivity - which would then be sent to a web app.  I worked on the web application and API endpoints.
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
            <Heading as="h1" size="md" mt={50} mb={50} textAlign="center">
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
                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://csci-4611-fall-2024.github.io/assignment-3-CorinaNC/"
                        title="Earthquake Visualizer"
                        thumbnail={earthquakeVisualizer.src}>
                        GopherGFX
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        I worked on an earthquake visualizer for this assignment.  There was more math involved than what I expected, but it was a fun challenge.  My contribution were the plane and globe meshes alongside the positioning and spawning of the earthquake markers.  I also implemented texture mapping for both the globe and 2d map!  The data was fetched from NASA and USGS.
                    </Text>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://csci-4611-fall-2024.github.io/assignment-4-CorinaNC/"
                        title="So You Think Ants Can Dance"
                        thumbnail={antsDance.src}>
                        GopherGFX
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        "So You Think Ants Can Dance" is a project I did where we worked with motion capture data from Carnegie Mellon and then mapped said data to a 3d model.  I had some technical issues building my model, but the motion data works perfectly fine!
                    </Text>
                </Section>
            </SimpleGrid>
            <Divider mb={30} />
        </Container>
    )
}