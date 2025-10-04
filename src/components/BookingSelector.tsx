import { Stack, Group, Text, NumberInput, Select } from '@mantine/core';
import { timeSlots, serviceTypes } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import { CustomCard } from './common/CustomCard';
import { CustomButton } from './common/CustomButton';
import { CustomBadge } from './common/CustomBadge';

export function BookingSelector() {
  const { state, dispatch } = useAppContext();
  const { booking, selectedTechnician } = state;

  const handleBookingConfirm = () => {
    if (!selectedTechnician) {
      alert('Please select a technician first');
      return;
    }
    if (!booking.timeSlot) {
      alert('Please select a time slot');
      return;
    }
    if (!booking.serviceType) {
      alert('Please select a service type');
      return;
    }
    
    const totalCost = selectedTechnician.hourlyRate * booking.hours;
    alert(
      `Booking confirmed!\n\n` +
      `Technician: ${selectedTechnician.name}\n` +
      `Service: ${booking.serviceType}\n` +
      `Duration: ${booking.hours} hour${booking.hours !== 1 ? 's' : ''}\n` +
      `Time: ${booking.timeSlot}\n` +
      `Total Cost: $${totalCost}`
    );
  };

  const resetBooking = () => {
    dispatch({ type: 'RESET_BOOKING' });
  };

  const totalCost = selectedTechnician ? selectedTechnician.hourlyRate * booking.hours : 0;

  return (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <Stack gap="lg">
      <CustomCard>
        <Stack gap="md">
          <Group justify="space-between" align="center">
            <Text fw={600} size="lg">Book a Service</Text>
            {(booking.technicianId || booking.hours > 1 || booking.timeSlot || booking.serviceType) && (
              <CustomButton variant="outline" size="xs" onClick={resetBooking}>
                Reset
              </CustomButton>
            )}
          </Group>

          {/* Selected Technician Display */}
          {selectedTechnician ? (
            <Group gap="md" p="md" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div>
                <Text fw={600}>{selectedTechnician.name}</Text>
                <Group gap="xs">
                  <Text size="sm" c="dimmed">⭐ {selectedTechnician.rating}</Text>
                  <Text size="sm" c="green" fw={500}>${selectedTechnician.hourlyRate}/hour</Text>
                </Group>
              </div>
              {selectedTechnician.isTopRated && (
                <CustomBadge color="yellow" variant="filled">
                  Top Rated
                </CustomBadge>
              )}
            </Group>
          ) : (
            <Text c="dimmed" ta="center" py="md">
              Please select a technician first
            </Text>
          )}

          {/* Booking Form */}
          <Stack gap="md">
            <Select
              label="Service Type"
              placeholder="Select a service"
              data={selectedTechnician ? 
                serviceTypes.filter(service => selectedTechnician.serviceTypes.includes(service)) :
                serviceTypes
              }
              value={booking.serviceType}
              onChange={(value) =>
                dispatch({ type: 'SET_BOOKING_SERVICE_TYPE', payload: value || '' })
              }
              disabled={!selectedTechnician}
              required
            />

            <NumberInput
              label="Number of Hours"
              description="How many hours do you need?"
              placeholder="1"
              min={1}
              max={8}
              value={booking.hours}
              onChange={(value) =>
                dispatch({ type: 'SET_BOOKING_HOURS', payload: Number(value) || 1 })
              }
              disabled={!selectedTechnician}
              required
            />

            <Select
              label="Preferred Time Slot"
              placeholder="Select a time slot"
              data={timeSlots.map(slot => ({ value: slot.label, label: slot.label }))}
              value={booking.timeSlot}
              onChange={(value) =>
                dispatch({ type: 'SET_BOOKING_TIME_SLOT', payload: value || '' })
              }
              disabled={!selectedTechnician}
              required
            />
          </Stack>
        </Stack>
      </CustomCard>

      {/* Booking Summary */}
      {selectedTechnician && (booking.serviceType || booking.timeSlot || booking.hours > 1) && (
        <CustomCard>
          <Stack gap="md">
            <Text fw={600} size="lg">Booking Summary</Text>
            
            <Stack gap="xs">
              <Group justify="space-between">
                <Text>Technician:</Text>
                <Text fw={500}>{selectedTechnician.name}</Text>
              </Group>
              
              {booking.serviceType && (
                <Group justify="space-between">
                  <Text>Service:</Text>
                  <CustomBadge color="blue" variant="light">
                    {booking.serviceType}
                  </CustomBadge>
                </Group>
              )}
              
              <Group justify="space-between">
                <Text>Duration:</Text>
                <Text fw={500}>{booking.hours} hour{booking.hours !== 1 ? 's' : ''}</Text>
              </Group>
              
              {booking.timeSlot && (
                <Group justify="space-between">
                  <Text>Time Slot:</Text>
                  <Text fw={500}>{booking.timeSlot}</Text>
                </Group>
              )}
              
              <Group justify="space-between" pt="md" style={{ borderTop: '1px solid #e9ecef' }}>
                <Text fw={600} size="lg">Total Cost:</Text>
                <Text fw={600} size="lg" c="green">${totalCost}</Text>
              </Group>
            </Stack>

            <CustomButton 
              fullWidth 
              onClick={handleBookingConfirm}
              disabled={!booking.serviceType || !booking.timeSlot}
            >
              Confirm Booking
            </CustomButton>
          </Stack>
        </CustomCard>
      )}
      </Stack>
    </div>
  );
}
