//Component hiển thị chi tiết sự kiện

import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'; // Chỉnh sửa đường dẫn
import Header from '../common/Header'; // Chỉnh sửa đường dẫn
import Footer from '../common/Footer'; // Chỉnh sửa đường dẫn

const EventDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const { data, loading, error } = useFetch(`https://api.example.com/events/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Header />
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p>{data.location}</p>
      <p>{data.description}</p>
      <Footer />
    </div>
  );
};

export default EventDetail;

