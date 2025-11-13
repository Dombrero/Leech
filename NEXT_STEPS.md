# ✅ Was ich bereits für dich gemacht habe:

- ✅ Git lokal konfiguriert
- ✅ Alle Dateien hinzugefügt
- ✅ Ersten Commit erstellt

---

# 📋 Was du jetzt noch machen musst:

## SCHRITT 1: GitHub Repository erstellen (2 Minuten)

1. Gehe zu: **https://github.com**
2. Klicke oben rechts auf **"Sign up"** (oder "Sign in" falls du schon einen Account hast)
3. Nach dem Login: Klicke auf das **➕** Symbol oben rechts
4. Wähle **"New repository"**
5. Fülle aus:
   - **Repository name**: `leech-game` (oder ein anderer Name)
   - **✅ Public** (MUSS Public sein!)
   - **❌ Alle Checkboxen unangekreuzt lassen**
6. Klicke **"Create repository"**

---

## SCHRITT 2: Repository mit deinem Projekt verbinden

Nach dem Erstellen siehst du eine Seite mit Anweisungen.

**Kopiere diesen Befehl** (ersetze `DEIN-USERNAME` mit deinem GitHub-Benutzernamen):

```powershell
git remote add origin https://github.com/DEIN-USERNAME/leech-game.git
git branch -M main
git push -u origin main
```

**Führe diese Befehle in PowerShell aus.**

**Falls GitHub nach Login fragt:**
- **Username**: Dein GitHub-Benutzername
- **Password**: Du brauchst einen "Personal Access Token"
  - Gehe zu: https://github.com/settings/tokens
  - Klicke "Generate new token (classic)"
  - Name: "leech-game"
  - Scopes: ✅ "repo" (alles ankreuzen)
  - Klicke "Generate token"
  - **KOPIERE DEN TOKEN** (du siehst ihn nur einmal!)
  - Verwende diesen Token als Passwort

---

## SCHRITT 3: GitHub Pages aktivieren (1 Minute)

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **"Settings"** (oben rechts)
3. Links im Menü: **"Pages"**
4. Unter "Source":
   - Wähle **"Deploy from a branch"**
   - Branch: **"main"**
   - Folder: **"/ (root)"**
5. Klicke **"Save"**

**Warte 1-2 Minuten** → Du bekommst eine URL wie:
```
https://DEIN-USERNAME.github.io/leech-game/
```

**Fertig! 🎉**

---

## 🚀 Updates hochladen (später)

Jedes Mal wenn du Änderungen machst, führe aus:

```powershell
git add .
git commit -m "Beschreibung der Änderung"
git push
```

Nach 1-2 Minuten sind Updates live!

---

## ❓ Hilfe

Falls du Probleme hast, sag Bescheid! Ich kann dir bei den nächsten Schritten helfen.

