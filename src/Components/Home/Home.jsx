import { Link } from "react-router-dom";
import {
  Arrow,
  ButtonLink,
  Eyebrow,
  ProductCard,
  ProjectCTA,
  SectionHeading,
} from "../UI";
import { company, machines, services } from "../../Data/Machines";

export default function Home() {
  // Featured machines for the homepage collection
  const featured = [
    machines[0], // De-Stoner
    machines[1], // Fatka Machine
    machines[2], // Rill Machine
    machines[6], // Dal Polisher
  ].filter(Boolean);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/media/hero.webp"
          alt="An installed milling plant with steel structures and interconnected processing equipment"
          width="1280"
          height="720"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <Eyebrow light>FOOD PROCESSING MACHINERY</Eyebrow>
          <h1 id="hero-title">
            Engineering
            <br />
            that powers
            <br />
            <em>production.</em>
          </h1>
          <p>
            Food processing machinery and turnkey plant solutions.
            <br />
            Considered from the first drawing. Built for the work ahead.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/products">Explore our machinery</ButtonLink>
            <Link className="hero-secondary" to="/about">
              About our manufacturing
              <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>
            <span className="status-dot" />
            MANUFACTURED IN SOLAPUR, INDIA
          </span>
          <span>
            SOLAPUR, MAHARASHTRA
            <span className="hero-bottom-line" />
            ENGINEERED TO ENDURE
          </span>
          <a
            href="#introduction"
            className="scroll-link"
            aria-label="Discover our approach"
          >
            SCROLL TO DISCOVER<span>↓</span>
          </a>
        </div>
        <div className="hero-image-label">A CLOSER LOOK AT OUR WORLD / 01</div>
      </section>

      <div className="capability-strip">
        <div className="container">
          <span>FOOD PROCESSING MACHINERY</span>
          <span className="strip-star">✧</span>
          <span>INTEGRATED PLANT SOLUTIONS</span>
          <span className="strip-star">✧</span>
          <span>BUILT AROUND YOUR PROCESS</span>
        </div>
      </div>

      <section className="section intro-section" id="introduction">
        <div className="container intro-grid">
          <div>
            <Eyebrow>THE NATIONAL APPROACH</Eyebrow>
            <span className="section-index">01 / WHO WE ARE</span>
          </div>
          <div>
            <h2>
              The measure of a machine
              <br />
              is what it makes <em>possible.</em>
            </h2>
            <div className="intro-bottom">
              <p>
                Behind every productive plant is a series of thoughtful
                decisions. National Engineering Works makes grain and pulse
                processing machinery in Solapur, Maharashtra, with equipment
                and plant options shaped around each customer&apos;s requirements.
              </p>
              <Link className="text-link" to="/about">
                Discover our story
                <Arrow diagonal />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section collection-section">
        <div className="container">
          <SectionHeading
            eyebrow="THE MACHINERY COLLECTION"
            title={
              <>
                Machinery for every stage.
                <br />
                <em>Built for your process.</em>
              </>
            }
            link="/products"
            linkText="View all machinery"
          />
          <div className="home-product-grid">
            {featured.map((product, index) => (
              <ProductCard
                key={product.id || product.slug}
                product={product}
                index={index}
              />
            ))}
          </div>
          <p className="image-note">
            Illustrative equipment photography from our workshop and installed
            plants. Final equipment configuration is confirmed for each enquiry.
          </p>
        </div>
      </section>

      <section className="craft-section">
        <div className="craft-photo">
          <img
            src="/media/factory.webp"
            alt="Interior of a grain processing plant, showing machinery and material handling systems"
            loading="lazy"
            width="1280"
            height="720"
          />
          <span>FROM THE WORKSHOP TO THE WORKING FLOOR.</span>
        </div>
        <div className="craft-copy">
          <Eyebrow light>MORE THAN A MACHINE</Eyebrow>
          <h2>
            Every component.
            <br />
            One considered
            <br />
            <em>whole.</em>
          </h2>
          <p>
            A plant is only as good as the way it works together. We look beyond
            individual machines to the movement of materials, the connections
            between stages, and the people who operate them.
          </p>
          <Link to="/services" className="text-link text-link--light">
            Explore our expertise
            <Arrow diagonal />
          </Link>
          <div className="craft-values">
            <span>
              01<span>Practical by design</span>
            </span>
            <span>
              02<span>Built around your needs</span>
            </span>
            <span>
              03<span>Support beyond installation</span>
            </span>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container expertise-grid">
          <div className="expertise-intro">
            <Eyebrow>FROM CONCEPT TO CONTINUITY</Eyebrow>
            <h2>
              A partner at
              <br />
              <em>every stage.</em>
            </h2>
            <p>
              One conversation can shape an entire production line. Our work
              continues through planning, manufacturing, installation, and
              ongoing support.
            </p>
            <Link className="text-link" to="/services">
              How we work
              <Arrow diagonal />
            </Link>
          </div>
          <div className="service-accordion">
            {services.map((service, index) => (
              <details key={service.number} open={index === 0}>
                <summary>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <span className="accordion-plus" aria-hidden="true" />
                </summary>
                <div className="accordion-content">
                  <p>{service.description}</p>
                  <Link to="/services">
                    Discover more
                    <Arrow />
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="factory-banner">
        <img
          src="/media/installation.webp"
          alt="An installation of conveyors, elevators, and supporting steelwork inside a processing plant"
          loading="lazy"
          width="1280"
          height="720"
        />
        <div className="container">
          <Eyebrow light>ROOTED IN SOLAPUR. BUILT FOR YOUR AMBITION.</Eyebrow>
          <h2>
            Real people.
            <br />
            Real engineering.
            <br />
            <em>Lasting possibilities.</em>
          </h2>
          <ButtonLink to="/about" secondary>
            Inside National Engineering
          </ButtonLink>
        </div>
      </section>

      <section className="section" aria-labelledby="solapur-manufacturer-title">
        <div className="container">
          <div className="max-w-3xl">
            <Eyebrow>BASED IN SOLAPUR, MAHARASHTRA</Eyebrow>
            <h2 id="solapur-manufacturer-title">
              Grain and pulse processing machinery, made in <em>Solapur.</em>
            </h2>
            <p>
              National Engineering Works is a manufacturer of grain and pulse
              processing machinery based at C-162, Chincholi MIDC, Solapur,
              Maharashtra. Explore individual machines or discuss a processing
              plant requirement with our team.
            </p>
            <address className="not-italic">
              {company.address}
            </address>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:+91${company.phones[0]}`}>
                Call +91 {company.phones[0]}
              </a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={company.maps} target="_blank" rel="noreferrer">
                Directions to our Solapur location <Arrow diagonal />
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-2">
            <div>
              <h3>Where is National Engineering Works located?</h3>
              <p>
                We are at {company.address}. Contact the team for directions or
                to discuss a visit.
              </p>
            </div>
            <div>
              <h3>What machinery does National Engineering Works make?</h3>
              <p>
                The catalogue includes equipment for grain cleaning and
                separation, pulse and rice milling, material handling, dust
                control, finishing and grading. See the machinery pages for
                product details.
              </p>
            </div>
            <div>
              <h3>How can I request a machinery or plant quote?</h3>
              <p>
                Share the crop, process stages, site details and expected
                throughput through our enquiry form. The team can discuss a
                suitable machine or plant configuration with you.
              </p>
              <Link className="text-link" to="/quote">
                Send an enquiry <Arrow diagonal />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
