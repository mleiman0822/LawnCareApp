import { useMemo } from 'react';
import { Grid, Group, Text, Rating, Select, NumberInput, Stack, Center } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import { mockTechnicians, serviceTypes } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import { CustomCard } from './common/CustomCard';
import { CustomBadge } from './common/CustomBadge';
import { CustomButton } from './common/CustomButton';
import type { Technician } from '../types';

export function TechnicianList() {
  const { state, dispatch } = useAppContext();
  const { selectedFilters } = state;

  const filteredTechnicians = useMemo(() => {
    return mockTechnicians.filter((tech) => {
      const matchesService = !selectedFilters.serviceType || 
        tech.serviceTypes.includes(selectedFilters.serviceType);
      const matchesRating = tech.rating >= selectedFilters.minRating;
      
      return matchesService && matchesRating;
    });
  }, [selectedFilters]);

  const handleSelectTechnician = (technician: Technician) => {
    dispatch({ type: 'SET_SELECTED_TECHNICIAN', payload: technician });
  };

  const clearFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  return (
    <Stack gap="lg">
      {/* Filters */}
      <CustomCard>
        <Stack gap="md">
          <Text fw={600} size="lg">Filter Technicians</Text>
          <Group grow>
            <Select
              label="Service Type"
              placeholder="All services"
              data={serviceTypes}
              value={selectedFilters.serviceType || null}
              onChange={(value) => 
                dispatch({ type: 'SET_SERVICE_FILTER', payload: value || '' })
              }
              clearable
            />
            <NumberInput
              label="Minimum Rating"
              placeholder="0"
              min={0}
              max={5}
              step={0.1}
              value={selectedFilters.minRating}
              onChange={(value) =>
                dispatch({ type: 'SET_RATING_FILTER', payload: Number(value) || 0 })
              }
            />
          </Group>
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              {filteredTechnicians.length} technician{filteredTechnicians.length !== 1 ? 's' : ''} found
            </Text>
            <CustomButton 
              variant="outline" 
              size="xs" 
              onClick={clearFilters}
              disabled={!selectedFilters.serviceType && selectedFilters.minRating === 0}
            >
              Clear Filters
            </CustomButton>
          </Group>
        </Stack>
      </CustomCard>

      {/* Technicians Grid */}
      {filteredTechnicians.length === 0 ? (
        <Center py="xl">
          <Stack align="center" gap="md">
            <Text size="xl" fw={500} c="dimmed">No technicians found</Text>
            <Text size="sm" c="dimmed" ta="center">
              Try adjusting your filters to see more results
            </Text>
            <CustomButton variant="outline" onClick={clearFilters}>
              Clear All Filters
            </CustomButton>
          </Stack>
        </Center>
      ) : (
        <Grid>
          {filteredTechnicians.map((technician) => (
            <Grid.Col key={technician.id} span={{ base: 12, sm: 6, lg: 4 }}>
              <CustomCard
                onClick={() => handleSelectTechnician(technician)}
                style={{
                  border: state.selectedTechnician?.id === technician.id 
                    ? '2px solid #228be6' 
                    : '2px solid transparent',
                  boxSizing: 'border-box',
                }}
              >
                <Stack gap="sm">
                  {/* Header with name and top rated badge */}
                  <Group justify="space-between" align="flex-start">
                    <Text fw={600} size="lg">{technician.name}</Text>
                    {technician.isTopRated && (
                      <CustomBadge 
                        color="yellow" 
                        variant="filled"
                        leftSection={<IconStar size={12} />}
                      >
                        Top Rated
                      </CustomBadge>
                    )}
                  </Group>

                  {/* Rating */}
                  <Group gap="xs">
                    <Rating value={technician.rating} readOnly size="sm" />
                    <Text size="sm" fw={500}>{technician.rating}</Text>
                    <Text size="xs" c="dimmed">({technician.experience} years exp.)</Text>
                  </Group>

                  {/* Service types */}
                  <Group gap="xs">
                    {technician.serviceTypes.map((service) => (
                      <CustomBadge 
                        key={service} 
                        color="blue" 
                        variant="light"
                        size="xs"
                      >
                        {service}
                      </CustomBadge>
                    ))}
                  </Group>

                  {/* Hourly rate */}
                  <Group justify="space-between" align="center">
                    <Text fw={600} size="lg" c="green">
                      ${technician.hourlyRate}/hour
                    </Text>
                    <CustomButton 
                      size="xs" 
                      variant={state.selectedTechnician?.id === technician.id ? 'filled' : 'outline'}
                    >
                      {state.selectedTechnician?.id === technician.id ? 'Selected' : 'Select'}
                    </CustomButton>
                  </Group>
                </Stack>
              </CustomCard>
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Stack>
  );
}
