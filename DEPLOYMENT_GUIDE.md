# 🚀 Leech - Online Deployment Guide

## Option 1: GitHub Pages (Empfohlen - Kostenlos & Einfach)

### Schritt 1: GitHub Repository erstellen

1. Gehe zu [GitHub.com](https://github.com) und erstelle ein kostenloses Konto (falls noch nicht vorhanden)
2. Klicke auf "New Repository" (grüner Button oben rechts)
3. Gib einen Namen ein (z.B. "leech-game")
4. Wähle "Public" (für kostenloses Hosting)
5. **WICHTIG**: Lasse "Initialize this repository with a README" **NICHT** angekreuzt
6. Klicke "Create repository"

### Schritt 2: Git lokal einrichten

1. Öffne PowerShell/Terminal in deinem Projektordner:
   ```
   cd "G:\Creative Folder\Programmieren\cursor projekte\procecdural simulator"
   ```

2. Initialisiere Git (falls noch nicht geschehen):
   ```bash
   git init
   ```

3. Füge alle Dateien hinzu:
   ```bash
   git add .
   ```

4. Erstelle ersten Commit:
   ```bash
   git commit -m "Initial commit - Leech Game"
   ```

5. Verbinde mit GitHub (ersetze USERNAME und REPO-NAME):
   ```bash
   git remote add origin https://github.com/USERNAME/REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

### Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf "Settings" (oben rechts)
3. Scrolle zu "Pages" (links im Menü)
4. Unter "Source" wähle "Deploy from a branch"
5. Wähle "main" Branch und "/ (root)" Ordner
6. Klicke "Save"
7. Warte 1-2 Minuten - dein Spiel ist dann unter:
   ```
   https://USERNAME.github.io/REPO-NAME/
   ```

### Schritt 4: Updates pushen

Jedes Mal wenn du Änderungen machst:

```bash
git add .
git commit -m "Beschreibung der Änderungen"
git push
```

Nach 1-2 Minuten sind die Updates live! 🎉

---

## Option 2: Netlify (Noch einfacher - Drag & Drop)

### Schritt 1: Netlify Account erstellen

1. Gehe zu [Netlify.com](https://netlify.com)
2. Erstelle kostenloses Konto (mit GitHub, Email, etc.)

### Schritt 2: Deploy

**Methode A: Drag & Drop (Schnell)**
1. Ziehe deinen Projektordner in den Netlify-Bereich
2. Fertig! Du bekommst sofort eine URL

**Methode B: GitHub Integration (Automatische Updates)**
1. Klicke "New site from Git"
2. Verbinde GitHub
3. Wähle dein Repository
4. Netlify erkennt automatisch die HTML-Datei
5. Klicke "Deploy site"

### Schritt 3: Updates

- **Drag & Drop**: Einfach neuen Ordner hochziehen
- **GitHub**: Einfach `git push` - Netlify deployed automatisch!

---

## Option 3: Vercel (Sehr einfach)

1. Gehe zu [Vercel.com](https://vercel.com)
2. Erstelle Account (mit GitHub)
3. Klicke "New Project"
4. Wähle dein GitHub Repository
5. Klicke "Deploy"
6. Fertig! Automatische Updates bei jedem `git push`

---

## Option 4: GitHub Pages mit Custom Domain (Optional)

Falls du eine eigene Domain haben möchtest (z.B. leech-game.com):

1. Kaufe Domain bei einem Anbieter (z.B. Namecheap, GoDaddy)
2. In GitHub Pages Settings:
   - Trage deine Domain ein
   - Folge den DNS-Anweisungen
3. Erstelle `CNAME` Datei im Root mit deiner Domain

---

## Empfehlung

**Für den Start**: GitHub Pages
- ✅ Kostenlos
- ✅ Einfach zu setzen
- ✅ Automatische Updates bei `git push`
- ✅ Keine Limits für statische Websites

**Für mehr Features**: Netlify
- ✅ Noch einfacher
- ✅ Automatische HTTPS
- ✅ Preview-Deployments für jeden Branch
- ✅ Formulare & Serverless Functions (falls später benötigt)

---

## Wichtige Dateien für Deployment

Stelle sicher, dass diese Dateien im Root-Ordner sind:
- ✅ `index.html`
- ✅ `simulator.js`
- ✅ `style.css`

Optional (für bessere Performance):
- `.gitignore` (um node_modules etc. auszuschließen)
- `README.md` (Spielbeschreibung)

---

## Troubleshooting

**Problem**: Seite zeigt nichts / 404 Error
- Lösung: Stelle sicher, dass `index.html` im Root-Ordner ist

**Problem**: Updates erscheinen nicht
- Lösung: Warte 1-2 Minuten, oder leere Browser-Cache (Strg+F5)

**Problem**: Git Push funktioniert nicht
- Lösung: Prüfe ob du eingeloggt bist: `git config --global user.name` und `git config --global user.email`

