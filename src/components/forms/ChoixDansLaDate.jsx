import DatePicker from 'react-datepicker';
import { useId } from 'react';

export function ChoixDansLaDate({ date, setDate }) {
  const dateId = useId();
  return (
    <div>
      <label htmlFor={dateId}>Date :</label>
      <br />
      <DatePicker
        id={dateId}
        selected={date}
        onChange={(ladate) => {
          setDate(ladate);
        }}
      />
    </div>
  );
}
