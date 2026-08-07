import { Container, Title, Text, Button, Group, Stack } from '@mantine/core';
import './App.css';

export default function App() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <div style={{ textAlign: 'center' }}>
          <Title order={1} size="h1">The Dep Sessions</Title>
          <Text size="lg" c="dimmed" mt="sm">
            Pick a song, join the band, perform live.
          </Text>
        </div>
        
        <Group justify="center" mt="xl">
          <Button size="lg" variant="filled">
            Register Interest
          </Button>
          <Button size="lg" variant="outline">
            How It Works
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}
