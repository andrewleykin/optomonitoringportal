import React, { forwardRef } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import AppInput from '../input';
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('ru', ru)

const DatePickerInput = forwardRef(({ value, onClick }, ref) => (
  <AppInput value={value} onClick={onClick} ref={ref} />
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
