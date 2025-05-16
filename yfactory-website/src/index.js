import React from "react";
import ReactDOM from "react-dom";
import "./main.css";

const App = () => (
  <main>
    <h1>yfactory GmbH</h1>
    <p>Innovation für Unternehmen</p>
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
    <h2>Datenschutz­erklärung</h2>
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
      Sie erreichen uns unter den oben angegebenen Kontaktdaten.
    </p>
    <hr />
    <p style={{fontSize:"0.95em",color:"#888",textAlign:"center"}}>&copy; 2025 yfactory GmbH</p>
  </main>
);

ReactDOM.render(<App />, document.getElementById("root"));