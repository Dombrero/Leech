# Changelog - Leech

## [Latest Update] - 2024

### 🎮 Neue Features

#### Account-System
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

#### UI-Verbesserungen
- **Hauptmenü**: 
  - Neues Login/Registrierungs-Interface
  - Wechsel zwischen Login und Registrierung
  - Visuelle Trennung zwischen Login-Bereich und Spiel-Bereich
- **Mehrsprachigkeit**: Alle neuen UI-Texte sind in 5 Sprachen verfügbar (DE, EN, FR, ES, JA)

### 🐛 Bugfixes

#### Canvas-Initialisierung
- **Problem**: Canvas wurde nicht angezeigt, wenn das Spiel aus dem Hauptmenü gestartet wurde
- **Lösung**: 
  - Verbesserte Canvas-Initialisierung mit verzögerter Größenberechnung
  - Prüfung auf Container-Sichtbarkeit vor `resizeCanvas()`
  - Mehrfaches `requestAnimationFrame` für bessere Synchronisation
  - Sicherheitsprüfungen in Zeichenfunktionen

#### Hauptmenü-System
- **Problem**: Buttons im Hauptmenü funktionierten nicht
- **Lösung**: 
  - Korrekte Event-Listener-Initialisierung
  - Prüfung auf Login-Status vor Spiel-Start
  - Verbesserte UI-Status-Verwaltung

### 🔧 Technische Verbesserungen

- **Code-Optimierung**: 
  - Canvas-Initialisierung nur bei Bedarf
  - Bessere Fehlerbehandlung
  - Verbesserte Synchronisation zwischen UI und Spiel-Logik
- **localStorage**: 
  - Account-Daten werden persistent gespeichert
  - Automatische Wiederherstellung der Session

### 📝 Hinweise

- Alle Account-Daten werden lokal im Browser gespeichert (localStorage)
- Hashtags werden automatisch normalisiert (fügt # hinzu, falls fehlt)
- Spiel kann nur gestartet werden, wenn ein Account eingeloggt ist

