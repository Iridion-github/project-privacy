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
                          `La <strong>MG Consulting</strong> è lo studio professionale del Dott. Gaetano Mastropierro che, nella sua pluriennale esperienza maturata nell'ambito degli organismi di controllo pubblici, si è occupato di tematiche concernenti le frodi fiscali e finanziarie, la corruzione, la criminalità organizzata ed il riciclaggio, la tutela della proprietà intellettuale, la responsabilità amministrativa degli enti, la tutela dei dati personali. Nei suoi differenti impegni professionali, il dott. Mastropierro si è confrontato con i temi dell’Alta Direzione, della Pianificazione Strategica, della Programmazione, del Controllo di gestione, della Selezione delle risorse umane, della Comunicazione, della Formazione nell’ambito delle differenti discipline in cui ha operato.`
                        )
                      : stringToHTML(
                          `<strong>MG Consulting</strong> is the professional studio of Dr. Gaetano Mastropierro who, in his many years of experience in the field of public control bodies, has dealt with issues relating to tax and financial fraud, corruption, organized crime and money laundering, the protection of intellectual property, the administrative liability of entities , the protection of personal data. In his different professional commitments, Dr. Mastropierro dealt with the issues of Top Management, Strategic Planning, Programming, Management Control, Human Resources Selection, Communication, Training within the different disciplines in which he operated.`
                        )}
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
                          `<strong>MG Consulting</strong> offre assistenza e consulenza a imprese e professionisti che sono tenuti a rispettare gli obblighi e gli adempimenti previsti dalla normativa sulla tutela dei dati personali, antiriciclaggio, anticorruzione e responsabilità amministrativa degli enti.`
                        )
                      : stringToHTML(
                          `<strong>MG Consulting</strong> offers assistance and advice to companies and professionals who are required to comply with the obligations and fulfilments provided for by the legislation on the protection of personal data, anti-money laundering, anti-corruption and administrative liability of entities.`
                        )}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `<strong>MG Consulting</strong>, grazie anche alla partnership con altri affermati e competenti professionisti, assiste aziende, studi professionali o pubbliche amministrazioni che trattano dati personali e che, quindi, sono soggette al Regolamento Ue 679 del 2016 (GDPR) e al Codice Privacy (D.Lgs. 196/2003). Qualora aziende o professionisti siano anche “soggetti obbligati”, ai sensi della normativa antiriciclaggio (di cui al D.Lgs 231 del 2007) e anticorruzione (di cui alla legge 190 del 2012), potranno usufruire di un servizio di consulenza aggiuntivo in grado di assicurare una conformità normativa “integrata”.`
                        )
                      : stringToHTML(
                          `<strong>MG Consulting</strong>, thanks also to the partnership with other established and competent professionals, it assists companies, professional firms or public administrations that process personal data and which, therefore, are subject to the EU Regulation 679 of 2016 (GDPR) and the Privacy Code (Legislative Decree 196 / 2003). If companies or professionals are also "obligated subjects", pursuant to the anti-money laundering legislation (pursuant to Legislative Decree 231 of 2007) and anti-corruption (pursuant to Law 190 of 2012), they will be able to take advantage of an additional consultancy service capable of ensure “integrated” regulatory compliance.`
                        )}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `Il valore aggiunto di una compliance integrata risulterà particolarmente efficace soprattutto per quelle organizzazioni che ritengano di adottare, di aggiornare o sottoporre ad audit i modelli organizzativi e di gestione previsti dalla disciplina sulla Responsabilità degli enti (D.Lgs. 231 del 2001). L’adozione e l’effettiva implementazione da parte degli organi di governance di adeguati modelli organizzativi consente alle “..agli enti forniti di personalità giuridica e alle società e associazioni anche prive di personalità giuridica…” di essere esenti da responsabilità e sanzioni nel caso venga accertato il complimento di specifici reati (previsti in un apposito catalogo dei “reati presupposto”) realizzati da persone che rivestono funzioni di rappresentanza, amministrazioni o direzione dell’ente o di persone sottoposte alla loro vigilanza.`
                        )
                      : stringToHTML(
                          `The added value of integrated compliance will be particularly effective especially for those organizations that deem to adopt, update or audit the organizational and management models provided for by the regulations on the liability of entities (Legislative Decree 231 of 2001). The adoption and effective implementation by the governance bodies of adequate organizational models allows "... entities with legal personality and companies and associations even without legal personality ..." to be exempt from liability and sanctions in the event the compliment of specific crimes is ascertained (provided for in a specific catalog of "predicate crimes") committed by persons who hold representative functions, administrations or management of the entity or persons subject to their supervision.`
                        )}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `Con riguardo ai Modelli Organizzativi e di Gestione ex “231” la compliance normativa è finalizzata ad individuare e mitigare il rischio reato e la cd “colpa di organizzazione” con riferimento a ben oltre a 200 differenti fattispecie criminose riconducibili a 21 diverse tipologie di reato.`
                        )
                      : stringToHTML(
                          `With regard to the Organizational and Management Models pursuant to "231", regulatory compliance is aimed at identifying and mitigating the risk of crime and the so-called "organizational fault" with reference to well over 200 different types of crime attributable to 21 different types of crime.`
                        )}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `In questo ambito le nostre attività consulenziali supportano i nostri clienti nella realizzazione di progetti finalizzati all’implementazione di adeguate misure tecniche e organizzative coerenti con la natura e la complessità dei trattamenti e dei processi di lavoro svolti.  Attraverso la valutazione complessiva dei differenti contesti esterni e interni all’organizzazione, l’analisi dei relativi assetti operativi e la valutazione congiunta di tutti i rischi e le minacce, aiutiamo le aziende e gli studi professionali nella realizzazione di adeguate azioni di difesa contro il verificarsi di accadimenti che possono determinare danni economici e reputazionali.`
                        )
                      : stringToHTML(
                          `In this context, our consultancy activities support our customers in the implementation of projects aimed at implementing adequate technical and organizational measures consistent with the nature and complexity of the treatments and work processes performed. Through the overall assessment of the different contexts external and internal to the organization, the analysis of the related operational structures and the joint assessment of all risks and threats, we help companies and professional firms in the implementation of adequate defense actions against the occurrence of events that can cause economic and reputational damage.`
                        )}
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
                      <li>Supportando il conseguimento degli obiettivi di compliance, in primo luogo, attraverso un progetto di cambiamento che consenta all’organizzazione di maturare un nuovo approccio culturale alla conformità normativa</li>
                      <li>Rendendo autonome le funzioni aziendali interessate nelle attività di mantenimento delle operazioni di messa in conformità</li>
                      <li>Realizzando virtuosi percorsi di monitoraggio, controllo e miglioramento continuo</li>
                      `)
                      : stringToHTML(`
                      <li>By supporting the achievement of compliance objectives, first of all, through a change project that allows the organization to develop a new cultural approach to regulatory compliance</li>
                      <li>By making the corporate functions involved in the activities of maintaining compliance operations autonomous</li>
                      <li>By creating virtuous paths of monitoring, control and continuous improvement</li>
                      `)}
                  </ul>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `Siamo consapevoli, infatti, che i veri obiettivi di una consulenza professionale debbano essere prioritariamente orientati nella messa a disposizione di strumenti metodologici che, in autonomia, consentano alle risorse interne:`
                        )
                      : stringToHTML(
                          `We are aware, in fact, that the true objectives of professional consultancy must be primarily oriented towards the provision of methodological tools which, independently, allow internal resources:`
                        )}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <ul className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(`
                      <li>L’individuazione, l’analisi e la gestione dei rischi di violazioni delle normative oggetto della consulenza</li>
                      <li>L’adozione delle conseguenti misure di mitigazione dei suddetti rischi con adeguate e sempre aggiornate misure di sicurezza tecnico-organizzative</li>
                      <li>La “dimostrazione”, in modo documentale, dell'osservanza delle prescrizioni imposte dalla legge particolarmente utile in occasione di possibili attività ispettive da parte degli organi di controllo.</li>
                      `)
                      : stringToHTML(`
                      <li>The identification, analysis and management of the risks of violations of the regulations covered by the consultancy</li>
                      <li>The adoption of the consequent mitigation measures of the aforementioned risks with adequate and always up-to-date technical and organizational security measures</li>
                      <li>Documentary "demonstration" of compliance with the provisions imposed by law is particularly useful in the event of possible inspections by the control bodies.</li>
                      `)}
                  </ul>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? stringToHTML(
                          `In questo contesto cerchiamo di dare senso e concreta attuazione ad una famosa frase attribuita a Confucio che consiglia di non dare pesci alla gente, ma una canna da pesca e di insegnare ad usarla. Dai un pesce a un uomo e lo nutrirai per un giorno; insegnagli a pescare e lo nutrirai per tutta la vita.`
                        )
                      : stringToHTML(
                          `In this context we try to give meaning and concrete implementation to a famous phrase attributed to Confucius which advises not to give fish to people, but a fishing rod and to teach them how to use it. Give a man a fish and you will feed him for a day; teach him to fish and you will feed him for life.`
                        )}
                  </p>
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
