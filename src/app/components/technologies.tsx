'use client'

import { Heading, Container, Grid, Tooltip, useBreakpointValue } from "@chakra-ui/react"
import Section from "./section"
import { Icon, loadIcons } from '@iconify/react';
const technologies: string[] = [
    "vscode-icons:file-type-python",
    "vscode-icons:file-type-c3",
    "vscode-icons:file-type-csharp2",
    "vscode-icons:file-type-cpp3",
    "vscode-icons:file-type-html",
    "vscode-icons:file-type-css",
    "vscode-icons:file-type-typescript",
    "ph:file-sql",
    "vscode-icons:file-type-angular",
    "logos:react",
    "devicon:nextjs",
    "file-icons:webgl",
    "skill-icons:bootstrap",
    "simple-icons:express",
    "devicon:fastapi",
    "simple-icons:dotnet",
    "logos:nodejs-icon",
    "skill-icons:docker",
    "logos:microsoft-azure",
    "logos:archlinux",
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
    "vscode-icons:file-type-html": "HTML",
    "vscode-icons:file-type-css": "CSS",
    "file-icons:webgl": "WebGL",
    "vscode-icons:file-type-typescript": "TypeScript",
    "ph:file-sql": "SQL",
    "vscode-icons:file-type-angular": "Angular",
    "logos:react": "React",
    "devicon:fastapi": "FastAPI",
    "simple-icons:dotnet": ".NET",
    "logos:nodejs-icon": "Node.js",
    "logos:archlinux": "Arch Linux",
    "skill-icons:bootstrap": "Bootstrap",
    "simple-icons:express": "Express.js",
    "devicon:nextjs": "Next.js",
    "skill-icons:docker": "Docker",
    "simple-icons:uml": "UML",
    "devicon:figma": "Figma",
    "logos:microsoft-azure": "Microsoft Azure",
    "logos:adobe-premiere": "Adobe Premiere",
    "logos:adobe-photoshop": "Adobe Photoshop",
    "logos:adobe-after-effects": "Adobe After Effects",
    "logos:adobe-illustrator": "Adobe Illustrator",
};

export default function Technologies() {
    const columns = useBreakpointValue({ base: 'repeat(4, 2fr)', md: 'repeat(5, 2fr)' });
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