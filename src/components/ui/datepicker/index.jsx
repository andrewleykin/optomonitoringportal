import React, { forwardRef } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import './index.css';
registerLocale('ru', ru)

const DatePickerInput = forwardRef(({ value, onClick }, ref) => (
  <button className="app-date-picker-input" onClick={onClick} ref={ref}>
    {value}
  </button>
));

const AppDatePicker = ({value, onChange}) => {
  return (
    <DatePicker
      selected={value}
      onSelect={onChange}
      timeInputLabel="Время:"
      dateFormat="MM/dd/yyyy h:mm"
      showTimeInput
      customInput={<DatePickerInput />}
      locale="ru"
    />
  );
}

export default AppDatePicker;
