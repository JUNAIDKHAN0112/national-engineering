import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {diagonal ? (
        <path d="M5 19 19 5M5 5h14v14" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
Arrow.propTypes = { diagonal: PropTypes.bool };

export function Brand({ compact = false }) {
  return (
    <Link
      to="/"
      className={`brand ${compact ? "brand--footer" : ""}`}
      aria-label="National Engineering Works home"
    >
      <img
        className="brand-mark brand-logo"
        src="/Images/national-engineering-works-logo.png"
        onError={(e) => {
          if (!e.currentTarget.src.endsWith("/Images/logo.png")) {
            e.currentTarget.src = "/Images/logo.png";
          }
        }}
        alt="National Engineering Works"
        width={compact ? 56 : 52}
        height={compact ? 56 : 52}
        style={{ objectFit: "contain", borderRadius: "4px" }}
        loading={compact ? "lazy" : "eager"}
      />
      {!compact && (
        <span
          className="brand-name"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--dark)",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
          }}
        >
          National Engineering <span style={{ color: "var(--accent)" }}>Works</span>
        </span>
      )}
    </Link>
  );
}
Brand.propTypes = { compact: PropTypes.bool };

export function Eyebrow({ children, light = false }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
Eyebrow.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
};

export function ButtonLink({
  to,
  children,
  secondary = false,
  className = "",
  ...props
}) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? "button--outline" : ""} ${className}`}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
}
ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  link,
  linkText = "Explore",
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {children && <p className="section-intro">{children}</p>}
      </div>
      {link && (
        <Link className="text-link" to={link}>
          {linkText}
          <Arrow />
        </Link>
      )}
    </div>
  );
}
SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="page-intro">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </header>
  );
}
PageIntro.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export function ProjectCTA() {
  return (
    <section className="project-cta">
      <div className="container cta-inner">
        <div>
          <Eyebrow light>PLAN YOUR NEXT PROJECT</Eyebrow>
          <h2>
            Build your next
            <br />
            <em>production line.</em>
          </h2>
        </div>
        <div>
          <p>
            A new plant. A better process. The right machine.
            <br />
            It starts with a conversation.
          </p>
          <ButtonLink to="/quote">Discuss your project</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product, index = 0 }) {
  const link = product.link || (product.slug ? `/${product.slug}` : `/quote?machine=${encodeURIComponent(product.name)}`);
  const imageSrc = product.img || `/Images/${product.slug}.jpg`;
  const category = product.category || "Machinery";

  return (
    <Link to={link} className="product-card">
      <div
        className="product-card-image"
        style={{
          background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "16px",
          position: "relative",
        }}
      >
        <img
          src={imageSrc}
          onError={(event) => {
            const fallback = "/Images/destoner.jpg";
            if (!event.currentTarget.src.endsWith(fallback)) {
              event.currentTarget.src = fallback;
            }
          }}
          alt={product.name}
          loading="lazy"
          width="720"
          height="600"
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            padding: "20px",
          }}
        />
        <span className="product-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="product-open">
          <Arrow diagonal />
        </span>
      </div>
      <div className="product-card-copy">
        <span className="small-label">{category}</span>
        <h3>{product.name}</h3>
        <p>{product.desc || product.summary}</p>
        {product.materials && product.materials.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.materials.slice(0, 3).map((mat, i) => (
              <span
                key={i}
                className="inline-block text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium border border-slate-200/60"
              >
                {mat}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number,
};
