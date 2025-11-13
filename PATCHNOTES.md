# Patch Notes - Leech Game

## Version 1.1.1 - Language System Fixes

### Bugfixes
- **Sprachinitialisierung korrigiert**: Standard-Sprache ist jetzt korrekt auf Englisch gesetzt
- **DOM-Loading-Fix**: Initialisierung wartet jetzt korrekt auf vollständiges DOM-Loading
- **HTML lang-Attribut**: Wird jetzt dynamisch auf die gewählte Sprache gesetzt
- **Sprachauswahl-Button**: Funktioniert jetzt auch in der Online-Version korrekt

### Technische Verbesserungen
- Initialisierung in `initializeGame()` Funktion gekapselt
- Korrekte Behandlung von DOM-Loading-Zuständen
- Entfernung von doppelter Initialisierung

---

## Version 1.1.0 - Multi-Language Support & UI Improvements

### Neue Features
- **Mehrsprachiges System**: Das Spiel unterstützt jetzt 5 Sprachen:
  - 🇩🇪 Deutsch
  - 🇬🇧 English (Standard)
  - 🇫🇷 Français
  - 🇪🇸 Español
  - 🇯🇵 日本語
- **Sprachauswahl-Button**: Button oben rechts mit Flaggen-Icon zum Wechseln der Sprache
- **Automatische Sprachspeicherung**: Die gewählte Sprache wird gespeichert und beim nächsten Besuch wiederhergestellt

### Übersetzungen
- Alle UI-Texte sind vollständig übersetzt (Buttons, Labels, Overlays)
- Upgrade-Namen und Beschreibungen sind übersetzt
- Mutation-Namen und Beschreibungen sind übersetzt
- Game Over Screen ist übersetzt
- Dev Mode ist übersetzt
- Debug Log ist übersetzt

### UI-Verbesserungen
- **Größeres Spielfeld**: Canvas-Höhe von 600px auf 900px erhöht für mehr Spielraum
- **Verbesserte Maussteuerung**: Die Kreatur folgt weiterhin dem letzten Ziel, auch wenn die Maus außerhalb des Feldes ist

### Technische Verbesserungen
- Übersetzungssystem mit zentraler `t()` Funktion
- Dynamische UI-Aktualisierung beim Sprachwechsel
- Alle Texte werden korrekt aktualisiert, wenn die Sprache geändert wird

---

## Version 1.0.0 - Initial Release

### Features
- Procedural animierte Kreatur mit Rain World Stil
- Snake-Spiel Mechanik mit Food-Sammlung
- Upgrade-System mit Rarities (Common, Uncommon, Rare, Epic)
- Mutation-System für Körperteile-Upgrades
- Hunter AI mit verschiedenen Klassen (Normal, Elite, Fat)
- Stamina-System für Spieler und Hunter
- Open-World mit Kamera-System
- Token-Pools für Food und Stamina
- Dev Mode für Testing
- Debug Log System

