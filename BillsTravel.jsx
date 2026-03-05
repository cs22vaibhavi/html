import React from "react";
import "./BillsTravel.css";

const services = [
  { name: "Mobile", icon: "📱" },
  { name: "Electricity", icon: "💡" },
  { name: "DTH", icon: "📡" },
  { name: "Water", icon: "💧" },
  { name: "Gas", icon: "⛽" },
  { name: "Insurance", icon: "☂️" },
];

const travel = [
  { name: "Flight", icon: "✈️", text: "Powered By Easemytrip.com" },
  { name: "Bus", icon: "🚌", text: "Affordable Rides" },
  { name: "Train", icon: "🚆" },
  { name: "Hotel", icon: "🏨", text: "Budget-friendly Stay" },
  { name: "Car Rentals", icon: "🚗", text: "Drive Easy Anywhere" },
];

const BillsTravel = () => {
  return (
    <div className="container">
      <div className="section">
        <h2>
          Bills & Recharge <span className="brand">Bharat Connect</span>
        </h2>
        <p>Pay your bills & recharge instantly with Justdial</p>
        <div className="items">
          {services.map((service) => (
            <div className="item" key={service.name}>
              <span className="icon">{service.icon}</span>
              <p>{service.name}</p>
            </div>
          ))}
        </div>
        <a href="#">Explore More</a>
      </div>

      <div className="section">
        <h2>Travel Bookings</h2>
        <p>Instant ticket bookings for your best travel experience</p>
        <div className="items">
          {travel.map((service) => (
            <div className="item" key={service.name}>
              <span className="icon">{service.icon}</span>
              <p>{service.name}</p>
              {service.text && <small>{service.text}</small>}
            </div>
          ))}
        </div>
        <a href="#">Explore More</a>
      </div>
    </div>
  );
};

export default BillsTravel;
