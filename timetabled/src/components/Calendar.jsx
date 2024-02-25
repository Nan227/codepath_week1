import React from "react";

const Calendar = () => {
    return (
      <><div className ="Calendar">"Testing the calendar component"</div>
      <table>
        <tr>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
        <tbody>
          <td className = "time"> Insert Time </td>
          <td>8:00 am</td>
          <td>9:00 am</td> 
          <td>10:00 am</td> 
          <td>11:00 am</td> 
          <td>01:00 pm</td> 
          <td>02:00 pm</td> 
          <td>03:00 pm</td>
          <td>04:00 pm</td> 
          <td>05:00 pm</td>
        </tbody> 
      </table></>
    )
}
export default Calendar;