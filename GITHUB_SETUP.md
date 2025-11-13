# 📝 GitHub Pages Setup - Schritt für Schritt

## Teil 1: GitHub Account & Repository erstellen

### Schritt 1: GitHub Account erstellen
1. Gehe zu **https://github.com**
2. Klicke oben rechts auf **"Sign up"** (Anmelden)
3. Gib deine Email-Adresse ein
4. Wähle einen Benutzernamen (z.B. "deinname" oder "leech-game")
5. Wähle ein Passwort
6. Klicke **"Create account"**
7. Bestätige deine Email (falls nötig)

### Schritt 2: Neues Repository erstellen
1. Nach dem Login siehst du oben rechts ein **+** Symbol
2. Klicke darauf → **"New repository"**
3. Fülle aus:
   - **Repository name**: `leech-game` (oder ein anderer Name)
   - **Description** (optional): "Leech - Ein prozedural animiertes Snake-Spiel"
   - **Public** ✅ (MUSS Public sein für kostenloses Hosting!)
   - **WICHTIG**: Lasse alle Checkboxen UNANGEKREUZT:
     - ❌ "Add a README file"
     - ❌ "Add .gitignore"
     - ❌ "Choose a license"
4. Klicke **"Create repository"** (grüner Button)

---

## Teil 2: Projekt zu GitHub hochladen

### Schritt 3: Git im Projektordner einrichten

**Öffne PowerShell** (Windows-Taste + X → "Windows PowerShell" oder "Terminal")

**Navigiere zu deinem Projektordner:**
```powershell
cd "G:\Creative Folder\Programmieren\cursor projekte\procecdural simulator"
```

**Prüfe ob Git bereits initialisiert ist:**
```powershell
git status
```

**Falls Fehler kommt (kein Git Repository):**
```powershell
git init
```

### Schritt 4: Dateien hinzufügen und committen

**Alle Dateien hinzufügen:**
```powershell
git add .
```

**Ersten Commit erstellen:**
```powershell
git commit -m "Initial commit - Leech Game"
```

**Falls du noch nie Git konfiguriert hast, mache das zuerst:**
```powershell
git config --global user.name "Dein Name"
git config --global user.email "deine-email@example.com"
```

Dann wieder:
```powershell
git add .
git commit -m "Initial commit - Leech Game"
```

### Schritt 5: Mit GitHub verbinden

**Gehe zurück zu GitHub** (dein neues Repository sollte offen sein)

**Du siehst eine Seite mit verschiedenen Optionen. Wähle:**
- "push an existing repository from the command line"

**Kopiere die beiden Befehle** (sie sehen so aus):

```powershell
git remote add origin https://github.com/DEIN-USERNAME/leech-game.git
git branch -M main
git push -u origin main
```

**WICHTIG**: Ersetze `DEIN-USERNAME` mit deinem GitHub-Benutzernamen!

**Führe diese Befehle in PowerShell aus.**

**Falls GitHub nach Login fragt:**
- GitHub verwendet jetzt "Personal Access Tokens" statt Passwort
- Gehe zu: https://github.com/settings/tokens
- Klicke "Generate new token (classic)"
- Name: "leech-game"
- Scopes: ✅ "repo" (alles unter repo)
- Klicke "Generate token"
- **KOPIERE DEN TOKEN** (du siehst ihn nur einmal!)
- Bei Passwort-Abfrage: Benutzername = dein GitHub-Username, Passwort = der Token

**Nach erfolgreichem Push** siehst du alle deine Dateien auf GitHub!

---

## Teil 3: GitHub Pages aktivieren

### Schritt 6: Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke oben auf den Tab **"Settings"** (ganz rechts)
3. Scrolle im linken Menü nach unten zu **"Pages"**
4. Unter **"Source"**:
   - Wähle **"Deploy from a branch"**
   - Branch: **"main"**
   - Folder: **"/ (root)"**
5. Klicke **"Save"** (grüner Button)

### Schritt 7: Warten und URL erhalten

1. Warte **1-2 Minuten**
2. Die Seite lädt automatisch neu
3. Oben siehst du jetzt eine grüne Box mit:
   ```
   ✅ Your site is live at https://DEIN-USERNAME.github.io/leech-game/
   ```
4. **Kopiere diese URL** - das ist deine Spiel-URL!

**Fertig! 🎉** Dein Spiel ist jetzt online!

---

## Teil 4: Updates hochladen

### Schritt 8: Änderungen pushen

**Jedes Mal wenn du Änderungen machst:**

1. Öffne PowerShell im Projektordner
2. Führe aus:
   ```powershell
   git add .
   git commit -m "Beschreibung was geändert wurde"
   git push
   ```

3. Warte 1-2 Minuten
4. **F5** im Browser drücken (oder Strg+F5 für Hard Refresh)
5. Updates sind live! 🚀

**Beispiel:**
```powershell
git add .
git commit -m "Mutationen-Werte erhöht"
git push
```

---

## 🆘 Troubleshooting

### Problem: "git: command not found"
**Lösung**: Git ist nicht installiert
1. Gehe zu: https://git-scm.com/download/win
2. Installiere Git
3. Starte PowerShell neu

### Problem: "Permission denied" beim Push
**Lösung**: 
1. Erstelle Personal Access Token (siehe Schritt 5)
2. Verwende Token als Passwort

### Problem: "Repository not found"
**Lösung**: 
- Prüfe ob der Repository-Name richtig ist
- Prüfe ob das Repository "Public" ist

### Problem: Seite zeigt 404 Error
**Lösung**:
- Warte 2-3 Minuten (erster Deploy braucht länger)
- Prüfe ob `index.html` im Root-Ordner ist
- Prüfe ob Branch "main" heißt (nicht "master")

### Problem: Updates erscheinen nicht
**Lösung**:
- Warte 1-2 Minuten
- Browser-Cache leeren: **Strg + F5**
- Oder im Inkognito-Modus testen

---

## ✅ Checkliste

- [ ] GitHub Account erstellt
- [ ] Repository erstellt (Public!)
- [ ] Git lokal initialisiert
- [ ] Dateien committed
- [ ] Mit GitHub verbunden
- [ ] Ersten Push gemacht
- [ ] GitHub Pages aktiviert
- [ ] URL erhalten
- [ ] Spiel getestet

---

## 🎯 Nächste Schritte

Nach dem ersten Deploy kannst du:
- Die URL teilen (z.B. in Discord, Reddit, etc.)
- Weiter entwickeln und einfach `git push` machen
- Optional: Custom Domain hinzufügen (in Pages Settings)

**Viel Erfolg! 🚀**

