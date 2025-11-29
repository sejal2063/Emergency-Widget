import React from "react";

const emergencyContacts = [
  { title: "Police", number: "100", description: "Immediate assistance for law and order issues.", icon: "🚨", image: "images/PoliceCar.jpg", isFeatured: true },
  { title: "Medical Emergency", number: "102", description: "Quick medical response for serious health crises.", icon: "🏥", image: "images/medicalemergency.png" },
  { title: "Fire Brigade", number: "101", description: "Rapid response for fire hazards and disasters.", icon: "🔥", image: "images/firebrigade.jpg" },
  { title: "Woman Helpline", number: "1091", description: "Support for women facing distress or violence.", icon: "👩‍🎤", image: "images/Womanhelpline.jpeg" },
  { title: "Child Helpline", number: "1098", description: "Help for children in need of care and protection.", icon: "🧒", image: "images/childcare.jpg" },
  { title: "Pune Municipal Corporation", number: "1800-103-0222", description: "Local civic services and disaster management.", icon: "🏛️", image: "images/PMC.jpg" },
  { title: "Blood Bank", number: "1800-233-6655", description: "Connect to local blood banks in emergencies.", icon: "🩸", image: "images/blood-bank.jpg" },
  { title: "Ambulance Services", number: "108", description: "Quick ambulance response for critical cases.", icon: "🚑", image: "images/ambulance2.png" },
];

export const Home = () => {
  const featuredContact = emergencyContacts.find(c => c.isFeatured);
  const secondaryContacts = emergencyContacts.filter(c => !c.isFeatured);
  const createTelLink = (number) => `tel:${number.replace(/-/g, "")}`;

  return (
    <div className="home-container container my-4">
      <header className="text-center mb-4">
        <h1>Pune Safety Network</h1>
        <p>Connect instantly with all essential Pune emergency contacts</p>
      </header>
      {/* Featured Contacts */}
      <section className="featured-contact mb-4 d-flex flex-wrap justify-content-center gap-3">
        {[featuredContact, secondaryContacts[0]].map((contact, idx) => (
          <div key={idx} className="card featured-card" style={{ width: "18rem" }}>
            <img src={contact.image} className="card-img-top" alt={contact.title} />
            <div className="card-body text-center">
              <h5 className="card-title">{contact.icon} {contact.title}</h5>
              <p className="card-text text-center">{contact.description}</p>
              <a href={createTelLink(contact.number)} className="btn btn-success">{contact.number}</a>
            </div>
          </div>
        ))}
      </section>

      {/* Quick Access */}
      <section className="quick-access mb-4">
        <h3 className="mb-3">Quick Access</h3>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {secondaryContacts.slice(1, 5).map((contact, idx) => (
            <div key={idx} className="card" style={{ width: "15rem" }}>
              <img src={contact.image} className="card-img-top" alt={contact.title} />
              <div className="card-body text-center">
                <h6>{contact.icon} {contact.title}</h6>
                <a href={createTelLink(contact.number)} className="btn btn-sm btn-success">{contact.number}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Helplines */}
      <section className="additional-helplines">
        <h3 className="mb-3">Other Helplines</h3>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {secondaryContacts.slice(5).map((contact, idx) => (
            <div key={idx} className="card" style={{ width: "15rem" }}>
              <img src={contact.image} className="card-img-top" alt={contact.title} />
              <div className="card-body text-center">
                <h6>{contact.icon} {contact.title}</h6>
                <a href={createTelLink(contact.number)} className="btn btn-sm btn-info">{contact.number}</a>
                <p className="card-text mt-2">{contact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
