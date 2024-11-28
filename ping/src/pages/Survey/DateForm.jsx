import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateWrapper } from "./ProjectSurvey.styles";
import "../../styles/DatePicker.css";
import { addYears } from "date-fns";
const DateForm = ({ onChange, onFocus }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
        onSelect={onFocus}
        //onFocus={onFocus}
        // onClick={onFocus}
        selected={startDate}
        onChange={handleDateChange}
        minDate={addYears(new Date(), -3)} // 오늘로부터 3년 전
        maxDate={new Date()} // 오늘
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
