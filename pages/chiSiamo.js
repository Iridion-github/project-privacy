import styles from "../styles/Home.module.css";
import stringToHTML from "html-react-parser";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";

function chiSiamo(props) {
  const { currentLang, changeSiteLang } = useAppContext();

  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Chi siamo" : "Who we are"} />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Container className="justify-content-center p-0 mb-4">
          <Row className="w-100 justify-content-center ml-0 mr-0">
            <Card className="pt-2 pb-2 text-center justify-content-center">
              <Image src="logoCropped.svg" className="chiSiamoImg" />
              <Card.Body>
                <Col md={{ span: 12 }}>
                  <Card.Title className="text-center">
                    <h2>{currentLang === "ita" ? "Chi Siamo" : "Who we are"}</h2>
                  </Card.Title>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `La <strong>MG Consulting</strong> è lo studio professionale del Dott. Gaetano Mastropierro che, nella sua pluriennale esperienza maturata nell'ambito degli organismi di controllo                       pubblici, si è occupato di tematiche concernenti le frodi fiscali e finanziarie,                       la corruzione, la criminalità organizzata ed il riciclaggio, la tutela della proprietà                       intellettuale, la responsabilità amministrativa degli enti, la tutela dei dati personali.                       Nei suoi differenti impegni professionali il dott. Mastropierro si è confrontato con i                       temi dell’Alta Direzione, della Pianificazione Strategica, della Programmazione, del Controllo di gestione, la Gestione e Selezione delle risorse umane, della Comunicazione, della formazione nell’ambito di discipline economico finanziarie.`
                        )
                      : stringToHTML(
                          `<strong>MG Consulting</strong> is the professional studio of Dr. Gaetano Mastropierro who, in his many years of experience in the field of public control bodies, has dealt with issues                       relating to tax and financial fraud, corruption, organized crime and money laundering,                       the protection of intellectual property, the entities administrative liability, the                       protection of personal data. In his different professional commitments, Dr. Mastropierro                       dealt with the issues of Top Management, Strategic Planning, Programming, Management Control, Management and Selection of human resources, Communication, training in the field of economic and financial disciplines.`
                        )}{" "}
                  </p>
                </Col>
                <Col md={{ span: 12 }}>
                  <Card.Title className="text-center">
                    <h2>{currentLang === "ita" ? "Cosa facciamo" : "What we do"}</h2>
                  </Card.Title>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `<strong>MG Consulting</strong> offre assistenza e consulenza a imprese e professionisti che sono obbligati a rispettare gli obblighi e gli adempimenti previsti dalla normativa sulla tutela dei dati personali, antiriciclaggio e anticorruzione.`
                        )
                      : stringToHTML(
                          `<strong>MG Consulting</strong> offers assistance and advice to companies and professionals who are obliged to comply with the obligations and fulfilments provided for by the legislation on the protection of personal data, anti-money laundering and anti-corruption.`
                        )}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `<strong>MG Consulting</strong>, grazie anche partnership con altri affermati e competenti professionisti, assiste tutte le aziende che trattano dati personali e, quindi, sono soggette al Regolamento Ue 679 del 2016 (GDPR) e al Codice Privacy (D.Lgs. 196/2003). Qualora aziende o professioni rivestano anche la qualifica di “soggetti obbligati”, ai sensi della normativa antiriciclaggio (di cui al D.Lgs 231 del 2007) e anticorruzione (di cui alla legge 190 del 2012), potranno usufruire di un servizio di consulenza aggiuntivo in grado di assicurare una conformità normativa “integrata”. `
                        )
                      : stringToHTML(
                          `<strong>MG Consulting</strong>, thanks also to partnerships with other established and competent professionals, assists all companies that process personal data and, therefore, are subject to the EU Regulation 679 of 2016 (GDPR) and the Privacy Code (Legislative Decree 196/2003). If companies or professions also hold the qualification of "obliged subjects", pursuant to the anti-money laundering legislation (pursuant to Legislative Decree 231 of 2007) and anti-corruption (pursuant to Law 190 of 2012), they will be able to take advantage of an additional consultancy service able to ensure “integrated” regulatory compliance.`
                        )}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `Il valore aggiunto di una compliance integrata si realizza in modo particolarmente efficace, soprattutto con riferimento ai modelli organizzativi e di gestione di cui alla disciplina sulla Responsabilità degli enti (D.Lgs. 231 del 2001). L’adozione ed effettiva implementazione dei menzionati modelli di governance consente alle organizzazioni di andare esenti da responsabilità e sanzioni nel caso venga accertato il complimento di specifici reati (previsti in un apposito catalogo dei “reati presupposto”) realizzati da persone che rivestono funzioni di rappresentanza, amministrazioni o direzione dell’ente o di persone sottoposte alla loro vigilanza. `
                        )
                      : stringToHTML(
                          `The added value of an integrated compliance is achieved in a particularly effective way, especially with reference to the organizational and management models referred to in the regulations on the liability of entities (Legislative Decree 231 of 2001). The adoption and effective implementation of the aforementioned governance models allows organizations to be exempt from liability and sanctions in the event that the compliment of specific crimes is ascertained (provided for in a specific catalog of "predicate crimes") carried out by persons who perform representation functions , administrations or management of the entity or persons subject to their supervision.`
                        )}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `Con riguardo ai Modelli Organizzativi e di Gestione ex 231 la compliance normativa è finalizzata ad individuare e mitigare il rischio reato e la cd “colpa di organizzazione” con riferimento a ben. 201 differenti fattispecie criminose riconducibili a 21 diverse tipologie di reato.`
                        )
                      : stringToHTML(
                          `With regard to the Organizational and Management Models pursuant to 231, regulatory compliance is aimed at identifying and mitigating the risk of crime and the so-called "organizational fault" with reference to ben. 201 different types of crime attributable to 21 different types of crime.`
                        )}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `Attraverso una valutazione complessiva dei contesti esterni e interni dell’organizzazione, all’analisi degli assetti operativi aziendali e alla valutazione congiunta di tutti i rischi e le minacce (e relative misure di sicurezza adottate) connesse al possibile verificarsi di azioni non conformi alle normative vigenti, realizziamo progetti peer l’implementazione di adeguate misure tecniche e organizzative coerenti con la complessità e la natura dei trattamenti e dell’oggetto dell’attività. `
                        )
                      : stringToHTML(`Through an overall assessment of the external and internal contexts of the organization, the analysis of the corporate operational structures and the joint assessment of all risks and threats (and related security measures adopted) connected to the possible occurrence of actions that do not comply with current regulations , we carry out projects peer the implementation of adequate technical and organizational measures consistent with the complexity and nature of the treatments and the object of the activity.
                      `)}
                  </p>
                </Col>
                <Col md={{ span: 12 }}>
                  <Card.Title className="text-center">
                    <h2>{currentLang === "ita" ? "Come lo facciamo" : "How we do it"}</h2>
                  </Card.Title>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `L'obiettivo dell’attività consulenziale consiste nell’affiancare i nostri clienti nel raggiungimento della “conformità normativa”, non attraverso impianti meramente formali, ma:`
                        )
                      : stringToHTML(`The goal of the consulting activity is to support our customers in achieving "regulatory compliance", not through purely formal systems, but:`)}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <ul className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(`
                      <li>Supportando il cambiamento attraverso lo sviluppo di un nuovo approccio culturale alla conformità normativa</li>
                      <li>Rendendo autonome le funzioni aziendali interessate nelle attività di mantenimento delle operazioni di conformità</li>
                      <li>Realizzando virtuosi percorsi di monitoraggio e miglioramento continuo</li>
                      `)
                      : stringToHTML(`
                      <li>Supporting change by developing a new cultural approach to regulatory compliance</li>
                      <li>Making the corporate functions involved in the maintenance of compliance operations independent</li>
                      <li>Carrying out virtuous monitoring and continuous improvement paths</li>
                      `)}
                  </ul>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(`Forniamo, altresì, ai nostri clienti i corretti strumenti metodologici per:`)
                      : stringToHTML(`We also provide our customers with the correct methodological tools for:`)}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <ul className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(`
                      <li>L’individuazione, analisi e gestione dei rischi di violazioni alle normative vigenti</li>
                      <li>L’adozione delle conseguenti misure di mitigazione dei suddetti rischi co adeguate misure di sicurezza tecnico-organizzativi</li>
                      <li>La “dimostrazione”, in modo documentale, dell'osservanza delle prescrizioni imposte dalla legge in occasione di possibili attività ispettive da parte degli organi di controllo</li>
                      `)
                      : stringToHTML(`
                      <li>The identification, analysis and management of the risks of violations of current regulations,</li>
                      <li>The adoption of measures to mitigate the aforementioned risks with adequate organizational and security measures,</li>
                      <li>The “proof”, in a documental way, of compliance to prescriptions imposed by law on the occasion of inspection activities by the supervisory bodies</li>
                      `)}
                  </ul>
                </Col>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default chiSiamo;
