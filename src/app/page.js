"use client";

import Image from "next/image";

const stats = [
["1,00,000+", "Sq. Ft. of Premium Developed Space"],
["2+", "Residential & Commercial Landmarks Delivered"],
["98%", "On-Time Project Delivery Rate"],
["8+", "Years of Operational Excellence"],
["100+", "Projects Completed for Sales"],
["1000+", "Happy Customers"],
["3", "Active Projects"],
];

const ongoingProjects = [
{
name: "Venu Sunshine",
location: "Gajuwaka",
type: "Residential",
configuration: "2 BHK & 3 BHK",
area: "1100 / 1155 Sq. Ft. — 2 BHK | 1430 / 1530 Sq. Ft. — 3 BHK",
image: "/images/projects/venu-sunshine/brochure.jpg",
},
{
name: "Venu Manor",
location: "Rushikonda",
type: "Residential",
configuration: "3 BHK",
area: "2147 Sq. Ft.",
image: "/images/projects/venu-manor/brochure.jpg",
},
{
name: "Fortune Glaxy",
location: "Seethammadhara",
type: "Residential",
configuration: "3 BHK",
area: "1585 Sq. Ft.",
image: "/images/projects/fortune-glaxy/brochure.jpg",
},
{
name: "Sriz Vijay Vistas",
location: "Lawsonsbay Colony",
type: "Residential",
configuration: "3 BHK",
area: "1944 Sq. Ft.",
image: "/images/projects/sriz-vijay-vistas/brochure.jpg",
},
{
name: "Sri Lalitha Abodes",
location: "AU Chinnawaltair",
type: "Residential",
configuration: "2 BHK",
area: "1062 Sq. Ft.",
image: "/images/projects/sri-lalitha-abodes/brochure.jpg",
},
];

const completedProjects = [
{
name: "Fortune Anu Ville",
location: "Vizag",
type: "Residential",
image: "/images/completed-projects/fortune-anu-ville/brochure.jpg",
},
{
name: "Fortune Galaxy",
location: "Vizag",
type: "Residential",
image: "/images/completed-projects/fortune-galaxy/brochure.jpg",
},
];

const properties = [
{
name: "Plot Kurmannapalem",
location: "Bharath Nagar, Kurmannapalem",
type: "Residential Plot",
area: "352 Sq. Yards",
image: "/images/properties/plot-kurmannapalem/brochure.jpg",
},
];

const services = [
{
number: "01",
title: "Residential Construction",
description:
"Quality-focused residential construction solutions designed around practical planning, reliable execution and long-term value.",
},
{
number: "02",
title: "Commercial Real Estate",
description:
"Helping buyers and investors identify suitable commercial opportunities with a clear focus on location, value and potential.",
},
{
number: "03",
title: "Custom Project Management",
description:
"Coordinating project requirements, timelines and execution to create a smoother experience from planning through completion.",
},
];

const values = [
{
number: "01",
title: "Trust",
description:
"Transparent communication and dependable service are at the heart of every relationship.",
},
{
number: "02",
title: "Quality",
description:
"We focus on quality materials, practical execution and attention to important details.",
},
{
number: "03",
title: "Value",
description:
"Every project is approached with long-term usability, location and value in mind.",
},
{
number: "04",
title: "Commitment",
description:
"We stay focused on timelines, communication and delivering on the commitments we make.",
},
];

const team = [
{
name: "Team Member 01",
role: "Management",
image: "/images/team/team-01.jpg",
},
{
name: "Team Member 02",
role: "Operations",
image: "/images/team/team-02.jpg",
},
{
name: "Team Member 03",
role: "Project Management",
image: "/images/team/team-03.jpg",
},
{
name: "Team Member 04",
role: "Sales",
image: "/images/team/team-04.jpg",
},
{
name: "Team Member 05",
role: "Customer Relations",
image: "/images/team/team-05.jpg",
},
{
name: "Team Member 06",
role: "Business Development",
image: "/images/team/team-06.jpg",
},
{
name: "Team Member 07",
role: "Support",
image: "/images/team/team-07.jpg",
},
];

const testimonials = [
{
text: "A professional approach with clear communication throughout the process.",
name: "Happy Customer",
role: "Home Buyer",
},
{
text: "The team was helpful in understanding our requirements and guiding us through the available options.",
name: "Happy Customer",
role: "Property Buyer",
},
{
text: "A smooth experience with good coordination and attention to our requirements.",
name: "Happy Customer",
role: "Client",
},
];

const faqs = [
{
question: "What type of properties do you deal with?",
answer:
"We work across residential and commercial real estate, including apartments, residential projects and selected land opportunities.",
},
{
question: "Can you help me choose a property?",
answer:
"Yes. We can understand your location, budget and property requirements and help you explore suitable available options.",
},
{
question: "Do you provide construction services?",
answer:
"Yes. Fortune Properties provides residential construction and project management services based on the project requirements.",
},
{
question: "Where do you operate?",
answer:
"Our current focus is on Vizag and surrounding areas, with project and property opportunities based on availability.",
},
{
question: "How can I request a consultation?",
answer:
"You can use the consultation form on this website or contact us directly using the phone numbers provided below.",
},
];

export default function Home() {
return ( <main>
{/* =========================
HEADER
========================= */}

```
<header>
  <div className="header-inner">
    <a
      href="#home"
      className="header-brand-link"
      aria-label="Fortune Properties home"
    >
      <Image
        src="/images/logo/fortune-properties-logo.png"
        alt="Fortune Properties"
        width={220}
        height={60}
        className="header-logo"
        priority
      />

      <span className="header-brand-text">
        FORTUNE PROPERTIES
      </span>
    </a>

    <nav className="main-nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#values">Why Us</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="#consultation" className="header-cta">
      Enquire Now
    </a>
  </div>
</header>
  {/* =========================
      HERO
  ========================= */}

  <section className="hero-section" id="home">
    <div className="container hero-content">
      <div className="hero-copy">
        <div className="hero-eyebrow">
          REAL ESTATE • CONSTRUCTION • PROPERTY SALES
        </div>

        <h1 className="hero-brand-name">
          FORTUNE PROPERTIES
        </h1>

        <h2>
          Accelerating Real Estate Sales. Delivering Dream Spaces.
        </h2>

        <p>
          Creating quality residential and commercial spaces with a
          focus on trust, quality and long-term value.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore Projects
          </a>

          <a
            href="#consultation"
            className="button button-outline"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </div>

    <div className="hero-scroll">
      <span>Scroll to explore</span>
      <span className="hero-scroll-line" />
    </div>
  </section>

  {/* =========================
      STATS
  ========================= */}

  <section className="stats-section">
    <div className="stats-grid">
      {stats.map(([number, label]) => (
        <div className="stat-item" key={label}>
          <div className="stat-number">{number}</div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </div>
  </section>

  {/* =========================
      ABOUT
  ========================= */}

  <section className="section about-section" id="about">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ABOUT FORTUNE PROPERTIES</p>
          <h2>
            Your Dream <span>– Our Goal</span>
          </h2>
        </div>

        <p>
          We bring together real estate opportunities, construction
          expertise and project coordination with a practical focus on
          quality and customer requirements.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">
            Fortune Properties works with a simple objective — to make
            property buying, construction and real estate sales more
            straightforward and dependable.
          </p>

          <p>
            From identifying the right property to coordinating project
            requirements, our approach is built around clear communication,
            practical solutions and long-term relationships.
          </p>

          <p>
            With experience across construction and real estate sales, we
            work closely with customers, developers and project partners to
            create value at every stage.
          </p>

          <a href="#services" className="text-link">
            Explore our services <span>→</span>
          </a>
        </div>

        <div className="about-copy">
          <p>
            Our work is guided by three simple principles: understand the
            requirement, communicate clearly and deliver responsibly.
          </p>

          <p>
            Whether you are looking for a home, exploring a property
            investment or planning a construction project, our team is
            available to help you understand your options.
          </p>

          <a href="#consultation" className="text-link">
            Talk to our team <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* =========================
      ONGOING PROJECTS
  ========================= */}

  <section className="section projects-section" id="projects">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CURRENT OPPORTUNITIES</p>
          <h2>
            Ongoing <span>Projects</span>
          </h2>
        </div>

        <p>
          Explore selected residential projects currently associated with
          Fortune Properties.
        </p>
      </div>

      <div className="projects-grid">
        {ongoingProjects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1150px) 50vw, 33vw"
              />
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span>{project.location}</span>
                <span>{project.type}</span>
              </div>

              <h3>{project.name}</h3>

              <p className="project-configuration">
                {project.configuration}
              </p>

              <p className="project-area">{project.area}</p>

              <a href="#consultation" className="project-link">
                Enquire about project <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* =========================
      COMPLETED PROJECTS
  ========================= */}

  <section className="section completed-section">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR TRACK RECORD</p>
          <h2>
            Completed <span>Projects</span>
          </h2>
        </div>

        <p>
          A selection of completed residential landmarks associated with
          Fortune Properties.
        </p>
      </div>

      <div className="completed-grid">
        {completedProjects.map((project) => (
          <article className="completed-card" key={project.name}>
            <div className="completed-image">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>

            <div className="completed-content">
              <p className="project-location">
                {project.location}
              </p>

              <h3>{project.name}</h3>

              <p>{project.type}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* =========================
      AVAILABLE PROPERTY
  ========================= */}

  <section className="section property-section">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">AVAILABLE PROPERTY</p>
          <h2>
            Selected <span>Property</span>
          </h2>
        </div>

        <p>
          Selected property opportunities available through our current
          network.
        </p>
      </div>

      <div className="property-grid">
        {properties.map((property) => (
          <article className="property-card" key={property.name}>
            <div className="property-image">
              <Image
                src={property.image}
                alt={property.name}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>

            <div className="property-content">
              <div className="property-top">
                <span>{property.type}</span>
                <span>{property.area}</span>
              </div>

              <h3>{property.name}</h3>

              <p>{property.location}</p>

              <a href="#consultation" className="project-link">
                Enquire now <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* =========================
      VALUES
  ========================= */}

  <section className="section values-section" id="values">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">WHY FORTUNE PROPERTIES</p>
          <h2>
            Built Around <span>Trust</span>
          </h2>
        </div>

        <p>
          Our approach is based on clear communication, dependable
          execution and long-term customer relationships.
        </p>
      </div>

      <div className="values-grid">
        {values.map((value) => (
          <article className="value-card" key={value.number}>
            <div className="value-number">{value.number}</div>

            <h3>{value.title}</h3>

            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* =========================
      SERVICES
  ========================= */}

  <section className="section services-section" id="services">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">WHAT WE DO</p>
          <h2>
            Our <span>Services</span>
          </h2>
        </div>

        <p>
          Practical real estate and construction services designed around
          your requirements.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-number">{service.number}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#consultation" className="text-link">
              Discuss your requirement <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* =========================
      BUYERS / DEVELOPERS
  ========================= */}

  <section className="section buyers-section">
    <div className="container">
      <div className="buyers-grid">
        <div className="buyers-block">
          <p className="eyebrow">FOR BUYERS</p>

          <h2>Looking for your next property?</h2>

          <p>
            Tell us what you are looking for and we can help you explore
            suitable residential or land opportunities based on your
            requirements.
          </p>

          <a href="#consultation" className="button button-light">
            Find a Property
          </a>
        </div>

        <div className="buyers-block buyers-block-dark">
          <p className="eyebrow">FOR DEVELOPERS</p>

          <h2>Need support with property sales?</h2>

          <p>
            We work with project partners and developers to support real
            estate sales, customer enquiries and market opportunities.
          </p>

          <a
            href="#consultation"
            className="button button-outline-light"
          >
            Discuss Partnership
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* =========================
      TEAM
  ========================= */}

  <section className="section team-section">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR PEOPLE</p>
          <h2>
            Meet the <span>Team</span>
          </h2>
        </div>

        <p>
          A team focused on customer requirements, project coordination and
          real estate opportunities.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member) => (
          <article className="team-card" key={member.name}>
            <div className="team-image">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1150px) 33vw, 25vw"
              />
            </div>

            <div className="team-content">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* =========================
      TESTIMONIALS
  ========================= */}

  <section
    className="section testimonials-section"
    id="testimonials"
  >
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CUSTOMER EXPERIENCES</p>
          <h2>
            What Our <span>Clients Say</span>
          </h2>
        </div>

        <p>
          Customer relationships remain an important part of the Fortune
          Properties approach.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article
            className="testimonial-card"
            key={testimonial.name + testimonial.role}
          >
            <div className="testimonial-mark">“</div>

            <p>{testimonial.text}</p>

            <div className="testimonial-author">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* =========================
      CONSULTATION
  ========================= */}

  <section
    className="consultation-section"
    id="consultation"
  >
    <div className="consultation-background-image">
      <Image
        src="/images/logo/fortune-properties-logo.png"
        alt=""
        fill
        sizes="100vw"
        className="consultation-logo-image"
      />
    </div>

    <div className="container consultation-grid">
      <div className="consultation-copy">
        <p className="eyebrow">LET'S TALK</p>

        <h2>
          Start Your Home <span>Construction Journey</span>
        </h2>

        <p>
          Have a property requirement, construction plan or project
          enquiry? Share your details and our team will get in touch to
          understand your requirement.
        </p>

        <div className="consultation-contact">
          <div>
            <span>Call Us</span>
            <a href="tel:9885373741">9885373741</a>
          </div>

          <div>
            <span>Call Us</span>
            <a href="tel:9912728922">9912728922</a>
          </div>
        </div>
      </div>

      <div className="consultation-card">
        <form>
          <div className="form-field">
            <label htmlFor="full-name">Full Name</label>
            <input
              id="full-name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="mobile-number">Mobile Number</label>
            <input
              id="mobile-number"
              type="tel"
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="form-field">
            <label htmlFor="plot-location">
              Plot Location
            </label>
            <input
              id="plot-location"
              type="text"
              placeholder="Area / Locality in Vizag"
            />
          </div>

          <button type="submit" className="button button-dark">
            Request Free Consultation
          </button>

          <p className="form-note">
            Your information is used only to respond to your enquiry.
            No spam.
          </p>
        </form>
      </div>
    </div>
  </section>

  {/* =========================
      FAQ
  ========================= */}

  <section className="section faq-section">
    <div className="container">
      <div className="faq-grid">
        <div>
          <p className="eyebrow">FAQ</p>

          <h2>
            Frequently Asked <span>Questions</span>
          </h2>

          <p className="faq-intro">
            Have questions about our properties, construction services or
            how we work? Find some common answers below.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq-plus">+</span>
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* =========================
      CONTACT
  ========================= */}

  <section className="section contact-section" id="contact">
    <div className="container">
      <div className="contact-grid">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>

          <h2>
            Let's Build Your <span>Next Chapter</span>
          </h2>

          <p className="contact-intro">
            Whether you are buying a home, exploring an investment or
            planning a construction project, Fortune Properties is here to
            help you understand your options.
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <span>Phone</span>
            <a href="tel:9885373741">9885373741</a>
            <a href="tel:9912728922">9912728922</a>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <p>Vizag, Andhra Pradesh</p>
          </div>

          <div className="contact-item">
            <span>Availability</span>
            <p>For property and project enquiries</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* =========================
      FOOTER
  ========================= */}

  <footer>
    <div className="footer-grid">
      <div className="footer-brand">
        <h3>FORTUNE PROPERTIES</h3>

        <p>
          Accelerating Real Estate Sales. Delivering Dream Spaces.
        </p>

        <p>
          Real Estate • Construction • Property
        </p>
      </div>

      <div className="footer-links">
        <div>
          <span className="footer-title">Explore</span>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
        </div>

        <div>
          <span className="footer-title">Connect</span>
          <a href="#consultation">Consultation</a>
          <a href="#contact">Contact</a>
          <a href="tel:9885373741">9885373741</a>
          <a href="tel:9912728922">9912728922</a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>
        © {new Date().getFullYear()} Fortune Properties. All rights
        reserved.
      </p>

      <a href="#home">Back to top ↑</a>
    </div>
  </footer>
</main>
);
}