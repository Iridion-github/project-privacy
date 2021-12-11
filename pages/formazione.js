import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Paragraph } from "../components/learning/Paragraph";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useAppContext } from "../context/contextLib";

function formazione(props) {
  const { currentLang, changeSiteLang } = useAppContext();

  const paragraphs = {
    ita: [
      {
        orientation: "center",
        content: "[Title] Il valore della formazione per una compliance normativa",
        html: `<p align="center"><span style="font-size: large;"><strong>Il valore della formazione per una compliance normativa</strong></span></p>`,
      },
      {
        orientation: "left",
        content:
          "In contesti sempre più complessi e dinamici i fattori di successo per le varie organizzazioni (pubbliche e private) sono rappresentati dalla capacità di offrire sul mercato beni e i servizi che sappiano intercettare in modo nuovo, originale ed efficiente le esigenze dei consumatori e degli utenti.",
        html: `<p align="left"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In contesti sempre pi&ugrave; complessi e dinamici i fattori di successo per le varie organizzazioni (pubbliche e private) sono rappresentati dalla capacit&agrave; di offrire sul mercato beni e i servizi che sappiano intercettare in modo nuovo, originale ed efficiente le esigenze dei consumatori e degli utenti.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "Differenti sono gli aspetti che permettono alle aziende di essere competitive, ma ciò che oggi è veramente indispensabile è la capacità di saper cogliere le opportunità offerte dalle nuove tecnologie e, soprattutto, la possibilità di poter disporre di risorse umane motivate, capaci e competenti. La formazione in tale contesto favorisce un potente meccanismo di inclusione, motivazione e coinvolgimento.",
        html: `<p style="text-align: justify; padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Differenti sono gli aspetti che permettono alle aziende di essere competitive, ma ci&ograve; che oggi &egrave; veramente indispensabile &egrave; la capacit&agrave; di saper cogliere le opportunit&agrave; offerte dalle nuove tecnologie e, soprattutto, la possibilit&agrave; di poter disporre di risorse umane motivate, capaci e competenti. </span></span><span style="color: #000000;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">La formazione in tale contesto favorisce un potente meccanismo di inclusione, motivazione e coinvolgimento.</span></span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "Qualsiasi azienda o attività professionale deve pertanto farsi carico di istruire, formare ed informare tutti coloro che, nei vari ruoli e nelle varie funzioni, contribuiscono alla realizzazione degli obiettivi e delle strategie organizzative.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Qualsiasi azienda o attivit&agrave; professionale deve pertanto farsi carico di istruire, formare ed informare tutti coloro che, nei vari ruoli e nelle varie funzioni, contribuiscono alla realizzazione degli obiettivi e delle strategie organizzative.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "In questo senso l’attività formativa deve essere permanente (ossia con riferimento a tutto il ciclo di vita del lavoratore) e caratterizzata da una frequenza tale da permettere di cogliere i cambiamenti dei contesti interni ed esterni.",
        html: `<p style="text-align: justify; padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In questo senso l&rsquo;attivit&agrave; formativa deve essere permanente (ossia con riferimento a tutto il ciclo di vita del lavoratore) e caratterizzata da una frequenza tale da permettere di cogliere i cambiamenti dei contesti interni ed esterni.</span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "In ambito formativo l’attenzione delle organizzazioni è caratterizzata da una doppia necessità: da un lato essere al passo con le novità che caratterizzano l’operatività aziendale in senso stretto, dall’altro rispettare i vincoli e gli obblighi imposti dalle varie normative che non di rado possono anche influenzare le scelte gestionali.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In ambito formativo l&rsquo;attenzione delle organizzazioni &egrave; caratterizzata da una doppia necessit&agrave;: da un lato essere al passo con le novit&agrave; che caratterizzano l&rsquo;operativit&agrave; aziendale in senso stretto, dall&rsquo;altro rispettare i vincoli e gli obblighi imposti dalle varie normative che non di rado possono anche influenzare le scelte gestionali.</span></span></p>`,
      },
      {
        orientation: "center",
        content:
          "È necessario, quindi, prevedere apposite policies sulla formazione per valutare, in modo equilibrato, le esigenze organizzative in relazione alle risorse disponibili. Tenendo ovviamente sempre presente quali possano essere le conseguenze di una strategia che non ponga in debita considerazione la formazione: - una rapida obsolescenza dei processi operativi, con una perdita di efficienza e produttività - una possibile responsabilità (penale e/o amministrativa) per inadempimenti giuridici con perdite di immagine e conseguenze sul capitale reputazionale",
        html: `<p align="center"><span style="font-family: Verdana, sans-serif;">
        <span style="font-size: medium;">È necessario, quindi, prevedere apposite policies sulla formazione per valutare, in modo equilibrato, le esigenze organizzative in relazione alle risorse disponibili. Tenendo ovviamente sempre presente quali possano essere le conseguenze di una strategia che non ponga in debita considerazione la formazione:
        <ul style="display: table; margin: 0 auto;">
        <li><span style="font-size: small;">una rapida obsolescenza dei processi operativi, con una perdita di efficienza e produttività</span></li>
        <li><span style="font-size: small;">una possibile responsabilità (penale e/o amministrativa) per inadempimenti giuridici con perdite di immagine e conseguenze sul capitale reputazionale</span></li>
        </span></p>`,
      },
      {
        orientation: "center",
        content: "[Title] La formazione: obbligo o facoltà?",
        html: `<p align="center"><span style="font-size: large;"><strong>La formazione: obbligo o facoltà?</strong></span></p>`,
      },
      {
        orientation: "left",
        content:
          "La formazione rappresenti in generale una necessità che potremo definire “intrinseca” all’agire organizzativo, che deve cioè essere realizzata indipendentemente dalla circostanza che una norma che la preveda espressamente o meno.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">La formazione rappresenti in generale una necessit&agrave; che potremo definire &ldquo;intrinseca&rdquo; all&rsquo;agire organizzativo, che deve cio&egrave; essere realizzata indipendentemente dalla circostanza che una norma che la preveda espressamente o meno.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "In alcuni casi, tuttavia, la formazione viene addirittura considerata come un vero e proprio obbligo giuridico ovvero contribuisce a creare le premesse per l’efficacia di modelli organizzativi finalizzati ad evitare la realizzazione di specifiche violazioni.",
        html: `<p style="text-align: justify; padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In alcuni casi, tuttavia, la formazione viene addirittura considerata come un vero e proprio obbligo giuridico ovvero contribuisce a creare le premesse per l&rsquo;efficacia di modelli organizzativi finalizzati ad evitare la realizzazione di specifiche violazioni.</span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "La filosofia alla base della formazione si basa sul fatto che tutti i componenti di un’organizzazione contribuiscono, a vario titolo e con diverso livello di responsabilità, al rispetto dei vari obblighi giuridici.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">La filosofia alla base della formazione si basa sul fatto che tutti i componenti di un&rsquo;organizzazione contribuiscono, a vario titolo e con diverso livello di responsabilit&agrave;, al rispetto dei vari obblighi giuridici.</span></span></p>`,
      },
      {
        orientation: "center",
        content:
          "Solo una risorsa ben formata avrà la piena consapevolezza: - degli obblighi giuridici previsti dalle singole norme - delle misure tecnico-organizzative che ciascuna organizzazione si è data - delle criticità inerenti alle operazioni ad essa assegnata",
        html: `<p align="center"><span style="font-family: Verdana, sans-serif;">
        <span style="font-size: medium;">Solo una risorsa ben formata avrà la piena consapevolezza: 
        <ul style="display: table; margin: 0 auto;">
        <li><span style="font-size: small;">degli obblighi giuridici previsti dalle singole norme</span></li>
        <li><span style="font-size: small;">delle misure tecnico-organizzative che ciascuna organizzazione si è data</span></li>
        <li><span style="font-size: small;">delle criticità inerenti alle operazioni ad essa assegnata</span></li>
        </span></p>`,
      },
      {
        orientation: "right",
        content:
          "La formazione permette di ridurre le probabilità che si pongano in essere condotte in violazione delle disposizioni e, in ultima analisi, si commettano errori, con conseguente impatto per l’azienda in termini sanzionatori o reputazionali.",
        html: `<p style="padding-left: 120px;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"></span></span><span style="font-size: medium; font-family: Verdana, sans-serif;">La formazione permette di ridurre le probabilit&agrave; che si pongano in essere condotte in violazione delle disposizioni e, in ultima analisi, si commettano errori, con conseguente impatto per l&rsquo;azienda in termini sanzionatori o reputazionali.</span></p>`,
      },
      {
        orientation: "left",
        content:
          "La formazione in questi casi si presenta, come una misura organizzativa a idonee a ridurre il rischio di una mancata conformità normativa. Quanto più elevato sarà il livello di rischio di una potenziale “non conformità” (e di violazioni), tanto più puntuale e pervasiva dovrà essere l’azione formativa necessaria per mitigare la probabilità di occorrenza di una minaccia ovvero per limitare l’impatto in termini di gravità di un evento negativo.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">La formazione in questi casi si presenta, come una </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>misura organizzativa </strong></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">a </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">idonee a ridurre il rischio di una mancata conformit&agrave; normativa. Quanto pi&ugrave; elevato sar&agrave; il livello di rischio di una potenziale &ldquo;non conformit&agrave;&rdquo; (e di violazioni), tanto pi&ugrave; puntuale e pervasiva dovr&agrave; essere l&rsquo;azione formativa necessaria per mitigare la probabilit&agrave; di occorrenza di una minaccia ovvero per limitare l&rsquo;impatto in termini di gravit&agrave; di un evento negativo.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "Le modalità attraverso cui realizzare la formazione, così come tutte le misure organizzative, sono ovviamente lasciate alla discrezionalità dei soggetti obbligati che, in virtù di quel principio di proporzionalità, dovranno valutare l’idoneità di qualsiasi azione in relazione alle caratteristiche e alla complessità delle strutture organizzative interessate, fermo restando, ovviamente, l’adeguata documentazione e formalizzazione (principio di accountability) delle misure adottate.",
        html: `<p style="padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Le modalit&agrave; attraverso cui realizzare la formazione, cos&igrave; come tutte le misure organizzative, sono ovviamente lasciate alla discrezionalit&agrave; dei soggetti obbligati che, in virt&ugrave; di quel </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><em>principio di proporzionalit&agrave;,</em></span></span> <span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">dovranno valutare l&rsquo;idoneit&agrave; di qualsiasi azione in relazione alle caratteristiche e alla complessit&agrave; delle strutture organizzative interessate, fermo restando, ovviamente, l&rsquo;adeguata documentazione e formalizzazione (principio di accountability) delle misure adottate.</span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "La normativa sulla tutela dei dati personali, la disciplina antiriciclaggio e sull’anticorruzione, rappresentano esempi tipici in cui sono stati imposti obblighi espliciti di adeguata formazione dei “soggetti obbligati” e dei loro dipendenti.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">La normativa sulla tutela dei dati personali, la disciplina antiriciclaggio e sull&rsquo;anticorruzione, rappresentano esempi tipici in cui sono stati imposti obblighi espliciti di adeguata formazione dei &ldquo;soggetti obbligati&rdquo; e dei loro dipendenti.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "Anche in tema di responsabilità degli enti, sebbene il D.lgs. n. 231/2001 non ne faccia alcuno specifico riferimento, la formazione dei dipendenti costituisce parte essenziale del Modello di Organizzazione e Gestione (MOG). L’impegno assunto dall’ente con il MOG, di eliminare o, comunque, di ridurre al minimo il rischio, trova la sua concreta capacità esimente attraverso l’idoneità ed efficacia del modello stesso. Per garantire ciò è però necessario abbattere le carenze informative dei dipendenti che possono, ad esempio, configurare nei reati colposi, la colpa d’organizzazione e costituire premessa per eventuali responsabilità e sanzioni (pecuniarie o interdittive).",
        html: `<p style="padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Anche in tema di responsabilit&agrave; degli enti, </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">sebbene il&nbsp;</span></span><span style="color: #000000;"><span style="color: #3366ff;"><a style="color: #3366ff;" href="https://www.altalex.com/documents/codici-altalex/2014/04/09/responsabilita-amministrativa-delle-societa-e-degli-enti-dlgs-231" target="_blank"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><u>D.lgs. n. 231/2001</u></span></span></a></span>&nbsp;</span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">non ne faccia alcuno specifico riferimento, la </span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">formazione dei dipendenti costituisce parte essenziale del </span></span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><em>Modello di Organizzazione e Gestione</em></span></span></span> <span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">(MOG)</span></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">. </span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">L&rsquo;impegno assunto dall&rsquo;ente con il MOG, di eliminare o, comunque, di ridurre al minimo il rischio, trova la sua concreta capacit&agrave; esimente attraverso l&rsquo;idoneit&agrave; ed efficacia del modello stesso. Per garantire ci&ograve; &egrave; per&ograve; necessario abbattere le carenze informative dei dipendenti che possono, ad esempio, configurare nei reati colposi, la </span></span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><em>colpa d&rsquo;organizzazione e costituire premessa per </em></span></span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">eventuali responsabilit&agrave; e sanzioni (pecuniarie o </span></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">interdittive)</span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">.</span></span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "In specifiche circostanze l’adozione del “MOG 231” viene espressamente richiesto come prerequisito essenziale e obbligatorio per partecipare ad appalti pubblici ovvero per la concessione di provvedimenti di convenzione con la PA.",
        html: `<p align="justify"><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In specifiche circostanze l&rsquo;adozione del &ldquo;MOG 231&rdquo; viene espressamente richiesto come prerequisito essenziale e obbligatorio per partecipare ad appalti pubblici ovvero per la concessione di provvedimenti di </span></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">convenzione con la PA.</span></span></p>`,
      },
      {
        orientation: "center",
        content: "[Title] Una formazione integrata per una compliance integrata",
        html: `<p align="center"><span style="font-size: large;"><strong>Una formazione integrata per una compliance integrata</strong></span></p>`,
      },
      {
        orientation: "left",
        content:
          "Anche La formazione è una funzione aziendale trasversale che deve intercettare in modo integrato le esigenze di compliance che interessano contemporaneamente differenti ambiti normativi (che si richiamano tra loro). È evidente, quindi, la necessità, e soprattutto l'utilità, di realizzare sessioni formative in cui i docenti sappiano fornire ai “discendenti” gli spunti di collegamento e riflessione tra gli adempimenti relativi alle varie normative che non devono essere considerati in modo separato",
        html: `<p align="justify"><span style="color: #212529;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Anche La formazione &egrave; una funzione aziendale trasversale che deve intercettare in modo integrato le esigenze di compliance che interessano contemporaneamente differenti ambiti normativi (che si richiamano tra loro). &Egrave; evidente, quindi, la necessit&agrave;, e soprattutto l'utilit&agrave;, di realizzare sessioni formative in cui i docenti sappiano fornire ai &ldquo;discendenti&rdquo; gli spunti di collegamento e riflessione tra gli adempimenti relativi alle varie normative che non devono essere considerati in modo separato </span></span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "Dare esecuzione ad un piano di formazione secondo le logiche e gli obiettivi della vigente disciplina di riciclaggio non è cosa semplice. Limitarsi a mettere in aula alcune persone per affrontare tematiche generaliste relative all’antiriciclaggio non consente, spesso, di realizzare una formazione efficace e di conseguire effetti positivi per l'organizzazione o per il professionista di riferimento.",
        html: `<p style="padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Dare esecuzione ad un piano di formazione secondo le logiche e gli obiettivi della vigente disciplina di riciclaggio non &egrave; cosa semplice. Limitarsi a mettere in aula alcune persone per affrontare tematiche generaliste relative all&rsquo;antiriciclaggio non consente, spesso, di realizzare una formazione efficace e di conseguire effetti positivi per l'organizzazione o per il professionista di riferimento.</span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "La MG Consulting in tale contesto, grazie alle pregresse esperienze professionali maturate anche in ambito pubblico, assicura una formazione di elevato livello sulla base di progetti formativi integrati ritagliati sulle esigenze organizzative dei propri clienti e utilizzando moderne metodologie didattiche improntate ad approcci esperenziali.",
        html: `<p align="justify"><span style="color: #212529;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">La </span></span></span><span style="color: #212529;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><em><strong>MG Consulting</strong></em></span></span></span> <span style="color: #212529;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">in tale contesto, grazie alle pregresse esperienze professionali maturate anche in ambito pubblico, assicura una formazione di elevato livello sulla base di progetti formativi integrati ritagliati sulle esigenze organizzative dei propri clienti e utilizzando moderne metodologie didattiche improntate ad approcci esperenziali.</span></span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "Oltre ad una gif differenziata gamma di corsi online o in presenza MG Consulting fornisce ai suoi clienti il supporto nella redazione di policy, procedure e sistemi di controllo per monitorare e verificare le modalità di erogazione dell'attività didattica così come pianificate. Dopo aver attentamente valutato le esigenze formative sviluppiamo con un approccio metodologicamente corretto, la Pianificazione, la Programmazione, l’Erogazione, la Valutazione di qualsiasi corso",
        html: `<p style="padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Oltre ad una gif differenziata gamma di corsi online o in presenza MG Consulting fornisce ai suoi clienti il supporto nella redazione di </span></span><strong><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">policy, procedure e </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">sistemi di </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">controllo per monitorare e verificare</span></span></strong> <span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">le modalit&agrave; di erogazione dell'attivit&agrave; didattica cos&igrave; come pianificate. Dopo aver attentamente valutato le esigenze formative sviluppiamo con un approccio metodologicamente corretto, la </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>Pianificazione</strong></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">, la </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>Programmazione</strong></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">, l&rsquo;</span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>Erogazione</strong></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">, la </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>Valutazione</strong></span></span> <span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">di qualsiasi corso</span></span></p><p><br /><br /></p>`,
      },
    ],
    eng: [
      {
        orientation: "center",
        content: "[Title] The value of learning in a normative compliance",
        html: `<p align="center"><span style="font-size: large;"><strong> The value of learning in a normative compliance</strong></span></p>`,
      },
      {
        orientation: "left",
        content:
          "In increasingly complex and dynamic contexts, the success factors for the various organizations (public and private) are represented by the ability to offer on the market goods and services that know how to intercept the needs of consumers and users in a new, original and efficient way.",
        html: `<p align="left"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In increasingly complex and dynamic contexts, the success factors for the various organizations (public and private) are represented by the ability to offer on the market goods and services that know how to intercept the needs of consumers and users in a new, original and efficient way.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "There are different aspects that allow companies to be competitive, but what is truly indispensable today is the ability to grasp the opportunities offered by new technologies and, above all, the possibility of having motivated, capable and competent human resources. Training in this context favors a powerful mechanism of inclusion, motivation and involvement.",
        html: `<p style="text-align: justify; padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">There are different aspects that allow companies to be competitive, but what is truly indispensable today is the ability to grasp the opportunities offered by new technologies and, above all, the possibility of having motivated, capable and competent human resources. </span></span><span style="color: #000000;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Training in this context favors a powerful mechanism of inclusion, motivation and involvement. </span></span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "Any company or professional activity must therefore undertake to educate, train and inform all those who, in various roles and functions, contribute to the achievement of organizational objectives and strategies.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Any company or professional activity must therefore undertake to educate, train and inform all those who, in various roles and functions, contribute to the achievement of organizational objectives and strategies.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "In this sense, the training activity must be permanent (ie with reference to the entire life cycle of the worker) and characterized by a frequency that allows to grasp the changes in internal and external contexts.",
        html: `<p style="text-align: justify; padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In this sense, the training activity must be permanent (ie with reference to the entire life cycle of the worker) and characterized by a frequency that allows to grasp the changes in internal and external contexts.</span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "In the training field, the attention of organizations is characterized by a double need: on the one hand to keep up with the innovations that characterize company operations in the strict sense, on the other to respect the constraints and obligations imposed by the various regulations that do not they can also rarely influence management decisions.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In the training field, the attention of organizations is characterized by a double need: on the one hand to keep up with the innovations that characterize company operations in the strict sense, on the other to respect the constraints and obligations imposed by the various regulations that do not they can also rarely influence management decisions.</span></span></p>`,
      },
      {
        orientation: "center",
        content:
          "Therefore, it is necessary to provide specific training policies to evaluate, in a balanced way, the organizational needs in relation to the available resources. Obviously, always keeping in mind the consequences of a strategy that does not give due consideration to training: - a rapid obsolescence of operational processes, with a loss of efficiency and productivity - a possible liability (criminal and / or administrative) for legal breaches with loss of image and consequences on the reputational capital.",
        html: `<p align="center"><span style="font-family: Verdana, sans-serif;">
        <span style="font-size: medium;">Therefore, it is necessary to provide specific training policies to evaluate, in a balanced way, the organizational needs in relation to the available resources. Obviously, always keeping in mind the consequences of a strategy that does not give due consideration to training:
        <ul style="display: table; margin: 0 auto;">
        <li><span style="font-size: small;">a rapid obsolescence of operational processes, with a loss of efficiency and productivity</span></li>
        <li><span style="font-size: small;">a possible liability (criminal and / or administrative) for legal breaches with loss of image and consequences on the reputational capital</span></li>
        </span></p>`,
      },
      {
        orientation: "center",
        content: "[Title] Training: obbligation or possibility?",
        html: `<p align="center"><span style="font-size: large;"><strong>Training: obbligation or possibility?</strong></span></p>`,
      },
      {
        orientation: "left",
        content:
          "Training generally represents a need that we can define as 'intrinsic' to organizational action, that is, it must be carried out regardless of whether a rule expressly provides for it or not.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Training generally represents a need that we can define as "intrinsic" to organizational action, that is, it must be carried out regardless of whether a rule expressly provides for it or not.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "In some cases, however, training is even considered as a real legal obligation or helps to create the conditions for the effectiveness of organizational models aimed at avoiding the implementation of specific violations.",
        html: `<p style="text-align: justify; padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In some cases, however, training is even considered as a real legal obligation or helps to create the conditions for the effectiveness of organizational models aimed at avoiding the implementation of specific violations.</span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "The philosophy behind the training is based on the fact that all members of an organization contribute, in various capacities and with different levels of responsibility, to compliance with the various legal obligations.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">The philosophy behind the training is based on the fact that all members of an organization contribute, in various capacities and with different levels of responsibility, to compliance with the various legal obligations.</span></span></p>`,
      },
      {
        orientation: "center",
        content:
          "Only a well-trained resource will have full awareness: - the legal obligations envisaged by the individual regulations - the technical-organizational measures that each organization has adopted - the criticalities inherent in the operations assigned to it",
        html: `<p align="center"><span style="font-family: Verdana, sans-serif;">
        <span style="font-size: medium;">Only a well-trained resource will have full awareness: 
        <ul style="display: table; margin: 0 auto;">
        <li><span style="font-size: small;">the legal obligations envisaged by the individual regulations</span></li>
        <li><span style="font-size: small;">the technical-organizational measures that each organization has adopted</span></li>
        <li><span style="font-size: small;">the criticalities inherent in the operations assigned to it</span></li>
        </span></p>`,
      },
      {
        orientation: "right",
        content:
          "Training makes it possible to reduce the likelihood of conduct in violation of the provisions and, ultimately, mistakes are made, with a consequent impact on the company in terms of sanctions or reputational.",
        html: `<p style="padding-left: 120px;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"></span></span><span style="font-size: medium; font-family: Verdana, sans-serif;">Training makes it possible to reduce the likelihood of conduct in violation of the provisions and, ultimately, mistakes are made, with a consequent impact on the company in terms of sanctions or reputational.</span></p>`,
      },
      {
        orientation: "left",
        content:
          "In these cases, training is presented as an organizational measure suitable for reducing the risk of non-compliance with regulations. The higher the risk level of a potential 'non-compliance' (and of violations), the more punctual and pervasive the training action necessary to mitigate the probability of occurrence of a threat or to limit the impact in terms severity of a negative event.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In these cases, training is presented as an </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>organizational measure </strong></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">a </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">suitable for reducing the risk of non-compliance with regulations. The higher the risk level of a potential "non-compliance" (and of violations), the more punctual and pervasive the training action necessary to mitigate the probability of occurrence of a threat or to limit the impact in terms severity of a negative event.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "The modalities through which to carry out the training, as well as all the organizational measures, are obviously left to the discretion of the obliged subjects who, by virtue of that principle of proportionality, will have to evaluate the suitability of any action in relation to the characteristics and complexity of the structures organizations concerned, obviously without prejudice to the adequate documentation and formalization (principle of accountability) of the measures adopted.",
        html: `<p style="padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">The modalities through which to carry out the training, as well as all the organizational measures, are obviously left to the discretion of the obliged subjects who, by virtue of that </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><em>principle of proportionality</em></span></span> <span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">, will have to evaluate the suitability of any action in relation to the characteristics and complexity of the structures organizations concerned, obviously without prejudice to the adequate documentation and formalization (principle of accountability) of the measures adopted.</span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "The legislation on the protection of personal data, the anti-money laundering and anti-corruption regulations, represent typical examples in which explicit obligations of adequate training have been imposed on the 'obliged parties' and their employees.",
        html: `<p align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">The legislation on the protection of personal data, the anti-money laundering and anti-corruption regulations, represent typical examples in which explicit obligations of adequate training have been imposed on the "obliged parties" and their employees.</span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "Also in terms of corporate liability, although the Legislative Decree n. 231/2001 does not make any specific reference to it, employee training is an essential part of the Organization and Management Model (OMM). The commitment assumed by the entity with the OMM, to eliminate or, in any case, to minimize the risk, finds its concrete exemption capacity through the suitability and effectiveness of the model itself. To ensure this, however, it is necessary to eliminate the information shortcomings of employees who can, for example, represent organizational negligence in culpable crimes and constitute a prerequisite for any liability and sanctions (financial or disqualifying).",
        html: `<p style="padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Also in terms of corporate liability, </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">although the &nbsp;</span></span><span style="color: #000000;"><span style="color: #3366ff;"><a style="color: #3366ff;" href="https://www.altalex.com/documents/codici-altalex/2014/04/09/responsabilita-amministrativa-delle-societa-e-degli-enti-dlgs-231" target="_blank"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><u>Legislative Decree n. 231/2001</u></span></span></a></span>&nbsp;</span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">does not make any specific reference to it, </span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">employee training is an essential part of the</span></span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><em>Organization and Management Model (OMM)</em></span></span></span> <span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">(MOG)</span></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">. </span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">The commitment assumed by the entity with the OMM, to eliminate or, in any case, to minimize the risk, finds its concrete exemption capacity through the suitability and effectiveness of the model itself. To ensure this, however, it is necessary to eliminate the information shortcomings of employees who can, for example, represent organizational negligence in culpable crimes and constitute a prerequisite for any liability and sanctions (financial or disqualifying)</span></span><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">.</span></span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "In specific circumstances, the adoption of 'OMM 231' is expressly requested as an essential and mandatory prerequisite for participating in public tenders or for the granting of agreements with the PA.",
        html: `<p align="justify"><span style="color: #0c0c0f;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">In specific circumstances, the adoption of "OMM 231" is expressly requested as an essential and mandatory prerequisite for participating in public tenders or for the granting of agreements with the PA.</span></span></p>`,
      },
      {
        orientation: "center",
        content: "[Title] Integrated training for integrated compliance",
        html: `<p align="center"><span style="font-size: large;"><strong>Integrated training for integrated compliance</strong></span></p>`,
      },
      {
        orientation: "left",
        content:
          "Training is also a transversal corporate function that must intercept in an integrated way the compliance needs that simultaneously affect different regulatory areas (which refer to each other). It is therefore evident the need, and above all the usefulness, to carry out training sessions in which teachers are able to provide the 'descendants' with points of connection and reflection between the obligations relating to the various regulations that must not be considered separately.",
        html: `<p align="justify"><span style="color: #212529;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Training is also a transversal corporate function that must intercept in an integrated way the compliance needs that simultaneously affect different regulatory areas (which refer to each other). It is therefore evident the need, and above all the usefulness, to carry out training sessions in which teachers are able to provide the 'descendants' with points of connection and reflection between the obligations relating to the various regulations that must not be considered separately.</span></span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "Implementing a training plan according to the logic and objectives of the current recycling discipline is not easy. Simply putting a few people in the classroom to address general issues relating to anti-money laundering often does not allow for effective training and positive effects for the organization or for the reference professional.",
        html: `<p style="padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">Implementing a training plan according to the logic and objectives of the current recycling discipline is not easy. Simply putting a few people in the classroom to address general issues relating to anti-money laundering often does not allow for effective training and positive effects for the organization or for the reference professional.</span></span></p>`,
      },
      {
        orientation: "left",
        content:
          "MG Consulting in this context, thanks to previous professional experiences also gained in the public sphere, ensures high-level training based on integrated training projects tailored to the organizational needs of its customers and using modern teaching methods based on experiential approaches.",
        html: `<p align="justify"><span style="color: #212529;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"></span></span></span><span style="color: #212529;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><em><strong>MG Consulting</strong></em></span></span></span> <span style="color: #212529;"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">in this context, thanks to previous professional experiences also gained in the public sphere, ensures high-level training based on integrated training projects tailored to the organizational needs of its customers and using modern teaching methods based on experiential approaches.</span></span></span></p>`,
      },
      {
        orientation: "right",
        content:
          "In addition to a differentiated range of online or face-to-face courses, MG Consulting provides its customers with support in the drafting of policies, procedures and control systems to monitor and verify the methods of delivery of the teaching activity as planned. After having carefully assessed the training needs, we develop with a methodologically correct approach, the Planning, Programming, Delivery, Evaluation of any course",
        html: `<p style="padding-left: 120px;" align="justify"><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">
In addition to a differentiated range of online or face-to-face courses, MG Consulting provides its customers with support in the drafting of </span></span><strong><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">policies, procedures and </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"> </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">control systems to monitor and verify</span></span></strong> <span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"> the methods of delivery of the teaching activity as planned. After having carefully assessed the training needs, we develop with a methodologically correct approach, the </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>Planning</strong></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">, la </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>Programming</strong></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">, l&rsquo;</span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>Delivery</strong></span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">, la </span></span><span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;"><strong>Evaluation</strong></span></span> <span style="font-family: Verdana, sans-serif;"><span style="font-size: medium;">of any course
</span></span></p><p><br /><br /></p>`,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Header title={currentLang === "ita" ? "Formazione" : "Learning"} />
      {/* Navbar */}
      <Navigation />
      {/* Page Content */}
      <main className={styles.main}>
        <Container className="justify-content-center p-0">
          <Card className="w-100 p-2 responsive-width-card">
            <Card.Img className="black-border" variant="top" src="consulenza.png" />
            <Card.Body>
              <Row>
                <Col md={{ span: 12 }}>
                  <Card.Title className="text-center">
                    <h1>{currentLang === "ita" ? "Formazione" : "Learning"}</h1>
                  </Card.Title>
                </Col>
                {paragraphs[currentLang].map(parag => (
                  <Paragraph orientation={parag.orientation} content={parag.content} html={parag.html} />
                ))}

                {/* <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? "La normativa sulla tutela dei dati personali, la normativa sulla salute e sicurezza sui posti di lavoro, la disciplina sulla responsabilità degli enti, la disciplina antiriciclaggio e sull'anticorruzione, rappresentano esempi tipici in cui il legislatore ha imposto un vero e proprio obbligo di adeguato formazione dei “soggetti obbligati” e dei suoi dipendenti. In tale contesto non si deve commettere l'errore di progettare l'attività formativa in relazione alle esigenze individuali della singola funzione aziendale."
                      : "The legislation on the protection of personal data, the legislation on health and safety in the workplace, the regulations on the liability of entities, the anti-money laundering and anti-corruption regulations, represent typical examples in which the legislator has imposed a real obligation of adequate training of 'obliged parties' and its employees. In this context, one must not make the mistake of planning the training activity in relation to the individual needs of the individual company function."}
                  </p>
                </Col>
                <Col md={{ span: 12 }} className="text-justify-desktop-only">
                  <p className="chisiamo-text">
                    {currentLang === "ita"
                      ? " La formazione, infatti, è una funzione aziendale trasversale che deve intercettare in modo integrato le esigenze di compliance che interessano contemporaneamente differenti ambiti normativi (che si richiamano tra loro) e differenti attori e organi di controllo aziendali. È evidente, quindi, la necessità, e soprattutto l'utilità, di realizzare sessioni formative in cui i docenti sappiano fornire ai “discendenti” gli spunti di collegamento e riflessione tra gli adempimenti relativi alle varie normative che non devono essere considerati in modo separato ma come un sistema organico e integrato."
                      : "Learning, in fact, is a transversal corporate function that must intercept in an integrated way the compliance needs that simultaneously affect different regulatory areas (which refer to each other) and different actors and corporate control bodies. It is therefore evident the need, and above all the usefulness, of carrying out training sessions in which teachers are able to provide the 'descendants' with the points of connection and reflection between the obligations relating to the various regulations that must not be considered separately but as an organic and integrated system."}
                  </p>
                </Col> */}
              </Row>
            </Card.Body>
            <Card.Footer className="text-center"></Card.Footer>
          </Card>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  //const apiUrl = "http://" + context.req.headers.host + "/api/learning"
  //const resLessons = await fetch(apiUrl)
  //const lessons = await resLessons.json()
  //return { lessons: lessons.data }
  return { props: { lessons: [] } };
}
export default formazione;
