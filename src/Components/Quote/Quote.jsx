import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Arrow, Eyebrow, PageIntro } from "../UI";
import { company, machines } from "../../Data/Machines";

export default function GetQuote() {
  const [params] = useSearchParams();
  const initialMachine = params.get("machine") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    machine: initialMachine,
    message: "",
  });

  const [status, setStatus] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const selectedMachine =
      machines.find((m) => m.slug === form.machine || m.name === form.machine)
        ?.name || form.machine || "General Machinery Consultation";

    const subject = `Machinery Enquiry: ${selectedMachine} - ${form.name.trim()}`;
    const body = `Hello National Engineering Works,\n\nI would like to request quotation and technical details for:\nMachine / Line: ${selectedMachine}\n\nClient Details:\n- Name: ${form.name.trim()}\n- Company: ${form.business.trim() || "Not specified"}\n- Email: ${form.email.trim()}\n- Phone: ${form.phone.trim() || "Not specified"}\n\nProject Requirements & Capacity:\n${form.message.trim()}\n\nPlease provide quotation, machine layout details, and estimated lead time.\n\nThank you,\n${form.name.trim()}`;

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus(
      "Your default email application has opened with your inquiry prepared. If it didn't open automatically, please reach us directly at " +
        company.email +
        " or call our team.",
    );
  }

  return (
    <>
      <PageIntro
        eyebrow="LET’S START A CONVERSATION"
        title={
          <>
            Great things begin
            <br />
            <em>with a conversation.</em>
          </>
        }
      >
        Tell us about your processing requirements, raw material, and target
        output. Our engineers in Solapur will prepare an equipment recommendation
        and detailed quotation.
      </PageIntro>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-aside">
            <Eyebrow>DIRECT TO THE PEOPLE WHO BUILD IT</Eyebrow>
            <h2>
              Your next project.
              <br />
              <em>Our full attention.</em>
            </h2>
            <p>
              Whether you need an individual de-stoner, a polishing line, or a
              complete automated pulse processing plant, reach out directly to
              our engineering team.
            </p>

            <div className="contact-detail">
              <span className="small-label">EMAIL US</span>
              <a href={`mailto:${company.email}`}>
                {company.email}
                <Arrow diagonal />
              </a>
            </div>

            <div className="contact-detail">
              <span className="small-label">CALL OUR TEAM</span>
              {company.phones.map((phone) => (
                <a key={phone} href={`tel:+91${phone}`}>
                  +91 {phone}
                  <Arrow diagonal />
                </a>
              ))}
            </div>

            <div className="contact-detail">
              <span className="small-label">FACTORY & OFFICE</span>
              <p>
                C-162, Chincholi MIDC
                <br />
                Solapur, Maharashtra 413255
                <br />
                India
              </p>
              <a
                href={company.maps}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Get directions on Google Maps
                <Arrow diagonal />
              </a>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span className="small-label">A FEW DETAILS TO GET STARTED</span>
              <span>* REQUIRED</span>
            </div>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name *</label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength="100"
                  autoComplete="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={update}
                />
              </div>

              <div className="field">
                <label htmlFor="business">Company / Mill Name</label>
                <input
                  id="business"
                  name="business"
                  maxLength="150"
                  autoComplete="organization"
                  placeholder="Company or facility name"
                  value={form.business}
                  onChange={update}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength="254"
                  autoComplete="email"
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={update}
                />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength="30"
                  autoComplete="tel"
                  placeholder="e.g. +91 9876543210"
                  value={form.phone}
                  onChange={update}
                />
              </div>

              <div className="field field--full">
                <label htmlFor="machine">Machinery of interest</label>
                <select
                  id="machine"
                  name="machine"
                  value={form.machine}
                  onChange={update}
                >
                  <option value="">Select a machine or turnkey project</option>
                  <optgroup label="Cleaning & Separation">
                    {machines
                      .filter((m) => m.category === "Cleaning and Separating")
                      .map((m) => (
                        <option key={m.id} value={m.slug || m.name}>
                          {m.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Milling & Processing">
                    {machines
                      .filter((m) => m.category === "Milling")
                      .map((m) => (
                        <option key={m.id} value={m.slug || m.name}>
                          {m.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Handling & Conveying">
                    {machines
                      .filter((m) => m.category === "Handling and Conveying")
                      .map((m) => (
                        <option key={m.id} value={m.slug || m.name}>
                          {m.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Dust Controlling">
                    {machines
                      .filter((m) => m.category === "Dust Controlling")
                      .map((m) => (
                        <option key={m.id} value={m.slug || m.name}>
                          {m.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Finishing & Sizing">
                    {machines
                      .filter((m) => m.category === "Finishing")
                      .map((m) => (
                        <option key={m.id} value={m.slug || m.name}>
                          {m.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Turnkey Solutions">
                    <option value="Complete Plant Solution">
                      Complete Turnkey Plant Solution
                    </option>
                  </optgroup>
                </select>
              </div>

              <div className="field field--full">
                <label htmlFor="message">
                  Tell us about your requirement *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength="10"
                  maxLength="2000"
                  placeholder="Detail your material (e.g. toor dal, chana, wheat), required production capacity (e.g. 2 tons/hr), plant location, and timeline."
                  rows="5"
                  value={form.message}
                  onChange={update}
                />
              </div>
            </div>

            <p className="form-note">
              Clicking below will format your enquiry and open your mail
              client to dispatch directly to National Engineering Works.
            </p>

            <button className="button" type="submit">
              Send Quotation Enquiry
              <Arrow diagonal />
            </button>

            {status && (
              <p
                className="form-status"
                role="status"
                style={{
                  marginTop: "16px",
                  padding: "14px",
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "4px",
                  color: "var(--dark)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Eyebrow>OUR WORKS LOCATION</Eyebrow>
          <h2 style={{ marginBottom: "24px" }}>
            Visit our factory in Solapur.
          </h2>
          <div
            style={{
              width: "100%",
              height: "420px",
              border: "1px solid var(--line)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <iframe
              title="National Engineering Works Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3799.6071625495006!2d75.81840897517357!3d17.76313968318953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ1JzQ3LjMiTiA3NcKwNDknMTUuNSJF!5e0!3m2!1sen!2sin!4v1732551143265!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="visit-section">
        <div className="container visit-grid">
          <div>
            <Eyebrow light>COME SEE WHAT WE BUILD</Eyebrow>
            <h2>
              Rooted in Solapur.
              <br />
              <em>Ready for your next step.</em>
            </h2>
            <a
              href={company.maps}
              className="button button--outline"
              target="_blank"
              rel="noreferrer"
            >
              Find our location
              <Arrow diagonal />
            </a>
          </div>
          <img
            src="/media/workshop.webp"
            alt="Machinery at the National Engineering Works workshop"
            width="1280"
            height="960"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
