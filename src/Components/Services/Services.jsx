import { Link } from "react-router-dom";
import { Arrow, Eyebrow, PageIntro, ProjectCTA } from "../UI";
import { services } from "../../Data/Machines";

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="OUR EXPERTISE"
        title={
          <>
            From the first idea.
            <br />
            <em>For the long run.</em>
          </>
        }
      >
        A considered approach to engineering, turnkey plant manufacturing,
        on-site installation, and lifecycle maintenance support — built around
        the exact way your grain processing facility needs to perform.
      </PageIntro>

      <div className="container services-cover">
        <img
          src="/media/craft.webp"
          alt="Plant structures and interconnected bulk material handling systems"
          width="1280"
          height="720"
        />
        <div className="services-cover-caption">
          <span>CONNECTED THINKING.</span>
          <span>FROM DRAWING TO DELIVERY.</span>
        </div>
      </div>

      <section className="section">
        <div className="container service-list">
          {services.map((service) => (
            <article key={service.number}>
              <span className="service-number">{service.number}</span>
              <div>
                <Eyebrow>{service.short}</Eyebrow>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className="service-scope">
                <span className="small-label">THE FOCUS</span>
                <ul>
                  {service.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/quote" className="text-link">
                  Let’s discuss
                  <Arrow diagonal />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section section">
        <div className="container">
          <Eyebrow>THE WAY FORWARD</Eyebrow>
          <h2>
            A clear path.
            <br />
            <em>A shared ambition.</em>
          </h2>
          <div className="process-grid">
            {[
              [
                "01",
                "Share Your Requirement",
                "Discuss your grain or pulse type, target metric tons per day, available factory floor area, and production goals.",
              ],
              [
                "02",
                "Custom Engineering & Layout",
                "We engineer the equipment combination, layout flow, aspiration requirements, and elevation drawings.",
              ],
              [
                "03",
                "Quotation & Scope Agreement",
                "Review detailed commercial specifications, power requirements, equipment dimensions, and milestone dates.",
              ],
              [
                "04",
                "Fabrication & Commissioning",
                "Precision manufacturing at our Solapur MIDC workshop, followed by factory delivery, installation, and trial testing.",
              ],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
