import {FaLinkedin,} from "react-icons/fa";
import React from "react";

export const ABOUT_TEXT = (
    <div className="text-blue">
        <p className="">
            Mein Name ist Francesco Lucia. <br/>
            Ich wohne in Deutschland. <br/>
            Geboren bin ich am 07.06.1978 in Deutschland. <br/>
            Meine Nationalität ist Italien. <br/><br/>

            Im September habe ich mein Informatikstudium erfolgreich abgeschlossen. <br/>
            Ich nehme alles, was ich anpacke, ernst und bringe es immer zu Ende, auch wenn es in der Softwareentwicklung
            manchmal hartnäckig sein kann. <br/><br/>

            Warum mich? <br/>
            Ich bin sehr ehrgeizig, ein echter Teamplayer und bringe einen großen Erfahrungsschatz aus meinen früheren
            Unternehmungen mit.
        </p>

    </div>
)

export const EDUCATION_BSC_TEXT = (
    <div className="">
        <h2 className="text-3xl font-bold pb-4">BSc in Informatik</h2>
        <p className="">an der Fachhochschule Nordwestschweiz in Brugg.
            Aktuell befinde ich mich im letzten Semester. Das Studium werde ich diesen Monat erfolgreich
            abschliessen. <br/>
            <strong>Schwerpunkte</strong> im Studium waren vielfältig.
            Beginnend mit der Webentwicklung, wurden umfassende Kenntnisse in React und tiefgehende Kenntnisse in Spring
            Boot vermittelt.
            In der Mobile-App-Entwicklung wurden Applikationen sowohl für Android in Kotlin als auch für iOS in Swift
            programmiert. <br/>
            Mehrere objektorientierte Programmiersprachen wie Java und JavaScript wurden gründlich gelehrt.
            Auch funktionale Programmiersprachen wie Kotlin im
            Backendbereich sowie Haskell und Scala behandelt.
            In den letzten zwei Semester kam ich mit DEVOPS und CLOUD in Berührung. Das entfachte die Lust auf mehr
            DEVOPS.
        </p>
    </div>
)

export const EDUCATION_RTV_TEXT = (
    <div className="">
        <h2 className="text-3xl font-bold pb-4">Radio und TV-Techniker</h2>
        <p className="">Begonnen habe ich meine Ausbildung als <strong>Radio- und TV-Techniker</strong> in Rheinfelden
            DE.<br/>
            Dies geschah in der Zeit von 1998 bis Juli 2001.<br/>
            Neben dem erlernen des Berufs wurde auch der Kundenkontakt gelehrt.
        </p>
    </div>
)

export const EXPERIENCE_RTV_TEXT = (
    <div className=" ">
        <h2 className="text-3xl font-bold md:pb-4">Radio & TV-Techniker</h2>
        <p className="md:pb-0 pb-4">Der start in dem Berufsleben war 1998 als Radio- und TV-Techniker. Im Unternehmen Radio Oexle in
            Rheinfelden. Was gibt es mehr zu sagen. War eine schöne Zeit, Satellitenantennen auf den Dächern zu
            installieren. </p>

    </div>
)
export const EXPERIENCE_HRN_TEXT = (
    <div className=" ">
        <h2 className="text-3xl font-bold md:pb-4">Geschäftsführer HochrheinNET</h2>
        <p className="md:pb-0 pb-4">Als alleiniger geschäftsführender Gesellschafter habe ich die hochrheinNET GmbH im
            Jahre 2006 gegründet.
            Die Idee war, Internet für jedermann zugänglich zu machen. Auch wenn meine Hausbank nicht an Internet
            geglaubt hat 🤣, habe ich mich nicht von der Idee abbringen lassen. Ausgezeichnet wurde ich 2014 mit dem Gründerpreis der Sparkasse Hochrhein und Volksbank
            Rhein-Wehra.<br/>
            Zum Zeitpunkt der Veräußerung, hatte die hochrheinNET über 2500 Kunden im ihrem Glasfasernetz.<br/>
            Meine Tätigkeiten umfassen neben dem führen des Unternehmens die Planung und Umsetzung der Backbone Netze,
            sowie Planung und Ausbau neuer Gemeinden.
        </p>
    </div>
)
export const EXPERIENCE_NOW_TEXT = (
    <div className=" text-1xl">
        <h2 className="text-3xl font-bold md:pb-4">Geschäftsführer in3tech</h2>
        <p className="md:pb-0 pb-4">Als geschäftsführender Gesellschafter der in3Tech GmbH mit Sitz in Laufenburg (DE)
            führe ich meine Vermögensverwaltende GmbH.<br/><br/>
            <strong><i>What?? Warum bisch uf Arbeitssuche?</i></strong><br/>
            Weil ich immer auf der Suche nach neuen Herausforderungen bin. Im Leben benötigt man Ziele. Das war nach der
            Veräußerung der hochrheinNET GmbH das selbe.
            Ich bin nicht dafür geboren worden, um mit 4️⃣0️⃣ in den Ruhestand zu gehen 😅
        </p>
    </div>
)

export const PROJECTS_MEDINSPECT_TEXT = (
    <div className="text-1xl">
        <h2 className="text-3xl font-bold pb-4">MEDINSPECT</h2>
        <p className="">Eine App für chronisch kranke Personen.<br/><br/>
            Das Projekt wurde in einem zwei Semestrigen Projekt realisiert. Der Tech Stach war Flutter und Dart. Eine
            SQLite Datenbank wurde verwendet.Design wurde die App mittels Figma
        </p>
        <a href="https://gotomo.ch/en/portfolio/medinspect-ehealth-app/" target="_blank" rel="noopener noreferrer">
            <button
                className="shadow-lg bg-sky-500 hover:bg-sky-300 text-white font-bold py-2 px-4 rounded mt-4">gomoto
                -
                Auftraggeber
            </button>
        </a>
    </div>
)

export const PROJECTS_WOMO_TEXT = (
    <div className="text-1xl">
        <h2 className="text-3xl font-bold pb-4">Wohnmobil Stellplatz</h2>
        <p className="">Im Besitz eines 2000 qm grossen Grundstücks in Küssaberg (DE) habe ich einen Wohnmobil
            Stellplatz erstellt. <br/>
            Für die Verwaltung der Stellplätze entwickle ich eine Plattform, mit der die Kunden Strom auf dem eigenem
            Stellplatz ein- und ausschalten sowie das Tor öffnen und schliessen können.
            Des weiteren ist der Bezug von Wasser über die Schnittstelle möglich. So hat der Kunde stets eine Übersicht
            über den
            Verbrauch. Die Idee ist, mich so wenig wie nur möglich mit
            dem Stellplatz auseinander setzen zu müssen. 😎<br/><br/>
            <strong>Tech Stack: </strong>Spring Boot, React, Postgres, MQTT. <br/><br/>
            <strong>Devices für die Umsetzung: </strong>Raspberry Pi, Shelly IoT Geräte.
        </p>
    </div>
)

export const HOBBIES_CROSSFIT_TEXT = (
    <div className=" text-1xl">
        <h2 className="text-3xl font-bold pb-4">CrossFit</h2>
        <p className="">CrossFit begeistert mich, weil es mich sowohl körperlich als auch mental fordert.
            Die Mischung aus Kraft, Ausdauer und Technik hält das Training abwechslungsreich und spannend 🏋️‍♀️.
            Jedes Workout ist eine neue Herausforderung 🥵, die mich an meine Grenzen bringt und darüber hinaus.
            Dabei schätze ich besonders das Gemeinschaftsgefühl 👊 und die Motivation, die in der CrossFit-Community
            herrscht.
        </p>
    </div>
)

export const HOBBIES_SAILING_TEXT = (
    <div className=" text-1xl">
        <h2 className="text-3xl font-bold pb-4">Segeln</h2>
        <p className="">
            Segeln fasziniert mich, weil es mir ein Gefühl von Freiheit auf dem 🌊 gibt.
            Die Verbindung von Wind, Wasser und Technik erfordert sowohl Geschick als auch strategisches Denken.
            Jeder Törn ist ein neues Abenteuer, bei dem ich die Natur 🐠 hautnah erlebe und abschalten kann.
            Besonders genieße ich das Zusammenspiel von Teamwork und Ruhe, das das Segeln so einzigartig macht.
        </p>
    </div>
)

export const HOBBIES_CODING_TEXT = (
    <div className="text-1xl">
        <h2 className="text-3xl font-bold pb-4">Codingbegeisterung</h2>
        <p className="">
            Coding begeistert mich seit meiner Zeit als CEO bei der Hochrhein, da ich schon immer den Wunsch hatte, es
            zu erlernen.
            Mit dem Studium habe ich mir diesen Traum erfüllt und tauche nun tief in die Welt des Programmierens ein.
            Coding gehört mittlerweile zu meinen täglichen Hobbies und ist ein fester Bestandteil meines Alltags
            geworden.
            Es gibt mir die Möglichkeit, kreativ zu sein und komplexe Probleme zu lösen.
        </p>
    </div>
)

export const WHY_ME_TEXT = (
    <div className=" text-1xl">
        <p className="">

            Ich bin überzeugt, dass ich durch meine Fähigkeiten und meinen Antrieb zum Erfolg von B-Nova beitragen
            kann. <br/>
            Die Animation, bei der ein Segelboot mit dem B-Nova-Containerschiff zusammenstößt und ein Containerschiff
            mit Segeln entsteht, spiegelt meine Rolle gut wider:
            Flexibilität und persönlicher Antrieb treffen auf die Stärke und Struktur des Unternehmens. <br/><br/>
            Dieser Zusammenstoß steht für mehr als nur eine Verschmelzung von Eigenschaften – es ist wie eine Super<span
            className="font-bold underline">NOVA</span>, bei der neue Energie entsteht und Raum für neue Möglichkeiten geschaffen
            wird.<br/>
            Genauso sehe ich meine Rolle im Unternehmen: Ich mag nicht alles wissen, aber ich bin strebsam,
            diszipliniert und bereit, gemeinsam mit B-Nova die Zukunft mitzugestalten. <br/><br/>
        </p>
    </div>
)

export const WhatMatters = (
    <div className="text-1xl">
        <p className="">
            <h1 className="text-3xl pb-4">Was mir am ❤️ liegt <br/></h1>
            Ein gesundes Arbeitsumfeld beruht auf gemeinsamen
            Werten. Diese
            sind mir wichtig und ich möchte sie jeden Tag leben.<br/>
            «Gemeinsam statt gegeneinander.» Das ist mein Motto, das ich gerne in mein Arbeitsumfeld einbringen
            möchte.
            Offenheit, ein Ohr für Ideen und umfassende Weiterbildungsmöglichkeiten sind für mich entscheidend.
            Mit voller Leidenschaft und Engagement möchte ich zu einem positiven Arbeitsklima beitragen.<br/>
            Ein Freund würde mich in einem Satz so beschreiben: <br/> "Sehr zielstrebig und engagiert, und mit seinem
            Optimismus reißt er alle mit."<br/><br/>
            Ich freue mich darauf, dies in Ihrem Unternehmen zu verwirklichen.
        </p>
    </div>
)

export const INTRO_TEXT = (
    <div className="text-1xl">
        <p className="">
            <h1 className="text-3xl pb-4">Segler trifft auf Kapitän</h1>
            Wie dieses Bild erahnen lässt, habe ich eine große Leidenschaft für das Segeln.<br/>
            Insofern passt euere Grafik auf Ihrer Webseite um so mehr, um ein bisschen Storytelling zu machen.
            Dabei sehe ich mich als Segler inmitten eines großen Containerschiffs –
            eine perfekte Metapher für meine Rolle in Ihrem Unternehmen.
            Als Segler bringe ich einige Eigenschaften mit, die sich mit denen eines Kapitäns und seiner Crew ergänzen. <br/><br/>

            Warum ich davon überzeugt bin, dass ich in Ihrem Unternehmen genau richtig bin, erfahren Sie im Verlauf
            dieser Bewerbung.
        </p>
    </div>
)