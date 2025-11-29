import React from "react";
import { FaHospital, FaAmbulance, FaFire, FaUserShield, FaRecycle, FaPhone } from "react-icons/fa";

export const ContactCard = ({ data, category }) => {
  if (!data) return <p>Loading contacts...</p>;

  const filterCategory = (key) => !category || key.toLowerCase().includes(category.toLowerCase());

  return (
    <div className="contact-container container my-4">
      {/* General */}
      {data.general && filterCategory("general") && (
        <Section title="General Emergency" icon={<FaPhone />}>
          {Object.entries(data.general).map(([key, val]) => (
            <ContactItem key={key} name={formatKey(key)} number={val.number || "-"} notes={val.notes} />
          ))}
        </Section>
      )}

      {/* Fire */}
      {data.fire && filterCategory("fire") && (
        <Section title="Fire & Disaster" icon={<FaFire />}>
          {Object.entries(data.fire).map(([key, val]) => (
            <ContactItem key={key} name={formatKey(key)} number={val.number || "-"} notes={val.notes} />
          ))}
        </Section>
      )}

      {/* Police */}
      {data.police_control_and_stations_sample && filterCategory("police") && (
        <Section title="Police" icon={<FaUserShield />}>
          {data.police_control_and_stations_sample.map((station, idx) => (
            <ContactItem key={idx} name={station.name} number={station.number || "-"} notes={station.area} />
          ))}
        </Section>
      )}

      {/* Ambulance */}
      {data.ambulance && filterCategory("ambulance") && (
        <Section title="Ambulance" icon={<FaAmbulance />}>
          {data.ambulance.hospital_ambulance_examples.map((hosp, idx) => (
            <ContactItem
              key={idx}
              name={hosp.hospital}
              number={Array.isArray(hosp.emergency) ? hosp.emergency.join(", ") : hosp.emergency || "-"}
              notes={hosp.ambulance ? `Ambulance: ${hosp.ambulance}` : hosp.notes}
            />
          ))}
        </Section>
      )}

      {/* Hospitals by Area */}
      {data.hospitals_by_area && Object.entries(data.hospitals_by_area).map(([area, hospitals], idx) => (
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

      {/* Women & Child */}
      {data.women_safety_and_child_help && filterCategory("women") && (
        <Section title="Women & Child Helpline" icon={<FaUserShield />}>
          {data.women_safety_and_child_help.women_helpline_numbers?.map((num, idx) => (
            <ContactItem key={idx} name="Women Helpline" number={num} />
          ))}
          <ContactItem name="Child Helpline" number={data.women_safety_and_child_help.childline || "Not Available"} />
        </Section>
      )}

      {/* Waste & PMC */}
      {data.waste_management_and_civic && filterCategory("pmc") && (
        <Section title="PMC & Waste Management" icon={<FaRecycle />}>
          <ContactItem
            name="PMC Care"
            number={data.waste_management_and_civic.pmc_care.number}
            notes="PMC online portals also available"
          />
        </Section>
      )}
    </div>
  );
};

const Section = ({ title, icon, children }) => (
  <div className="contact-section mb-4">
    <h4 className="mb-2">{icon} {title}</h4>
    <div>{children}</div>
  </div>
);

const ContactItem = ({ name, number, notes }) => (
  <div className="contact-item card p-2 mb-2">
    <div className="fw-bold">{name}</div>
    <div className="text-success">{number}</div>
    {notes && <div className="text-muted">{notes}</div>}
  </div>
);

const formatKey = (key) => key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());

export default ContactCard;
