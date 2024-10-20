import { render, screen } from '@testing-library/react';
import Rform from './components/Reservation/Rform';

const availableTimes = ["17:00","18:00","19:00","20:00","21:00", "22:00"];

test('Render labels', () => {
  render(<Rform aTime={availableTimes}/>);
  const labelDate = screen.getByText("Date*:");
  expect(labelDate).toBeInTheDocument();

  const labelTime = screen.getByText("Time*:");
  expect(labelTime).toBeInTheDocument();

  const labelDiners = screen.getByText("Number of diners*:");
  expect(labelDiners).toBeInTheDocument();

  const labelArea = screen.getByText("Seating area*:");
  expect(labelArea).toBeInTheDocument();

  const labelOccasion = screen.getByText("Occasion*:");
  expect(labelOccasion).toBeInTheDocument();

  const labelInformation = screen.getByText("Addition information:");
  expect(labelInformation).toBeInTheDocument();
});

