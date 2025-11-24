"use client";

import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Divider,
  Link,
} from "@chakra-ui/react";
import { WorkGridItem } from "../components/work-grid-item";
import Section from "../components/section";

import workInProgress from "../public/images/GGJ.png";
import soilSensing from "../public/images/SS.png";

import rainingHelvetica from "../public/images/helvetica.png";
import holeInTheGround from "../public/images/hole.png";
import ingrained from "../public/images/ingrainedLogo.png";
import earthquakeVisualizer from "../public/images/earthQuake.png";
import antsDance from "../public/images/ant.png";
import tomoBread from "../public/images/tomoBread.png";
import fishyData from "../public/images/fishyData.png";
import officePT from "../public/images/officePT.png";

export default function Projects() {
  return (
    <Container alignContent="center">
      <Heading as="h1" size="xl" mb={30} textAlign="center">
        Projects
      </Heading>

      <Heading as="h1" size="md" textAlign="center">
        Personal (stuff I've made or largely contributed to!)
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={3} paddingTop={"10px"}>
        <Section delay={0.05}>
          <WorkGridItem
            href="https://devpost.com/software/tomobread"
            title="TomoBread"
            thumbnail={tomoBread.src}
          >
            React, FastAPI, Pixi.js
          </WorkGridItem>
          <Text fontFamily="Inter" textAlign="center">
            Anti-procrastination x Tamagotchi web app. I worked on frontend,
            backend, and data retrieval. Hackers' Choice @ MadHacks 2024
          </Text>
        </Section>
        <Section delay={0.05}>
          <WorkGridItem
            href="https://devpost.com/software/office-pt"
            title="Office PT"
            thumbnail={officePT.src}
          >
            Electron, React, MediaPipe, Flask, Spring Boot, MongoDB
          </WorkGridItem>
          <Text fontFamily="Inter" textAlign="center">
            Live posture correction and RSI handbook desktop app. I worked on
            frontend, computer vision, database design, and backend. For
            MadHacks 2025
          </Text>
        </Section>
        <Section delay={0.05}>
          <WorkGridItem
            href="https://globalgamejam.org/games/2024/work-progress-4"
            title="Work In Progress"
            thumbnail={workInProgress.src}
          >
            Ren'Py & PyGame
          </WorkGridItem>
          <Text fontFamily="Inter" textAlign="center">
            An independent slice-of-life visual novel. Written, designed, and
            developed by me. For Global Game Jam '24
          </Text>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            href="https://devpost.com/software/soilsensing-43q0ga?ref_content=user-portfolio&ref_feature=in_progress"
            title="Soil Sensing"
            thumbnail={soilSensing.src}
          >
            React & Express.js
          </WorkGridItem>
          <Text fontFamily="Inter" textAlign="center">
            Agricultural technology to track soil contents such as moisture
            levels, temperature, and light sensitivity. I worked on the web
            application to fetch and process weather data through the backend.
            Quality Engineering @ HackUIowa '23
          </Text>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            href="https://github.com/ajisairen/ingrained"
            title="Ingrained"
            thumbnail={ingrained.src}
          >
            Flutter & Firebase/Firestore
          </WorkGridItem>
          <Text fontFamily="Inter" textAlign="center">
            Virtual farmers market mobile app. My contribution was connecting
            the app to Firebase alongside engineering the middleware and
            backend. Our team's first time using Flutter. Made for MinneHack
            2025.
          </Text>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            href="https://fishy-data.vercel.app"
            title="Fishy Data"
            thumbnail={fishyData.src}
          >
            Svelte
          </WorkGridItem>
          <Text fontFamily="Inter" textAlign="center">
            Data Visualization project analyzing fish population patterns in
            Minnesota lakes. I contributed to the UI design and CSS styling
            along with some minor frontend changes.
          </Text>
        </Section>
      </SimpleGrid>
    </Container>
  );
}
