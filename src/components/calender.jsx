import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  { id: 1, date: '2024-08-08', title: 'Meeting with Team' },
  { id: 2, date: '2024-08-09', title: 'Festival Celebration' },
  { id: 3, date: '2024-08-10', title: 'Project Deadline' },
  { id: 4, date: '2024-08-12', title: 'Conference Call' },
  { id: 5, date: '2024-08-15', title: 'Team Building Activity' }
];

const EventPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleDateChange = (date) => {
    setDate(date);
    const selectedDate = date.toISOString().split('T')[0];
    const filteredEvents = events.filter(event => event.date === selectedDate);
    setSelectedEvents(filteredEvents);
  };

  const tileClassName = ({ date }) => {
    const day = date.toISOString().split('T')[0];
    return events.some(event => event.date === day) ? 'highlight' : null;
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="p-4 border-b border-gray-300 flex justify-between items-center bg-white shadow-md">
        <h2 className="text-lg font-bold">Events</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200">Add Event</button>
      </div>

      <div className="flex flex-1 p-4 space-x-4">
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileClassName={tileClassName}
            className="w-full"
          />
        </div>

        <div className="w-1/3 bg-white p-4 border-l border-gray-300 rounded-lg shadow-md">
          <h2 className="text-lg font-bold  text-blue mb-4">Events on {date.toDateString()}</h2>
          <div className="space-y-4">
            {selectedEvents.length === 0 ? (
              <p>No events for selected date.</p>
            ) : (
              selectedEvents.map(event => (
                <div key={event.id} className="border p-2 rounded-lg shadow-sm">
                  <p>{event.title}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
