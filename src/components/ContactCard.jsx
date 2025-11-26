import { FaHospital, FaAmbulance, FaFire, FaUserShield, FaRecycle, FaPhone } from "react-icons/fa";

export const ContactCard = ({ data }) => {
  if (!data) return <p>Loading contacts...</p>;

  const { general, fire, police_control_and_stations_sample, ambulance, hospitals_by_area, women_safety_and_child_help, waste_management_and_civic } = data;

  return (
    <div className="contact-container">
      {/* General Contacts */}
      <Section title="General Emergency" icon={<FaPhone />}>
        {Object.entries(general).map(([key, val]) => (
          <ContactItem key={key} name={formatKey(key)} number={val.number || val.emergency || val.numbers || "-"} notes={val.notes} />
        ))}
      </Section>

      {/* Fire */}
      <Section title="Fire & Disaster" icon={<FaFire />}>
        {Object.entries(fire).map(([key, val]) => (
          <ContactItem key={key} name={formatKey(key)} number={val.number || "-"} notes={val.alternate || val.notes} />
        ))}
      </Section>

      {/* Police */}
      <Section title="Police" icon={<FaUserShield />}>
        {police_control_and_stations_sample.map((station, idx) => (
          <ContactItem key={idx} name={station.name} number={station.number || "-"} notes={station.area} />
        ))}
      </Section>

      {/* Ambulance */}
      <Section title="Ambulance" icon={<FaAmbulance />}>
        {ambulance.hospital_ambulance_examples.map((hosp, idx) => (
          <ContactItem
            key={idx}
            name={hosp.hospital}
            number={Array.isArray(hosp.emergency) ? hosp.emergency.join(", ") : hosp.emergency}
            notes={hosp.ambulance ? `Ambulance: ${hosp.ambulance}` : hosp.notes}
          />
        ))}
      </Section>

      {/* Hospitals by Area */}
      {Object.entries(hospitals_by_area).map(([area, hospitals], idx) => (
        <Section key={idx} title={`Hospitals - ${area}`} icon={<FaHospital />}>
          {hospitals.map((hosp, i) => (
            <ContactItem
              key={i}
              name={hosp.name}
              number={Array.isArray(hosp.emergency) ? hosp.emergency.join(", ") : hosp.emergency || hosp.contact || "-"}
              notes={hosp.ambulance ? `Ambulance: ${hosp.ambulance}` : hosp.type || ""}
            />
          ))}
        </Section>
      ))}

      {/* Women/Child Help */}
      <Section title="Women & Child Helpline" icon={<FaUserShield />}>
       {women_safety_and_child_help?.women_helpline_numbers?.length > 0 ? (
  women_safety_and_child_help.women_helpline_numbers.map((num, idx) => (
    <ContactItem key={idx} name="Women Helpline" number={num} />
  ))
) : (
  <ContactItem name="Women Helpline" number="Not Available" />
)}

<ContactItem
  name="Child Helpline"
  number={women_safety_and_child_help?.childline || "Not Available"}
/>

      </Section>

      {/* Waste Management & PMC */}
      <Section title="PMC & Waste Management" icon={<FaRecycle />}>
        <ContactItem name="PMC Care" number={waste_management_and_civic.pmc_care.number} notes="PMC online portals also available" />
      </Section>
    </div>
  );
};

// Sub-components
const Section = ({ title, icon, children }) => (
  <div className="contact-section">
    <h3 className="section-title">{icon} {title}</h3>
    <div className="section-items">{children}</div>
  </div>
);

const ContactItem = ({ name, number, notes }) => (
  <div className="contact-item">
    <div className="contact-name">{name}</div>
    <div className="contact-number">{number}</div>
    {notes && <div className="contact-notes">{notes}</div>}
  </div>
);

// Helper
const formatKey = (key) => key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
