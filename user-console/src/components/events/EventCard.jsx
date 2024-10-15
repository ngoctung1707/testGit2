//Component hiển thị card sự kiện
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <Link to={`/events/${event.id}`}>View Details</Link> {/* Liên kết đến trang chi tiết sự kiện */}
      <button>Book Now</button>
    </div>
  );
};

export default EventCard;

