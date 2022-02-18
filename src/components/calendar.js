import React, { useEffect, useState } from "react";
import moment from "moment";

const Calendar = () => {
  const [value, setValue] = useState(moment());
  const [start, setStart] = useState({
    startmonth: "",
    startdate: "",
    startyear: "",
  });
  const [end, setEnd] = useState({
    endmonth: "",
    enddate: "",
    endyear: "",
  });
  const [prev, setPrev] = useState("");
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    var startVal = value.clone().startOf("month").startOf("week");
    setStart({
      ...start,
      startmonth: startVal.format("MMMM"),
      startdate: startVal.format("DD"),
      startyear: startVal.format("YYYY"),
    });
    var endVal = value.clone().startOf("month").endOf("week");
    setEnd({
      ...end,
      endmonth: endVal.format("MMMM"),
      enddate: endVal.format("DD"),
      endyear: endVal.format("YYYY"),
    });

    setPrev(value.clone().subtract(1, "month"));
  }, []);

  return (
    <div>
      {start.startmonth} {start.startdate} {start.startyear}
      {end.endmonth} {end.enddate} {end.endyear}
      <div>{JSON.stringify(prev)}</div>
      <div>{}</div>
    </div>
  );
};

export default Calendar;
