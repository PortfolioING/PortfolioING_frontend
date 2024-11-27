import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths, subYears } from "date-fns"; // subYears를 추가
import { DateWrapper } from "./ProjectSurvey.styles";
import "../../styles/DatePicker.css";
const DateForm = ({ onChange }) => {
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
        selected={startDate}
        onChange={handleDateChange}
        minDate={subYears(new Date(), 3)} // 최대 3년 전으로 설정
        maxDate={new Date()} // 오늘 날짜까지 선택 가능
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
