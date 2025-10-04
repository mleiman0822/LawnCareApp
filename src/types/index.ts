export interface Technician {
  id: string;
  name: string;
  rating: number;
  serviceTypes: string[];
  hourlyRate: number;
  avatar?: string;
  experience: number;
  isTopRated?: boolean;
}

export interface BookingSelection {
  technicianId: string | null;
  hours: number;
  timeSlot: string;
  serviceType: string;
}

export interface TimeSlot {
  id: string;
  label: string;
  time: string;
}
