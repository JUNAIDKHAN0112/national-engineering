import {
  ButtonLink,
  Eyebrow,
  PageIntro,
  ProjectCTA,
  SectionHeading,
} from "../UI";

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT NATIONAL ENGINEERING WORKS"
        title={
          <>
            Built on experience.
            <br />
            <em>Driven by purpose.</em>
          </>
        }
      >
        National Engineering Works is based in Chincholi MIDC, Solapur,
        Maharashtra. The catalogue covers grain and pulse processing machinery
        for cleaning, milling, handling, dust control and grading.
      </PageIntro>

      <div className="container about-cover">
        <img
          src="/media/factory.webp"
          alt="National Engineering Works plant project with multi-level processing equipment"
          width="1280"
          height="720"
        />
        <div className="photo-caption">
          <span>THE WORLD WE BUILD</span>
          <span>SOLAPUR, MAHARASHTRA</span>
        </div>
      </div>

      <section className="section">
        <div className="container story-grid">
          <div>
            <Eyebrow>A FOUNDATION OF CRAFT</Eyebrow>
            <h2>
              Good engineering
              <br />
              starts with
              <br />
              <em>understanding.</em>
            </h2>
          </div>
          <div className="story-copy">
            <p className="lead">
              Understanding the material. The process. The space. And the
              operators who work with the machinery every day.
            </p>
            <p>
              National Engineering Works is based at C-162, Chincholi MIDC,
              Solapur, Maharashtra. The catalogue includes individual machines
              and equipment for grain and pulse processing plants. Product
              configuration depends on the crop, process stages and site
              requirements.
            </p>
            <p>
              For a product enquiry, share the crop or material, the process
              stage, expected throughput and site details. Contact the Solapur
              team to confirm machine suitability, specifications and available
              project support.
            </p>
            <ButtonLink to="/quote" secondary>
              Meet your next engineering partner
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT GUIDES OUR WORK"
            title={
              <>
                The details make
                <br />
                <em>the difference.</em>
              </>
            }
          />
          <div className="values-grid">
            {[
              [
                "01",
                "Application-Led Design",
                "Machine selection depends on the crop or material, process stage, target throughput and available site layout.",
              ],
              [
                "02",
                "Rugged Craftsmanship",
                "Ask the team to confirm materials, construction details and operating requirements for the machine you are considering.",
              ],
              [
                "03",
                "Lasting Relationships",
                "Share your application and site requirements so the team can discuss equipment options and project support.",
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

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="A LOOK INSIDE"
            title={
              <>
                Where ideas take
                <br />
                <em>physical form.</em>
              </>
            }
          >
            A closer look at the machinery, installations, and working
            environments behind National Engineering Works projects.
          </SectionHeading>
          <div className="photo-grid">
            <figure>
              <img
                src="/media/installation.webp"
                alt="Processing machinery installed within a steel-framed plant"
                loading="lazy"
                width="1280"
                height="720"
              />
              <figcaption>01 / PLANT INSTALLATIONS & CONVEYING</figcaption>
            </figure>
            <figure>
              <img
                src="/media/workshop.webp"
                alt="Fabricated industrial equipment outside the workshop"
                loading="lazy"
                width="1280"
                height="960"
              />
              <figcaption>02 / MACHINERY & HEAVY FABRICATION</figcaption>
            </figure>
            <figure>
              <img
                src="/media/craft.webp"
                alt="Interconnected grain handling equipment and steel support structures"
                loading="lazy"
                width="1280"
                height="720"
              />
              <figcaption>03 / INTEGRATED MULTI-STAGE LINES</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
