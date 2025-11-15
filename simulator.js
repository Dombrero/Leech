// Übersetzungssystem
const TRANSLATIONS = {
    de: {
        // UI
        score: "Score",
        length: "Länge",
        start: "Start",
        stop: "Stop",
        reset: "Zurücksetzen",
        speed: "Geschwindigkeit",
        selectUpgrade: "Upgrade auswählen!",
        selectMutation: "Mutation auswählen!",
        currentLength: "Aktuelle Länge",
        segments: "Segmente",
        activeUpgrades: "Aktive Upgrades",
        noUpgrades: "Noch keine Upgrades",
        gameOver: "GAME OVER",
        finalScore: "Finaler Score",
        lengthReached: "Länge erreicht",
        restart: "Neu starten",
        devMode: "Dev Mode",
        devModeTitle: "🔧 Dev Mode - Upgrade/Mutation Tester",
        upgrades: "Upgrades",
        mutations: "Mutationen",
        close: "Schließen",
        debugLog: "Debug Log",
        copyLog: "Copy Log",
        clear: "Clear",
        cost: "Kosten",
        notEnough: "Nicht genug!",
        notEnoughSegments: "Nicht genug Segmente für Mutationen!",
        stacks: "Stacks",
        all: "Alle",
        mutation: "MUTATION",
        mainMenu: "Hauptmenü",
        startGame: "Spiel starten",
        viewHighscore: "Highscore",
        backToMenu: "Hauptmenü",
        login: "Anmelden",
        register: "Registrieren",
        loginTitle: "Anmelden",
        registerTitle: "Account erstellen",
        name: "Name",
        hashtag: "Hashtag",
        noAccount: "Noch kein Account?",
        hasAccount: "Bereits ein Account?",
        welcome: "Willkommen, ",
        logout: "(Abmelden)",
        random: "Random",
        accountCreated: "Account erfolgreich erstellt!",
        loginSuccess: "Erfolgreich angemeldet!",
        loginError: "Name oder Hashtag falsch!",
        nameRequired: "Bitte gib einen Namen ein!",
        hashtagRequired: "Bitte gib einen Hashtag ein!",
        nameAlreadyExists: "Dieser Name ist bereits vergeben! Bitte wähle einen anderen Namen.",
        // Upgrade-Namen und Beschreibungen werden dynamisch übersetzt
    },
    en: {
        score: "Score",
        length: "Length",
        start: "Start",
        stop: "Stop",
        reset: "Reset",
        speed: "Speed",
        selectUpgrade: "Select Upgrade!",
        selectMutation: "Select Mutation!",
        currentLength: "Current Length",
        segments: "segments",
        activeUpgrades: "Active Upgrades",
        noUpgrades: "No upgrades yet",
        gameOver: "GAME OVER",
        finalScore: "Final Score",
        lengthReached: "Length Reached",
        restart: "Restart",
        devMode: "Dev Mode",
        devModeTitle: "🔧 Dev Mode - Upgrade/Mutation Tester",
        upgrades: "Upgrades",
        mutations: "Mutations",
        close: "Close",
        debugLog: "Debug Log",
        copyLog: "Copy Log",
        clear: "Clear",
        cost: "Cost",
        notEnough: "Not enough!",
        notEnoughSegments: "Not enough segments for mutations!",
        stacks: "Stacks",
        all: "All",
        mutation: "MUTATION",
        mainMenu: "Main Menu",
        startGame: "Start Game",
        viewHighscore: "Highscore",
        backToMenu: "Main Menu",
        login: "Login",
        register: "Register",
        loginTitle: "Login",
        registerTitle: "Create Account",
        name: "Name",
        hashtag: "Hashtag",
        noAccount: "No account yet?",
        hasAccount: "Already have an account?",
        welcome: "Welcome, ",
        logout: "(Logout)",
        random: "Random",
        accountCreated: "Account created successfully!",
        loginSuccess: "Successfully logged in!",
        loginError: "Name or hashtag incorrect!",
        nameRequired: "Please enter a name!",
        hashtagRequired: "Please enter a hashtag!",
        nameAlreadyExists: "This name is already taken! Please choose a different name.",
        highscore: "Highscore",
        top100: "Top 100",
        rank: "Rank",
        enterName: "Enter your name:",
        congratsTop100: "🎉 You're in the Top 100!",
        save: "Save",
        skip: "Skip",
        noHighscores: "No highscores yet",
    },
    fr: {
        score: "Score",
        length: "Longueur",
        start: "Démarrer",
        stop: "Arrêter",
        reset: "Réinitialiser",
        speed: "Vitesse",
        selectUpgrade: "Choisir une amélioration!",
        selectMutation: "Choisir une mutation!",
        currentLength: "Longueur actuelle",
        segments: "segments",
        activeUpgrades: "Améliorations actives",
        noUpgrades: "Aucune amélioration",
        gameOver: "GAME OVER",
        finalScore: "Score final",
        lengthReached: "Longueur atteinte",
        restart: "Redémarrer",
        devMode: "Mode Dev",
        devModeTitle: "🔧 Mode Dev - Testeur d'améliorations/mutations",
        upgrades: "Améliorations",
        mutations: "Mutations",
        close: "Fermer",
        debugLog: "Journal de débogage",
        copyLog: "Copier le journal",
        clear: "Effacer",
        cost: "Coût",
        notEnough: "Pas assez!",
        notEnoughSegments: "Pas assez de segments pour les mutations!",
        stacks: "Empilements",
        all: "Toutes les",
        mutation: "MUTATION",
        mainMenu: "Menu Principal",
        startGame: "Démarrer le Jeu",
        viewHighscore: "Meilleurs Scores",
        backToMenu: "Menu Principal",
        login: "Connexion",
        register: "S'inscrire",
        loginTitle: "Connexion",
        registerTitle: "Créer un compte",
        name: "Nom",
        hashtag: "Hashtag",
        noAccount: "Pas encore de compte?",
        hasAccount: "Déjà un compte?",
        welcome: "Bienvenue, ",
        logout: "(Déconnexion)",
        random: "Aléatoire",
        accountCreated: "Compte créé avec succès!",
        loginSuccess: "Connexion réussie!",
        loginError: "Nom ou hashtag incorrect!",
        nameRequired: "Veuillez entrer un nom!",
        hashtagRequired: "Veuillez entrer un hashtag!",
        nameAlreadyExists: "Ce nom est déjà pris! Veuillez choisir un autre nom.",
        highscore: "Meilleurs Scores",
        top100: "Top 100",
        rank: "Rang",
        enterName: "Entrez votre nom:",
        congratsTop100: "🎉 Vous êtes dans le Top 100!",
        save: "Enregistrer",
        skip: "Passer",
        noHighscores: "Aucun meilleur score",
    },
    es: {
        score: "Puntuación",
        length: "Longitud",
        start: "Iniciar",
        stop: "Detener",
        reset: "Reiniciar",
        speed: "Velocidad",
        selectUpgrade: "¡Selecciona una mejora!",
        selectMutation: "¡Selecciona una mutación!",
        currentLength: "Longitud actual",
        segments: "segmentos",
        activeUpgrades: "Mejoras activas",
        noUpgrades: "Sin mejoras aún",
        gameOver: "GAME OVER",
        finalScore: "Puntuación final",
        lengthReached: "Longitud alcanzada",
        restart: "Reiniciar",
        devMode: "Modo Dev",
        devModeTitle: "🔧 Modo Dev - Probador de mejoras/mutaciones",
        upgrades: "Mejoras",
        mutations: "Mutaciones",
        close: "Cerrar",
        debugLog: "Registro de depuración",
        copyLog: "Copiar registro",
        clear: "Limpiar",
        cost: "Costo",
        notEnough: "¡No suficiente!",
        notEnoughSegments: "¡No hay suficientes segmentos para mutaciones!",
        stacks: "Pilas",
        all: "Todas las",
        mutation: "MUTACIÓN",
        mainMenu: "Menú Principal",
        startGame: "Iniciar Juego",
        viewHighscore: "Mejores Puntuaciones",
        backToMenu: "Menú Principal",
        login: "Iniciar Sesión",
        register: "Registrarse",
        loginTitle: "Iniciar Sesión",
        registerTitle: "Crear Cuenta",
        name: "Nombre",
        hashtag: "Hashtag",
        noAccount: "¿No tienes cuenta?",
        hasAccount: "¿Ya tienes cuenta?",
        welcome: "Bienvenido, ",
        logout: "(Cerrar Sesión)",
        random: "Aleatorio",
        accountCreated: "¡Cuenta creada exitosamente!",
        loginSuccess: "¡Sesión iniciada exitosamente!",
        loginError: "¡Nombre o hashtag incorrecto!",
        nameRequired: "¡Por favor ingresa un nombre!",
        hashtagRequired: "¡Por favor ingresa un hashtag!",
        nameAlreadyExists: "¡Este nombre ya está en uso! Por favor elige otro nombre.",
        highscore: "Mejores Puntuaciones",
        top100: "Top 100",
        rank: "Posición",
        enterName: "Ingresa tu nombre:",
        congratsTop100: "🎉 ¡Estás en el Top 100!",
        save: "Guardar",
        skip: "Omitir",
        noHighscores: "Sin puntuaciones aún",
    },
    ja: {
        score: "スコア",
        length: "長さ",
        start: "開始",
        stop: "停止",
        reset: "リセット",
        speed: "速度",
        selectUpgrade: "アップグレードを選択！",
        selectMutation: "変異を選択！",
        currentLength: "現在の長さ",
        segments: "セグメント",
        activeUpgrades: "アクティブなアップグレード",
        noUpgrades: "アップグレードなし",
        gameOver: "ゲームオーバー",
        finalScore: "最終スコア",
        lengthReached: "到達した長さ",
        restart: "再開",
        devMode: "開発モード",
        devModeTitle: "🔧 開発モード - アップグレード/変異テスター",
        upgrades: "アップグレード",
        mutations: "変異",
        close: "閉じる",
        debugLog: "デバッグログ",
        copyLog: "ログをコピー",
        clear: "クリア",
        cost: "コスト",
        notEnough: "不足しています！",
        notEnoughSegments: "変異には十分なセグメントがありません！",
        stacks: "スタック",
        all: "すべての",
        mutation: "変異",
        mainMenu: "メインメニュー",
        startGame: "ゲーム開始",
        viewHighscore: "ハイスコア",
        backToMenu: "メインメニュー",
        login: "ログイン",
        register: "登録",
        loginTitle: "ログイン",
        registerTitle: "アカウント作成",
        name: "名前",
        hashtag: "ハッシュタグ",
        noAccount: "アカウントをお持ちでないですか？",
        hasAccount: "既にアカウントをお持ちですか？",
        welcome: "ようこそ、",
        logout: "（ログアウト）",
        random: "ランダム",
        accountCreated: "アカウントが正常に作成されました！",
        loginSuccess: "ログインに成功しました！",
        loginError: "名前またはハッシュタグが正しくありません！",
        nameRequired: "名前を入力してください！",
        hashtagRequired: "ハッシュタグを入力してください！",
        nameAlreadyExists: "この名前は既に使用されています！別の名前を選択してください。",
        highscore: "ハイスコア",
        top100: "トップ100",
        rank: "ランク",
        enterName: "名前を入力してください:",
        congratsTop100: "🎉 トップ100に入りました！",
        save: "保存",
        skip: "スキップ",
        noHighscores: "ハイスコアなし",
    }
};

// Übersetzungen für Upgrade-Namen und Beschreibungen
const UPGRADE_TRANSLATIONS = {
    de: {
        'Leichter Speed': 'Leichter Speed',
        '+3% Bewegungsgeschwindigkeit': '+3% Bewegungsgeschwindigkeit',
        'Längerer Körper': 'Längerer Körper',
        '+2 Segmente': '+2 Segmente',
        'Leichte Agilität': 'Leichte Agilität',
        '+15% Drehgeschwindigkeit': '+15% Drehgeschwindigkeit',
        'Schwache Regeneration': 'Schwache Regeneration',
        '+1% Chance auf extra Food': '+1% Chance auf extra Food',
        'Geschwindigkeits-Boost': 'Geschwindigkeits-Boost',
        '+5% Bewegungsgeschwindigkeit': '+5% Bewegungsgeschwindigkeit',
        '+3 Segmente': '+3 Segmente',
        'Agilität': 'Agilität',
        '+30% Drehgeschwindigkeit': '+30% Drehgeschwindigkeit',
        'Stärke': 'Stärke',
        '+4% Geschwindigkeit, +2 Segmente': '+4% Geschwindigkeit, +2 Segmente',
        '+5 Segmente': '+5 Segmente',
        '+6% Geschwindigkeit, +4 Segmente': '+6% Geschwindigkeit, +4 Segmente',
        '+8 Segmente': '+8 Segmente',
        '+10% Geschwindigkeit, +6 Segmente': '+10% Geschwindigkeit, +6 Segmente',
        'Legendärer Boost': 'Legendärer Boost',
        '+8% Geschwindigkeit, +30% Drehgeschwindigkeit, +3 Segmente': '+8% Geschwindigkeit, +30% Drehgeschwindigkeit, +3 Segmente',
        'Max Stamina': 'Max Stamina',
        '+2 Max Stamina': '+2 Max Stamina',
    },
    en: {
        'Leichter Speed': 'Light Speed',
        '+3% Bewegungsgeschwindigkeit': '+3% Movement Speed',
        'Längerer Körper': 'Longer Body',
        '+2 Segmente': '+2 Segments',
        'Leichte Agilität': 'Light Agility',
        '+15% Drehgeschwindigkeit': '+15% Turn Speed',
        'Schwache Regeneration': 'Weak Regeneration',
        '+1% Chance auf extra Food': '+1% Extra Food Chance',
        'Geschwindigkeits-Boost': 'Speed Boost',
        '+5% Bewegungsgeschwindigkeit': '+5% Movement Speed',
        '+3 Segmente': '+3 Segments',
        'Agilität': 'Agility',
        '+30% Drehgeschwindigkeit': '+30% Turn Speed',
        'Stärke': 'Strength',
        '+4% Geschwindigkeit, +2 Segmente': '+4% Speed, +2 Segments',
        '+5 Segmente': '+5 Segments',
        '+6% Geschwindigkeit, +4 Segmente': '+6% Speed, +4 Segments',
        '+8 Segmente': '+8 Segments',
        '+10% Geschwindigkeit, +6 Segmente': '+10% Speed, +6 Segments',
        'Legendärer Boost': 'Legendary Boost',
        '+8% Geschwindigkeit, +30% Drehgeschwindigkeit, +3 Segmente': '+8% Speed, +30% Turn Speed, +3 Segments',
        'Max Stamina': 'Max Stamina',
        '+2 Max Stamina': '+2 Max Stamina',
    },
    fr: {
        'Leichter Speed': 'Vitesse Légère',
        '+3% Bewegungsgeschwindigkeit': '+3% Vitesse de Déplacement',
        'Längerer Körper': 'Corps Plus Long',
        '+2 Segmente': '+2 Segments',
        'Leichte Agilität': 'Agilité Légère',
        '+15% Drehgeschwindigkeit': '+15% Vitesse de Rotation',
        'Schwache Regeneration': 'Régénération Faible',
        '+1% Chance auf extra Food': '+1% Chance de Nourriture Supplémentaire',
        'Geschwindigkeits-Boost': 'Boost de Vitesse',
        '+5% Bewegungsgeschwindigkeit': '+5% Vitesse de Déplacement',
        '+3 Segmente': '+3 Segments',
        'Agilität': 'Agilité',
        '+30% Drehgeschwindigkeit': '+30% Vitesse de Rotation',
        'Stärke': 'Force',
        '+4% Geschwindigkeit, +2 Segmente': '+4% Vitesse, +2 Segments',
        '+5 Segmente': '+5 Segments',
        '+6% Geschwindigkeit, +4 Segmente': '+6% Vitesse, +4 Segments',
        '+8 Segmente': '+8 Segments',
        '+10% Geschwindigkeit, +6 Segmente': '+10% Vitesse, +6 Segments',
        'Legendärer Boost': 'Boost Légendaire',
        '+8% Geschwindigkeit, +30% Drehgeschwindigkeit, +3 Segmente': '+8% Vitesse, +30% Vitesse de Rotation, +3 Segments',
        'Max Stamina': 'Endurance Max',
        '+2 Max Stamina': '+2 Endurance Max',
    },
    es: {
        'Leichter Speed': 'Velocidad Ligera',
        '+3% Bewegungsgeschwindigkeit': '+3% Velocidad de Movimiento',
        'Längerer Körper': 'Cuerpo Más Largo',
        '+2 Segmente': '+2 Segmentos',
        'Leichte Agilität': 'Agilidad Ligera',
        '+15% Drehgeschwindigkeit': '+15% Velocidad de Giro',
        'Schwache Regeneration': 'Regeneración Débil',
        '+1% Chance auf extra Food': '+1% Probabilidad de Comida Extra',
        'Geschwindigkeits-Boost': 'Impulso de Velocidad',
        '+5% Bewegungsgeschwindigkeit': '+5% Velocidad de Movimiento',
        '+3 Segmente': '+3 Segmentos',
        'Agilität': 'Agilidad',
        '+30% Drehgeschwindigkeit': '+30% Velocidad de Giro',
        'Stärke': 'Fuerza',
        '+4% Geschwindigkeit, +2 Segmente': '+4% Velocidad, +2 Segmentos',
        '+5 Segmente': '+5 Segmentos',
        '+6% Geschwindigkeit, +4 Segmente': '+6% Velocidad, +4 Segmentos',
        '+8 Segmente': '+8 Segmentos',
        '+10% Geschwindigkeit, +6 Segmente': '+10% Velocidad, +6 Segmentos',
        'Legendärer Boost': 'Impulso Legendario',
        '+8% Geschwindigkeit, +30% Drehgeschwindigkeit, +3 Segmente': '+8% Velocidad, +30% Velocidad de Giro, +3 Segmentos',
        'Max Stamina': 'Resistencia Máx',
        '+2 Max Stamina': '+2 Resistencia Máx',
    },
    ja: {
        'Leichter Speed': '軽い速度',
        '+3% Bewegungsgeschwindigkeit': '+3%移動速度',
        'Längerer Körper': '長い体',
        '+2 Segmente': '+2セグメント',
        'Leichte Agilität': '軽い敏捷性',
        '+15% Drehgeschwindigkeit': '+15%回転速度',
        'Schwache Regeneration': '弱い再生',
        '+1% Chance auf extra Food': '+1%追加フード確率',
        'Geschwindigkeits-Boost': '速度ブースト',
        '+5% Bewegungsgeschwindigkeit': '+5%移動速度',
        '+3 Segmente': '+3セグメント',
        'Agilität': '敏捷性',
        '+30% Drehgeschwindigkeit': '+30%回転速度',
        'Stärke': '強さ',
        '+4% Geschwindigkeit, +2 Segmente': '+4%速度、+2セグメント',
        '+5 Segmente': '+5セグメント',
        '+6% Geschwindigkeit, +4 Segmente': '+6%速度、+4セグメント',
        '+8 Segmente': '+8セグメント',
        '+10% Geschwindigkeit, +6 Segmente': '+10%速度、+6セグメント',
        'Legendärer Boost': '伝説のブースト',
        '+8% Geschwindigkeit, +30% Drehgeschwindigkeit, +3 Segmente': '+8%速度、+30%回転速度、+3セグメント',
        'Max Stamina': '最大スタミナ',
        '+2 Max Stamina': '+2最大スタミナ',
    }
};

// Übersetzungen für Mutation-Namen und Beschreibungen
const MUTATION_TRANSLATIONS = {
    de: {
        'Hungry Leech': 'Hungry Leech',
        'Körper wird beim Essen größer (max 50% pro Stack)': 'Körper wird beim Essen größer (max 50% pro Stack)',
        'Hammer Head': 'Hammer Head',
        'Kopf wird breiter für einfachere Token-Sammlung (30% pro Stack)': 'Kopf wird breiter für einfachere Token-Sammlung (30% pro Stack)',
        'Magnetic Skin': 'Magnetic Skin',
        'Zieht nahe Tokens an (40px Reichweite pro Stack)': 'Zieht nahe Tokens an (40px Reichweite pro Stack)',
    },
    en: {
        'Hungry Leech': 'Hungry Leech',
        'Körper wird beim Essen größer (max 50% pro Stack)': 'Body grows larger when eating (max 50% per stack)',
        'Hammer Head': 'Hammer Head',
        'Kopf wird breiter für einfachere Token-Sammlung (30% pro Stack)': 'Head becomes wider for easier token collection (30% per stack)',
        'Magnetic Skin': 'Magnetic Skin',
        'Zieht nahe Tokens an (40px Reichweite pro Stack)': 'Attracts nearby tokens (40px range per stack)',
    },
    fr: {
        'Hungry Leech': 'Sangsue Affamée',
        'Körper wird beim Essen größer (max 50% pro Stack)': 'Le corps grandit en mangeant (max 50% par empilement)',
        'Hammer Head': 'Tête Marteau',
        'Kopf wird breiter für einfachere Token-Sammlung (30% pro Stack)': 'La tête devient plus large pour faciliter la collecte (30% par empilement)',
        'Magnetic Skin': 'Peau Magnétique',
        'Zieht nahe Tokens an (40px Reichweite pro Stack)': 'Attire les jetons proches (40px de portée par empilement)',
    },
    es: {
        'Hungry Leech': 'Sanguijuela Hambrienta',
        'Körper wird beim Essen größer (max 50% pro Stack)': 'El cuerpo crece al comer (máx 50% por pila)',
        'Hammer Head': 'Cabeza Martillo',
        'Kopf wird breiter für einfachere Token-Sammlung (30% pro Stack)': 'La cabeza se vuelve más ancha para facilitar la recolección (30% por pila)',
        'Magnetic Skin': 'Piel Magnética',
        'Zieht nahe Tokens an (40px Reichweite pro Stack)': 'Atrae fichas cercanas (40px de alcance por pila)',
    },
    ja: {
        'Hungry Leech': '空腹のヒル',
        'Körper wird beim Essen größer (max 50% pro Stack)': '食べると体が大きくなる（スタックあたり最大50%）',
        'Hammer Head': 'ハンマーヘッド',
        'Kopf wird breiter für einfachere Token-Sammlung (30% pro Stack)': 'トークン収集が容易になるように頭が広くなる（スタックあたり30%）',
        'Magnetic Skin': '磁気の皮膚',
        'Zieht nahe Tokens an (40px Reichweite pro Stack)': '近くのトークンを引き寄せる（スタックあたり40px範囲）',
    }
};

// Aktuelle Sprache (Standard: Englisch)
let currentLanguage = localStorage.getItem('gameLanguage') || 'en';

// Funktion zum Übersetzen von Upgrade/Mutation-Texten
function translateText(text) {
    if (currentLanguage === 'de') return text; // Deutsch ist die Basis-Sprache
    return UPGRADE_TRANSLATIONS[currentLanguage]?.[text] || MUTATION_TRANSLATIONS[currentLanguage]?.[text] || text;
}

// Übersetzungsfunktion
function t(key) {
    return TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS.de[key] || key;
}

// Canvas Setup mit Pixel-Art Rendering
let canvas, ctx;

// Pixel-Art Einstellungen
const PIXEL_SCALE = 2; // Niedrigere Auflösung für Pixel-Look
let displayWidth, displayHeight;
let renderWidth, renderHeight;

function initCanvas() {
    canvas = document.getElementById('simulatorCanvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        return false;
    }
    ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Could not get 2D context!');
        return false;
    }
    return true;
}

function resizeCanvas() {
    if (!canvas) {
        if (!initCanvas()) return;
    }
    
    const gameContainer = document.getElementById('gameContainer');
    // Prüfe ob Container sichtbar ist
    if (gameContainer && (gameContainer.style.display === 'none' || gameContainer.offsetWidth === 0)) {
        // Container ist versteckt, warte bis es sichtbar ist
        return;
    }
    
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
        // Canvas hat noch keine Größe, warte
        return;
    }
    
    displayWidth = rect.width;
    displayHeight = rect.height;
    renderWidth = Math.floor(displayWidth / PIXEL_SCALE);
    renderHeight = Math.floor(displayHeight / PIXEL_SCALE);
    canvas.width = renderWidth;
    canvas.height = renderHeight;
    canvas.style.width = displayWidth + 'px';
    canvas.style.height = displayHeight + 'px';
    canvas.style.imageRendering = 'pixelated';
    canvas.style.imageRendering = '-moz-crisp-edges';
    canvas.style.imageRendering = 'crisp-edges';
    ctx.imageSmoothingEnabled = false;
}

// Initialisiere Canvas beim Laden (aber resize erst wenn sichtbar)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initCanvas();
    });
} else {
    initCanvas();
}

window.addEventListener('resize', resizeCanvas);

// Pixel-Art Zeichenfunktion
function drawPixelRect(x, y, w, h, color) {
    if (!ctx) return; // Sicherheitsprüfung: ctx muss initialisiert sein
    // Stelle sicher, dass Pixel-Art Rendering aktiv ist (wichtig nach Transformationen)
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(x), Math.floor(y), Math.floor(w), Math.floor(h));
}

function drawPixelCircle(x, y, r, color) {
    if (!ctx) return; // Sicherheitsprüfung: ctx muss initialisiert sein
    // Stelle sicher, dass Pixel-Art Rendering aktiv ist (wichtig nach Transformationen)
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(Math.floor(x), Math.floor(y), Math.floor(r), 0, Math.PI * 2);
    ctx.fill();
}

// Segment-Klasse für prozedurale Physik
class Segment {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.size = 4;
    }
    
    update(prevSegment, targetDistance, damping = 0.92, segmentIndex = 0, totalSegments = 1) {
        if (prevSegment) {
            // Berechne Distanz und Winkel zum vorherigen Segment
            const dx = prevSegment.x - this.x;
            const dy = prevSegment.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Adaptive Korrektur-Schwelle basierend auf Segment-Position
            // Hintere Segmente brauchen aggressivere Korrektur
            const correctionThreshold = targetDistance * (1.3 + (segmentIndex / totalSegments) * 0.4);
            
            if (distance > 0.1) {
                // Wenn zu weit weg, direkt korrigieren (verhindert Instabilität)
                if (distance > correctionThreshold) {
                    const angle = Math.atan2(dy, dx);
                    this.x = prevSegment.x - Math.cos(angle) * targetDistance;
                    this.y = prevSegment.y - Math.sin(angle) * targetDistance;
                    // Mehr Dämpfung für hintere Segmente
                    const velocityDamping = 0.3 + (segmentIndex / totalSegments) * 0.2;
                    this.vx *= velocityDamping;
                    this.vy *= velocityDamping;
                } else {
                    // Sanfte Physik-Integration mit adaptiver Stärke
                    const targetX = prevSegment.x - (dx / distance) * targetDistance;
                    const targetY = prevSegment.y - (dy / distance) * targetDistance;
                    
                    // Stärkere Korrektur für hintere Segmente
                    const correctionStrength = 0.15 + (segmentIndex / totalSegments) * 0.1;
                    const ax = (targetX - this.x) * correctionStrength;
                    const ay = (targetY - this.y) * correctionStrength;
                    
                    this.vx += ax;
                    this.vy += ay;
                }
            }
        }
        
        // Dämpfung anwenden - mehr Dämpfung für hintere Segmente
        const adaptiveDamping = damping + (segmentIndex / totalSegments) * 0.05;
        this.vx *= Math.min(adaptiveDamping, 0.98);
        this.vy *= Math.min(adaptiveDamping, 0.98);
        
        // Geschwindigkeit begrenzen (verhindert Explosionen)
        // Niedrigere Max-Geschwindigkeit für hintere Segmente
        const maxSpeed = 5 - (segmentIndex / totalSegments) * 2;
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
        }
        
        // Position aktualisieren
        this.x += this.vx;
        this.y += this.vy;
    }
    
    draw(color) {
        drawPixelCircle(this.x, this.y, this.size, color);
    }
}

// Rarity-System: common (grün), uncommon (blau), rare (lila), epic (gold)
const RARITY = {
    COMMON: { name: 'common', color: '#4ade80', weight: 50 },      // Grün
    UNCOMMON: { name: 'uncommon', color: '#60a5fa', weight: 30 }, // Blau
    RARE: { name: 'rare', color: '#a78bfa', weight: 15 },          // Lila
    EPIC: { name: 'epic', color: '#fbbf24', weight: 5 }            // Gold
};

// Upgrade-Datenbank mit Rarities
const UPGRADES = [
    // COMMON (Grün) - Schwache Upgrades
    {
        id: 'speed_boost_weak',
        name: 'Leichter Speed',
        description: '+3% Bewegungsgeschwindigkeit',
        icon: '⚡',
        rarity: RARITY.COMMON,
        bonusPerStack: 3,
        getBonusText: (stacks) => `+${3 * stacks}% Geschwindigkeit`,
        apply: (tier) => {
            tier.baseSpeed *= 1.03;
            tier.speed *= 1.03;
            tier.targetSpeed *= 1.03;
            tier.currentSpeed *= 1.03;
        }
    },
    {
        id: 'longer_body_weak',
        name: 'Längerer Körper',
        description: '+2 Segmente',
        icon: '🐍',
        rarity: RARITY.COMMON,
        bonusPerStack: 2,
        getBonusText: (stacks) => `+${2 * stacks} Segmente`,
        apply: (tier) => {
            for (let i = 0; i < 2; i++) {
                tier.grow();
            }
        }
    },
    {
        id: 'agility_weak',
        name: 'Leichte Agilität',
        description: '+15% Drehgeschwindigkeit',
        icon: '🌀',
        rarity: RARITY.COMMON,
        bonusPerStack: 15,
        getBonusText: (stacks) => `+${15 * stacks}% Drehgeschwindigkeit`,
        apply: (tier) => {
            // Lineare Steigerung statt exponentiell: +15% der Original-Drehgeschwindigkeit
            const originalTurnSpeed = tier.originalTurnSpeed || 0.05;
            tier.turnSpeed += originalTurnSpeed * 0.15;
        }
    },
    {
        id: 'regeneration_weak',
        name: 'Schwache Regeneration',
        description: '+1% Chance auf extra Food',
        icon: '💚',
        rarity: RARITY.COMMON,
        bonusPerStack: 1,
        getBonusText: (stacks) => `+${1 * stacks}% Extra Food Chance`,
        apply: (simulator) => {
            simulator.extraFoodChance += 1;
        }
    },
    
    // UNCOMMON (Blau) - Mittlere Upgrades
    {
        id: 'speed_boost_medium',
        name: 'Geschwindigkeits-Boost',
        description: '+5% Bewegungsgeschwindigkeit',
        icon: '⚡',
        rarity: RARITY.UNCOMMON,
        bonusPerStack: 5,
        getBonusText: (stacks) => `+${5 * stacks}% Geschwindigkeit`,
        apply: (tier) => {
            tier.baseSpeed *= 1.05;
            tier.speed *= 1.05;
            tier.targetSpeed *= 1.05;
            tier.currentSpeed *= 1.05;
        }
    },
    {
        id: 'longer_body_medium',
        name: 'Längerer Körper',
        description: '+3 Segmente',
        icon: '🐍',
        rarity: RARITY.UNCOMMON,
        bonusPerStack: 3,
        getBonusText: (stacks) => `+${3 * stacks} Segmente`,
        apply: (tier) => {
            for (let i = 0; i < 3; i++) {
                tier.grow();
            }
        }
    },
    {
        id: 'agility_medium',
        name: 'Agilität',
        description: '+30% Drehgeschwindigkeit',
        icon: '🌀',
        rarity: RARITY.UNCOMMON,
        bonusPerStack: 30,
        getBonusText: (stacks) => `+${30 * stacks}% Drehgeschwindigkeit`,
        apply: (tier) => {
            // Lineare Steigerung statt exponentiell: +30% der Original-Drehgeschwindigkeit
            const originalTurnSpeed = tier.originalTurnSpeed || 0.05;
            tier.turnSpeed += originalTurnSpeed * 0.3;
        }
    },
    {
        id: 'regeneration_medium',
        name: 'Regeneration',
        description: '+2% Chance auf extra Food',
        icon: '💚',
        rarity: RARITY.UNCOMMON,
        bonusPerStack: 2,
        getBonusText: (stacks) => `+${2 * stacks}% Extra Food Chance`,
        apply: (simulator) => {
            simulator.extraFoodChance += 2;
        }
    },
    {
        id: 'power_legs_medium',
        name: 'Kraftvolle Beine',
        description: '+4% Geschwindigkeit, +2 Segmente',
        icon: '💪',
        rarity: RARITY.UNCOMMON,
        bonusPerStack: 4,
        getBonusText: (stacks) => `+${4 * stacks}% Geschwindigkeit, +${2 * stacks} Segmente`,
        apply: (tier) => {
            tier.baseSpeed *= 1.04;
            tier.speed *= 1.04;
            tier.targetSpeed *= 1.04;
            tier.currentSpeed *= 1.04;
            for (let i = 0; i < 2; i++) {
                tier.grow();
            }
        }
    },
    
    // RARE (Lila) - Starke Upgrades (alle Speed-Boosts mindestens hier)
    {
        id: 'speed_boost_strong',
        name: 'Starker Speed-Boost',
        description: '+8% Bewegungsgeschwindigkeit',
        icon: '⚡',
        rarity: RARITY.RARE,
        bonusPerStack: 8,
        getBonusText: (stacks) => `+${8 * stacks}% Geschwindigkeit`,
        apply: (tier) => {
            tier.baseSpeed *= 1.08;
            tier.speed *= 1.08;
            tier.targetSpeed *= 1.08;
            tier.currentSpeed *= 1.08;
        }
    },
    {
        id: 'longer_body_strong',
        name: 'Sehr langer Körper',
        description: '+5 Segmente',
        icon: '🐍',
        rarity: RARITY.RARE,
        bonusPerStack: 5,
        getBonusText: (stacks) => `+${5 * stacks} Segmente`,
        apply: (tier) => {
            for (let i = 0; i < 5; i++) {
                tier.grow();
            }
        }
    },
    {
        id: 'agility_strong',
        name: 'Extreme Agilität',
        description: '+50% Drehgeschwindigkeit',
        icon: '🌀',
        rarity: RARITY.RARE,
        bonusPerStack: 50,
        getBonusText: (stacks) => `+${50 * stacks}% Drehgeschwindigkeit`,
        apply: (tier) => {
            // Lineare Steigerung statt exponentiell: +50% der Original-Drehgeschwindigkeit
            const originalTurnSpeed = tier.originalTurnSpeed || 0.05;
            tier.turnSpeed += originalTurnSpeed * 0.5;
        }
    },
    {
        id: 'regeneration_strong',
        name: 'Starke Regeneration',
        description: '+4% Chance auf extra Food',
        icon: '💚',
        rarity: RARITY.RARE,
        bonusPerStack: 4,
        getBonusText: (stacks) => `+${4 * stacks}% Extra Food Chance`,
        apply: (simulator) => {
            simulator.extraFoodChance += 4;
        }
    },
    {
        id: 'power_legs_strong',
        name: 'Mächtige Beine',
        description: '+6% Geschwindigkeit, +4 Segmente',
        icon: '💪',
        rarity: RARITY.RARE,
        bonusPerStack: 6,
        getBonusText: (stacks) => `+${6 * stacks}% Geschwindigkeit, +${4 * stacks} Segmente`,
        apply: (tier) => {
            tier.baseSpeed *= 1.06;
            tier.speed *= 1.06;
            tier.targetSpeed *= 1.06;
            tier.currentSpeed *= 1.06;
            for (let i = 0; i < 4; i++) {
                tier.grow();
            }
        }
    },
    
    // EPIC (Gold) - Sehr starke Upgrades
    {
        id: 'speed_boost_epic',
        name: 'Epischer Speed-Boost',
        description: '+12% Bewegungsgeschwindigkeit',
        icon: '⚡',
        rarity: RARITY.EPIC,
        bonusPerStack: 12,
        getBonusText: (stacks) => `+${12 * stacks}% Geschwindigkeit`,
        apply: (tier) => {
            tier.baseSpeed *= 1.12;
            tier.speed *= 1.12;
            tier.targetSpeed *= 1.12;
            tier.currentSpeed *= 1.12;
        }
    },
    {
        id: 'longer_body_epic',
        name: 'Riesiger Körper',
        description: '+8 Segmente',
        icon: '🐍',
        rarity: RARITY.EPIC,
        bonusPerStack: 8,
        getBonusText: (stacks) => `+${8 * stacks} Segmente`,
        apply: (tier) => {
            for (let i = 0; i < 8; i++) {
                tier.grow();
            }
        }
    },
    {
        id: 'agility_epic',
        name: 'Perfekte Agilität',
        description: '+75% Drehgeschwindigkeit',
        icon: '🌀',
        rarity: RARITY.EPIC,
        bonusPerStack: 75,
        getBonusText: (stacks) => `+${75 * stacks}% Drehgeschwindigkeit`,
        apply: (tier) => {
            // Lineare Steigerung statt exponentiell: +75% der Original-Drehgeschwindigkeit
            const originalTurnSpeed = tier.originalTurnSpeed || 0.05;
            tier.turnSpeed += originalTurnSpeed * 0.75;
        }
    },
    {
        id: 'regeneration_epic',
        name: 'Perfekte Regeneration',
        description: '+6% Chance auf extra Food',
        icon: '💚',
        rarity: RARITY.EPIC,
        bonusPerStack: 6,
        getBonusText: (stacks) => `+${6 * stacks}% Extra Food Chance`,
        apply: (simulator) => {
            simulator.extraFoodChance += 6;
        }
    },
    {
        id: 'power_legs_epic',
        name: 'Legendäre Beine',
        description: '+10% Geschwindigkeit, +6 Segmente',
        icon: '💪',
        rarity: RARITY.EPIC,
        bonusPerStack: 10,
        getBonusText: (stacks) => `+${10 * stacks}% Geschwindigkeit, +${6 * stacks} Segmente`,
        apply: (tier) => {
            tier.baseSpeed *= 1.1;
            tier.speed *= 1.1;
            tier.targetSpeed *= 1.1;
            tier.currentSpeed *= 1.1;
            for (let i = 0; i < 6; i++) {
                tier.grow();
            }
        }
    },
    {
        id: 'ultimate_boost',
        name: 'Ultimativer Boost',
        description: '+8% Geschwindigkeit, +30% Drehgeschwindigkeit, +3 Segmente',
        icon: '🌟',
        rarity: RARITY.EPIC,
        bonusPerStack: 8,
        getBonusText: (stacks) => `+${8 * stacks}% Geschwindigkeit, +${30 * stacks}% Drehgeschwindigkeit, +${3 * stacks} Segmente`,
        apply: (tier) => {
            tier.baseSpeed *= 1.08;
            tier.speed *= 1.08;
            tier.targetSpeed *= 1.08;
            tier.currentSpeed *= 1.08;
            // Lineare Steigerung der Drehgeschwindigkeit statt exponentiell
            const originalTurnSpeed = tier.originalTurnSpeed || 0.05;
            tier.turnSpeed += originalTurnSpeed * 0.3;
            for (let i = 0; i < 3; i++) {
                tier.grow();
            }
        }
    },
    
    // RARE (Lila) - Stamina-Upgrades
    {
        id: 'stamina_boost_rare',
        name: 'Erhöhte Ausdauer',
        description: '+2 Max Stamina',
        icon: '💙',
        rarity: RARITY.RARE,
        bonusPerStack: 2,
        getBonusText: (stacks) => `+${2 * stacks} Max Stamina`,
        apply: (tier) => {
            tier.maxStamina += 2;
            tier.currentStamina = Math.min(tier.currentStamina + 2, tier.maxStamina);
        }
    },
    
    // EPIC (Gold) - Stamina-Upgrades
    {
        id: 'stamina_boost_epic',
        name: 'Maximale Ausdauer',
        description: '+2 Max Stamina',
        icon: '💙',
        rarity: RARITY.EPIC,
        bonusPerStack: 2,
        getBonusText: (stacks) => `+${2 * stacks} Max Stamina`,
        apply: (tier) => {
            tier.maxStamina += 2;
            tier.currentStamina = Math.min(tier.currentStamina + 2, tier.maxStamina);
        }
    }
];

// Mutations-Datenbank (Körperteile-Upgrades, kosten Segmente)
const MUTATIONS = [
    // COMMON (Grün) - Günstige Mutationen
    {
        id: 'hungry_leech_weak',
        name: 'Hungry Leech',
        description: 'Körper wächst beim Essen (max 50% pro Stack)',
        icon: '🍽️',
        rarity: RARITY.COMMON,
        cost: 2, // Kostet 2 Segmente
        bonusPerStack: 50, // Max 50% Körpergröße pro Stack (erhöht von 20%)
        getBonusText: (stacks) => `+${50 * stacks}% Körpergröße beim Essen (max ${50 * stacks}%)`,
        apply: (simulator) => {
            // Wird beim Essen angewendet
        }
    },
    {
        id: 'hammer_head_weak',
        name: 'Hammer Head',
        description: 'Kopf wird 30% breiter',
        icon: '🔨',
        rarity: RARITY.COMMON,
        cost: 1, // Kostet 1 Segment
        bonusPerStack: 30, // 30% breiterer Kopf pro Stack (erhöht von 15%)
        getBonusText: (stacks) => `+${30 * stacks}% Kopfbreite`,
        apply: (tier) => {
            // Wird beim Zeichnen angewendet
        }
    },
    
    // UNCOMMON (Blau) - Mittlere Mutationen
    {
        id: 'magnetic_skin_medium',
        name: 'Magnetic Skin',
        description: 'Zieht Tokens an (Reichweite: 80px)',
        icon: '🧲',
        rarity: RARITY.UNCOMMON,
        cost: 3, // Kostet 3 Segmente
        bonusPerStack: 80, // 80px Reichweite pro Stack (erhöht von 40px)
        getBonusText: (stacks) => `${80 * stacks}px Magnet-Reichweite`,
        apply: (simulator) => {
            // Wird in der Update-Logik angewendet
        }
    },
    {
        id: 'hungry_leech_medium',
        name: 'Großer Hungry Leech',
        description: 'Körper wächst beim Essen (max 100% pro Stack)',
        icon: '🍽️',
        rarity: RARITY.UNCOMMON,
        cost: 4, // Kostet 4 Segmente
        bonusPerStack: 100, // Max 100% Körpergröße pro Stack (erhöht von 35%)
        getBonusText: (stacks) => `+${100 * stacks}% Körpergröße beim Essen (max ${100 * stacks}%)`,
        apply: (simulator) => {
            // Wird beim Essen angewendet
        }
    },
    
    // RARE (Lila) - Starke Mutationen
    {
        id: 'hammer_head_strong',
        name: 'Massiver Hammer Head',
        description: 'Kopf wird 60% breiter',
        icon: '🔨',
        rarity: RARITY.RARE,
        cost: 5, // Kostet 5 Segmente
        bonusPerStack: 60, // 60% breiterer Kopf pro Stack (erhöht von 30%)
        getBonusText: (stacks) => `+${60 * stacks}% Kopfbreite`,
        apply: (tier) => {
            // Wird beim Zeichnen angewendet
        }
    },
    {
        id: 'magnetic_skin_strong',
        name: 'Starkes Magnetic Skin',
        description: 'Zieht Tokens an (Reichweite: 150px)',
        icon: '🧲',
        rarity: RARITY.RARE,
        cost: 6, // Kostet 6 Segmente
        bonusPerStack: 150, // 150px Reichweite pro Stack (erhöht von 80px)
        getBonusText: (stacks) => `${150 * stacks}px Magnet-Reichweite`,
        apply: (simulator) => {
            // Wird in der Update-Logik angewendet
        }
    },
    {
        id: 'hungry_leech_strong',
        name: 'Riesiger Hungry Leech',
        description: 'Körper wächst beim Essen (max 150% pro Stack)',
        icon: '🍽️',
        rarity: RARITY.RARE,
        cost: 7, // Kostet 7 Segmente
        bonusPerStack: 150, // Max 150% Körpergröße pro Stack (erhöht von 50%)
        getBonusText: (stacks) => `+${150 * stacks}% Körpergröße beim Essen (max ${150 * stacks}%)`,
        apply: (simulator) => {
            // Wird beim Essen angewendet
        }
    },
    
    // EPIC (Gold) - Sehr starke Mutationen
    {
        id: 'magnetic_skin_epic',
        name: 'Ultimatives Magnetic Skin',
        description: 'Zieht Tokens an (Reichweite: 250px)',
        icon: '🧲',
        rarity: RARITY.EPIC,
        cost: 10, // Kostet 10 Segmente
        bonusPerStack: 250, // 250px Reichweite pro Stack (erhöht von 120px)
        getBonusText: (stacks) => `${250 * stacks}px Magnet-Reichweite`,
        apply: (simulator) => {
            // Wird in der Update-Logik angewendet
        }
    },
    {
        id: 'hungry_leech_epic',
        name: 'Gigantischer Hungry Leech',
        description: 'Körper wächst beim Essen (max 200% pro Stack)',
        icon: '🍽️',
        rarity: RARITY.EPIC,
        cost: 12, // Kostet 12 Segmente
        bonusPerStack: 200, // Max 200% Körpergröße pro Stack (erhöht von 100%)
        getBonusText: (stacks) => `+${200 * stacks}% Körpergröße beim Essen (max ${200 * stacks}%)`,
        apply: (simulator) => {
            // Wird beim Essen angewendet
        }
    }
];

// Evolution-Datenbank (permanente Upgrades für Account)
const EVOLUTIONS = [
    {
        id: 'shot',
        name: 'Schuss',
        description: 'Mit Rechtsklick einen Schuss abgeben. Pro Level -1 Stamina-Kosten (min 1).',
        icon: '💥',
        cost: 100, // Gold-Kosten
        rarity: RARITY.UNCOMMON
    },
    {
        id: 'shockwave',
        name: 'Shockwave',
        description: 'Mit Rechtsklick eine Schockwelle abgeben (kostet 5 Stamina). Pro Level +30px Radius.',
        icon: '🌊',
        cost: 150, // Gold-Kosten
        rarity: RARITY.RARE
    }
];

// Projektil-Klasse für Schuss
class Projectile {
    constructor(x, y, angle, speed = 8) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = speed;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = 3;
        this.lifetime = 120; // 2 Sekunden bei 60 FPS
        this.maxLifetime = 120;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.lifetime--;
        
        // Keine Weltgrenzen mehr - Projektil verschwindet nur nach Lifetime
    }
    
    draw() {
        if (!ctx) return;
        const alpha = this.lifetime / this.maxLifetime;
        ctx.fillStyle = `rgba(255, 200, 0, ${alpha})`;
        drawPixelCircle(this.x, this.y, this.size, `rgba(255, 200, 0, ${alpha})`);
        
        // Glow-Effekt
        ctx.save();
        ctx.globalAlpha = alpha * 0.3;
        ctx.fillStyle = '#ffaa00';
        drawPixelCircle(this.x, this.y, this.size * 2, '#ffaa00');
        ctx.globalAlpha = 1.0;
        ctx.restore();
    }
    
    checkCollision(targetX, targetY, radius) {
        const dx = this.x - targetX;
        const dy = this.y - targetY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.size + radius;
    }
}

// Partikel-Klasse für visuelle Effekte
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1.0;
        this.decay = 0.02;
        this.size = 2 + Math.random() * 2;
        this.color = color;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;
        this.life -= this.decay;
    }
    
    draw() {
        if (this.life > 0) {
            ctx.globalAlpha = this.life;
            drawPixelCircle(this.x, this.y, this.size, this.color);
            ctx.globalAlpha = 1.0;
        }
    }
    
    isDead() {
        return this.life <= 0;
    }
}

// Futter-Klasse
class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.pulsePhase = 0;
        this.color = '#ff4444';
    }
    
    update() {
        this.pulsePhase += 0.1;
    }
    
    draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 1;
        const currentSize = this.size * pulse;
        
        // Pixel-Art Futter
        drawPixelCircle(this.x, this.y, currentSize, this.color);
        drawPixelCircle(this.x, this.y, currentSize * 0.6, '#ff8888');
        drawPixelCircle(this.x, this.y, currentSize * 0.3, '#ffffff');
    }
    
    checkCollision(snakeHeadX, snakeHeadY, collisionRadius = 8) {
        const dx = this.x - snakeHeadX;
        const dy = this.y - snakeHeadY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < collisionRadius;
    }
}

// Stamina-Token-Klasse
class StaminaToken {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 2.5;
        this.pulsePhase = 0;
        this.color = '#00ffff'; // Cyan
    }
    
    update() {
        this.pulsePhase += 0.15;
    }
    
    draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.4 + 1;
        const currentSize = this.size * pulse;
        
        // Pixel-Art Stamina-Token (cyan/blau)
        drawPixelCircle(this.x, this.y, currentSize, this.color);
        drawPixelCircle(this.x, this.y, currentSize * 0.7, '#88ffff');
        drawPixelCircle(this.x, this.y, currentSize * 0.4, '#ffffff');
    }
    
    checkCollision(snakeHeadX, snakeHeadY, collisionRadius = 8) {
        const dx = this.x - snakeHeadX;
        const dy = this.y - snakeHeadY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < collisionRadius;
    }
}

// Rain World Tier-Klasse mit prozeduraler Animation (jetzt Schlange)
class RainWorldTier {
    constructor(x, y) {
        this.segments = [];
        this.numSegments = 10;
        this.baseNumSegments = 10; // Basis-Länge
        this.segmentDistance = 6;
        this.headX = x;
        this.headY = y;
        // Startposition speichern (für Bewegungsradius-Begrenzung)
        this.anchorX = x;
        this.anchorY = y;
        this.targetAngle = Math.random() * Math.PI * 2;
        this.angle = this.targetAngle;
        this.baseSpeed = 0.8; // Basis-Geschwindigkeit (wird nicht verändert)
        this.originalBaseSpeed = 0.8; // Original-Basis für Reset
        this.speed = 0.8;
        this.currentSpeed = 0.8; // Aktuelle Geschwindigkeit (für Beschleunigung)
        this.targetSpeed = 0.8; // Zielgeschwindigkeit
        this.speedMultiplier = 1.0; // Geschwindigkeits-Multiplikator
        // Bewegungsradius (wird durch Speed-Upgrades reduziert)
        this.baseMovementRadius = 2000; // Basis-Radius (sehr groß, praktisch unbegrenzt)
        this.maxMovementRadius = this.baseMovementRadius;
        this.angularVelocity = 0; // Winkelgeschwindigkeit für Trägheit
        this.turnSpeed = 0.05;
        this.originalTurnSpeed = 0.05; // Original für Reset
        this.acceleration = 0.15; // Beschleunigungsrate
        
        // Mausfolge-Target
        this.targetX = null;
        this.targetY = null;
        this.hasTarget = false;
        
        // Prozedurale Bewegungsvariablen
        this.wavePhase = 0;
        this.waveSpeed = 0.12;
        this.waveAmplitude = 2; // Reduziert für stabilere Bewegung
        this.bodyWave = 0;
        
        // Stamina-System für Spieler
        this.maxStamina = 5; // Maximale Stamina
        this.currentStamina = 5; // Aktuelle Stamina
        this.staminaRegenTimer = 0; // Timer für Stamina-Regeneration
        this.staminaRegenInterval = 300; // 5 Sekunden bei 60 FPS (1 Punkt)
        
        // Speed-Boost durch Stamina-Verbrauch
        this.staminaSpeedBoostActive = false;
        this.staminaSpeedBoostDuration = 0; // In Frames
        this.staminaSpeedBoostMultiplier = 1.0; // 30% Boost = 1.3
        this.staminaSpeedBoostAnimation = null; // { duration: number, phase: number }
        
        // Kopf-Animationen
        this.eyeAngle = 0; // Augen-Blickrichtung (Winkel)
        this.mouthOpen = 0; // Mundöffnung (0-1)
        this.justAte = false; // Flag für Ess-Animation
        this.eatingAnimationTimer = 0; // Timer für Ess-Animation
        
        // Token-Animation durch den Körper
        this.animatingTokens = []; // Array von Token, die durch den Körper wandern: { type: 'stamina'|'food', progress: 0-1, x, y, size, digestPhase: 0-1 }
        
        // Segment-Initialisierung
        this.initializeSegments(x, y);
        
        // Farben im Rain World Stil
        this.colors = {
            body: '#4a4a4a',
            bodyDark: '#2a2a2a',
            bodyLight: '#6a6a6a',
            leg: '#5a5a5a', // Hellere Farbe für Beine
            legDark: '#3a3a3a', // Dunklere Bein-Farbe für Kontrast
            eye: '#ffdd00', // Gelbes Auge
            eyeGlow: '#ffaa00', // Orange-gelber Glanz
            pupil: '#000000' // Schwarze Pupille
        };
    }
    
    setTarget(x, y) {
        this.targetX = x;
        this.targetY = y;
        this.hasTarget = true;
    }
    
    clearTarget() {
        this.targetX = null;
        this.targetY = null;
        this.hasTarget = false;
    }
    
    initializeSegments(x, y) {
        this.segments = [];
        for (let i = 0; i < this.numSegments; i++) {
            const segX = x - Math.cos(this.angle) * i * this.segmentDistance;
            const segY = y - Math.sin(this.angle) * i * this.segmentDistance;
            this.segments.push(new Segment(segX, segY));
        }
    }
    
    grow() {
        // Füge ein neues Segment hinzu
        this.numSegments++;
        const lastSeg = this.segments[this.segments.length - 1];
        const secondLastSeg = this.segments[this.segments.length - 2];
        
        // Berechne Position für neues Segment
        let angle = this.angle;
        if (secondLastSeg) {
            const dx = lastSeg.x - secondLastSeg.x;
            const dy = lastSeg.y - secondLastSeg.y;
            angle = Math.atan2(dy, dx);
        }
        
        const newX = lastSeg.x - Math.cos(angle) * this.segmentDistance;
        const newY = lastSeg.y - Math.sin(angle) * this.segmentDistance;
        this.segments.push(new Segment(newX, newY));
    }
    
    shrink() {
        // Entferne ein Segment
        if (this.numSegments > 0 && this.segments.length > 0) {
            this.numSegments--;
            this.segments.pop(); // Entferne letztes Segment
        }
    }
    
    getHeadPosition() {
        return { x: this.headX, y: this.headY };
    }
    
    checkCollisionWithCreature(otherHeadX, otherHeadY, collisionRadius = 10) {
        const dx = this.headX - otherHeadX;
        const dy = this.headY - otherHeadY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < collisionRadius;
    }
    
    increaseSpeed() {
        // Erhöhe Geschwindigkeit um 5% pro Futter
        this.speedMultiplier += 0.05;
        this.speed = this.baseSpeed * this.speedMultiplier;
        this.targetSpeed = this.speed; // Aktualisiere auch targetSpeed
        
        // Maximal-Geschwindigkeit begrenzen (z.B. 3x der Basis-Geschwindigkeit)
        const maxSpeed = this.baseSpeed * 3.0;
        if (this.speed > maxSpeed) {
            this.speed = maxSpeed;
            this.targetSpeed = maxSpeed;
            this.speedMultiplier = 3.0;
        }
    }
    
    useStaminaForSpeedBoost() {
        // Verbrauche alle Stamina-Punkte für Speed-Boost
        // Prüfe ob bereits ein Boost aktiv ist (Animation oder aktiv)
        if (this.currentStamina > 0 && !this.staminaSpeedBoostAnimation && !this.staminaSpeedBoostActive) {
            const staminaUsed = this.currentStamina;
            this.currentStamina = 0;
            
            // Starte Sprint-Animation (vor dem Boost)
            this.staminaSpeedBoostAnimation = {
                duration: 20, // 0.33 Sekunden Animation
                phase: 0
            };
            
            // Pro Stamina-Punkt: 0.5 Sekunden Speed-Boost (30 Frames bei 60 FPS)
            const boostDuration = staminaUsed * 30; // 0.5 Sekunden pro Punkt
            
            // Aktiviere Speed-Boost nach Animation
            this.staminaSpeedBoostDuration = boostDuration;
            this.staminaSpeedBoostMultiplier = 1.3; // 30% Boost
            
            // Log (wenn Simulator verfügbar)
            if (window.simulator) {
                window.simulator.log(`Sprint aktiviert - ${staminaUsed} Stamina verbraucht, Boost: ${(boostDuration / 60).toFixed(1)}s`, 'success');
            }
        }
    }
    
    update() {
        // Stamina-Regeneration entfernt - nur noch durch Tokens sammeln
        
        // Sprint-Animation aktualisieren
        if (this.staminaSpeedBoostAnimation) {
            this.staminaSpeedBoostAnimation.duration--;
            this.staminaSpeedBoostAnimation.phase++;
            if (this.staminaSpeedBoostAnimation.duration <= 0) {
                // Animation beendet - aktiviere Speed-Boost
                this.staminaSpeedBoostAnimation = null;
                this.staminaSpeedBoostActive = true;
            }
        }
        
        // Speed-Boost durch Stamina aktualisieren
        if (this.staminaSpeedBoostActive) {
            this.staminaSpeedBoostDuration--;
            if (this.staminaSpeedBoostDuration <= 0) {
                // Speed-Boost beendet - sicherstellen, dass alles zurückgesetzt wird
                this.staminaSpeedBoostActive = false;
                this.staminaSpeedBoostMultiplier = 1.0;
                this.staminaSpeedBoostDuration = 0; // Sicherstellen, dass Duration auf 0 ist
            }
        }
        
        // Sicherheitscheck: Falls Duration negativ oder 0 ist, aber noch aktiv, zurücksetzen
        if (this.staminaSpeedBoostActive && this.staminaSpeedBoostDuration <= 0) {
            this.staminaSpeedBoostActive = false;
            this.staminaSpeedBoostMultiplier = 1.0;
            this.staminaSpeedBoostDuration = 0;
        }
        
        // Ess-Animation Timer
        if (this.eatingAnimationTimer > 0) {
            this.eatingAnimationTimer--;
            if (this.eatingAnimationTimer === 0) {
                this.justAte = false;
            }
        }
        
        // Token-Animation durch den Körper aktualisieren
        for (let i = this.animatingTokens.length - 1; i >= 0; i--) {
            const token = this.animatingTokens[i];
            
            // Token bewegt sich vom Kopf (0) zur Mitte (0.5)
            if (token.progress < 0.5) {
                token.progress += 0.015; // Bewegt sich langsam durch den Körper
            } else if (token.progress < 0.5 + 0.3) {
                // Verdau-Animation: Token verschwindet langsam (0.5 bis 0.8)
                if (!token.digestStarted) {
                    token.digestStarted = true;
                    if (token.type === 'stamina') {
                        // Stamina hinzufügen, wenn Verdauung beginnt
                        if (window.simulator && window.simulator.tier) {
                            const oldStamina = this.currentStamina;
                            this.currentStamina = Math.min(this.currentStamina + 1, this.maxStamina);
                            if (window.simulator) {
                                window.simulator.log(`Stamina-Token verdaut - Stamina: ${oldStamina} → ${this.currentStamina}`, 'success');
                            }
                        }
                    } else if (token.type === 'food') {
                        // Food-Effekte werden bereits beim Essen angewendet, hier nur Log
                        if (window.simulator) {
                            window.simulator.log('Food verdaut', 'info');
                        }
                    }
                }
                token.progress += 0.008; // Langsamere Bewegung während Verdauung
                token.digestPhase = (token.progress - 0.5) / 0.3; // 0-1 für Verdau-Phase
            } else {
                // Token ist vollständig verdaut - entfernen
                this.animatingTokens.splice(i, 1);
            }
        }
        
        // Geschwindigkeitsabhängige Wellenbewegung
        const speedFactor = Math.min(this.currentSpeed / this.baseSpeed, 2.0);
        this.waveSpeed = 0.12 * speedFactor;
        this.wavePhase += this.waveSpeed;
        
        // Wellenamplitude reduzieren bei sehr langen Schlangen für Stabilität
        const lengthFactor = Math.min(1.0, 20 / this.segments.length);
        const effectiveAmplitude = this.waveAmplitude * lengthFactor;
        this.bodyWave = Math.sin(this.wavePhase) * effectiveAmplitude;
        
        // Wenn ein Target gesetzt ist (Mausfolge), steuere darauf zu
        let shouldMove = true;
        if (this.hasTarget && this.targetX !== null && this.targetY !== null) {
            const dx = this.targetX - this.headX;
            const dy = this.targetY - this.headY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 5) { // Nur steuern wenn nicht zu nah
                // Berechne Winkel zum Target
                this.targetAngle = Math.atan2(dy, dx);
            } else {
                // Target erreicht - stoppe Bewegung
                shouldMove = false;
            }
        } else {
            // Kein Target gesetzt - stoppe Bewegung (keine zufälligen Richtungsänderungen mehr)
            shouldMove = false;
        }
        
        // Trägheit beim Drehen - Winkelgeschwindigkeit
        let angleDiff = this.targetAngle - this.angle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        
        // Winkelgeschwindigkeit basierend auf Winkelunterschied
        // Verwende turnSpeed (wird durch Upgrades modifiziert) mit sanfter Skalierung
        const baseTurnStrength = this.hasTarget ? 0.12 : 0.08;
        // Berechne turnSpeed-Verhältnis einmal
        const turnSpeedRatio = this.turnSpeed / this.originalTurnSpeed;
        // Begrenze auf maximal 3x (300%) für Stabilität
        const cappedRatio = Math.min(turnSpeedRatio, 3.0);
        // Verwende reduzierte Skalierung für sanftere Steigerung (50% der Wirkung)
        const smoothMultiplier = 1.0 + (cappedRatio - 1.0) * 0.5; // Reduzierte Wirkung
        const turnStrength = baseTurnStrength * smoothMultiplier;
        const desiredAngularVelocity = angleDiff * turnStrength;
        
        // Sanfte Änderung der Winkelgeschwindigkeit (Trägheit)
        // Anpassbare Dämpfung basierend auf turnSpeed (höhere Drehgeschwindigkeit = mehr Dämpfung)
        const adaptiveDamping = Math.min(0.98, 0.95 + (turnSpeedRatio - 1.0) * 0.01); // Mehr Dämpfung bei höherer Drehgeschwindigkeit
        const adaptiveLerp = Math.max(0.2, 0.3 - (turnSpeedRatio - 1.0) * 0.05); // Langsamere Interpolation bei höherer Drehgeschwindigkeit
        
        this.angularVelocity += (desiredAngularVelocity - this.angularVelocity) * adaptiveLerp;
        this.angularVelocity *= adaptiveDamping; // Adaptive Dämpfung
        
        // Winkel aktualisieren
        this.angle += this.angularVelocity;
        
        // Geschwindigkeitsanpassung mit Trägheit (mit Stamina-Speed-Boost)
        const speedMultiplier = (this.staminaSpeedBoostActive || this.staminaSpeedBoostAnimation) ? this.staminaSpeedBoostMultiplier : 1.0;
        if (shouldMove) {
            this.targetSpeed = this.speed * speedMultiplier;
        } else {
            // Stoppe Bewegung wenn kein Target oder Target erreicht
            this.targetSpeed = 0;
        }
        this.currentSpeed += (this.targetSpeed - this.currentSpeed) * this.acceleration;
        
        // Kopf-Bewegung mit sanfter prozeduraler Welle und Geschwindigkeitsvariation
        const waveOffset = Math.sin(this.wavePhase) * 1;
        const speedVariation = 1.0 + Math.sin(this.wavePhase * 2) * 0.1; // Leichte Geschwindigkeitsvariation
        const moveSpeed = this.currentSpeed * speedVariation;
        
        this.headX += Math.cos(this.angle) * moveSpeed;
        this.headY += Math.sin(this.angle) * moveSpeed + waveOffset * 0.2;
        
        // Bewegungsradius-Begrenzung basierend auf Speed-Upgrades
        // DEAKTIVIERT: Verursacht unsichtbare Wände - Spieler kann sich frei bewegen
        // if (window.simulator && window.simulator.activeUpgrades) {
        //     // Zähle alle Speed-Upgrades
        //     let speedUpgradeCount = 0;
        //     Object.keys(window.simulator.activeUpgrades).forEach(upgradeId => {
        //         if (upgradeId.includes('speed_boost') || upgradeId.includes('power_legs')) {
        //             speedUpgradeCount += window.simulator.activeUpgrades[upgradeId];
        //         }
        //     });
        //     
        //     // Berechne maximalen Bewegungsradius (kleiner mit mehr Speed-Upgrades)
        //     // Jedes Speed-Upgrade reduziert den Radius um 15%
        //     const radiusReduction = Math.pow(0.85, speedUpgradeCount); // Exponentiell kleiner
        //     this.maxMovementRadius = this.baseMovementRadius * radiusReduction;
        //     
        //     // Prüfe ob Spieler zu weit vom Anker entfernt ist
        //     const dx = this.headX - this.anchorX;
        //     const dy = this.headY - this.anchorY;
        //     const distanceFromAnchor = Math.sqrt(dx * dx + dy * dy);
        //     
        //     if (distanceFromAnchor > this.maxMovementRadius) {
        //         // Ziehe Spieler zurück zum Anker (wie eine unsichtbare Leine)
        //         const pullBackRatio = this.maxMovementRadius / distanceFromAnchor;
        //         this.headX = this.anchorX + dx * pullBackRatio;
        //         this.headY = this.anchorY + dy * pullBackRatio;
        //         
        //         // Ändere Richtung leicht (als ob man gegen eine unsichtbare Wand stößt)
        //         this.targetAngle = Math.atan2(dy, dx) + Math.PI; // In Richtung Anker
        //     }
        // }
        
        // Keine Welt-Grenzen mehr - unendliche prozedurale Welt
        // Kreaturen können sich frei in alle Richtungen bewegen
        
        // Segment-Update mit prozeduraler Physik
        // Kopf direkt setzen mit Geschwindigkeit
        const headVx = Math.cos(this.angle) * this.currentSpeed;
        const headVy = Math.sin(this.angle) * this.currentSpeed;
        this.segments[0].x = this.headX;
        this.segments[0].y = this.headY;
        this.segments[0].vx = headVx * 0.3; // Leichte Geschwindigkeit für Physik
        this.segments[0].vy = headVy * 0.3;
        
        // Dynamische Segment-Distanz basierend auf Geschwindigkeit und Kurven
        const curveFactor = Math.abs(this.angularVelocity);
        const dynamicDistance = this.segmentDistance * (1.0 - curveFactor * 0.3); // Kompression bei Kurven
        
        // Segmente nacheinander aktualisieren (wichtig für Stabilität)
        // Performance-Optimierung: Bei langen Schlangen weniger Updates für hintere Segmente (LOD)
        // Aggressiveres LOD: Beginne früher mit Skip
        const segmentUpdateSkip = this.segments.length > 30 ? Math.floor(this.segments.length / 30) : 1;
        
        for (let i = 1; i < this.segments.length; i++) {
            const prevSeg = this.segments[i - 1];
            const currentSeg = this.segments[i];
            
            // Normalisierte Position im Körper (0 = Kopf, 1 = Schwanz)
            const normalizedPos = i / this.segments.length;
            
            // Performance: Bei langen Schlangen hintere Segmente seltener updaten (aggressiver)
            if (this.segments.length > 30) {
                let shouldSkip = false;
                if (i > this.segments.length * 0.6) {
                    // Ab 60% der Länge: Skip basierend auf Position
                    shouldSkip = (i % segmentUpdateSkip !== 0);
                } else if (this.segments.length > 100 && i > this.segments.length * 0.5) {
                    // Bei sehr langen Schlangen (>100): Ab 50% der Länge skip
                    shouldSkip = (i % 2 !== 0);
                }
                
                if (shouldSkip) {
                    // Überspringe Update für dieses Segment (nur Position anpassen)
                    const dx = prevSeg.x - currentSeg.x;
                    const dy = prevSeg.y - currentSeg.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist > dynamicDistance * 1.5) {
                        // Nur wenn zu weit entfernt, anpassen
                        const ratio = dynamicDistance / dist;
                        currentSeg.x = prevSeg.x - dx * ratio;
                        currentSeg.y = prevSeg.y - dy * ratio;
                    }
                    continue;
                }
            }
            
            // Geschwindigkeitsabhängige Wellenbewegung
            const waveIntensity = Math.min(this.currentSpeed / this.baseSpeed, 1.5);
            
            // Wellenbewegung reduzieren bei langen Schlangen und hinteren Segmenten
            // Verhindert Instabilität bei vielen Segmenten
            const maxWaveAmplitude = Math.min(this.waveAmplitude, 2.0);
            const waveReduction = 1.0 - normalizedPos * 0.5; // Weniger Welle am Schwanz
            const segmentWave = Math.sin(this.wavePhase - i * 0.25) * maxWaveAmplitude * 0.3 * waveIntensity * waveReduction;
            const perpAngle = this.angle + Math.PI / 2;
            
            // Adaptive Dämpfung - mehr Dämpfung bei höherer Geschwindigkeit und hinten
            const baseDamping = 0.92 - (this.currentSpeed / this.baseSpeed) * 0.03;
            const damping = baseDamping + normalizedPos * 0.03; // Mehr Dämpfung hinten
            
            // Update mit dynamischer Distanz, Dämpfung und Segment-Info
            currentSeg.update(prevSeg, dynamicDistance, Math.max(0.85, Math.min(damping, 0.97)), i, this.segments.length);
            
            // Realistischere Wellenbewegung - begrenzt für Stabilität
            if (i > 1 && i < this.segments.length * 0.8) { // Nur mittlere Segmente, nicht ganz hinten
                // Wellenstärke begrenzen um Instabilität zu vermeiden
                const waveStrength = Math.min(normalizedPos * 0.6, 0.5); // Max 0.5 statt 0.8
                const waveX = Math.cos(perpAngle) * segmentWave * waveStrength;
                const waveY = Math.sin(perpAngle) * segmentWave * waveStrength;
                currentSeg.x += waveX * 0.3; // Reduziert von 0.4
                currentSeg.y += waveY * 0.3;
            }
        }
    }
    
    draw(simulator = null) {
        // Stelle sicher, dass Pixel-Art Rendering aktiv ist
        ctx.imageSmoothingEnabled = false;
        
        // Viewport-Culling: Prüfe ob Kreatur überhaupt im sichtbaren Bereich ist
        if (simulator && this.segments.length > 0) {
            const headX = this.segments[0].x;
            const headY = this.segments[0].y;
            const tailX = this.segments[this.segments.length - 1].x;
            const tailY = this.segments[this.segments.length - 1].y;
            // Schätze Radius basierend auf Segment-Anzahl und Position
            const estimatedRadius = Math.max(50, this.segments.length * 3);
            const minX = Math.min(headX, tailX) - estimatedRadius;
            const maxX = Math.max(headX, tailX) + estimatedRadius;
            const minY = Math.min(headY, tailY) - estimatedRadius;
            const maxY = Math.max(headY, tailY) + estimatedRadius;
            
            // Prüfe ob Kreatur-Bounding-Box den Viewport schneidet
            if (!simulator.isRectInViewport(minX, minY, maxX - minX, maxY - minY)) {
                return; // Kreatur ist nicht sichtbar, überspringe Rendering
            }
        }
        
        // Körper als zusammenhängende Form zeichnen
        // Zuerst den Körper-Umriss
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.fillStyle = this.colors.body;
        ctx.lineWidth = 1;
        
        // Körper-Pfad erstellen
        ctx.beginPath();
        const bodyPoints = [];
        
        // Viewport-Bereich für Segment-Culling
        let viewLeft, viewRight, viewTop, viewBottom;
        if (simulator) {
            viewLeft = simulator.cameraX - renderWidth / (2 * simulator.cameraZoom) - 50;
            viewRight = simulator.cameraX + renderWidth / (2 * simulator.cameraZoom) + 50;
            viewTop = simulator.cameraY - renderHeight / (2 * simulator.cameraZoom) - 50;
            viewBottom = simulator.cameraY + renderHeight / (2 * simulator.cameraZoom) + 50;
        }
        
        // Punkte für obere und untere Körperlinie sammeln (nur sichtbare Segmente)
        for (let i = 0; i < this.segments.length; i++) {
            const seg = this.segments[i];
            
            // Culling: Überspringe Segmente außerhalb des Viewports (mit Padding)
            if (simulator && (seg.x < viewLeft || seg.x > viewRight || seg.y < viewTop || seg.y > viewBottom)) {
                // Wenn Segment außerhalb, füge trotzdem einen Punkt hinzu für Kontinuität
                // aber nur wenn benachbarte Segmente sichtbar sind
                if (i > 0 && i < this.segments.length - 1) {
                    const prevSeg = this.segments[i - 1];
                    const nextSeg = this.segments[i + 1];
                    const prevVisible = !simulator || (prevSeg.x >= viewLeft && prevSeg.x <= viewRight && prevSeg.y >= viewTop && prevSeg.y <= viewBottom);
                    const nextVisible = !simulator || (nextSeg.x >= viewLeft && nextSeg.x <= viewRight && nextSeg.y >= viewTop && nextSeg.y <= viewBottom);
                    if (!prevVisible && !nextVisible) {
                        continue; // Überspringe komplett unsichtbare Segmente
                    }
                }
            }
            const progress = i / (this.segments.length - 1);
            
            // Körperbreite: breit am Kopf, spitz am Schwanz (Eidechsen-Stil)
            // Verwendet eine Kurve die am Kopf (progress=0) breit ist und am Schwanz (progress=1) auf 0 läuft
            const curveCompression = 1.0 - Math.abs(this.angularVelocity) * 0.2;
            
            // Basis-Breite am Kopf, wird zum Schwanz hin schmaler
            // Hammer Head Mutation: Kopf wird breiter
            let headWidth = 6;
            if (simulator && simulator.activeMutations) {
                const hammerHeadMutations = Object.keys(simulator.activeMutations).filter(id => id.includes('hammer_head'));
                hammerHeadMutations.forEach(mutationId => {
                    const mutation = MUTATIONS.find(m => m.id === mutationId);
                    if (mutation) {
                        const stacks = simulator.activeMutations[mutationId];
                        headWidth *= (1 + (mutation.bonusPerStack * stacks / 100));
                    }
                });
            }
            // Schwanz-Breite: Breiter bleiben für bessere Performance (weniger sehr kleine Segmente)
            // Erst ab 80% der Länge wird der Schwanz dünner
            const tailStartProgress = 0.8; // Ab 80% der Länge beginnt der Schwanz dünn zu werden
            let tailWidth = 0; // Spitz am Ende
            let widthFactor;
            
            if (progress < tailStartProgress) {
                // Hauptkörper: bleibt breit (weniger dünne Segmente = bessere Performance)
                widthFactor = 1.0; // Keine Abnahme im Hauptkörper
                tailWidth = headWidth * 0.4; // Schwanz bleibt relativ breit
            } else {
                // Schwanz-Ende: wird dünn (nur letzte 20%)
                const tailProgress = (progress - tailStartProgress) / (1 - tailStartProgress); // 0-1 für Schwanz-Bereich
                widthFactor = Math.pow(1 - tailProgress, 2.0); // Schnellere Abnahme im Schwanz
                tailWidth = 0;
            }
            
            let bodyWidth = (headWidth * widthFactor + tailWidth * (1 - widthFactor)) * curveCompression;
            
            // Hungry Leech Mutation: Körper wird größer beim Essen (temporär)
            if (simulator && simulator.activeMutations) {
                const hungryLeechMutations = Object.keys(simulator.activeMutations).filter(id => id.includes('hungry_leech'));
                hungryLeechMutations.forEach(mutationId => {
                    const mutation = MUTATIONS.find(m => m.id === mutationId);
                    if (mutation && simulator.hungryLeechSizeBoost) {
                        const stacks = simulator.activeMutations[mutationId];
                        const maxBoost = mutation.bonusPerStack * stacks / 100; // Max Boost in Prozent
                        bodyWidth *= (1 + simulator.hungryLeechSizeBoost * maxBoost);
                    }
                });
            }
            
            // Winkel zum nächsten Segment berechnen
            let angle = this.angle;
            if (i < this.segments.length - 1) {
                const nextSeg = this.segments[i + 1];
                const dx = nextSeg.x - seg.x;
                const dy = nextSeg.y - seg.y;
                angle = Math.atan2(dy, dx);
            } else if (i > 0) {
                const prevSeg = this.segments[i - 1];
                const dx = seg.x - prevSeg.x;
                const dy = seg.y - prevSeg.y;
                angle = Math.atan2(dy, dx);
            }
            
            const perpAngle = angle + Math.PI / 2;
            
            // Obere und untere Körperpunkte
            const topX = seg.x + Math.cos(perpAngle) * bodyWidth;
            const topY = seg.y + Math.sin(perpAngle) * bodyWidth;
            const bottomX = seg.x - Math.cos(perpAngle) * bodyWidth;
            const bottomY = seg.y - Math.sin(perpAngle) * bodyWidth;
            
            bodyPoints.push({ top: { x: topX, y: topY }, bottom: { x: bottomX, y: bottomY }, seg: seg });
        }
        
        // Körper-Umriss zeichnen (leicht transparent, damit Token sichtbar sind)
        ctx.globalAlpha = 0.85; // Leicht transparent
        ctx.beginPath();
        // Obere Linie
        for (let i = 0; i < bodyPoints.length; i++) {
            const point = bodyPoints[i];
            if (i === 0) {
                ctx.moveTo(Math.floor(point.top.x), Math.floor(point.top.y));
            } else {
                ctx.lineTo(Math.floor(point.top.x), Math.floor(point.top.y));
            }
        }
        // Untere Linie (rückwärts)
        for (let i = bodyPoints.length - 1; i >= 0; i--) {
            const point = bodyPoints[i];
            ctx.lineTo(Math.floor(point.bottom.x), Math.floor(point.bottom.y));
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.globalAlpha = 1.0; // Alpha zurücksetzen
        
        // Damage-Flash-Effekt (roter Überlay wenn getroffen)
        if (simulator && simulator.damageFlash > 0) {
            const flashIntensity = simulator.damageFlash / 20;
            // Zeichne roten Flash über den Körper
            ctx.save();
            ctx.fillStyle = `rgba(255, 0, 0, ${flashIntensity * 0.4})`;
            ctx.fill();
            ctx.restore();
        }
        
        // Beine zeichnen (prozedural animiert - optimiert und mehrgliedrig)
        // Nur Beine für Segmente rendern, die im Viewport sind
        for (let i = 2; i < this.segments.length - 2; i += 2) {
            const seg = this.segments[i];
            
            // Culling: Überspringe Beine außerhalb des Viewports
            if (simulator && (seg.x < viewLeft || seg.x > viewRight || seg.y < viewTop || seg.y > viewBottom)) {
                continue;
            }
            const progress = i / this.segments.length;
            
            // Berechne Körperbreite an dieser Position (wie beim Körper-Zeichnen)
            // Optimiert: Schwanz bleibt breiter für bessere Performance
            const headWidth = 6;
            const tailStartProgress = 0.8;
            let tailWidth = 1;
            let widthFactor;
            
            if (progress < tailStartProgress) {
                widthFactor = 1.0;
                tailWidth = headWidth * 0.4;
            } else {
                const tailProgress = (progress - tailStartProgress) / (1 - tailStartProgress);
                widthFactor = Math.pow(1 - tailProgress, 2.0);
                tailWidth = 1;
            }
            
            const curveCompression = 0.85;
            let bodyWidth = (headWidth * widthFactor + tailWidth * (1 - widthFactor)) * curveCompression;
            
            // Hungry Leech Mutation: Körper wird größer beim Essen (temporär)
            if (simulator && simulator.activeMutations) {
                const hungryLeechMutations = Object.keys(simulator.activeMutations).filter(id => id.includes('hungry_leech'));
                hungryLeechMutations.forEach(mutationId => {
                    const mutation = MUTATIONS.find(m => m.id === mutationId);
                    if (mutation && simulator.hungryLeechSizeBoost) {
                        const stacks = simulator.activeMutations[mutationId];
                        const maxBoost = mutation.bonusPerStack * stacks / 100; // Max Boost in Prozent
                        bodyWidth *= (1 + simulator.hungryLeechSizeBoost * maxBoost);
                    }
                });
            }
            
            // Bein-Größen-Faktor basierend auf Körperbreite (proportional zum Körper)
            // bodyWidth variiert von ~5.1 (vorne) bis ~0.85 (hinten)
            // Normalisiere auf 0.2-1.0 für Bein-Skalierung
            const legSizeFactor = Math.max(0.2, Math.min(1.0, bodyWidth / 5.1));
            
            // Winkel zum nächsten Segment
            let angle = this.angle;
            if (i < this.segments.length - 1) {
                const nextSeg = this.segments[i + 1];
                const dx = nextSeg.x - seg.x;
                const dy = nextSeg.y - seg.y;
                angle = Math.atan2(dy, dx);
            }
            
            const perpAngle = angle + Math.PI / 2;
            
            // Geschwindigkeitsfaktor für realistischere Bewegung
            const speedFactor = Math.min(this.currentSpeed / this.baseSpeed, 2.0);
            const normalizedSpeed = Math.min(speedFactor, 1.5) / 1.5; // 0-1 normalisiert
            
            // Bein-Phase mit besserer Phasenverschiebung (jedes Bein-Paar hat eigene Phase)
            const legPairPhase = this.wavePhase - i * 0.35; // Langsamere Phasenverschiebung für flüssigere Bewegung
            const leftLegPhase = legPairPhase;
            const rightLegPhase = legPairPhase + Math.PI; // Gegenphasig (180° versetzt)
            
            // Realistischere Schrittbewegung
            // Bein hebt sich beim Schritt (0-π) und setzt auf (π-2π)
            const leftStepCycle = Math.sin(leftLegPhase);
            const rightStepCycle = Math.sin(rightLegPhase);
            
            // Bein-Hebung (nur wenn Bein in der Luft ist) - skaliert mit Bein-Größe
            const leftLift = Math.max(0, leftStepCycle) * (2.5 + normalizedSpeed * 3.5) * legSizeFactor;
            const rightLift = Math.max(0, rightStepCycle) * (2.5 + normalizedSpeed * 3.5) * legSizeFactor;
            
            // Bein-Schwung (vor/zurück beim Schritt) - flüssiger, skaliert
            const leftSwing = Math.sin(leftLegPhase * 1.3) * (2.5 + normalizedSpeed * 2.5) * legSizeFactor;
            const rightSwing = Math.sin(rightLegPhase * 1.3) * (2.5 + normalizedSpeed * 2.5) * legSizeFactor;
            
            // Bein-Länge (leicht variabel für natürlichere Bewegung) - skaliert mit Körperbreite
            const baseLegLength = (5.5 + normalizedSpeed * 1.5) * legSizeFactor;
            const leftLegLength = baseLegLength + Math.sin(leftLegPhase * 2) * 0.8 * legSizeFactor;
            const rightLegLength = baseLegLength + Math.sin(rightLegPhase * 2) * 0.8 * legSizeFactor;
            
            // Knie-Position (etwa 55% der Beinlänge)
            const kneeRatio = 0.55;
            
            // Abstand vom Körper (Hip-Position) - skaliert mit Körperbreite
            const hipOffset = 3.5 * legSizeFactor;
            
            // Linkes Bein - Mehrgliedrig (Oberschenkel -> Knie -> Unterschenkel -> Pfote)
            const leftHipX = seg.x + Math.cos(perpAngle) * hipOffset;
            const leftHipY = seg.y + Math.sin(perpAngle) * hipOffset;
            
            // Oberschenkel-Winkel (leicht nach hinten geneigt beim Schritt)
            const leftThighAngle = angle + Math.PI + leftSwing * 0.12;
            const leftKneeX = leftHipX + Math.cos(leftThighAngle) * (leftLegLength * kneeRatio);
            const leftKneeY = leftHipY + Math.sin(leftThighAngle) * (leftLegLength * kneeRatio);
            
            // Unterschenkel-Winkel (Knie beugt sich beim Schritt)
            const leftKneeBend = Math.max(0, leftStepCycle) * 0.35; // Knie beugt sich wenn Bein gehoben
            const leftShinAngle = leftThighAngle - leftKneeBend;
            const leftFootX = leftKneeX + Math.cos(leftShinAngle) * (leftLegLength * (1 - kneeRatio));
            const leftFootY = leftKneeY + Math.sin(leftShinAngle) * (leftLegLength * (1 - kneeRatio)) - leftLift;
            
            // Rechtes Bein - Mehrgliedrig (gegenphasig)
            const rightHipX = seg.x - Math.cos(perpAngle) * hipOffset;
            const rightHipY = seg.y - Math.sin(perpAngle) * hipOffset;
            
            // Oberschenkel-Winkel
            const rightThighAngle = angle + Math.PI - rightSwing * 0.12;
            const rightKneeX = rightHipX + Math.cos(rightThighAngle) * (rightLegLength * kneeRatio);
            const rightKneeY = rightHipY + Math.sin(rightThighAngle) * (rightLegLength * kneeRatio);
            
            // Unterschenkel-Winkel
            const rightKneeBend = Math.max(0, rightStepCycle) * 0.35;
            const rightShinAngle = rightThighAngle + rightKneeBend;
            const rightFootX = rightKneeX + Math.cos(rightShinAngle) * (rightLegLength * (1 - kneeRatio));
            const rightFootY = rightKneeY + Math.sin(rightShinAngle) * (rightLegLength * (1 - kneeRatio)) - rightLift;
            
            // Zeichne Beine mit hellerer Farbe und skalierten Linien für bessere Sichtbarkeit
            ctx.strokeStyle = this.colors.leg; // Hellere Farbe
            ctx.lineWidth = 2.2 * legSizeFactor; // Linien-Dicke skaliert mit Bein-Größe
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            
            // Linkes Bein: Oberschenkel
            ctx.beginPath();
            ctx.moveTo(Math.floor(leftHipX), Math.floor(leftHipY));
            ctx.lineTo(Math.floor(leftKneeX), Math.floor(leftKneeY));
            ctx.stroke();
            
            // Linkes Bein: Unterschenkel
            ctx.beginPath();
            ctx.moveTo(Math.floor(leftKneeX), Math.floor(leftKneeY));
            ctx.lineTo(Math.floor(leftFootX), Math.floor(leftFootY));
            ctx.stroke();
            
            // Knie-Gelenk (linkes Bein) - skaliert
            drawPixelCircle(leftKneeX, leftKneeY, 2 * legSizeFactor, this.colors.leg);
            
            // Flossenartige Pfote (linkes Bein) - skaliert
            // Berechne Winkel der Flosse (in Richtung der Bein-Bewegung)
            const leftFinAngle = leftShinAngle;
            const leftFinLength = 4 * legSizeFactor; // Länge der Flosse
            const leftFinWidth = 2.5 * legSizeFactor; // Breite der Flosse
            
            // Flossenform: länglich-oval mit spitzerer Kante
            ctx.save();
            ctx.translate(Math.floor(leftFootX), Math.floor(leftFootY));
            ctx.rotate(leftFinAngle);
            ctx.fillStyle = this.colors.legDark;
            ctx.strokeStyle = this.colors.legDark;
            ctx.lineWidth = 1;
            ctx.beginPath();
            // Flossenform: länglich mit spitzerer Vorderkante
            ctx.ellipse(0, 0, leftFinLength, leftFinWidth, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            // Spitzere Vorderkante (Flossen-Spitze)
            ctx.beginPath();
            ctx.moveTo(leftFinLength * 0.8, 0);
            ctx.lineTo(leftFinLength, -leftFinWidth * 0.3);
            ctx.lineTo(leftFinLength, leftFinWidth * 0.3);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
            
            // Rechtes Bein: Oberschenkel
            ctx.beginPath();
            ctx.moveTo(Math.floor(rightHipX), Math.floor(rightHipY));
            ctx.lineTo(Math.floor(rightKneeX), Math.floor(rightKneeY));
            ctx.stroke();
            
            // Rechtes Bein: Unterschenkel
            ctx.beginPath();
            ctx.moveTo(Math.floor(rightKneeX), Math.floor(rightKneeY));
            ctx.lineTo(Math.floor(rightFootX), Math.floor(rightFootY));
            ctx.stroke();
            
            // Knie-Gelenk (rechtes Bein) - skaliert
            drawPixelCircle(rightKneeX, rightKneeY, 2 * legSizeFactor, this.colors.leg);
            
            // Flossenartige Pfote (rechtes Bein) - skaliert
            // Berechne Winkel der Flosse (in Richtung der Bein-Bewegung)
            const rightFinAngle = rightShinAngle;
            const rightFinLength = 4 * legSizeFactor; // Länge der Flosse
            const rightFinWidth = 2.5 * legSizeFactor; // Breite der Flosse
            
            // Flossenform: länglich-oval mit spitzerer Kante
            ctx.save();
            ctx.translate(Math.floor(rightFootX), Math.floor(rightFootY));
            ctx.rotate(rightFinAngle);
            ctx.fillStyle = this.colors.legDark;
            ctx.strokeStyle = this.colors.legDark;
            ctx.lineWidth = 1;
            ctx.beginPath();
            // Flossenform: länglich mit spitzerer Vorderkante
            ctx.ellipse(0, 0, rightFinLength, rightFinWidth, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            // Spitzere Vorderkante (Flossen-Spitze)
            ctx.beginPath();
            ctx.moveTo(rightFinLength * 0.8, 0);
            ctx.lineTo(rightFinLength, -rightFinWidth * 0.3);
            ctx.lineTo(rightFinLength, rightFinWidth * 0.3);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        
        // Körper-Details und Textur (nicht am Schwanzende)
        // Nur Details für Segmente rendern, die im Viewport sind
        const tailStart = Math.floor(this.segments.length * 0.85); // Letzte 15% sind Schwanz
        for (let i = 1; i < this.segments.length - 1 && i < tailStart; i++) {
            const seg = this.segments[i];
            
            // Culling: Überspringe Details außerhalb des Viewports
            if (simulator && (seg.x < viewLeft || seg.x > viewRight || seg.y < viewTop || seg.y > viewBottom)) {
                continue;
            }
            const progress = i / this.segments.length;
            
            // Leichte Schattierung
            const r = Math.floor(42 + progress * 15);
            const g = Math.floor(42 + progress * 15);
            const b = Math.floor(42 + progress * 15);
            const highlight = `rgb(${r + 8}, ${g + 8}, ${b + 8})`;
            
            // Kleine Highlights für Tiefe
            if (i % 2 === 0) {
                drawPixelCircle(seg.x - 1, seg.y - 1, 1, highlight);
            }
        }
        
        // Schwanzspitze zeichnen (letztes Segment als Punkt)
        const tailSegment = this.segments[this.segments.length - 1];
        if (tailSegment) {
            drawPixelCircle(tailSegment.x, tailSegment.y, 1, this.colors.bodyDark);
        }
        
        // Kopf mit Augen (Rain World Stil)
        const head = this.segments[0];
        let headSize = 8.8; // 10% größer (8 * 1.1 = 8.8)
        
        // Hammer Head Mutation: Kopf wird breiter
        if (simulator && simulator.activeMutations) {
            const hammerHeadMutations = Object.keys(simulator.activeMutations).filter(id => id.includes('hammer_head'));
            hammerHeadMutations.forEach(mutationId => {
                const mutation = MUTATIONS.find(m => m.id === mutationId);
                if (mutation) {
                    const stacks = simulator.activeMutations[mutationId];
                    headSize *= (1 + (mutation.bonusPerStack * stacks / 100));
                }
            });
        }
        
        // Kopf-Hauptkörper (elliptisch)
        ctx.fillStyle = this.colors.body;
        ctx.beginPath();
        ctx.ellipse(Math.floor(head.x), Math.floor(head.y), headSize, headSize * 0.8, this.angle, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Augen schauen auf nächsten Gegner
        let targetEyeAngle = this.angle; // Standard: schauen nach vorne
        
        if (simulator) {
            // Finde nächsten Feind (nur Jäger, nicht Food)
            let nearestEnemy = null;
            let nearestEnemyDistSquared = Infinity;
            const allEnemies = [...(simulator.hunters || []), ...(simulator.fatHunters || [])];
            
            for (let i = 0; i < allEnemies.length; i++) {
                const enemy = allEnemies[i];
                if (enemy.segments && enemy.segments.length > 0) {
                    const enemyHead = enemy.segments[0];
                    const dx = enemyHead.x - head.x;
                    const dy = enemyHead.y - head.y;
                    const distSquared = dx * dx + dy * dy;
                    if (distSquared < nearestEnemyDistSquared && distSquared < 250000) { // 500 Pixel Radius
                        nearestEnemyDistSquared = distSquared;
                        nearestEnemy = enemyHead;
                    }
                }
            }
            
            // Augen schauen direkt zum Gegner
            if (nearestEnemy) {
                const dx = nearestEnemy.x - head.x;
                const dy = nearestEnemy.y - head.y;
                targetEyeAngle = Math.atan2(dy, dx);
            }
        }
        
        // Schnelle Interpolation der Augenbewegung
        let angleDiff = targetEyeAngle - this.eyeAngle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        this.eyeAngle += angleDiff * 0.6; // Schnellere Interpolation (0.6 statt 0.3)
        
        // Ein großes Auge (prozedural blinkend) - Blink-Frequenz basierend auf Gegner-Nähe
        // Ziel: 1x pro Sekunde (weit weg) bis 3x pro Sekunde (nah) bei 60 FPS
        let blinkFrequency = 0.875; // Standard: ~1x pro Sekunde (weit weg)
        let nearestEnemyDistance = Infinity;
        
        if (simulator) {
            // Finde nächsten Feind für Blink-Frequenz
            const allEnemies = [...(simulator.hunters || []), ...(simulator.fatHunters || [])];
            for (let i = 0; i < allEnemies.length; i++) {
                const enemy = allEnemies[i];
                if (enemy.segments && enemy.segments.length > 0) {
                    const enemyHead = enemy.segments[0];
                    const dx = enemyHead.x - head.x;
                    const dy = enemyHead.y - head.y;
                    const distSquared = dx * dx + dy * dy;
                    if (distSquared < nearestEnemyDistance && distSquared < 250000) { // 500 Pixel Radius
                        nearestEnemyDistance = distSquared;
                    }
                }
            }
            
            // Je näher der Gegner, desto schneller blinzeln: 1x/s (weit) bis 3x/s (nah)
            if (nearestEnemyDistance < 250000) {
                const distance = Math.sqrt(nearestEnemyDistance);
                const maxDistance = 500;
                const proximityFactor = 1 - (distance / maxDistance); // 0-1, 1 = sehr nah
                // 0.875 (1x/s) bis 2.62 (3x/s) basierend auf Nähe
                blinkFrequency = 0.875 + proximityFactor * 1.745; // 0.875 bis 2.62
            }
        }
        
        // Blinzeln: seltener (höhere Schwelle) und frequenzabhängig
        const blinkThreshold = 0.85; // Höhere Schwelle = seltener blinzeln
        const blink = Math.sin(this.wavePhase * blinkFrequency) > blinkThreshold ? 0.5 : 1;
        const eyeSize = 3.5 * blink; // Größeres Auge (3.5 statt 2)
        const headAngle = this.angle;
        
        // Auge-Position: Mitte vorne am Kopf
        const eyeForward = 1.5; // Auge ist vorne am Kopf
        const eyeXBase = 0; // Mitte
        const eyeYBase = -eyeForward; // Vorne
        
        // Blickrichtung: Auge bewegt sich in Richtung des Gegners (max 2.5 Pixel)
        const maxEyeMovement = 2.5;
        const eyeLookAngle = this.eyeAngle - headAngle; // Relativer Blickwinkel zum Kopf
        const eyeMovementX = Math.sin(eyeLookAngle) * maxEyeMovement;
        const eyeMovementY = -Math.cos(eyeLookAngle) * maxEyeMovement;
        
        // Begrenze Augen-Bewegung (damit es im Kopf bleibt)
        const clampedMovementX = Math.max(-maxEyeMovement, Math.min(maxEyeMovement, eyeMovementX));
        const clampedMovementY = Math.max(-maxEyeMovement, Math.min(maxEyeMovement, eyeMovementY));
        
        // Transformiere Augen-Position in Welt-Koordinaten (rotierter Kopf)
        const eyeX = head.x + Math.cos(headAngle) * (eyeXBase + clampedMovementX) - Math.sin(headAngle) * (eyeYBase + clampedMovementY);
        const eyeY = head.y + Math.sin(headAngle) * (eyeXBase + clampedMovementX) + Math.cos(headAngle) * (eyeYBase + clampedMovementY);
        
        // Ein großes gelbes Auge zeichnen
        drawPixelCircle(eyeX, eyeY, eyeSize, this.colors.eye);
        
        // Schlangen-Pupille (vertikaler Schlitz) - rotiert mit dem Kopf
        if (blink > 0.5) {
            ctx.save();
            ctx.translate(eyeX, eyeY);
            ctx.rotate(headAngle); // Pupille rotiert mit dem Kopf, nicht mit Blickrichtung
            
            // Vertikale schlitzförmige Pupille (wie bei Schlangen)
            ctx.fillStyle = this.colors.pupil;
            ctx.beginPath();
            // Schlitzförmige Pupille: schmal horizontal, lang vertikal
            ctx.ellipse(0, 0, eyeSize * 0.3, eyeSize * 0.8, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Glanzpunkt in Blickrichtung (nicht rotiert)
            ctx.restore();
            ctx.fillStyle = this.colors.eyeGlow;
            const glowOffsetX = Math.cos(this.eyeAngle) * eyeSize * 0.3;
            const glowOffsetY = Math.sin(this.eyeAngle) * eyeSize * 0.3;
            ctx.beginPath();
            ctx.arc(eyeX - glowOffsetX, eyeY - glowOffsetY, eyeSize * 0.25, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Ess-Animation: Mund öffnet sich
        if (this.justAte && this.eatingAnimationTimer > 0) {
            const eatProgress = this.eatingAnimationTimer / 20.0; // 20 Frames Animation
            this.mouthOpen = Math.sin(eatProgress * Math.PI) * 0.8; // Öffnet und schließt sich
        } else {
            this.mouthOpen = Math.max(0, this.mouthOpen - 0.1); // Langsam schließen
        }
        
        // Schnauze/Mund (animiert) - weiter vorne und um 90 Grad gedreht
        const snoutX = head.x + Math.cos(headAngle) * 6; // Weiter vorne (6 statt 4)
        const snoutY = head.y + Math.sin(headAngle) * 6; // Weiter vorne
        const baseSnoutSize = 1.5;
        const snoutSize = baseSnoutSize + this.mouthOpen * 3; // Öffnet sich beim Essen
        const snoutRotation = headAngle + Math.PI / 2; // 90 Grad gedreht (Math.PI/2)
        
        // Mund-Öffnung zeichnen
        if (this.mouthOpen > 0.05) {
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.ellipse(snoutX, snoutY, snoutSize, snoutSize * 0.7, snoutRotation, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Normaler Mund (geschlossen)
            drawPixelCircle(snoutX, snoutY, baseSnoutSize, this.colors.bodyDark);
        }
        
        // Token-Animation durch den Körper zeichnen
        for (let i = 0; i < this.animatingTokens.length; i++) {
            const token = this.animatingTokens[i];
            
            // Token-Position entlang des Körpers berechnen (nur bis zur Mitte)
            const effectiveProgress = Math.min(token.progress, 0.5); // Stoppt bei 0.5
            const segmentIndex = Math.floor(effectiveProgress * (this.segments.length - 1));
            const nextIndex = Math.min(segmentIndex + 1, this.segments.length - 1);
            const seg = this.segments[segmentIndex];
            const nextSeg = this.segments[nextIndex];
            
            // Interpoliere zwischen Segmenten
            const localProgress = (effectiveProgress * (this.segments.length - 1)) - segmentIndex;
            const tokenX = seg.x + (nextSeg.x - seg.x) * localProgress;
            const tokenY = seg.y + (nextSeg.y - seg.y) * localProgress;
            
            // Verdau-Animation: Token wird kleiner und transparenter
            let tokenSize = token.size || 2.5;
            let tokenAlpha = 1.0;
            
            if (token.digestPhase !== undefined && token.digestPhase > 0) {
                // Token verschwindet während Verdauung
                tokenSize *= (1 - token.digestPhase); // Wird kleiner
                tokenAlpha = 1 - token.digestPhase; // Wird transparenter
            }
            
            // Token zeichnen (nur wenn noch sichtbar)
            if (tokenAlpha > 0.1 && tokenSize > 0.5) {
                const pulse = Math.sin(Date.now() * 0.01 + i) * 0.2 + 0.8;
                const currentSize = tokenSize * pulse;
                
                ctx.save();
                ctx.globalAlpha = tokenAlpha;
                
                // Unterschiedliche Farben für Stamina-Token (cyan) und Food (rot)
                if (token.type === 'stamina') {
                    drawPixelCircle(tokenX, tokenY, currentSize, '#00ffff');
                    drawPixelCircle(tokenX, tokenY, currentSize * 0.7, '#88ffff');
                    drawPixelCircle(tokenX, tokenY, currentSize * 0.4, '#ffffff');
                } else if (token.type === 'food') {
                    drawPixelCircle(tokenX, tokenY, currentSize, '#ff4444');
                    drawPixelCircle(tokenX, tokenY, currentSize * 0.7, '#ff8888');
                    drawPixelCircle(tokenX, tokenY, currentSize * 0.4, '#ffaaaa');
                }
                
                ctx.globalAlpha = 1.0;
                ctx.restore();
            }
        }
        
        // Stamina-Anzeige: Leuchtende Striche am Rücken
        this.drawStaminaIndicator();
        
        // Sprint-Animation zeichnen (wenn aktiv)
        if (this.staminaSpeedBoostAnimation || this.staminaSpeedBoostActive) {
            this.drawSprintAnimation();
        }
    }
    
    drawSprintAnimation() {
        // Cyan/blauer Glow-Effekt während Sprint
        const head = this.segments[0];
        let intensity = 0.3;
        
        if (this.staminaSpeedBoostAnimation) {
            // Vor-Boost-Animation
            const progress = 1.0 - (this.staminaSpeedBoostAnimation.duration / 20.0);
            const pulse = Math.sin(this.staminaSpeedBoostAnimation.phase * 0.8) * 0.5 + 0.5;
            intensity = 0.2 + progress * 0.4 * pulse;
        } else if (this.staminaSpeedBoostActive) {
            // Während Speed-Boost
            intensity = 0.3 + Math.sin(Date.now() * 0.01) * 0.1;
        }
        
        // Cyan Glow um den Kopf
        ctx.save();
        ctx.globalAlpha = intensity;
        ctx.fillStyle = '#00ffff';
        drawPixelCircle(head.x, head.y, 8, '#00ffff');
        ctx.globalAlpha = 1.0;
        ctx.restore();
        
        // Leuchtende Linien entlang des Körpers
        for (let i = 0; i < Math.min(5, this.segments.length); i++) {
            const seg = this.segments[i];
            const pulse = Math.sin(Date.now() * 0.01 + i * 0.5) * 0.3 + 0.7;
            ctx.strokeStyle = `rgba(0, 255, 255, ${intensity * pulse})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(Math.floor(seg.x), Math.floor(seg.y), 6, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    
    drawStaminaIndicator() {
        // Zeichne Stamina-Striche am Rücken der Kreatur
        // Verteile die Striche entlang des Körpers (nicht am Kopf oder Schwanz)
        const startSegment = Math.floor(this.segments.length * 0.15); // Starte nach 15% des Körpers
        const endSegment = Math.floor(this.segments.length * 0.85); // Ende vor 85% des Körpers
        const segmentRange = Math.max(1, endSegment - startSegment);
        
        // Zeichne für jede Stamina einen Strich
        for (let i = 0; i < this.currentStamina; i++) {
            // Position entlang des Körpers berechnen
            const segmentIndex = startSegment + Math.floor((i / Math.max(1, this.maxStamina - 1)) * segmentRange);
            if (segmentIndex >= 0 && segmentIndex < this.segments.length) {
                const seg = this.segments[segmentIndex];
                const progress = segmentIndex / (this.segments.length - 1);
                
                // Berechne Körperbreite an dieser Position (wie beim Zeichnen des Körpers)
                const curveCompression = 1.0 - Math.abs(this.angularVelocity) * 0.2;
                const headWidth = 5;
                const tailWidth = 0;
                const widthFactor = Math.pow(1 - progress, 1.5);
                const bodyWidth = (headWidth * widthFactor + tailWidth * (1 - widthFactor)) * curveCompression;
                
                // Berechne Winkel zum nächsten Segment (für Ausrichtung)
                let angle = this.angle;
                if (segmentIndex < this.segments.length - 1) {
                    const nextSeg = this.segments[segmentIndex + 1];
                    const dx = nextSeg.x - seg.x;
                    const dy = nextSeg.y - seg.y;
                    angle = Math.atan2(dy, dx);
                } else if (segmentIndex > 0) {
                    const prevSeg = this.segments[segmentIndex - 1];
                    const dx = seg.x - prevSeg.x;
                    const dy = seg.y - prevSeg.y;
                    angle = Math.atan2(dy, dx);
                }
                
                // Perpendikularer Winkel (90 Grad) für Rücken-Position
                const perpAngle = angle + Math.PI / 2;
                
                // Position am Rücken (auf der Körperoberfläche, mittig)
                const offsetDistance = bodyWidth * 0.5; // 50% der Körperbreite (mittig auf dem Rücken)
                const lineX = seg.x + Math.cos(perpAngle) * offsetDistance;
                const lineY = seg.y + Math.sin(perpAngle) * offsetDistance;
                
                // Leuchtender Strich (helles cyan/blau für Stamina)
                const pulse = Math.sin(Date.now() * 0.005 + i * 0.5) * 0.2 + 0.8; // Leichtes Pulsieren
                // Strichlänge passt sich an Körperbreite an - berücksichtigt spitzes Schwanzende
                const lineLength = Math.max(0.5, bodyWidth * 0.5); // 50% der Körperbreite (wird am Schwanz sehr klein)
                const lineWidth = Math.max(1.0, bodyWidth * 0.3); // Dicke passt sich auch an
                
                // Strich zeichnen (senkrecht zum Körper)
                const lineAngle = perpAngle;
                const startX = lineX - Math.cos(lineAngle) * lineLength;
                const startY = lineY - Math.sin(lineAngle) * lineLength;
                const endX = lineX + Math.cos(lineAngle) * lineLength;
                const endY = lineY + Math.sin(lineAngle) * lineLength;
                
                // Helles cyan/blau mit guter Sichtbarkeit
                ctx.strokeStyle = `rgba(0, 255, 255, ${pulse})`; // Vollständig sichtbares Cyan
                ctx.lineWidth = lineWidth;
                ctx.lineCap = 'round'; // Abgerundete Enden
                ctx.beginPath();
                ctx.moveTo(Math.floor(startX), Math.floor(startY));
                ctx.lineTo(Math.floor(endX), Math.floor(endY));
                ctx.stroke();
                
                // Leuchtender Punkt in der Mitte
                ctx.fillStyle = `rgba(0, 255, 255, ${pulse})`;
                drawPixelCircle(lineX, lineY, 1.5, `rgb(0, 255, 255)`);
            }
        }
    }
}

// Jäger-Kreatur (jagt den Spieler)
class HunterCreature {
    constructor(x, y, isElite = false) {
        this.segments = [];
        this.numSegments = 8; // Kürzer als Spieler
        this.segmentDistance = 6;
        this.headX = x;
        this.headY = y;
        this.targetAngle = Math.random() * Math.PI * 2;
        this.angle = this.targetAngle;
        this.baseSpeed = 0.6; // Etwas langsamer als Spieler
        this.speed = 0.6;
        this.currentSpeed = 0.6;
        this.targetSpeed = 0.6;
        this.speedMultiplier = 1.0; // Geschwindigkeits-Multiplikator
        this.angularVelocity = 0;
        this.turnSpeed = 0.08; // Schnellere Drehung
        this.acceleration = 0.2;
        
        // Physik-System für Shockwave (Geschwindigkeits-Vektoren)
        this.vx = 0; // Geschwindigkeit X
        this.vy = 0; // Geschwindigkeit Y
        this.friction = 0.88; // Reibung/Dämpfung (0.88 = stärkere Dämpfung, mehr Masse)
        
        // Aufmerksamkeitsradius-System
        this.attentionRadius = 200; // Radius in Pixeln, in dem der Hunter den Spieler bemerkt
        this.isChasing = false; // Verfolgt der Hunter gerade den Spieler?
        this.patrolAngle = Math.random() * Math.PI * 2; // Winkel für Patrouillen-Bewegung
        this.patrolSpeed = 0.3; // Langsamere Geschwindigkeit beim Patrouillieren
        
        // Prozedurale Bewegungsvariablen
        this.wavePhase = 0;
        this.waveSpeed = 0.15;
        this.waveAmplitude = 2;
        
        // Food-Zähler für Fortpflanzung
        this.foodCount = 0;
        
        // Vermehrungs-Zähler (wie oft hat dieser Jäger sich vermehrt)
        this.reproductionCount = 0;
        
        // Fortpflanzungs-Animation
        this.reproductionAnimation = null; // { duration: number, phase: number }
        
        // Speed-Boost (bei jedem Essen/Biss, 10 Sekunden, 30% Boost)
        this.speedBoostActive = false;
        this.speedBoostDuration = 0;
        this.speedBoostAnimation = null; // { duration: number, phase: number }
        this.speedBoostDelay = 0; // Delay vor dem Boost (3 Sekunden)
        this.originalSpeedMultiplier = 1.0; // Für Speed-Boost
        
        // Speed-Debuff nach Kopf-Biss (3 Sekunden, 50% Geschwindigkeit)
        this.speedDebuffActive = false;
        this.speedDebuffDuration = 0; // In Frames
        this.speedDebuffMultiplier = 0.5; // 50% Geschwindigkeit (50% Debuff)
        
        // Individueller Schaden-Cooldown für jeden Jäger
        this.damageCooldown = 0; // Cooldown in Frames (60 FPS = 2 Sekunden = 120 Frames)
        
        // Kletter-Mechanik
        this.isClimbing = false; // Ist der Jäger am Spieler-Körper?
        this.climbingTargetIndex = -1; // Index des Segments, an dem geklettert wird (aktuell festgehalten)
        this.climbingProgress = 0; // Fortschritt zum nächsten Segment (0-1)
        this.climbCooldown = 0; // Cooldown zwischen Kletter-Bewegungen
        this.climbMoveTimer = 0; // Timer für automatisches Vorziehen
        this.climbMoveInterval = 90; // Alle 1.5 Sekunden vorziehen (bei 60 FPS)
        this.climbSegmentCount = 0; // Zähler für gekletterte Segmente (für Stamina-Verbrauch)
        this.climbingAnimationPhase = 0; // Phase für Kletter-Animation (Wackeln/Knabbern)
        
        // Stamina-System für Klettern
        this.maxStamina = 5; // Maximale Stamina
        this.currentStamina = 5; // Aktuelle Stamina
        this.staminaRegenTimer = 0; // Timer für Stamina-Regeneration
        this.staminaRegenInterval = 300; // 5 Sekunden bei 60 FPS (1 Punkt)
        
        // Elite-Status (leuchtend rot, 80% Speed-Boost permanent)
        this.isElite = isElite;
        
        // HP-System: Normale Hunter haben 1 Leben, Elite Hunter haben 2 Leben
        this.maxHP = this.isElite ? 2 : 1;
        this.currentHP = this.maxHP;
        
        // Wenn Elite, permanenten Speed-Boost anwenden
        if (this.isElite) {
            this.speedMultiplier = 1.8; // 80% Boost
            this.baseSpeed = 0.6 * this.speedMultiplier;
            this.speed = this.baseSpeed;
            this.targetSpeed = this.baseSpeed;
            this.currentSpeed = this.baseSpeed;
            
            // Timer für gratis Essen (30 Sekunden = 1800 Frames bei 60 FPS)
            this.freeFoodTimer = 0;
            this.freeFoodInterval = 1800; // 30 Sekunden
        }
        
        // Segment-Initialisierung
        this.initializeSegments(x, y);
        
        // Farben - dunkelblau für normale Hunter, lila für Elite
        this.updateColors();
    }
    
    updateColors() {
        // Biolumineszenz-Stil: Leuchtende Neon-Farben für Tiefsee
        if (this.isElite) {
            // Elite Hunter: Leuchtendes Magenta/Cyan
        this.colors = {
                body: '#ff00ff', // Leuchtendes Magenta
                bodyDark: '#cc00cc', // Dunkleres Magenta
                bodyLight: '#ff66ff', // Helles Magenta
                eye: '#00ffff', // Cyan
                eyeGlow: '#66ffff', // Helles Cyan
                glow: '#ff00ff' // Glow-Farbe
            };
        } else {
            // Normale Hunter: Leuchtendes Cyan/Blau
            this.colors = {
                body: '#00ffff', // Leuchtendes Cyan
                bodyDark: '#0099cc', // Dunkleres Cyan
                bodyLight: '#66ffff', // Helles Cyan
                eye: '#00ff00', // Leuchtendes Grün
                eyeGlow: '#66ff66', // Helles Grün
                glow: '#00ffff' // Glow-Farbe
            };
        }
    }
    
    initializeSegments(x, y) {
        this.segments = [];
        for (let i = 0; i < this.numSegments; i++) {
            const segX = x - Math.cos(this.angle) * i * this.segmentDistance;
            const segY = y - Math.sin(this.angle) * i * this.segmentDistance;
            this.segments.push(new Segment(segX, segY));
        }
    }
    
    setTarget(targetX, targetY) {
        // Berechne Winkel zum Ziel
        const dx = targetX - this.headX;
        const dy = targetY - this.headY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 5) {
            this.targetAngle = Math.atan2(dy, dx);
        }
    }
    
    update() {
        // Speed-Debuff aktualisieren
        if (this.speedDebuffActive) {
            this.speedDebuffDuration--;
            if (this.speedDebuffDuration <= 0) {
                // Speed-Debuff beendet
                this.speedDebuffActive = false;
                if (window.simulator) {
                    window.simulator.log('Hunter Speed-Debuff beendet', 'info');
                }
            }
        }
        
        // Geschwindigkeitsabhängige Wellenbewegung
        const speedFactor = Math.min(this.currentSpeed / this.baseSpeed, 2.0);
        this.waveSpeed = 0.15 * speedFactor;
        this.wavePhase += this.waveSpeed;
        
        // Trägheit beim Drehen
        let angleDiff = this.targetAngle - this.angle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        
        const desiredAngularVelocity = angleDiff * 0.15;
        this.angularVelocity += (desiredAngularVelocity - this.angularVelocity) * 0.3;
        this.angularVelocity *= 0.95;
        this.angle += this.angularVelocity;
        
        // Geschwindigkeitsanpassung (mit Debuff)
        let effectiveSpeed = this.speed;
        if (this.speedDebuffActive) {
            effectiveSpeed = this.speed * this.speedDebuffMultiplier; // 50% Geschwindigkeit
        }
        this.targetSpeed = effectiveSpeed;
        this.currentSpeed += (this.targetSpeed - this.currentSpeed) * this.acceleration;
        
        // Physik-System: Geschwindigkeits-Vektoren anwenden (für Shockwave)
        if (Math.abs(this.vx) > 0.01 || Math.abs(this.vy) > 0.01) {
            // Wende Geschwindigkeit an
            this.headX += this.vx;
            this.headY += this.vy;
            
            // Dämpfung anwenden (langsam auslaufen)
            this.vx *= this.friction;
            this.vy *= this.friction;
            
            // Wenn Geschwindigkeit sehr klein ist, setze auf 0
            if (Math.abs(this.vx) < 0.01) this.vx = 0;
            if (Math.abs(this.vy) < 0.01) this.vy = 0;
        } else {
            // Normale Bewegung (wenn keine Shockwave-Geschwindigkeit)
        const waveOffset = Math.sin(this.wavePhase) * 1;
        const speedVariation = 1.0 + Math.sin(this.wavePhase * 2) * 0.1;
        const moveSpeed = this.currentSpeed * speedVariation;
        
        this.headX += Math.cos(this.angle) * moveSpeed;
        this.headY += Math.sin(this.angle) * moveSpeed + waveOffset * 0.2;
        }
        
        // Welt ist jetzt unendlich - keine Grenzen mehr
        
        // Segment-Update
        const headVx = Math.cos(this.angle) * this.currentSpeed;
        const headVy = Math.sin(this.angle) * this.currentSpeed;
        this.segments[0].x = this.headX;
        this.segments[0].y = this.headY;
        this.segments[0].vx = headVx * 0.3;
        this.segments[0].vy = headVy * 0.3;
        
        const curveFactor = Math.abs(this.angularVelocity);
        const dynamicDistance = this.segmentDistance * (1.0 - curveFactor * 0.3);
        
        for (let i = 1; i < this.segments.length; i++) {
            const prevSeg = this.segments[i - 1];
            const currentSeg = this.segments[i];
            const normalizedPos = i / this.segments.length;
            
            const waveIntensity = Math.min(this.currentSpeed / this.baseSpeed, 1.5);
            const maxWaveAmplitude = Math.min(this.waveAmplitude, 2.0);
            const waveReduction = 1.0 - normalizedPos * 0.5;
            const segmentWave = Math.sin(this.wavePhase - i * 0.25) * maxWaveAmplitude * 0.3 * waveIntensity * waveReduction;
            const perpAngle = this.angle + Math.PI / 2;
            
            const baseDamping = 0.92 - (this.currentSpeed / this.baseSpeed) * 0.03;
            const damping = baseDamping + normalizedPos * 0.03;
            
            currentSeg.update(prevSeg, dynamicDistance, Math.max(0.85, Math.min(damping, 0.97)), i, this.segments.length);
            
            if (i > 1 && i < this.segments.length * 0.8) {
                const waveStrength = Math.min(normalizedPos * 0.6, 0.5);
                const waveX = Math.cos(perpAngle) * segmentWave * waveStrength;
                const waveY = Math.sin(perpAngle) * segmentWave * waveStrength;
                currentSeg.x += waveX * 0.3;
                currentSeg.y += waveY * 0.3;
            }
        }
    }
    
    drawWithSpeedBoost() {
        // Speed-Boost-Animation (blauer/cyan Effekt)
        const anim = this.speedBoostAnimation;
        const isActive = this.speedBoostActive && !anim;
        
        if (anim) {
            // Vor-Boost-Animation
            const progress = 1.0 - (anim.duration / 30.0);
            const pulse = Math.sin(anim.phase * 0.8) * 0.5 + 0.5;
            
            // Cyan/blauer Glow-Effekt
            const r = 0;
            const g = Math.floor(150 + pulse * 105); // 150-255
            const b = Math.floor(200 + pulse * 55);  // 200-255
            
            // Speichere Originalfarben
            const originalBody = this.colors.body;
            const originalBodyDark = this.colors.bodyDark;
            
            // Temporäre leuchtende Farben
            this.colors.body = `rgb(${r}, ${g}, ${b})`;
            this.colors.bodyDark = `rgb(${r}, ${Math.floor(g * 0.7)}, ${Math.floor(b * 0.7)})`;
            
            ctx.save();
            
            // Shake-Effekt
            const shakeX = (Math.random() - 0.5) * 1.5 * pulse;
            const shakeY = (Math.random() - 0.5) * 1.5 * pulse;
            ctx.translate(shakeX, shakeY);
            
            this.draw();
            ctx.restore();
            
            // Cyan Aura
            const auraRadius = 12 + pulse * 8;
            const gradient = ctx.createRadialGradient(
                this.headX, this.headY, 0,
                this.headX, this.headY, auraRadius
            );
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulse * 0.5})`);
            gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${pulse * 0.3})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.headX, this.headY, auraRadius, 0, Math.PI * 2);
            ctx.fill();
            
            // Wiederherstelle Originalfarben
            this.colors.body = originalBody;
            this.colors.bodyDark = originalBodyDark;
        } else if (isActive) {
            // Während Speed-Boost aktiv
            const pulse = Math.sin(Date.now() * 0.01) * 0.3 + 0.7;
            
            // Cyan/blauer Glow-Effekt (schwächer als Animation)
            const r = 0;
            const g = Math.floor(100 + pulse * 50);
            const b = Math.floor(150 + pulse * 50);
            
            // Speichere Originalfarben
            const originalBody = this.colors.body;
            const originalBodyDark = this.colors.bodyDark;
            
            // Leicht cyan-gefärbte Farben
            this.colors.body = `rgb(${Math.min(255, parseInt(originalBody.slice(4, 7)) + g * 0.2)}, ${Math.min(255, parseInt(originalBody.slice(4, 7)) + g * 0.3)}, ${Math.min(255, parseInt(originalBody.slice(4, 7)) + b * 0.3)})`;
            this.colors.bodyDark = originalBodyDark;
            
            this.draw();
            
            // Leichte Cyan-Aura
            const auraRadius = 8 + pulse * 4;
            const gradient = ctx.createRadialGradient(
                this.headX, this.headY, 0,
                this.headX, this.headY, auraRadius
            );
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulse * 0.3})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.headX, this.headY, auraRadius, 0, Math.PI * 2);
            ctx.fill();
            
            // Wiederherstelle Originalfarben
            this.colors.body = originalBody;
            this.colors.bodyDark = originalBodyDark;
        }
    }
    
    drawWithReproduction() {
        // Dramatische Fortpflanzungs-Animation
        const anim = this.reproductionAnimation;
        const progress = 1.0 - (anim.duration / 60.0); // 0.0 bis 1.0
        
        // Pulsierender Effekt
        const pulse = Math.sin(anim.phase * 0.5) * 0.5 + 0.5;
        const scale = 1.0 + pulse * 0.3;
        
        // Farbwechsel: von rot zu orange/gelb
        const colorIntensity = Math.sin(anim.phase * 0.3) * 0.5 + 0.5;
        const r = Math.floor(106 + colorIntensity * 150); // 106-256
        const g = Math.floor(42 + colorIntensity * 100);  // 42-142
        const b = Math.floor(42 + colorIntensity * 50);  // 42-92
        
        // Speichere Originalfarben
        const originalBody = this.colors.body;
        const originalBodyDark = this.colors.bodyDark;
        
        // Temporäre leuchtende Farben
        this.colors.body = `rgb(${r}, ${g}, ${b})`;
        this.colors.bodyDark = `rgb(${Math.floor(r * 0.7)}, ${Math.floor(g * 0.7)}, ${Math.floor(b * 0.7)})`;
        
        // Zeichne normalen Körper
        ctx.save();
        
        // Shake-Effekt
        const shakeX = (Math.random() - 0.5) * 2 * pulse;
        const shakeY = (Math.random() - 0.5) * 2 * pulse;
        ctx.translate(shakeX, shakeY);
        
        // Skalierung für Pulsieren
        const centerX = this.headX;
        const centerY = this.headY;
        ctx.translate(centerX, centerY);
        ctx.scale(scale, scale);
        ctx.translate(-centerX, -centerY);
        
        this.draw();
        
        ctx.restore();
        
        // Leuchtender Aura-Effekt
        const auraRadius = 15 + pulse * 10;
        const gradient = ctx.createRadialGradient(
            this.headX, this.headY, 0,
            this.headX, this.headY, auraRadius
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulse * 0.4})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${pulse * 0.2})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.headX, this.headY, auraRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Energie-Partikel um den Körper (rotierend)
        for (let i = 0; i < this.segments.length; i += 2) {
            const seg = this.segments[i];
            const particleAngle = (anim.phase * 0.2 + i * 0.5) % (Math.PI * 2);
            const distance = 5 + pulse * 5;
            const particleX = seg.x + Math.cos(particleAngle) * distance;
            const particleY = seg.y + Math.sin(particleAngle) * distance;
            
            const particlePulse = Math.sin(anim.phase * 0.4 + i) * 0.5 + 0.5;
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particlePulse * 0.9})`;
            drawPixelCircle(particleX, particleY, 1.5 + particlePulse * 1.5, `rgb(${r}, ${g}, ${b})`);
        }
        
        // Wiederherstelle Originalfarben
        this.colors.body = originalBody;
        this.colors.bodyDark = originalBodyDark;
    }
    
    drawWithBite(targetX, targetY) {
        // Zeichne Jäger mit geöffnetem Maul (Biss-Animation)
        // draw() wird bereits Stamina-Anzeige zeichnen
        this.draw();
        
        // Zeichne "Biss"-Effekt - geöffnetes Maul zum Ziel
        const head = this.segments[0];
        const biteAngle = Math.atan2(targetY - head.y, targetX - head.x);
        
        // Geöffnetes Maul zeichnen
        ctx.strokeStyle = '#ff0000';
        ctx.fillStyle = '#ff0000';
        ctx.lineWidth = 2;
        
        // Maul-Linien (wie ein Biss)
        const mouthSize = 4;
        const mouthX1 = head.x + Math.cos(biteAngle) * 3;
        const mouthY1 = head.y + Math.sin(biteAngle) * 3;
        const mouthX2 = head.x + Math.cos(biteAngle) * (3 + mouthSize);
        const mouthY2 = head.y + Math.sin(biteAngle) * (3 + mouthSize);
        
        // Zähne/Biss-Markierungen
        ctx.beginPath();
        ctx.moveTo(mouthX1, mouthY1);
        ctx.lineTo(mouthX2, mouthY2);
        ctx.stroke();
        
        // Zähne
        const toothAngle1 = biteAngle + Math.PI / 4;
        const toothAngle2 = biteAngle - Math.PI / 4;
        ctx.beginPath();
        ctx.moveTo(mouthX2, mouthY2);
        ctx.lineTo(mouthX2 + Math.cos(toothAngle1) * 2, mouthY2 + Math.sin(toothAngle1) * 2);
        ctx.moveTo(mouthX2, mouthY2);
        ctx.lineTo(mouthX2 + Math.cos(toothAngle2) * 2, mouthY2 + Math.sin(toothAngle2) * 2);
        ctx.stroke();
    }
    
    drawWithClimbing() {
        // Dezente Kletter-Animation: Nur der Kopf wackelt, nicht der ganze Körper
        // Aktualisiere Animationsphase
        this.climbingAnimationPhase += 0.2; // Langsame Animation
        
        // Zeichne Körper normal (ohne Transformation)
        ctx.save();
        
        // Körper-Umriss zeichnen (ohne Kopf)
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.fillStyle = this.colors.body;
        ctx.lineWidth = 1;
        
        const bodyPoints = [];
        
        // Zeichne alle Segmente außer dem Kopf (Index 0)
        for (let i = 1; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const progress = i / (this.segments.length - 1);
            
            const curveCompression = 1.0 - Math.abs(this.angularVelocity) * 0.2;
            const headWidth = 5;
            const tailWidth = 0;
            const widthFactor = Math.pow(1 - progress, 1.5);
            const bodyWidth = (headWidth * widthFactor + tailWidth * (1 - widthFactor)) * curveCompression;
            
            let angle = this.angle;
            if (i < this.segments.length - 1) {
                const nextSeg = this.segments[i + 1];
                const dx = nextSeg.x - seg.x;
                const dy = nextSeg.y - seg.y;
                angle = Math.atan2(dy, dx);
            } else if (i > 0) {
                const prevSeg = this.segments[i - 1];
                const dx = seg.x - prevSeg.x;
                const dy = seg.y - prevSeg.y;
                angle = Math.atan2(dy, dx);
            }
            
            const perpAngle = angle + Math.PI / 2;
            const topX = seg.x + Math.cos(perpAngle) * bodyWidth;
            const topY = seg.y + Math.sin(perpAngle) * bodyWidth;
            const bottomX = seg.x - Math.cos(perpAngle) * bodyWidth;
            const bottomY = seg.y - Math.sin(perpAngle) * bodyWidth;
            
            bodyPoints.push({ top: { x: topX, y: topY }, bottom: { x: bottomX, y: bottomY }, seg: seg });
        }
        
        // Körper-Umriss zeichnen
        if (bodyPoints.length > 0) {
            ctx.beginPath();
            // Verbinde mit Kopf-Position (erste Körper-Position)
            const firstBodyPoint = bodyPoints[0];
            const head = this.segments[0];
            ctx.moveTo(Math.floor(head.x + Math.cos(this.angle + Math.PI / 2) * 5), Math.floor(head.y + Math.sin(this.angle + Math.PI / 2) * 5));
            
            for (let i = 0; i < bodyPoints.length; i++) {
                const point = bodyPoints[i];
                ctx.lineTo(Math.floor(point.top.x), Math.floor(point.top.y));
            }
            for (let i = bodyPoints.length - 1; i >= 0; i--) {
                const point = bodyPoints[i];
                ctx.lineTo(Math.floor(point.bottom.x), Math.floor(point.bottom.y));
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        
        // Schwanzspitze
        const tailSegment = this.segments[this.segments.length - 1];
        if (tailSegment) {
            drawPixelCircle(tailSegment.x, tailSegment.y, 1, this.colors.bodyDark);
        }
        
        // Stamina-Anzeige
        this.drawStaminaIndicator();
        
        ctx.restore();
        
        // Kopf separat mit Wackel-Animation zeichnen
        const head = this.segments[0];
        const headSize = 7;
        
        // Dezentes Wackeln: Leichte Rotation und Position-Verschiebung (nur Kopf)
        const wobbleAmount = Math.sin(this.climbingAnimationPhase) * 1.5; // Sehr dezentes Wackeln (1.5 Pixel)
        const rotationAmount = Math.sin(this.climbingAnimationPhase * 1.3) * 0.15; // Leichte Rotation
        
        ctx.save();
        
        // Verschiebe und rotiere nur den Kopf
        const wobbleX = Math.sin(this.climbingAnimationPhase) * wobbleAmount;
        const wobbleY = Math.cos(this.climbingAnimationPhase * 0.7) * wobbleAmount;
        ctx.translate(head.x + wobbleX, head.y + wobbleY);
        ctx.rotate(this.angle + rotationAmount);
        
        // Kopf zeichnen (mit Wackel-Animation)
        ctx.fillStyle = this.colors.body;
        ctx.beginPath();
        ctx.ellipse(0, 0, headSize, headSize * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Augen (gelb, drohend)
        const eyeOffset = 2.5;
        const eyeSize = 2;
        const eyeX1 = Math.cos(0) * 2 - Math.sin(0) * eyeOffset;
        const eyeY1 = Math.sin(0) * 2 + Math.cos(0) * eyeOffset;
        const eyeX2 = Math.cos(0) * 2 + Math.sin(0) * eyeOffset;
        const eyeY2 = Math.sin(0) * 2 - Math.cos(0) * eyeOffset;
        
        drawPixelCircle(eyeX1, eyeY1, eyeSize, this.colors.eye);
        drawPixelCircle(eyeX2, eyeY2, eyeSize, this.colors.eye);
        drawPixelCircle(eyeX1 - 0.5, eyeY1 - 0.5, 0.5, this.colors.eyeGlow);
        drawPixelCircle(eyeX2 + 0.5, eyeY2 - 0.5, 0.5, this.colors.eyeGlow);
        
        ctx.restore();
        
        // Dezentes Knabbern: Kleine Zähne/Maul-Bewegung am Kopf
        const bitePhase = Math.sin(this.climbingAnimationPhase * 2) * 0.5 + 0.5; // 0-1
        const biteAngle = this.angle + Math.PI; // In Richtung Spieler-Körper
        
        // Kleine, dezente Knabber-Animation (nur wenn Phase hoch ist)
        if (bitePhase > 0.6) {
            ctx.strokeStyle = '#ff6666';
            ctx.fillStyle = '#ff6666';
            ctx.lineWidth = 1;
            
            const mouthSize = 2 * bitePhase; // Sehr klein (max 2 Pixel)
            const mouthX1 = head.x + Math.cos(biteAngle) * 2;
            const mouthY1 = head.y + Math.sin(biteAngle) * 2;
            const mouthX2 = head.x + Math.cos(biteAngle) * (2 + mouthSize);
            const mouthY2 = head.y + Math.sin(biteAngle) * (2 + mouthSize);
            
            // Kleine Knabber-Linie
            ctx.beginPath();
            ctx.moveTo(mouthX1, mouthY1);
            ctx.lineTo(mouthX2, mouthY2);
            ctx.stroke();
        }
    }
    
    draw() {
        // Stelle sicher, dass Pixel-Art Rendering aktiv ist
        ctx.imageSmoothingEnabled = false;
        
        // Gleiche Zeichenlogik wie Spieler, aber mit anderen Farben
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.fillStyle = this.colors.body;
        ctx.lineWidth = 1;
        
        const bodyPoints = [];
        
        for (let i = 0; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const progress = i / (this.segments.length - 1);
            
            const curveCompression = 1.0 - Math.abs(this.angularVelocity) * 0.2;
            const headWidth = 5;
            const tailWidth = 0;
            const widthFactor = Math.pow(1 - progress, 1.5);
            const bodyWidth = (headWidth * widthFactor + tailWidth * (1 - widthFactor)) * curveCompression;
            
            let angle = this.angle;
            if (i < this.segments.length - 1) {
                const nextSeg = this.segments[i + 1];
                const dx = nextSeg.x - seg.x;
                const dy = nextSeg.y - seg.y;
                angle = Math.atan2(dy, dx);
            } else if (i > 0) {
                const prevSeg = this.segments[i - 1];
                const dx = seg.x - prevSeg.x;
                const dy = seg.y - prevSeg.y;
                angle = Math.atan2(dy, dx);
            }
            
            const perpAngle = angle + Math.PI / 2;
            const topX = seg.x + Math.cos(perpAngle) * bodyWidth;
            const topY = seg.y + Math.sin(perpAngle) * bodyWidth;
            const bottomX = seg.x - Math.cos(perpAngle) * bodyWidth;
            const bottomY = seg.y - Math.sin(perpAngle) * bodyWidth;
            
            bodyPoints.push({ top: { x: topX, y: topY }, bottom: { x: bottomX, y: bottomY }, seg: seg });
        }
        
        // Körper-Umriss zeichnen
        ctx.beginPath();
        for (let i = 0; i < bodyPoints.length; i++) {
            const point = bodyPoints[i];
            if (i === 0) {
                ctx.moveTo(Math.floor(point.top.x), Math.floor(point.top.y));
            } else {
                ctx.lineTo(Math.floor(point.top.x), Math.floor(point.top.y));
            }
        }
        for (let i = bodyPoints.length - 1; i >= 0; i--) {
            const point = bodyPoints[i];
            ctx.lineTo(Math.floor(point.bottom.x), Math.floor(point.bottom.y));
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Kopf mit Augen
        const head = this.segments[0];
        const headSize = 7;
        
        ctx.fillStyle = this.colors.body;
        ctx.beginPath();
        ctx.ellipse(Math.floor(head.x), Math.floor(head.y), headSize, headSize * 0.8, this.angle, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Augen (gelb, drohend)
        const eyeOffset = 2.5;
        const eyeSize = 2;
        const eyeAngle = this.angle;
        const eyeX1 = head.x + Math.cos(eyeAngle) * 2 - Math.sin(eyeAngle) * eyeOffset;
        const eyeY1 = head.y + Math.sin(eyeAngle) * 2 + Math.cos(eyeAngle) * eyeOffset;
        const eyeX2 = head.x + Math.cos(eyeAngle) * 2 + Math.sin(eyeAngle) * eyeOffset;
        const eyeY2 = head.y + Math.sin(eyeAngle) * 2 - Math.cos(eyeAngle) * eyeOffset;
        
        drawPixelCircle(eyeX1, eyeY1, eyeSize, this.colors.eye);
        drawPixelCircle(eyeX2, eyeY2, eyeSize, this.colors.eye);
        drawPixelCircle(eyeX1 - 0.5, eyeY1 - 0.5, 0.5, this.colors.eyeGlow);
        drawPixelCircle(eyeX2 + 0.5, eyeY2 - 0.5, 0.5, this.colors.eyeGlow);
        
        // Schwanzspitze
        const tailSegment = this.segments[this.segments.length - 1];
        if (tailSegment) {
            drawPixelCircle(tailSegment.x, tailSegment.y, 1, this.colors.bodyDark);
        }
        
        // Stamina-Anzeige: Leuchtende Striche am Rücken
        this.drawStaminaIndicator();
        
        // Biolumineszenz-Glow-Effekt
        this.drawBioluminescenceGlow();
    }
    
    drawBioluminescenceGlow() {
        // Kleine Biolumineszenz-Akzente statt großer Glows
        const glowColor = this.colors.glow || this.colors.body;
        // Konvertiere Hex zu RGB
        const hex = glowColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        
        // Nur kleine Glow-Punkte entlang des Körpers (Akzente)
        for (let i = 0; i < this.segments.length; i += 4) {
            const seg = this.segments[i];
            const segmentGlow = Math.sin(Date.now() * 0.004 + i * 0.2) * 0.2 + 0.6;
            const segmentRadius = 4; // Kleine Akzente
            
            const segGradient = ctx.createRadialGradient(
                seg.x, seg.y, 0,
                seg.x, seg.y, segmentRadius
            );
            segGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${segmentGlow * 0.5})`);
            segGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.fillStyle = segGradient;
            ctx.beginPath();
            ctx.arc(seg.x, seg.y, segmentRadius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    drawStaminaIndicator() {
        // Zeichne Stamina-Striche am Rücken der Kreatur
        // Verteile die Striche entlang des Körpers (nicht am Kopf oder Schwanz)
        const startSegment = Math.floor(this.segments.length * 0.15); // Starte nach 15% des Körpers
        const endSegment = Math.floor(this.segments.length * 0.85); // Ende vor 85% des Körpers
        const segmentRange = Math.max(1, endSegment - startSegment);
        
        // Zeichne für jede Stamina einen Strich
        for (let i = 0; i < this.currentStamina; i++) {
            // Position entlang des Körpers berechnen
            const segmentIndex = startSegment + Math.floor((i / Math.max(1, this.maxStamina - 1)) * segmentRange);
            if (segmentIndex >= 0 && segmentIndex < this.segments.length) {
                const seg = this.segments[segmentIndex];
                const progress = segmentIndex / (this.segments.length - 1);
                
                // Berechne Körperbreite an dieser Position (wie beim Zeichnen des Körpers)
                const curveCompression = 1.0 - Math.abs(this.angularVelocity) * 0.2;
                const headWidth = 4;
                const tailWidth = 0;
                const widthFactor = Math.pow(1 - progress, 1.5);
                const bodyWidth = (headWidth * widthFactor + tailWidth * (1 - widthFactor)) * curveCompression;
                
                // Berechne Winkel zum nächsten Segment (für Ausrichtung)
                let angle = this.angle;
                if (segmentIndex < this.segments.length - 1) {
                    const nextSeg = this.segments[segmentIndex + 1];
                    const dx = nextSeg.x - seg.x;
                    const dy = nextSeg.y - seg.y;
                    angle = Math.atan2(dy, dx);
                } else if (segmentIndex > 0) {
                    const prevSeg = this.segments[segmentIndex - 1];
                    const dx = seg.x - prevSeg.x;
                    const dy = seg.y - prevSeg.y;
                    angle = Math.atan2(dy, dx);
                }
                
                // Perpendikularer Winkel (90 Grad) für Rücken-Position
                const perpAngle = angle + Math.PI / 2;
                
                // Position am Rücken (auf der Körperoberfläche, nicht darüber)
                // Positioniere den Strich auf der oberen Kante des Körpers
                const offsetDistance = bodyWidth * 0.7; // 70% der Körperbreite (auf dem Rücken)
                const lineX = seg.x + Math.cos(perpAngle) * offsetDistance;
                const lineY = seg.y + Math.sin(perpAngle) * offsetDistance;
                
                // Leuchtender Strich (helles cyan/blau für Stamina)
                const pulse = Math.sin(Date.now() * 0.005 + i * 0.5) * 0.2 + 0.8; // Leichtes Pulsieren
                // Strichlänge passt sich an Körperbreite an - berücksichtigt spitzes Schwanzende
                // Am Kopf: 60% der Körperbreite, am Schwanz: proportional kleiner
                const lineLength = Math.max(0.5, bodyWidth * 0.5); // 50% der Körperbreite (wird am Schwanz sehr klein)
                const lineWidth = Math.max(1.0, bodyWidth * 0.3); // Dicke passt sich auch an
                
                // Strich zeichnen (senkrecht zum Körper)
                const lineAngle = perpAngle;
                const startX = lineX - Math.cos(lineAngle) * lineLength;
                const startY = lineY - Math.sin(lineAngle) * lineLength;
                const endX = lineX + Math.cos(lineAngle) * lineLength;
                const endY = lineY + Math.sin(lineAngle) * lineLength;
                
                // Helles cyan/blau mit guter Sichtbarkeit
                ctx.strokeStyle = `rgba(0, 255, 255, ${pulse})`; // Vollständig sichtbares Cyan
                ctx.lineWidth = lineWidth;
                ctx.lineCap = 'round'; // Abgerundete Enden
                ctx.beginPath();
                ctx.moveTo(Math.floor(startX), Math.floor(startY));
                ctx.lineTo(Math.floor(endX), Math.floor(endY));
                ctx.stroke();
                
                // Leuchtender Punkt in der Mitte
                ctx.fillStyle = `rgba(0, 255, 255, ${pulse})`;
                drawPixelCircle(lineX, lineY, 1.5, `rgb(0, 255, 255)`);
            }
        }
    }
    
    getHeadPosition() {
        return { x: this.headX, y: this.headY };
    }
    
    checkCollisionWithCreature(otherHeadX, otherHeadY, collisionRadius = 10) {
        const dx = this.headX - otherHeadX;
        const dy = this.headY - otherHeadY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < collisionRadius;
    }
    
    findClosestSegmentIndex(playerSegments) {
        // Finde das Segment, das am nächsten zum Jäger ist - optimiert mit squared distance
        let closestIndex = 0;
        let minDistanceSquared = Infinity;
        for (let i = 0; i < playerSegments.length; i++) {
            const seg = playerSegments[i];
            const dx = seg.x - this.headX;
            const dy = seg.y - this.headY;
            const distanceSquared = dx * dx + dy * dy;
            if (distanceSquared < minDistanceSquared) {
                minDistanceSquared = distanceSquared;
                closestIndex = i;
            }
        }
        return { index: closestIndex, distance: Math.sqrt(minDistanceSquared) };
    }
    
    grow() {
        // Füge ein neues Segment hinzu
        this.numSegments++;
        const lastSeg = this.segments[this.segments.length - 1];
        const secondLastSeg = this.segments[this.segments.length - 2];
        
        // Berechne Position für neues Segment
        let angle = this.angle;
        if (secondLastSeg) {
            const dx = lastSeg.x - secondLastSeg.x;
            const dy = lastSeg.y - secondLastSeg.y;
            angle = Math.atan2(dy, dx);
        }
        
        const newX = lastSeg.x - Math.cos(angle) * this.segmentDistance;
        const newY = lastSeg.y - Math.sin(angle) * this.segmentDistance;
        this.segments.push(new Segment(newX, newY));
    }
    
    shrink() {
        // Entferne ein Segment
        if (this.numSegments > 1 && this.segments.length > 1) {
            this.numSegments--;
            this.segments.pop(); // Entferne letztes Segment
        }
    }
    
    increaseSpeed() {
        // Erhöhe Geschwindigkeit um 3% pro Biss (weniger als Spieler mit 5%)
        this.speedMultiplier += 0.03;
        this.baseSpeed = 0.6 * this.speedMultiplier;
        this.speed = this.baseSpeed;
        this.targetSpeed = this.baseSpeed;
        this.currentSpeed = this.baseSpeed;
        
        // Maximal-Geschwindigkeit begrenzen (z.B. 2x der Basis-Geschwindigkeit)
        const maxSpeed = 0.6 * 2.0;
        if (this.baseSpeed > maxSpeed) {
            this.baseSpeed = maxSpeed;
            this.speed = maxSpeed;
            this.targetSpeed = maxSpeed;
            this.currentSpeed = maxSpeed;
            this.speedMultiplier = 2.0;
        }
    }
    
    increaseSpeedFromFood() {
        // Erhöhe Geschwindigkeit um 5% pro Food (genauso viel wie Spieler)
        this.speedMultiplier += 0.05;
        this.baseSpeed = 0.6 * this.speedMultiplier;
        this.speed = this.baseSpeed;
        this.targetSpeed = this.baseSpeed;
        this.currentSpeed = this.baseSpeed;
        
        // Maximal-Geschwindigkeit begrenzen (z.B. 2x der Basis-Geschwindigkeit)
        const maxSpeed = 0.6 * 2.0;
        if (this.baseSpeed > maxSpeed) {
            this.baseSpeed = maxSpeed;
            this.speed = maxSpeed;
            this.targetSpeed = maxSpeed;
            this.currentSpeed = maxSpeed;
            this.speedMultiplier = 2.0;
        }
    }
    
    findNearestFood(foods) {
        // Finde das nächste Food innerhalb von 50 Pixeln - optimiert mit squared distance
        let nearestFood = null;
        const searchRadius = 50;
        const searchRadiusSquared = searchRadius * searchRadius;
        let minDistanceSquared = searchRadiusSquared;
        
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
            const dx = food.x - this.headX;
            const dy = food.y - this.headY;
            const distanceSquared = dx * dx + dy * dy;
            
            if (distanceSquared < minDistanceSquared) {
                minDistanceSquared = distanceSquared;
                nearestFood = food;
            }
        }
        
        return nearestFood;
    }
    
    findNearestStaminaToken(staminaTokens) {
        // Finde den nächsten Stamina-Token innerhalb von 50 Pixeln - optimiert mit squared distance
        let nearestToken = null;
        const searchRadius = 50;
        const searchRadiusSquared = searchRadius * searchRadius;
        let minDistanceSquared = searchRadiusSquared;
        
        for (let i = 0; i < staminaTokens.length; i++) {
            const token = staminaTokens[i];
            const dx = token.x - this.headX;
            const dy = token.y - this.headY;
            const distanceSquared = dx * dx + dy * dy;
            
            if (distanceSquared < minDistanceSquared) {
                minDistanceSquared = distanceSquared;
                nearestToken = token;
            }
        }
        
        return nearestToken;
    }
    
    checkStaminaTokenCollision(staminaTokens) {
        // Prüfe Kollision mit Stamina-Token - optimiert mit squared distance
        const hunterHead = this.getHeadPosition();
        const collisionRadius = 5;
        for (let i = 0; i < staminaTokens.length; i++) {
            const token = staminaTokens[i];
            const dx = hunterHead.x - token.x;
            const dy = hunterHead.y - token.y;
            const distanceSquared = dx * dx + dy * dy;
            const collisionRadiusSquared = (token.size + collisionRadius) * (token.size + collisionRadius);
            
            if (distanceSquared < collisionRadiusSquared) {
                return i; // Index des gefressenen Stamina-Tokens
            }
        }
        return null;
    }
    
    checkFoodCollision(foods) {
        // Prüfe Kollision mit Food - optimiert mit squared distance
        const hunterHead = this.getHeadPosition();
        const collisionRadius = 5; // Basis-Radius
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
            const dx = hunterHead.x - food.x;
            const dy = hunterHead.y - food.y;
            const distanceSquared = dx * dx + dy * dy;
            const collisionRadiusSquared = (food.size + collisionRadius) * (food.size + collisionRadius);
            
            if (distanceSquared < collisionRadiusSquared) {
                return i; // Index des gefressenen Foods
            }
        }
        return null;
    }
}

// Fetter, langsamer Jäger (jagt primär Food/Stamina-Token)
class FatHunterCreature {
    constructor(x, y) {
        this.segments = [];
        this.numSegments = 12; // Länger als normaler Jäger
        this.segmentDistance = 8; // Größere Abstände (dicker)
        this.headX = x;
        this.headY = y;
        this.targetAngle = Math.random() * Math.PI * 2;
        this.angle = this.targetAngle;
        this.baseSpeed = 0.3; // Viel langsamer als normaler Jäger
        this.speed = 0.3;
        this.currentSpeed = 0.3;
        this.targetSpeed = 0.3;
        this.speedMultiplier = 1.0;
        this.angularVelocity = 0;
        this.turnSpeed = 0.05; // Langsamere Drehung
        this.acceleration = 0.15; // Langsamere Beschleunigung
        
        // Physik-System für Shockwave (Geschwindigkeits-Vektoren)
        this.vx = 0; // Geschwindigkeit X
        this.vy = 0; // Geschwindigkeit Y
        this.friction = 0.88; // Reibung/Dämpfung (0.88 = stärkere Dämpfung, mehr Masse)
        
        // Prozedurale Bewegungsvariablen
        this.wavePhase = 0;
        this.waveSpeed = 0.1; // Langsamere Wellenbewegung
        this.waveAmplitude = 3; // Größere Amplitude (dicker)
        
        // Food-Zähler
        this.foodCount = 0;
        
        // HP-System: Fat Hunter haben 3 Leben
        this.maxHP = 3;
        this.currentHP = this.maxHP;
        
        // Damage-Cooldown (individuell für jeden Fat Hunter)
        this.damageCooldown = 0; // Cooldown zwischen Schäden (2 Sekunden = 120 Frames)
        
        // Reservierte Tokens (um Konflikte mit anderen fetten Hunters zu vermeiden)
        this.reservedFoodIndex = -1; // Index des reservierten Foods
        this.reservedTokenIndex = -1; // Index des reservierten Stamina-Tokens
        
        // Farben - Biolumineszenz-Stil: Leuchtendes Grün/Gelb
        this.colors = {
            body: '#00ff00', // Leuchtendes Grün
            bodyDark: '#00cc00', // Dunkleres Grün
            bodyLight: '#66ff66', // Helles Grün
            eye: '#ffff00', // Leuchtendes Gelb
            eyeGlow: '#ffff66', // Helles Gelb
            glow: '#00ff00' // Glow-Farbe
        };
        
        // Segment-Initialisierung
        this.initializeSegments(x, y);
    }
    
    initializeSegments(x, y) {
        this.segments = [];
        for (let i = 0; i < this.numSegments; i++) {
            const segX = x - Math.cos(this.angle) * i * this.segmentDistance;
            const segY = y - Math.sin(this.angle) * i * this.segmentDistance;
            this.segments.push(new Segment(segX, segY));
        }
    }
    
    setTarget(targetX, targetY) {
        const dx = targetX - this.headX;
        const dy = targetY - this.headY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 5) {
            this.targetAngle = Math.atan2(dy, dx);
        }
    }
    
    update() {
        // Geschwindigkeitsabhängige Wellenbewegung
        const speedFactor = Math.min(this.currentSpeed / this.baseSpeed, 2.0);
        this.waveSpeed = 0.1 * speedFactor;
        this.wavePhase += this.waveSpeed;
        
        // Trägheit beim Drehen (langsamer)
        let angleDiff = this.targetAngle - this.angle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        
        const desiredAngularVelocity = angleDiff * 0.1; // Langsamer
        this.angularVelocity += (desiredAngularVelocity - this.angularVelocity) * 0.2;
        this.angularVelocity *= 0.95;
        this.angle += this.angularVelocity;
        
        // Geschwindigkeitsanpassung
        this.targetSpeed = this.speed;
        this.currentSpeed += (this.targetSpeed - this.currentSpeed) * this.acceleration;
        
        // Physik-System: Geschwindigkeits-Vektoren anwenden (für Shockwave)
        if (Math.abs(this.vx) > 0.01 || Math.abs(this.vy) > 0.01) {
            // Wende Geschwindigkeit an
            this.headX += this.vx;
            this.headY += this.vy;
            
            // Dämpfung anwenden (langsam auslaufen)
            this.vx *= this.friction;
            this.vy *= this.friction;
            
            // Wenn Geschwindigkeit sehr klein ist, setze auf 0
            if (Math.abs(this.vx) < 0.01) this.vx = 0;
            if (Math.abs(this.vy) < 0.01) this.vy = 0;
        } else {
            // Normale Bewegung (wenn keine Shockwave-Geschwindigkeit)
        const waveOffset = Math.sin(this.wavePhase) * 1.5;
        const speedVariation = 1.0 + Math.sin(this.wavePhase * 2) * 0.1;
        const moveSpeed = this.currentSpeed * speedVariation;
        
        this.headX += Math.cos(this.angle) * moveSpeed;
        this.headY += Math.sin(this.angle) * moveSpeed + waveOffset * 0.2;
        }
        
        // Welt ist jetzt unendlich - keine Grenzen mehr
        
        // Segment-Update
        const headVx = Math.cos(this.angle) * this.currentSpeed;
        const headVy = Math.sin(this.angle) * this.currentSpeed;
        this.segments[0].x = this.headX;
        this.segments[0].y = this.headY;
        this.segments[0].vx = headVx * 0.3;
        this.segments[0].vy = headVy * 0.3;
        
        const curveFactor = Math.abs(this.angularVelocity);
        const dynamicDistance = this.segmentDistance * (1.0 - curveFactor * 0.3);
        
        for (let i = 1; i < this.segments.length; i++) {
            const prevSeg = this.segments[i - 1];
            const currentSeg = this.segments[i];
            const normalizedPos = i / this.segments.length;
            
            const waveIntensity = Math.min(this.currentSpeed / this.baseSpeed, 1.5);
            const maxWaveAmplitude = Math.min(this.waveAmplitude, 3.0);
            const waveReduction = 1.0 - normalizedPos * 0.5;
            const segmentWave = Math.sin(this.wavePhase - i * 0.25) * maxWaveAmplitude * 0.3 * waveIntensity * waveReduction;
            const perpAngle = this.angle + Math.PI / 2;
            
            const baseDamping = 0.92 - (this.currentSpeed / this.baseSpeed) * 0.03;
            const damping = baseDamping + normalizedPos * 0.03;
            
            currentSeg.update(prevSeg, dynamicDistance, Math.max(0.85, Math.min(damping, 0.97)), i, this.segments.length);
            
            if (i > 1 && i < this.segments.length * 0.8) {
                const waveStrength = Math.min(normalizedPos * 0.6, 0.5);
                const waveX = Math.cos(perpAngle) * segmentWave * waveStrength;
                const waveY = Math.sin(perpAngle) * segmentWave * waveStrength;
                currentSeg.x += waveX;
                currentSeg.y += waveY;
            }
        }
    }
    
    getHeadPosition() {
        return { x: this.headX, y: this.headY };
    }
    
    findNearestFood(foods) {
        // Größerer Suchradius für fette Jäger (100 statt 50)
        let nearestFood = null;
        let minDistance = 100;
        
        for (let food of foods) {
            const dx = food.x - this.headX;
            const dy = food.y - this.headY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < minDistance) {
                minDistance = distance;
                nearestFood = food;
            }
        }
        
        return nearestFood;
    }
    
    findNearestStaminaToken(staminaTokens) {
        // Größerer Suchradius (100 statt 50)
        let nearestToken = null;
        let minDistance = 100;
        
        for (let token of staminaTokens) {
            const dx = token.x - this.headX;
            const dy = token.y - this.headY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < minDistance) {
                minDistance = distance;
                nearestToken = token;
            }
        }
        
        return nearestToken;
    }
    
    checkStaminaTokenCollision(staminaTokens) {
        // Optimiert mit squared distance
        const hunterHead = this.getHeadPosition();
        const collisionRadius = 8; // Größerer Kollisionsradius
        for (let i = 0; i < staminaTokens.length; i++) {
            const token = staminaTokens[i];
            const dx = hunterHead.x - token.x;
            const dy = hunterHead.y - token.y;
            const distanceSquared = dx * dx + dy * dy;
            const collisionRadiusSquared = (token.size + collisionRadius) * (token.size + collisionRadius);
            
            if (distanceSquared < collisionRadiusSquared) {
                return i;
            }
        }
        return null;
    }
    
    getHeadPosition() {
        return { x: this.headX, y: this.headY };
    }
    
    checkFoodCollision(foods) {
        // Optimiert mit squared distance
        const hunterHead = this.getHeadPosition();
        const collisionRadius = 8; // Größerer Kollisionsradius
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
            const dx = hunterHead.x - food.x;
            const dy = hunterHead.y - food.y;
            const distanceSquared = dx * dx + dy * dy;
            const collisionRadiusSquared = (food.size + collisionRadius) * (food.size + collisionRadius);
            
            if (distanceSquared < collisionRadiusSquared) {
                return i;
            }
        }
        return null;
    }
    
    grow() {
        this.numSegments++;
        const lastSeg = this.segments[this.segments.length - 1];
        const newX = lastSeg.x - Math.cos(this.angle) * this.segmentDistance;
        const newY = lastSeg.y - Math.sin(this.angle) * this.segmentDistance;
        this.segments.push(new Segment(newX, newY));
    }
    
    shrink() {
        // Entferne ein Segment
        if (this.numSegments > 1 && this.segments.length > 1) {
            this.numSegments--;
            this.segments.pop(); // Entferne letztes Segment
        }
    }
    
    draw() {
        // Stelle sicher, dass Pixel-Art Rendering aktiv ist
        ctx.imageSmoothingEnabled = false;
        
        // Transparenz für Fat Hunter
        ctx.save();
        ctx.globalAlpha = 0.4; // 40% Opazität (sehr transparent)
        
        // Größere Körperbreite (dicker)
        const baseWidth = 10; // Größer als normaler Jäger (6)
        const headWidth = baseWidth * 1.3;
        const tailWidth = baseWidth * 0.3;
        
        // Körper zeichnen (dicker)
        ctx.fillStyle = this.colors.body;
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        for (let i = 0; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const normalizedPos = i / (this.segments.length - 1);
            const width = headWidth * (1 - normalizedPos) + tailWidth * normalizedPos;
            
            if (i === 0) {
                ctx.moveTo(seg.x, seg.y);
            } else {
                ctx.lineTo(seg.x, seg.y);
            }
        }
        ctx.stroke();
        
        // Dickere Segmente
        for (let i = 0; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const normalizedPos = i / (this.segments.length - 1);
            const width = headWidth * (1 - normalizedPos) + tailWidth * normalizedPos;
            
            drawPixelCircle(seg.x, seg.y, width, this.colors.body);
            
            // Dunklerer Rand
            if (i < this.segments.length - 1) {
                drawPixelCircle(seg.x, seg.y, width * 0.7, this.colors.bodyDark);
            }
        }
        
        // Kopf (größer)
        const headSeg = this.segments[0];
        drawPixelCircle(headSeg.x, headSeg.y, headWidth, this.colors.body);
        drawPixelCircle(headSeg.x, headSeg.y, headWidth * 0.7, this.colors.bodyDark);
        
        // Augen (größer)
        const eyeOffset = headWidth * 0.4;
        const eyeSize = 2;
        const leftEyeX = headSeg.x + Math.cos(this.angle - Math.PI / 2) * eyeOffset;
        const leftEyeY = headSeg.y + Math.sin(this.angle - Math.PI / 2) * eyeOffset;
        const rightEyeX = headSeg.x + Math.cos(this.angle + Math.PI / 2) * eyeOffset;
        const rightEyeY = headSeg.y + Math.sin(this.angle + Math.PI / 2) * eyeOffset;
        
        drawPixelCircle(leftEyeX, leftEyeY, eyeSize, this.colors.eye);
        drawPixelCircle(rightEyeX, rightEyeY, eyeSize, this.colors.eye);
        drawPixelCircle(leftEyeX, leftEyeY, eyeSize * 0.5, this.colors.eyeGlow);
        drawPixelCircle(rightEyeX, rightEyeY, eyeSize * 0.5, this.colors.eyeGlow);
        
        // Transparenz wiederherstellen
        ctx.restore();
        
        // Biolumineszenz-Glow-Effekt (ohne Transparenz für bessere Sichtbarkeit)
        this.drawBioluminescenceGlow();
    }
    
    drawBioluminescenceGlow() {
        // Kleine Biolumineszenz-Akzente statt großer Glows
        const glowColor = this.colors.glow || this.colors.body;
        // Konvertiere Hex zu RGB
        const hex = glowColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        
        // Nur kleine Glow-Punkte entlang des Körpers (Akzente)
        for (let i = 0; i < this.segments.length; i += 4) {
            const seg = this.segments[i];
            const segmentGlow = Math.sin(Date.now() * 0.004 + i * 0.2) * 0.2 + 0.6;
            const segmentRadius = 5; // Etwas größer für Fat Hunter, aber immer noch klein
            
            const segGradient = ctx.createRadialGradient(
                seg.x, seg.y, 0,
                seg.x, seg.y, segmentRadius
            );
            segGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${segmentGlow * 0.5})`);
            segGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.fillStyle = segGradient;
            ctx.beginPath();
            ctx.arc(seg.x, seg.y, segmentRadius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

// Boss-Kreatur (großer Hunter mit leuchtendem Schwanz)
class BossCreature {
    constructor(x, y) {
        this.segments = [];
        this.numSegments = 25; // Viel größer als normaler Hunter
        this.segmentDistance = 8;
        this.headX = x;
        this.headY = y;
        this.targetAngle = Math.random() * Math.PI * 2;
        this.angle = this.targetAngle;
        this.baseSpeed = 0.5; // Etwas langsamer als normaler Hunter (aber größer)
        this.speed = 0.5;
        this.currentSpeed = 0.5;
        this.targetSpeed = 0.5;
        this.speedMultiplier = 1.0;
        this.angularVelocity = 0;
        this.turnSpeed = 0.06; // Langsamere Drehung
        this.acceleration = 0.15;
        
        // Jagd-Verhalten - jagt immer den Spieler
        this.isChasing = true;
        this.attentionRadius = Infinity; // Immer aufmerksam
        
        // Prozedurale Bewegungsvariablen
        this.wavePhase = 0;
        this.waveSpeed = 0.1;
        this.waveAmplitude = 3;
        
        // Schwanz leuchtet
        this.tailGlowPhase = 0;
        
        // Schaden-System
        this.damageCooldown = 0; // Cooldown in Frames (60 FPS = 2 Sekunden = 120 Frames)
        this.damageAmount = 10; // Schaden pro Treffer (10 Segmente)
        
        // Farben - rot/dunkelrot für Boss
        this.colors = {
            body: '#8b0000', // Dunkelrot
            bodyDark: '#5a0000', // Sehr dunkelrot
            bodyLight: '#cc0000', // Hellrot
            eye: '#ff0000', // Rot
            eyeGlow: '#ff6666',
            tailGlow: '#ffff00' // Gelb für leuchtenden Schwanz
        };
        
        // Segment-Initialisierung
        this.initializeSegments(x, y);
    }
    
    initializeSegments(x, y) {
        this.segments = [];
        for (let i = 0; i < this.numSegments; i++) {
            const segX = x - Math.cos(this.angle) * i * this.segmentDistance;
            const segY = y - Math.sin(this.angle) * i * this.segmentDistance;
            this.segments.push(new Segment(segX, segY));
        }
    }
    
    setTarget(targetX, targetY) {
        // Boss jagt immer den Spieler
        const dx = targetX - this.headX;
        const dy = targetY - this.headY;
        this.targetAngle = Math.atan2(dy, dx);
    }
    
    update() {
        // Cooldown aktualisieren
        if (this.damageCooldown > 0) {
            this.damageCooldown--;
        }
        
        // Wellenphase aktualisieren
        this.wavePhase += this.waveSpeed;
        this.tailGlowPhase += 0.2;
        
        // Winkel zum Ziel interpolieren
        let angleDiff = this.targetAngle - this.angle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        
        this.angularVelocity += angleDiff * this.turnSpeed;
        this.angularVelocity *= 0.9; // Dämpfung
        this.angle += this.angularVelocity;
        
        // Geschwindigkeit aktualisieren
        this.currentSpeed += (this.targetSpeed - this.currentSpeed) * this.acceleration;
        
        // Kopf bewegen
        this.headX += Math.cos(this.angle) * this.currentSpeed * this.speedMultiplier;
        this.headY += Math.sin(this.angle) * this.currentSpeed * this.speedMultiplier;
        
        // Segmente aktualisieren
        if (this.segments.length > 0) {
            this.segments[0].x = this.headX;
            this.segments[0].y = this.headY;
            
            for (let i = 1; i < this.segments.length; i++) {
                const prevSeg = this.segments[i - 1];
                const currSeg = this.segments[i];
                
                const dx = prevSeg.x - currSeg.x;
                const dy = prevSeg.y - currSeg.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist > this.segmentDistance) {
                    const moveDist = dist - this.segmentDistance;
                    currSeg.x += (dx / dist) * moveDist;
                    currSeg.y += (dy / dist) * moveDist;
                }
            }
        }
    }
    
    draw() {
        ctx.imageSmoothingEnabled = false;
        
        // Größere Körperbreite für Boss
        const baseWidth = 15; // Größer als normaler Hunter
        const headWidth = baseWidth * 1.5;
        const tailWidth = baseWidth * 0.4;
        
        // Körper zeichnen
        ctx.fillStyle = this.colors.body;
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        for (let i = 0; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const normalizedPos = i / (this.segments.length - 1);
            const width = headWidth * (1 - normalizedPos) + tailWidth * normalizedPos;
            
            if (i === 0) {
                ctx.moveTo(seg.x, seg.y);
            } else {
                ctx.lineTo(seg.x, seg.y);
            }
        }
        ctx.stroke();
        
        // Segmente zeichnen
        for (let i = 0; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const normalizedPos = i / (this.segments.length - 1);
            const width = headWidth * (1 - normalizedPos) + tailWidth * normalizedPos;
            
            // Letzte 3 Segmente leuchten (Schwanz)
            const isTailSegment = i >= this.segments.length - 3;
            if (isTailSegment) {
                // Leuchtender Schwanz
                const glow = Math.sin(this.tailGlowPhase + i) * 0.5 + 0.5;
                const glowSize = width * (1 + glow * 0.5);
                ctx.fillStyle = this.colors.tailGlow;
                ctx.globalAlpha = 0.8 + glow * 0.2;
                drawPixelCircle(seg.x, seg.y, glowSize, this.colors.tailGlow);
                ctx.globalAlpha = 1.0;
            }
            
            drawPixelCircle(seg.x, seg.y, width, this.colors.body);
            
            // Dunklerer Rand
            if (i < this.segments.length - 1) {
                drawPixelCircle(seg.x, seg.y, width * 0.7, this.colors.bodyDark);
            }
        }
        
        // Kopf (größer)
        const headSeg = this.segments[0];
        drawPixelCircle(headSeg.x, headSeg.y, headWidth, this.colors.body);
        drawPixelCircle(headSeg.x, headSeg.y, headWidth * 0.7, this.colors.bodyDark);
        
        // Augen (größer, rot)
        const eyeOffset = headWidth * 0.4;
        const eyeSize = 4;
        const leftEyeX = headSeg.x + Math.cos(this.angle - Math.PI / 2) * eyeOffset;
        const leftEyeY = headSeg.y + Math.sin(this.angle - Math.PI / 2) * eyeOffset;
        const rightEyeX = headSeg.x + Math.cos(this.angle + Math.PI / 2) * eyeOffset;
        const rightEyeY = headSeg.y + Math.sin(this.angle + Math.PI / 2) * eyeOffset;
        
        drawPixelCircle(leftEyeX, leftEyeY, eyeSize, this.colors.eye);
        drawPixelCircle(rightEyeX, rightEyeY, eyeSize, this.colors.eye);
    }
    
    getHeadPosition() {
        if (this.segments.length > 0) {
            return { x: this.segments[0].x, y: this.segments[0].y };
        }
        return { x: this.headX, y: this.headY };
    }
    
    getTailSegments() {
        // Letzte 3 Segmente sind der leuchtende Schwanz
        return this.segments.slice(-3);
    }
}

// Tentakel-Kreatur (greift alles in der Nähe)
class TentacleCreature {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.angle = Math.random() * Math.PI * 2;
        this.targetAngle = this.angle;
        this.speed = 0.2; // Langsame Bewegung
        this.angularVelocity = 0;
        this.turnSpeed = 0.05;
        
        // Prozedurale Bewegungsvariablen
        this.wavePhase = 0;
        this.waveSpeed = 0.1;
        this.waveAmplitude = 30; // Bewegungsradius
        
        // Tentakel-System
        this.tentacleCount = 6; // Anzahl der Tentakel
        this.tentacles = [];
        this.tentacleLength = 80; // Länge jedes Tentakels
        this.tentacleReach = 100; // Reichweite zum Greifen
        
        // Initialisiere Tentakel
        for (let i = 0; i < this.tentacleCount; i++) {
            const angle = (i / this.tentacleCount) * Math.PI * 2;
            const segmentCount = 10; // Anzahl der Segmente pro Tentakel
            const segments = [];
            
            // Initialisiere Segmente wie bei Hunter (Segment-Objekte)
            // WICHTIG: Letztes Segment (Index 0) ist am Körper fixiert, erstes Segment (Index segmentCount) ist die Spitze
            for (let j = 0; j <= segmentCount; j++) {
                const progress = j / segmentCount;
                const segmentLength = this.tentacleLength * (1 - progress); // Umgekehrt: 0 = Körper, 1 = Spitze
                const segX = this.x + Math.cos(angle) * segmentLength;
                const segY = this.y + Math.sin(angle) * segmentLength;
                segments.push(new Segment(segX, segY));
            }
            
            // Berechne initiale Spitzen-Position
            const tipX = this.x + Math.cos(angle) * this.tentacleLength;
            const tipY = this.y + Math.sin(angle) * this.tentacleLength;
            
            this.tentacles.push({
                // Hunter-ähnliche Eigenschaften
                segments: segments, // Segment-Objekte (wie bei Hunter)
                numSegments: segmentCount + 1,
                segmentDistance: 8, // Abstand zwischen Segmenten
                headX: tipX, // Spitze des Tentakels (wie Hunter-Kopf)
                headY: tipY,
                targetAngle: angle, // Ziel-Winkel
                angle: angle, // Aktueller Winkel
                baseSpeed: 0.5, // Geschwindigkeit
                speed: 0.5,
                currentSpeed: 0.5,
                targetSpeed: 0.5,
                angularVelocity: 0,
                turnSpeed: 0.1, // Drehgeschwindigkeit
                acceleration: 0.15,
                
                // Prozedurale Bewegungsvariablen
                wavePhase: Math.random() * Math.PI * 2,
                waveSpeed: 0.15,
                waveAmplitude: 2,
                
                // Ziel-System
                target: null, // Ziel-Position zum Greifen
                targetEntity: null, // Ziel-Entität
                attentionRadius: 150, // Reichweite zum Erkennen von Zielen
                isChasing: false,
                patrolAngle: angle, // Patrouillen-Winkel
                
                // Greif-System
                grabCooldown: 0,
                grabDuration: 0,
                grabbedEntity: null,
                
                // Verankerung am Körper
                anchorX: this.x, // Verankerungspunkt (wird in update() aktualisiert)
                anchorY: this.y,
                
                // setTarget Methode (wie bei Hunter)
                setTarget: function(targetX, targetY) {
                    const dx = targetX - this.headX;
                    const dy = targetY - this.headY;
                    this.targetAngle = Math.atan2(dy, dx);
                }
            });
        }
        
        // Körper-Größe
        this.bodyRadius = 20;
        
        // Farben - Biolumineszenz-Stil
        this.colors = {
            body: '#ff00ff', // Leuchtendes Magenta
            bodyDark: '#cc00cc',
            tentacle: '#ff66ff', // Helles Magenta
            tentacleTip: '#ffffff' // Weiß an den Spitzen
        };
    }
    
    update() {
        // Langsames Floaten - sehr sanfte Bewegung
        this.wavePhase += this.waveSpeed * 0.3; // Viel langsamer
        
        // Sehr kleine, langsame Bewegungen (nicht im Kreis)
        const driftX = Math.sin(this.wavePhase) * 2; // Sehr kleine Bewegungen
        const driftY = Math.cos(this.wavePhase * 0.7) * 2;
        
        // Sanfte Bewegung zur neuen Position
        this.x += (this.baseX + driftX - this.x) * 0.05;
        this.y += (this.baseY + driftY - this.y) * 0.05;
        
        // Sehr langsame Rotation
        this.targetAngle += 0.01; // Sehr langsame kontinuierliche Rotation
        let angleDiff = this.targetAngle - this.angle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        
        this.angularVelocity += angleDiff * this.turnSpeed * 0.3; // Viel langsamer
        this.angularVelocity *= 0.98; // Mehr Dämpfung
        this.angle += this.angularVelocity;
        
        // Tentakel aktualisieren (jeder wie ein Hunter, aber am Körper verankert)
        for (let i = 0; i < this.tentacles.length; i++) {
            const tentacle = this.tentacles[i];
            
            // Verankerung am Körper aktualisieren
            tentacle.anchorX = this.x;
            tentacle.anchorY = this.y;
            
            // Cooldown aktualisieren
            if (tentacle.grabCooldown > 0) {
                tentacle.grabCooldown--;
            }
            
            // Greif-Dauer aktualisieren
            if (tentacle.grabDuration > 0) {
                tentacle.grabDuration--;
                if (tentacle.grabDuration <= 0) {
                    // Loslassen
                    tentacle.grabbedEntity = null;
                    tentacle.target = null;
                    tentacle.targetEntity = null;
                    tentacle.grabCooldown = 180; // 3 Sekunden Cooldown
                }
            }
            
            // Hunter-ähnliche Bewegung: Wenn ein Ziel verfolgt wird
            if (tentacle.target && !tentacle.grabbedEntity && tentacle.grabCooldown === 0) {
                tentacle.isChasing = true;
                // Setze Ziel für Bewegung
                tentacle.setTarget(tentacle.target.x, tentacle.target.y);
            } else if (tentacle.grabbedEntity && tentacle.grabDuration > 0) {
                // Wenn gegriffen, folge dem Ziel
                let targetPos;
                if (tentacle.grabbedEntity.getHeadPosition) {
                    targetPos = tentacle.grabbedEntity.getHeadPosition();
                } else if (tentacle.grabbedEntity.segments && tentacle.grabbedEntity.segments.length > 0) {
                    targetPos = { x: tentacle.grabbedEntity.segments[0].x, y: tentacle.grabbedEntity.segments[0].y };
                } else {
                    targetPos = { x: tentacle.grabbedEntity.x, y: tentacle.grabbedEntity.y };
                }
                tentacle.setTarget(targetPos.x, targetPos.y);
                tentacle.isChasing = true;
            } else {
                // Kein Ziel - Patrouillen-Bewegung (langsame Rotation um den Körper)
                tentacle.isChasing = false;
                const baseAngle = (i / this.tentacleCount) * Math.PI * 2 + this.angle;
                tentacle.patrolAngle = baseAngle;
                tentacle.targetAngle = baseAngle;
            }
            
            // Hunter-ähnliche Update-Logik
            // Trägheit beim Drehen
            let angleDiff = tentacle.targetAngle - tentacle.angle;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            
            const desiredAngularVelocity = angleDiff * tentacle.turnSpeed;
            tentacle.angularVelocity += (desiredAngularVelocity - tentacle.angularVelocity) * 0.3;
            tentacle.angularVelocity *= 0.95;
            tentacle.angle += tentacle.angularVelocity;
            
            // Geschwindigkeitsanpassung
            if (tentacle.isChasing) {
                tentacle.targetSpeed = tentacle.baseSpeed;
            } else {
                tentacle.targetSpeed = tentacle.baseSpeed * 0.5; // Langsamer wenn patrouillierend
            }
            tentacle.currentSpeed += (tentacle.targetSpeed - tentacle.currentSpeed) * tentacle.acceleration;
            
            // Prozedurale Wellenbewegung
            tentacle.wavePhase += tentacle.waveSpeed;
            const waveOffset = Math.sin(tentacle.wavePhase) * tentacle.waveAmplitude;
            const speedVariation = 1.0 + Math.sin(tentacle.wavePhase * 2) * 0.1;
            const moveSpeed = tentacle.currentSpeed * speedVariation;
            
            // Bewegung der Spitze (Kopf)
            tentacle.headX += Math.cos(tentacle.angle) * moveSpeed;
            tentacle.headY += Math.sin(tentacle.angle) * moveSpeed + waveOffset * 0.2;
            
            // Längenbegrenzung: Spitze darf nicht weiter als tentacleLength vom Körper entfernt sein
            const dx = tentacle.headX - tentacle.anchorX;
            const dy = tentacle.headY - tentacle.anchorY;
            const distanceFromAnchor = Math.sqrt(dx * dx + dy * dy);
            
            if (distanceFromAnchor > this.tentacleLength) {
                // Begrenze Position auf maximale Länge
                const angleToAnchor = Math.atan2(dy, dx);
                tentacle.headX = tentacle.anchorX + Math.cos(angleToAnchor) * this.tentacleLength;
                tentacle.headY = tentacle.anchorY + Math.sin(angleToAnchor) * this.tentacleLength;
            }
            
            // Segment-Update (wie bei Hunter, aber umgekehrt: letztes Segment ist am Körper fixiert)
            // Spitze (erstes Segment in der Liste, aber visuell der "Kopf")
            const tipIndex = tentacle.segments.length - 1;
            tentacle.segments[tipIndex].x = tentacle.headX;
            tentacle.segments[tipIndex].y = tentacle.headY;
            const headVx = Math.cos(tentacle.angle) * tentacle.currentSpeed;
            const headVy = Math.sin(tentacle.angle) * tentacle.currentSpeed;
            tentacle.segments[tipIndex].vx = headVx * 0.3;
            tentacle.segments[tipIndex].vy = headVy * 0.3;
            
            // Letztes Segment (Index 0) ist am Körper fixiert
            tentacle.segments[0].x = tentacle.anchorX;
            tentacle.segments[0].y = tentacle.anchorY;
            tentacle.segments[0].vx = 0;
            tentacle.segments[0].vy = 0;
            
            // Segmente von Spitze zum Körper aktualisieren (rückwärts)
            const curveFactor = Math.abs(tentacle.angularVelocity);
            const dynamicDistance = tentacle.segmentDistance * (1.0 - curveFactor * 0.3);
            
            // Berechne maximale Gesamtlänge basierend auf Segment-Anzahl
            const maxTotalLength = this.tentacleLength;
            
            for (let j = tentacle.segments.length - 2; j >= 1; j--) {
                const nextSeg = tentacle.segments[j + 1]; // Nächstes Segment (näher zur Spitze)
                const currentSeg = tentacle.segments[j];
                const normalizedPos = j / tentacle.segments.length;
                
                // Wellenbewegung
                const waveIntensity = Math.min(tentacle.currentSpeed / tentacle.baseSpeed, 1.5);
                const maxWaveAmplitude = Math.min(tentacle.waveAmplitude, 2.0);
                const waveReduction = 1.0 - normalizedPos * 0.5;
                const segmentWave = Math.sin(tentacle.wavePhase - j * 0.25) * maxWaveAmplitude * 0.3 * waveIntensity * waveReduction;
                const perpAngle = tentacle.angle + Math.PI / 2;
                
                const baseDamping = 0.92 - (tentacle.currentSpeed / tentacle.baseSpeed) * 0.03;
                const damping = baseDamping + normalizedPos * 0.03;
                
                // Update Segment (folgt dem nächsten Segment zur Spitze)
                currentSeg.update(nextSeg, dynamicDistance, Math.max(0.85, Math.min(damping, 0.97)), j, tentacle.segments.length);
                
                // Wellenbewegung anwenden
                if (j > 1 && j < tentacle.segments.length * 0.8) {
                    const waveStrength = Math.min(normalizedPos * 0.6, 0.5);
                    const waveX = Math.cos(perpAngle) * segmentWave * waveStrength;
                    const waveY = Math.sin(perpAngle) * segmentWave * waveStrength;
                    currentSeg.x += waveX * 0.3;
                    currentSeg.y += waveY * 0.3;
                }
            }
            
            // Zusätzliche Längenbegrenzung: Prüfe Gesamtlänge aller Segmente
            let totalLength = 0;
            for (let j = 0; j < tentacle.segments.length - 1; j++) {
                const seg1 = tentacle.segments[j];
                const seg2 = tentacle.segments[j + 1];
                const dx = seg2.x - seg1.x;
                const dy = seg2.y - seg1.y;
                totalLength += Math.sqrt(dx * dx + dy * dy);
            }
            
            // Wenn Gesamtlänge zu groß, skaliere alle Segmente (außer verankertem und Spitze)
            if (totalLength > maxTotalLength && totalLength > 0) {
                const scaleFactor = maxTotalLength / totalLength;
                const anchorX = tentacle.segments[0].x;
                const anchorY = tentacle.segments[0].y;
                
                // Skaliere alle Segmente relativ zum Ankerpunkt
                for (let j = 1; j < tentacle.segments.length - 1; j++) {
                    const seg = tentacle.segments[j];
                    const dx = seg.x - anchorX;
                    const dy = seg.y - anchorY;
                    seg.x = anchorX + dx * scaleFactor;
                    seg.y = anchorY + dy * scaleFactor;
                }
            }
        }
    }
    
    checkGrabTargets(simulator) {
        // Sammle alle verfügbaren Ziele
        const allTargets = [];
        
        // Spieler als Ziel
        if (simulator.tier && simulator.tier.segments && simulator.tier.segments.length > 0) {
            const playerHead = simulator.tier.getHeadPosition();
            allTargets.push({
                entity: simulator.tier,
                position: playerHead,
                entityId: 'player' // Eindeutige ID für Spieler
            });
        }
        
        // Hunter als Ziele
        for (let j = 0; j < simulator.hunters.length; j++) {
            const hunter = simulator.hunters[j];
            if (!hunter || !hunter.segments || hunter.segments.length === 0) continue;
            
            const hunterHead = hunter.getHeadPosition();
            allTargets.push({
                entity: hunter,
                position: hunterHead,
                entityId: `hunter_${j}` // Eindeutige ID für jeden Hunter
            });
        }
        
        // Sammle alle freien Tentakel (nicht im Cooldown, nicht gegriffen)
        const freeTentacles = [];
        for (let i = 0; i < this.tentacles.length; i++) {
            const tentacle = this.tentacles[i];
            if (!tentacle.grabbedEntity && tentacle.grabCooldown === 0) {
                const tip = tentacle.segments[tentacle.segments.length - 1];
                freeTentacles.push({
                    tentacle: tentacle,
                    tentacleIndex: i,
                    tipX: tip.x,
                    tipY: tip.y
                });
            }
        }
        
        // Für jedes Ziel finde das nächste freie Tentakel
        const assignedTargets = new Set(); // Verhindert, dass mehrere Tentakel dasselbe Ziel verfolgen
        
        for (let t = 0; t < allTargets.length; t++) {
            const target = allTargets[t];
            
            // Überspringe wenn dieses Ziel bereits von einem Tentakel verfolgt wird
            if (assignedTargets.has(target.entityId)) continue;
            
            // Finde das nächste freie Tentakel für dieses Ziel
            let nearestTentacle = null;
            let nearestDistance = Infinity;
            
            for (let i = 0; i < freeTentacles.length; i++) {
                const freeTentacle = freeTentacles[i];
                
                // Überspringe wenn dieses Tentakel bereits ein Ziel hat
                if (freeTentacle.tentacle.target) continue;
                
                const dx = target.position.x - freeTentacle.tipX;
                const dy = target.position.y - freeTentacle.tipY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < freeTentacle.tentacle.attentionRadius && distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestTentacle = freeTentacle;
                }
            }
            
            // Wenn ein Tentakel gefunden wurde, weise ihm das Ziel zu
            if (nearestTentacle) {
                nearestTentacle.tentacle.target = target.position;
                nearestTentacle.tentacle.targetEntity = target.entity;
                assignedTargets.add(target.entityId);
                
                // Prüfe ob Tentakel-Spitze nah genug ist zum Greifen
                const tip = nearestTentacle.tentacle.segments[nearestTentacle.tentacle.segments.length - 1];
                const dx = tip.x - target.position.x;
                const dy = tip.y - target.position.y;
                const tipDistance = Math.sqrt(dx * dx + dy * dy);
                
                if (tipDistance < 15) {
                    // Greife!
                    nearestTentacle.tentacle.grabbedEntity = target.entity;
                    nearestTentacle.tentacle.grabDuration = 120; // 2 Sekunden
                    if (simulator.log) {
                        const entityName = target.entity === simulator.tier ? 'Spieler' : 'Hunter';
                        simulator.log(`${entityName} von Tentakel gegriffen!`, target.entity === simulator.tier ? 'error' : 'warning');
                    }
                }
            }
        }
        
        // Entferne Ziele von Tentakeln, die kein Ziel mehr haben sollten
        for (let i = 0; i < this.tentacles.length; i++) {
            const tentacle = this.tentacles[i];
            
            // Wenn Tentakel ein Ziel hat, aber nicht mehr in der assignedTargets Liste ist
            if (tentacle.target && tentacle.targetEntity) {
                let targetId = null;
                if (tentacle.targetEntity === simulator.tier) {
                    targetId = 'player';
                } else {
                    // Finde Hunter-Index
                    for (let j = 0; j < simulator.hunters.length; j++) {
                        if (simulator.hunters[j] === tentacle.targetEntity) {
                            targetId = `hunter_${j}`;
                            break;
                        }
                    }
                }
                
                // Wenn Ziel nicht mehr zugewiesen ist, entferne es
                if (targetId && !assignedTargets.has(targetId)) {
                    tentacle.target = null;
                    tentacle.targetEntity = null;
                }
            }
        }
    }
    
    draw() {
        ctx.imageSmoothingEnabled = false;
        
        // Körper zeichnen
        ctx.fillStyle = this.colors.body;
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.lineWidth = 2;
        drawPixelCircle(this.x, this.y, this.bodyRadius, this.colors.body);
        drawPixelCircle(this.x, this.y, this.bodyRadius * 0.7, this.colors.bodyDark);
        
        // Augen
        const eyeSize = 3;
        const eyeOffset = 8;
        const leftEyeX = this.x + Math.cos(this.angle - Math.PI / 2) * eyeOffset;
        const leftEyeY = this.y + Math.sin(this.angle - Math.PI / 2) * eyeOffset;
        const rightEyeX = this.x + Math.cos(this.angle + Math.PI / 2) * eyeOffset;
        const rightEyeY = this.y + Math.sin(this.angle + Math.PI / 2) * eyeOffset;
        
        drawPixelCircle(leftEyeX, leftEyeY, eyeSize, '#00ffff');
        drawPixelCircle(rightEyeX, rightEyeY, eyeSize, '#00ffff');
        
        // Tentakel zeichnen (wie Hunter, aber am Körper verankert)
        for (let i = 0; i < this.tentacles.length; i++) {
            const tentacle = this.tentacles[i];
            
            if (tentacle.segments.length < 2) continue;
            
            // Tentakel-Farbe (rot wenn greift, sonst normal)
            const tentacleColor = tentacle.grabbedEntity ? '#ff0000' : this.colors.tentacle;
            
            // Zeichne Tentakel als organische Linie mit variabler Dicke (wie Hunter)
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            
            // Segmente von Körper (Index 0) zur Spitze (Index length-1)
            for (let j = 0; j < tentacle.segments.length - 1; j++) {
                const seg1 = tentacle.segments[j];
                const seg2 = tentacle.segments[j + 1];
                const progress = j / tentacle.segments.length;
                
                // Linienbreite wird zur Spitze hin dünner (organisch)
                const lineWidth = 4 * (1 - progress * 0.7);
                
                ctx.strokeStyle = tentacleColor;
                ctx.lineWidth = lineWidth;
                
                ctx.beginPath();
                ctx.moveTo(seg1.x, seg1.y);
                ctx.lineTo(seg2.x, seg2.y);
                ctx.stroke();
            }
            
            // Zeichne Tentakel-Segmente als kleine Kreise (wie bei Hunter)
            for (let j = 0; j < tentacle.segments.length; j++) {
                const seg = tentacle.segments[j];
                const progress = j / tentacle.segments.length;
                const size = 2 * (1 - progress * 0.6); // Wird zur Spitze hin kleiner
                
                if (j === tentacle.segments.length - 1) {
                    // Spitze (größer und heller)
                    const tipSize = tentacle.grabbedEntity ? 5 : 4;
                    drawPixelCircle(seg.x, seg.y, tipSize, tentacle.grabbedEntity ? '#ff6666' : this.colors.tentacleTip);
                    
                    // Kleiner Glow-Effekt an der Spitze
                    if (!tentacle.grabbedEntity) {
                        ctx.globalAlpha = 0.3;
                        drawPixelCircle(seg.x, seg.y, tipSize + 2, this.colors.tentacleTip);
                        ctx.globalAlpha = 1.0;
                    }
                } else if (j > 0) {
                    // Mittlere Segmente
                    drawPixelCircle(seg.x, seg.y, size, tentacleColor);
                }
            }
        }
    }
    
    getHeadPosition() {
        return { x: this.x, y: this.y };
    }
}

// Simulator-Klasse (jetzt Snake-Spiel)
class Simulator {
    constructor() {
        this.tier = null;
        this.animationId = null;
        this.isRunning = false;
        this.speed = 1.0;
        this.mouseX = null;
        this.mouseY = null;
        this.isMouseOverCanvas = false;
        this.lastMouseClientX = null;
        this.lastMouseClientY = null;
        this.foods = []; // Array für mehrere Foods
        this.staminaTokens = []; // Array für Stamina-Token
        this.hunters = []; // Array für mehrere Jäger-Kreaturen
        this.fatHunters = []; // Array für fette, langsame Jäger
        this.tentacleCreatures = []; // Array für Tentakel-Kreaturen
        this.tentacleCreatureSpawnTimer = 0; // Timer für Tentakel-Spawning
        this.maxTentacleCreatures = 20; // Maximale Anzahl von Tentakel-Kreaturen
        this.score = 0;
        this.foodCount = 0; // Zähler für Upgrades
        this.mutationCount = 0; // Zähler für Mutationen (alle 30 Food-Token)
        this.pendingUpgrades = false;
        this.pendingMutations = false;
        this.extraFoodChance = 0; // Chance auf zusätzliches Food (in %)
        this.activeUpgrades = {}; // { upgradeId: stacks }
        this.activeMutations = {}; // { mutationId: stacks }
        this.hungryLeechSizeBoost = 0; // Temporärer Größen-Boost für Hungry Leech (0-1)
        this.lastHungryLeechLog = 0; // Timer für Hungry Leech Log (verhindert Spam)
        this.gold = 0; // Gold für Evolution-Shop
        this.evolutions = {}; // Objekt: { evolutionId: level } (Level 1-5)
        this.activeEvolutionIndex = 0; // Index der aktiven Evolution (für Wechsel mit Mausrad)
        this.particles = []; // Partikel für visuelle Effekte
        this.projectiles = []; // Projektil-Array für Schüsse
        this.biteAnimation = null; // Biss-Animation
        this.damageFlash = 0; // Flash-Effekt beim Treffer
        this.fatHunterSpawnAnimation = null; // Animation für Fat Hunter Spawn { duration: number, phase: number, hunterX: number, hunterY: number }
        this.debugLog = []; // Debug-Log Einträge
        this.maxLogEntries = 100; // Maximale Anzahl von Log-Einträgen
        this.shockwaveAnimation = null; // Shockwave-Animation { duration: number, radius: number, x: number, y: number }
        this.bloodAnimation = null; // Blut-Animation bei Boss-Schaden { duration: number, phase: number, x: number, y: number, particles: [] }
        this.length50Animation = null; // Animation für Länge 50 Meilenstein { duration: number, phase: number }
        this.length50MilestoneReached = false; // Flag um sicherzustellen, dass Animation nur einmal spielt
        this.length100Animation = null; // Animation für Länge 100 Meilenstein
        this.length100MilestoneReached = false; // Flag für Länge 100
        this.bosses = []; // Array von Boss-Kreaturen (3 Bosses erscheinen bei Länge 100)
        this.bossSpawnCheckTimer = 0; // Timer für kontinuierliche Boss-Spawn-Prüfung
        this.winAnimation = null; // Win-Animation nach Boss-Besiegung
        
        // Prozedurale Unendliche Welt
        this.chunkSize = 500; // Größe eines Chunks in Pixeln
        this.loadedChunks = new Set(); // Set von geladenen Chunks (als "chunkX,chunkY" Strings)
        this.chunkPadding = 3; // Wie viele Chunks außerhalb des sichtbaren Bereichs geladen werden (erhöht für mehr Hunters)
        
        this.cameraX = 0; // Kamera-Position in Welt-Koordinaten
        this.cameraY = 0;
        this.cameraFollowSpeed = 0.1; // Wie schnell die Kamera folgt (0.1 = sanft)
        this.cameraZoom = 1.0; // Kamera-Zoom (1.0 = normal, größer = rausgezoomt)
        this.baseZoom = 1.0; // Basis-Zoom
        
        // Viewport-basierte Entity-Verwaltung
        this.activeZoneRadius = Math.max(renderWidth, renderHeight) * 1.5; // 1.5x Viewport-Größe
        this.spawnZoneRadius = Math.max(renderWidth, renderHeight) * 1.2; // Spawne knapp außerhalb des Sichtfeldes
        this.despawnRadius = Math.max(renderWidth, renderHeight) * 2.5; // Despawn wenn zu weit weg
        
        // FPS-Limitierung für konsistente Performance
        this.targetFPS = 60; // Ziel-FPS
        this.frameInterval = 1000 / this.targetFPS; // Millisekunden pro Frame
        this.lastFrameTime = 0; // Zeit des letzten Frames
        this.deltaTime = 0; // Delta-Zeit für framerate-unabhängige Updates
        
        // Performance-Monitoring
        this.performanceStats = {
            fps: 60,
            frameTime: 0,
            entityCounts: {
                foods: 0,
                hunters: 0,
                fatHunters: 0,
                tentacles: 0,
                bosses: 0,
                projectiles: 0,
                particles: 0,
                playerSegments: 0
            },
            updateTime: 0,
            drawTime: 0,
            lastFPSUpdate: 0,
            frameCount: 0,
            slowFrames: 0 // Frames die > 20ms dauern
        };
        this.performanceWarningThreshold = 30; // Warnung bei < 30 FPS
        this.showPerformanceStats = false; // Toggle mit P-Taste
        
        // Hunter-Spawning wird jetzt vollständig durch Chunk-System gehandhabt
        this.maxHunters = 150; // Maximale Anzahl von Hunters in der Welt (reduziert für bessere Performance)
        this.maxFatHunters = 75; // Maximale Anzahl von Fat Hunters (reduziert)
        
        this.setupControls();
        this.setupDebugLog();
        this.setupPlayerName();
        this.loadProgress();
        this.setupPerformanceMonitoring();
        this.setupEvolutionsShop();
        this.setupBackgroundMusic();
        
        // Highscore-Display initialisieren
        this.updateHighscoreDisplay();
        
        // Gold-Anzeige beim Start aktualisieren
        this.updateGoldDisplay();
    }
    
    setupPlayerName() {
        // Prüfe ob bereits ein Name gespeichert ist
        const savedName = this.getPlayerName();
        if (savedName) {
            this.showGameSection(savedName);
        } else {
            this.showNameSection();
        }
        
        // Start Game Button
        const startGameBtn = document.getElementById('startGameBtn');
        if (startGameBtn) {
            startGameBtn.addEventListener('click', () => {
                console.log('Start Game Button clicked');
                this.handleNameInput();
            });
        } else {
            console.error('startGameBtn not found in setupPlayerName!');
        }
        
        // Enter-Taste für Name-Eingabe
        const playerNameInput = document.getElementById('playerNameInput');
        if (playerNameInput) {
            playerNameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleNameInput();
                }
            });
        }
    }
    
    showNameSection() {
        const nameSection = document.getElementById('nameSection');
        const gameSection = document.getElementById('gameSection');
        if (nameSection) nameSection.style.display = 'block';
        if (gameSection) gameSection.style.display = 'none';
    }
    
    showGameSection(playerName) {
        const nameSection = document.getElementById('nameSection');
        const gameSection = document.getElementById('gameSection');
        const currentPlayerName = document.getElementById('currentPlayerName');
        
        if (nameSection) nameSection.style.display = 'none';
        if (gameSection) gameSection.style.display = 'block';
        if (currentPlayerName) currentPlayerName.textContent = playerName;
        
        // Gold-Anzeige aktualisieren
        this.updateGoldDisplay();
    }
    
    handleNameInput() {
        const nameInput = document.getElementById('playerNameInput');
        
        if (!nameInput) {
            console.error('playerNameInput not found!');
            return;
        }
        
        const name = nameInput.value.trim();
        
        if (!name) {
            alert(t('nameRequired'));
            return;
        }
        
        // Prüfe ob Name bereits in Highscore-Liste existiert (case-insensitive)
        // Warnung anzeigen, aber trotzdem erlauben (Spieler kann seinen Namen verwenden)
        try {
            const highscores = this.getHighscores();
            const nameExists = highscores.some(hs => hs.name.toLowerCase() === name.toLowerCase());
            
            if (nameExists) {
                // Warnung anzeigen, aber trotzdem fortfahren
                const useAnyway = confirm(t('nameAlreadyExists') + '\n\nMöchtest du diesen Namen trotzdem verwenden?');
                if (!useAnyway) {
            return;
        }
            }
        } catch (e) {
            console.error('Fehler beim Prüfen der Highscore-Liste:', e);
            // Bei Fehler trotzdem fortfahren
        }
        
        // Speichere Name
        this.setPlayerName(name);
        console.log('Name gespeichert:', name);
        this.showGameSection(name);
        console.log('Game Section angezeigt');
    }
    
    // Prüfe ob Name bereits in Highscore-Liste existiert
    isNameTaken(name) {
        if (!name) return false;
        const highscores = this.getHighscores();
        return highscores.some(hs => hs.name.toLowerCase() === name.toLowerCase());
    }
    
    getPlayerName() {
        return localStorage.getItem('leechPlayerName') || null;
    }
    
    setPlayerName(name) {
        localStorage.setItem('leechPlayerName', name);
    }
    
    // Fortschritt speichern
    saveProgress() {
        const progress = {
            playerName: this.getPlayerName(),
            score: this.score || 0,
            foodCount: this.foodCount || 0,
            activeUpgrades: this.activeUpgrades || {},
            activeMutations: this.activeMutations || {},
            gold: this.gold || 0,
            evolutions: this.evolutions || []
        };
        localStorage.setItem('leechProgress', JSON.stringify(progress));
    }
    
    // Fortschritt laden
    loadProgress() {
        const stored = localStorage.getItem('leechProgress');
        if (stored) {
            try {
                const progress = JSON.parse(stored);
                // Stelle Fortschritt wieder her
                if (progress.score !== undefined) this.score = progress.score;
                if (progress.foodCount !== undefined) this.foodCount = progress.foodCount;
                if (progress.activeUpgrades) this.activeUpgrades = progress.activeUpgrades;
                if (progress.activeMutations) this.activeMutations = progress.activeMutations;
                if (progress.gold !== undefined) this.gold = progress.gold;
                if (progress.evolutions) {
                    // Migration: Array zu Objekt konvertieren falls nötig
                    if (Array.isArray(progress.evolutions)) {
                        this.evolutions = {};
                        progress.evolutions.forEach(id => {
                            this.evolutions[id] = 1; // Level 1 für alte Evolutions
                        });
                    } else {
                        this.evolutions = progress.evolutions;
                    }
                    // Aktualisiere Evolution-Anzeige nach dem Laden
                    this.updateEvolutionDisplay();
                }
            } catch (e) {
                console.error('Fehler beim Laden des Fortschritts:', e);
            }
        }
    }
    
    setupEvolutionsShop() {
        const evolutionsBtn = document.getElementById('evolutionsBtn');
        const closeEvolutionsBtn = document.getElementById('closeEvolutionsBtn');
        
        if (evolutionsBtn) {
            evolutionsBtn.addEventListener('click', () => {
                this.showEvolutionsShop();
            });
        }
        
        if (closeEvolutionsBtn) {
            closeEvolutionsBtn.addEventListener('click', () => {
                this.hideEvolutionsShop();
            });
        }
    }
    
    showEvolutionsShop() {
        const overlay = document.getElementById('evolutionsOverlay');
        if (overlay) {
            overlay.style.display = 'flex';
            this.updateEvolutionsShop();
        }
    }
    
    hideEvolutionsShop() {
        const overlay = document.getElementById('evolutionsOverlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    }
    
    updateEvolutionsShop() {
        const goldDisplay = document.getElementById('shopGold');
        const currentGoldDisplay = document.getElementById('currentGold');
        if (goldDisplay) goldDisplay.textContent = this.gold || 0;
        if (currentGoldDisplay) currentGoldDisplay.textContent = this.gold || 0;
        
        const listContainer = document.getElementById('evolutionsList');
        if (!listContainer) return;
        
        listContainer.innerHTML = '';
        
        // Initialisiere evolutions als Objekt falls noch nicht geschehen
        if (!this.evolutions || Array.isArray(this.evolutions)) {
            if (Array.isArray(this.evolutions)) {
                const oldEvolutions = this.evolutions;
                this.evolutions = {};
                oldEvolutions.forEach(id => {
                    this.evolutions[id] = 1;
                });
            } else {
                this.evolutions = {};
            }
        }
        
        EVOLUTIONS.forEach(evolution => {
            const currentLevel = this.evolutions[evolution.id] || 0;
            const isOwned = currentLevel > 0;
            const isMaxLevel = currentLevel >= 5;
            const upgradeCost = this.getEvolutionUpgradeCost(evolution.id, currentLevel);
            const canAfford = (this.gold || 0) >= upgradeCost;
            
            // Beschreibung mit Level-Effekten
            let description = evolution.description;
            if (evolution.id === 'shot') {
                const staminaCost = Math.max(1, 5 - currentLevel);
                if (currentLevel > 0) {
                    description = `Mit Rechtsklick einen Schuss abgeben (kostet ${staminaCost} Stamina, Level ${currentLevel}/5)`;
                } else {
                    description = `Mit Rechtsklick einen Schuss abgeben (kostet ${staminaCost} Stamina)`;
                }
            } else if (evolution.id === 'shockwave') {
                const radius = 150 + (currentLevel - 1) * 30;
                if (currentLevel > 0) {
                    description = `Mit Rechtsklick eine Schockwelle abgeben (kostet 5 Stamina, Radius: ${radius}px, Level ${currentLevel}/5)`;
                } else {
                    description = `Mit Rechtsklick eine Schockwelle abgeben (kostet 5 Stamina, Radius: ${radius}px)`;
                }
            }
            
            const evolutionDiv = document.createElement('div');
            evolutionDiv.style.cssText = `
                padding: 15px;
                border: 3px solid ${evolution.rarity.color};
                border-radius: 10px;
                background: ${isOwned ? '#2a4a2a' : '#2a2a2a'};
                color: #cccccc;
                display: flex;
                flex-direction: column;
                gap: 10px;
                box-shadow: 0 0 15px ${evolution.rarity.color}40;
            `;
            
            evolutionDiv.innerHTML = `
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="font-size: 2em;">${evolution.icon}</div>
                    <div style="flex: 1;">
                        <div style="font-size: 1.2em; font-weight: 600; color: ${evolution.rarity.color};">
                            ${evolution.name}${isOwned ? ` (Level ${currentLevel}/5)` : ''}
                        </div>
                        <div style="font-size: 0.9em; color: #aaa; margin-top: 5px;">
                            ${description}
                        </div>
                        <div style="font-size: 0.85em; color: ${evolution.rarity.color}; margin-top: 5px; font-weight: 600;">
                            ${evolution.rarity.name.toUpperCase()}
                        </div>
                    </div>
                    <div style="text-align: right;">
                        ${isMaxLevel ? 
                            '<div style="color: #4ade80; font-weight: 600;">✓ Max Level</div>' :
                            `<div style="color: #fbbf24; font-weight: 600;">${upgradeCost} Gold</div>
                             <button class="buyEvolutionBtn" data-evolution-id="${evolution.id}" 
                                     style="margin-top: 10px; padding: 8px 20px; background: ${canAfford ? '#4ade80' : '#666'}; 
                                            color: white; border: none; border-radius: 5px; cursor: ${canAfford ? 'pointer' : 'not-allowed'}; 
                                            font-weight: 600; font-size: 14px;"
                                     ${!canAfford ? 'disabled' : ''}>
                                ${isOwned ? 'Upgraden' : 'Kaufen'}
                             </button>`
                        }
                    </div>
                </div>
            `;
            
            if (!isMaxLevel) {
                const buyBtn = evolutionDiv.querySelector('.buyEvolutionBtn');
                if (buyBtn) {
                    buyBtn.addEventListener('click', () => {
                        this.buyEvolution(evolution.id);
                    });
                }
            }
            
            listContainer.appendChild(evolutionDiv);
        });
    }
    
    buyEvolution(evolutionId) {
        const evolution = EVOLUTIONS.find(e => e.id === evolutionId);
        if (!evolution) return;
        
        // Initialisiere evolutions als Objekt falls noch nicht geschehen
        if (!this.evolutions || Array.isArray(this.evolutions)) {
            // Migration: Array zu Objekt konvertieren
            if (Array.isArray(this.evolutions)) {
                const oldEvolutions = this.evolutions;
                this.evolutions = {};
                oldEvolutions.forEach(id => {
                    this.evolutions[id] = 1; // Level 1 für alte Evolutions
                });
            } else {
                this.evolutions = {};
            }
        }
        
        const currentLevel = this.evolutions[evolutionId] || 0;
        
        // Prüfe ob bereits auf max Level
        if (currentLevel >= 5) {
            alert('Diese Evolution ist bereits auf maximalem Level!');
            return;
        }
        
        // Berechne Upgrade-Kosten
        const upgradeCost = this.getEvolutionUpgradeCost(evolutionId, currentLevel);
        
        // Prüfe ob genug Gold vorhanden
        if ((this.gold || 0) < upgradeCost) {
            alert('Nicht genug Gold!');
            return;
        }
        
        // Kaufe/Upgrade Evolution
        this.gold -= upgradeCost;
        this.evolutions[evolutionId] = currentLevel + 1;
        
        // Speichere Fortschritt
        this.saveProgress();
        
        // Aktualisiere Shop
        this.updateEvolutionsShop();
        this.updateGoldDisplay();
        
        if (currentLevel === 0) {
            this.log(`Evolution gekauft: ${evolution.name} (Level 1)`, 'success');
        } else {
            this.log(`Evolution geupgradet: ${evolution.name} (Level ${currentLevel + 1})`, 'success');
        }
        
        // Aktualisiere Evolution-Anzeige
        this.updateEvolutionDisplay();
    }
    
    updateGoldDisplay() {
        const currentGoldDisplay = document.getElementById('currentGold');
        const shopGoldDisplay = document.getElementById('shopGold');
        if (currentGoldDisplay) currentGoldDisplay.textContent = this.gold || 0;
        if (shopGoldDisplay) shopGoldDisplay.textContent = this.gold || 0;
    }
    
    addGoldFromScore(score) {
        // Score wird zu Gold (1:1 Verhältnis)
        this.gold = (this.gold || 0) + score;
        
        // Speichere Fortschritt
        this.saveProgress();
        
        this.updateGoldDisplay();
        this.log(`+${score} Gold erhalten!`, 'success');
    }
    
    handleSpacebar() {
        if (!this.tier) return;
        
        // Hole verfügbare Evolutions
        const availableEvolutions = this.getAvailableEvolutions();
        
        if (availableEvolutions.length === 0) {
            this.log('Keine Evolution gekauft!', 'warning');
            return;
        }
        
        // Verwende aktive Evolution
        const activeEvolution = availableEvolutions[this.activeEvolutionIndex];
        if (!activeEvolution) {
            // Fallback: erste verfügbare Evolution
            this.activeEvolutionIndex = 0;
            return;
        }
        
        // Berechne Stamina-Kosten basierend auf Evolution und Level
        let requiredStamina = 5;
        if (activeEvolution.id === 'shot') {
            // Schuss: 5 - level (min 1)
            requiredStamina = Math.max(1, 5 - activeEvolution.level);
        } else if (activeEvolution.id === 'shockwave') {
            // Shockwave: immer 5 Stamina
            requiredStamina = 5;
        }
        
        // Prüfe ob genug Stamina vorhanden
        if (this.tier.currentStamina < requiredStamina) {
            this.log(`Nicht genug Stamina! (${requiredStamina} benötigt)`, 'warning');
            return;
        }
        
        // Aktiviere Evolution basierend auf ID
        if (activeEvolution.id === 'shot') {
            this.useShot(activeEvolution.level);
        } else if (activeEvolution.id === 'shockwave') {
            this.useShockwave(activeEvolution.level);
        }
    }
    
    getAvailableEvolutions() {
        // Gibt Array von verfügbaren Evolution-Objekten zurück (mit Level)
        if (!this.evolutions || Object.keys(this.evolutions).length === 0) return [];
        
        return EVOLUTIONS
            .filter(evolution => this.evolutions[evolution.id] && this.evolutions[evolution.id] > 0)
            .map(evolution => ({
                ...evolution,
                level: this.evolutions[evolution.id] || 1
            }));
    }
    
    getEvolutionLevel(evolutionId) {
        // Gibt das Level einer Evolution zurück (0 wenn nicht besessen)
        return this.evolutions[evolutionId] || 0;
    }
    
    getEvolutionUpgradeCost(evolutionId, currentLevel) {
        // Berechnet Upgrade-Kosten exponentiell: baseCost * (2 ^ level)
        const evolution = EVOLUTIONS.find(e => e.id === evolutionId);
        if (!evolution) return Infinity;
        
        if (currentLevel === 0) {
            // Erstkauf
            return evolution.cost;
        } else {
            // Upgrade: exponentiell teurer
            return evolution.cost * Math.pow(2, currentLevel);
        }
    }
    
    switchEvolution(direction) {
        // Wechsle zwischen Evolutionen (direction: 1 = nächste, -1 = vorherige)
        const availableEvolutions = this.getAvailableEvolutions();
        
        if (availableEvolutions.length <= 1) return; // Kein Wechsel nötig
        
        this.activeEvolutionIndex += direction;
        
        // Wrap-around
        if (this.activeEvolutionIndex < 0) {
            this.activeEvolutionIndex = availableEvolutions.length - 1;
        } else if (this.activeEvolutionIndex >= availableEvolutions.length) {
            this.activeEvolutionIndex = 0;
        }
        
        // Aktualisiere Anzeige
        this.updateEvolutionDisplay();
        
        const activeEvolution = availableEvolutions[this.activeEvolutionIndex];
        if (activeEvolution) {
            this.log(`Evolution gewechselt: ${activeEvolution.name}`, 'info');
        }
    }
    
    updateEvolutionDisplay() {
        const display = document.getElementById('activeEvolutionDisplay');
        if (!display) return;
        
        const availableEvolutions = this.getAvailableEvolutions();
        
        if (availableEvolutions.length === 0) {
            display.style.display = 'none';
            return;
        }
        
        display.style.display = 'block';
        const activeEvolution = availableEvolutions[this.activeEvolutionIndex];
        
        if (activeEvolution) {
            const evolutionInfo = document.getElementById('activeEvolutionInfo');
            if (evolutionInfo) {
                evolutionInfo.innerHTML = `
                    <span style="font-size: 1.5em; margin-right: 10px;">${activeEvolution.icon}</span>
                    <span style="font-weight: 600;">${activeEvolution.name} (Level ${activeEvolution.level}/5)</span>
                    ${availableEvolutions.length > 1 ? `<span style="color: #888; font-size: 0.9em; margin-left: 10px;">(${this.activeEvolutionIndex + 1}/${availableEvolutions.length})</span>` : ''}
                `;
            }
        }
    }
    
    useShot(level = 1) {
        // Stamina-Kosten: 5 - level (min 1)
        const staminaCost = Math.max(1, 5 - level);
        
        if (!this.tier || this.tier.currentStamina < staminaCost) return;
        
        // Verbrauche Stamina
        this.tier.currentStamina -= staminaCost;
        
        // Erstelle Projektil in Richtung der Bewegung
        const head = this.tier.segments[0];
        const angle = this.tier.angle;
        const projectile = new Projectile(head.x, head.y, angle, 8);
        this.projectiles.push(projectile);
        
        this.log(`Schuss abgefeuert! (${staminaCost} Stamina)`, 'success');
    }
    
    useShockwave(level = 1) {
        if (!this.tier || this.tier.currentStamina < 5) return;
        
        // Verbrauche 5 Stamina
        this.tier.currentStamina -= 5;
        
        // Finde alle Gegner in der Nähe (nicht nur kletternde)
        const head = this.tier.segments[0];
        let pushedCount = 0;
        // Radius: 150 + (level - 1) * 30 (linear)
        const shockwaveRadius = 150 + (level - 1) * 30;
        const shockwaveRadiusSquared = shockwaveRadius * shockwaveRadius;
        
        // Prüfe alle Jäger (rückwärts iterieren für sichere Entfernung)
        for (let i = this.hunters.length - 1; i >= 0; i--) {
            const hunter = this.hunters[i];
            if (!hunter || !hunter.segments || hunter.segments.length === 0) continue;
            
            // Berechne Entfernung zum Spieler-Kopf
            const hunterHead = hunter.getHeadPosition();
            const dx = hunterHead.x - head.x;
            const dy = hunterHead.y - head.y;
            const distanceSquared = dx * dx + dy * dy;
            
            if (distanceSquared <= shockwaveRadiusSquared) {
                // Berechne Richtung weg vom Spieler
                const distance = Math.sqrt(distanceSquared);
                    const angle = Math.atan2(dy, dx);
                
                // Berechne Kraft basierend auf Entfernung (näher = stärker)
                const normalizedDistance = distance / shockwaveRadius; // 0-1
                const forceMultiplier = 1.0 - normalizedDistance * 0.5; // 1.0 bei 0, 0.5 bei max Radius
                
                // Setze Geschwindigkeits-Vektoren (reduzierte Kraft)
                const baseForce = 40; // Reduzierte initiale Geschwindigkeit
                const force = baseForce * forceMultiplier;
                
                hunter.vx = Math.cos(angle) * force;
                hunter.vy = Math.sin(angle) * force;
                
                // Aktualisiere Kopf-Segment Position sofort
                if (hunter.segments && hunter.segments.length > 0) {
                    hunter.segments[0].x = hunter.headX;
                    hunter.segments[0].y = hunter.headY;
                }
                
                // Wenn Jäger klettert, lass ihn los
                if (hunter.isClimbing && hunter.climbingTargetIndex >= 0) {
                    hunter.isClimbing = false;
                    hunter.climbingTargetIndex = -1;
                    hunter.climbingProgress = 0;
                    hunter.climbCooldown = 60; // Cooldown bevor er wieder klettern kann
                    hunter.currentStamina = Math.max(0, hunter.currentStamina - 2); // Verliert auch etwas Stamina
                }
                
                    pushedCount++;
                }
            }
        
        // Prüfe auch Fat Hunters
        for (let i = this.fatHunters.length - 1; i >= 0; i--) {
            const fatHunter = this.fatHunters[i];
            if (!fatHunter || !fatHunter.segments || fatHunter.segments.length === 0) continue;
            
            // Berechne Entfernung zum Spieler-Kopf
            const fatHunterHead = fatHunter.getHeadPosition();
            const dx = fatHunterHead.x - head.x;
            const dy = fatHunterHead.y - head.y;
            const distanceSquared = dx * dx + dy * dy;
            
            if (distanceSquared <= shockwaveRadiusSquared) {
                // Berechne Richtung weg vom Spieler
                const distance = Math.sqrt(distanceSquared);
                const angle = Math.atan2(dy, dx);
                
                // Berechne Kraft basierend auf Entfernung (näher = stärker)
                const normalizedDistance = distance / shockwaveRadius; // 0-1
                const forceMultiplier = 1.0 - normalizedDistance * 0.5; // 1.0 bei 0, 0.5 bei max Radius
                
                // Setze Geschwindigkeits-Vektoren (reduzierte Kraft)
                const baseForce = 40; // Reduzierte initiale Geschwindigkeit
                const force = baseForce * forceMultiplier;
                
                fatHunter.vx = Math.cos(angle) * force;
                fatHunter.vy = Math.sin(angle) * force;
                
                // Aktualisiere Kopf-Segment Position sofort
                if (fatHunter.segments && fatHunter.segments.length > 0) {
                    fatHunter.segments[0].x = fatHunter.headX;
                    fatHunter.segments[0].y = fatHunter.headY;
                }
                
                pushedCount++;
            }
        }
        
        // Starte Shockwave-Animation
        this.shockwaveAnimation = {
            duration: 30, // 0.5 Sekunden
            radius: 0,
            maxRadius: shockwaveRadius,
            x: head.x,
            y: head.y
        };
        
        this.log(`Shockwave! ${pushedCount} Gegner weggeschleudert!`, 'success');
    }
    
    // Chunk-Koordinaten aus Welt-Koordinaten berechnen
    getChunkCoords(worldX, worldY) {
        const chunkX = Math.floor(worldX / this.chunkSize);
        const chunkY = Math.floor(worldY / this.chunkSize);
        return { x: chunkX, y: chunkY };
    }
    
    // Chunk-String für Set
    chunkKey(chunkX, chunkY) {
        return `${chunkX},${chunkY}`;
    }
    
    // Prüfe ob Chunk geladen ist
    isChunkLoaded(chunkX, chunkY) {
        return this.loadedChunks.has(this.chunkKey(chunkX, chunkY));
    }
    
    // Markiere Chunk als geladen
    loadChunk(chunkX, chunkY) {
        this.loadedChunks.add(this.chunkKey(chunkX, chunkY));
    }
    
    // Seeded Random Number Generator (für deterministische Generierung)
    seededRandom(seed) {
        let value = seed;
        return function() {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }
    
    // Prozedurale Generierung für einen Chunk
    generateChunk(chunkX, chunkY) {
        // Verwende deterministischen Seed basierend auf Chunk-Koordinaten
        const seed = chunkX * 73856093 ^ chunkY * 19349663;
        const rng = this.seededRandom(seed);
        
        // Generiere Tokens für diesen Chunk
        const tokensPerChunk = 5 + Math.floor(rng() * 8); // 5-12 Tokens pro Chunk (erhöht)
        const chunkWorldX = chunkX * this.chunkSize;
        const chunkWorldY = chunkY * this.chunkSize;
        
        for (let i = 0; i < tokensPerChunk; i++) {
            const tokenX = chunkWorldX + rng() * this.chunkSize;
            const tokenY = chunkWorldY + rng() * this.chunkSize;
            
            // 70% Food, 30% Stamina
            if (rng() < 0.7) {
                this.foods.push(new Food(tokenX, tokenY));
            } else {
                this.staminaTokens.push(new StaminaToken(tokenX, tokenY));
            }
        }
        
        // Generiere Hunters für diesen Chunk (mehr Hunters pro Chunk basierend auf Spielerlänge)
        const playerLength = this.tier ? this.tier.numSegments : 0;
        // Basis: 1-3 Hunters, zusätzlich +1 pro 10 Segmente bis Länge 100 (maximal +10 bei 100 Segmenten)
        // Ab Länge 100 (Bosse spawnen) bleibt die Anzahl konstant
        const effectiveLength = Math.min(playerLength, 100); // Stoppt bei 100
        const lengthBonus = Math.floor(effectiveLength / 10); // +1 pro 10 Segmente, maximal +10
        const baseHunters = 1 + Math.floor(rng() * 3); // 1-3 Basis-Hunters
        const huntersPerChunk = baseHunters + lengthBonus; // 1-13 Hunters pro Chunk (bei 100 Segmenten)
        
        for (let h = 0; h < huntersPerChunk; h++) {
            // Spawne Hunters immer, auch wenn Limits erreicht sind (für prozedurale Welt)
            // Entferne alte Hunters die zu weit weg sind, um Platz zu schaffen
            const hunterX = chunkWorldX + rng() * this.chunkSize;
            const hunterY = chunkWorldY + rng() * this.chunkSize;
            
            // Prüfe ob Elite Hunter spawnt werden können (nur ab 50 Segmenten)
            const playerLength = this.tier ? this.tier.numSegments : 0;
            const canSpawnElite = playerLength >= 50;
            
            // 50% Normal, 30% Fat, 20% Elite (wenn verfügbar)
            const hunterType = rng();
            if (hunterType < 0.5) {
                // Normale Hunter
                // Entferne alte Hunters die zu weit weg sind (aggressiveres Cleanup)
                if (this.hunters.length >= this.maxHunters) {
                    const maxDistance = this.chunkSize * 8; // 8 Chunks entfernt
                    let removed = 0;
                    for (let i = this.hunters.length - 1; i >= 0 && removed < 5; i--) {
                        const oldHunter = this.hunters[i];
                        const dx = oldHunter.headX - this.cameraX;
                        const dy = oldHunter.headY - this.cameraY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance > maxDistance) {
                            this.hunters.splice(i, 1);
                            removed++;
                        }
                    }
                }
                // Spawne neuen Hunter
                const hunter = new HunterCreature(hunterX, hunterY);
                hunter.isChasing = false; // Startet nicht verfolgend
                this.hunters.push(hunter);
            } else if (hunterType < 0.9) {
                // Fat Hunter
                // Entferne alte Fat Hunters die zu weit weg sind (aggressiveres Cleanup)
                if (this.fatHunters.length >= this.maxFatHunters) {
                    const maxDistance = this.chunkSize * 8; // 8 Chunks entfernt
                    let removed = 0;
                    for (let i = this.fatHunters.length - 1; i >= 0 && removed < 3; i--) {
                        const oldHunter = this.fatHunters[i];
                        const dx = oldHunter.headX - this.cameraX;
                        const dy = oldHunter.headY - this.cameraY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance > maxDistance) {
                            this.fatHunters.splice(i, 1);
                            removed++;
                        }
                    }
                }
                // Spawne neuen Fat Hunter
                this.fatHunters.push(new FatHunterCreature(hunterX, hunterY));
            } else if (canSpawnElite) {
                // Elite Hunter (nur wenn Spieler >= 50 Segmente) - Limit auf 1 pro Chunk
                // Prüfe ob bereits zu viele Elite Hunter vorhanden sind
                const eliteCount = this.hunters.filter(h => h.isElite).length;
                if (eliteCount >= 30) {
                    // Zu viele Elite Hunter - spawne normalen Hunter stattdessen
                    if (this.hunters.length >= this.maxHunters) {
                        const maxDistance = this.chunkSize * 8;
                        let removed = 0;
                        for (let i = this.hunters.length - 1; i >= 0 && removed < 5; i--) {
                            const oldHunter = this.hunters[i];
                            const dx = oldHunter.headX - this.cameraX;
                            const dy = oldHunter.headY - this.cameraY;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance > maxDistance) {
                                this.hunters.splice(i, 1);
                                removed++;
                            }
                        }
                    }
                    const hunter = new HunterCreature(hunterX, hunterY);
                    hunter.isChasing = false;
                    this.hunters.push(hunter);
            } else {
                    // Entferne alte Hunters die zu weit weg sind (aggressiveres Cleanup)
                if (this.hunters.length >= this.maxHunters) {
                        const maxDistance = this.chunkSize * 8;
                        let removed = 0;
                        for (let i = this.hunters.length - 1; i >= 0 && removed < 5; i--) {
                            const oldHunter = this.hunters[i];
                            const dx = oldHunter.headX - this.cameraX;
                            const dy = oldHunter.headY - this.cameraY;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance > maxDistance) {
                                this.hunters.splice(i, 1);
                                removed++;
                            }
                        }
                    }
                    // Spawne neuen Elite Hunter (isElite als Parameter übergeben)
                    const hunter = new HunterCreature(hunterX, hunterY, true);
                    hunter.isChasing = false;
                    this.hunters.push(hunter);
                    this.log(`Elite Hunter gespawnt in Chunk bei (${Math.floor(hunterX)}, ${Math.floor(hunterY)})`, 'error');
                }
            } else {
                // Fallback zu normalem Hunter wenn Elite nicht verfügbar
                if (this.hunters.length >= this.maxHunters) {
                    const maxDistance = this.chunkSize * 10;
                    for (let i = this.hunters.length - 1; i >= 0; i--) {
                        const oldHunter = this.hunters[i];
                        const dx = oldHunter.headX - this.cameraX;
                        const dy = oldHunter.headY - this.cameraY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance > maxDistance) {
                            this.hunters.splice(i, 1);
                            break;
                        }
                    }
                }
                const hunter = new HunterCreature(hunterX, hunterY);
                hunter.isChasing = false;
                this.hunters.push(hunter);
            }
        }
    }
    
    // Lade Chunks im sichtbaren Bereich
    updateChunks() {
        // Berechne sichtbaren Bereich in Welt-Koordinaten
        const viewLeft = this.cameraX - renderWidth / (2 * this.cameraZoom);
        const viewRight = this.cameraX + renderWidth / (2 * this.cameraZoom);
        const viewTop = this.cameraY - renderHeight / (2 * this.cameraZoom);
        const viewBottom = this.cameraY + renderHeight / (2 * this.cameraZoom);
        
        // Erweitere um Padding
        const padding = this.chunkSize * this.chunkPadding;
        const loadLeft = viewLeft - padding;
        const loadRight = viewRight + padding;
        const loadTop = viewTop - padding;
        const loadBottom = viewBottom + padding;
        
        // Berechne Chunk-Bereich
        const minChunkX = Math.floor(loadLeft / this.chunkSize);
        const maxChunkX = Math.floor(loadRight / this.chunkSize);
        const minChunkY = Math.floor(loadTop / this.chunkSize);
        const maxChunkY = Math.floor(loadBottom / this.chunkSize);
        
        // Lade neue Chunks
        let chunksLoaded = 0;
        for (let chunkX = minChunkX; chunkX <= maxChunkX; chunkX++) {
            for (let chunkY = minChunkY; chunkY <= maxChunkY; chunkY++) {
                if (!this.isChunkLoaded(chunkX, chunkY)) {
                    this.loadChunk(chunkX, chunkY);
                    this.generateChunk(chunkX, chunkY);
                    chunksLoaded++;
                }
            }
        }
        
        // Debug-Log nur wenn neue Chunks geladen wurden
        if (chunksLoaded > 0) {
            this.log(`Chunks geladen: ${chunksLoaded} - Foods: ${this.foods.length}, Hunters: ${this.hunters.length}, Fat: ${this.fatHunters.length}`, 'info');
        }
    }
    
    setupDebugLog() {
        const header = document.getElementById('debugLogHeader');
        const content = document.getElementById('debugLogContent');
        const panel = document.getElementById('debugLogPanel');
        const toggle = document.getElementById('debugLogToggle');
        const copyBtn = document.getElementById('copyLogBtn');
        const clearBtn = document.getElementById('clearLogBtn');
        const devModeBtn = document.getElementById('devModeBtn');
        
        // Toggle ausklappen/einklappen
        header.addEventListener('click', (e) => {
            if (e.target !== copyBtn && e.target !== clearBtn && e.target !== devModeBtn && 
                !copyBtn.contains(e.target) && !clearBtn.contains(e.target) && !devModeBtn.contains(e.target)) {
                panel.classList.toggle('collapsed');
            }
        });
        
        // Dev Mode Button
        devModeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showDevMode();
        });
        
        // Copy Log Button
        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const logText = this.debugLog.map(entry => {
                return `[${entry.timestamp}] [${entry.type.toUpperCase()}] ${entry.message}`;
            }).join('\n');
            
            navigator.clipboard.writeText(logText).then(() => {
                this.log('Log in Zwischenablage kopiert', 'success');
            }).catch(err => {
                this.log('Fehler beim Kopieren: ' + err, 'error');
            });
        });
        
        // Clear Log Button
        clearBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.debugLog = [];
            this.updateDebugLogDisplay();
            this.log('Log geleert', 'info');
        });
        
        // Dev Mode Tab Buttons
        const upgradesTab = document.getElementById('devModeUpgradesTab');
        const mutationsTab = document.getElementById('devModeMutationsTab');
        const upgradesContent = document.getElementById('devModeUpgradesContent');
        const mutationsContent = document.getElementById('devModeMutationsContent');
        
        upgradesTab.addEventListener('click', () => {
            upgradesTab.style.background = '#666666';
            mutationsTab.style.background = '#444444';
            upgradesContent.style.display = 'block';
            mutationsContent.style.display = 'none';
        });
        
        mutationsTab.addEventListener('click', () => {
            mutationsTab.style.background = '#666666';
            upgradesTab.style.background = '#444444';
            mutationsContent.style.display = 'block';
            upgradesContent.style.display = 'none';
            this.updateDevModeMutations();
        });
        
        // Dev Mode Close Button
        document.getElementById('devModeCloseBtn').addEventListener('click', () => {
            document.getElementById('devModeOverlay').style.display = 'none';
        });
        
        // Initial Log
        this.log('Spiel initialisiert', 'info');
    }
    
    showDevMode() {
        const overlay = document.getElementById('devModeOverlay');
        const upgradesList = document.getElementById('devModeUpgradesList');
        upgradesList.innerHTML = '';
        
        // Zeige alle Upgrades
        UPGRADES.forEach(upgrade => {
            const option = document.createElement('div');
            option.className = `upgrade-option upgrade-${upgrade.rarity.name}`;
            option.style.borderColor = upgrade.rarity.color;
            option.style.borderWidth = '3px';
            option.style.boxShadow = `0 0 15px ${upgrade.rarity.color}40`;
            option.style.cursor = 'pointer';
            
            const stacks = this.activeUpgrades[upgrade.id] || 0;
            
            option.innerHTML = `
                <div class="upgrade-icon">${upgrade.icon}</div>
                <div class="upgrade-name">${translateText(upgrade.name)}</div>
                <div class="upgrade-description">${translateText(upgrade.description)}</div>
                <div style="color: #aaaaaa; margin-top: 8px; font-size: 0.85em;">
                    ${t('stacks')}: ${stacks}
                </div>
                <div class="upgrade-rarity" style="color: ${upgrade.rarity.color}; margin-top: 8px; font-size: 0.85em; font-weight: 600;">
                    ${upgrade.rarity.name.toUpperCase()}
                </div>
            `;
            
            option.addEventListener('click', () => {
                this.applyDevModeUpgrade(upgrade);
            });
            
            upgradesList.appendChild(option);
        });
        
        overlay.style.display = 'flex';
    }
    
    applyDevModeUpgrade(upgrade) {
        // Upgrade anwenden
        if (upgrade.id.includes('regeneration')) {
            // Regeneration braucht Simulator-Referenz
            upgrade.apply(this);
        } else if (this.tier) {
            upgrade.apply(this.tier);
        }
        
        // Upgrade zu aktiven Upgrades hinzufügen
        if (!this.activeUpgrades[upgrade.id]) {
            this.activeUpgrades[upgrade.id] = 0;
        }
        this.activeUpgrades[upgrade.id]++;
        
        const stacks = this.activeUpgrades[upgrade.id];
        this.log(`[DEV MODE] Upgrade angewendet: ${upgrade.name} (${upgrade.rarity.name.toUpperCase()}) - Stack: ${stacks}`, 'success');
        
        // Upgrade-Anzeige aktualisieren
        this.updateUpgradeDisplay();
        
        // Dev Mode Liste aktualisieren
        this.showDevMode();
    }
    
    updateDevModeMutations() {
        const mutationsList = document.getElementById('devModeMutationsList');
        const currentLengthDisplay = document.getElementById('devModeCurrentLength');
        mutationsList.innerHTML = '';
        
        if (currentLengthDisplay && this.tier) {
            currentLengthDisplay.textContent = this.tier.numSegments;
        }
        
        // Zeige alle Mutationen
        MUTATIONS.forEach(mutation => {
            const option = document.createElement('div');
            option.className = `upgrade-option upgrade-${mutation.rarity.name}`;
            option.style.borderColor = mutation.rarity.color;
            option.style.borderWidth = '3px';
            option.style.boxShadow = `0 0 15px ${mutation.rarity.color}40`;
            
            const canAfford = this.tier && this.tier.numSegments >= mutation.cost;
            const stacks = this.activeMutations[mutation.id] || 0;
            
            if (!canAfford) {
                option.style.opacity = '0.5';
            } else {
                option.style.cursor = 'pointer';
            }
            
            option.innerHTML = `
                <div class="upgrade-icon">${mutation.icon}</div>
                <div class="upgrade-name">${translateText(mutation.name)}</div>
                <div class="upgrade-description">${translateText(mutation.description)}</div>
                <div style="color: ${canAfford ? '#ff6666' : '#ff0000'}; margin-top: 8px; font-weight: 600;">
                    ${t('cost')}: ${mutation.cost} ${t('segments')} ${canAfford ? '' : `(${t('notEnough')})`}
                </div>
                <div style="color: #aaaaaa; margin-top: 4px; font-size: 0.85em;">
                    ${t('stacks')}: ${stacks}
                </div>
                <div class="upgrade-rarity" style="color: ${mutation.rarity.color}; margin-top: 8px; font-size: 0.85em; font-weight: 600;">
                    ${mutation.rarity.name.toUpperCase()}
                </div>
            `;
            
            if (canAfford) {
                option.addEventListener('click', () => {
                    this.applyDevModeMutation(mutation);
                });
            }
            
            mutationsList.appendChild(option);
        });
    }
    
    applyDevModeMutation(mutation) {
        // Prüfe ob genug Segmente vorhanden sind
        if (!this.tier || this.tier.numSegments < mutation.cost) {
            this.log(`[DEV MODE] Nicht genug Segmente für ${mutation.name}! Benötigt: ${mutation.cost}, Vorhanden: ${this.tier ? this.tier.numSegments : 0}`, 'error');
            return;
        }
        
        // Entferne Segmente (Kosten)
        for (let i = 0; i < mutation.cost; i++) {
            if (this.tier.numSegments > 0) {
                this.tier.shrink();
            }
        }
        
        // Mutation zu aktiven Mutationen hinzufügen
        if (!this.activeMutations[mutation.id]) {
            this.activeMutations[mutation.id] = 0;
        }
        this.activeMutations[mutation.id]++;
        
        const stacks = this.activeMutations[mutation.id];
        this.log(`[DEV MODE] Mutation angewendet: ${mutation.name} (${mutation.rarity.name.toUpperCase()}) - Stack: ${stacks}, Kosten: ${mutation.cost} Segmente`, 'success');
        
        // Mutation-Anzeige aktualisieren
        this.updateUpgradeDisplay();
        this.updateScore();
        
        // Prüfe auf Game Over
        if (this.checkGameOver()) {
            return; // Spiel beendet
        }
        
        // Dev Mode Liste aktualisieren
        this.updateDevModeMutations();
    }
    
    log(message, type = 'info') {
        const timestamp = new Date().toLocaleTimeString('de-DE');
        const entry = {
            timestamp: timestamp,
            type: type, // info, warning, error, success
            message: message
        };
        
        this.debugLog.push(entry);
        
        // Begrenze auf maxLogEntries
        if (this.debugLog.length > this.maxLogEntries) {
            this.debugLog.shift(); // Entferne ältesten Eintrag
        }
        
        this.updateDebugLogDisplay();
    }
    
    updateDebugLogDisplay() {
        const entriesContainer = document.getElementById('debugLogEntries');
        entriesContainer.innerHTML = '';
        
        // Zeige nur die letzten Einträge (für Performance)
        const displayEntries = this.debugLog.slice(-50);
        
        displayEntries.forEach(entry => {
            const entryElement = document.createElement('div');
            entryElement.className = `debug-log-entry ${entry.type}`;
            entryElement.innerHTML = `
                <span class="timestamp">[${entry.timestamp}]</span>
                <span class="message">${entry.message}</span>
            `;
            entriesContainer.appendChild(entryElement);
        });
        
        // Scroll nach unten
        const content = document.getElementById('debugLogContent');
        content.scrollTop = content.scrollHeight;
    }
    
    setupControls() {
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');
        
        if (startBtn) {
            startBtn.addEventListener('click', () => this.start());
        }
        if (stopBtn) {
            stopBtn.addEventListener('click', () => this.stop());
        }
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.reset());
        }
        
        // Geschwindigkeits-Slider im Dev Mode
        const devModeSpeedSlider = document.getElementById('devModeSpeedSlider');
        const devModeSpeedValue = document.getElementById('devModeSpeedValue');
        
        if (devModeSpeedSlider && devModeSpeedValue) {
            devModeSpeedSlider.value = this.speed;
            devModeSpeedValue.textContent = this.speed.toFixed(1) + 'x';
            
            devModeSpeedSlider.addEventListener('input', (e) => {
                this.speed = parseFloat(e.target.value);
                devModeSpeedValue.textContent = this.speed.toFixed(1) + 'x';
            });
        }
        
        // Klick auf Canvas startet/restartet Spiel
        canvas.addEventListener('click', (e) => {
            if (!this.isRunning) {
                this.start();
            }
        });
        
        // Linker Mausklick: Stamina für Speed-Boost verwenden
        canvas.addEventListener('mousedown', (e) => {
            if (e.button === 0 && this.isRunning && this.tier) { // Linker Klick (button 0)
                this.tier.useStaminaForSpeedBoost();
            }
        });
        
        // Rechtsklick: Schuss oder Shockwave (je nach gekauften Evolutions)
        canvas.addEventListener('contextmenu', (e) => {
            if (this.isRunning && this.tier) {
                e.preventDefault(); // Verhindere Standard-Kontextmenü
                this.handleSpacebar();
            }
        });
        
        // Mausrad: Wechsle zwischen Evolutionen
        canvas.addEventListener('wheel', (e) => {
            const availableEvolutions = this.getAvailableEvolutions();
            if (this.isRunning && availableEvolutions.length > 1) {
                e.preventDefault();
                const direction = e.deltaY > 0 ? 1 : -1; // Scroll nach unten = nächste, nach oben = vorherige
                this.switchEvolution(direction);
            }
        });
        
        // Restart-Button für Game Over
        const restartBtn = document.getElementById('restartBtn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                document.getElementById('gameOverOverlay').style.display = 'none';
                this.reset();
                this.start();
            });
        }
        
        // Zurück zum Menü Button
        const backToMenuBtn = document.getElementById('backToMenuBtn');
        if (backToMenuBtn) {
            backToMenuBtn.addEventListener('click', () => {
                document.getElementById('gameOverOverlay').style.display = 'none';
                this.showMainMenu(false); // Kein Gold beim Game Over
            });
        }
        
        // Zurück zum Menü Button während des Spiels
        const backToMenuFromGameBtn = document.getElementById('backToMenuFromGameBtn');
        if (backToMenuFromGameBtn) {
            backToMenuFromGameBtn.addEventListener('click', () => {
                this.backToMenuFromGame();
            });
        }
        
        // Hauptmenü Buttons
        const startGameFromMenuBtn = document.getElementById('startGameFromMenuBtn');
        const viewHighscoreBtn = document.getElementById('viewHighscoreBtn');
        
        if (startGameFromMenuBtn) {
            startGameFromMenuBtn.addEventListener('click', () => {
                this.hideMainMenu();
                // Warte bis Container sichtbar ist und Canvas richtig initialisiert wurde
                // Verwende requestAnimationFrame für bessere Synchronisation
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        // Prüfe ob Canvas jetzt eine gültige Größe hat
                        if (canvas && canvas.getBoundingClientRect().width > 0) {
                            this.reset();
                            this.start();
                        } else {
                            // Noch nicht bereit, warte etwas länger
                            setTimeout(() => {
                                this.reset();
                                this.start();
                            }, 50);
                        }
                    });
                });
            });
        }
        
        if (viewHighscoreBtn) {
            viewHighscoreBtn.addEventListener('click', () => {
                this.hideMainMenu();
                // Zeige Highscore-Tab im rechten Panel
                const upgradesTabBtn = document.getElementById('upgradesTabBtn');
                const highscoreTabBtn = document.getElementById('highscoreTabBtn');
                const upgradesTabContent = document.getElementById('upgradesTabContent');
                const highscoreTabContent = document.getElementById('highscoreTabContent');
                
                if (upgradesTabBtn && highscoreTabBtn && upgradesTabContent && highscoreTabContent) {
                    highscoreTabBtn.classList.add('active');
                    upgradesTabBtn.classList.remove('active');
                    upgradesTabContent.style.display = 'none';
                    highscoreTabContent.style.display = 'block';
                    this.updateHighscoreDisplay();
                }
            });
        }
        
        // Highscore-Buttons
        const submitHighscoreBtn = document.getElementById('submitHighscoreBtn');
        const skipHighscoreBtn = document.getElementById('skipHighscoreBtn');
        const playerNameInput = document.getElementById('playerNameInput');
        
        if (submitHighscoreBtn) {
            submitHighscoreBtn.addEventListener('click', () => {
                const name = playerNameInput ? playerNameInput.value.trim() : '';
                this.saveHighscore(name, this.score, this.tier ? this.tier.numSegments : 0);
                document.getElementById('highscoreNameInput').style.display = 'none';
                document.getElementById('gameOverButtons').style.display = 'block';
            });
        }
        
        if (skipHighscoreBtn) {
            skipHighscoreBtn.addEventListener('click', () => {
                document.getElementById('highscoreNameInput').style.display = 'none';
                document.getElementById('gameOverButtons').style.display = 'block';
            });
        }
        
        if (playerNameInput) {
            playerNameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const name = playerNameInput.value.trim();
                    this.saveHighscore(name, this.score, this.tier ? this.tier.numSegments : 0);
                    document.getElementById('highscoreNameInput').style.display = 'none';
                    document.getElementById('gameOverButtons').style.display = 'block';
                }
            });
        }
        
        // Highscore/Upgrades Tab-Wechsel
        const upgradesTabBtn = document.getElementById('upgradesTabBtn');
        const highscoreTabBtn = document.getElementById('highscoreTabBtn');
        const upgradesTabContent = document.getElementById('upgradesTabContent');
        const highscoreTabContent = document.getElementById('highscoreTabContent');
        
        if (upgradesTabBtn && highscoreTabBtn && upgradesTabContent && highscoreTabContent) {
            upgradesTabBtn.addEventListener('click', () => {
                upgradesTabBtn.classList.add('active');
                highscoreTabBtn.classList.remove('active');
                upgradesTabContent.style.display = 'block';
                highscoreTabContent.style.display = 'none';
            });
            
            highscoreTabBtn.addEventListener('click', () => {
                highscoreTabBtn.classList.add('active');
                upgradesTabBtn.classList.remove('active');
                upgradesTabContent.style.display = 'none';
                highscoreTabContent.style.display = 'block';
                this.updateHighscoreDisplay();
            });
        }
        
        // Mausposition-Tracking für Mausfolge (speichere nur Canvas-Koordinaten)
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            this.lastMouseClientX = e.clientX - rect.left;
            this.lastMouseClientY = e.clientY - rect.top;
        });
        
        canvas.addEventListener('mouseenter', (e) => {
            this.isMouseOverCanvas = true;
            const rect = canvas.getBoundingClientRect();
            this.lastMouseClientX = e.clientX - rect.left;
            this.lastMouseClientY = e.clientY - rect.top;
        });
        
        canvas.addEventListener('mouseleave', () => {
            this.isMouseOverCanvas = false;
            // Behalte die letzten Mauskoordinaten, damit die Kreatur weiterhin dem letzten Ziel folgt
            // this.lastMouseClientX und this.lastMouseClientY bleiben erhalten
            // this.mouseX und this.mouseY bleiben ebenfalls erhalten
        });
    }
    
    drawBackground() {
        // Zeichne Hintergrund für den sichtbaren Bereich (prozedurale Welt)
        // Berechne sichtbaren Bereich in Welt-Koordinaten
        const viewLeft = this.cameraX - renderWidth / (2 * this.cameraZoom);
        const viewRight = this.cameraX + renderWidth / (2 * this.cameraZoom);
        const viewTop = this.cameraY - renderHeight / (2 * this.cameraZoom);
        const viewBottom = this.cameraY + renderHeight / (2 * this.cameraZoom);
        
        // Einfacher Hintergrund (dunkelgrau)
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(viewLeft - 100, viewTop - 100, viewRight - viewLeft + 200, viewBottom - viewTop + 200);
        
        // Optional: Prozedurale Details (z.B. kleine Punkte)
        ctx.fillStyle = '#2a2a2a';
        const seed = Math.floor(this.cameraX / 50) + Math.floor(this.cameraY / 50);
        const rng = this.seededRandom(seed);
        for (let i = 0; i < 20; i++) {
            const x = viewLeft + (viewRight - viewLeft) * rng();
            const y = viewTop + (viewBottom - viewTop) * rng();
            ctx.fillRect(Math.floor(x), Math.floor(y), 2, 2);
        }
    }
    
    spawnRandomHunters(count) {
        // Spawne Hunter knapp außerhalb des Sichtfeldes (procedural)
        if (!this.tier) return;
        
        const playerHead = this.tier.getHeadPosition();
        // Spawne in einem Ring knapp außerhalb des Sichtfeldes
        const minSpawnDistance = this.spawnZoneRadius * 0.9; // Knapp außerhalb
        const maxSpawnDistance = this.spawnZoneRadius * 1.3; // Maximaler Spawn-Radius
        
        for (let i = 0; i < count; i++) {
            // Spawne in einem Ring um den Spieler (knapp außerhalb des Sichtfeldes)
                const angle = Math.random() * Math.PI * 2;
            const distance = minSpawnDistance + Math.random() * (maxSpawnDistance - minSpawnDistance);
            const hunterX = playerHead.x + Math.cos(angle) * distance;
            const hunterY = playerHead.y + Math.sin(angle) * distance;
                    
                    // Zufällig entscheiden welche Hunter-Klasse spawnt
            const playerLength = this.tier ? this.tier.numSegments : 0;
            const canSpawnElite = playerLength >= 50; // Elite Hunter nur ab 50 Segmenten
            
                    const hunterType = Math.random();
                    if (hunterType < 0.6) {
                        // 60% normale Hunter
                        if (this.hunters.length < this.maxHunters) {
                            const hunter = new HunterCreature(hunterX, hunterY);
                            hunter.isChasing = false;
                            this.hunters.push(hunter);
                        }
            } else if (hunterType < 0.85 && canSpawnElite) {
                // 25% Elite Hunter (nur wenn Spieler >= 50 Segmente)
                        if (this.hunters.length < this.maxHunters) {
                    const hunter = new HunterCreature(hunterX, hunterY, true);
                            hunter.isChasing = false;
                            this.hunters.push(hunter);
                    this.log(`Elite Hunter gespawnt (spawnRandomHunters) bei (${Math.floor(hunterX)}, ${Math.floor(hunterY)})`, 'error');
                        }
                    } else {
                // 15% Fat Hunter (wenn noch Platz) oder normaler Hunter wenn Elite nicht verfügbar
                        if (this.fatHunters.length < this.maxFatHunters) {
                            this.fatHunters.push(new FatHunterCreature(hunterX, hunterY));
                        } else if (this.hunters.length < this.maxHunters) {
                    // Fallback zu normalem Hunter wenn maxFatHunters erreicht oder Elite nicht verfügbar
                            const hunter = new HunterCreature(hunterX, hunterY);
                            hunter.isChasing = false;
                            this.hunters.push(hunter);
                        }
                    }
                }
    }
    
    spawnTentacleCreatures(count) {
        // Spawne Tentakel-Kreaturen knapp außerhalb des Sichtfeldes (procedural)
        if (!this.tier) return;
        
        const playerHead = this.tier.getHeadPosition();
        const minSpawnDistance = this.spawnZoneRadius * 0.9;
        const maxSpawnDistance = this.spawnZoneRadius * 1.3;
        
        for (let i = 0; i < count; i++) {
            // Prüfe ob maximale Anzahl erreicht
            if (this.tentacleCreatures.length >= this.maxTentacleCreatures) {
                break;
            }
            
            // Spawne in einem Ring knapp außerhalb des Sichtfeldes
            const angle = Math.random() * Math.PI * 2;
            const distance = minSpawnDistance + Math.random() * (maxSpawnDistance - minSpawnDistance);
            const tentacleX = playerHead.x + Math.cos(angle) * distance;
            const tentacleY = playerHead.y + Math.sin(angle) * distance;
            
            // Spawne Tentakel-Kreatur
            const tentacleCreature = new TentacleCreature(tentacleX, tentacleY);
            this.tentacleCreatures.push(tentacleCreature);
        }
    }
    
    spawnTokenPool(centerX, centerY, poolSize = 4) {
        // Spawne einen Pool von Tokens (Food oder Stamina) an einer Position
        const poolType = Math.random(); // 50% Food-Pool, 50% Stamina-Pool
        const tokenCount = 3 + Math.floor(Math.random() * (poolSize - 2)); // 3-5 Tokens
        
        for (let i = 0; i < tokenCount; i++) {
            // Spawne Token in einem kleinen Radius um die Pool-Mitte
            const angle = (i / tokenCount) * Math.PI * 2 + Math.random() * 0.5;
            const distance = 15 + Math.random() * 20; // 15-35 Pixel Abstand
            const tokenX = centerX + Math.cos(angle) * distance;
            const tokenY = centerY + Math.sin(angle) * distance;
            
            if (poolType < 0.5) {
                // Food-Pool
                this.foods.push(new Food(tokenX, tokenY));
            } else {
                // Stamina-Token-Pool
                this.staminaTokens.push(new StaminaToken(tokenX, tokenY));
            }
        }
    }
    
    spawnFood() {
        // Spawne Futter an zufälliger Position in der Welt (nicht zu nah an der Schlange)
        let foodX, foodY;
        let validPosition = false;
        let attempts = 0;
        
        const playerHead = this.tier ? this.tier.getHeadPosition() : { x: this.cameraX, y: this.cameraY };
        
        while (!validPosition && attempts < 50) {
            // Spawne in der Nähe der Kamera (sichtbarer Bereich) - mit Zoom-Berücksichtigung
            const viewWidth = renderWidth / (this.cameraZoom || 1.0);
            const viewHeight = renderHeight / (this.cameraZoom || 1.0);
            foodX = this.cameraX + (Math.random() - 0.5) * viewWidth * 2.5;
            foodY = this.cameraY + (Math.random() - 0.5) * viewHeight * 2.5;
            
            // Prüfe ob Position zu nah an der Schlange oder anderen Foods ist
            let tooClose = false;
            if (this.tier) {
                const head = this.tier.getHeadPosition();
                const dx = foodX - head.x;
                const dy = foodY - head.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance <= 50) {
                    tooClose = true;
                }
            }
            
            // Prüfe Abstand zu anderen Foods
            if (!tooClose) {
                for (const existingFood of this.foods) {
                    const dx = foodX - existingFood.x;
                    const dy = foodY - existingFood.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 30) {
                        tooClose = true;
                        break;
                    }
                }
            }
            
            if (!tooClose) {
                validPosition = true;
            }
            attempts++;
        }
        
        this.foods.push(new Food(foodX, foodY));
        
        // Spawne auch einen Stamina-Token neben dem Food (30% Chance - weniger, da Pools existieren)
        if (Math.random() < 0.3) {
            this.spawnStaminaToken(foodX, foodY);
        }
    }
    
    spawnStaminaToken(nearX = null, nearY = null) {
        // Spawne Stamina-Token an zufälliger Position oder nah an Food
        let tokenX, tokenY;
        let validPosition = false;
        let attempts = 0;
        
        while (!validPosition && attempts < 50) {
            if (nearX !== null && nearY !== null) {
                // Spawne nah am Food (20-40 Pixel entfernt)
                const angle = Math.random() * Math.PI * 2;
                const distance = 20 + Math.random() * 20;
                tokenX = nearX + Math.cos(angle) * distance;
                tokenY = nearY + Math.sin(angle) * distance;
            } else {
                // Spawne in der Nähe der Kamera (sichtbarer Bereich)
                tokenX = this.cameraX + (Math.random() - 0.5) * renderWidth * 2;
                tokenY = this.cameraY + (Math.random() - 0.5) * renderHeight * 2;
            }
            
            // Prüfe ob Position zu nah an der Schlange oder anderen Tokens ist
            let tooClose = false;
            if (this.tier) {
                const head = this.tier.getHeadPosition();
                const dx = tokenX - head.x;
                const dy = tokenY - head.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance <= 50) {
                    tooClose = true;
                }
            }
            
            // Prüfe Abstand zu anderen Tokens und Foods
            if (!tooClose) {
                for (const existingToken of this.staminaTokens) {
                    const dx = tokenX - existingToken.x;
                    const dy = tokenY - existingToken.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 25) {
                        tooClose = true;
                        break;
                    }
                }
                for (const existingFood of this.foods) {
                    const dx = tokenX - existingFood.x;
                    const dy = tokenY - existingFood.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 25) {
                        tooClose = true;
                        break;
                    }
                }
            }
            
            // Keine Rand-Prüfung mehr - unendliche Welt
            
            if (!tooClose) {
                validPosition = true;
            }
            attempts++;
        }
        
        if (validPosition) {
            this.staminaTokens.push(new StaminaToken(tokenX, tokenY));
        }
    }
    
    checkFoodCollision() {
        if (!this.tier || this.foods.length === 0) return null;
        
        // Prüfe Kollision mit allen Segmenten (nicht nur Kopf)
        for (let i = 0; i < this.foods.length; i++) {
            const food = this.foods[i];
            
            // Prüfe alle Segmente des Spielers
            for (let segIndex = 0; segIndex < this.tier.segments.length; segIndex++) {
                const seg = this.tier.segments[segIndex];
                const progress = segIndex / (this.tier.segments.length - 1);
                
                // Berechne Körperbreite an dieser Position (wie beim Zeichnen)
                const curveCompression = 1.0 - Math.abs(this.tier.angularVelocity) * 0.2;
                let headWidth = 6;
                
                // Hammer Head Mutation: Kopf wird breiter
                if (this.activeMutations) {
                    const hammerHeadMutations = Object.keys(this.activeMutations).filter(id => id.includes('hammer_head'));
                    hammerHeadMutations.forEach(mutationId => {
                        const mutation = MUTATIONS.find(m => m.id === mutationId);
                        if (mutation) {
                            const stacks = this.activeMutations[mutationId];
                            headWidth *= (1 + (mutation.bonusPerStack * stacks / 100));
                        }
                    });
                }
                
                const tailWidth = 1;
                const widthFactor = Math.pow(1 - progress, 1.5);
                let bodyWidth = (headWidth * widthFactor + tailWidth * (1 - widthFactor)) * curveCompression;
                
                // Hungry Leech Mutation: Körper wird größer beim Essen (temporär)
                if (this.activeMutations) {
                    const hungryLeechMutations = Object.keys(this.activeMutations).filter(id => id.includes('hungry_leech'));
                    hungryLeechMutations.forEach(mutationId => {
                        const mutation = MUTATIONS.find(m => m.id === mutationId);
                        if (mutation && this.hungryLeechSizeBoost) {
                            const stacks = this.activeMutations[mutationId];
                            const maxBoost = mutation.bonusPerStack * stacks / 100;
                            bodyWidth *= (1 + this.hungryLeechSizeBoost * maxBoost);
                        }
                    });
                }
                
                // Kollisionsradius basierend auf Körperbreite (größerer Körper = größerer Radius)
                const collisionRadius = Math.max(8, bodyWidth * 1.2); // Mindestens 8, aber größer wenn Körper größer ist
                
                const dx = food.x - seg.x;
                const dy = food.y - seg.y;
                const distanceSquared = dx * dx + dy * dy;
                const collisionRadiusSquared = (collisionRadius + food.size) * (collisionRadius + food.size);
                
                if (distanceSquared < collisionRadiusSquared) {
                    return i; // Index des gefressenen Foods
                }
            }
        }
        return null;
    }
    
    checkStaminaTokenCollision() {
        if (!this.tier || this.staminaTokens.length === 0) return null;
        
        // Prüfe Kollision mit allen Segmenten (nicht nur Kopf)
        for (let i = 0; i < this.staminaTokens.length; i++) {
            const token = this.staminaTokens[i];
            
            // Prüfe alle Segmente des Spielers
            for (let segIndex = 0; segIndex < this.tier.segments.length; segIndex++) {
                const seg = this.tier.segments[segIndex];
                const progress = segIndex / (this.tier.segments.length - 1);
                
                // Berechne Körperbreite an dieser Position (wie beim Zeichnen)
                const curveCompression = 1.0 - Math.abs(this.tier.angularVelocity) * 0.2;
                let headWidth = 6;
                
                // Hammer Head Mutation: Kopf wird breiter
                if (this.activeMutations) {
                    const hammerHeadMutations = Object.keys(this.activeMutations).filter(id => id.includes('hammer_head'));
                    hammerHeadMutations.forEach(mutationId => {
                        const mutation = MUTATIONS.find(m => m.id === mutationId);
                        if (mutation) {
                            const stacks = this.activeMutations[mutationId];
                            headWidth *= (1 + (mutation.bonusPerStack * stacks / 100));
                        }
                    });
                }
                
                const tailWidth = 1;
                const widthFactor = Math.pow(1 - progress, 1.5);
                let bodyWidth = (headWidth * widthFactor + tailWidth * (1 - widthFactor)) * curveCompression;
                
                // Hungry Leech Mutation: Körper wird größer beim Essen (temporär)
                if (this.activeMutations) {
                    const hungryLeechMutations = Object.keys(this.activeMutations).filter(id => id.includes('hungry_leech'));
                    hungryLeechMutations.forEach(mutationId => {
                        const mutation = MUTATIONS.find(m => m.id === mutationId);
                        if (mutation && this.hungryLeechSizeBoost) {
                            const stacks = this.activeMutations[mutationId];
                            const maxBoost = mutation.bonusPerStack * stacks / 100;
                            bodyWidth *= (1 + this.hungryLeechSizeBoost * maxBoost);
                        }
                    });
                }
                
                // Kollisionsradius basierend auf Körperbreite (größerer Körper = größerer Radius)
                const collisionRadius = Math.max(8, bodyWidth * 1.2); // Mindestens 8, aber größer wenn Körper größer ist
                
                const dx = token.x - seg.x;
                const dy = token.y - seg.y;
                const distanceSquared = dx * dx + dy * dy;
                const collisionRadiusSquared = (collisionRadius + token.size) * (collisionRadius + token.size);
                
                if (distanceSquared < collisionRadiusSquared) {
                    return i; // Index des gefressenen Stamina-Tokens
                }
            }
        }
        return null;
    }
    
    updateScore() {
        const scoreValue = document.getElementById('scoreValue');
        if (scoreValue) {
            scoreValue.textContent = this.score;
        }
        
        // lengthValue wurde entfernt - wird jetzt nur noch in Player Stats angezeigt
        const lengthValue = document.getElementById('lengthValue');
        if (lengthValue && this.tier) {
            lengthValue.textContent = this.tier.numSegments;
        }
        
        // Aktualisiere auch Player Stats
        this.updatePlayerStats();
    }
    
    setupPerformanceMonitoring() {
        // P-Taste zum Toggle der Performance-Stats
        document.addEventListener('keydown', (e) => {
            if (e.key === 'p' || e.key === 'P') {
                if (this.isRunning) {
                    this.showPerformanceStats = !this.showPerformanceStats;
                    this.log(`Performance-Stats: ${this.showPerformanceStats ? 'AN' : 'AUS'}`, 'info');
                }
            }
        });
    }
    
    setupBackgroundMusic() {
        // Audio-Element und Lautstärke-Regler einrichten
        const backgroundMusic = document.getElementById('backgroundMusic');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeValue = document.getElementById('volumeValue');
        const volumeControl = document.getElementById('volumeControl');
        const volumeIcon = document.getElementById('volumeIcon');
        
        if (!backgroundMusic || !volumeSlider || !volumeValue || !volumeControl || !volumeIcon) {
            console.warn('Background Music Elemente nicht gefunden');
            return;
        }
        
        // Standard-Lautstärke: 7%
        const defaultVolume = 0.07;
        backgroundMusic.volume = defaultVolume;
        volumeSlider.value = defaultVolume * 100;
        volumeValue.textContent = Math.round(defaultVolume * 100) + '%';
        
        // Mute-Status (wird in localStorage gespeichert)
        this.isMusicMuted = false;
        const savedMuteState = localStorage.getItem('backgroundMusicMuted');
        if (savedMuteState === 'true') {
            this.isMusicMuted = true;
            backgroundMusic.volume = 0;
            volumeIcon.textContent = '🔇';
        }
        
        // Lautstärke-Regler Event
        volumeSlider.addEventListener('input', (e) => {
            const volume = parseInt(e.target.value) / 100;
            
            // Wenn Slider bewegt wird, unmute automatisch
            if (this.isMusicMuted && volume > 0) {
                this.isMusicMuted = false;
                volumeIcon.textContent = '🔊';
                localStorage.setItem('backgroundMusicMuted', 'false');
            }
            
            backgroundMusic.volume = this.isMusicMuted ? 0 : volume;
            volumeValue.textContent = e.target.value + '%';
            
            // Speichere Lautstärke in localStorage
            localStorage.setItem('backgroundMusicVolume', volume.toString());
        });
        
        // Mute/Unmute Toggle beim Klick auf Icon
        volumeIcon.addEventListener('click', () => {
            this.isMusicMuted = !this.isMusicMuted;
            
            if (this.isMusicMuted) {
                backgroundMusic.volume = 0;
                volumeIcon.textContent = '🔇';
            } else {
                const volume = parseInt(volumeSlider.value) / 100;
                backgroundMusic.volume = volume;
                volumeIcon.textContent = '🔊';
            }
            
            localStorage.setItem('backgroundMusicMuted', this.isMusicMuted.toString());
        });
        
        // Lade gespeicherte Lautstärke
        const savedVolume = localStorage.getItem('backgroundMusicVolume');
        if (savedVolume !== null) {
            const volume = parseFloat(savedVolume);
            volumeSlider.value = volume * 100;
            volumeValue.textContent = Math.round(volume * 100) + '%';
            
            // Nur Lautstärke setzen wenn nicht gemuted
            if (!this.isMusicMuted) {
                backgroundMusic.volume = volume;
            }
        }
        
        // Seamless Looping: Wenn Musik endet, starte sie neu
        backgroundMusic.addEventListener('ended', () => {
            backgroundMusic.currentTime = 0;
            backgroundMusic.play().catch(err => {
                console.warn('Musik konnte nicht automatisch abgespielt werden:', err);
            });
        });
        
        // Fehlerbehandlung
        backgroundMusic.addEventListener('error', (e) => {
            console.error('Fehler beim Laden der Background Music:', e);
            volumeControl.style.display = 'none'; // Verstecke Regler wenn Musik nicht geladen werden kann
        });
        
        // Speichere Referenz für später
        this.backgroundMusic = backgroundMusic;
        this.volumeControl = volumeControl;
        this.volumeIcon = volumeIcon;
    }
    
    startBackgroundMusic() {
        if (this.backgroundMusic) {
            // Versuche Musik abzuspielen (benötigt User-Interaktion)
            const playPromise = this.backgroundMusic.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Musik läuft
                        if (this.volumeControl) {
                            this.volumeControl.style.display = 'block';
                        }
                    })
                    .catch(error => {
                        // Autoplay wurde blockiert - warte auf User-Interaktion
                        console.log('Autoplay blockiert, warte auf User-Interaktion');
                        // Zeige Lautstärke-Regler trotzdem an
                        if (this.volumeControl) {
                            this.volumeControl.style.display = 'block';
                        }
                    });
            }
        }
    }
    
    stopBackgroundMusic() {
        if (this.backgroundMusic) {
            this.backgroundMusic.pause();
            this.backgroundMusic.currentTime = 0;
        }
    }
    
    updatePerformanceStats(frameStartTime) {
        const frameEndTime = performance.now();
        const totalFrameTime = frameEndTime - frameStartTime;
        
        // FPS-Berechnung (alle 60 Frames aktualisieren)
        this.performanceStats.frameCount++;
        if (this.performanceStats.frameCount >= 60) {
            const avgFrameTime = totalFrameTime / 60;
            this.performanceStats.fps = Math.round(1000 / avgFrameTime);
            this.performanceStats.frameCount = 0;
            
            // Warnung bei niedriger FPS
            if (this.performanceStats.fps < this.performanceWarningThreshold) {
                const counts = this.performanceStats.entityCounts;
                this.log(
                    `⚠️ PERFORMANCE WARNUNG: ${this.performanceStats.fps} FPS | ` +
                    `Update: ${this.performanceStats.updateTime.toFixed(2)}ms | ` +
                    `Draw: ${this.performanceStats.drawTime.toFixed(2)}ms | ` +
                    `Entities: H:${counts.hunters} F:${counts.fatHunters} T:${counts.tentacles} B:${counts.bosses} P:${counts.playerSegments} F:${counts.foods}`,
                    'warning'
                );
            }
        }
        
        // Zeichne Performance-Stats auf Canvas (wenn aktiviert)
        if (this.showPerformanceStats) {
            this.drawPerformanceStats();
        }
    }
    
    drawPerformanceStats() {
        // Zeichne ohne Kamera-Transformation (Bildschirm-Koordinaten)
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        
        const stats = this.performanceStats;
        const counts = stats.entityCounts;
        
        // Hintergrund
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(10, 10, 350, 200);
        
        // Text
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        
        let y = 20;
        ctx.fillText(`FPS: ${stats.fps} (Frame: ${stats.frameTime.toFixed(1)}ms)`, 20, y);
        y += 18;
        ctx.fillText(`Update: ${stats.updateTime.toFixed(2)}ms | Draw: ${stats.drawTime.toFixed(2)}ms`, 20, y);
        y += 18;
        ctx.fillText(`Slow Frames: ${stats.slowFrames}`, 20, y);
        y += 25;
        
        // Entity Counts
        ctx.fillStyle = '#ffff00';
        ctx.fillText('Entities:', 20, y);
        y += 18;
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`  Player Segments: ${counts.playerSegments}`, 20, y);
        y += 16;
        ctx.fillText(`  Hunters: ${counts.hunters} | Fat: ${counts.fatHunters}`, 20, y);
        y += 16;
        ctx.fillText(`  Tentacles: ${counts.tentacles} | Bosses: ${counts.bosses}`, 20, y);
        y += 16;
        ctx.fillText(`  Foods: ${counts.foods} | Projectiles: ${counts.projectiles}`, 20, y);
        y += 16;
        ctx.fillText(`  Particles: ${counts.particles}`, 20, y);
        
        ctx.restore();
    }
    
    updatePlayerStats() {
        // Länge
        const statsLength = document.getElementById('statsLength');
        if (statsLength && this.tier) {
            statsLength.textContent = this.tier.numSegments;
        }
        
        // Score
        const statsScore = document.getElementById('statsScore');
        if (statsScore) {
            statsScore.textContent = this.score;
        }
        
        // Geschwindigkeit
        const statsSpeed = document.getElementById('statsSpeed');
        if (statsSpeed && this.tier) {
            const speedMultiplier = (this.tier.staminaSpeedBoostActive || this.tier.staminaSpeedBoostAnimation) ? this.tier.staminaSpeedBoostMultiplier : 1.0;
            const baseSpeed = this.tier.speed || 1.0;
            const totalSpeed = baseSpeed * speedMultiplier;
            statsSpeed.textContent = totalSpeed.toFixed(2) + 'x';
        }
        
        // Drehgeschwindigkeit
        const statsTurnSpeed = document.getElementById('statsTurnSpeed');
        if (statsTurnSpeed && this.tier) {
            // Berechne relative Drehgeschwindigkeit (turnSpeed / originalTurnSpeed)
            const originalTurnSpeed = this.tier.originalTurnSpeed || 0.05;
            const currentTurnSpeed = this.tier.turnSpeed || 0.05;
            const turnSpeedMultiplier = currentTurnSpeed / originalTurnSpeed;
            statsTurnSpeed.textContent = turnSpeedMultiplier.toFixed(2) + 'x';
        }
        
        // Stamina
        const statsStamina = document.getElementById('statsStamina');
        if (statsStamina && this.tier) {
            statsStamina.textContent = `${this.tier.currentStamina}/${this.tier.maxStamina}`;
        }
        
        // Gold
        const statsGold = document.getElementById('statsGold');
        if (statsGold) {
            statsGold.textContent = this.gold || 0;
        }
        
        // Upgrades (Anzahl)
        const statsUpgrades = document.getElementById('statsUpgrades');
        if (statsUpgrades) {
            const upgradeCount = this.activeUpgrades ? Object.keys(this.activeUpgrades).length : 0;
            statsUpgrades.textContent = upgradeCount;
        }
        
        // Mutationen (Anzahl)
        const statsMutations = document.getElementById('statsMutations');
        if (statsMutations) {
            const mutationCount = this.activeMutations ? Object.keys(this.activeMutations).length : 0;
            statsMutations.textContent = mutationCount;
        }
        
        // Evolution
        const statsEvolution = document.getElementById('statsEvolution');
        if (statsEvolution) {
            const availableEvolutions = this.getAvailableEvolutions();
            if (availableEvolutions.length > 0) {
                const activeEvolution = availableEvolutions[this.activeEvolutionIndex];
                if (activeEvolution) {
                    statsEvolution.textContent = `${activeEvolution.name} Lv.${activeEvolution.level}`;
                } else {
                    statsEvolution.textContent = '-';
                }
            } else {
                statsEvolution.textContent = '-';
            }
        }
    }
    
    showUpgradeSelection() {
        // Pausiere das Spiel
        const wasRunning = this.isRunning;
        this.stop();
        this.pendingUpgrades = true;
        
        // Gewichtete Auswahl basierend auf Rarity
        const selectedUpgrades = [];
        const usedUpgradeIds = new Set();
        
        for (let i = 0; i < 3; i++) {
            // Erstelle gewichtete Liste aller verfügbaren Upgrades
            const weightedUpgrades = [];
            UPGRADES.forEach(upgrade => {
                if (!usedUpgradeIds.has(upgrade.id)) {
                    // Füge Upgrade mehrfach hinzu basierend auf Gewicht
                    for (let j = 0; j < upgrade.rarity.weight; j++) {
                        weightedUpgrades.push(upgrade);
                    }
                }
            });
            
            if (weightedUpgrades.length === 0) break;
            
            // Wähle zufällig aus gewichteter Liste
            const randomIndex = Math.floor(Math.random() * weightedUpgrades.length);
            const selected = weightedUpgrades[randomIndex];
            selectedUpgrades.push(selected);
            usedUpgradeIds.add(selected.id);
        }
        
        // Zeige Upgrade-Overlay
        const overlay = document.getElementById('upgradeOverlay');
        const optionsContainer = document.getElementById('upgradeOptions');
        optionsContainer.innerHTML = '';
        
        selectedUpgrades.forEach((upgrade, index) => {
            const option = document.createElement('div');
            option.className = `upgrade-option upgrade-${upgrade.rarity.name}`;
            option.style.borderColor = upgrade.rarity.color;
            option.style.borderWidth = '3px';
            option.style.boxShadow = `0 0 15px ${upgrade.rarity.color}40`;
            option.innerHTML = `
                <div class="upgrade-icon">${upgrade.icon}</div>
                <div class="upgrade-name">${translateText(upgrade.name)}</div>
                <div class="upgrade-description">${translateText(upgrade.description)}</div>
                <div class="upgrade-rarity" style="color: ${upgrade.rarity.color}; margin-top: 8px; font-size: 0.85em; font-weight: 600;">
                    ${upgrade.rarity.name.toUpperCase()}
                </div>
            `;
            option.addEventListener('click', () => {
                this.selectUpgrade(upgrade, wasRunning);
            });
            optionsContainer.appendChild(option);
        });
        
        overlay.style.display = 'flex';
    }
    
    selectUpgrade(upgrade, wasRunning) {
        // Upgrade anwenden
        if (upgrade.id.includes('regeneration')) {
            // Regeneration braucht Simulator-Referenz
            upgrade.apply(this);
        } else if (this.tier) {
            upgrade.apply(this.tier);
        }
        
        // Upgrade zu aktiven Upgrades hinzufügen
        if (!this.activeUpgrades[upgrade.id]) {
            this.activeUpgrades[upgrade.id] = 0;
        }
        this.activeUpgrades[upgrade.id]++;
        
        const stacks = this.activeUpgrades[upgrade.id];
        this.log(`Upgrade ausgewählt: ${upgrade.name} (${upgrade.rarity.name.toUpperCase()}) - Stack: ${stacks}`, 'success');
        
        // Fortschritt speichern
        this.saveProgress();
        
        // Upgrade-Anzeige aktualisieren
        this.updateUpgradeDisplay();
        
        // Overlay verstecken
        document.getElementById('upgradeOverlay').style.display = 'none';
        this.pendingUpgrades = false;
        
        // Spiel fortsetzen
        this.spawnFood();
        if (wasRunning) {
            this.isRunning = true;
            this.lastFrameTime = performance.now(); // Initialisiere Frame-Zeit für FPS-Limitierung
            this.animate();
        }
    }
    
    updateUpgradeDisplay() {
        const listContainer = document.getElementById('activeUpgradesList');
        listContainer.innerHTML = '';
        
        const activeUpgradeIds = Object.keys(this.activeUpgrades);
        const activeMutationIds = Object.keys(this.activeMutations);
        
        if (activeUpgradeIds.length === 0 && activeMutationIds.length === 0) {
            listContainer.innerHTML = `<div class="no-upgrades" id="noUpgradesText">${t('noUpgrades')}</div>`;
            return;
        }
        
        // Zeige Upgrades
        activeUpgradeIds.forEach(upgradeId => {
            const upgrade = UPGRADES.find(u => u.id === upgradeId);
            if (!upgrade) return;
            
            const stacks = this.activeUpgrades[upgradeId];
            const bonusTextRaw = upgrade.getBonusText ? upgrade.getBonusText(stacks) : upgrade.description;
            const bonusText = translateText(bonusTextRaw);
            
            const upgradeItem = document.createElement('div');
            upgradeItem.className = 'active-upgrade-item';
            upgradeItem.innerHTML = `
                <div class="upgrade-item-header">
                    <span class="upgrade-item-icon">${upgrade.icon}</span>
                    <span class="upgrade-item-name">${translateText(upgrade.name)}</span>
                    ${stacks > 1 ? `<span class="upgrade-stack">x${stacks}</span>` : ''}
                </div>
                <div class="upgrade-item-bonus">${bonusText}</div>
            `;
            listContainer.appendChild(upgradeItem);
        });
        
        // Zeige Mutationen (mit anderer Farbe/Markierung)
        activeMutationIds.forEach(mutationId => {
            const mutation = MUTATIONS.find(m => m.id === mutationId);
            if (!mutation) return;
            
            const stacks = this.activeMutations[mutationId];
            const bonusTextRaw = mutation.getBonusText ? mutation.getBonusText(stacks) : mutation.description;
            const bonusText = translateText(bonusTextRaw);
            
            const mutationItem = document.createElement('div');
            mutationItem.className = 'active-upgrade-item';
            mutationItem.style.borderLeft = `4px solid ${mutation.rarity.color}`;
            mutationItem.style.backgroundColor = 'rgba(157, 78, 221, 0.1)'; // Lila Hintergrund
            mutationItem.innerHTML = `
                <div class="upgrade-item-header">
                    <span class="upgrade-item-icon">${mutation.icon}</span>
                    <span class="upgrade-item-name" style="color: ${mutation.rarity.color};">${translateText(mutation.name)}</span>
                    ${stacks > 1 ? `<span class="upgrade-stack">x${stacks}</span>` : ''}
                    <span style="color: #ff6666; font-size: 0.8em; margin-left: 5px;">[${t('mutation')}]</span>
                </div>
                <div class="upgrade-item-bonus">${bonusText}</div>
            `;
            listContainer.appendChild(mutationItem);
        });
    }
    
    showMutationSelection() {
        // Pausiere das Spiel
        const wasRunning = this.isRunning;
        this.stop();
        this.pendingMutations = true;
        
        // Gewichtete Auswahl basierend auf Rarity
        const selectedMutations = [];
        const usedMutationIds = new Set();
        
        for (let i = 0; i < 3; i++) {
            // Erstelle gewichtete Liste aller verfügbaren Mutationen
            const weightedMutations = [];
            MUTATIONS.forEach(mutation => {
                if (!usedMutationIds.has(mutation.id)) {
                    // Prüfe ob Spieler genug Segmente hat
                    if (this.tier && this.tier.numSegments >= mutation.cost) {
                        // Füge Mutation mehrfach hinzu basierend auf Gewicht
                        for (let j = 0; j < mutation.rarity.weight; j++) {
                            weightedMutations.push(mutation);
                        }
                    }
                }
            });
            
            if (weightedMutations.length === 0) break;
            
            // Wähle zufällig aus gewichteter Liste
            const randomIndex = Math.floor(Math.random() * weightedMutations.length);
            const selected = weightedMutations[randomIndex];
            selectedMutations.push(selected);
            usedMutationIds.add(selected.id);
        }
        
        // Zeige Mutation-Overlay
        const overlay = document.getElementById('mutationOverlay');
        const optionsContainer = document.getElementById('mutationOptions');
        const currentLengthDisplay = document.getElementById('currentLengthDisplay');
        optionsContainer.innerHTML = '';
        
        if (currentLengthDisplay && this.tier) {
            currentLengthDisplay.textContent = this.tier.numSegments;
        }
        
        if (selectedMutations.length === 0) {
            // Keine Mutationen verfügbar (zu wenig Segmente)
            const noMutationsMsg = document.createElement('div');
            noMutationsMsg.style.textAlign = 'center';
            noMutationsMsg.style.color = '#ff6666';
            noMutationsMsg.style.padding = '20px';
            noMutationsMsg.textContent = t('notEnoughSegments');
            optionsContainer.appendChild(noMutationsMsg);
        } else {
            selectedMutations.forEach((mutation, index) => {
                const option = document.createElement('div');
                option.className = `upgrade-option upgrade-${mutation.rarity.name}`;
                option.style.borderColor = mutation.rarity.color;
                option.style.borderWidth = '3px';
                option.style.boxShadow = `0 0 15px ${mutation.rarity.color}40`;
                
                const canAfford = this.tier && this.tier.numSegments >= mutation.cost;
                if (!canAfford) {
                    option.style.opacity = '0.5';
                    option.style.cursor = 'not-allowed';
                }
                
                option.innerHTML = `
                    <div class="upgrade-icon">${mutation.icon}</div>
                    <div class="upgrade-name">${translateText(mutation.name)}</div>
                    <div class="upgrade-description">${translateText(mutation.description)}</div>
                    <div style="color: ${canAfford ? '#ff6666' : '#ff0000'}; margin-top: 8px; font-weight: 600;">
                        ${t('cost')}: ${mutation.cost} ${t('segments')} ${canAfford ? '' : `(${t('notEnough')})`}
                    </div>
                    <div class="upgrade-rarity" style="color: ${mutation.rarity.color}; margin-top: 8px; font-size: 0.85em; font-weight: 600;">
                        ${mutation.rarity.name.toUpperCase()}
                    </div>
                `;
                
                if (canAfford) {
                    option.addEventListener('click', () => {
                        this.selectMutation(mutation, wasRunning);
                    });
                }
                optionsContainer.appendChild(option);
            });
        }
        
        overlay.style.display = 'flex';
    }
    
    selectMutation(mutation, wasRunning) {
        // Prüfe ob genug Segmente vorhanden sind
        if (!this.tier || this.tier.numSegments < mutation.cost) {
            this.log(`Nicht genug Segmente für ${mutation.name}! Benötigt: ${mutation.cost}, Vorhanden: ${this.tier ? this.tier.numSegments : 0}`, 'error');
            return;
        }
        
        // Entferne Segmente (Kosten)
        for (let i = 0; i < mutation.cost; i++) {
            if (this.tier.numSegments > 0) {
                this.tier.shrink();
            }
        }
        
        // Mutation zu aktiven Mutationen hinzufügen
        if (!this.activeMutations[mutation.id]) {
            this.activeMutations[mutation.id] = 0;
        }
        this.activeMutations[mutation.id]++;
        
        const stacks = this.activeMutations[mutation.id];
        this.log(`Mutation ausgewählt: ${mutation.name} (${mutation.rarity.name.toUpperCase()}) - Stack: ${stacks}, Kosten: ${mutation.cost} Segmente`, 'success');
        this.log(`Aktive Mutationen: ${JSON.stringify(this.activeMutations)}`, 'info');
        
        // Fortschritt speichern
        this.saveProgress();
        
        // Mutation-Anzeige aktualisieren
        this.updateUpgradeDisplay();
        
        // Prüfe auf Game Over
        if (this.checkGameOver()) {
            return; // Spiel beendet
        }
        
        // Overlay verstecken
        document.getElementById('mutationOverlay').style.display = 'none';
        this.pendingMutations = false;
        
        // Spiel fortsetzen
        this.spawnFood();
        if (wasRunning) {
            this.isRunning = true;
            this.lastFrameTime = performance.now(); // Initialisiere Frame-Zeit für FPS-Limitierung
            this.animate();
        }
    }
    
    checkGameOver() {
        // Prüfe ob Spieler tot ist (Länge <= 0)
        if (this.tier && this.tier.numSegments <= 0) {
            this.showGameOver();
            return true;
        }
        return false;
    }
    
    showGameOver() {
        // Stoppe das Spiel
        this.stop();
        
        // KEIN Gold hinzufügen beim Game Over (nur beim manuellen Zurückkehren zum Menü)
        
        // Zeige Game Over Overlay
        const overlay = document.getElementById('gameOverOverlay');
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('finalLength').textContent = this.tier ? this.tier.numSegments : 0;
        
        // Prüfe ob Score in Top 100 kommt
        const highscores = this.getHighscores();
        const minScore = highscores.length < 100 ? 0 : highscores[highscores.length - 1].score;
        
        if (this.score > minScore) {
            // Zeige Namenseingabe
            document.getElementById('highscoreNameInput').style.display = 'block';
            document.getElementById('gameOverButtons').style.display = 'none';
            document.getElementById('playerNameInput').value = '';
            document.getElementById('playerNameInput').focus();
        } else {
            // Verstecke Namenseingabe
            document.getElementById('highscoreNameInput').style.display = 'none';
            document.getElementById('gameOverButtons').style.display = 'block';
        }
        
        overlay.style.display = 'flex';
    }
    
    showMainMenu(fromGame = false) {
        // Stoppe das Spiel
        this.stop();
        
        // Wenn vom Spiel zurückgekehrt (nicht vom Game Over), füge Gold hinzu
        if (fromGame && this.score > 0) {
            this.addGoldFromScore(this.score);
            // Score zurücksetzen nach Gold-Konvertierung
            this.score = 0;
            this.updateScore();
        }
        
        // Verstecke Game Container
        const gameContainer = document.getElementById('gameContainer');
        if (gameContainer) {
            gameContainer.style.display = 'none';
        }
        
        // Verstecke Game Over Overlay
        const gameOverOverlay = document.getElementById('gameOverOverlay');
        if (gameOverOverlay) {
            gameOverOverlay.style.display = 'none';
        }
        
        // Zeige Hauptmenü
        const mainMenuOverlay = document.getElementById('mainMenuOverlay');
        if (mainMenuOverlay) {
            mainMenuOverlay.style.display = 'flex';
        }
        
        // Prüfe ob bereits ein Name gespeichert ist
        const savedName = this.getPlayerName();
        if (savedName) {
            this.showGameSection(savedName);
        }
    }
    
    backToMenuFromGame() {
        // Zurück zum Menü vom Spiel aus (mit Gold-Belohnung)
        this.showMainMenu(true);
    }
    
    startLength50Animation() {
        // Starte Animation für Länge 50 Meilenstein (kleiner)
        this.length50Animation = {
            duration: 90, // 1.5 Sekunden bei 60 FPS (reduziert)
            phase: 0
        };
        
        // Spawne 2 Elite Hunter in der Nähe des Spielers nach kurzer Verzögerung
        setTimeout(() => {
            this.spawnEliteHuntersNearPlayer(2);
        }, 1500); // 1.5 Sekunden Verzögerung
    }
    
    drawLength50Animation() {
        if (!this.length50Animation) return;
        
        // Zeichne ohne Kamera-Transformation (Bildschirm-Koordinaten)
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset Transformation
        
        const progress = this.length50Animation.phase / this.length50Animation.duration;
        this.length50Animation.phase++;
        
        if (this.length50Animation.phase >= this.length50Animation.duration) {
            this.length50Animation = null;
            ctx.restore();
            return;
        }
        
        // Große pulsierende Animation in der Mitte
        const centerX = renderWidth / 2;
        const centerY = renderHeight / 2;
        
        // Hintergrund-Overlay (dunkel, leicht transparent)
        ctx.fillStyle = `rgba(0, 0, 0, ${0.7 * (1 - progress * 0.5)})`;
        ctx.fillRect(0, 0, renderWidth, renderHeight);
        
        // Kleinerer pulsierender Kreis
        const pulse = Math.sin(progress * Math.PI * 4) * 0.3 + 0.7;
        const circleRadius = 80 + pulse * 25; // Reduziert von 150+50 auf 80+25
        const circleAlpha = 1 - progress;
        
        // Äußerer Ring
        ctx.strokeStyle = `rgba(157, 78, 221, ${circleAlpha})`; // Lila für Elite
        ctx.lineWidth = 5; // Reduziert von 8
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Innerer Ring
        ctx.strokeStyle = `rgba(255, 215, 0, ${circleAlpha * 0.8})`; // Gold
        ctx.lineWidth = 3; // Reduziert von 5
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
        
        // Text "LÄNGE 50 ERREICHT!" (kleiner)
        ctx.fillStyle = `rgba(255, 255, 255, ${circleAlpha})`;
        ctx.font = 'bold 28px Arial'; // Reduziert von 48px
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Schatten
        ctx.fillStyle = `rgba(0, 0, 0, ${circleAlpha * 0.5})`;
        ctx.fillText('LÄNGE 50 ERREICHT!', centerX + 3, centerY - 3 + 3);
        
        // Haupttext
        ctx.fillStyle = `rgba(157, 78, 221, ${circleAlpha})`; // Lila
        ctx.fillText('LÄNGE 50 ERREICHT!', centerX, centerY - 3);
        
        // Untertitel
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = `rgba(255, 215, 0, ${circleAlpha})`; // Gold
        ctx.fillText('Elite Hunter erscheinen!', centerX, centerY + 40);
        
        ctx.restore();
    }
    
    spawnEliteHuntersNearPlayer(count) {
        if (!this.tier || !this.tier.segments || this.tier.segments.length === 0) return;
        
        const playerHead = this.tier.segments[0];
        const spawnDistance = 150; // Abstand vom Spieler
        const minDistance = 100; // Mindestabstand
        
        for (let i = 0; i < count; i++) {
            let attempts = 0;
            let validPosition = false;
            let hunterX, hunterY;
            
            while (!validPosition && attempts < 20) {
                // Zufälliger Winkel um den Spieler
                const angle = (Math.PI * 2 / count) * i + Math.random() * 0.5;
                const distance = spawnDistance + Math.random() * 50;
                
                hunterX = playerHead.x + Math.cos(angle) * distance;
                hunterY = playerHead.y + Math.sin(angle) * distance;
                
                // Prüfe Abstand zum Spieler
                const dx = hunterX - playerHead.x;
                const dy = hunterY - playerHead.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist >= minDistance) {
                    validPosition = true;
                }
                attempts++;
            }
            
            if (validPosition && this.hunters.length < this.maxHunters) {
                const hunter = new HunterCreature(hunterX, hunterY, true);
                hunter.isChasing = false; // Startet nicht verfolgend
                this.hunters.push(hunter);
                this.log(`Elite Hunter gespawnt bei Länge 50!`, 'error');
            }
        }
    }
    
    startLength100Animation() {
        // Starte Animation für Länge 100 Meilenstein (Boss erscheint) - kleiner
        this.length100Animation = {
            duration: 120, // 2 Sekunden bei 60 FPS (reduziert)
            phase: 0
        };
        
        // Spawne 3 Bosses in der Nähe des Spielers nach kurzer Verzögerung
        setTimeout(() => {
            this.spawnBosses(3);
        }, 2000); // 2 Sekunden Verzögerung
    }
    
    drawLength100Animation() {
        if (!this.length100Animation) return;
        
        // Zeichne ohne Kamera-Transformation (Bildschirm-Koordinaten)
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset Transformation
        
        const progress = this.length100Animation.phase / this.length100Animation.duration;
        this.length100Animation.phase++;
        
        if (this.length100Animation.phase >= this.length100Animation.duration) {
            this.length100Animation = null;
            ctx.restore();
            return;
        }
        
        // Große pulsierende Animation in der Mitte
        const centerX = renderWidth / 2;
        const centerY = renderHeight / 2;
        
        // Hintergrund-Overlay (dunkelrot, leicht transparent)
        ctx.fillStyle = `rgba(139, 0, 0, ${0.8 * (1 - progress * 0.5)})`;
        ctx.fillRect(0, 0, renderWidth, renderHeight);
        
        // Kleinerer pulsierender Kreis (rot)
        const pulse = Math.sin(progress * Math.PI * 4) * 0.3 + 0.7;
        const circleRadius = 100 + pulse * 30; // Reduziert von 180+60 auf 100+30
        const circleAlpha = 1 - progress;
        
        // Äußerer Ring (rot)
        ctx.strokeStyle = `rgba(139, 0, 0, ${circleAlpha})`; // Dunkelrot
        ctx.lineWidth = 6; // Reduziert von 10
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Innerer Ring (gelb - für Schwanz)
        ctx.strokeStyle = `rgba(255, 255, 0, ${circleAlpha * 0.9})`; // Gelb
        ctx.lineWidth = 4; // Reduziert von 6
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
        
        // Text "BOSS ERSCHEINT!" (kleiner)
        ctx.fillStyle = `rgba(255, 255, 255, ${circleAlpha})`;
        ctx.font = 'bold 32px Arial'; // Reduziert von 56px
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Schatten
        ctx.fillStyle = `rgba(0, 0, 0, ${circleAlpha * 0.5})`;
        ctx.fillText('BOSS ERSCHEINT!', centerX + 4, centerY - 4 + 4);
        
        // Haupttext
        ctx.fillStyle = `rgba(255, 0, 0, ${circleAlpha})`; // Rot
        ctx.fillText('BOSS ERSCHEINT!', centerX, centerY - 4);
        
        // Untertitel
        ctx.font = 'bold 28px Arial';
        ctx.fillStyle = `rgba(255, 255, 0, ${circleAlpha})`; // Gelb
        ctx.fillText('3 Bosses erscheinen! Besiege alle!', centerX, centerY + 50);
        
        ctx.restore();
    }
    
    spawnBosses(count) {
        if (!this.tier || !this.tier.segments || this.tier.segments.length === 0) {
            this.log('FEHLER: Kann Bosses nicht spawnen - Spieler nicht vorhanden!', 'error');
            return;
        }
        
        const playerHead = this.tier.segments[0];
        const spawnDistance = 200; // Näher am Spieler für bessere Sichtbarkeit
        
        // Spawne mehrere Bosses um den Spieler herum
        for (let i = 0; i < count; i++) {
            // Verteile Bosses in einem Kreis um den Spieler
            const angle = (Math.PI * 2 / count) * i + Math.PI; // Start gegenüber, dann gleichmäßig verteilt
            const bossX = playerHead.x + Math.cos(angle) * spawnDistance;
            const bossY = playerHead.y + Math.sin(angle) * spawnDistance;
            
            try {
                const boss = new BossCreature(bossX, bossY);
                this.bosses.push(boss);
                this.log(`Boss ${this.bosses.length} gespawnt bei (${Math.floor(bossX)}, ${Math.floor(bossY)})`, 'info');
            } catch (error) {
                this.log(`FEHLER beim Spawnen von Boss: ${error}`, 'error');
                console.error('Boss spawn error:', error);
            }
        }
        
        if (count > 0) {
            this.log(`${count} Boss(es) gespawnt! Gesamt: ${this.bosses.length} BOSSES!`, 'error');
        }
    }
    
    checkBossTailCollision() {
        if (this.bosses.length === 0 || !this.tier || !this.tier.segments || this.tier.segments.length === 0) return;
        
        const playerHead = this.tier.segments[0];
        const biteRange = 20; // Biss-Reichweite
        const biteRangeSquared = biteRange * biteRange;
        
        // Prüfe Kollision mit jedem Boss
        for (let bossIndex = this.bosses.length - 1; bossIndex >= 0; bossIndex--) {
            const boss = this.bosses[bossIndex];
            const tailSegments = boss.getTailSegments();
            
            // Prüfe Kollision mit jedem Schwanz-Segment dieses Bosses
            for (let i = 0; i < tailSegments.length; i++) {
                const tailSeg = tailSegments[i];
                const dx = playerHead.x - tailSeg.x;
                const dy = playerHead.y - tailSeg.y;
                const distSquared = dx * dx + dy * dy;
                
                if (distSquared <= biteRangeSquared) {
                    // Schwanz wurde gefressen! Boss stirbt sofort
                    this.bosses.splice(bossIndex, 1);
                    this.log(`Boss besiegt! Verbleibend: ${this.bosses.length}`, 'success');
                    
                    // Prüfe ob alle Bosses besiegt wurden
                    if (this.bosses.length === 0) {
                        this.defeatAllBosses();
                    }
                    
                    // Cooldown (verhindert mehrfaches Fressen in einem Frame)
                    return;
                }
            }
        }
    }
    
    checkBossHeadCollision() {
        if (this.bosses.length === 0 || !this.tier || !this.tier.segments || this.tier.segments.length === 0) return;
        
        const playerHead = this.tier.segments[0];
        const collisionRange = 25; // Kollisions-Reichweite für Boss-Kopf (größer wegen größerem Boss)
        const collisionRangeSquared = collisionRange * collisionRange;
        
        // Prüfe Kollision mit jedem Boss-Kopf
        for (let bossIndex = 0; bossIndex < this.bosses.length; bossIndex++) {
            const boss = this.bosses[bossIndex];
            
            // Prüfe ob Cooldown aktiv ist
            if (boss.damageCooldown > 0) continue;
            
            // Prüfe ob Boss Segmente hat
            if (!boss.segments || boss.segments.length === 0) continue;
            
            const bossHead = boss.segments[0];
            const dx = playerHead.x - bossHead.x;
            const dy = playerHead.y - bossHead.y;
            const distSquared = dx * dx + dy * dy;
            
            if (distSquared <= collisionRangeSquared) {
                // Boss-Kopf berührt Spieler - 10 Schaden!
                const damageAmount = boss.damageAmount || 10;
                
                // Entferne Segmente vom Spieler
                for (let i = 0; i < damageAmount && this.tier.numSegments > 1; i++) {
                    this.tier.shrink();
                }
                
                // Cooldown setzen (2 Sekunden = 120 Frames bei 60 FPS)
                boss.damageCooldown = 120;
                
                // Damage-Flash starten
                this.damageFlash = 20;
                
                // Große Blut-Animation starten
                this.startBloodAnimation(playerHead.x, playerHead.y);
                
                // Log
                this.log(`Boss-Kopf berührt! -${damageAmount} Segmente!`, 'error');
                
                // Prüfe auf Game Over
                if (this.checkGameOver()) {
                    return; // Spiel beendet
                }
                
                this.updateScore();
            }
        }
    }
    
    startBloodAnimation(x, y) {
        // Starte große Blut-Animation bei Schaden
        const particleCount = 50; // Viele Blutpartikel für dramatischen Effekt
        
        const particles = [];
        for (let i = 0; i < particleCount; i++) {
            // Zufällige Richtung und Geschwindigkeit
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 6; // 2-8 Pixel pro Frame
            const size = 3 + Math.random() * 5; // 3-8 Pixel Größe
            
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: size,
                lifetime: 30 + Math.random() * 20, // 30-50 Frames
                color: Math.random() > 0.3 ? '#8b0000' : '#ff0000' // Meist dunkelrot, manchmal hellrot
            });
        }
        
        this.bloodAnimation = {
            duration: 60, // 1 Sekunde bei 60 FPS
            phase: 0,
            x: x,
            y: y,
            particles: particles
        };
    }
    
    drawBloodAnimation() {
        if (!this.bloodAnimation) return;
        
        ctx.save();
        ctx.imageSmoothingEnabled = false;
        
        // Zeichne alle Blut-Partikel
        for (let i = 0; i < this.bloodAnimation.particles.length; i++) {
            const particle = this.bloodAnimation.particles[i];
            
            // Alpha basierend auf verbleibender Lebenszeit
            const alpha = particle.lifetime / 50;
            
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = alpha;
            
            // Zeichne Blut-Tropfen (elliptisch für realistischeren Effekt)
            ctx.beginPath();
            ctx.ellipse(
                Math.floor(particle.x),
                Math.floor(particle.y),
                particle.size,
                particle.size * 0.7,
                0,
                0,
                Math.PI * 2
            );
            ctx.fill();
            
            // Zusätzliche kleine Tropfen für mehr Realismus
            if (particle.size > 2) {
                ctx.beginPath();
                ctx.arc(
                    Math.floor(particle.x + particle.size * 0.5),
                    Math.floor(particle.y + particle.size * 0.5),
                    particle.size * 0.3,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
        }
        
        // Großer zentraler Blutspritzer (nur am Anfang)
        if (this.bloodAnimation.phase < 10) {
            const progress = this.bloodAnimation.phase / 10;
            const size = 40 * (1 - progress);
            const alpha = 1 - progress;
            
            ctx.globalAlpha = alpha;
            ctx.fillStyle = '#8b0000';
            
            // Großer zentraler Spritzer
            ctx.beginPath();
            ctx.arc(
                Math.floor(this.bloodAnimation.x),
                Math.floor(this.bloodAnimation.y),
                size,
                0,
                Math.PI * 2
            );
            ctx.fill();
            
            // Zusätzliche Spritzer-Richtungen
            for (let i = 0; i < 8; i++) {
                const angle = (Math.PI * 2 / 8) * i;
                const dist = size * 0.7;
                const spritzX = this.bloodAnimation.x + Math.cos(angle) * dist;
                const spritzY = this.bloodAnimation.y + Math.sin(angle) * dist;
                
                ctx.beginPath();
                ctx.ellipse(
                    Math.floor(spritzX),
                    Math.floor(spritzY),
                    size * 0.3,
                    size * 0.2,
                    angle,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
        }
        
        ctx.globalAlpha = 1.0;
        ctx.restore();
    }
    
    defeatAllBosses() {
        // Alle Bosses besiegt!
        this.log('ALLE BOSSES BESIEGT! Level geschafft!', 'success');
        
        // Starte Win-Animation
        this.winAnimation = {
            duration: 300, // 5 Sekunden bei 60 FPS
            phase: 0
        };
        
        // Nach Animation zurück zum Menü
        setTimeout(() => {
            this.showMainMenu(true); // Mit Gold-Belohnung
        }, 5000);
    }
    
    drawBossDirectionIndicators() {
        // Zeichne Richtungsindikatoren für Bosses außerhalb des Viewports (mit Kamera-Transformation)
        // Diese Funktion wird nicht verwendet, da drawBossDirectionIndicatorsScreen verwendet wird
        // Aber sie wird aufgerufen, also leere Implementierung
    }
    
    drawBossDirectionIndicatorsScreen() {
        // Zeichne Richtungsindikatoren am Bildschirm-Rand (ohne Kamera-Transformation)
        if (this.bosses.length === 0) return;
        
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset Transformation
        
        const viewLeft = this.cameraX - renderWidth / (2 * this.cameraZoom);
        const viewRight = this.cameraX + renderWidth / (2 * this.cameraZoom);
        const viewTop = this.cameraY - renderHeight / (2 * this.cameraZoom);
        const viewBottom = this.cameraY + renderHeight / (2 * this.cameraZoom);
        
        const margin = 30; // Abstand vom Rand
        
        for (let i = 0; i < this.bosses.length; i++) {
            const boss = this.bosses[i];
            if (!boss || !boss.segments || boss.segments.length === 0) continue;
            
            const bossHead = boss.segments[0];
            
            // Prüfe ob Boss außerhalb des Viewports ist
            if (bossHead.x < viewLeft || bossHead.x > viewRight || 
                bossHead.y < viewTop || bossHead.y > viewBottom) {
                
                // Berechne Position am Bildschirm-Rand
                let screenX = renderWidth / 2;
                let screenY = renderHeight / 2;
                
                // Berechne Winkel vom Viewport-Zentrum zum Boss
                const centerX = this.cameraX;
                const centerY = this.cameraY;
                const dx = bossHead.x - centerX;
                const dy = bossHead.y - centerY;
                const angle = Math.atan2(dy, dx);
                
                // Berechne Schnittpunkt mit Bildschirm-Rand
                const halfWidth = renderWidth / 2;
                const halfHeight = renderHeight / 2;
                
                // Prüfe welche Seite des Bildschirms
                const tanAngle = Math.tan(angle);
                
                if (Math.abs(dx) > Math.abs(dy)) {
                    // Links oder rechts
                    if (dx > 0) {
                        // Rechts
                        screenX = renderWidth - margin;
                        screenY = renderHeight / 2 + tanAngle * halfWidth;
                    } else {
                        // Links
                        screenX = margin;
                        screenY = renderHeight / 2 - tanAngle * halfWidth;
                    }
                } else {
                    // Oben oder unten
                    if (dy > 0) {
                        // Unten
                        screenY = renderHeight - margin;
                        screenX = renderWidth / 2 + (dx / dy) * halfHeight;
                    } else {
                        // Oben
                        screenY = margin;
                        screenX = renderWidth / 2 - (dx / dy) * halfHeight;
                    }
                }
                
                // Begrenze auf Bildschirm
                screenX = Math.max(margin, Math.min(renderWidth - margin, screenX));
                screenY = Math.max(margin, Math.min(renderHeight - margin, screenY));
                
                // Zeichne roten Richtungspfeil
                ctx.strokeStyle = '#ff0000';
                ctx.fillStyle = '#ff0000';
                ctx.lineWidth = 4;
                
                const arrowSize = 20;
                ctx.beginPath();
                ctx.moveTo(screenX, screenY);
                ctx.lineTo(
                    screenX + Math.cos(angle) * arrowSize,
                    screenY + Math.sin(angle) * arrowSize
                );
                ctx.stroke();
                
                // Pfeilspitze
                ctx.beginPath();
                ctx.moveTo(
                    screenX + Math.cos(angle) * arrowSize,
                    screenY + Math.sin(angle) * arrowSize
                );
                ctx.lineTo(
                    screenX + Math.cos(angle) * arrowSize - Math.cos(angle - Math.PI / 6) * 10,
                    screenY + Math.sin(angle) * arrowSize - Math.sin(angle - Math.PI / 6) * 10
                );
                ctx.lineTo(
                    screenX + Math.cos(angle) * arrowSize - Math.cos(angle + Math.PI / 6) * 10,
                    screenY + Math.sin(angle) * arrowSize - Math.sin(angle + Math.PI / 6) * 10
                );
                ctx.closePath();
                ctx.fill();
                
                // Kleiner roter Kreis als Marker
                ctx.fillStyle = '#ff0000';
                ctx.beginPath();
                ctx.arc(screenX, screenY, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore();
    }
    
    drawWinAnimation() {
        if (!this.winAnimation) return;
        
        // Zeichne ohne Kamera-Transformation (Bildschirm-Koordinaten)
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset Transformation
        
        const progress = this.winAnimation.phase / this.winAnimation.duration;
        this.winAnimation.phase++;
        
        if (this.winAnimation.phase >= this.winAnimation.duration) {
            this.winAnimation = null;
            ctx.restore();
            return;
        }
        
        // Große Win-Animation in der Mitte
        const centerX = renderWidth / 2;
        const centerY = renderHeight / 2;
        
        // Hintergrund-Overlay (gold, leicht transparent)
        ctx.fillStyle = `rgba(255, 215, 0, ${0.6 * (1 - progress * 0.3)})`;
        ctx.fillRect(0, 0, renderWidth, renderHeight);
        
        // Großer pulsierender Kreis (gold)
        const pulse = Math.sin(progress * Math.PI * 6) * 0.3 + 0.7;
        const circleRadius = 200 + pulse * 80;
        const circleAlpha = 1 - progress * 0.5;
        
        // Äußerer Ring (gold)
        ctx.strokeStyle = `rgba(255, 215, 0, ${circleAlpha})`; // Gold
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Innerer Ring (weiß)
        ctx.strokeStyle = `rgba(255, 255, 255, ${circleAlpha * 0.9})`; // Weiß
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
        
        // Text "LEVEL GESCHAFFT!"
        ctx.fillStyle = `rgba(255, 255, 255, ${circleAlpha})`;
        ctx.font = 'bold 64px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Schatten
        ctx.fillStyle = `rgba(0, 0, 0, ${circleAlpha * 0.5})`;
        ctx.fillText('LEVEL GESCHAFFT!', centerX + 5, centerY - 5 + 5);
        
        // Haupttext
        ctx.fillStyle = `rgba(255, 215, 0, ${circleAlpha})`; // Gold
        ctx.fillText('LEVEL GESCHAFFT!', centerX, centerY - 5);
        
        // Untertitel
        ctx.font = 'bold 32px Arial';
        ctx.fillStyle = `rgba(255, 255, 255, ${circleAlpha})`; // Weiß
        ctx.fillText('Boss besiegt!', centerX, centerY + 60);
        
        ctx.restore();
    }
    
    hideMainMenu() {
        // Verstecke Hauptmenü
        const mainMenuOverlay = document.getElementById('mainMenuOverlay');
        if (mainMenuOverlay) {
            mainMenuOverlay.style.display = 'none';
        }
        
        // Zeige Game Container
        const gameContainer = document.getElementById('gameContainer');
        if (gameContainer) {
            gameContainer.style.display = 'flex';
            
            // Stelle sicher, dass Canvas initialisiert ist
            if (!canvas || !ctx) {
                initCanvas();
            }
            
            // Stelle sicher, dass Canvas sichtbar ist
            if (canvas) {
                canvas.style.display = 'block';
            }
            
            // Warte bis Browser das Layout aktualisiert hat, dann resize Canvas
            // Mehrfaches requestAnimationFrame stellt sicher, dass das Layout vollständig aktualisiert wurde
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        resizeCanvas();
                        // Stelle sicher, dass Canvas eine gültige Größe hat
                        if (canvas && (canvas.width === 0 || canvas.height === 0)) {
                            // Fallback: Verwende CSS-Größe
                            const rect = canvas.getBoundingClientRect();
                            if (rect.width > 0 && rect.height > 0) {
                                resizeCanvas();
                            }
                        }
                    });
                });
            });
        }
    }
    
    getHighscores() {
        const stored = localStorage.getItem('leechHighscores');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                return [];
            }
        }
        return [];
    }
    
    saveHighscore(name, score, length) {
        const highscores = this.getHighscores();
        const playerName = name || 'Anonymous';
        
        // Prüfe ob Name bereits existiert (case-insensitive)
        const existingIndex = highscores.findIndex(hs => hs.name.toLowerCase() === playerName.toLowerCase());
        
        if (existingIndex !== -1) {
            // Name existiert bereits - aktualisiere nur wenn neuer Score höher ist
            const existingScore = highscores[existingIndex].score;
            if (score > existingScore) {
                highscores[existingIndex] = {
                    name: playerName,
                    score: score,
                    length: length,
                    date: new Date().toISOString()
                };
            } else {
                // Neuer Score ist nicht höher - nichts tun
                this.updateHighscoreDisplay();
                return;
            }
        } else {
            // Neuer Name - füge hinzu
        highscores.push({
                name: playerName,
            score: score,
            length: length,
            date: new Date().toISOString()
        });
        }
        
        // Sortiere nach Score (höchster zuerst)
        highscores.sort((a, b) => b.score - a.score);
        
        // Behalte nur Top 100
        if (highscores.length > 100) {
            highscores.splice(100);
        }
        
        localStorage.setItem('leechHighscores', JSON.stringify(highscores));
        this.updateHighscoreDisplay();
    }
    
    updateHighscoreDisplay() {
        const highscoreList = document.getElementById('highscoreList');
        if (!highscoreList) return;
        
        const highscores = this.getHighscores();
        
        if (highscores.length === 0) {
            highscoreList.innerHTML = `<div class="no-upgrades">${t('noHighscores')}</div>`;
            return;
        }
        
        highscoreList.innerHTML = highscores.map((entry, index) => {
            const rank = index + 1;
            let rankClass = '';
            if (rank === 1) rankClass = 'rank-1';
            else if (rank === 2) rankClass = 'rank-2';
            else if (rank === 3) rankClass = 'rank-3';
            
            return `
                <div class="highscore-entry ${rankClass}">
                    <span class="highscore-rank">#${rank}</span>
                    <span class="highscore-name">${entry.name}</span>
                    <span class="highscore-score">${entry.score}</span>
                    <span class="highscore-length">${entry.length}</span>
                </div>
            `;
        }).join('');
    }
    
    stop() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.stopBackgroundMusic(); // Stoppe Background Music
        this.log('Spiel gestoppt', 'warning');
    }
    
    reset() {
        this.stop();
            // Canvas-Größe aktualisiert (keine Weltgröße mehr nötig - prozedural)
        
        // Alle Foods und Stamina-Token entfernen
        this.foods = [];
        this.staminaTokens = [];
        this.projectiles = []; // Projektil-Array leeren
        this.shockwaveAnimation = null; // Shockwave-Animation zurücksetzen
        this.bloodAnimation = null; // Blut-Animation zurücksetzen
        this.length50Animation = null; // Länge 50 Animation zurücksetzen
        this.length50MilestoneReached = false; // Meilenstein-Flag zurücksetzen
        this.length100Animation = null; // Länge 100 Animation zurücksetzen
        this.length100MilestoneReached = false; // Länge 100 Flag zurücksetzen
        this.bosses = []; // Bosses zurücksetzen
        this.bossSpawnCheckTimer = 0; // Boss-Spawn-Check-Timer zurücksetzen
        this.winAnimation = null; // Win-Animation zurücksetzen
        this.activeEvolutionIndex = 0; // Evolution-Index zurücksetzen
        
        // Spieler bei (0, 0)
        const startX = 0;
        const startY = 0;
        this.tier = new RainWorldTier(startX, startY);
        // Anker-Position aktualisieren (für Bewegungsradius)
        this.tier.anchorX = startX;
        this.tier.anchorY = startY;
        // Kamera auf Spieler setzen
        this.cameraX = startX;
        this.cameraY = startY;
        this.cameraZoom = 1.0; // Zoom zurücksetzen
        
        // Jäger zurücksetzen
        this.hunters = [];
        this.fatHunters = [];
        this.tokenPoolSpawnTimer = 0;
        this.nearbyHunterSpawnTimer = 0;
        this.lastFrameTime = 0; // Frame-Zeit zurücksetzen
        
        // Initiale Chunks laden (um Startposition) - generiert auch Hunters
        this.loadedChunks.clear();
        this.updateChunks();
        
        this.score = 0;
        this.foodCount = 0;
        this.mutationCount = 0;
        this.log('Spiel zurückgesetzt', 'info');
        this.pendingUpgrades = false;
        this.pendingMutations = false;
        this.extraFoodChance = 0;
        this.activeUpgrades = {};
        this.activeMutations = {};
        this.hungryLeechSizeBoost = 0;
        this.lastHungryLeechLog = 0;
        document.getElementById('upgradeOverlay').style.display = 'none';
        document.getElementById('mutationOverlay').style.display = 'none';
        this.updateScore();
        this.updateUpgradeDisplay();
        // Spawne initiale Tokens (zusätzlich zu Chunk-Generierung)
        for (let i = 0; i < 5; i++) {
            this.spawnFood();
        }
        this.draw();
    }
    
    start() {
        if (!this.isRunning) {
            // Stelle sicher, dass Canvas initialisiert ist
            if (!canvas || !ctx) {
                initCanvas();
            }
            
            // Stelle sicher, dass Canvas sichtbar ist
            if (canvas) {
                canvas.style.display = 'block';
            }
            
            const gameContainer = document.getElementById('gameContainer');
            // Prüfe ob Container sichtbar ist, bevor wir resizeCanvas aufrufen
            if (gameContainer && gameContainer.style.display !== 'none' && gameContainer.offsetWidth > 0) {
                // Warte kurz, dann resize
                requestAnimationFrame(() => {
                    resizeCanvas();
            // Canvas-Größe aktualisiert (keine Weltgröße mehr nötig - prozedural)
                });
            } else {
            // Canvas-Größe aktualisiert (keine Weltgröße mehr nötig - prozedural)
            }
            
            // Alle Foods und Stamina-Token entfernen
            this.foods = [];
            this.staminaTokens = [];
            this.projectiles = []; // Projektil-Array leeren
            this.shockwaveAnimation = null; // Shockwave-Animation zurücksetzen
            // Neues Spiel starten - Geschwindigkeit zurücksetzen
            if (this.tier) {
                this.tier.speedMultiplier = 1.0;
                this.tier.speed = this.tier.baseSpeed;
            }
            // Neues Spiel starten - Spieler bei (0, 0)
            const startX = 0;
            const startY = 0;
            this.tier = new RainWorldTier(startX, startY);
            // Anker-Position aktualisieren (für Bewegungsradius)
            this.tier.anchorX = startX;
            this.tier.anchorY = startY;
            // Kamera auf Spieler setzen
            this.cameraX = startX;
            this.cameraY = startY;
            this.cameraZoom = 1.0; // Zoom zurücksetzen
            
            // Jäger werden durch Chunk-System generiert
            this.hunters = [];
            this.fatHunters = [];
            this.tentacleCreatures = []; // Tentakel-Kreaturen zurücksetzen
        this.tentacleCreatureSpawnTimer = 0; // Timer zurücksetzen
            
            // Spawne initiale Tentakel-Kreaturen (wenige am Anfang)
            this.spawnTentacleCreatures(1 + Math.floor(Math.random() * 2)); // 1-2 am Anfang
            
            this.tokenPoolSpawnTimer = 0;
            
            // Initiale Chunks laden (um Startposition) - generiert auch Hunters
            this.loadedChunks.clear();
            // Stelle sicher, dass Kamera-Position gesetzt ist, bevor Chunks geladen werden
            if (!this.cameraX && !this.cameraY) {
                this.cameraX = startX;
                this.cameraY = startY;
            }
            this.updateChunks();
            
            this.score = 0;
            this.foodCount = 0;
            this.pendingUpgrades = false;
            this.extraFoodChance = 0;
            this.activeUpgrades = {};
            document.getElementById('upgradeOverlay').style.display = 'none';
            this.updateScore();
            this.updateUpgradeDisplay();
            // Tokens werden durch Chunk-System generiert, aber spawne auch initial einige (mehr für bessere Sichtbarkeit)
            // Stelle sicher, dass genug Foods vorhanden sind - spawne immer, auch wenn Chunks Foods generiert haben
            const foodsToSpawn = Math.max(0, 20 - this.foods.length);
            for (let i = 0; i < foodsToSpawn; i++) {
                this.spawnFood();
            }
            this.log(`Spiel gestartet - Foods: ${this.foods.length}, Hunters: ${this.hunters.length}, Fat: ${this.fatHunters.length}`, 'info');
            
            // Aktualisiere Evolution-Anzeige beim Start
            this.updateEvolutionDisplay();
            
            // Aktualisiere Player Stats beim Start
            this.updatePlayerStats();
            
            this.isRunning = true;
            this.lastFrameTime = performance.now(); // Initialisiere Frame-Zeit für FPS-Limitierung
            this.startBackgroundMusic(); // Starte Background Music
            this.animate();
        }
    }
    
    animate() {
        if (!this.isRunning || this.pendingUpgrades || this.pendingMutations) return;
        
        // Performance-Monitoring: Starte Frame-Zeit-Messung
        const frameStartTime = performance.now();
        
        // FPS-Limitierung: Berechne Delta-Zeit und limitiere auf 60 FPS
        const currentTime = performance.now();
        const elapsed = currentTime - this.lastFrameTime;
        
        if (elapsed < this.frameInterval) {
            // Noch nicht genug Zeit vergangen - warte
            this.animationId = requestAnimationFrame(() => this.animate());
            return;
        }
        
        // Delta-Zeit für framerate-unabhängige Updates (normalisiert auf 60 FPS)
        this.deltaTime = elapsed / this.frameInterval; // 1.0 = 60 FPS, 2.0 = 30 FPS, etc.
        this.deltaTime = Math.min(this.deltaTime, 2.0); // Cap bei 2.0 (maximal 30 FPS equivalent)
        this.lastFrameTime = currentTime - (elapsed % this.frameInterval); // Präzise Timing
        
        // Performance: Track Frame-Zeit
        this.performanceStats.frameTime = elapsed;
        if (elapsed > 20) { // > 20ms = < 50 FPS
            this.performanceStats.slowFrames++;
        }
        
        // Kamera folgt dem Spieler
        if (this.tier) {
            const playerHead = this.tier.getHeadPosition();
            // Sanfte Kamera-Bewegung
            this.cameraX += (playerHead.x - this.cameraX) * this.cameraFollowSpeed;
            this.cameraY += (playerHead.y - this.cameraY) * this.cameraFollowSpeed;
            
            // Kamera-Zoom basierend auf Kreatur-Länge
            // Je länger die Kreatur, desto weiter rausgezoomt (kleinerer Zoom-Wert)
            // Basis: 10 Segmente = Zoom 1.0, jedes weitere Segment = -0.002 Zoom (sehr wenig rauszoomen für bessere Performance)
            const baseSegments = 10;
            const zoomPerSegment = 0.002; // Zoom-Reduktion pro Segment (sehr wenig rauszoomen für bessere Performance)
            const targetZoom = this.baseZoom - (this.tier.numSegments - baseSegments) * zoomPerSegment;
            const minZoom = 0.7; // Minimaler Zoom (maximal rausgezoomt - höher für bessere Performance)
            const maxZoom = 1.0; // Maximaler Zoom (kein Zoom - normal)
            
            // Sanfte Zoom-Interpolation
            this.cameraZoom += (Math.max(minZoom, Math.min(maxZoom, targetZoom)) - this.cameraZoom) * 0.1;
            
            // Kamera-Begrenzung entfernt - Open World ohne Grenzen
            // (Kamera kann überall folgen, aber wir zeichnen visuelle Wände)
        }
        
        // Prozedurale Chunk-Generierung aktualisieren (VOR dem Zeichnen)
        // Wichtig: Muss in jedem Frame aufgerufen werden, damit neue Chunks geladen werden
        this.updateChunks();
        
        // Performance: Track Draw-Zeit
        const drawStartTime = performance.now();
        
        // Clear canvas VOR der Transformation (in Screen-Koordinaten)
        // Das ist wichtig, damit der gesamte Canvas gelöscht wird, nicht nur ein Teil
        ctx.clearRect(0, 0, renderWidth, renderHeight);
        
        // Kamera-Transformation anwenden (mit Zoom)
        ctx.save();
        // Pixel-Art Rendering sicherstellen (wichtig nach scale())
        ctx.imageSmoothingEnabled = false;
        // Korrekte Reihenfolge: Erst zum Canvas-Zentrum verschieben, dann zoomen, dann zur Kamera-Position
        ctx.translate(renderWidth / 2, renderHeight / 2);
        ctx.scale(this.cameraZoom, this.cameraZoom);
        ctx.translate(-this.cameraX, -this.cameraY);
        
        // Hintergrund zeichnen
        this.drawBackground();
        
        // Hunter-Spawning wird jetzt vollständig durch Chunk-System gehandhabt
        // Kein separates Timer-System mehr nötig
        
        // Token-Pool-Spawning (alle 5 Sekunden) - in der Nähe der Kamera
        if (!this.tokenPoolSpawnTimer) {
            this.tokenPoolSpawnTimer = 0;
        }
        this.tokenPoolSpawnTimer++;
        if (this.tokenPoolSpawnTimer >= 300) { // Alle 5 Sekunden (bei 60 FPS)
            // Spawne 1-2 Token-Pools in der Nähe der Kamera
            const poolCount = 1 + Math.floor(Math.random() * 2);
            for (let i = 0; i < poolCount; i++) {
                // Spawne in einem Radius um die Kamera
                const angle = Math.random() * Math.PI * 2;
                const distance = 200 + Math.random() * 300; // 200-500 Pixel von Kamera
                const poolX = this.cameraX + Math.cos(angle) * distance;
                const poolY = this.cameraY + Math.sin(angle) * distance;
                this.spawnTokenPool(poolX, poolY);
            }
            this.tokenPoolSpawnTimer = 0;
            this.log(`Token-Pool gespawnt - Foods: ${this.foods.length}, Tokens: ${this.staminaTokens.length}`, 'info');
        }
        
        // Zusätzliche Hunter-Spawning in der Nähe des Spielers (basierend auf Länge)
        if (!this.nearbyHunterSpawnTimer) {
            this.nearbyHunterSpawnTimer = 0;
        }
        this.nearbyHunterSpawnTimer++;
        if (this.tier) {
            const playerLength = this.tier.numSegments;
            // Ab Länge 100 (Bosse spawnen) bleibt die Spawn-Rate konstant
            const effectiveLength = Math.min(playerLength, 100); // Stoppt bei 100
            
            // Spawn-Intervall wird kürzer je länger der Spieler wird (bis 100)
            // Basis: 10 Sekunden (600 Frames), reduziert um 0.5 Sekunden pro 10 Segmente (minimal 1 Sekunde)
            const baseInterval = 600; // 10 Sekunden
            const intervalReduction = Math.min(540, Math.floor(effectiveLength / 10) * 30); // Maximal 9 Sekunden Reduktion
            const spawnInterval = Math.max(60, baseInterval - intervalReduction); // Minimal 1 Sekunde
            
            if (this.nearbyHunterSpawnTimer >= spawnInterval) {
                // Anzahl der zu spawnenden Hunters basierend auf Länge (bis 100)
                // Basis: 0-1, zusätzlich +1 pro 10 Segmente (maximal +10 bei 100 Segmenten)
                const lengthBonus = Math.floor(effectiveLength / 10); // +1 pro 10 Segmente, maximal +10
                const hunterCount = Math.floor(Math.random() * 2) + lengthBonus; // 0-11 Hunters (bei 100 Segmenten)
                
                if (hunterCount > 0 && this.tier) {
                    const playerHead = this.tier.getHeadPosition();
                    for (let i = 0; i < hunterCount; i++) {
                        // Spawne knapp außerhalb des Sichtfeldes (procedural)
                        const minSpawnDistance = this.spawnZoneRadius * 0.9;
                        const maxSpawnDistance = this.spawnZoneRadius * 1.3;
                        const angle = Math.random() * Math.PI * 2;
                        const distance = minSpawnDistance + Math.random() * (maxSpawnDistance - minSpawnDistance);
                        const hunterX = playerHead.x + Math.cos(angle) * distance;
                        const hunterY = playerHead.y + Math.sin(angle) * distance;
                        
                        // Prüfe ob Elite Hunter spawnt werden können
                        const canSpawnElite = playerLength >= 50;
                        const hunterType = Math.random();
                        
                        if (hunterType < 0.5) {
                            // Normale Hunter
                            if (this.hunters.length < this.maxHunters) {
                                const hunter = new HunterCreature(hunterX, hunterY);
                                hunter.isChasing = false;
                                this.hunters.push(hunter);
                            }
                        } else if (hunterType < 0.8) {
                            // Fat Hunter
                            if (this.fatHunters.length < this.maxFatHunters) {
                                this.fatHunters.push(new FatHunterCreature(hunterX, hunterY));
                            }
                        } else if (canSpawnElite) {
                            // Elite Hunter
                            if (this.hunters.length < this.maxHunters) {
                                const hunter = new HunterCreature(hunterX, hunterY, true);
                                hunter.isChasing = false;
                                this.hunters.push(hunter);
                                this.log(`Elite Hunter gespawnt in der Nähe bei (${Math.floor(hunterX)}, ${Math.floor(hunterY)})`, 'error');
                            }
                        } else {
                            // Fallback zu normalem Hunter
                            if (this.hunters.length < this.maxHunters) {
                                const hunter = new HunterCreature(hunterX, hunterY);
                                hunter.isChasing = false;
                                this.hunters.push(hunter);
                            }
                        }
                    }
                    this.log(`Zusätzliche Hunters in der Nähe gespawnt: ${hunterCount} (Länge: ${playerLength})`, 'info');
                }
                this.nearbyHunterSpawnTimer = 0;
            }
        }
        
        // Tentakel-Kreaturen Spawning (basierend auf Spieler-Länge)
        if (!this.tentacleCreatureSpawnTimer) {
            this.tentacleCreatureSpawnTimer = 0;
        }
        this.tentacleCreatureSpawnTimer++;
        if (this.tier) {
            const playerLength = this.tier.numSegments;
            // Ab Länge 100 bleibt die Spawn-Rate konstant
            const effectiveLength = Math.min(playerLength, 100);
            
            // Spawn-Intervall wird kürzer je länger der Spieler wird (bis 100)
            // Basis: 15 Sekunden (900 Frames), reduziert um 1 Sekunde pro 10 Segmente (minimal 5 Sekunden)
            const baseInterval = 900; // 15 Sekunden
            const intervalReduction = Math.min(600, Math.floor(effectiveLength / 10) * 60); // Maximal 10 Sekunden Reduktion
            const spawnInterval = Math.max(300, baseInterval - intervalReduction); // Minimal 5 Sekunden
            
            if (this.tentacleCreatureSpawnTimer >= spawnInterval) {
                // Anzahl der zu spawnenden Tentakel-Kreaturen basierend auf Länge (bis 100)
                // Anfangs: 0-1, bei Länge 100: bis zu 3-4
                const baseCount = 0; // Basis: 0-1
                const lengthBonus = Math.floor(effectiveLength / 25); // +1 alle 25 Segmente, maximal +4 bei 100
                const tentacleCount = baseCount + Math.floor(Math.random() * 2) + lengthBonus; // 0-5 bei 100 Segmenten
                
                if (tentacleCount > 0 && this.tentacleCreatures.length < this.maxTentacleCreatures) {
                    this.spawnTentacleCreatures(tentacleCount);
                    this.tentacleCreatureSpawnTimer = 0;
                } else {
                    this.tentacleCreatureSpawnTimer = 0;
                }
            }
        }
        
        // Cooldowns werden jetzt individuell pro Jäger verwaltet
        
        // Biss-Animation aktualisieren
        if (this.biteAnimation) {
            this.biteAnimation.duration--;
            if (this.biteAnimation.duration <= 0) {
                this.biteAnimation = null;
            }
        }
        
        // Fat Hunter Spawn-Animation aktualisieren
        if (this.fatHunterSpawnAnimation) {
            this.fatHunterSpawnAnimation.duration--;
            this.fatHunterSpawnAnimation.phase++;
            
            // Partikel-Effekt während Animation (grünlich/braun für Fat Hunter)
            if (this.fatHunterSpawnAnimation.phase % 3 === 0) {
                for (let i = 0; i < 5; i++) {
                    this.particles.push(new Particle(
                        this.fatHunterSpawnAnimation.hunterX + (Math.random() - 0.5) * 20,
                        this.fatHunterSpawnAnimation.hunterY + (Math.random() - 0.5) * 20,
                        '#6a8a4a'
                    ));
                }
            }
            
            if (this.fatHunterSpawnAnimation.duration <= 0) {
                // Animation beendet - spawne Fat Hunter
                const spawnX = this.fatHunterSpawnAnimation.hunterX + (Math.random() - 0.5) * 40;
                const spawnY = this.fatHunterSpawnAnimation.hunterY + (Math.random() - 0.5) * 40;
                // Prüfe ob maxFatHunters noch nicht erreicht
                if (this.fatHunters.length < this.maxFatHunters) {
                    this.fatHunters.push(new FatHunterCreature(spawnX, spawnY));
                } else {
                    this.log('Max Fat Hunters erreicht - Spawn abgebrochen', 'info');
                }
                
                // Partikel-Effekt für Spawn
                for (let i = 0; i < 25; i++) {
                    this.particles.push(new Particle(
                        spawnX + (Math.random() - 0.5) * 15,
                        spawnY + (Math.random() - 0.5) * 15,
                        '#6a8a4a'
                    ));
                }
                
                this.log(`Fat Hunter gespawnt bei (${Math.floor(spawnX)}, ${Math.floor(spawnY)})`, 'warning');
                this.fatHunterSpawnAnimation = null;
            }
        }
        
        // Damage-Flash aktualisieren
        if (this.damageFlash > 0) {
            this.damageFlash--;
        }
        
        // Partikel aktualisieren - optimiert: entferne tote Partikel ohne filter()
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update();
            if (this.particles[i].isDead()) {
                this.particles.splice(i, 1);
            }
        }
        
        // Futter aktualisieren (Rendering erfolgt in draw()) - for Loop ist schneller
        for (let i = 0; i < this.foods.length; i++) {
            this.foods[i].update();
        }
        
        // Stamina-Token aktualisieren (Rendering erfolgt in draw()) - for Loop ist schneller
        for (let i = 0; i < this.staminaTokens.length; i++) {
            this.staminaTokens[i].update();
        }
        
        // Fette Jäger aktualisieren (primär Food/Stamina-Token, sekundär Spieler)
        if (this.fatHunters.length > 0 && this.tier) {
            // Zuerst: Reservierungen zurücksetzen - for Loop ist schneller
            for (let i = 0; i < this.fatHunters.length; i++) {
                this.fatHunters[i].reservedFoodIndex = -1;
                this.fatHunters[i].reservedTokenIndex = -1;
            }
            
            // Dann: Jeder Fat Hunter wählt sein Ziel (nur in aktiver Zone)
            const playerHead = this.tier.getHeadPosition();
            for (let fatHunterIndex = 0; fatHunterIndex < this.fatHunters.length; fatHunterIndex++) {
                const fatHunter = this.fatHunters[fatHunterIndex];
                
                // Viewport-Culling: Nur Entities in aktiver Zone updaten (squared distance für Performance)
                const dx = playerHead.x - fatHunter.headX;
                const dy = playerHead.y - fatHunter.headY;
                const distanceToPlayerSquared = dx * dx + dy * dy;
                const activeZoneRadiusSquared = this.activeZoneRadius * this.activeZoneRadius;
                
                // Überspringe Update wenn außerhalb der aktiven Zone (squared distance)
                if (distanceToPlayerSquared > activeZoneRadiusSquared) {
                    continue;
                }
                
                // Prüfe ob andere fette Hunter in der Nähe sind (Abstoßung) - nur in aktiver Zone
                let avoidDirectionX = 0;
                let avoidDirectionY = 0;
                const avoidRadius = 80; // Abstoßungsradius
                const avoidRadiusSquared = avoidRadius * avoidRadius;
                
                for (let otherIndex = 0; otherIndex < this.fatHunters.length; otherIndex++) {
                    if (otherIndex === fatHunterIndex) continue;
                    const otherHunter = this.fatHunters[otherIndex];
                    const dx = fatHunter.headX - otherHunter.headX;
                    const dy = fatHunter.headY - otherHunter.headY;
                    const distanceSquared = dx * dx + dy * dy;
                    
                    // Nur prüfen wenn in Abstoßungsradius (squared distance)
                    if (distanceSquared < avoidRadiusSquared && distanceSquared > 0) {
                        const distance = Math.sqrt(distanceSquared); // Nur einmal sqrt wenn nötig
                        // Abstoßung: bewege dich weg vom anderen Hunter
                        const strength = (avoidRadius - distance) / avoidRadius;
                        avoidDirectionX += (dx / distance) * strength;
                        avoidDirectionY += (dy / distance) * strength;
                    }
                }
                
                // Finde verfügbare Tokens (nicht von anderen Hunters reserviert) - nur in aktiver Zone
                let availableFoods = [];
                const searchRadiusSquared = 100 * 100; // 100 Pixel Suchradius (squared)
                for (let i = 0; i < this.foods.length; i++) {
                    const food = this.foods[i];
                    // Prüfe ob dieser Food bereits von einem anderen Hunter reserviert ist
                    let isReserved = false;
                    for (let j = 0; j < this.fatHunters.length; j++) {
                        if (j !== fatHunterIndex && this.fatHunters[j].reservedFoodIndex === i) {
                            isReserved = true;
                            break;
                        }
                    }
                    if (!isReserved) {
                        const dx = food.x - fatHunter.headX;
                        const dy = food.y - fatHunter.headY;
                        const distanceSquared = dx * dx + dy * dy;
                        if (distanceSquared < searchRadiusSquared) { // Suchradius (squared)
                            availableFoods.push({ food: food, index: i, distanceSquared: distanceSquared });
                        }
                    }
                }
                
                let availableTokens = [];
                for (let i = 0; i < this.staminaTokens.length; i++) {
                    const token = this.staminaTokens[i];
                    // Prüfe ob dieser Token bereits von einem anderen Hunter reserviert ist
                    let isReserved = false;
                    for (let j = 0; j < this.fatHunters.length; j++) {
                        if (j !== fatHunterIndex && this.fatHunters[j].reservedTokenIndex === i) {
                            isReserved = true;
                            break;
                        }
                    }
                    if (!isReserved) {
                        const dx = token.x - fatHunter.headX;
                        const dy = token.y - fatHunter.headY;
                        const distanceSquared = dx * dx + dy * dy;
                        if (distanceSquared < searchRadiusSquared) { // Suchradius (squared)
                            availableTokens.push({ token: token, index: i, distanceSquared: distanceSquared });
                        }
                    }
                }
                
                // Sortiere nach Entfernung (nächste zuerst) - squared distance ist ausreichend für Sortierung
                availableFoods.sort((a, b) => a.distanceSquared - b.distanceSquared);
                availableTokens.sort((a, b) => a.distanceSquared - b.distanceSquared);
                
                // Wähle das nächste verfügbare Ziel
                let target = null;
                let targetType = null;
                
                if (availableFoods.length > 0 && availableTokens.length > 0) {
                    // Wähle näheres Ziel (squared distance Vergleich)
                    if (availableFoods[0].distanceSquared < availableTokens[0].distanceSquared) {
                        target = availableFoods[0].food;
                        targetType = 'food';
                        fatHunter.reservedFoodIndex = availableFoods[0].index;
                    } else {
                        target = availableTokens[0].token;
                        targetType = 'token';
                        fatHunter.reservedTokenIndex = availableTokens[0].index;
                    }
                } else if (availableFoods.length > 0) {
                    target = availableFoods[0].food;
                    targetType = 'food';
                    fatHunter.reservedFoodIndex = availableFoods[0].index;
                } else if (availableTokens.length > 0) {
                    target = availableTokens[0].token;
                    targetType = 'token';
                    fatHunter.reservedTokenIndex = availableTokens[0].index;
                }
                
                if (target) {
                    // Kombiniere Zielverfolgung mit Abstoßung
                    let targetX = target.x;
                    let targetY = target.y;
                    
                    // Wenn Abstoßung aktiv ist, kombiniere beide Richtungen
                    if (Math.abs(avoidDirectionX) > 0.1 || Math.abs(avoidDirectionY) > 0.1) {
                        // 70% Ziel, 30% Abstoßung
                        targetX = target.x * 0.7 + (fatHunter.headX + avoidDirectionX * 50) * 0.3;
                        targetY = target.y * 0.7 + (fatHunter.headY + avoidDirectionY * 50) * 0.3;
                    }
                    
                    fatHunter.setTarget(targetX, targetY);
                } else {
                    // Sekundär: Jage Spieler (nur wenn kein Food/Token in der Nähe)
                    // Aber auch hier: Abstoßung von anderen Hunters berücksichtigen
                    const playerHead = this.tier.getHeadPosition();
                    let playerTargetX = playerHead.x;
                    let playerTargetY = playerHead.y;
                    
                    if (Math.abs(avoidDirectionX) > 0.1 || Math.abs(avoidDirectionY) > 0.1) {
                        // 60% Spieler, 40% Abstoßung
                        playerTargetX = playerHead.x * 0.6 + (fatHunter.headX + avoidDirectionX * 50) * 0.4;
                        playerTargetY = playerHead.y * 0.6 + (fatHunter.headY + avoidDirectionY * 50) * 0.4;
                    }
                    
                    fatHunter.setTarget(playerTargetX, playerTargetY);
                }
                
                // Aktualisiere fette Jäger
                fatHunter.update();
                
                // Individuellen Cooldown für diesen Fat Hunter aktualisieren
                if (fatHunter.damageCooldown > 0) {
                    fatHunter.damageCooldown--;
                }
                
                // Kollisionsprüfung zwischen Fat Hunter und Spieler (mit individuellem Cooldown)
                if (fatHunter.damageCooldown === 0) {
                    const fatHunterHead = fatHunter.getHeadPosition();
                    const playerHead = this.tier.getHeadPosition();
                    const dx = fatHunterHead.x - playerHead.x;
                    const dy = fatHunterHead.y - playerHead.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    // Größerer Kollisionsradius für Fat Hunter (größerer Kopf)
                    if (distance < 14) {
                        // Kopf-Kollision - Spieler verliert Segment
                        const hitSegment = this.tier.segments[0]; // Kopf
                        
                        // Erstelle Partikel-Effekt (Blut/Splitter) am getroffenen Segment
                        for (let i = 0; i < 12; i++) {
                            // Rote Partikel (Blut)
                            this.particles.push(new Particle(
                                hitSegment.x + (Math.random() - 0.5) * 4,
                                hitSegment.y + (Math.random() - 0.5) * 4,
                                '#ff4444'
                            ));
                            // Dunklere Partikel (Fleisch/Splitter)
                            this.particles.push(new Particle(
                                hitSegment.x + (Math.random() - 0.5) * 4,
                                hitSegment.y + (Math.random() - 0.5) * 4,
                                '#8a2a2a'
                            ));
                        }
                        
                        // Biss-Animation starten
                        this.biteAnimation = {
                            duration: 15, // Kurze Animation
                            hunterIndex: -1, // -1 für Fat Hunter (wird nicht verwendet)
                            hunterX: fatHunterHead.x,
                            hunterY: fatHunterHead.y,
                            targetX: hitSegment.x,
                            targetY: hitSegment.y
                        };
                        
                        // Damage-Flash starten
                        this.damageFlash = 20; // Kurzer roter Flash
                        
                        // Spieler verliert ein Segment
                        this.tier.shrink();
                        
                        // Prüfe auf Game Over
                        if (this.checkGameOver()) {
                            return; // Spiel beendet
                        }
                        
                        // Fat Hunter wird stärker: wächst (zählt als Food)
                        fatHunter.grow();
                        fatHunter.foodCount++; // Zählt als Food-Token
                        
                        this.log(`Fat Hunter beißt Spieler (Kopf) - Fat Hunter Länge: ${fatHunter.numSegments}, Food Count: ${fatHunter.foodCount}`, 'error');
                        
                        // Cooldown setzen (2 Sekunden = 120 Frames)
                        fatHunter.damageCooldown = 120;
                        this.updateScore();
                    }
                }
                
                // Prüfe auf Food-Kollision
                const eatenFoodIndex = fatHunter.checkFoodCollision(this.foods);
                if (eatenFoodIndex !== null) {
                    this.foods.splice(eatenFoodIndex, 1);
                    fatHunter.grow();
                    fatHunter.foodCount++;
                    fatHunter.reservedFoodIndex = -1; // Reservierung zurücksetzen
                    this.log(`Fetter Jäger isst Food - Länge: ${fatHunter.numSegments}, Food Count: ${fatHunter.foodCount}`, 'warning');
                    this.spawnFood();
                }
                
                // Prüfe auf Stamina-Token-Kollision
                const eatenTokenIndex = fatHunter.checkStaminaTokenCollision(this.staminaTokens);
                if (eatenTokenIndex !== null) {
                    this.staminaTokens.splice(eatenTokenIndex, 1);
                    fatHunter.reservedTokenIndex = -1; // Reservierung zurücksetzen
                    this.log('Fetter Jäger isst Stamina-Token', 'warning');
                }
            }
        }
        
        // Kontinuierliche Trigger-Prüfung für Länge 50 und 100 (VOR Viewport-Despawn, damit Trigger immer funktionieren)
        if (this.tier) {
            const currentLength = this.tier.numSegments;
            
            // Prüfe Länge 50 Trigger (nur einmal beim ersten Erreichen)
            if (currentLength >= 50 && !this.length50MilestoneReached) {
                this.length50MilestoneReached = true;
                this.startLength50Animation();
            }
            
            // Prüfe Länge 100 Trigger (nur einmal beim ersten Erreichen)
            if (currentLength >= 100 && !this.length100MilestoneReached) {
                this.length100MilestoneReached = true;
                this.startLength100Animation();
            }
        }
        
        // Viewport-basiertes Despawnen: Entferne Entities die zu weit weg sind (außer Bossen)
        // Optimiert: Verwende squared distance für bessere Performance
        // AGGRESSIVES CLEANUP: Wenn Limits überschritten, entferne sofort die entferntesten Entities
        if (this.tier) {
            const playerHead = this.tier.getHeadPosition();
            const despawnRadiusSquared = this.despawnRadius * this.despawnRadius;
            
            // AGGRESSIVES CLEANUP: Wenn zu viele Hunters, entferne sofort die entferntesten
            if (this.hunters.length > this.maxHunters) {
                // Sortiere Hunters nach Entfernung (entfernteste zuerst)
                const huntersWithDistance = this.hunters.map((hunter, index) => {
                    const dx = hunter.headX - playerHead.x;
                    const dy = hunter.headY - playerHead.y;
                    return { index, distanceSquared: dx * dx + dy * dy };
                });
                huntersWithDistance.sort((a, b) => b.distanceSquared - a.distanceSquared);
                
                // Entferne die entferntesten Hunters bis unter Limit (rückwärts für korrekte Indizes)
                const toRemove = this.hunters.length - this.maxHunters;
                const indicesToRemove = huntersWithDistance.slice(0, toRemove).map(item => item.index).sort((a, b) => b - a);
                for (const index of indicesToRemove) {
                    this.hunters.splice(index, 1);
                }
            }
            
            // Normales Despawnen für Hunters (außerhalb des Despawn-Radius)
            for (let i = this.hunters.length - 1; i >= 0; i--) {
                const hunter = this.hunters[i];
                const dx = hunter.headX - playerHead.x;
                const dy = hunter.headY - playerHead.y;
                if ((dx * dx + dy * dy) > despawnRadiusSquared) {
                    this.hunters.splice(i, 1);
                }
            }
            
            // AGGRESSIVES CLEANUP: Wenn zu viele Fat Hunters, entferne sofort die entferntesten
            if (this.fatHunters.length > this.maxFatHunters) {
                // Sortiere Fat Hunters nach Entfernung (entfernteste zuerst)
                const fatHuntersWithDistance = this.fatHunters.map((fatHunter, index) => {
                    const dx = fatHunter.headX - playerHead.x;
                    const dy = fatHunter.headY - playerHead.y;
                    return { index, distanceSquared: dx * dx + dy * dy };
                });
                fatHuntersWithDistance.sort((a, b) => b.distanceSquared - a.distanceSquared);
                
                // Entferne die entferntesten Fat Hunters bis unter Limit (rückwärts für korrekte Indizes)
                const toRemove = this.fatHunters.length - this.maxFatHunters;
                const indicesToRemove = fatHuntersWithDistance.slice(0, toRemove).map(item => item.index).sort((a, b) => b - a);
                for (const index of indicesToRemove) {
                    this.fatHunters.splice(index, 1);
                }
            }
            
            // Normales Despawnen für Fat Hunters (außerhalb des Despawn-Radius)
            for (let i = this.fatHunters.length - 1; i >= 0; i--) {
                const fatHunter = this.fatHunters[i];
                const dx = fatHunter.headX - playerHead.x;
                const dy = fatHunter.headY - playerHead.y;
                if ((dx * dx + dy * dy) > despawnRadiusSquared) {
                    this.fatHunters.splice(i, 1);
                }
            }
            
            // Tentacle Creatures despawnen
            for (let i = this.tentacleCreatures.length - 1; i >= 0; i--) {
                const tentacleCreature = this.tentacleCreatures[i];
                const dx = tentacleCreature.x - playerHead.x;
                const dy = tentacleCreature.y - playerHead.y;
                if ((dx * dx + dy * dy) > despawnRadiusSquared) {
                    this.tentacleCreatures.splice(i, 1);
                }
            }
            
            // Foods despawnen (außerhalb der aktiven Zone)
            // AGGRESSIVES CLEANUP: Begrenze Foods auf maximal 500
            const maxFoods = 500;
            if (this.foods.length > maxFoods) {
                // Sortiere Foods nach Entfernung (entfernteste zuerst)
                const foodsWithDistance = this.foods.map((food, index) => {
                    const dx = food.x - playerHead.x;
                    const dy = food.y - playerHead.y;
                    return { food, index, distanceSquared: dx * dx + dy * dy };
                });
                foodsWithDistance.sort((a, b) => b.distanceSquared - a.distanceSquared);
                
                // Entferne die entferntesten Foods bis unter Limit
                const toRemove = this.foods.length - maxFoods;
                const indicesToRemove = foodsWithDistance.slice(0, toRemove).map(item => item.index).sort((a, b) => b - a);
                for (const index of indicesToRemove) {
                    this.foods.splice(index, 1);
                }
            }
            
            // Normales Despawnen für Foods (außerhalb des Despawn-Radius)
            for (let i = this.foods.length - 1; i >= 0; i--) {
                const food = this.foods[i];
                const dx = food.x - playerHead.x;
                const dy = food.y - playerHead.y;
                if ((dx * dx + dy * dy) > despawnRadiusSquared) {
                    this.foods.splice(i, 1);
                }
            }
            
            // Stamina Tokens despawnen
            for (let i = this.staminaTokens.length - 1; i >= 0; i--) {
                const token = this.staminaTokens[i];
                const dx = token.x - playerHead.x;
                const dy = token.y - playerHead.y;
                if ((dx * dx + dy * dy) > despawnRadiusSquared) {
                    this.staminaTokens.splice(i, 1);
                }
            }
        }
        
        // Alle Jäger aktualisieren und zeichnen (nur in aktiver Zone)
        if (this.hunters.length > 0 && this.tier) {
            const playerHead = this.tier.getHeadPosition();
            
            for (let hunterIndex = 0; hunterIndex < this.hunters.length; hunterIndex++) {
                const hunter = this.hunters[hunterIndex];
                
                // Viewport-Culling: Nur Entities in aktiver Zone updaten (squared distance für Performance)
                const dx = playerHead.x - hunter.headX;
                const dy = playerHead.y - hunter.headY;
                const distanceToPlayerSquared = dx * dx + dy * dy;
                const activeZoneRadiusSquared = this.activeZoneRadius * this.activeZoneRadius;
                
                // Überspringe Update wenn außerhalb der aktiven Zone (squared distance)
                if (distanceToPlayerSquared > activeZoneRadiusSquared) {
                    continue;
                }
                
                // Performance-Optimierung: Weit entfernte Hunter seltener updaten (aggressiver)
                // Verwende squared distance für Vergleiche (schneller)
                if (!hunter.updateFrameCounter) hunter.updateFrameCounter = 0;
                hunter.updateFrameCounter++;
                let updateSkip = 0;
                const distance800Squared = 800 * 800;
                const distance600Squared = 600 * 600;
                const distance400Squared = 400 * 400;
                const distance250Squared = 250 * 250;
                
                if (distanceToPlayerSquared > distance800Squared) {
                    updateSkip = 4; // Skip 4 Frames wenn > 800px
                } else if (distanceToPlayerSquared > distance600Squared) {
                    updateSkip = 3; // Skip 3 Frames wenn > 600px
                } else if (distanceToPlayerSquared > distance400Squared) {
                    updateSkip = 2; // Skip 2 Frames wenn > 400px
                } else if (distanceToPlayerSquared > distance250Squared) {
                    updateSkip = 1; // Skip 1 Frame wenn > 250px
                }
                if (updateSkip > 0 && hunter.updateFrameCounter % (updateSkip + 1) !== 0) {
                    continue; // Überspringe Update für diesen Frame
                }
                
                const attentionRadiusSquared = hunter.attentionRadius * hunter.attentionRadius;
                if (distanceToPlayerSquared <= attentionRadiusSquared) {
                    // Spieler im Aufmerksamkeitsradius - starte Verfolgung
                    if (!hunter.isChasing) {
                        hunter.isChasing = true;
                        this.log(`Hunter ${hunterIndex} hat Spieler bemerkt!`, 'warning');
                    }
                } else {
                    // Spieler außerhalb des Aufmerksamkeitsradius - stoppe Verfolgung
                    if (hunter.isChasing) {
                        hunter.isChasing = false;
                        this.log(`Hunter ${hunterIndex} hat Spieler verloren`, 'info');
                    }
                }
                
                // Nur verfolgen, wenn Spieler im Aufmerksamkeitsradius ist
                if (hunter.isChasing) {
                    // Jäger-Priorität: Elite jagen nur Spieler, normale jagen Food oder Spieler
                    if (hunter.isElite) {
                        // Elite jagen nur den Spieler
                        hunter.setTarget(playerHead.x, playerHead.y);
                    } else {
                        // Normale Jäger: Erst Food/Stamina-Token prüfen, dann Spieler jagen
                        const nearestFood = hunter.findNearestFood(this.foods);
                        const nearestStaminaToken = hunter.findNearestStaminaToken(this.staminaTokens);
                        
                        // Priorisiere näheres Ziel (Food oder Stamina-Token) - squared distance für Performance
                        let target = null;
                        if (nearestFood && nearestStaminaToken) {
                            const foodDx = nearestFood.x - hunter.headX;
                            const foodDy = nearestFood.y - hunter.headY;
                            const foodDistSquared = foodDx * foodDx + foodDy * foodDy;
                            const tokenDx = nearestStaminaToken.x - hunter.headX;
                            const tokenDy = nearestStaminaToken.y - hunter.headY;
                            const tokenDistSquared = tokenDx * tokenDx + tokenDy * tokenDy;
                            target = foodDistSquared < tokenDistSquared ? nearestFood : nearestStaminaToken;
                        } else if (nearestFood) {
                            target = nearestFood;
                        } else if (nearestStaminaToken) {
                            target = nearestStaminaToken;
                        }
                        
                        if (target) {
                            // Wenn Food/Token nah genug ist, steuere darauf zu
                            hunter.setTarget(target.x, target.y);
                        } else {
                            // Ansonsten jage den Spieler
                            hunter.setTarget(playerHead.x, playerHead.y);
                        }
                    }
                } else {
                    // Patrouillieren - langsame Bewegung in zufällige Richtung
                    hunter.patrolAngle += (Math.random() - 0.5) * 0.1; // Leichte Richtungsänderung
                    const patrolX = hunter.headX + Math.cos(hunter.patrolAngle) * hunter.patrolSpeed;
                    const patrolY = hunter.headY + Math.sin(hunter.patrolAngle) * hunter.patrolSpeed;
                    hunter.setTarget(patrolX, patrolY);
                }
                
                // Individuellen Cooldown für diesen Jäger aktualisieren
                if (hunter.damageCooldown > 0) {
                    hunter.damageCooldown--;
                }
                
                // Speed-Boost-Delay aktualisieren
                if (hunter.speedBoostDelay > 0) {
                    hunter.speedBoostDelay--;
                    if (hunter.speedBoostDelay <= 0 && !hunter.speedBoostAnimation) {
                        // Delay abgelaufen - starte Ankündigungs-Animation
                        hunter.speedBoostAnimation = {
                            duration: 90, // 1.5 Sekunden Ankündigungs-Animation (länger)
                            phase: 0
                        };
                    }
                }
                
                // Speed-Boost aktualisieren
                if (hunter.speedBoostActive) {
                    hunter.speedBoostDuration--;
                    if (hunter.speedBoostDuration <= 0) {
                        // Speed-Boost beendet - sicherstellen, dass alles zurückgesetzt wird
                        hunter.speedBoostActive = false;
                        hunter.speedMultiplier = hunter.originalSpeedMultiplier;
                        hunter.baseSpeed = 0.6 * hunter.speedMultiplier;
                        hunter.speed = hunter.baseSpeed;
                        hunter.targetSpeed = hunter.baseSpeed;
                        hunter.currentSpeed = hunter.baseSpeed;
                        hunter.speedBoostDuration = 0; // Sicherstellen, dass Duration auf 0 ist
                    }
                }
                
                // Speed-Boost-Animation aktualisieren
                if (hunter.speedBoostAnimation) {
                    hunter.speedBoostAnimation.duration--;
                    hunter.speedBoostAnimation.phase++;
                    if (hunter.speedBoostAnimation.duration <= 0) {
                        // Animation beendet - aktiviere Speed-Boost
                        hunter.speedBoostAnimation = null;
                        hunter.originalSpeedMultiplier = hunter.speedMultiplier;
                        hunter.speedMultiplier *= 1.3; // 30% Boost
                        hunter.baseSpeed = 0.6 * hunter.speedMultiplier;
                        hunter.speed = hunter.baseSpeed;
                        hunter.targetSpeed = hunter.baseSpeed;
                        hunter.currentSpeed = hunter.baseSpeed;
                        hunter.speedBoostActive = true;
                        hunter.speedBoostDuration = 600; // 10 Sekunden bei 60 FPS
                        this.log('Jäger Speed-Boost aktiviert (10s)', 'warning');
                    }
                }
                
                // Sicherheitscheck: Falls Duration negativ oder 0 ist, aber noch aktiv, zurücksetzen
                if (hunter.speedBoostActive && hunter.speedBoostDuration <= 0) {
                    hunter.speedBoostActive = false;
                    hunter.speedMultiplier = hunter.originalSpeedMultiplier || 1.0;
                    hunter.baseSpeed = 0.6 * hunter.speedMultiplier;
                    hunter.speed = hunter.baseSpeed;
                    hunter.targetSpeed = hunter.baseSpeed;
                    hunter.currentSpeed = hunter.baseSpeed;
                    hunter.speedBoostDuration = 0;
                }
                
                // Sicherheitscheck: Falls Delay negativ ist, zurücksetzen
                if (hunter.speedBoostDelay < 0) {
                    hunter.speedBoostDelay = 0;
                }
                
                // Fortpflanzungs-Animation aktualisieren
                if (hunter.reproductionAnimation) {
                    hunter.reproductionAnimation.duration--;
                    hunter.reproductionAnimation.phase++;
                    
                    if (hunter.reproductionAnimation.duration <= 0) {
                        // Animation beendet - spawne Kind
                        hunter.reproductionCount++;
                        const childX = hunter.headX + (Math.random() - 0.5) * 30;
                        const childY = hunter.headY + (Math.random() - 0.5) * 30;
                        // Welt ist jetzt unendlich - keine Grenzen mehr
                        const safeX = childX;
                        const safeY = childY;
                        
                        // Wenn es die zweite Vermehrung ist, spawne Elite-Kind
                        const isEliteChild = hunter.reproductionCount >= 2;
                        this.hunters.push(new HunterCreature(safeX, safeY, isEliteChild));
                        
                        this.log(`Jäger hat sich vermehrt - ${isEliteChild ? 'ELITE' : 'Normal'} Kind gespawnt bei (${Math.floor(safeX)}, ${Math.floor(safeY)})`, isEliteChild ? 'error' : 'warning');
                        
                        // Erstelle Partikel-Effekt für Geburt (rot für Elite)
                        const particleColor = isEliteChild ? '#9d4edd' : '#ff8800'; // Lila für Elite, orange für normal
                        const particleCount = isEliteChild ? 30 : 20;
                        for (let i = 0; i < particleCount; i++) {
                            this.particles.push(new Particle(
                                hunter.headX + (Math.random() - 0.5) * 10,
                                hunter.headY + (Math.random() - 0.5) * 10,
                                particleColor
                            ));
                        }
                        
                        hunter.reproductionAnimation = null;
                    }
                }
                
                // Während Fortpflanzungs-Animation oder Klettern langsamer bewegen
                if (!hunter.reproductionAnimation && !hunter.isClimbing) {
                    hunter.update();
                } else if (hunter.reproductionAnimation) {
                    // Langsamere Bewegung während Animation
                    const originalSpeed = hunter.currentSpeed;
                    hunter.currentSpeed *= 0.3;
                    hunter.update();
                    hunter.currentSpeed = originalSpeed;
                }
                // Beim Klettern wird die Bewegung in der Kletter-Logik behandelt
                
                // Hunter werden später gezeichnet (nach dem Spieler)
            }
        }
        
        // Elite-Jäger und normale Jäger: Food/Stamina-Token Kollision (wird in der Hunter-Schleife behandelt)
        if (this.hunters.length > 0 && this.tier) {
            for (let hunterIndex = 0; hunterIndex < this.hunters.length; hunterIndex++) {
                const hunter = this.hunters[hunterIndex];
                
                // Elite-Jäger: Gratis Essen alle 30 Sekunden
                if (hunter.isElite) {
                    hunter.freeFoodTimer++;
                    if (hunter.freeFoodTimer >= hunter.freeFoodInterval) {
                        hunter.freeFoodTimer = 0; // Timer zurücksetzen
                        // Gratis Essen geben
                        const oldLength = hunter.numSegments;
                        hunter.grow();
                        hunter.increaseSpeedFromFood(); // 5% wie Spieler
                        hunter.foodCount++;
                        this.log(`Elite Jäger bekommt gratis Essen - Länge: ${oldLength} → ${hunter.numSegments}`, 'warning');
                        
                        // Bei jedem 2. Food: Max Stamina erhöhen
                        if (hunter.foodCount % 2 === 0) {
                            hunter.maxStamina++;
                            hunter.currentStamina = Math.min(hunter.currentStamina + 1, hunter.maxStamina);
                        }
                        
                        // Prüfe auf Speed-Boost (bei jedem Essen/Biss)
                        if (!hunter.speedBoostActive && !hunter.speedBoostAnimation && hunter.speedBoostDelay === 0) {
                            // Starte Delay (3 Sekunden)
                            hunter.speedBoostDelay = 180; // 3 Sekunden bei 60 FPS
                        }
                        
                        // Prüfe auf Fortpflanzung (alle 10 Foods)
                        if (hunter.foodCount >= 10 && !hunter.reproductionAnimation) {
                            hunter.foodCount = 0; // Zähler zurücksetzen
                            // Starte dramatische Fortpflanzungs-Animation
                            hunter.reproductionAnimation = {
                                duration: 60, // 1 Sekunde bei 60 FPS
                                phase: 0
                            };
                        }
                    }
                    
                    // Elite-Jäger können auch Stamina-Token essen (aber nicht jagen)
                    const eatenTokenIndex = hunter.checkStaminaTokenCollision(this.staminaTokens);
                    if (eatenTokenIndex !== null) {
                        // Jäger isst Stamina-Token
                        this.staminaTokens.splice(eatenTokenIndex, 1);
                        // Jäger bekommt +1 Stamina
                        hunter.currentStamina = Math.min(hunter.currentStamina + 1, hunter.maxStamina);
                    }
                } else {
                    // Normale Jäger: Kollisionsprüfung zwischen Jäger und Food
                    const eatenFoodIndex = hunter.checkFoodCollision(this.foods);
                    if (eatenFoodIndex !== null) {
                        // Jäger isst Food
                        this.foods.splice(eatenFoodIndex, 1);
                        const oldLength = hunter.numSegments;
                        hunter.grow();
                        hunter.increaseSpeedFromFood(); // 5% wie Spieler
                        hunter.foodCount++;
                        
                        this.log(`Jäger isst Food - Länge: ${oldLength} → ${hunter.numSegments}, Food Count: ${hunter.foodCount}`, 'warning');
                        
                        // Bei jedem 2. Food: Max Stamina erhöhen
                        if (hunter.foodCount % 2 === 0) {
                            hunter.maxStamina++;
                            hunter.currentStamina = Math.min(hunter.currentStamina + 1, hunter.maxStamina);
                            this.log(`Jäger Max Stamina erhöht: ${hunter.maxStamina}`, 'info');
                        }
                        
                        // Prüfe auf Speed-Boost (bei jedem Essen/Biss)
                        if (!hunter.speedBoostActive && !hunter.speedBoostAnimation && hunter.speedBoostDelay === 0) {
                            // Starte Delay (3 Sekunden)
                            hunter.speedBoostDelay = 180; // 3 Sekunden bei 60 FPS
                            this.log('Jäger Speed-Boost Delay gestartet (3s)', 'info');
                        }
                        
                        // Prüfe auf Fortpflanzung (alle 10 Foods)
                        if (hunter.foodCount >= 10 && !hunter.reproductionAnimation) {
                            hunter.foodCount = 0; // Zähler zurücksetzen
                            // Starte dramatische Fortpflanzungs-Animation
                            hunter.reproductionAnimation = {
                                duration: 60, // 1 Sekunde bei 60 FPS
                                phase: 0
                            };
                            this.log(`Jäger beginnt Fortpflanzung (Reproduktions-Count: ${hunter.reproductionCount})`, 'warning');
                        }
                        
                        // Spawne neues Food
                        this.spawnFood();
                    }
                    
                    // Prüfe auf Stamina-Token-Kollision
                    const eatenTokenIndex = hunter.checkStaminaTokenCollision(this.staminaTokens);
                    if (eatenTokenIndex !== null) {
                        // Jäger isst Stamina-Token
                        this.staminaTokens.splice(eatenTokenIndex, 1);
                        // Jäger bekommt +1 Stamina
                        hunter.currentStamina = Math.min(hunter.currentStamina + 1, hunter.maxStamina);
                    }
                }
                
                // Stamina-Regeneration
                if (!hunter.isClimbing && hunter.currentStamina < hunter.maxStamina) {
                    hunter.staminaRegenTimer++;
                    if (hunter.staminaRegenTimer >= hunter.staminaRegenInterval) {
                        hunter.staminaRegenTimer = 0;
                        hunter.currentStamina = Math.min(hunter.currentStamina + 1, hunter.maxStamina);
                    }
                }
                
                // Kletter-Mechanik aktualisieren (nicht während Speed-Boost)
                // Wenn Speed-Boost aktiv wird, lasse sofort los
                if (hunter.isClimbing && (hunter.speedBoostActive || hunter.speedBoostAnimation)) {
                    // Speed-Boost aktiv - sofort loslassen
                    hunter.isClimbing = false;
                    hunter.climbingTargetIndex = -1;
                    hunter.climbingProgress = 0;
                    hunter.climbCooldown = 60; // Kurzer Cooldown nach Loslassen
                } else if (hunter.isClimbing && !hunter.speedBoostActive && !hunter.speedBoostAnimation) {
                    // Prüfe ob Jäger aufgeben muss (keine Stamina mehr)
                    if (hunter.currentStamina <= 0) {
                        // Aufgeben und loslassen
                        hunter.isClimbing = false;
                        hunter.climbingTargetIndex = -1;
                        hunter.climbingProgress = 0;
                        hunter.climbCooldown = 60; // Kurzer Cooldown nach Loslassen
                        this.log('Jäger gibt auf beim Klettern - keine Stamina mehr', 'info');
                    } else if (hunter.climbingTargetIndex >= 0 && hunter.climbingTargetIndex < this.tier.segments.length) {
                        const attachedSeg = this.tier.segments[hunter.climbingTargetIndex];
                        
                        // Jäger ist am Segment festgehalten - bewege ihn mit dem Spieler mit
                        // Aktualisiere Kletter-Animation-Phase für Wackeln
                        hunter.climbingAnimationPhase += 0.2;
                        
                        hunter.headX = attachedSeg.x;
                        hunter.headY = attachedSeg.y;
                        hunter.segments[0].x = hunter.headX;
                        hunter.segments[0].y = hunter.headY;
                        
                        // Aktualisiere alle Segmente des Jägers (folgen dem Kopf)
                        for (let i = 1; i < hunter.segments.length; i++) {
                            const prevSeg = hunter.segments[i - 1];
                            const currentSeg = hunter.segments[i];
                            const dx = prevSeg.x - currentSeg.x;
                            const dy = prevSeg.y - currentSeg.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            
                            if (distance > hunter.segmentDistance) {
                                const moveX = (dx / distance) * (distance - hunter.segmentDistance);
                                const moveY = (dy / distance) * (distance - hunter.segmentDistance);
                                currentSeg.x += moveX;
                                currentSeg.y += moveY;
                            }
                        }
                        
                        // Prüfe ob wir zum nächsten Segment vorziehen sollen
                        if (hunter.climbingProgress > 0 && hunter.climbingProgress < 1.0) {
                            // Animiertes Vorziehen zum nächsten Segment (in Progress)
                            const nextIndex = hunter.climbingTargetIndex - 1;
                            if (nextIndex >= 0 && nextIndex < this.tier.segments.length) {
                                const nextSeg = this.tier.segments[nextIndex];
                                const targetX = nextSeg.x;
                                const targetY = nextSeg.y;
                                
                                // Interpoliere zwischen aktuellem und nächstem Segment
                                hunter.headX = attachedSeg.x + (targetX - attachedSeg.x) * hunter.climbingProgress;
                                hunter.headY = attachedSeg.y + (targetY - attachedSeg.y) * hunter.climbingProgress;
                                hunter.segments[0].x = hunter.headX;
                                hunter.segments[0].y = hunter.headY;
                                
                                // Erhöhe Fortschritt
                                hunter.climbingProgress += 0.05; // Langsame Animation
                                
                                if (hunter.climbingProgress >= 1.0) {
                                    // Segment erreicht - ziehe dich vor
                                    hunter.climbingTargetIndex = nextIndex;
                                    hunter.climbingProgress = 1.0; // Zurück zu "vollständig angeheftet"
                                    
                                    // Zähler für gekletterte Segmente erhöhen
                                    hunter.climbSegmentCount++;
                                    
                                    // Jäger verliert Stamina nur bei jedem 2. Segment
                                    if (hunter.climbSegmentCount % 2 === 0) {
                                        const oldStamina = hunter.currentStamina;
                                        hunter.currentStamina = Math.max(0, hunter.currentStamina - 1);
                                        if (oldStamina !== hunter.currentStamina) {
                                            this.log(`Jäger klettert vor - Stamina: ${oldStamina} → ${hunter.currentStamina} (Segment ${hunter.climbingTargetIndex})`, 'info');
                                        }
                                    }
                                    
                                    // Prüfe ob Kopf erreicht
                                    if (hunter.climbingTargetIndex <= 0) {
                                        // Kopf erreicht! Spieler verliert Segment und bekommt Schaden
                                        this.tier.shrink();
                                        this.damageFlash = 20;
                                        
                                        // Speed-Debuff für Hunter aktivieren (3 Sekunden = 180 Frames)
                                        hunter.speedDebuffActive = true;
                                        hunter.speedDebuffDuration = 180;
                                        this.log('Hunter Speed-Debuff aktiviert (3s) - Kopf gebissen', 'error');
                                        
                                        // Prüfe auf Game Over
                                        if (this.checkGameOver()) {
                                            return; // Spiel beendet
                                        }
                                        
                                        // Partikel-Effekt
                                        const headPos = this.tier.getHeadPosition();
                                        for (let i = 0; i < 15; i++) {
                                            this.particles.push(new Particle(
                                                headPos.x + (Math.random() - 0.5) * 4,
                                                headPos.y + (Math.random() - 0.5) * 4,
                                                '#ff4444'
                                            ));
                                        }
                                        
                                        // Jäger wird stärker
                                        const oldLength = hunter.numSegments;
                                        hunter.grow();
                                        hunter.increaseSpeedFromFood();
                                        hunter.foodCount++;
                                        
                                        this.log(`Jäger beißt Spieler (Kopf) - Jäger Länge: ${oldLength} → ${hunter.numSegments}, Food Count: ${hunter.foodCount}`, 'error');
                                        
                                        // Bei jedem 2. Food/Biss: Max Stamina erhöhen
                                        if (hunter.foodCount % 2 === 0) {
                                            hunter.maxStamina++;
                                            hunter.currentStamina = Math.min(hunter.currentStamina + 1, hunter.maxStamina);
                                            this.log(`Jäger Max Stamina erhöht: ${hunter.maxStamina}`, 'info');
                                        }
                                        
                                        // Loslassen
                                        hunter.isClimbing = false;
                                        hunter.climbingTargetIndex = -1;
                                        hunter.climbingProgress = 0;
                                        hunter.damageCooldown = 120;
                                        this.updateScore();
                                        
                                        // Nur normale Jäger (nicht Elite) spawnen Fat Hunter nach langer Animation
                                        if (!hunter.isElite) {
                                            // Starte lange Animation für Fat Hunter Spawn
                                            this.fatHunterSpawnAnimation = {
                                                duration: 180, // 3 Sekunden bei 60 FPS (lange Animation)
                                                phase: 0,
                                                hunterX: hunter.headX,
                                                hunterY: hunter.headY
                                            };
                                            this.log('Fat Hunter Spawn-Animation gestartet', 'warning');
                                        }
                                    } else {
                                        // Starte Timer für nächstes Vorziehen
                                        hunter.climbMoveTimer = 0;
                                    }
                                }
                            }
                        } else if (hunter.climbingProgress >= 1.0) {
                            // Vollständig angeheftet - warte bis Timer abgelaufen ist, dann beginne Vorziehen
                            hunter.climbMoveTimer++;
                            if (hunter.climbMoveTimer >= hunter.climbMoveInterval) {
                                hunter.climbMoveTimer = 0;
                                hunter.climbingProgress = 0.01; // Starte Vorziehen
                            }
                        }
                    }
                }
                
                // Kollisionsprüfung zwischen Jäger und Spieler (mit individuellem Cooldown)
                if (hunter.damageCooldown === 0 && !hunter.isClimbing) {
                    const hunterHead = hunter.getHeadPosition();
                    
                    // Während Speed-Boost: Nur Kopf jagen, Körper ignorieren
                    if (hunter.speedBoostActive || hunter.speedBoostAnimation) {
                        // Nur Kopf-Kollision prüfen
                        const playerHead = this.tier.getHeadPosition();
                        const dx = hunterHead.x - playerHead.x;
                        const dy = hunterHead.y - playerHead.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 12) {
                            // Kopf erreicht - normaler Biss
                            const hitSegment = this.tier.segments[0]; // Kopf
                            
                            // Speed-Debuff für Hunter aktivieren (3 Sekunden = 180 Frames)
                            hunter.speedDebuffActive = true;
                            hunter.speedDebuffDuration = 180;
                            this.log('Hunter Speed-Debuff aktiviert (3s) - Kopf gebissen', 'error');
                            
                            // Erstelle Partikel-Effekt (Blut/Splitter) am getroffenen Segment
                            for (let i = 0; i < 12; i++) {
                                // Rote Partikel (Blut)
                                this.particles.push(new Particle(
                                    hitSegment.x + (Math.random() - 0.5) * 4,
                                    hitSegment.y + (Math.random() - 0.5) * 4,
                                    '#ff4444'
                                ));
                                // Dunklere Partikel (Fleisch/Splitter)
                                this.particles.push(new Particle(
                                    hitSegment.x + (Math.random() - 0.5) * 4,
                                    hitSegment.y + (Math.random() - 0.5) * 4,
                                    '#8a2a2a'
                                ));
                            }
                            
                            // Biss-Animation starten
                            this.biteAnimation = {
                                duration: 15, // Kurze Animation
                                hunterIndex: hunterIndex,
                                hunterX: hunterHead.x,
                                hunterY: hunterHead.y,
                                targetX: hitSegment.x,
                                targetY: hitSegment.y
                            };
                            
                            // Damage-Flash starten
                            this.damageFlash = 20; // Kurzer roter Flash
                            
                            // Spieler verliert ein Segment
                            this.tier.shrink();
                            
                            // Speed-Debuff für Hunter aktivieren (3 Sekunden = 180 Frames)
                            hunter.speedDebuffActive = true;
                            hunter.speedDebuffDuration = 180;
                            this.log('Hunter Speed-Debuff aktiviert (3s) - Kopf gebissen', 'error');
                            
                            // Prüfe auf Game Over
                            if (this.checkGameOver()) {
                                return; // Spiel beendet
                            }
                            
                            // Jäger wird stärker: wächst und bekommt Speed-Boost (zählt als Food)
                            hunter.grow();
                            hunter.increaseSpeedFromFood(); // 5% wie beim Food-Essen
                            hunter.foodCount++; // Zählt als Food-Token
                            
                            // Bei jedem 2. Food/Biss: Max Stamina erhöhen
                            if (hunter.foodCount % 2 === 0) {
                                hunter.maxStamina++;
                                hunter.currentStamina = Math.min(hunter.currentStamina + 1, hunter.maxStamina);
                            }
                            
                            // Prüfe auf Speed-Boost (bei jedem Essen/Biss)
                            if (!hunter.speedBoostActive && !hunter.speedBoostAnimation && hunter.speedBoostDelay === 0) {
                                // Starte Delay (3 Sekunden)
                                hunter.speedBoostDelay = 180; // 3 Sekunden bei 60 FPS
                            }
                            
                            // Prüfe auf Fortpflanzung (alle 10 Foods)
                            if (hunter.foodCount >= 10 && !hunter.reproductionAnimation) {
                                hunter.foodCount = 0; // Zähler zurücksetzen
                                // Starte dramatische Fortpflanzungs-Animation
                                hunter.reproductionAnimation = {
                                    duration: 60, // 1 Sekunde bei 60 FPS
                                    phase: 0
                                };
                            }
                            
                            // Individueller Cooldown für diesen Jäger
                            hunter.damageCooldown = 120; // 2 Sekunden bei 60 FPS
                            this.updateScore();
                        }
                    } else {
                        // Normale Kollisionsprüfung (ohne Speed-Boost)
                        const closest = hunter.findClosestSegmentIndex(this.tier.segments);
                        
                        // Berechne minimale Stamina für Klettern (50% aufgerundet)
                        const minStaminaForClimbing = Math.ceil(hunter.maxStamina * 0.5);
                        
                        // Prüfe ob hinteres Segment (nicht Kopf) erreicht wurde
                        // Nur klettern, wenn genug Stamina vorhanden ist (mindestens 50% aufgerundet)
                        if (closest.index > 0 && closest.distance < 12 && hunter.currentStamina >= minStaminaForClimbing) {
                            // Hinteres Segment erreicht - beginne zu klettern
                            hunter.isClimbing = true;
                            hunter.climbingTargetIndex = closest.index; // Halte dich an diesem Segment fest
                            hunter.climbingProgress = 1.0; // Vollständig angeheftet
                            hunter.climbMoveTimer = 0; // Starte Timer für Vorziehen
                            hunter.climbSegmentCount = 0; // Zähler zurücksetzen
                            this.log(`Jäger beginnt zu klettern - Segment ${closest.index}, Stamina: ${hunter.currentStamina}/${hunter.maxStamina}`, 'warning');
                        } else if (closest.index === 0 && closest.distance < 12) {
                            // Kopf erreicht - normaler Biss
                            // Finde das Segment, das am nächsten zum Jäger ist (für visuellen Effekt)
                            let closestSegmentIndex = 0;
                            let minDistance = Infinity;
                            for (let i = 0; i < this.tier.segments.length; i++) {
                                const seg = this.tier.segments[i];
                                const dx = seg.x - hunterHead.x;
                                const dy = seg.y - hunterHead.y;
                                const distance = Math.sqrt(dx * dx + dy * dy);
                                if (distance < minDistance) {
                                    minDistance = distance;
                                    closestSegmentIndex = i;
                                }
                            }
                            
                            const hitSegment = this.tier.segments[closestSegmentIndex];
                            
                            // Erstelle Partikel-Effekt (Blut/Splitter) am getroffenen Segment
                            for (let i = 0; i < 12; i++) {
                                // Rote Partikel (Blut)
                                this.particles.push(new Particle(
                                    hitSegment.x + (Math.random() - 0.5) * 4,
                                    hitSegment.y + (Math.random() - 0.5) * 4,
                                    '#ff4444'
                                ));
                                // Dunklere Partikel (Fleisch/Splitter)
                                this.particles.push(new Particle(
                                    hitSegment.x + (Math.random() - 0.5) * 4,
                                    hitSegment.y + (Math.random() - 0.5) * 4,
                                    '#8a2a2a'
                                ));
                            }
                            
                            // Biss-Animation starten
                            this.biteAnimation = {
                                duration: 15, // Kurze Animation
                                hunterIndex: hunterIndex,
                                hunterX: hunterHead.x,
                                hunterY: hunterHead.y,
                                targetX: hitSegment.x,
                                targetY: hitSegment.y
                            };
                            
                            // Damage-Flash starten
                            this.damageFlash = 20; // Kurzer roter Flash
                            
                            // Spieler verliert ein Segment
                            this.tier.shrink();
                            
                            // Speed-Debuff für Hunter aktivieren (3 Sekunden = 180 Frames)
                            hunter.speedDebuffActive = true;
                            hunter.speedDebuffDuration = 180;
                            this.log('Hunter Speed-Debuff aktiviert (3s) - Kopf gebissen', 'error');
                            
                            // Prüfe auf Game Over
                            if (this.checkGameOver()) {
                                return; // Spiel beendet
                            }
                            
                            // Jäger wird stärker: wächst und bekommt Speed-Boost (zählt als Food)
                            hunter.grow();
                            hunter.increaseSpeedFromFood(); // 5% wie beim Food-Essen
                            hunter.foodCount++; // Zählt als Food-Token
                            
                            // Bei jedem 2. Food/Biss: Max Stamina erhöhen
                            if (hunter.foodCount % 2 === 0) {
                                hunter.maxStamina++;
                                hunter.currentStamina = Math.min(hunter.currentStamina + 1, hunter.maxStamina);
                            }
                            
                            // Prüfe auf Speed-Boost (bei jedem Essen/Biss)
                            if (!hunter.speedBoostActive && !hunter.speedBoostAnimation && hunter.speedBoostDelay === 0) {
                                // Starte Delay (3 Sekunden)
                                hunter.speedBoostDelay = 180; // 3 Sekunden bei 60 FPS
                            }
                            
                            // Prüfe auf Fortpflanzung (alle 10 Foods)
                            if (hunter.foodCount >= 10 && !hunter.reproductionAnimation) {
                                hunter.foodCount = 0; // Zähler zurücksetzen
                                // Starte dramatische Fortpflanzungs-Animation
                                hunter.reproductionAnimation = {
                                    duration: 60, // 1 Sekunde bei 60 FPS
                                    phase: 0
                                };
                            }
                            
                            // Individueller Cooldown für diesen Jäger
                            hunter.damageCooldown = 120; // 2 Sekunden bei 60 FPS
                            this.updateScore();
                        }
                    }
                }
            }
        }
        
        // Fat Hunter Spawn-Animation visuell darstellen
        if (this.fatHunterSpawnAnimation) {
            const anim = this.fatHunterSpawnAnimation;
            const progress = 1.0 - (anim.duration / 180.0); // 0.0 bis 1.0
            const pulse = Math.sin(anim.phase * 0.1) * 0.5 + 0.5;
            
            // Pulsierender grünlich/brauner Glow-Effekt
            const glowRadius = 15 + pulse * 10 + progress * 20;
            const gradient = ctx.createRadialGradient(
                anim.hunterX, anim.hunterY, 0,
                anim.hunterX, anim.hunterY, glowRadius
            );
            
            // Grünlich/braune Farbe für Fat Hunter
            const r = Math.floor(106 + progress * 50); // 106-156
            const g = Math.floor(138 + progress * 50); // 138-188
            const b = Math.floor(74 + progress * 30);  // 74-104
            
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulse * 0.6})`);
            gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${pulse * 0.3})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(anim.hunterX, anim.hunterY, glowRadius, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Hungry Leech Mutation: Größen-Boost langsam verringern
        if (this.hungryLeechSizeBoost > 0) {
            this.hungryLeechSizeBoost -= 0.02; // Langsam verringern
            if (this.hungryLeechSizeBoost < 0) {
                this.hungryLeechSizeBoost = 0;
            }
        }
        
        // Magnetic Skin Mutation: Zieht Tokens an
        if (this.tier && Object.keys(this.activeMutations).some(id => id.includes('magnetic_skin'))) {
            const playerHead = this.tier.getHeadPosition();
            const magneticMutations = Object.keys(this.activeMutations).filter(id => id.includes('magnetic_skin'));
            
            let totalRange = 0;
            magneticMutations.forEach(mutationId => {
                const mutation = MUTATIONS.find(m => m.id === mutationId);
                if (mutation) {
                    const stacks = this.activeMutations[mutationId];
                    totalRange += mutation.bonusPerStack * stacks;
                }
            });
            
            // Ziehe Food-Tokens an - optimiert mit squared distance (kein Math.sqrt)
            const totalRangeSquared = totalRange * totalRange;
            for (let i = 0; i < this.foods.length; i++) {
                const food = this.foods[i];
                const dx = playerHead.x - food.x;
                const dy = playerHead.y - food.y;
                const distanceSquared = dx * dx + dy * dy;
                
                if (distanceSquared <= totalRangeSquared && distanceSquared > 0) {
                    const distance = Math.sqrt(distanceSquared); // Nur einmal sqrt wenn nötig
                    const pullStrength = (1 - distance / totalRange) * 0.8;
                    food.x += (dx / distance) * pullStrength;
                    food.y += (dy / distance) * pullStrength;
                }
            }
            
            // Ziehe Stamina-Tokens an - optimiert mit squared distance
            for (let i = 0; i < this.staminaTokens.length; i++) {
                const token = this.staminaTokens[i];
                const dx = playerHead.x - token.x;
                const dy = playerHead.y - token.y;
                const distanceSquared = dx * dx + dy * dy;
                
                if (distanceSquared <= totalRangeSquared && distanceSquared > 0) {
                    const distance = Math.sqrt(distanceSquared); // Nur einmal sqrt wenn nötig
                    const pullStrength = (1 - distance / totalRange) * 0.8;
                    token.x += (dx / distance) * pullStrength;
                    token.y += (dy / distance) * pullStrength;
                }
            }
        }
        
        // Tier aktualisieren und zeichnen (Zuerst Spieler, dann Gegner darüber)
        if (this.tier) {
            // Geschwindigkeit mit Slider-Multiplikator anwenden
            // Die Basis-Geschwindigkeit wird durch increaseSpeed() erhöht
            // Hier wird zusätzlich der Slider-Wert angewendet
            const baseSpeed = this.tier.baseSpeed * this.tier.speedMultiplier;
            const baseWaveSpeed = 0.12;
            
            this.tier.speed = baseSpeed * this.speed;
            this.tier.waveSpeed = baseWaveSpeed * this.speed;
            
            // Mausposition an Tier übergeben für Verfolgung
            // Berechne Welt-Koordinaten basierend auf aktueller Kamera-Position und Zoom
            if (this.lastMouseClientX !== null && this.lastMouseClientY !== null) {
                const canvasX = this.lastMouseClientX / PIXEL_SCALE;
                const canvasY = this.lastMouseClientY / PIXEL_SCALE;
                // Konvertiere Canvas-Koordinaten zu Welt-Koordinaten
                // Transformation: (canvasX - renderWidth/2) / zoom + cameraX
                this.mouseX = (canvasX - renderWidth / 2) / this.cameraZoom + this.cameraX;
                this.mouseY = (canvasY - renderHeight / 2) / this.cameraZoom + this.cameraY;
                this.tier.setTarget(this.mouseX, this.mouseY);
            }
            // Wenn die Maus außerhalb ist, behält die Kreatur das letzte Ziel bei
            
            // Tentakel-Kreaturen aktualisieren (vor Spieler-Update)
            for (let i = 0; i < this.tentacleCreatures.length; i++) {
                const tentacleCreature = this.tentacleCreatures[i];
                if (tentacleCreature && tentacleCreature.update) {
                    tentacleCreature.update();
                    tentacleCreature.checkGrabTargets(this);
                }
            }
            
            // Prüfe ob Spieler von Tentakel gegriffen wird - verhindere Bewegung
            let isPlayerGrabbed = false;
            for (let i = 0; i < this.tentacleCreatures.length; i++) {
                const tentacleCreature = this.tentacleCreatures[i];
                if (tentacleCreature) {
                    for (let j = 0; j < tentacleCreature.tentacles.length; j++) {
                        const tentacle = tentacleCreature.tentacles[j];
                        if (tentacle.grabbedEntity === this.tier && tentacle.grabDuration > 0) {
                            isPlayerGrabbed = true;
                            // Verhindere Bewegung des Spielers
                            this.tier.targetSpeed = 0;
                            this.tier.currentSpeed = 0;
                            break;
                        }
                    }
                }
            }
            
            // Prüfe ob Hunter von Tentakel gegriffen werden - verhindere Bewegung
            for (let i = 0; i < this.hunters.length; i++) {
                const hunter = this.hunters[i];
                if (!hunter) continue;
                
                let isHunterGrabbed = false;
                for (let j = 0; j < this.tentacleCreatures.length; j++) {
                    const tentacleCreature = this.tentacleCreatures[j];
                    if (tentacleCreature) {
                        for (let k = 0; k < tentacleCreature.tentacles.length; k++) {
                            const tentacle = tentacleCreature.tentacles[k];
                            if (tentacle.grabbedEntity === hunter && tentacle.grabDuration > 0) {
                                isHunterGrabbed = true;
                                // Verhindere Bewegung des Hunters
                                hunter.targetSpeed = 0;
                                hunter.currentSpeed = 0;
                                break;
                            }
                        }
                    }
                }
            }
            
            this.tier.update();
            
            // Performance: Track Update-Zeit
            const updateStartTime = performance.now();
            
            // Performance: Track Entity-Counts und Update-Zeit
            this.performanceStats.entityCounts.foods = this.foods.length;
            this.performanceStats.entityCounts.hunters = this.hunters.length;
            this.performanceStats.entityCounts.fatHunters = this.fatHunters.length;
            this.performanceStats.entityCounts.tentacles = this.tentacleCreatures.length;
            this.performanceStats.entityCounts.bosses = this.bosses.length;
            this.performanceStats.entityCounts.projectiles = this.projectiles.length;
            this.performanceStats.entityCounts.particles = this.particles.length;
            this.performanceStats.entityCounts.playerSegments = this.tier ? this.tier.numSegments : 0;
            
            const updateEndTime = performance.now();
            this.performanceStats.updateTime = updateEndTime - updateStartTime;
            
            // Kontinuierliche Boss-Spawn-Prüfung ab Länge 100 (alle 3 Sekunden)
            if (this.tier && this.tier.numSegments >= 100) {
                if (!this.bossSpawnCheckTimer) {
                    this.bossSpawnCheckTimer = 0;
                }
                this.bossSpawnCheckTimer++;
                // Prüfe alle 3 Sekunden (180 Frames bei 60 FPS)
                if (this.bossSpawnCheckTimer >= 180) {
                    const minBosses = 3;
                    if (this.bosses.length < minBosses) {
                        // Spawne fehlende Bosse
                        const missingBosses = minBosses - this.bosses.length;
                        this.spawnBosses(missingBosses);
                    }
                    this.bossSpawnCheckTimer = 0;
                }
            }
            
            // Bosses aktualisieren (wenn vorhanden)
            if (this.bosses.length > 0) {
                const playerHead = this.tier.getHeadPosition();
                for (let i = this.bosses.length - 1; i >= 0; i--) {
                    const boss = this.bosses[i];
                    if (boss && boss.setTarget && boss.update) {
                        boss.setTarget(playerHead.x, playerHead.y);
                        boss.update();
                    } else {
                        // Boss ist ungültig - entferne ihn
                        this.bosses.splice(i, 1);
                        this.log('Ungültiger Boss entfernt', 'warning');
                    }
                }
                
                // Prüfe Kollision mit Boss-Schwänzen und Boss-Köpfen
                if (this.bosses.length > 0) {
                    this.checkBossTailCollision();
                    this.checkBossHeadCollision();
                }
            }
            
            // Foods und Tokens ZUERST zeichnen (unter allem) - for Loop ist schneller als forEach
            for (let i = 0; i < this.foods.length; i++) {
                this.foods[i].draw();
            }
            
            // Stamina-Token zeichnen
            for (let i = 0; i < this.staminaTokens.length; i++) {
                this.staminaTokens[i].draw();
            }
            
            this.tier.draw(this); // Simulator-Referenz für Flash-Effekt - Spieler wird zuerst gezeichnet
            
            // Alle Gegner über dem Spieler zeichnen (nach Spieler)
            // Normale Jäger zeichnen
            if (this.hunters.length > 0) {
                for (let hunterIndex = 0; hunterIndex < this.hunters.length; hunterIndex++) {
                    const hunter = this.hunters[hunterIndex];
                    // Viewport-Culling: Überspringe Hunter außerhalb des sichtbaren Bereichs
                    if (!this.isInViewport(hunter.headX, hunter.headY, 50)) {
                        continue;
                    }
                    // Zeichne Jäger mit verschiedenen Animationen
                    if (hunter.reproductionAnimation) {
                        hunter.drawWithReproduction();
                    } else if (hunter.speedBoostAnimation || hunter.speedBoostActive) {
                        hunter.drawWithSpeedBoost();
                    } else if (this.biteAnimation && this.biteAnimation.hunterIndex === hunterIndex) {
                        hunter.drawWithBite(this.biteAnimation.targetX, this.biteAnimation.targetY);
                    } else if (hunter.isClimbing) {
                        // Dezente Kletter-Animation (Wackeln/Knabbern)
                        hunter.drawWithClimbing();
                    } else {
                        hunter.draw();
                    }
                }
            }
            
            // Fette Jäger zeichnen - for Loop ist schneller
            for (let i = 0; i < this.fatHunters.length; i++) {
                const fatHunter = this.fatHunters[i];
                // Viewport-Culling: Überspringe Fat Hunter außerhalb des sichtbaren Bereichs
                if (!this.isInViewport(fatHunter.headX, fatHunter.headY, 60)) {
                    continue;
                }
                fatHunter.draw();
            }
            
            // Bosses zeichnen (wenn vorhanden)
            for (let i = this.bosses.length - 1; i >= 0; i--) {
                const boss = this.bosses[i];
                if (boss && boss.draw) {
                    try {
                        // Prüfe ob Boss im Viewport ist
                        if (boss.segments && boss.segments.length > 0) {
                            const bossHead = boss.segments[0];
                            if (this.isInViewport(bossHead.x, bossHead.y, 50)) {
                                // Boss ist sichtbar - zeichne normal
                                boss.draw();
                            }
                            // Wenn Boss außerhalb ist, wird er später mit Richtungsindikator gezeichnet
                        } else {
                            boss.draw(); // Fallback
                        }
                    } catch (error) {
                        console.error('Fehler beim Zeichnen von Boss:', error);
                        this.bosses.splice(i, 1); // Entferne fehlerhaften Boss
                    }
                }
            }
            
            // Tentakel-Kreaturen zeichnen (über allem)
            for (let i = 0; i < this.tentacleCreatures.length; i++) {
                const tentacleCreature = this.tentacleCreatures[i];
                if (tentacleCreature && tentacleCreature.draw) {
                    // Prüfe ob Tentakel-Kreatur im Viewport ist
                    if (this.isInViewport(tentacleCreature.x, tentacleCreature.y, 150)) {
                        tentacleCreature.draw();
                    }
                }
            }
            
            // Richtungsindikatoren für Bosses außerhalb des Viewports zeichnen (mit Kamera-Transformation)
            this.drawBossDirectionIndicators();
            
            // Futter-Kollision prüfen
            const eatenFoodIndex = this.checkFoodCollision();
            if (eatenFoodIndex !== null) {
                const food = this.foods[eatenFoodIndex];
                
                // Starte Food-Animation durch den Körper (vom Kopf zur Mitte)
                if (this.tier) {
                    this.tier.animatingTokens.push({
                        type: 'food', // Token-Typ
                        progress: 0, // Startet am Kopf
                        x: food.x,
                        y: food.y,
                        size: food.size || 3,
                        digestPhase: 0, // Wird später gesetzt wenn Verdauung beginnt
                        digestStarted: false // Flag für Verdauung
                    });
                }
                
                // Entferne gefressenes Food
                this.foods.splice(eatenFoodIndex, 1);
                
                // Ess-Animation starten
                if (this.tier) {
                    this.tier.justAte = true;
                    this.tier.eatingAnimationTimer = 20; // 20 Frames Animation
                    this.tier.mouthOpen = 0.8;
                }
                
                const oldLength = this.tier.numSegments;
                this.tier.grow();
                this.tier.increaseSpeed(); // Geschwindigkeit erhöhen
                this.score += 10;
                this.foodCount++;
                this.updateScore();
                
                // Prüfe ob Länge 50 erreicht wurde (Animation nur einmal beim ersten Erreichen)
                if (oldLength < 50 && this.tier.numSegments >= 50 && !this.length50MilestoneReached) {
                    this.length50MilestoneReached = true;
                    this.startLength50Animation();
                }
                
                // Kontinuierliche Elite Hunter Spawns ab Länge 50 (nicht nur beim ersten Erreichen)
                if (this.tier.numSegments >= 50) {
                    // Elite Hunter spawnen bereits kontinuierlich in generateChunk und spawnRandomHunters
                    // Zusätzlich können wir hier spezielle "near player" Elite Hunter spawnen
                    // (wird bereits durch nearbyHunterSpawnTimer gehandhabt)
                }
                
                // Prüfe ob Länge 100 erreicht wurde (Animation nur einmal beim ersten Erreichen)
                if (oldLength < 100 && this.tier.numSegments >= 100 && !this.length100MilestoneReached) {
                    this.length100MilestoneReached = true;
                    this.startLength100Animation();
                }
                
                // Kontinuierliche Boss-Spawns ab Länge 100 (nicht nur beim ersten Erreichen)
                if (this.tier.numSegments >= 100) {
                    // Stelle sicher, dass mindestens 3 Bosse vorhanden sind
                    const minBosses = 3;
                    if (this.bosses.length < minBosses) {
                        // Spawne fehlende Bosse
                        const missingBosses = minBosses - this.bosses.length;
                        this.spawnBosses(missingBosses);
                    }
                }
                
                // Fortschritt speichern
                this.saveProgress();
                
                // Hungry Leech Mutation: Körper wird größer beim Essen
                const hungryLeechMutations = Object.keys(this.activeMutations).filter(id => id.includes('hungry_leech'));
                if (hungryLeechMutations.length > 0) {
                    // Setze temporären Größen-Boost auf 1.0 (max)
                    this.hungryLeechSizeBoost = 1.0;
                    // Log nur einmal pro Sekunde, um Spam zu vermeiden
                    if (!this.lastHungryLeechLog || (Date.now() - this.lastHungryLeechLog) > 1000) {
                    this.log('Hungry Leech: Körper wird größer!', 'success');
                        this.lastHungryLeechLog = Date.now();
                    }
                }
                
                this.log(`Food gegessen - Score: ${this.score}, Länge: ${this.tier.numSegments}`, 'info');
                
                // Spawne neues Food (nur EINES)
                this.spawnFood();
                
                // Prüfe auf extra Food Chance (nur wenn Regeneration-Upgrade vorhanden)
                const hasRegeneration = Object.keys(this.activeUpgrades).some(id => id.includes('regeneration'));
                if (hasRegeneration && this.extraFoodChance > 0) {
                    const roll = Math.random() * 100;
                    if (roll < this.extraFoodChance) {
                        // Spawne zusätzliches Food
                        this.spawnFood();
                        this.log('Extra Food gespawnt (Regeneration)', 'success');
                    }
                }
                
                // Alle 10 Futter: Upgrade-Auswahl
                if (this.foodCount % 10 === 0) {
                    this.showUpgradeSelection();
                }
                
                // Alle 30 Futter: Mutation-Auswahl (statt Upgrade)
                if (this.foodCount % 30 === 0 && this.foodCount > 0) {
                    this.showMutationSelection();
                }
            }
            
            // Stamina-Token-Kollision prüfen
            const eatenTokenIndex = this.checkStaminaTokenCollision();
            if (eatenTokenIndex !== null) {
                const token = this.staminaTokens[eatenTokenIndex];
                
                // Starte Token-Animation durch den Körper (vom Kopf zur Mitte)
                if (this.tier) {
                    this.tier.animatingTokens.push({
                        type: 'stamina', // Token-Typ
                        progress: 0, // Startet am Kopf
                        x: token.x,
                        y: token.y,
                        size: token.size || 2.5,
                        digestPhase: 0, // Wird später gesetzt wenn Verdauung beginnt
                        digestStarted: false // Flag für Stamina-Hinzufügung
                    });
                }
                
                // Entferne gefressenen Stamina-Token
                this.staminaTokens.splice(eatenTokenIndex, 1);
                
                // Stamina wird erst hinzugefügt, wenn Token verdaut ist (in update())
            }
        }
        
        // Projektil-Update und -Kollision (rückwärts iterieren für sichere Entfernung)
        for (let projIndex = this.projectiles.length - 1; projIndex >= 0; projIndex--) {
            const projectile = this.projectiles[projIndex];
            projectile.update();
            
            // Prüfe ob Projektil noch lebt
            if (projectile.lifetime <= 0) {
                this.projectiles.splice(projIndex, 1);
                continue;
            }
            
            let projectileHit = false;
            
            // Prüfe Kollision mit Jägern (rückwärts iterieren)
            for (let i = this.hunters.length - 1; i >= 0; i--) {
                const hunter = this.hunters[i];
                if (!hunter || !hunter.segments || hunter.segments.length === 0) {
                    // Ungültiger Hunter - entferne
                    this.hunters.splice(i, 1);
                    continue;
                }
                
                const hunterHead = hunter.getHeadPosition();
                if (projectile.checkCollision(hunterHead.x, hunterHead.y, 8)) {
                    // Treffer! Reduziere HP
                    hunter.currentHP--;
                    
                        // Wenn Hunter beim Klettern ist, lasse ihn los
                        if (hunter.isClimbing) {
                            hunter.isClimbing = false;
                            hunter.climbingTargetIndex = -1;
                            hunter.climbingProgress = 0;
                            hunter.climbCooldown = 60;
                            this.log('Jäger durch Schuss getroffen - Klettern abgebrochen', 'info');
                        }
                    
                    if (hunter.currentHP <= 0) {
                        // Jäger stirbt
                        this.hunters.splice(i, 1);
                        this.log('Jäger durch Schuss eliminiert!', 'success');
                    } else {
                        // Jäger überlebt, verliert aber ein Segment
                        if (hunter.numSegments > 1) {
                            hunter.shrink();
                    }
                        this.log(`Jäger getroffen! HP: ${hunter.currentHP}/${hunter.maxHP}`, 'info');
                    }
                    
                    // Projektil entfernen
                    projectileHit = true;
                    break; // Projektil kann nur einen Treffer machen
                }
            }
            
            // Wenn Projektil getroffen hat, entferne es
            if (projectileHit) {
                this.projectiles.splice(projIndex, 1);
                continue;
            }
            
            // Prüfe Kollision mit Fat Hunters (nur wenn Projektil noch nicht getroffen hat)
            if (!projectileHit) {
            for (let i = this.fatHunters.length - 1; i >= 0; i--) {
                const fatHunter = this.fatHunters[i];
                    if (!fatHunter || !fatHunter.segments || fatHunter.segments.length === 0) {
                        // Ungültiger Fat Hunter - entferne
                        this.fatHunters.splice(i, 1);
                        continue;
                    }
                    
                const fatHunterHead = fatHunter.getHeadPosition();
                if (projectile.checkCollision(fatHunterHead.x, fatHunterHead.y, 10)) {
                        // Treffer! Reduziere HP
                        fatHunter.currentHP--;
                        
                        if (fatHunter.currentHP <= 0) {
                        // Fat Hunter stirbt
                        this.fatHunters.splice(i, 1);
                        this.log('Fat Hunter durch Schuss eliminiert!', 'success');
                        } else {
                            // Fat Hunter überlebt, verliert aber ein Segment
                            if (fatHunter.numSegments > 1) {
                                fatHunter.shrink();
                    }
                            this.log(`Fat Hunter getroffen! HP: ${fatHunter.currentHP}/${fatHunter.maxHP}`, 'info');
                        }
                        
                    // Projektil entfernen
                        projectileHit = true;
                        break; // Projektil kann nur einen Treffer machen
                    }
                }
            }
            
            // Wenn Projektil getroffen hat oder abgelaufen ist, entferne es
            if (projectileHit || projectile.lifetime <= 0) {
                this.projectiles.splice(projIndex, 1);
            }
        }
        
        // Projektil zeichnen - for Loop ist schneller
        for (let i = 0; i < this.projectiles.length; i++) {
            this.projectiles[i].draw();
        }
        
        // Shockwave-Animation aktualisieren und zeichnen
        if (this.shockwaveAnimation) {
            this.shockwaveAnimation.duration--;
            this.shockwaveAnimation.radius += (this.shockwaveAnimation.maxRadius - this.shockwaveAnimation.radius) * 0.2;
            
            if (this.shockwaveAnimation.duration > 0) {
                // Zeichne Shockwave
                const progress = 1.0 - (this.shockwaveAnimation.duration / 30.0);
                const alpha = (1.0 - progress) * 0.5;
                const radius = this.shockwaveAnimation.radius;
                
                ctx.save();
                ctx.strokeStyle = `rgba(0, 200, 255, ${alpha})`;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(
                    Math.floor(this.shockwaveAnimation.x),
                    Math.floor(this.shockwaveAnimation.y),
                    radius,
                    0,
                    Math.PI * 2
                );
                ctx.stroke();
                
                // Innerer Ring
                ctx.strokeStyle = `rgba(100, 255, 255, ${alpha * 0.7})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(
                    Math.floor(this.shockwaveAnimation.x),
                    Math.floor(this.shockwaveAnimation.y),
                    radius * 0.7,
                    0,
                    Math.PI * 2
                );
                ctx.stroke();
                ctx.restore();
            } else {
                this.shockwaveAnimation = null;
            }
        }
        
        // Blut-Animation aktualisieren und zeichnen
        if (this.bloodAnimation) {
            this.bloodAnimation.duration--;
            this.bloodAnimation.phase++;
            
            // Aktualisiere Blut-Partikel
            for (let i = this.bloodAnimation.particles.length - 1; i >= 0; i--) {
                const particle = this.bloodAnimation.particles[i];
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vy += 0.3; // Schwerkraft
                particle.lifetime--;
                particle.size *= 0.98; // Wird kleiner
                
                if (particle.lifetime <= 0 || particle.size < 0.5) {
                    this.bloodAnimation.particles.splice(i, 1);
                }
            }
            
            if (this.bloodAnimation.duration > 0) {
                this.drawBloodAnimation();
            } else {
                this.bloodAnimation = null;
            }
        }
        
        // Partikel zeichnen (über allem) - for Loop ist schneller
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw();
        }
        
        // Länge 50 Meilenstein-Animation zeichnen (über allem, ohne Kamera-Transformation)
        if (this.length50Animation) {
            this.drawLength50Animation();
        }
        
        // Länge 100 Meilenstein-Animation zeichnen
        if (this.length100Animation) {
            this.drawLength100Animation();
        }
        
        // Win-Animation zeichnen (über allem)
        if (this.winAnimation) {
            this.drawWinAnimation();
        }
        
        // Dynamische Beleuchtung: Lichter erhellen ihre Umgebung
        this.drawDynamicLighting();
        
        // Richtungsindikatoren für Bosses außerhalb des Viewports (ohne Kamera-Transformation)
        this.drawBossDirectionIndicatorsScreen();
        
        // Kamera-Transformation wiederherstellen
        ctx.restore();
        // Stelle sicher, dass Pixel-Art Rendering nach restore() wieder aktiv ist
        ctx.imageSmoothingEnabled = false;
        
        // Aktualisiere Player Stats (jeden Frame)
        this.updatePlayerStats();
        
        // Performance: Track Draw-Zeit
        const drawEndTime = performance.now();
        this.performanceStats.drawTime = drawEndTime - drawStartTime;
        
        // Performance-Monitoring: Update Stats
        this.updatePerformanceStats(frameStartTime);
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    drawDynamicLighting() {
        // Dynamisches Beleuchtungssystem: Lichter erhellen ihre Umgebung
        // Verwende "screen" Blend-Mode für additive Beleuchtung
        ctx.save();
        ctx.globalCompositeOperation = 'screen'; // Screen-Mode für additive Beleuchtung
        
        // Sammle alle Lichtquellen
        const lightSources = [];
        
        // Spieler-Kopf als Lichtquelle (kleiner)
        if (this.tier && this.tier.segments && this.tier.segments.length > 0) {
            const playerHead = this.tier.getHeadPosition();
            if (playerHead && isFinite(playerHead.x) && isFinite(playerHead.y)) {
                lightSources.push({
                    x: playerHead.x,
                    y: playerHead.y,
                    radius: 40,
                    intensity: 0.25,
                    color: '#ffffaa' // Warmes gelbes Licht vom Spieler
                });
            }
        }
        
        // Hunter als Lichtquellen (nur kleine Akzente) - nur in aktiver Zone
        if (this.tier) {
            const playerHead = this.tier.getHeadPosition();
            const activeZoneRadiusSquared = this.activeZoneRadius * this.activeZoneRadius;
            
            for (let i = 0; i < this.hunters.length; i++) {
                const hunter = this.hunters[i];
                if (!hunter || !hunter.segments || hunter.segments.length === 0) continue;
                
                // Viewport-Culling: Nur Hunter in aktiver Zone als Lichtquellen
                const dx = playerHead.x - hunter.headX;
                const dy = playerHead.y - hunter.headY;
                if ((dx * dx + dy * dy) > activeZoneRadiusSquared) continue;
                
                const glowColor = hunter.colors?.glow || hunter.colors?.body || '#00ffff';
                // Nur kleine Lichtpunkte an bestimmten Segmenten
                for (let j = 0; j < hunter.segments.length; j += 4) {
                    const seg = hunter.segments[j];
                    if (seg && isFinite(seg.x) && isFinite(seg.y)) {
                        lightSources.push({
                            x: seg.x,
                            y: seg.y,
                            radius: 15,
                            intensity: 0.15,
                            color: glowColor
                        });
                    }
                }
            }
            
            // Fat Hunter als Lichtquellen (nur kleine Akzente) - nur in aktiver Zone
            for (let i = 0; i < this.fatHunters.length; i++) {
                const fatHunter = this.fatHunters[i];
                if (!fatHunter || !fatHunter.segments || fatHunter.segments.length === 0) continue;
                
                // Viewport-Culling: Nur Fat Hunter in aktiver Zone als Lichtquellen
                const dx = playerHead.x - fatHunter.headX;
                const dy = playerHead.y - fatHunter.headY;
                if ((dx * dx + dy * dy) > activeZoneRadiusSquared) continue;
                
                const glowColor = fatHunter.colors?.glow || fatHunter.colors?.body || '#00ff00';
                // Nur kleine Lichtpunkte an bestimmten Segmenten
                for (let j = 0; j < fatHunter.segments.length; j += 4) {
                    const seg = fatHunter.segments[j];
                    if (seg && isFinite(seg.x) && isFinite(seg.y)) {
                        lightSources.push({
                            x: seg.x,
                            y: seg.y,
                            radius: 18,
                            intensity: 0.18,
                            color: glowColor
                        });
                    }
                }
            }
        }
        
        // Bosses als Lichtquellen (etwas größer, aber reduziert)
        for (let i = 0; i < this.bosses.length; i++) {
            const boss = this.bosses[i];
            if (boss && boss.segments && boss.segments.length > 0) {
                const bossHead = boss.getHeadPosition();
                if (bossHead && isFinite(bossHead.x) && isFinite(bossHead.y)) {
                    lightSources.push({
                        x: bossHead.x,
                        y: bossHead.y,
                        radius: 50,
                        intensity: 0.3,
                        color: '#ff0000' // Rotes Licht von Bosses
                    });
                }
            }
        }
        
        // Zeichne Beleuchtung für jede Lichtquelle
        for (let i = 0; i < lightSources.length; i++) {
            const light = lightSources[i];
            
            // Validierung: Prüfe ob alle Werte gültig sind (nicht NaN oder Infinity)
            if (!light || 
                typeof light.x !== 'number' || !isFinite(light.x) ||
                typeof light.y !== 'number' || !isFinite(light.y) ||
                typeof light.radius !== 'number' || !isFinite(light.radius) ||
                light.radius <= 0) {
                continue; // Überspringe ungültige Lichtquellen
            }
            
            // Radialgradient für Licht
            const gradient = ctx.createRadialGradient(
                light.x, light.y, 0,
                light.x, light.y, light.radius
            );
            
            // Konvertiere Hex-Farbe zu RGB
            const hex = light.color.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${light.intensity})`);
            gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${light.intensity * 0.5})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    drawBackground() {
        // Berechne sichtbaren Bereich basierend auf Kamera-Position
        const viewLeft = this.cameraX - renderWidth / 2;
        const viewRight = this.cameraX + renderWidth / 2;
        const viewTop = this.cameraY - renderHeight / 2;
        const viewBottom = this.cameraY + renderHeight / 2;
        
        // Erweitere den sichtbaren Bereich um einen Puffer (für glatte Übergänge)
        const padding = 200;
        const drawLeft = Math.floor(viewLeft - padding);
        const drawRight = Math.ceil(viewRight + padding);
        const drawTop = Math.floor(viewTop - padding);
        const drawBottom = Math.ceil(viewBottom + padding);
        
        // Prüfe ob Werte endlich sind (verhindert NaN/Infinity Fehler)
        if (!isFinite(drawTop) || !isFinite(drawBottom) || !isFinite(drawLeft) || !isFinite(drawRight)) {
            // Fallback: einfacher Hintergrund
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, renderWidth, renderHeight);
            return;
        }
        
        // Tiefsee-Hintergrund: Gradient von dunkelblau oben zu fast schwarz unten
        const gradient = ctx.createLinearGradient(0, drawTop, 0, drawBottom);
        gradient.addColorStop(0, '#0a0a1a'); // Sehr dunkles Blau oben
        gradient.addColorStop(0.3, '#050510'); // Noch dunkler
        gradient.addColorStop(0.6, '#020208'); // Fast schwarz
        gradient.addColorStop(1, '#000000'); // Komplett schwarz unten
        
        ctx.fillStyle = gradient;
        ctx.fillRect(drawLeft, drawTop, drawRight - drawLeft, drawBottom - drawTop);
        
        // Subtile Lichtpartikel von oben (wie Lichtstrahlen in der Tiefsee)
        ctx.save();
        ctx.globalAlpha = 0.15;
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const x = drawLeft + (i * (drawRight - drawLeft) / particleCount) + Math.sin(Date.now() * 0.0001 + i) * 50;
            const y = drawTop + Math.sin(Date.now() * 0.0002 + i * 0.5) * 100;
            const size = 2 + Math.sin(Date.now() * 0.0003 + i) * 1;
            
            // Lichtstrahl-Effekt (vertikal von oben)
            const lightGradient = ctx.createLinearGradient(x, drawTop, x, drawTop + 200);
            lightGradient.addColorStop(0, 'rgba(0, 50, 100, 0.3)');
            lightGradient.addColorStop(0.5, 'rgba(0, 30, 60, 0.15)');
            lightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = lightGradient;
            ctx.fillRect(x - size, drawTop, size * 2, 200);
        }
        ctx.restore();
        
        // Zeichne Welt-Grenzen nur wenn sie im sichtbaren Bereich sind (Tiefsee-Stil)
        const wallThickness = 3;
        const wallColor = '#000000'; // Komplett schwarz für Tiefsee-Wände
        ctx.fillStyle = wallColor;
        
        // Obere Wand (nur wenn sichtbar)
        if (viewTop <= 0 && viewBottom >= 0) {
            ctx.fillRect(Math.max(drawLeft, 0), 0, Math.min(drawRight, this.worldWidth) - Math.max(drawLeft, 0), wallThickness);
        }
        // Untere Wand (nur wenn sichtbar)
        if (viewTop <= this.worldHeight && viewBottom >= this.worldHeight) {
            ctx.fillRect(Math.max(drawLeft, 0), this.worldHeight - wallThickness, Math.min(drawRight, this.worldWidth) - Math.max(drawLeft, 0), wallThickness);
        }
        // Linke Wand (nur wenn sichtbar)
        if (viewLeft <= 0 && viewRight >= 0) {
            ctx.fillRect(0, Math.max(drawTop, 0), wallThickness, Math.min(drawBottom, this.worldHeight) - Math.max(drawTop, 0));
        }
        // Rechte Wand (nur wenn sichtbar)
        if (viewLeft <= this.worldWidth && viewRight >= this.worldWidth) {
            ctx.fillRect(this.worldWidth - wallThickness, Math.max(drawTop, 0), wallThickness, Math.min(drawBottom, this.worldHeight) - Math.max(drawTop, 0));
        }
        
        // Zusätzliche visuelle Marker an den Ecken (nur wenn sichtbar) - Tiefsee-Stil
        const cornerSize = 15;
        ctx.fillStyle = '#001122'; // Sehr dunkles Blau für Tiefsee-Atmosphäre
        
        // Obere linke Ecke
        if (viewLeft <= cornerSize && viewTop <= cornerSize && viewRight >= 0 && viewBottom >= 0) {
            ctx.fillRect(0, 0, cornerSize, cornerSize);
        }
        // Obere rechte Ecke
        if (viewLeft <= this.worldWidth && viewTop <= cornerSize && viewRight >= this.worldWidth - cornerSize && viewBottom >= 0) {
            ctx.fillRect(this.worldWidth - cornerSize, 0, cornerSize, cornerSize);
        }
        // Untere linke Ecke
        if (viewLeft <= cornerSize && viewTop <= this.worldHeight && viewRight >= 0 && viewBottom >= this.worldHeight - cornerSize) {
            ctx.fillRect(0, this.worldHeight - cornerSize, cornerSize, cornerSize);
        }
        // Untere rechte Ecke
        if (viewLeft <= this.worldWidth && viewTop <= this.worldHeight && viewRight >= this.worldWidth - cornerSize && viewBottom >= this.worldHeight - cornerSize) {
            ctx.fillRect(this.worldWidth - cornerSize, this.worldHeight - cornerSize, cornerSize, cornerSize);
        }
        
        // Pixel-Art Boden-Textur (nur innerhalb der Weltgrenzen, aber für sichtbaren Bereich)
        ctx.fillStyle = '#2a2a2a';
        const floorStartY = Math.max(drawTop, this.worldHeight - 20);
        const floorEndY = Math.min(drawBottom, this.worldHeight);
        const floorStartX = Math.max(drawLeft, 0);
        const floorEndX = Math.min(drawRight, this.worldWidth);
        
        for (let y = floorStartY; y < floorEndY; y++) {
            for (let x = floorStartX; x < floorEndX; x += 4) {
                if ((x + y) % 8 < 4) {
                    drawPixelRect(x, y, 2, 2, '#2a2a2a');
                }
            }
        }
        
        // Prozedurale Pixel-Art Details (nur innerhalb der Weltgrenzen)
        ctx.fillStyle = '#333333';
        for (let i = 0; i < 200; i++) {
            const x = (i * 47) % this.worldWidth;
            const y = (i * 73) % (this.worldHeight - 30);
            // Nur zeichnen wenn im sichtbaren Bereich
            if (x >= drawLeft && x <= drawRight && y >= drawTop && y <= drawBottom) {
                drawPixelRect(x, y, 1, 1, '#333333');
            }
        }
        
        // Regen-Effekt (optional, Rain World Stil) - für gesamten sichtbaren Bereich
        ctx.fillStyle = '#444444';
        const rainStartX = Math.max(drawLeft, 0);
        const rainEndX = Math.min(drawRight, this.worldWidth);
        const rainStartY = Math.max(drawTop, 0);
        const rainEndY = Math.min(drawBottom, this.worldHeight);
        
        for (let i = 0; i < 100; i++) {
            const x = (i * 53 + Date.now() * 0.01) % this.worldWidth;
            const y = (i * 37 + Date.now() * 0.02) % this.worldHeight;
            // Nur zeichnen wenn im sichtbaren Bereich
            if (x >= rainStartX && x <= rainEndX && y >= rainStartY && y <= rainEndY) {
                drawPixelRect(Math.floor(x), Math.floor(y), 1, 3, '#444444');
            }
        }
    }
    
    // Viewport-Culling: Prüft ob ein Objekt im sichtbaren Bereich ist
    isInViewport(x, y, radius = 0) {
        // Größeres Padding für bessere Sichtbarkeit (400 Pixel für Gegner)
        const padding = 400; // Erhöht von 200 auf 400 für bessere Sichtbarkeit
        const viewLeft = this.cameraX - renderWidth / (2 * this.cameraZoom) - radius - padding;
        const viewRight = this.cameraX + renderWidth / (2 * this.cameraZoom) + radius + padding;
        const viewTop = this.cameraY - renderHeight / (2 * this.cameraZoom) - radius - padding;
        const viewBottom = this.cameraY + renderHeight / (2 * this.cameraZoom) + radius + padding;
        
        return x >= viewLeft && x <= viewRight && y >= viewTop && y <= viewBottom;
    }
    
    // Prüft ob ein Rechteck im Viewport ist (für größere Objekte)
    isRectInViewport(x, y, width, height) {
        const viewLeft = this.cameraX - renderWidth / (2 * this.cameraZoom);
        const viewRight = this.cameraX + renderWidth / (2 * this.cameraZoom);
        const viewTop = this.cameraY - renderHeight / (2 * this.cameraZoom);
        const viewBottom = this.cameraY + renderHeight / (2 * this.cameraZoom);
        
        // Prüfe ob Rechteck den Viewport schneidet
        return !(x + width < viewLeft || x > viewRight || y + height < viewTop || y > viewBottom);
    }
    
    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawBackground();
        
        // Foods rendern - Culling ist bereits in isInViewport mit großem Padding
        for (let i = 0; i < this.foods.length; i++) {
            const food = this.foods[i];
            if (this.isInViewport(food.x, food.y, food.size)) {
            food.draw();
            }
        }
        
        // Stamina-Token rendern - for Loop ist schneller
        for (let i = 0; i < this.staminaTokens.length; i++) {
            const token = this.staminaTokens[i];
            if (this.isInViewport(token.x, token.y, token.size)) {
            token.draw();
            }
        }
        
        // Spieler zuerst zeichnen (unter den Gegnern) - immer rendern, da er immer sichtbar sein sollte
        if (this.tier) {
            this.tier.draw(this); // Simulator-Referenz für Flash-Effekt
        }
        
        // Nur Jäger rendern, die im Viewport sind - for Loop ist schneller
        for (let i = 0; i < this.hunters.length; i++) {
            const hunter = this.hunters[i];
            if (hunter.segments && hunter.segments.length > 0) {
                const headX = hunter.segments[0].x;
                const headY = hunter.segments[0].y;
                // Schätze Radius basierend auf Segment-Anzahl
                const estimatedRadius = Math.max(20, hunter.segments.length * 2);
                if (this.isInViewport(headX, headY, estimatedRadius)) {
            hunter.draw();
                }
            }
        }
        
        // Nur fette Jäger rendern, die im Viewport sind - for Loop ist schneller
        for (let i = 0; i < this.fatHunters.length; i++) {
            const fatHunter = this.fatHunters[i];
            if (fatHunter.segments && fatHunter.segments.length > 0) {
                const headX = fatHunter.segments[0].x;
                const headY = fatHunter.segments[0].y;
                // Schätze Radius basierend auf Segment-Anzahl (fette Jäger sind größer)
                const estimatedRadius = Math.max(30, fatHunter.segments.length * 3);
                if (this.isInViewport(headX, headY, estimatedRadius)) {
            fatHunter.draw();
                }
            }
        }
        
        // Nur Partikel rendern, die im Viewport sind - for Loop ist schneller
        for (let i = 0; i < this.particles.length; i++) {
            const particle = this.particles[i];
            if (this.isInViewport(particle.x, particle.y, particle.size)) {
            particle.draw();
            }
        }
    }
}

// UI-Texte aktualisieren basierend auf aktueller Sprache
function updateUITexts() {
    // Score und Länge Labels
    const scoreLabel = document.getElementById('scoreLabel');
    const lengthLabel = document.getElementById('lengthLabel');
    if (scoreLabel) {
        const scoreValue = document.getElementById('scoreValue')?.textContent || '0';
        scoreLabel.innerHTML = `${t('score')}: <span id="scoreValue">${scoreValue}</span>`;
    }
    if (lengthLabel) {
        const lengthValue = document.getElementById('lengthValue')?.textContent || '10';
        lengthLabel.innerHTML = `${t('length')}: <span id="lengthValue">${lengthValue}</span>`;
    }
    
    // Buttons
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');
    if (startBtn) startBtn.textContent = t('start');
    if (stopBtn) stopBtn.textContent = t('stop');
    if (resetBtn) resetBtn.textContent = t('reset');
    
    // Dev Mode Speed Label
    const devModeSpeedLabel = document.getElementById('devModeSpeedLabel');
    const devModeSpeedText = document.getElementById('devModeSpeedText');
    const devModeSpeedSlider = document.getElementById('devModeSpeedSlider');
    const devModeSpeedValue = document.getElementById('devModeSpeedValue');
    if (devModeSpeedText) devModeSpeedText.textContent = t('speed') + ':';
    if (devModeSpeedSlider && devModeSpeedValue && window.simulator) {
        devModeSpeedSlider.value = window.simulator.speed;
        devModeSpeedValue.textContent = window.simulator.speed.toFixed(1) + 'x';
    }
    
    // Highscore Tab Buttons
    const upgradesTabBtn = document.getElementById('upgradesTabBtn');
    const highscoreTabBtn = document.getElementById('highscoreTabBtn');
    const highscoreTitle = document.getElementById('highscoreTitle');
    if (upgradesTabBtn) upgradesTabBtn.textContent = t('upgrades');
    if (highscoreTabBtn) highscoreTabBtn.textContent = t('highscore');
    if (highscoreTitle) highscoreTitle.textContent = t('highscore');
    
    // Highscore Name Input
    const highscoreCongratsText = document.getElementById('highscoreCongratsText');
    const highscoreEnterNameText = document.getElementById('highscoreEnterNameText');
    const submitHighscoreBtn = document.getElementById('submitHighscoreBtn');
    const skipHighscoreBtn = document.getElementById('skipHighscoreBtn');
    const highscorePlayerNameInput = document.getElementById('playerNameInput'); // Für Highscore-Eingabe
    if (highscoreCongratsText) highscoreCongratsText.textContent = t('congratsTop100');
    if (highscoreEnterNameText) highscoreEnterNameText.textContent = t('enterName');
    if (submitHighscoreBtn) submitHighscoreBtn.textContent = t('save');
    if (skipHighscoreBtn) skipHighscoreBtn.textContent = t('skip');
    if (highscorePlayerNameInput) highscorePlayerNameInput.placeholder = t('name');
    
    // Login/Register UI
    const loginTitle = document.getElementById('loginTitle');
    const registerTitle = document.getElementById('registerTitle');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const showRegisterBtn = document.getElementById('showRegisterBtn');
    const showLoginBtn = document.getElementById('showLoginBtn');
    const noAccountText = document.getElementById('noAccountText');
    const hasAccountText = document.getElementById('hasAccountText');
    const welcomeText = document.getElementById('welcomeText');
    const logoutBtn = document.getElementById('logoutBtn');
    const generateHashtagBtn = document.getElementById('generateHashtagBtn');
    const loginNameInput = document.getElementById('loginNameInput');
    const registerNameInput = document.getElementById('registerNameInput');
    const registerHashtagInput = document.getElementById('registerHashtagInput');
    
    if (loginTitle) loginTitle.textContent = t('loginTitle');
    if (registerTitle) registerTitle.textContent = t('registerTitle');
    if (loginBtn) loginBtn.textContent = t('login');
    if (registerBtn) registerBtn.textContent = t('register');
    if (showRegisterBtn) showRegisterBtn.textContent = t('register');
    if (showLoginBtn) showLoginBtn.textContent = t('login');
    if (noAccountText) noAccountText.textContent = t('noAccount');
    if (hasAccountText) hasAccountText.textContent = t('hasAccount');
    if (welcomeText) welcomeText.textContent = t('welcome');
    if (logoutBtn) logoutBtn.textContent = t('logout');
    if (generateHashtagBtn) generateHashtagBtn.textContent = '🎲 ' + t('random');
    if (loginNameInput) loginNameInput.placeholder = t('name');
    if (registerNameInput) registerNameInput.placeholder = t('name');
    if (registerHashtagInput) registerHashtagInput.placeholder = t('hashtag');
    
    // Name-Eingabe Bereich
    const nameTitle = document.getElementById('nameTitle');
    const playerNameInput = document.getElementById('playerNameInput');
    const startGameBtn = document.getElementById('startGameBtn');
    if (nameTitle) nameTitle.textContent = t('enterName').replace(':', ''); // "Enter your name" ohne Doppelpunkt
    if (playerNameInput) playerNameInput.placeholder = t('name');
    if (startGameBtn) startGameBtn.textContent = t('startGame');
    
    // Zurück zum Menü Button während des Spiels
    const backToMenuFromGameBtn = document.getElementById('backToMenuFromGameBtn');
    if (backToMenuFromGameBtn) backToMenuFromGameBtn.textContent = t('backToMenu');
    
    // Upgrade Overlay
    const upgradeOverlayTitle = document.getElementById('upgradeOverlayTitle');
    if (upgradeOverlayTitle) upgradeOverlayTitle.textContent = t('selectUpgrade');
    
    // Mutation Overlay
    const mutationOverlayTitle = document.getElementById('mutationOverlayTitle');
    if (mutationOverlayTitle) mutationOverlayTitle.textContent = t('selectMutation');
    const currentLengthText = document.getElementById('currentLengthText');
    if (currentLengthText) {
        const currentLength = document.getElementById('currentLengthDisplay')?.textContent || '10';
        currentLengthText.innerHTML = `${t('currentLength')}: <span id="currentLengthDisplay">${currentLength}</span> ${t('segments')}`;
    }
    
    // Active Upgrades
    const activeUpgradesTitle = document.getElementById('activeUpgradesTitle');
    if (activeUpgradesTitle) activeUpgradesTitle.textContent = t('activeUpgrades');
    const noUpgradesText = document.getElementById('noUpgradesText');
    if (noUpgradesText) noUpgradesText.textContent = t('noUpgrades');
    
    // Game Over
    const gameOverTitle = document.getElementById('gameOverTitle');
    if (gameOverTitle) gameOverTitle.textContent = t('gameOver');
    const finalScoreText = document.getElementById('finalScoreText');
    if (finalScoreText) {
        const finalScore = document.getElementById('finalScore')?.textContent || '0';
        finalScoreText.innerHTML = `${t('finalScore')}: <span id="finalScore">${finalScore}</span>`;
    }
    const finalLengthText = document.getElementById('finalLengthText');
    if (finalLengthText) {
        const finalLength = document.getElementById('finalLength')?.textContent || '0';
        finalLengthText.innerHTML = `${t('lengthReached')}: <span id="finalLength">${finalLength}</span>`;
    }
    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) restartBtn.textContent = t('restart');
    
    // Dev Mode
    const devModeTitle = document.querySelector('#devModeOverlay h2');
    if (devModeTitle) devModeTitle.textContent = t('devModeTitle');
    const devModeUpgradesTab = document.getElementById('devModeUpgradesTab');
    const devModeMutationsTab = document.getElementById('devModeMutationsTab');
    const devModeCloseBtn = document.getElementById('devModeCloseBtn');
    const devModeAllUpgradesTitle = document.getElementById('devModeAllUpgradesTitle');
    const devModeAllMutationsTitle = document.getElementById('devModeAllMutationsTitle');
    const devModeCurrentLengthText = document.getElementById('devModeCurrentLengthText');
    if (devModeUpgradesTab) devModeUpgradesTab.textContent = t('upgrades');
    if (devModeMutationsTab) devModeMutationsTab.textContent = t('mutations');
    if (devModeCloseBtn) devModeCloseBtn.textContent = t('close');
    if (devModeAllUpgradesTitle) devModeAllUpgradesTitle.textContent = `${t('all')} ${t('upgrades')}`;
    if (devModeAllMutationsTitle) devModeAllMutationsTitle.textContent = `${t('all')} ${t('mutations')}`;
    if (devModeCurrentLengthText) {
        const devModeCurrentLength = document.getElementById('devModeCurrentLength')?.textContent || '10';
        devModeCurrentLengthText.innerHTML = `${t('currentLength')}: <span id="devModeCurrentLength">${devModeCurrentLength}</span> ${t('segments')}`;
    }
    
    // Debug Log
    const debugLogHeader = document.querySelector('#debugLogHeader span:first-child');
    const copyLogBtn = document.getElementById('copyLogBtn');
    const clearLogBtn = document.getElementById('clearLogBtn');
    if (debugLogHeader) debugLogHeader.textContent = t('debugLog');
    if (copyLogBtn) copyLogBtn.textContent = t('copyLog');
    if (clearLogBtn) clearLogBtn.textContent = t('clear');
    
    // Upgrade Display aktualisieren (falls Simulator bereits existiert)
    if (window.simulator) {
        window.simulator.updateUpgradeDisplay();
    }
}

// Sprachauswahl Event-Listener
function setupLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Flaggen-Emojis für verschiedene Sprachen
    const flags = {
        de: '🇩🇪',
        en: '🇬🇧',
        fr: '🇫🇷',
        es: '🇪🇸',
        ja: '🇯🇵'
    };
    
    // Button klicken öffnet/schließt Menü
    if (languageBtn) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageMenu.style.display = languageMenu.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    // Sprache auswählen
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            currentLanguage = lang;
            localStorage.setItem('gameLanguage', lang);
            
            // Button-Emoji aktualisieren
            if (languageBtn) {
                languageBtn.textContent = flags[lang] || '🇬🇧';
            }
            
            // Menü schließen
            languageMenu.style.display = 'none';
            
            // UI-Texte aktualisieren
            updateUITexts();
            
            // HTML lang-Attribut aktualisieren
            document.documentElement.lang = lang;
        });
    });
    
    // Klick außerhalb schließt Menü
    document.addEventListener('click', () => {
        if (languageMenu) {
            languageMenu.style.display = 'none';
        }
    });
    
    // Initial Button-Emoji setzen
    if (languageBtn) {
        languageBtn.textContent = flags[currentLanguage] || '🇬🇧';
    }
    
    // Initial UI-Texte aktualisieren
    updateUITexts();
}

// Initialisierung - warte bis DOM geladen ist
function initializeGame() {
    // Stelle sicher, dass Canvas initialisiert ist
    if (!canvas || !ctx) {
        if (!initCanvas()) {
            console.error('Failed to initialize canvas!');
            return;
        }
    }
    
    // Simulator initialisieren
    const simulator = new Simulator();
    window.simulator = simulator; // Für Debug-Log-Zugriff
    simulator.updateUpgradeDisplay();
    
    // Zeichne NICHT beim Start, da Container versteckt ist
    // Das würde zu einem Fehler führen, da Canvas noch keine Größe hat
    // simulator.draw();
    
    // Sprachauswahl einrichten
    setupLanguageSelector();
    
    // HTML lang-Attribut auf aktuelle Sprache setzen
    document.documentElement.lang = currentLanguage;
    
    // Hauptmenü anzeigen (Spiel startet im Menü)
    simulator.showMainMenu();
}

// Warte bis DOM vollständig geladen ist
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    // DOM ist bereits geladen, initialisiere sofort
    initializeGame();
}



