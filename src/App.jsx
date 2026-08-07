import React from 'react';
import { Container, Title, Text, Button, Group, Modal } from '@mantine/core';

export default function App() {
  const [opened, setOpened] = React.useState(false);

  return (
    <Container size="sm" style={{ padding: '2rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Title order={1}>The Dep Sessions — Staging</Title>
      <Text mt="sm">This branch contains a React + Mantine scaffold using Vite.</Text>
      <Group mt="lg">
        <Button component="a" href="/index.html" variant="outline">Original static site</Button>
        <Button onClick={() => setOpened(true)}>Privacy</Button>
      </Group>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Privacy Policy" size="lg">
        <Text><strong>The Dep Sessions</strong> respects your privacy. This notice explains how we use any information you share with us.</Text>
        <Text mt="sm"><strong>What we collect:</strong> We only collect what you provide — typically your name and email address, and optionally your instrument or location if you choose to share them.</Text>
        <Text mt="sm"><strong>How we use it:</strong> We use your details only to keep you updated about our launch and progress, and to reply to any messages you send us.</Text>
        <Text mt="sm">We will <strong>never</strong> sell, share, or pass your details to anyone else.</Text>
        <Text mt="sm">Last updated: August 2026</Text>
      </Modal>
    </Container>
  );
}
