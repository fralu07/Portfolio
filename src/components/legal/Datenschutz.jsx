const Datenschutz = () => (
    <div className="max-w-[900px] mx-auto px-4 lg:px-6 py-12 lg:py-20 text-sm lg:text-base">
        <h2 className="text-3xl lg:text-4xl font-bold pb-6">Datenschutzerklärung</h2>

        <h3 className="text-xl font-bold pt-4 pb-2">1. Verantwortliche Stelle</h3>
        <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br/><br/>
            Francesco Lucia<br/>
            Lierengraben 20<br/>
            79725 Laufenburg<br/>
            Deutschland<br/>
            E-Mail: <a className="underline" href="mailto:info@francescolucia.de">info@francescolucia.de</a>
        </p>

        <h3 className="text-xl font-bold pt-6 pb-2">2. Erhebung und Verarbeitung von Daten</h3>
        <p>
            <strong>Server-Logfiles.</strong> Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen in sogenannten Server-Logfiles erfasst, die Ihr Browser übermittelt. Dies sind insbesondere:
        </p>
        <ul className="list-disc pl-6 pt-2">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und Version</li>
            <li>Betriebssystem</li>
            <li>aufgerufene Datei und übertragene Datenmenge</li>
            <li>Referrer-URL</li>
        </ul>
        <p className="pt-2">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und stabilen Betrieb der Website.
        </p>
        <p className="pt-4">
            <strong>Kontaktaufnahme per E-Mail.</strong> Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.
        </p>

        <h3 className="text-xl font-bold pt-6 pb-2">3. Hosting</h3>
        <p>
            Diese Website wird gehostet bei:<br/><br/>
            Vercel Inc.<br/>
            440 N Barranca Ave #4133<br/>
            Covina, CA 91723, USA
        </p>
        <p className="pt-2">
            Beim Aufruf der Website kann eine Datenverarbeitung auch in den USA stattfinden. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Zusätzlich bestehen Standardvertragsklauseln nach Art. 46 DSGVO als Garantie für ein angemessenes Datenschutzniveau.
        </p>

        <h3 className="text-xl font-bold pt-6 pb-2">4. Schriftarten</h3>
        <p>
            Diese Website verwendet Schriftarten der Familie „DM Sans", die lokal vom eigenen Server ausgeliefert werden. Es findet keine Verbindung zu Google Fonts oder anderen externen Anbietern statt.
        </p>

        <h3 className="text-xl font-bold pt-6 pb-2">5. Cookies, Analyse, Tracking</h3>
        <p>
            Diese Website setzt keine Cookies, verwendet keine Tracking-Tools und keine Webanalyse-Dienste.
        </p>

        <h3 className="text-xl font-bold pt-6 pb-2">6. Ihre Rechte</h3>
        <p>
            Sie haben jederzeit das Recht auf:
        </p>
        <ul className="list-disc pl-6 pt-2">
            <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>

        <h3 className="text-xl font-bold pt-6 pb-2">7. Zuständige Aufsichtsbehörde</h3>
        <p>
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br/>
            Lautenschlagerstraße 20<br/>
            70173 Stuttgart<br/>
            <a className="underline" href="https://www.baden-wuerttemberg.datenschutz.de/" target="_blank" rel="noopener noreferrer">www.baden-wuerttemberg.datenschutz.de</a>
        </p>

        <p className="pt-8 text-xs">
            Stand: Mai 2026
        </p>
    </div>
);

export default Datenschutz;
