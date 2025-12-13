'use client'

import { Heading, Container, Grid, Tooltip, useBreakpointValue } from "@chakra-ui/react"
import Section from "./section"
import { Icon, loadIcons } from '@iconify/react';
const technologies: string[] = [
    "vscode-icons:file-type-python",
    "vscode-icons:file-type-c3",
    "vscode-icons:file-type-csharp2",
    "vscode-icons:file-type-cpp3",
    "logos:java",
    "vscode-icons:file-type-html",
    "vscode-icons:file-type-css",
    "vscode-icons:file-type-typescript",
    "ph:file-sql",
    "logos:graphql",
    "vscode-icons:file-type-angular",
    "logos:react",
    "logos:electron",
    "devicon:svelte",
    "devicon:flutter",
    "file-icons:webgl",
    "simple-icons:opencv",
    "skill-icons:threejs-light",
    "skill-icons:bootstrap",
    "logos:material-ui",
    "simple-icons:elixir",
    "simple-icons:express",
    "devicon:fastapi",
    "cib:flask",
    "simple-icons:dotnet",
    "bxl:spring-boot",
    "logos:nodejs-icon",
    "skill-icons:docker",
    "devicon:firebase",
    "logos:mongodb-icon",
    "logos:postgresql",
    "logos:microsoft-azure",
    "logos:archlinux",
    "logos:jest",
    "simple-icons:junit5",
    "logos:selenium",
    "devicon:figma",
    "simple-icons:uml",
    "logos:adobe-premiere",
    "logos:adobe-photoshop",
    "logos:adobe-after-effects",
    "logos:adobe-illustrator",
    
];

loadIcons(technologies);

const technologyNames: { [key: string]: string } = {
    "vscode-icons:file-type-python": "Python",
    "vscode-icons:file-type-c3": "C",
    "vscode-icons:file-type-csharp2": "C#",
    "vscode-icons:file-type-cpp3": "C++",
    "logos:java": "Java",
    "vscode-icons:file-type-html": "HTML",
    "logos:electron": "Electron",
    "vscode-icons:file-type-css": "CSS",
    "file-icons:webgl": "WebGL",
    "logos:material-ui": "Material UI",
    "simple-icons:opencv": "OpenCV",
    "skill-icons:threejs-light": "Three.js",
    "vscode-icons:file-type-typescript": "TypeScript",
    "ph:file-sql": "SQL",
    "logos:graphql": "GraphQL",
    "vscode-icons:file-type-angular": "Angular",
    "logos:react": "React",
    "devicon:svelte": "Svelte",
    "cib:flask": "Flask",
    "devicon:fastapi": "FastAPI",
    "simple-icons:dotnet": ".NET",
    "bxl:spring-boot": "Spring",
    "simple-icons:elixir": "Elixir",
    "logos:nodejs-icon": "Node.js",
    "logos:archlinux": "Arch Linux",
    "skill-icons:bootstrap": "Bootstrap",
    "simple-icons:express": "Express.js",
    "devicon:flutter": "Flutter",
    "devicon:firebase": "Firebase",
    "logos:mongodb-icon": "MongoDB",
    "logos:postgresql": "PostgreSQL",
    "skill-icons:docker": "Docker",
    "logos:jest": "Jest (React Testing Library)",
    "simple-icons:junit5": "JUnit",
    "logos:selenium": "Selenium",
    "simple-icons:uml": "UML",
    "devicon:figma": "Figma",
    "logos:microsoft-azure": "Microsoft Azure",
    "logos:adobe-premiere": "Adobe Premiere",
    "logos:adobe-photoshop": "Adobe Photoshop",
    "logos:adobe-after-effects": "Adobe After Effects",
    "logos:adobe-illustrator": "Adobe Illustrator",
};

export default function Technologies() {
    const columns = useBreakpointValue({ base: 'repeat(4, 2fr)', md: 'repeat(6, 2fr)' });
    return (
        <Container>
            <Heading size="md" mt={20} mb={10} textAlign="center">Languages & Technologies</Heading>
            <Grid templateColumns={columns} gap={5}>
                {technologies.map((technology, index) => (
                    <Section key={index} delay={0.5 + index * 0.1}>
                        <Tooltip label={technologyNames[technology]} aria-label={technologyNames[technology]}>
                            <div className="icon-container">
                                <Icon icon={technology} width="50" height="50" />
                            </div>
                        </Tooltip>
                    </Section>
                ))}
            </Grid>
        </Container>
    )
}