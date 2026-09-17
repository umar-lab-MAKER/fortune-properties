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
    name: "IRISE Prime – Elevate Your Living",
    location: "Urvashi Jn., Kancharapalem, Visakhapatnam",
    type: "Luxury Apartments",
    configuration: "2 BHK & 3 BHK",
    area: "1220–1550 Sq. Ft.",
    image: "/images/projects/irise/irise-01.jpg",
  },
  {
    name: "Venu Sunshine",
    location: "Gajuwaka",
    type: "Residential",
    configuration: "2 BHK & 3 BHK",
    area:
      "1100 / 1155 Sq. Ft. — 2 BHK | 1430 / 1530 Sq. Ft. — 3 BHK",
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
    image:
      "/images/completed-projects/fortune-anu-ville/brochure.jpg",
  },
  {
    name: "Fortune Galaxy",
    location: "Vizag",
    type: "Residential",
    image:
      "/images/completed-projects/fortune-galaxy/brochure.jpg",
  },
];

const propertyListings = [
  {
    name: "Plot Kurmannapalem",
    location: "Bharath Nagar, Kurmannapalem",
    type: "Residential Plot",
    area: "352 Sq. Yards",
    image:
      "/images/properties/plot-kurmannapalem/brochure.jpg",
  },
];

const services = [
  {
    number: "01",
    title: "Residential Construction",
    text: "End-to-end residential construction solutions focused on quality, functionality and lasting value.",
  },
  {
    number: "02",
    title: "Commercial Real Estate",
    text: "Strategic commercial property solutions designed around location, opportunity and long-term potential.",
  },
  {
    number: "03",
    title: "Custom Project Management",
    text: "Professional project coordination and management to ensure quality execution and timely delivery.",
  },
];

const values = [
  {
    title: "Trust",
    text: "Transparent communication and dependable relationships form the foundation of everything we do.",
  },
  {
    title: "Quality",
    text: "We focus on quality construction, thoughtful planning and attention to every important detail.",
  },
  {
    title: "Value",
    text: "Every project is approached with long-term value for customers, investors and partners in mind.",
  },
  {
    title: "Commitment",
    text: "We stay committed to our customers and projects from the first conversation through completion.",
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
    quote:
      "The team maintained excellent communication throughout the process. Their approach was professional and transparent.",
    name: "Residential Customer",
    role: "Home Buyer",
  },
  {
    quote:
      "We appreciated the attention to detail and the commitment shown during every stage of the project.",
    name: "Property Customer",
    role: "Home Owner",
  },
  {
    quote:
      "A dependable team that understands customer requirements and focuses on delivering quality spaces.",
    name: "Real Estate Customer",
    role: "Property Buyer",
  },
];

const faqs = [
  {
    question: "What type of properties does Fortune Properties handle?",
    answer:
      "We work across residential construction, residential properties, commercial real estate opportunities and selected property sales.",
  },
  {
    question: "Can I get assistance choosing a property?",
    answer:
      "Yes. Our team can understand your requirements and help you explore suitable property options based on location, configuration and budget.",
  },
  {
    question: "Do you provide construction-related consultation?",
    answer:
      "Yes. We provide consultation and project management support for customers looking to plan and develop residential or commercial spaces.",
  },
  {
    question: "How can I enquire about a project?",
    answer:
      "You can use the enquiry form on this website or contact our team directly using the details provided in the contact section.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
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

      {/* HERO */}
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

              <a href="#consultation" className="button button-outline">
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

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map(([number, label]) => (
            <div className="stat-item" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="container about-editorial">
          <div className="about-title-column">
            <div className="about-heading">
              <span className="section-eyebrow">ABOUT US</span>

              <h2>
                <span>Your</span>
                <span>Dream –</span>
                <span>Our Goal</span>
              </h2>
            </div>
          </div>

          <div className="about-copy">
            <p className="lead">
              Fortune Properties is focused on creating quality
              residential and commercial spaces while helping customers
              make confident property decisions.
            </p>

            <p>
              From property sales and construction support to project
              management, we bring together practical knowledge,
              customer-focused service and a commitment to quality.
            </p>

            <p>
              Our approach is built around trust, transparency and
              long-term relationships with customers and partners.
            </p>

            <a href="#consultation" className="text-link">
              Talk to our team →
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="section-eyebrow">OUR PROJECTS</span>

            <h2>Spaces Designed for Better Living</h2>

            <p>
              Explore selected residential and commercial projects
              associated with Fortune Properties.
            </p>
          </div>

          <div className="projects-grid">
            {ongoingProjects.map((project) => (
              <article
                className="project-card"
                key={project.name}
              >
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.name} brochure`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1150px) 50vw, 33vw"
                  />
                </div>

                <div className="project-content">
                  <div className="project-type">
                    {project.type}
                  </div>

                  <h3>{project.name}</h3>

                  <div className="project-location">
                    {project.location}
                  </div>

                  <div className="project-details">
                    <div>
                      <span>Configuration</span>
                      <strong>{project.configuration}</strong>
                    </div>

                    <div>
                      <span>Area</span>
                      <strong>{project.area}</strong>
                    </div>
                  </div>

                  <a
                    href="#consultation"
                    className="project-link"
                  >
                    Enquire About Project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETED PROJECTS */}
      <section className="section completed-section">
        <div className="container">
          <div className="completed-heading">
            <span className="section-eyebrow">
              COMPLETED PROJECTS
            </span>

            <h2>
              <span>Delivered</span>
              <span>With</span>
              <span>Commitment</span>
            </h2>
          </div>

          <div className="completed-grid">
            {completedProjects.map((project) => (
              <article
                className="completed-card"
                key={project.name}
              >
                <div className="completed-image">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>

                <div className="completed-content">
                  <span>{project.type}</span>

                  <h3>{project.name}</h3>

                  <p>{project.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY LISTINGS */}
      <section className="section property-section">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="section-eyebrow">
              PROPERTY OPPORTUNITIES
            </span>

            <h2>Find the Right Property</h2>

            <p>
              Selected property opportunities for customers looking
              for the right location and long-term value.
            </p>
          </div>

          <div className="property-grid">
            {propertyListings.map((property) => (
              <article
                className="property-card"
                key={property.name}
              >
                <div className="property-image">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>

                <div className="property-content">
                  <span>{property.type}</span>

                  <h3>{property.name}</h3>

                  <p>{property.location}</p>

                  <div className="property-area">
                    {property.area}
                  </div>

                  <a
                    href="#consultation"
                    className="project-link"
                  >
                    Enquire Now →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section" id="values">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="section-eyebrow">
              WHY FORTUNE PROPERTIES
            </span>

            <h2>Built Around What Matters</h2>

            <p>
              Our work is guided by principles that help us build
              stronger projects and lasting relationships.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <article
                className="value-card"
                key={value.title}
              >
                <span className="value-number">
                  0{index + 1}
                </span>

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="services-layout">
            <div className="services-heading">
              <span className="section-eyebrow">
                OUR SERVICES
              </span>

              <h2>Real Estate Solutions With Purpose</h2>

              <p>
                Practical services designed around property,
                construction and project requirements.
              </p>
            </div>

            <div className="services-list">
              {services.map((service) => (
                <article
                  className="service-item"
                  key={service.number}
                >
                  <span>{service.number}</span>

                  <div>
                    <h3>{service.title}</h3>

                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUYERS / DEVELOPERS */}
      <section className="section partnership-section">
        <div className="container partnership-grid">
          <div className="partnership-card">
            <span className="section-eyebrow">FOR BUYERS</span>

            <h2>Looking for Your Next Property?</h2>

            <p>
              Tell us what you are looking for and our team can help
              you explore suitable residential and property options.
            </p>

            <a
              href="#consultation"
              className="button button-primary"
            >
              Discuss Your Requirement
            </a>
          </div>

          <div className="partnership-card partnership-card-dark">
            <span className="section-eyebrow">
              FOR DEVELOPERS &amp; PARTNERS
            </span>

            <h2>Let&apos;s Build Opportunities Together</h2>

            <p>
              Connect with our team to discuss sales, property and
              project opportunities.
            </p>

            <a
              href="#consultation"
              className="button button-outline-dark"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section team-section">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="section-eyebrow">OUR TEAM</span>

            <h2>People Behind the Projects</h2>

            <p>
              A dedicated team working across management, operations,
              sales and customer relationships.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <article
                className="team-card"
                key={member.name}
              >
                <div className="team-image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 700px) 50vw, 20vw"
                  />
                </div>

                <div className="team-content">
                  <h3>{member.name}</h3>

                  <span>{member.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="section testimonials-section"
        id="testimonials"
      >
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="section-eyebrow">
              TESTIMONIALS
            </span>

            <h2>What Our Customers Say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article
                className="testimonial-card"
                key={testimonial.name}
              >
                <div className="testimonial-mark">
                  &ldquo;
                </div>

                <p>{testimonial.quote}</p>

                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>

                  <span>{testimonial.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section
        className="section consultation-section"
        id="consultation"
      >

        <div className="container consultation-grid">
          <div className="consultation-copy">
            <span className="section-eyebrow">
              FREE EXPERT CONSULTATION
            </span>

            <h2>
              Start Your Home Construction Journey
            </h2>

            <p>
              Share your requirements with our team and let&apos;s
              discuss the right way forward for your property or
              construction needs.
            </p>

            <div className="consultation-contact">
              <div>
                <span>Call Us</span>

                <a href="tel:9885373741">
                  9885373741
                </a>
              </div>

              <div>
                <span>Alternative Number</span>

                <a href="tel:9912728922">
                  9912728922
                </a>
              </div>
            </div>
          </div>

          <div className="consultation-form-box">
            <h3>Tell Us About Your Requirement</h3>

            <form>
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">
                  Mobile Number
                </label>

                <input
                  id="mobile"
                  type="tel"
                  placeholder="Your mobile number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="plotLocation">
                  Plot Location
                </label>

                <input
                  id="plotLocation"
                  type="text"
                  placeholder="Area / Locality in Visakhapatnam"
                />
              </div>

              <button
                type="submit"
                className="button button-primary form-submit"
              >
                Request Consultation
              </button>

              <p className="form-note">
                Your information is kept private. No spam or
                unnecessary follow-ups.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="faq-heading">
            <div className="faq-label">
              <span className="section-eyebrow">
                FAQ
              </span>
            </div>

            <div className="faq-title">
              <h2>
                <span>Frequently</span>
                <span>Asked</span>
                <span>Questions</span>
              </h2>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details
                className="faq-item"
                key={faq.question}
              >
                <summary>
                  <span className="faq-number">
                    0{index + 1}
                  </span>

                  <span className="faq-question">
                    {faq.question}
                  </span>

                  <span className="faq-plus">
                    +
                  </span>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="section contact-section"
        id="contact"
      >
        <div className="container contact-grid">
          <div>
            <span className="section-eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              Let&apos;s Talk About Your Next Property
            </h2>

            <p>
              Whether you are looking to buy, build or explore a
              property opportunity, our team is ready to understand
              your requirement.
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <span>Phone</span>

              <a href="tel:9885373741">
                9885373741
              </a>
            </div>

            <div className="contact-item">
              <span>Alternative Phone</span>

              <a href="tel:9912728922">
                9912728922
              </a>
            </div>

            <div className="contact-item">
              <span>Location</span>

              <strong>
                Visakhapatnam, Andhra Pradesh
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <div>
            <strong>FORTUNE PROPERTIES</strong>

            <p>
              Real Estate • Construction • Property Sales
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Fortune Properties. All
            rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}