'use client'

import { Heading, Container, Grid, Tooltip } from "@chakra-ui/react"
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
    "skill-icons:bootstrap",
    "devicon:chakraui",
    "simple-icons:express",
    "devicon:nextjs",
    "simple-icons:dotnet",
    "logos:nodejs-icon",
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
    "vscode-icons:file-type-typescript": "TypeScript",
    "ph:file-sql": "SQL",
    "vscode-icons:file-type-angular": "Angular",
    "logos:react": "React",
    "simple-icons:dotnet": ".NET",
    "logos:nodejs-icon": "Node.js",
    "logos:archlinux": "Arch Linux",
    "skill-icons:bootstrap": "Bootstrap",
    "devicon:chakraui": "Chakra UI",
    "simple-icons:express": "Express.js",
    "devicon:nextjs": "Next.js",
    "simple-icons:uml": "UML",
    "devicon:figma": "Figma",
    "logos:microsoft-azure": "Microsoft Azure",
    "logos:adobe-premiere": "Adobe Premiere",
    "logos:adobe-photoshop": "Adobe Photoshop",
    "logos:adobe-after-effects": "Adobe After Effects",
    "logos:adobe-illustrator": "Adobe Illustrator",
};

export default function Technologies() {
    return (
        <Container alignItems="center" textAlign="center">
            <Heading size="md" mt={20} mb={10}>Languages & Technologies</Heading>
            <Grid templateColumns='repeat(6, 2fr)' gap={5}>
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