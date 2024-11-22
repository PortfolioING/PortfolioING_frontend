import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";
import { DateWrapper } from "./ProjectSurvey.styles";
import "../../styles/DatePicker.css";
const DateForm = ({ onChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onChange(dates);
  };

  return (
    <div>
      <DateWrapper>
        <p>
          {startDate
            ? startDate.toLocaleDateString()
            : "Start Date not selected"}
        </p>
        ~
        <p>
          {endDate ? endDate.toLocaleDateString() : "End Date not selected"}
        </p>
      </DateWrapper>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 5)}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        showDisabledMonthNavigation
      />
    </div>
  );
};

export default DateForm;
