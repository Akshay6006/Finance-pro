import React from "react";
import "../styles/Services.css";

export default function Services() {
  const services = [
    { title: "Wealth Management", desc: "Personalized wealth growth strategies." },
    { title: "Tax Advisory", desc: "Optimize tax savings with expert advice." },
    { title: "Retirement Planning", desc: "Secure your future with confidence." },
    { title: "Stock Market Insights", desc: "Stay ahead with curated insights." },
    { title: "Digital Banking", desc: "Fast, reliable, and secure banking." },
    { title: "Insurance Plans", desc: "Tailored coverage for every need." },
    { title: "Cryptocurrency Advisory", desc: "Navigate crypto safely & profitably." },
    { title: "Business Loans", desc: "Fuel your business with flexible loans." },
    { title: "AI Investment Tools", desc: "Smarter decisions with AI assistance." },
    { title: "Green Investments", desc: "Invest in eco-friendly businesses." },
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="services-subtitle">
        Explore the wide range of financial services we provide to empower you.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
