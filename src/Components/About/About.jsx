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
        eyebrow="OUR STORY / EST. 2010"
        title={
          <>
            Built on experience.
            <br />
            <em>Driven by purpose.</em>
          </>
        }
      >
        From our manufacturing base in Chincholi MIDC, Solapur, we bring
        practical engineering and manufacturing excellence to the machinery
        that powers food processing across India.
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
              Established in 2010, National Engineering Works manufactures food
              processing machinery and delivers complete turnkey pulse and grain
              processing plant lines. Based in C-162, Chincholi MIDC, Solapur,
              our work integrates heavy fabrication, precision sizing,
              pneumatic aspiration, and reliable material handling.
            </p>
            <p>
              Under the guidance of Irshad Khan, our engineering team works
              closely with millers and plant owners to understand specific crop
              and capacity requirements. From individual de-stoners, fatkas,
              and polishers to multi-floor automated plant installations, we
              stand behind every machine with enduring service support.
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
                "Every machine begins with the grain and target output. We analyze the crop characteristics, moisture, and layout constraints before fabrication.",
              ],
              [
                "02",
                "Rugged Craftsmanship",
                "Industrial manufacturing built with heavy-gauge steel, dynamic balancing, and high-grade bearings suited for round-the-clock commercial milling.",
              ],
              [
                "03",
                "Lasting Relationships",
                "Direct partnership with the technicians and founders who built your equipment, from initial line layout through commissioning and scheduled maintenance.",
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
