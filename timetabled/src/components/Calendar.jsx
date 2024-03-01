import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
      <div><div className ="Calendar"><h1>Weekly Calendar for Codpath students</h1></div>
      <div>
      <table>
  <thead>
    <tr>
      <th></th> {/* Empty header for the time column */}
      <th>Sunday</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="time">8:00 am</td>
      <Event event = 'Business Analytics'  color = 'green'/>
      <td></td> {/* Empty cell for Sunday */}
      <td></td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <td></td> {/* Empty cell for Wednesday */}
      <td></td> {/* Empty cell for Thursday */}
      <td></td> {/* Empty cell for Friday */}
      <td></td> {/* Empty cell for Saturday */}
    </tr>
    <tr>
      <td className="time">9:00 am</td>
      <td></td> {/* Empty cell for Sunday */}
      <td></td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <td></td> {/* Empty cell for Wednesday */}
      <td></td> {/* Empty cell for Thursday */}
      <td></td> {/* Empty cell for Friday */}
      <td></td> {/* Empty cell for Saturday */}
    </tr>
    <tr>
      <td className="time">10:00 am</td>
      <td></td> {/* Empty cell for Sunday */}
      <td></td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <td></td> {/* Empty cell for Wednesday */}
      <td></td> {/* Empty cell for Thursday */}
      <td></td> {/* Empty cell for Friday */}
      <td></td> {/* Empty cell for Saturday */}
    </tr>
    <tr>
      <td className="time">11:00 am</td>
      <td></td> {/* Empty cell for Sunday */}
      <td></td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <td></td> {/* Empty cell for Wednesday */}
      <td></td> {/* Empty cell for Thursday */}
      <td></td> {/* Empty cell for Friday */}
      <td></td> {/* Empty cell for Saturday */}
    </tr>
    <tr>
      <td className="time">12:00 pm</td>
      <td></td> {/* Empty cell for Sunday */}
      <td></td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <td></td> {/* Empty cell for Wednesday */}
      <td></td> {/* Empty cell for Thursday */}
      <td></td> {/* Empty cell for Friday */}
      <td></td> {/* Empty cell for Saturday */}
    </tr>
    <tr>
      <td className="time">1:00 pm</td>
      <td></td> {/* Empty cell for Sunday */}
      <td></td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <td></td> {/* Empty cell for Wednesday */}
      <td></td> {/* Empty cell for Thursday */}
      <td> <Event event = 'Codepath Meeting'  color = 'pink' location='BRR 5720'/></td> 
      <td></td> {/* Empty cell for Saturday */}
    </tr>
    <tr>
      <td className="time">2:00 pm</td>
      <td></td> {/* Empty cell for Sunday */}
      <td></td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <td></td> {/* Empty cell for Wednesday */}
      <td> <Event event = 'Codepath Meeting'  color = 'pink' location='BRR 1520'/></td> 
      <td></td> {/* Empty cell for Friday */}
      <td></td> {/* Empty cell for Saturday */}
    </tr>
    <tr>
      <td className="time">3:00 pm</td>
      <td></td> {/* Empty cell for Sunday */}
      <td></td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <td></td> {/* Empty cell for Wednesday */}
      <td></td> {/* Empty cell for Thursday */}
      <td></td> {/* Empty cell for Friday */}
      <td> <Event event = 'Codepath Meeting'  color = 'green' location='BRR 5410'/></td> 
    </tr>
    <tr>
      <td className="time">4:00 pm</td>
      <td></td> {/* Empty cell for Sunday */}
      <td> </td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <Event event='Starbucks ☕️' color ='green' location='BRR 5520'/>
      <td></td> {/* Empty cell for Wednesday */}
      <td></td> {/* Empty cell for Thursday */}
      <td></td> {/* Empty cell for Friday */}
      <td></td> {/* Empty cell for Saturday */}
    </tr>
    <tr>
      <td className="time">5:00 pm</td>
      <td></td> {/* Empty cell for Sunday */}
      <td></td> {/* Empty cell for Monday */}
      <td></td> {/* Empty cell for Tuesday */}
      <td> <Event event = 'Codepath Homework'  color = 'pink'/></td> 
      <td></td> {/* Empty cell for Thursday */}
      <td></td> {/* Empty cell for Friday */}
      <td></td> {/* Empty cell for Saturday */}
    </tr>
  </tbody>
</table>
</div>
</div>
    )
}
export default Calendar;