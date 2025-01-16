"use client";

import styled from "styled-components";

export default function Services() {
  const services = [
    "Ölwechsel-Service",
    "Reifenservice",
    "Fahrzeugwartung",
    "Diagnose-Service",
    "Bremsen-Service",
    "Klimaanlagenwartung",
    "Lack- und Karosseriearbeiten",
    "Batterieservice",
    "Achsvermessung",
    "Scheinwerfer-Politur",
    "TÜV- und Abgasuntersuchung",
    "Scheibenreparatur",
    "Motorreinigung",
    "Chiptuning",
    "Fahrzeugaufbereitung",
  ];

  return (
    <ServiceSection>
      <h1>Unsere Dienstleistungen</h1>
      <ServiceList>
        {services.map((service, index) => (
          <ServiceItem key={index}>{service}</ServiceItem>
        ))}
      </ServiceList>
    </ServiceSection>
  );
}

const ServiceSection = styled.section`
  min-height: 100vh;
  padding: 2rem;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  flex: 1;
`;

const ServiceItem = styled.li`
  background-color: #34495e;
  color: #ecf0f1;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    background-color: #3b5998;
  }
`;
