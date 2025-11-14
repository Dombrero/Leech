# 🩸 Leech

Ein prozedural animiertes Snake-Spiel im Rain World Stil mit Upgrade- und Mutationssystem.

## 🎮 Spielbeschreibung

Steuere deine Leech-Kreatur mit der Maus, sammle Food-Token und wachse dabei. Alle 10 Food-Token kannst du ein Upgrade wählen, alle 30 Food-Token eine Mutation (kostet Körper-Segmente).

Vermeide die Jäger, die dich jagen und an dir klettern können!

## 🎯 Features

- Prozedurale Animation
- Upgrade-System (Vampire Survivors Style)
- Mutations-System (Körperteile upgraden)
- Verschiedene Jäger-Typen (Normal, Elite, Fat)
- Stamina-System
- Open World
- Debug-Log
- Account-System mit Login/Registrierung
- Mehrsprachigkeit (DE, EN, FR, ES, JA)

## 🚀 Spielen

Öffne einfach `index.html` im Browser oder besuche die [Online-Version](https://dombrero.github.io/Leech/).

## 🛠️ Technologien

- Vanilla JavaScript
- HTML5 Canvas
- CSS3

---

## 📋 Patchnotes

### [Latest Update] - 2024

#### 🎮 Neue Features

##### Account-System
- **Login/Registrierung**: Spieler können sich jetzt im Hauptmenü anmelden oder einen neuen Account erstellen
- **Account-Verwaltung**: 
  - Einfache Account-Erstellung mit Name und Hashtag
  - Zufällige Hashtag-Generierung (4-stellig, #1000-#9999)
  - Automatische Anmeldung beim Neuladen, wenn bereits eingeloggt
  - Logout-Funktion
- **Integration**: 
  - Highscore-System verwendet automatisch Account-Daten
  - Spiel-Start nur möglich, wenn eingeloggt
  - Willkommensnachricht mit Name und Hashtag

##### UI-Verbesserungen
- **Hauptmenü**: 
  - Neues Login/Registrierungs-Interface
  - Wechsel zwischen Login und Registrierung
  - Visuelle Trennung zwischen Login-Bereich und Spiel-Bereich
- **Mehrsprachigkeit**: Alle neuen UI-Texte sind in 5 Sprachen verfügbar (DE, EN, FR, ES, JA)

#### 🐛 Bugfixes

##### Login-System
- **Problem**: Login funktionierte nicht korrekt - Fehler "Name or hashtag incorrect!" auch bei korrektem Namen
- **Lösung**: 
  - Case-insensitive Namenssuche beim Login implementiert
  - Automatische Session-Wiederherstellung beim Laden der Seite
  - Verbesserte Account-Validierung

##### Canvas-Initialisierung
- **Problem**: Canvas wurde nicht angezeigt, wenn das Spiel aus dem Hauptmenü gestartet wurde
- **Lösung**: 
  - Verbesserte Canvas-Initialisierung mit verzögerter Größenberechnung
  - Prüfung auf Container-Sichtbarkeit vor `resizeCanvas()`
  - Mehrfaches `requestAnimationFrame` für bessere Synchronisation
  - Sicherheitsprüfungen in Zeichenfunktionen

##### Hauptmenü-System
- **Problem**: Buttons im Hauptmenü funktionierten nicht
- **Lösung**: 
  - Korrekte Event-Listener-Initialisierung
  - Prüfung auf Login-Status vor Spiel-Start
  - Verbesserte UI-Status-Verwaltung

#### 🔧 Technische Verbesserungen

- **Code-Optimierung**: 
  - Canvas-Initialisierung nur bei Bedarf
  - Bessere Fehlerbehandlung
  - Verbesserte Synchronisation zwischen UI und Spiel-Logik
- **localStorage**: 
  - Account-Daten werden persistent gespeichert
  - Automatische Wiederherstellung der Session
- **Login-System**: 
  - Case-insensitive Namenssuche
  - Automatische Session-Wiederherstellung beim Seitenladen

#### 📝 Hinweise

- Alle Account-Daten werden lokal im Browser gespeichert (localStorage)
- Hashtags werden automatisch normalisiert (fügt # hinzu, falls fehlt)
- Spiel kann nur gestartet werden, wenn ein Account eingeloggt ist
- Login funktioniert nur mit dem Namen (kein Hashtag erforderlich)

