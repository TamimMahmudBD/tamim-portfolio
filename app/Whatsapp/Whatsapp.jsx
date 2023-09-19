import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  // Replace '1234567890' with your actual WhatsApp number.
  const phoneNumber = '+8801957131173';

  return (
    <a
      href={`https://wa.me/$+8801957131173`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp/>
    </a>
  );
};

export default Whatsapp;
