import React from "react";

const emergencyContacts = [
  {
    title: "Police",
    number: "100",
    description: "Immediate assistance for law and order issues, crimes, and security threats.",
    icon: "🚨",
    image: "images/PoliceCar.jpg",
    isFeatured: true,
  },
  {
    title: "Medical Emergency",
    number: "102",
    description: "Ambulance service and quick medical response for serious health crises.",
    icon: "🏥",
    image: "images/ambulance.jpg",
  },
  {
    title: "Fire Brigade",
    number: "101",
    description: "Rapid response for all types of fire hazards, rescue operations, and disasters.",
    icon: "🔥",
    image: "images/firetruck.jpg",
  },
  {
    title: "Woman Helpline",
    number: "1091",
    description: "Dedicated support and assistance for women facing distress or violence.",
    icon: "👩‍🎤",
    image: "images/woman-help.jpg",
  },
  {
    title: "Child Helpline",
    number: "1098",
    description: "Help and assistance for children in need of care and protection.",
    icon: "🧒",
    image: "images/child-helpline.jpg",
  },
  {
    title: "Pune Municipal Corporation",
    number: "1800-103-0222",
    description: "Local civic services, disaster management, and public utility complaints.",
    icon: "🏛️",
    image: "images/pune-municipal.jpg",
  },
  {
    title: "Blood Bank",
    number: "1800-233-6655",
    description: "Connect to local blood banks in emergency situations.",
    icon: "🩸",
    image: "images/blood-bank.jpg",
  },
  {
    title: "Ambulance Services",
    number: "108",
    description: "Quick ambulance response for accidents and critical cases.",
    icon: "🚑",
    image: "images/ambulance2.jpg",
  },
];

export const Home = () => {
  const featuredContact = emergencyContacts.find((c) => c.isFeatured);
  const secondaryContacts = emergencyContacts.filter((c) => !c.isFeatured);

  const createTelLink = (number) => `tel:${number.replace(/-/g, "")}`;

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>Pune Safety Network</h1>
        <p>Connect instantly with all essential Pune emergency contacts</p>
      </header>

      {/* Featured Contacts Section (two cards side by side) */}
      <section className="featured-contact">
        <div className="featured-cards-container">
          {[featuredContact, secondaryContacts[0]].map((contact, idx) => (
            <div key={idx} className="featured-card">
              <div className="featured-icon">{contact.icon}</div>
              <h2>{contact.title}</h2>
              <a href={createTelLink(contact.number)} className="contact-link">
                {contact.number}
              </a>
              <p>{contact.description}</p>
              <img src={contact.image} alt={contact.title} />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="quick-access">
        <h2>Quick Access</h2>
        <div className="quick-cards">
          {secondaryContacts.slice(1, 5).map((contact, idx) => (
            <div key={idx} className="quick-card">
              <img src={contact.image} alt={contact.title} />
              <div className="quick-info">
                <div className="quick-icon">{contact.icon}</div>
                <h3>{contact.title}</h3>
                <a href={createTelLink(contact.number)} className="contact-link">
                  {contact.number}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Helplines Grid */}
      <section className="additional-helplines">
        <h2>Other Helplines</h2>
        <div className="helplines-grid">
          {secondaryContacts.slice(5).map((contact, idx) => (
            <div key={idx} className="helpline-card">
              <img src={contact.image} alt={contact.title} />
              <div className="helpline-info">
                <div className="helpline-icon">{contact.icon}</div>
                <h3>{contact.title}</h3>
                <a href={createTelLink(contact.number)} className="contact-link">
                  {contact.number}
                </a>
                <p>{contact.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more-container">
          <button className="view-more-btn">View All Services</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
