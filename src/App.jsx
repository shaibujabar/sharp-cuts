import React from 'react';

const services = [
  {
    number: '01',
    name: 'Haircut',
    description: 'A fresh cut, finished just how you like it. Clean lines, no rush.',
    price: '₦8,000',
  },
  {
    number: '02',
    name: 'Beard Trim',
    description: 'A precise shape-up and tidy finish to keep your beard looking sharp.',
    price: '₦5,000',
  },
  {
    number: '03',
    name: 'Haircut + Beard',
    description: 'The full reset. A fresh cut paired with a crisp, clean beard trim.',
    price: '₦12,000',
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sharp Cuts home">
          <span className="brand-mark" aria-hidden="true">SC</span>
          <span>SHARP CUTS<span className="brand-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">Our story</a>
          <a href="#contact">Find us</a>
        </nav>
        <a className="header-book" href="#contact">
          Book a chair <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> THE LAGOS BARBER CLUB</p>
            <h1>Look sharp.<br />Feel <span>yourself.</span></h1>
            <p className="hero-description">
              Great cuts, good people, no fuss. Pull up for a fresh look and leave
              feeling like you.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Book Now <ArrowIcon />
              </a>
              <a className="text-link" href="#services">Explore services <span>↓</span></a>
            </div>
            <div className="hero-note">
              <span className="status-dot" />
              <span>Walk-ins welcome · Good hair guaranteed</span>
            </div>
          </div>
          <div className="hero-image" role="img" aria-label="A warm, modern barbershop interior">
            <div className="image-tag"><span>EST.</span> 2018 <i /> LAGOS, NG</div>
            <div className="image-caption">
              <span>YOUR CHAIR IS WAITING</span>
              <span className="caption-rule" />
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">01 <span /> 03</div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> THE GOOD STUFF</p>
              <h2>Find your <span>fresh.</span></h2>
            </div>
            <p className="section-intro">
              The essentials, done exceptionally well. Every cut comes with good
              conversation and a proper finish.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-arrow"><ArrowIcon /></span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-price">
                  <span>FROM</span>
                  <strong>{service.price}</strong>
                </div>
              </article>
            ))}
          </div>
          <p className="service-footnote">All prices in Nigerian naira. Good vibes included.</p>
        </section>

        <section className="about" id="about">
          <div className="about-inner section-wrap">
            <div className="about-photo" role="img" aria-label="Barber tools ready for a fresh cut">
              <span className="photo-stamp">GOOD<br />HANDS.<br /><b>GOOD<br />HAIR.</b></span>
            </div>
            <div className="about-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> MORE THAN A CUT</p>
              <h2>A little ritual.<br />A lot of <span>confidence.</span></h2>
              <p>
                Sharp Cuts started with a simple idea: a barbershop should feel as
                good as you look when you leave. We bring skilled hands, proper
                attention, and a relaxed seat to every appointment.
              </p>
              <p>
                No complicated stuff. Just your cut, your way — and a place you’ll
                want to come back to.
              </p>
              <a className="text-link about-link" href="#contact">Come say hello <ArrowIcon /></a>
              <div className="about-stat"><strong>8<span>+</span></strong><span>YEARS KEEPING LAGOS<br />LOOKING SHARP</span></div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT GOOD HAIR DAY</p>
            <h2>Come through.<br /><span>We’re ready.</span></h2>
          </div>
          <div className="contact-details">
            <a className="contact-item" href="tel:+2348012345678">
              <span className="contact-label">GIVE US A RING</span>
              <span className="contact-value">+234 801 234 5678 <ArrowIcon /></span>
            </a>
            <a className="contact-item" href="mailto:hello@sharpcuts.ng">
              <span className="contact-label">DROP A NOTE</span>
              <span className="contact-value">hello@sharpcuts.ng <ArrowIcon /></span>
            </a>
            <div className="contact-item">
              <span className="contact-label">PULL UP</span>
              <span className="contact-value">14 Allen Avenue, Ikeja,<br />Lagos, Nigeria</span>
            </div>
            <div className="contact-hours">
              <span className="contact-label">WHEN WE’RE AROUND</span>
              <span>Mon–Sat <b>9am — 8pm</b></span>
              <span>Sunday <b>10am — 5pm</b></span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">SC</span>
          <span>SHARP CUTS<span className="brand-period">.</span></span>
        </a>
        <span className="footer-message">GOOD CUTS. GOOD PEOPLE. GOOD ENERGY.</span>
        <span className="footer-copyright">© 2025 SHARP CUTS. ALL RIGHTS RESERVED.</span>
        <a className="back-to-top" href="#top" aria-label="Back to top">↑</a>
      </footer>
    </>
  );
}

export default App;
