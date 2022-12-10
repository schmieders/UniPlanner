#  UniPlanner

## Inhaltsverzeichnis
1. Projektbeschreibung
2. Projektarchitektur
   1. Technologien
   2. Anforderungen
3. Farbschema
4. Anleitung zum starten

## Projektbeschreibung
Der UniPlanner ist eine WebAnwendung, mit der
 - Vorlesungen
 - Semester
 - Dozenten
 - Termine
 - Jahrgänge
 - Studiengänge

verwaltet werden können.

Die Webseite ist dabei aufgeteilt in eine statische Hauptseite und einen Verwaltungsbereich mit Dashboard.

Die Hauptseite mit Carousel enthält einige Informationen über uns und die Anwendung sowie ein Impressum.

Im Verwaltungsbereich befinden sich Unterseiten, die per Dropdown oder per Sidebar erreicht werden können.
Auf jeder dieser Unterseiten kann ein "Datentyp" verwaltet werden (Einsehen, Erstellen, Editieren und Löschen).
Die einzelnen Datentypen verweisen dabei teilweise auf andere Datentypen, wodurch eine Reihenfolge der Eingaben vorgegeben ist.
Um Elemente zu erstellen müssen stets alle Felder ausgefüllt werden.

Über das Dashboard können mithilfe eines Dropdown-Menüs Dozenten einzeln gewählt und angezeigt werden. Hierbei werden Vorlesungen mit Jahrgang und dem ersten Vorlesungstermin angezeigt, außerdem sind einige Informationen über den Dozenten einsehbar.

## Projektarchitektur
Das Projekt ist in 2 Teile zu unterteilen.
Im Hauptordner befinden sich die einzelnen HTML Dateien, die über eine Ordnerstruktur den Webseitenaufbau abbilden.
Im Assets-Ordner befinden sich alle JavaScript und CSS Dateien, welche in den einzelnen HTML Dateien importiert werden.

### Technologien

#### HTML
HTML ist eine Markdownsprache, mit der die Struktur von Webseiten beschrieben werden kann.
Wir haben unsere Webseite mit HTML5 aufgebaut und in Bereiche wie <code>header</code>, <code>main</code> und <code>footer</code> aufgeteilt.

#### CSS
CSS ist eine Sprache, mit der HTML Elemente gestyled werden können.
In der Datei assets/styles.css befinden sich alle unsere Styledefinitionen (Bootstrap ausgenommen).
Wir haben CSS3 verwendet, um eigene Styles zu definieren und bestehende HTML sowie Bootstrap Styles zu überschreiben.

#### JavaScript
JavaScript (JS) ist eine Scriptsprache, mit der Webseiten interaktiv aufgebaut werden können.
Wir haben auf unserer Webseite JavaScript verwendet, um Daten im Lokalen Speicher des Browsers abzulegen, HTML Code für Popups und Tabellen zu generieren und styles von HTML Elementen anzupassen (...).

Unsere JS Dateien verweisen dabei nicht aufeinander, können jedoch Elemente aus anderen Dateien verwenden, da wir sie in einer speziellen Reihenfolge in den HTML Code importiert haben. Die Hauptkomponente stellt hierbei der LogicHandler (assets/logicHandler.js) dar, welcher sich mit der Speicher und Ladelogik sowie einigen weiteren oft verwendeten Operationen befasst.

Für jeden Datentyp haben wir außerdem einen TableHandler und einen ModalHandler erstellt, welche sich um das generieren von Tabellen und Modals (Popups) mit den jeweiligen Werten kümmern. Diese beiden Handler haben wir dann über einen Datentyp spezifischen LogicHandler mit der Hauptlogik verknüpft.

Das Dashboard hat ebenfalls einen gesonderten LogicHandler, welcher sich mit der Ladelogik der Dozenten in der Dashboard Ansicht befasst.

### Anforderungen
Für unser Projekt wird eine stabile Internetanbindung benötigt, da wir Bootstrap v5.2 per URL (CDN) importiert haben.

Bootstrap ist eine Bibliothek, die Styles, Icons und JavaScript in eine Webseite einbinden kann, um das erstellen von vorgefertigten Komponenten zu ermöglichen.
Im Rahmen unserer Projektarbeit haben wir manche der Standardwerte von Bootstrap überschrieben.

## Farbschema
Als Farben haben wir uns für ein kräftiges Rot in Kombination mit einem Grauton entschieden.

In der Farbtheorie wird Rot oft mit Wut und Agressionen, jedoch auch mit Liebe und Harmonie verbunden. Da wir diese Kombination aus Gefühlen als eine recht passende Beschreibung eines Studiums angesehen haben, haben wir die Farbe #e2001a als Primärfarbe gewählt.

Da die Kombination aus Rot und Grau aus unserer Sicht professionell wirkt und außerdem die Farbkombination der DHBW wiederspiegelt haben wir als Sekundäre Farbe #5c6971 gewählt.

Als Hintergrundfarbe haben wir zudem nicht ein klares Weiß gewählt, sondern einen sehr hellen grauton.
Durch diese Entscheidung konnten wir einzelne Komponenten der Webseite besser hervorheben und unsere Augen schonen.

## Anleitung zum starten
Um unsere Webseite zu testen kann die Datei index.html im Hauptverzeichnis im Browser geöffnert werden.

Unsere Webseite ist alternativ auch über [uniplanner.de](https://uniplanner.de) erreichbar <small>(Stand 12.12.2022)</small>

Auf der Webseite befindet sich im Bereich Funktionen folgende Kurzanleitung, die veranschaulicht, in welcher Reihenfolge das erstellen von Daten möglich ist.
- Über das Dropdownmenü "Verwaltung", gelangen Sie zu den jeweiligen Seiten für die Datenerfassung
- Zu Beginn können Sie einen Studiengang, sowie einen oder mehrere Termine, bestehend aus einem Start- und Enddatum, so wie der jeweiligen Uhrzeit, anlegen
- Haben Sie das getan, ist es Ihnen bereits möglich Semester und Dozenten mit allen erforderlichen Daten einzutragen
- Navigieren Sie nun in den Bereich Jahrgänge und tragen Sie die jeweiligen Daten ein
- Nun haben Sie alle nötigen Daten um Einträge zu Vorlesungen zu erstellen
- Nachdem Sie alle Daten ins System eingetragen haben, können Sie über das Dashboard einen Dozenten auswählen, um dessen Kontaktdaten, Vorlesungen und einige weiteren Daten anzusehen

Knöpfe zum erstellen von Daten sind immer durch ein <code>+</code>-Symbol erkennbar

Knöpfe zum editieren von Daten sind immer durch ein Stift-Symbol erkennbar

Knöpfe zum löschen von Daten sind immer durch ein Mülleimer-Symbol erkennbar

Um die manuelle Datenerstellung zu überspringen und die Webseite mit Testdaten zu füllen, kann jedoch auch in der Konsole der JS Befehl <code>loadDummyData()</code> ausgeführt werden.
