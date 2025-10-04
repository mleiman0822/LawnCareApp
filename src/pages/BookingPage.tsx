import { BookingSelector } from '../components/BookingSelector';

export function BookingPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        padding: '2rem 0'
      }}
    >
      <BookingSelector />
    </div>
  );
}
