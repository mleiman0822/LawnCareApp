import type { Technician, TimeSlot } from '../types';

export const mockTechnicians: Technician[] = [
  {
    id: '1',
    name: 'John Smith',
    rating: 4.8,
    serviceTypes: ['Lawn Mowing', 'Hedge Trimming', 'Leaf Removal'],
    hourlyRate: 35,
    experience: 5,
    isTopRated: true,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    rating: 4.9,
    serviceTypes: ['Lawn Mowing', 'Garden Design', 'Fertilization'],
    hourlyRate: 42,
    experience: 7,
    isTopRated: true,
  },
  {
    id: '3',
    name: 'Mike Wilson',
    rating: 4.3,
    serviceTypes: ['Tree Pruning', 'Landscape Design', 'Irrigation'],
    hourlyRate: 50,
    experience: 10,
  },
  {
    id: '4',
    name: 'Emily Chen',
    rating: 4.7,
    serviceTypes: ['Lawn Mowing', 'Weed Control', 'Leaf Removal'],
    hourlyRate: 38,
    experience: 4,
  },
  {
    id: '5',
    name: 'David Brown',
    rating: 4.5,
    serviceTypes: ['Hedge Trimming', 'Tree Pruning', 'Mulching'],
    hourlyRate: 40,
    experience: 6,
  },
  {
    id: '6',
    name: 'Lisa Martinez',
    rating: 4.6,
    serviceTypes: ['Garden Design', 'Fertilization', 'Pest Control'],
    hourlyRate: 45,
    experience: 8,
  },
  {
    id: '7',
    name: 'Tom Anderson',
    rating: 3.9,
    serviceTypes: ['Lawn Mowing', 'Leaf Removal'],
    hourlyRate: 30,
    experience: 2,
  },
  {
    id: '8',
    name: 'Jennifer Lee',
    rating: 4.8,
    serviceTypes: ['Landscape Design', 'Irrigation', 'Garden Design'],
    hourlyRate: 55,
    experience: 12,
    isTopRated: true,
  },
];

export const timeSlots: TimeSlot[] = [
  { id: '1', label: 'Morning (8:00 AM - 12:00 PM)', time: '8:00-12:00' },
  { id: '2', label: 'Afternoon (12:00 PM - 4:00 PM)', time: '12:00-16:00' },
  { id: '3', label: 'Evening (4:00 PM - 8:00 PM)', time: '16:00-20:00' },
  { id: '4', label: 'Weekend Morning (9:00 AM - 1:00 PM)', time: '9:00-13:00' },
  { id: '5', label: 'Weekend Afternoon (1:00 PM - 5:00 PM)', time: '13:00-17:00' },
];

export const serviceTypes = [
  'Lawn Mowing',
  'Hedge Trimming', 
  'Leaf Removal',
  'Garden Design',
  'Fertilization',
  'Tree Pruning',
  'Landscape Design',
  'Irrigation',
  'Weed Control',
  'Mulching',
  'Pest Control',
];
