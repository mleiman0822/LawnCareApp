import { Group, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { CustomButton } from './common/CustomButton';

export function Navigation() {
  const location = useLocation();
  
  return (
    <Group justify="space-between" align="center" mb="lg" p="md" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <Text fw={700} size="xl" c="blue" component={Link} to="/" style={{ textDecoration: 'none' }}>
        🌱 Lawn Care Marketplace
      </Text>
      <Group gap="md">
        <CustomButton
          variant={location.pathname === '/technicians' ? 'filled' : 'outline'}
          component={Link}
          to="/technicians"
        >
          Browse Technicians
        </CustomButton>
        <CustomButton
          variant={location.pathname === '/booking' ? 'filled' : 'outline'}
          component={Link}
          to="/booking"
        >
          Book Service
        </CustomButton>
      </Group>
    </Group>
  );
}
