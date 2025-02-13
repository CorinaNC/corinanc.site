'use client'

import { Container, Heading, Text, SimpleGrid, Divider, Link } from "@chakra-ui/react"
import { WorkGridItem } from "../components/work-grid-item"
import Section from "../components/section"

import workInProgress from "../public/images/GGJ.png"
import soilSensing from "../public/images/SS.png"

import rainingHelvetica from "../public/images/helvetica.png"
import holeInTheGround from "../public/images/hole.png"
import ingrained from "../public/images/ingrainedLogo.png"
import earthquakeVisualizer from "../public/images/earthQuake.png"
import antsDance from "../public/images/ant.png"
import tomoBread from "../public/images/tomoBread.png"
import worldOfDrawings from "../public/images/worldOfDrawings.png"
import artisticRendering from "../public/images/artisticRendering.png"
import droneDelivery from "../public/images/delivery2.png"

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
                        React, FastAPI, Pixi.js
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        Anti-procrastination x Tamagotchi web app. I worked on frontend, backend, and data retrieval. Hackers' Choice @ MadHacks 2024
                    </Text>
                </Section>
                <Section delay={0.05}>
                    <WorkGridItem
                        href="https://globalgamejam.org/games/2024/work-progress-4"
                        title="Work In Progress"
                        thumbnail={workInProgress.src}>
                        Ren'Py & PyGame
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        An independent slice-of-life visual novel. Written, designed, and developed by me. For Global Game Jam '24
                    </Text>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://devpost.com/software/soilsensing-43q0ga?ref_content=user-portfolio&ref_feature=in_progress"
                        title="Soil Sensing"
                        thumbnail={soilSensing.src}>
                        React & Express.js
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        Agricultural technology to track soil contents such as moisture levels, temperature, and light sensitivity.  I worked on the web application to fetch and process weather data through the backend.  Quality Engineering @ HackUIowa '23
                    </Text>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://github.com/ajisairen/ingrained"
                        title="Ingrained"
                        thumbnail={ingrained.src}>
                        Flutter & Firebase/Firestore
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        Virtual farmers market mobile app. My contribution was connecting the app to Firebase alongside engineering the middleware and backend. Our team's first time using Flutter. Made for MinneHack 2025.
                    </Text>
                </Section>
            </SimpleGrid>
            <Divider />
            <Heading as="h1" size="md" mt={50} mb={50} textAlign="center">
                School (archive of assignments and projects for school!)
                </Heading>
                <SimpleGrid columns={[1, 2, 2]} gap={3} paddingTop={'10px'}>
                <Section delay={0.05}>
                    <WorkGridItem
                        href="https://hub.docker.com/r/toell01/team_027_drone_sim"
                        title="GopherDelivery"
                        thumbnail={droneDelivery.src}>
                        C++, TypeScript
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                       Drone Delivery Simulation.  Extensions included: cooling stations, weather loops, emergency protocol, and customer refunds.
                    </Text>
                </Section>
                <Section delay={0.05}>
                    <WorkGridItem
                        href="https://csci-4611-fall-2024.github.io/assignment-1-CorinaNC/"
                        title="It's Raining  Helvetica"
                        thumbnail={rainingHelvetica.src}>
                        GopherGFX
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        Simple artistic text-rain assignment which I created for CSCI 4611 (Programming Interactive Graphics & Games).
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
                        Donut County parody created for CSCI 4611. I contributed the rigid bodies' physics and collision.
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
                        Earthquake visualizer created for CSCI 4611. I created the Earth meshes and data point timelapse.
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
                        Motion capture project create for CSCI 4611. I designed the ants and fetched the mocap data to implement believable movement and physics.
                    </Text>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://csci-4611-fall-2024.github.io/assignment-5-CorinaNC/"
                        title="Artistic Rendering"
                        thumbnail={artisticRendering.src}>
                        GopherGFX, GLSL
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        A rendering assignment which I did for CSCI 4611. I developed each of the shaders shown using GLSL. More technical than our previous assignments but enlightening nonetheless.
                    </Text>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://csci-4611-fall-2024.github.io/assignment-6-CorinaNC/"
                        title="A World Made of Drawings"
                        thumbnail={worldOfDrawings.src}>
                        GopherGFX
                    </WorkGridItem>
                    <Text fontFamily="Inter" textAlign="center">
                        My final assignment for 4611, being a browser game that is a spoof of Harold's Purple Crayon. The user is able to create collidable platforms and environments using the mouse.
                    </Text>
                </Section>
            </SimpleGrid>
            <Divider mb={30} />
        </Container>
    )
}
