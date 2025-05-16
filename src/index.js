import React, { useState, useEffect } from "react";import ReactDOM from "react-dom";import "./main.css";const pages = {  home: "",  impressum: "impressum",  datenschutz: "datenschutz"};function getPageFromHash() {  const hash = window.location.hash.replace(/^#\/?/, "");  if (hash === pages.impressum) return pages.impressum;  if (hash === pages.datenschutz) return pages.datenschutz;  return pages.home;}function Nav({ page }) {  return (    <nav>      <a href="#/" className={page === pages.home ? "active" : ""}>Home</a>      <a href="#/impressum" className={page === pages.impressum ? "active" : ""}>Impressum</a>      <a href="#/datenschutz" className={page === pages.datenschutz ? "active" : ""}>Datenschutz</a>    </nav>  );}function Home() {  return (    <main>      <h2>Willkommen bei yfactory GmbH</h2>      <p>        Wir sind Ihr Partner für innovative Unternehmenslösungen.<br />        Kontaktieren Sie uns gerne für weitere Informationen.      </p>      <ul className="info-list">        <li><strong>Adresse:</strong> Sonnenstraße 25b/6, 4852 Weyregg am Attersee</li>        <li><strong>Telefon:</strong> <a href="tel:+436649151102">+43 664 915 11 02</a></li>        <li><strong>E-Mail:</strong> <a href="mailto:info@yfactory.at">info@yfactory.at</a></li>      </ul>
    </main>
  );
}

function Impressum() {
  return (
    <main>
      <h2>Impressum</h2>
      <ul className="info-list">
        <li><strong>Firmenname:</strong> yfactory GmbH</li>
        <li><strong>Adresse:</strong> Sonnenstraße 25b/6, 4852 Weyregg am Attersee</li>
        <li><strong>Telefon:</strong> <a href="tel:+436649151102">+43 664 915 11 02</a></li>
        <li><strong>E-Mail:</strong> <a href="mailto:info@yfactory.at">info@yfactory.at</a></li>
        <li><strong>Geschäftsführer:</strong> Daniel Laiminger, Karl Edlbauer, Simon Tretter</li>
        <li><strong>Firmenbuchnummer:</strong> FN 620506 i</li>
        <li><strong>Firmenbuchgericht:</strong> Landesgericht Wels</li>
        <li><strong>UID-Nummer:</strong> ATU80270234</li>
      </ul>
      <p>
        Inhalt und Struktur dieser Website sind urheberrechtlich geschützt. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial, bedarf der vorherigen Zustimmung der yfactory GmbH.
      </p>
    </main>
  );
}

function Datenschutz() {
  return (
    <main>
      <h2>Datenschutzerklärung</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
      </p>
      <h3>Kontakt mit uns</h3>
      <p>
        Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>
      <h3>Ihre Rechte</h3>
      <p>
        Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
      </p>
      <p>
        Sie erreichen uns unter den im Impressum angegebenen Kontaktdaten.
      </p>
    </main>
  );
}

function App() {
  const [page, setPage] = useState(getPageFromHash());

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <header>
        <h1>yfactory GmbH</h1>
        <Nav page={page} />
      </header>
      {page === pages.home && <Home />}
      {page === pages.impressum && <Impressum />}
      {page === pages.datenschutz && <Datenschutz />}
      <footer style={{textAlign:"center", color:"#888", fontSize:"0.95em", margin:"2rem 0 1rem 0"}}>
        &copy; 2025 yfactory GmbH
      </footer>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));