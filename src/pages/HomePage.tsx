import { Container, Stack, Text, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { CustomButton } from '../components/common/CustomButton';

export function HomePage() {
  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="xl">
        <Text size="xl" fw={700} ta="center" c="blue">
          🌱 Welcome to Lawn Care Marketplace
        </Text>
        
        <Text size="lg" ta="center" c="dimmed">
          Find the perfect lawn care technician for your needs
        </Text>
        
        <Group gap="md">
          <CustomButton 
            component={Link} 
            to="/technicians"
            size="lg"
          >
            Browse Technicians
          </CustomButton>
          
          <CustomButton 
            component={Link} 
            to="/booking"
            variant="outline"
            size="lg"
          >
            Book a Service
          </CustomButton>
        </Group>
      </Stack>
    </Container>
  );
}
