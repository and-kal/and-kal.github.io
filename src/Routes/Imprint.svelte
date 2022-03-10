<script>
  import { blur } from "svelte/transition";
  import { onMount } from "svelte";
  
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  onMount(() => {
    scrollUp();
  });
</script>

<div transition:blur id="imprint">
  <h3>Imprint</h3>
  <hr />
  <div>
    <h4>Informationspflicht laut § 5 TMG.</h4>
    <h5>Kontaktdaten des Verantwortlichen für Datenschutz</h5>
    <p>
      Sollten Sie Fragen zum Datenschutz haben, finden Sie nachfolgend die
      Kontaktdaten der verantwortlichen Person bzw. Stelle:
    </p>
    <ul>
      <li>André Kalnassy</li>
      <li>Saarländer Str. 17</li>
      <li>04179 Leipzig</li>
      <li>Deutschland</li>
    </ul>
  </div>
  <hr />
  <h5>EU-Streitschlichtung</h5>
  <p>
    Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten
    (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform
    (OS-Plattform) informieren. Verbraucher haben die Möglichkeit, Beschwerden
    an die Online Streitbeilegungsplattform der Europäischen Kommission unter
    http://ec.europa.eu/odr?tid=321289659 zu richten. Die dafür notwendigen
    Kontaktdaten finden Sie oberhalb in# unserem Impressum.
  </p>
  <p>
    Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder
    verpflichtet sind, an Streitbeilegungsverfahren vor einer
    Verbraucherschlichtungsstelle teilzunehmen.
  </p>
  <h5>Haftung für Inhalte dieser Website</h5>
  <p>
    Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns
    korrekte und aktuelle Informationen bereitzustellen. Laut Telemediengesetz
    (TMG) §7 (1) sind wir als Diensteanbieter für eigene Informationen, die wir
    zur Nutzung bereitstellen, nach den allgemeinen Gesetzen verantwortlich.
    Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser
    Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt
    wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht
    verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen
    zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
    Tätigkeit hinweisen.
  </p>
  <p>
    Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung
    der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von
    gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer
    Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt.
  </p>
  <p>
    Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir
    Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte
    entfernen können. Sie finden die Kontaktdaten im Impressum.
  </p>
  <h5>Haftung für Links auf dieser Website</h5>
  <p>
    Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir
    nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns
    nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben,
    uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir
    Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
  </p>
  <p>
    Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie
    uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
  </p>
  <h5>Urheberrechtshinweis</h5>
  <p>
    Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem
    Urheberrecht der Bundesrepublik Deutschland. Bitte fragen Sie uns bevor Sie
    die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie
    zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig,
    werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite
    rechtlich verfolgen.
  </p>
  <p>
    Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
    verletzen, bitten wir Sie uns zu kontaktieren.
  </p>
  <p>
    Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:
    Katharina Gerhardt
  </p>

  <p>Alle Texte sind urheberrechtlich geschützt.</p>
  <p>Coding: André Kalnassy</p>

  <hr />

  <h4>Privacy Police</h4>

  Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der
  Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) im Rahmen
  der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und
  der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen
  Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend
  gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf die verwendeten
  Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen
  wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
  <ul>
    <li>Verantwortlicher</li>
    <li>André Kalnassy</li>
    <li>Saarländer Str. 17</li>
    <li>04179 Leipzig</li>
    <li>Deutschland</li>
  </ul>

  <!-- <ul>
        <li> Arten der verarbeiteten Daten</li>
        <li> Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).</li>
        <li> Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
        <li> Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
        <li> Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
        <li> Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).</li>
    </ul>

    <p> Kategorien betroffener Personen:
        Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend
        auch als
        „Nutzer“).
    </p>

    <ul>
        Zweck der Verarbeitung
        <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.</li>
        <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.</li>
        <li>Sicherheitsmaßnahmen.</li>
        <li>Reichweitenmessung/Marketing</li>
    </ul>


    <p>
        <h5>Verwendete Begrifflichkeiten</h5>
        „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
        natürliche
        Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person
        angesehen,
        die
        direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer,
        zu
        Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen
        identifiziert
        werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen,
        kulturellen oder
        sozialen Identität dieser natürlichen Person sind.
    </p>

    <p>„Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche
        Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch
        jeden
        Umgang
        mit Daten.</p>

    <p>„Pseudonymisierung“ die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten
        ohne
        Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden
        können,
        sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen
        Maßnahmen
        unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder
        identifizierbaren
        natürlichen Person zugewiesen werden.</p>

    <p>„Profiling“ jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese
        personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche
        Person
        beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit,
        persönliche
        Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person
        zu
        analysieren oder vorherzusagen.</p>

    <p>Als „Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle,
        die
        allein
        oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
        entscheidet,
        bezeichnet.</p>

    <p>„Auftragsverarbeiter“ eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die
        personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</p>

    <p>
        <h5>Maßgebliche Rechtsgrundlagen</h5>
        Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Für
        Nutzer
        aus dem
        Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt, sofern die
        Rechtsgrundlage
        in der
        Datenschutzerklärung nicht genannt wird, Folgendes:
        Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO;
        Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher
        Maßnahmen sowie
        Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO;
        Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1
        lit. c
        DSGVO;
        Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person
        eine
        Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als
        Rechtsgrundlage.
        Die Rechtsgrundlage für die erforderliche Verarbeitung zur Wahrnehmung einer Aufgabe, die im öffentlichen
        Interesse
        liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde ist Art. 6
        Abs. 1
        lit. e
        DSGVO.
        Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit.
        f
        DSGVO.
        Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen sie ehoben wurden, bestimmt sich nach den
        Vorgaben des
        Art 6 Abs. 4 DSGVO.
        Die Verarbeitung von besonderen Kategorien von Daten (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach
        den
        Vorgaben
        des Art. 9 Abs. 2 DSGVO.
    </p>

    <p>Sicherheitsmaßnahmen
        Wir treffen nach Maßgabe der gesetzlichen Vorgabenunter Berücksichtigung des Stands der Technik, der
        Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der
        unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten
        natürlicher
        Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau
        zu
        gewährleisten.</p>

    <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von
        Daten
        durch
        Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe,
        Weitergabe,
        der
        Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine
        Wahrnehmung von
        Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner
        berücksichtigen wir
        den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie
        Verfahren,
        entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche
        Voreinstellungen.</p>

    <p>Zusammenarbeit mit Auftragsverarbeitern, gemeinsam Verantwortlichen und Dritten
        Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen
        (Auftragsverarbeitern,
        gemeinsam Verantwortlichen oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf
        die
        Daten
        gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten
        an
        Dritte,
        wie an Zahlungsdienstleister, zur Vertragserfüllung erforderlich ist), Nutzer eingewilligt haben, eine
        rechtliche
        Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von
        Beauftragten,
        Webhostern, etc.).</p>

    <p>Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe offenbaren, übermitteln oder ihnen sonst den
        Zugriff
        gewähren, erfolgt dies insbesondere zu administrativen Zwecken als berechtigtes Interesse und
        darüberhinausgehend auf
        einer den gesetzlichen Vorgaben entsprechenden Grundlage.</p>

    <p>Übermittlungen in Drittländer
        Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU), des Europäischen
        Wirtschaftsraums (EWR)
        oder der Schweizer Eidgenossenschaft) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten
        Dritter
        oder
        Offenlegung, bzw. Übermittlung von Daten an andere Personen oder Unternehmen geschieht, erfolgt dies nur,
        wenn
        es zur
        Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen
        Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder
        vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der
        gesetzlichen
        Voraussetzungen. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell
        anerkannten
        Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy Shield“)
        oder
        Beachtung
        offiziell anerkannter spezieller vertraglicher Verpflichtungen.</p>

    <p>Rechte der betroffenen Personen
        Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf
        Auskunft
        über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
    </p>

    <p>Sie haben entsprechend. den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten
        oder die
        Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</p>

    <p>Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht zu verlangen, dass betreffende Daten unverzüglich
        gelöscht
        werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten
        zu
        verlangen.</p>

    <p>Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach
        Maßgabe
        der
        gesetzlichen Vorgaben zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.</p>

    <p>Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zuständigen
        Aufsichtsbehörde
        einzureichen.</p>

    <p>Widerrufsrecht
        Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.</p>

    <p>Widerspruchsrecht
        Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe der gesetzlichen Vorgaben
        jederzeit
        widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung
        erfolgen.
    </p>

    <h5>Cookies und Widerspruchsrecht bei Direktwerbung
    <p>    Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb
        der
        Cookies
        können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem
        Nutzer
        (bzw. dem
        Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines
        Onlineangebotes
        zu
        speichern. Als temporäre Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden Cookies
        bezeichnet,
        die
        gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen
        Cookie kann
        z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden. Als
        „permanent“
        oder
        „persistent“ werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So
        kann
        z.B. der
        Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in einem
        solchen
        Cookie die Interessen der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke
        verwendet
        werden.
        Als „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der
        das
        Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von
        „First-Party
        Cookies“).</p>

    <p>Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer
        Datenschutzerklärung
        auf.</p>

    <p>Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die
        entsprechende
        Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den
        Systemeinstellungen
        des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses
        Onlineangebotes
        führen.</p>

    <p>Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei
        einer
        Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite
        http://www.aboutads.info/choices/
        oder die EU-Seite http://www.youronlinechoices.com/ erklärt werden. Des Weiteren kann die Speicherung von
        Cookies
        mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann
        gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.</p>

    <p>
        <h5>Löschung von Daten</h5>
        Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer
        Verarbeitung
        eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns
        gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der
        Löschung
        keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
    </p>

    <p>Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich
        sind,
        wird
        deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet.
        Das
        gilt z.B.
        für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.</p>

    <p>
        <h5>Änderungen und Aktualisierungen der Datenschutzerklärung</h5>
        Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die
        Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies
        erforderlich
        machen.
        Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung)
        oder
        eine
        sonstige individuelle Benachrichtigung erforderlich wird.
    </p>

    <p>Geschäftsbezogene Verarbeitung
        Zusätzlich verarbeiten wir
        - Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie).
        - Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie)
        von unseren Kunden, Interessenten und Geschäftspartner zwecks Erbringung vertraglicher Leistungen, Service
        und
        Kundenpflege, Marketing, Werbung und Marktforschung.</p>

    <p>Agenturdienstleistungen
        Wir verarbeiten die Daten unserer Kunden im Rahmen unserer vertraglichen Leistungen zu denen konzeptionelle
        und
        strategische Beratung, Kampagnenplanung, Software- und Designentwicklung/-beratung oder Pflege, Umsetzung
        von
        Kampagnen
        und Prozessen/ Handling, Serveradministration, Datenanalyse/ Beratungsleistungen und Schulungsleistungen
        gehören.</p>

    <p>Hierbei verarbeiten wir Bestandsdaten (z.B., Kundenstammdaten, wie Namen oder Adressen), Kontaktdaten (z.B.,
        E-Mail,
        Telefonnummern), Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos), Vertragsdaten (z.B.,
        Vertragsgegenstand,
        Laufzeit), Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie), Nutzungs- und Metadaten (z.B. im Rahmen
        der
        Auswertung und Erfolgsmessung von Marketingmaßnahmen). Besondere Kategorien personenbezogener Daten
        verarbeiten
        wir
        grundsätzlich nicht, außer wenn diese Bestandteile einer beauftragten Verarbeitung sind. Zu den Betroffenen
        gehören
        unsere Kunden, Interessenten sowie deren Kunden, Nutzer, Websitebesucher oder Mitarbeiter sowie Dritte. Der
        Zweck der
        Verarbeitung besteht in der Erbringung von Vertragsleistungen, Abrechnung und unserem Kundenservice. Die
        Rechtsgrundlagen der Verarbeitung ergeben sich aus Art. 6 Abs. 1 lit. b DSGVO (vertragliche Leistungen),
        Art. 6
        Abs. 1
        lit. f DSGVO (Analyse, Statistik, Optimierung, Sicherheitsmaßnahmen). Wir verarbeiten Daten, die zur
        Begründung
        und
        Erfüllung der vertraglichen Leistungen erforderlich sind und weisen auf die Erforderlichkeit ihrer Angabe
        hin.
        Eine
        Offenlegung an Externe erfolgt nur, wenn sie im Rahmen eines Auftrags erforderlich ist. Bei der Verarbeitung
        der
        uns im
        Rahmen eines Auftrags überlassenen Daten handeln wir entsprechend den Weisungen der Auftraggeber sowie der
        gesetzlichen
        Vorgaben einer Auftragsverarbeitung gem. Art. 28 DSGVO und verarbeiten die Daten zu keinen anderen, als den
        auftragsgemäßen Zwecken.</p>

    <p>Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten. die
        Erforderlichkeit der
        Aufbewahrung der Daten wird alle drei Jahre überprüft; im Fall der gesetzlichen Archivierungspflichten
        erfolgt
        die
        Löschung nach deren Ablauf (6 J, gem. § 257 Abs. 1 HGB, 10 J, gem. § 147 Abs. 1 AO). Im Fall von Daten, die
        uns
        gegenüber im Rahmen eines Auftrags durch den Auftraggeber offengelegt wurden, löschen wir die Daten
        entsprechend
        den
        Vorgaben des Auftrags, grundsätzlich nach Ende des Auftrags.</p>

    <p>
        <h5>Vertragliche Leistungen</h5>
        Wir verarbeiten die Daten unserer Vertragspartner und Interessenten sowie anderer Auftraggeber, Kunden,
        Mandanten,
        Klienten oder Vertragspartner (einheitlich bezeichnet als „Vertragspartner“) entsprechend Art. 6 Abs. 1 lit.
        b.
        DSGVO,
        um ihnen gegenüber unsere vertraglichen oder vorvertraglichen Leistungen zu erbringen. Die hierbei
        verarbeiteten
        Daten,
        die Art, der Umfang und der Zweck und die Erforderlichkeit ihrer Verarbeitung, bestimmen sich nach dem
        zugrundeliegenden
        Vertragsverhältnis.
    </p>

    <p>Zu den verarbeiteten Daten gehören die Stammdaten unserer Vertragspartner (z.B., Namen und Adressen),
        Kontaktdaten (z.B.
        E-Mailadressen und Telefonnummern) sowie Vertragsdaten (z.B., in Anspruch genommene Leistungen,
        Vertragsinhalte,
        vertragliche Kommunikation, Namen von Kontaktpersonen) und Zahlungsdaten (z.B., Bankverbindungen,
        Zahlungshistorie).</p>

    <p>Besondere Kategorien personenbezogener Daten verarbeiten wir grundsätzlich nicht, außer wenn diese
        Bestandteile
        einer
        beauftragten oder vertragsgemäßen Verarbeitung sind.</p>

    <p>Wir verarbeiten Daten, die zur Begründung und Erfüllung der vertraglichen Leistungen erforderlich sind und
        weisen
        auf
        die Erforderlichkeit ihrer Angabe, sofern diese für die Vertragspartner nicht evident ist, hin. Eine
        Offenlegung
        an
        externe Personen oder Unternehmen erfolgt nur, wenn sie im Rahmen eines Vertrags erforderlich ist. Bei der
        Verarbeitung
        der uns im Rahmen eines Auftrags überlassenen Daten, handeln wir entsprechend den Weisungen der Auftraggeber
        sowie der
        gesetzlichen Vorgaben.</p>

    <p>Im Rahmen der Inanspruchnahme unserer Onlinedienste, können wir die IP-Adresse und den Zeitpunkt der
        jeweiligen
        Nutzerhandlung speichern. Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen, als auch
        der
        Interessen
        der Nutzer am Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte
        erfolgt
        grundsätzlich nicht, außer sie ist zur Verfolgung unserer Ansprüche gem. Art. 6 Abs. 1 lit. f. DSGVO
        erforderlich oder
        es besteht hierzu eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c. DSGVO.</p>

    <p>Die Löschung der Daten erfolgt, wenn die Daten zur Erfüllung vertraglicher oder gesetzlicher
        Fürsorgepflichten
        sowie für
        den Umgang mit etwaigen Gewährleistungs- und vergleichbaren Pflichten nicht mehr erforderlich sind, wobei
        die
        Erforderlichkeit der Aufbewahrung der Daten alle drei Jahre überprüft wird; im Übrigen gelten die
        gesetzlichen
        Aufbewahrungspflichten.</p>

    <p>Administration, Finanzbuchhaltung, Büroorganisation, Kontaktverwaltung
        Wir verarbeiten Daten im Rahmen von Verwaltungsaufgaben sowie Organisation unseres Betriebs,
        Finanzbuchhaltung
        und
        Befolgung der gesetzlichen Pflichten, wie z.B. der Archivierung. Hierbei verarbeiten wir dieselben Daten,
        die
        wir im
        Rahmen der Erbringung unserer vertraglichen Leistungen verarbeiten. Die Verarbeitungsgrundlagen sind Art. 6
        Abs.
        1 lit.
        c. DSGVO, Art. 6 Abs. 1 lit. f. DSGVO. Von der Verarbeitung sind Kunden, Interessenten, Geschäftspartner und
        Websitebesucher betroffen. Der Zweck und unser Interesse an der Verarbeitung liegt in der Administration,
        Finanzbuchhaltung, Büroorganisation, Archivierung von Daten, also Aufgaben die der Aufrechterhaltung unserer
        Geschäftstätigkeiten, Wahrnehmung unserer Aufgaben und Erbringung unserer Leistungen dienen. Die Löschung
        der
        Daten im
        Hinblick auf vertragliche Leistungen und die vertragliche Kommunikation entspricht den, bei diesen
        Verarbeitungstätigkeiten genannten Angaben.</p>

    <p>Wir offenbaren oder übermitteln hierbei Daten an die Finanzverwaltung, Berater, wie z.B., Steuerberater oder
        Wirtschaftsprüfer sowie weitere Gebührenstellen und Zahlungsdienstleister.</p>

    <p>Ferner speichern wir auf Grundlage unserer betriebswirtschaftlichen Interessen Angaben zu Lieferanten,
        Veranstaltern und
        sonstigen Geschäftspartnern, z.B. zwecks späterer Kontaktaufnahme. Diese mehrheitlich unternehmensbezogenen
        Daten,
        speichern wir grundsätzlich dauerhaft.</p>

    <p>
        <h5>Datenschutzhinweise im Bewerbungsverfahren</h5>
        Wir verarbeiten die Bewerberdaten nur zum Zweck und im Rahmen des Bewerbungsverfahrens im Einklang mit den
        gesetzlichen
        Vorgaben. Die Verarbeitung der Bewerberdaten erfolgt zur Erfüllung unserer (vor)vertraglichen
        Verpflichtungen im
        Rahmen
        des Bewerbungsverfahrens im Sinne des Art. 6 Abs. 1 lit. b. DSGVO Art. 6 Abs. 1 lit. f. DSGVO sofern die
        Datenverarbeitung z.B. im Rahmen von rechtlichen Verfahren für uns erforderlich wird (in Deutschland gilt
        zusätzlich §
        26 BDSG).
    </p>

    <p>Das Bewerbungsverfahren setzt voraus, dass Bewerber uns die Bewerberdaten mitteilen. Die notwendigen
        Bewerberdaten sind,
        sofern wir ein Onlineformular anbieten gekennzeichnet, ergeben sich sonst aus den Stellenbeschreibungen und
        grundsätzlich gehören dazu die Angaben zur Person, Post- und Kontaktadressen und die zur Bewerbung
        gehörenden
        Unterlagen, wie Anschreiben, Lebenslauf und die Zeugnisse. Daneben können uns Bewerber freiwillig
        zusätzliche
        Informationen mitteilen.</p>

    <p>Mit der Übermittlung der Bewerbung an uns, erklären sich die Bewerber mit der Verarbeitung ihrer Daten zu
        Zwecken
        des
        Bewerbungsverfahrens entsprechend der in dieser Datenschutzerklärung dargelegten Art und Umfang
        einverstanden.
    </p>

    <p>Soweit im Rahmen des Bewerbungsverfahrens freiwillig besondere Kategorien von personenbezogenen Daten im
        Sinne
        des Art.
        9 Abs. 1 DSGVO mitgeteilt werden, erfolgt deren Verarbeitung zusätzlich nach Art. 9 Abs. 2 lit. b DSGVO
        (z.B.
        Gesundheitsdaten, wie z.B. Schwerbehinderteneigenschaft oder ethnische Herkunft). Soweit im Rahmen des
        Bewerbungsverfahrens besondere Kategorien von personenbezogenen Daten im Sinne des Art. 9 Abs. 1 DSGVO bei
        Bewerbern
        angefragt werden, erfolgt deren Verarbeitung zusätzlich nach Art. 9 Abs. 2 lit. a DSGVO (z.B.
        Gesundheitsdaten,
        wenn
        diese für die Berufsausübung erforderlich sind).</p>

    <p>Sofern zur Verfügung gestellt, können uns Bewerber ihre Bewerbungen mittels eines Onlineformulars auf unserer
        Website
        übermitteln. Die Daten werden entsprechend dem Stand der Technik verschlüsselt an uns übertragen.
        Ferner können Bewerber uns ihre Bewerbungen via E-Mail übermitteln. Hierbei bitten wir jedoch zu beachten,
        dass
        E-Mails
        grundsätzlich nicht verschlüsselt versendet werden und die Bewerber selbst für die Verschlüsselung sorgen
        müssen. Wir
        können daher für den Übertragungsweg der Bewerbung zwischen dem Absender und dem Empfang auf unserem Server
        keine
        Verantwortung übernehmen und empfehlen daher eher ein Online-Formular oder den postalischen Versand zu
        nutzen.
        Denn
        statt der Bewerbung über das Online-Formular und E-Mail, steht den Bewerbern weiterhin die Möglichkeit zur
        Verfügung,
        uns die Bewerbung auf dem Postweg zuzusenden.</p>

    <p>Die von den Bewerbern zur Verfügung gestellten Daten, können im Fall einer erfolgreichen Bewerbung für die
        Zwecke
        des
        Beschäftigungsverhältnisses von uns weiterverarbeitet werden. Andernfalls, sofern die Bewerbung auf ein
        Stellenangebot
        nicht erfolgreich ist, werden die Daten der Bewerber gelöscht. Die Daten der Bewerber werden ebenfalls
        gelöscht,
        wenn
        eine Bewerbung zurückgezogen wird, wozu die Bewerber jederzeit berechtigt sind.</p>

    <p>Die Löschung erfolgt, vorbehaltlich eines berechtigten Widerrufs der Bewerber, nach dem Ablauf eines
        Zeitraums
        von sechs
        Monaten, damit wir etwaige Anschlussfragen zu der Bewerbung beantworten und unseren Nachweispflichten aus
        dem
        Gleichbehandlungsgesetz genügen können. Rechnungen über etwaige Reisekostenerstattung werden entsprechend
        den
        steuerrechtlichen Vorgaben archiviert.</p>

    <p>
        <h5>Kontaktaufnahme</h5>
        Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden
        die
        Angaben
        des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b. (im Rahmen
        vertraglicher-/vorvertraglicher Beziehungen), Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet..
        Die
        Angaben
        der Nutzer können in einem Customer-Relationship-Management System ("CRM System") oder vergleichbarer
        Anfragenorganisation gespeichert werden.
    </p>

    <p>Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle
        zwei
        Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.</p>

    <p>
        <h5>Hosting und E-Mail-Versand</h5>
        Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung der folgenden
        Leistungen:
        Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste,
        E-Mail-Versand,
        Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses
        Onlineangebotes
        einsetzen.
    </p>

    <p>Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten,
        Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes
        auf
        Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung dieses
        Onlineangebotes
        gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).</p>

    <p>
        <h5>Erhebung von Zugriffsdaten und Logfiles</h5>
        Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6
        Abs. 1
        lit. f.
        DSGVO Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte
        Serverlogfiles).
        Zu den
        Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene
        Datenmenge,
        Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL
        (die
        zuvor
        besuchte Seite), IP-Adresse und der anfragende Provider.
    </p>

    <p>Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder
        Betrugshandlungen)
        für
        die Dauer von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu
        Beweiszwecken
        erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.</p>

    <p>
        <h5>Google Analytics</h5>
        Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und
        wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics,
        einen
        Webanalysedienst der Google LLC („Google“) ein. Google verwendet Cookies. Die durch das Cookie erzeugten
        Informationen
        über Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den
        USA
        übertragen
        und dort gespeichert.
    </p>

    <p>Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische
        Datenschutzrecht einzuhalten
        (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).
    </p>

    <p>Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die
        Nutzer
        auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um
        weitere,
        mit der
        Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns gegenüber zu
        erbringen.
        Dabei
        können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden.</p>

    <p>Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der
        Nutzer
        wird von
        Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
        über
        den
        Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
        Google
        in den
        USA übertragen und dort gekürzt.</p>

    <p>Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google
        zusammengeführt.
        Die
        Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software
        verhindern; die
        Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des
        Onlineangebotes
        bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter
        folgendem
        Link verfügbare Browser-Plugin herunterladen und installieren: http://tools.google.com/dlpage/gaoptout?hl=de
        oder direkt
        Google Analytics deaktivieren.</p>

    <p>Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren
        Sie in
        der
        Datenschutzerklärung von Google (https://policies.google.com/privacy) sowie in den Einstellungen für die
        Darstellung von
        Werbeeinblendungen durch Google (https://adssettings.google.com/authenticated).</p>

    <p>Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisiert.</p>
-->
  <h5>Onlinepräsenzen in sozialen Medien</h5>
  <p>
    Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
    Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern
    kommunizieren und sie dort über unsere Leistungen informieren zu können.
  </p>

  <p>
    Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der
    Europäischen Union verarbeitet werden können. Hierdurch können sich für die
    Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer
    erschwert werden könnte. Im Hinblick auf US-Anbieter die unter dem
    Privacy-Shield zertifiziert sind, weisen wir darauf hin, dass sie sich damit
    verpflichten, die Datenschutzstandards der EU einzuhalten.
  </p>

  <p>
    Ferner werden die Daten der Nutzer im Regelfall für Marktforschungs- und
    Werbezwecke verarbeitet. So können z.B. aus dem Nutzungsverhalten und sich
    daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die
    Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen
    innerhalb und außerhalb der Plattformen zu schalten, die mutmaßlich den
    Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall
    Cookies auf den Rechnern der Nutzer gespeichert, in denen das
    Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner
    können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern
    verwendeten Geräte gespeichert werden (insbesondere wenn die Nutzer
    Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).
  </p>

  <p>
    Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf
    Grundlage unserer berechtigten Interessen an einer effektiven Information
    der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f.
    DSGVO. Falls die Nutzer von den jeweiligen Anbietern der Plattformen um eine
    Einwilligung in die vorbeschriebene Datenverarbeitung gebeten werden, ist
    die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.
  </p>

  <p>
    Für eine detaillierte Darstellung der jeweiligen Verarbeitungen und der
    Widerspruchsmöglichkeiten (Opt-Out), verweisen wir auf die nachfolgend
    verlinkten Angaben der Anbieter.
  </p>

  <p>
    Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten,
    weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend
    gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten
    der Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte
    geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns
    wenden.
  </p>

  <p>
    - Facebook, -Seiten, -Gruppen, (Facebook Ireland Ltd., 4 Grand Canal Square,
    Grand Canal Harbour, Dublin 2, Irland) auf Grundlage einer Vereinbarung über
    gemeinsame Verarbeitung personenbezogener Daten - Datenschutzerklärung:
    https://www.facebook.com/about/privacy/, speziell für Seiten:
    https://www.facebook.com/legal/terms/information_about_page_insights_data ,
    Opt-Out: https://www.facebook.com/settings?tab=ads und
    http://www.youronlinechoices.com, Privacy Shield:
    https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active.
  </p>

  <p>
    - Google/ YouTube (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA
    94043, USA) – Datenschutzerklärung: https://policies.google.com/privacy,
    Opt-Out: https://adssettings.google.com/authenticated, Privacy Shield:
    https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active.
  </p>

  <p>
    - Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA) –
    Datenschutzerklärung/ Opt-Out: http://instagram.com/about/legal/privacy/.
  </p>

  <h5>Einbindung von Diensten und Inhalten Dritter</h5>
  <p>
    Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer
    berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und
    wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1
    lit. f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um
    deren Inhalte und Services, wie z.B. Videos oder Schriftarten einzubinden
    (nachfolgend einheitlich bezeichnet als “Inhalte”).
  </p>

  <p>
    Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die
    IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte
    nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die
    Darstellung dieser Inhalte erforderlich. Wir bemühen uns nur solche Inhalte
    zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur
    Auslieferung der Inhalte verwenden. Drittanbieter können ferner so genannte
    Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für
    statistische oder Marketingzwecke verwenden. Durch die "Pixel-Tags" können
    Informationen, wie der Besucherverkehr auf den Seiten dieser Website
    ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies
    auf dem Gerät der Nutzer gespeichert werden und unter anderem technische
    Informationen zum Browser und Betriebssystem, verweisende Webseiten,
    Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes
    enthalten, als auch mit solchen Informationen aus anderen Quellen verbunden
    werden.
  </p>

  <h5>Google Fonts</h5>
  <p>
    Wir binden die Schriftarten ("Ubuntu Mono") des Anbieters Google LLC, 1600
    Amphitheatre Parkway, Mountain View, CA 94043, USA, ein.
    Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out:
    https://adssettings.google.com/authenticated.
  </p>
</div>
<footer>
  <button on:click={() => scrollUp()}>⬆⬆⬆ Go back up!</button>
</footer>

<style>
  button {
    background-color: rgb(241, 216, 104);
    padding: 0.3rem;
    border: 2px solid black;
    height: 2rem;
  }
  footer {
    position: fixed;
    bottom: 0.25rem;
    right: 1rem;
  }
</style>
