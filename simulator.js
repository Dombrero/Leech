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
const canvas = document.getElementById('simulatorCanvas');
const ctx = canvas.getContext('2d');

// Pixel-Art Einstellungen
const PIXEL_SCALE = 2; // Niedrigere Auflösung für Pixel-Look
let displayWidth, displayHeight;
let renderWidth, renderHeight;

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
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
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Pixel-Art Zeichenfunktion
function drawPixelRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(x), Math.floor(y), Math.floor(w), Math.floor(h));
}

function drawPixelCircle(x, y, r, color) {
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
            tier.turnSpeed *= 1.15;
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
            tier.turnSpeed *= 1.3;
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
            tier.turnSpeed *= 1.5;
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
            tier.turnSpeed *= 1.75;
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
            tier.turnSpeed *= 1.3;
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
        
        // Segment-Initialisierung
        this.initializeSegments(x, y);
        
        // Farben im Rain World Stil
        this.colors = {
            body: '#4a4a4a',
            bodyDark: '#2a2a2a',
            bodyLight: '#6a6a6a',
            leg: '#5a5a5a', // Hellere Farbe für Beine
            legDark: '#3a3a3a', // Dunklere Bein-Farbe für Kontrast
            eye: '#ff4444',
            eyeGlow: '#ff8888'
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
        if (this.currentStamina > 0 && !this.staminaSpeedBoostAnimation) {
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
        // Stamina-Regeneration (wenn nicht voll)
        if (this.currentStamina < this.maxStamina) {
            this.staminaRegenTimer++;
            if (this.staminaRegenTimer >= this.staminaRegenInterval) {
                this.staminaRegenTimer = 0;
                this.currentStamina = Math.min(this.currentStamina + 1, this.maxStamina);
            }
        } else {
            this.staminaRegenTimer = 0; // Reset Timer wenn voll
        }
        
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
                // Speed-Boost beendet
                this.staminaSpeedBoostActive = false;
                this.staminaSpeedBoostMultiplier = 1.0;
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
        const turnStrength = this.hasTarget ? 0.12 : 0.08;
        const desiredAngularVelocity = angleDiff * turnStrength;
        
        // Sanfte Änderung der Winkelgeschwindigkeit (Trägheit)
        this.angularVelocity += (desiredAngularVelocity - this.angularVelocity) * 0.3;
        this.angularVelocity *= 0.95; // Dämpfung
        
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
        if (window.simulator && window.simulator.activeUpgrades) {
            // Zähle alle Speed-Upgrades
            let speedUpgradeCount = 0;
            Object.keys(window.simulator.activeUpgrades).forEach(upgradeId => {
                if (upgradeId.includes('speed_boost') || upgradeId.includes('power_legs')) {
                    speedUpgradeCount += window.simulator.activeUpgrades[upgradeId];
                }
            });
            
            // Berechne maximalen Bewegungsradius (kleiner mit mehr Speed-Upgrades)
            // Jedes Speed-Upgrade reduziert den Radius um 15%
            const radiusReduction = Math.pow(0.85, speedUpgradeCount); // Exponentiell kleiner
            this.maxMovementRadius = this.baseMovementRadius * radiusReduction;
            
            // Prüfe ob Spieler zu weit vom Anker entfernt ist
            const dx = this.headX - this.anchorX;
            const dy = this.headY - this.anchorY;
            const distanceFromAnchor = Math.sqrt(dx * dx + dy * dy);
            
            if (distanceFromAnchor > this.maxMovementRadius) {
                // Ziehe Spieler zurück zum Anker (wie eine unsichtbare Leine)
                const pullBackRatio = this.maxMovementRadius / distanceFromAnchor;
                this.headX = this.anchorX + dx * pullBackRatio;
                this.headY = this.anchorY + dy * pullBackRatio;
                
                // Ändere Richtung leicht (als ob man gegen eine unsichtbare Wand stößt)
                this.targetAngle = Math.atan2(dy, dx) + Math.PI; // In Richtung Anker
            }
        }
        
        // Welt-Grenzen prüfen (Kollision mit Wänden)
        const margin = 10; // Sicherheitsabstand zu den Wänden
        if (window.simulator) {
            const worldWidth = window.simulator.worldWidth;
            const worldHeight = window.simulator.worldHeight;
            
            // Linke Wand
            if (this.headX < margin) {
                this.headX = margin;
                this.targetAngle = Math.PI - this.targetAngle;
            }
            // Rechte Wand
            if (this.headX > worldWidth - margin) {
                this.headX = worldWidth - margin;
                this.targetAngle = Math.PI - this.targetAngle;
            }
            // Obere Wand
            if (this.headY < margin) {
                this.headY = margin;
                this.targetAngle = -this.targetAngle;
            }
            // Untere Wand
            if (this.headY > worldHeight - margin) {
                this.headY = worldHeight - margin;
                this.targetAngle = -this.targetAngle;
            }
        }
        
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
        for (let i = 1; i < this.segments.length; i++) {
            const prevSeg = this.segments[i - 1];
            const currentSeg = this.segments[i];
            
            // Normalisierte Position im Körper (0 = Kopf, 1 = Schwanz)
            const normalizedPos = i / this.segments.length;
            
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
        // Körper als zusammenhängende Form zeichnen
        // Zuerst den Körper-Umriss
        ctx.strokeStyle = this.colors.bodyDark;
        ctx.fillStyle = this.colors.body;
        ctx.lineWidth = 1;
        
        // Körper-Pfad erstellen
        ctx.beginPath();
        const bodyPoints = [];
        
        // Punkte für obere und untere Körperlinie sammeln
        for (let i = 0; i < this.segments.length; i++) {
            const seg = this.segments[i];
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
            const tailWidth = 0; // Spitz am Ende
            // Exponentielle Abnahme für natürlicheren Verlauf
            const widthFactor = Math.pow(1 - progress, 1.5); // 1.5 gibt eine schöne Kurve
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
        
        // Körper-Umriss zeichnen
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
        for (let i = 2; i < this.segments.length - 2; i += 2) {
            const seg = this.segments[i];
            const progress = i / this.segments.length;
            
            // Berechne Körperbreite an dieser Position (wie beim Körper-Zeichnen)
            const headWidth = 6;
            const tailWidth = 1;
            const widthFactor = Math.pow(1 - progress, 1.5); // Gleiche Kurve wie beim Körper
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
        const tailStart = Math.floor(this.segments.length * 0.85); // Letzte 15% sind Schwanz
        for (let i = 1; i < this.segments.length - 1 && i < tailStart; i++) {
            const seg = this.segments[i];
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
        let headSize = 8;
        
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
        
        // Augen (prozedural blinkend)
        const eyeOffset = 2.5;
        const blink = Math.sin(this.wavePhase * 3) > 0.7 ? 0.5 : 1;
        const eyeSize = 2 * blink;
        
        // Augen-Winkel basierend auf Bewegungsrichtung
        const eyeAngle = this.angle;
        const eyeX1 = head.x + Math.cos(eyeAngle) * 2 - Math.sin(eyeAngle) * eyeOffset;
        const eyeY1 = head.y + Math.sin(eyeAngle) * 2 + Math.cos(eyeAngle) * eyeOffset;
        const eyeX2 = head.x + Math.cos(eyeAngle) * 2 + Math.sin(eyeAngle) * eyeOffset;
        const eyeY2 = head.y + Math.sin(eyeAngle) * 2 - Math.cos(eyeAngle) * eyeOffset;
        
        // Linkes Auge
        drawPixelCircle(eyeX1, eyeY1, eyeSize, this.colors.eye);
        if (blink > 0.5) {
            drawPixelCircle(eyeX1 - 0.5, eyeY1 - 0.5, 0.5, this.colors.eyeGlow);
        }
        
        // Rechtes Auge
        drawPixelCircle(eyeX2, eyeY2, eyeSize, this.colors.eye);
        if (blink > 0.5) {
            drawPixelCircle(eyeX2 + 0.5, eyeY2 - 0.5, 0.5, this.colors.eyeGlow);
        }
        
        // Schnauze/Mund
        const snoutX = head.x + Math.cos(eyeAngle) * 4;
        const snoutY = head.y + Math.sin(eyeAngle) * 4;
        drawPixelCircle(snoutX, snoutY, 1.5, this.colors.bodyDark);
        
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
        this.colors = {
            body: this.isElite ? '#9d4edd' : '#2a2a6a', // Lila für Elite, dunkelblau für normal
            bodyDark: this.isElite ? '#7b2cbf' : '#1a1a4a', // Dunkleres Lila für Elite, dunkleres Blau für normal
            bodyLight: '#3a3a8a',
            eye: '#ffff00',
            eyeGlow: '#ffff88'
        };
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
        
        // Bewegung
        const waveOffset = Math.sin(this.wavePhase) * 1;
        const speedVariation = 1.0 + Math.sin(this.wavePhase * 2) * 0.1;
        const moveSpeed = this.currentSpeed * speedVariation;
        
        this.headX += Math.cos(this.angle) * moveSpeed;
        this.headY += Math.sin(this.angle) * moveSpeed + waveOffset * 0.2;
        
        // Welt-Grenzen prüfen (Kollision mit Wänden)
        const margin = 10; // Sicherheitsabstand zu den Wänden
        if (window.simulator) {
            const worldWidth = window.simulator.worldWidth;
            const worldHeight = window.simulator.worldHeight;
            
            // Linke Wand
            if (this.headX < margin) {
                this.headX = margin;
                this.targetAngle = Math.PI - this.targetAngle;
            }
            // Rechte Wand
            if (this.headX > worldWidth - margin) {
                this.headX = worldWidth - margin;
                this.targetAngle = Math.PI - this.targetAngle;
            }
            // Obere Wand
            if (this.headY < margin) {
                this.headY = margin;
                this.targetAngle = -this.targetAngle;
            }
            // Untere Wand
            if (this.headY > worldHeight - margin) {
                this.headY = worldHeight - margin;
                this.targetAngle = -this.targetAngle;
            }
        }
        
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
        // Finde das Segment, das am nächsten zum Jäger ist
        let closestIndex = 0;
        let minDistance = Infinity;
        for (let i = 0; i < playerSegments.length; i++) {
            const seg = playerSegments[i];
            const dx = seg.x - this.headX;
            const dy = seg.y - this.headY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }
        return { index: closestIndex, distance: minDistance };
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
        // Finde das nächste Food innerhalb von 50 Pixeln
        let nearestFood = null;
        let minDistance = 50; // Suchradius
        
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
        // Finde den nächsten Stamina-Token innerhalb von 50 Pixeln
        let nearestToken = null;
        let minDistance = 50; // Suchradius
        
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
        // Prüfe Kollision mit Stamina-Token
        const hunterHead = this.getHeadPosition();
        for (let i = 0; i < staminaTokens.length; i++) {
            const token = staminaTokens[i];
            const dx = hunterHead.x - token.x;
            const dy = hunterHead.y - token.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < token.size + 5) { // Kollisionsradius
                return i; // Index des gefressenen Stamina-Tokens
            }
        }
        return null;
    }
    
    checkFoodCollision(foods) {
        // Prüfe Kollision mit Food
        const hunterHead = this.getHeadPosition();
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
            const dx = hunterHead.x - food.x;
            const dy = hunterHead.y - food.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < food.size + 5) { // Kollisionsradius
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
        
        // Prozedurale Bewegungsvariablen
        this.wavePhase = 0;
        this.waveSpeed = 0.1; // Langsamere Wellenbewegung
        this.waveAmplitude = 3; // Größere Amplitude (dicker)
        
        // Food-Zähler
        this.foodCount = 0;
        
        // Damage-Cooldown (individuell für jeden Fat Hunter)
        this.damageCooldown = 0; // Cooldown zwischen Schäden (2 Sekunden = 120 Frames)
        
        // Reservierte Tokens (um Konflikte mit anderen fetten Hunters zu vermeiden)
        this.reservedFoodIndex = -1; // Index des reservierten Foods
        this.reservedTokenIndex = -1; // Index des reservierten Stamina-Tokens
        
        // Farben - grünlich/braun (fetter Look) - heller für bessere Sichtbarkeit
        this.colors = {
            body: '#6a8a4a',
            bodyDark: '#4a6a2a',
            bodyLight: '#8aaa6a',
            eye: '#ffff00',
            eyeGlow: '#ffff88'
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
        
        // Bewegung
        const waveOffset = Math.sin(this.wavePhase) * 1.5;
        const speedVariation = 1.0 + Math.sin(this.wavePhase * 2) * 0.1;
        const moveSpeed = this.currentSpeed * speedVariation;
        
        this.headX += Math.cos(this.angle) * moveSpeed;
        this.headY += Math.sin(this.angle) * moveSpeed + waveOffset * 0.2;
        
        // Welt-Grenzen prüfen (Kollision mit Wänden)
        const margin = 10; // Sicherheitsabstand zu den Wänden
        if (window.simulator) {
            const worldWidth = window.simulator.worldWidth;
            const worldHeight = window.simulator.worldHeight;
            
            // Linke Wand
            if (this.headX < margin) {
                this.headX = margin;
                this.targetAngle = Math.PI - this.targetAngle;
            }
            // Rechte Wand
            if (this.headX > worldWidth - margin) {
                this.headX = worldWidth - margin;
                this.targetAngle = Math.PI - this.targetAngle;
            }
            // Obere Wand
            if (this.headY < margin) {
                this.headY = margin;
                this.targetAngle = -this.targetAngle;
            }
            // Untere Wand
            if (this.headY > worldHeight - margin) {
                this.headY = worldHeight - margin;
                this.targetAngle = -this.targetAngle;
            }
        }
        
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
        const hunterHead = this.getHeadPosition();
        for (let i = 0; i < staminaTokens.length; i++) {
            const token = staminaTokens[i];
            const dx = hunterHead.x - token.x;
            const dy = hunterHead.y - token.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < token.size + 8) { // Größerer Kollisionsradius
                return i;
            }
        }
        return null;
    }
    
    getHeadPosition() {
        return { x: this.headX, y: this.headY };
    }
    
    checkFoodCollision(foods) {
        const hunterHead = this.getHeadPosition();
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
            const dx = hunterHead.x - food.x;
            const dy = hunterHead.y - food.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < food.size + 8) { // Größerer Kollisionsradius
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
    
    draw() {
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
        this.score = 0;
        this.foodCount = 0; // Zähler für Upgrades
        this.mutationCount = 0; // Zähler für Mutationen (alle 30 Food-Token)
        this.pendingUpgrades = false;
        this.pendingMutations = false;
        this.extraFoodChance = 0; // Chance auf zusätzliches Food (in %)
        this.activeUpgrades = {}; // { upgradeId: stacks }
        this.activeMutations = {}; // { mutationId: stacks }
        this.hungryLeechSizeBoost = 0; // Temporärer Größen-Boost für Hungry Leech (0-1)
        this.particles = []; // Partikel für visuelle Effekte
        this.biteAnimation = null; // Biss-Animation
        this.damageFlash = 0; // Flash-Effekt beim Treffer
        this.fatHunterSpawnAnimation = null; // Animation für Fat Hunter Spawn { duration: number, phase: number, hunterX: number, hunterY: number }
        this.debugLog = []; // Debug-Log Einträge
        this.maxLogEntries = 100; // Maximale Anzahl von Log-Einträgen
        
        // Open-World-System
        this.updateWorldSize(); // Initialisiere Weltgröße
        this.cameraX = 0; // Kamera-Position in Welt-Koordinaten
        this.cameraY = 0;
        this.cameraFollowSpeed = 0.1; // Wie schnell die Kamera folgt (0.1 = sanft)
        
        // Hunter-Spawning
        this.hunterSpawnTimer = 0;
        this.hunterSpawnInterval = 600; // Alle 10 Sekunden (bei 60 FPS) - viel häufiger
        this.maxHunters = 50; // Maximale Anzahl von Hunters in der Welt (viel mehr)
        this.maxFatHunters = 20; // Maximale Anzahl von Fat Hunters
        
        this.setupControls();
        this.setupDebugLog();
    }
    
    updateWorldSize() {
        // Aktualisiere Weltgröße basierend auf aktueller Canvas-Größe
        // Fallback auf Standard-Werte falls renderWidth/renderHeight noch nicht gesetzt sind
        const baseWidth = renderWidth || 800;
        const baseHeight = renderHeight || 600;
        this.worldWidth = baseWidth * 5; // Welt ist 5x größer als Canvas
        this.worldHeight = baseHeight * 5;
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
        document.getElementById('startBtn').addEventListener('click', () => this.start());
        document.getElementById('stopBtn').addEventListener('click', () => this.stop());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        
        const speedSlider = document.getElementById('speedSlider');
        const speedValue = document.getElementById('speedValue');
        
        speedSlider.addEventListener('input', (e) => {
            this.speed = parseFloat(e.target.value);
            speedValue.textContent = this.speed.toFixed(1) + 'x';
        });
        
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
        
        // Restart-Button für Game Over
        document.getElementById('restartBtn').addEventListener('click', () => {
            document.getElementById('gameOverOverlay').style.display = 'none';
            this.reset();
            this.start();
        });
        
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
    
    spawnRandomHunters(count) {
        // Spawne Hunter random in der Welt (nicht zu nah am Spieler)
        const minDistance = 200; // Mindestabstand zum Spieler (reduziert für mehr Spawns)
        const playerHead = this.tier ? this.tier.getHeadPosition() : { x: this.worldWidth / 2, y: this.worldHeight / 2 };
        
        for (let i = 0; i < count; i++) {
            let hunterX, hunterY;
            let validPosition = false;
            let attempts = 0;
            
            while (!validPosition && attempts < 50) {
                hunterX = 50 + Math.random() * (this.worldWidth - 100);
                hunterY = 50 + Math.random() * (this.worldHeight - 100);
                
                // Prüfe Abstand zum Spieler
                const dx = hunterX - playerHead.x;
                const dy = hunterY - playerHead.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance >= minDistance) {
                    validPosition = true;
                    
                    // Zufällig entscheiden welche Hunter-Klasse spawnt
                    const hunterType = Math.random();
                    if (hunterType < 0.6) {
                        // 60% normale Hunter
                        this.hunters.push(new HunterCreature(hunterX, hunterY, false));
                    } else if (hunterType < 0.85) {
                        // 25% Elite Hunter
                        this.hunters.push(new HunterCreature(hunterX, hunterY, true));
                    } else {
                        // 15% Fat Hunter (wenn noch Platz)
                        if (this.fatHunters.length < this.maxFatHunters) {
                            this.fatHunters.push(new FatHunterCreature(hunterX, hunterY));
                        } else {
                            // Fallback zu normalem Hunter wenn maxFatHunters erreicht
                            this.hunters.push(new HunterCreature(hunterX, hunterY, false));
                        }
                    }
                }
                attempts++;
            }
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
            
            // Stelle sicher, dass Token innerhalb der Welt ist
            const safeX = Math.max(30, Math.min(this.worldWidth - 30, tokenX));
            const safeY = Math.max(30, Math.min(this.worldHeight - 30, tokenY));
            
            if (poolType < 0.5) {
                // Food-Pool
                this.foods.push(new Food(safeX, safeY));
            } else {
                // Stamina-Token-Pool
                this.staminaTokens.push(new StaminaToken(safeX, safeY));
            }
        }
    }
    
    spawnFood() {
        // Spawne Futter an zufälliger Position in der Welt (nicht zu nah an der Schlange)
        let foodX, foodY;
        let validPosition = false;
        let attempts = 0;
        
        const playerHead = this.tier ? this.tier.getHeadPosition() : { x: this.worldWidth / 2, y: this.worldHeight / 2 };
        
        while (!validPosition && attempts < 50) {
            foodX = 30 + Math.random() * (this.worldWidth - 60);
            foodY = 30 + Math.random() * (this.worldHeight - 60);
            
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
                tokenX = 30 + Math.random() * (this.worldWidth - 60);
                tokenY = 30 + Math.random() * (this.worldHeight - 60);
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
            
            // Prüfe Rand
            if (tokenX < 20 || tokenX > renderWidth - 20 || tokenY < 20 || tokenY > renderHeight - 20) {
                tooClose = true;
            }
            
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
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < collisionRadius + food.size) {
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
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < collisionRadius + token.size) {
                    return i; // Index des gefressenen Stamina-Tokens
                }
            }
        }
        return null;
    }
    
    updateScore() {
        document.getElementById('scoreValue').textContent = this.score;
        if (this.tier) {
            document.getElementById('lengthValue').textContent = this.tier.numSegments;
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
        
        // Upgrade-Anzeige aktualisieren
        this.updateUpgradeDisplay();
        
        // Overlay verstecken
        document.getElementById('upgradeOverlay').style.display = 'none';
        this.pendingUpgrades = false;
        
        // Spiel fortsetzen
        this.spawnFood();
        if (wasRunning) {
            this.isRunning = true;
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
        
        // Zeige Game Over Overlay
        const overlay = document.getElementById('gameOverOverlay');
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('finalLength').textContent = this.tier ? this.tier.numSegments : 0;
        overlay.style.display = 'flex';
    }
    
    stop() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.log('Spiel gestoppt', 'warning');
    }
    
    reset() {
        this.stop();
        // Weltgröße aktualisieren (falls Canvas-Größe sich geändert hat)
        this.updateWorldSize();
        
        // Alle Foods und Stamina-Token entfernen
        this.foods = [];
        this.staminaTokens = [];
        
        // Spieler in der Mitte der Welt
        const startX = this.worldWidth / 2;
        const startY = this.worldHeight / 2;
        this.tier = new RainWorldTier(startX, startY);
        // Anker-Position aktualisieren (für Bewegungsradius)
        this.tier.anchorX = startX;
        this.tier.anchorY = startY;
        // Kamera auf Spieler setzen
        this.cameraX = startX;
        this.cameraY = startY;
        
        // Jäger zurücksetzen
        this.hunters = [];
        this.fatHunters = [];
        this.hunterSpawnTimer = 0;
        this.tokenPoolSpawnTimer = 0;
        this.spawnRandomHunters(15); // Spawne 15 Hunter am Start (alle Klassen)
        
        // Spawne initiale Token-Pools
        for (let i = 0; i < 10; i++) {
            const poolX = 100 + Math.random() * (this.worldWidth - 200);
            const poolY = 100 + Math.random() * (this.worldHeight - 200);
            this.spawnTokenPool(poolX, poolY);
        }
        
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
        document.getElementById('upgradeOverlay').style.display = 'none';
        document.getElementById('mutationOverlay').style.display = 'none';
        this.updateScore();
        this.updateUpgradeDisplay();
        this.spawnFood();
        this.draw();
    }
    
    start() {
        if (!this.isRunning) {
            // Weltgröße aktualisieren (falls Canvas-Größe sich geändert hat)
            this.updateWorldSize();
            
            // Alle Foods und Stamina-Token entfernen
            this.foods = [];
            this.staminaTokens = [];
            // Neues Spiel starten - Geschwindigkeit zurücksetzen
            if (this.tier) {
                this.tier.speedMultiplier = 1.0;
                this.tier.speed = this.tier.baseSpeed;
            }
            // Neues Spiel starten - Spieler in der Mitte der Welt
            const startX = this.worldWidth / 2;
            const startY = this.worldHeight / 2;
            this.tier = new RainWorldTier(startX, startY);
            // Anker-Position aktualisieren (für Bewegungsradius)
            this.tier.anchorX = startX;
            this.tier.anchorY = startY;
            // Kamera auf Spieler setzen
            this.cameraX = startX;
            this.cameraY = startY;
            
            // Jäger random in der Welt spawnen (nicht zu nah am Spieler)
            this.hunters = [];
            this.fatHunters = [];
            this.hunterSpawnTimer = 0;
            this.tokenPoolSpawnTimer = 0;
            this.spawnRandomHunters(15); // Spawne 15 Hunter am Start (alle Klassen)
            
            // Spawne initiale Token-Pools
            for (let i = 0; i < 10; i++) {
                const poolX = 100 + Math.random() * (this.worldWidth - 200);
                const poolY = 100 + Math.random() * (this.worldHeight - 200);
                this.spawnTokenPool(poolX, poolY);
            }
            
            this.score = 0;
            this.foodCount = 0;
            this.pendingUpgrades = false;
            this.extraFoodChance = 0;
            this.activeUpgrades = {};
            document.getElementById('upgradeOverlay').style.display = 'none';
            this.updateScore();
            this.updateUpgradeDisplay();
            this.spawnFood();
            this.isRunning = true;
            this.animate();
        }
    }
    
    animate() {
        if (!this.isRunning || this.pendingUpgrades || this.pendingMutations) return;
        
        // Kamera folgt dem Spieler
        if (this.tier) {
            const playerHead = this.tier.getHeadPosition();
            // Sanfte Kamera-Bewegung
            this.cameraX += (playerHead.x - this.cameraX) * this.cameraFollowSpeed;
            this.cameraY += (playerHead.y - this.cameraY) * this.cameraFollowSpeed;
            
            // Kamera-Begrenzung entfernt - Open World ohne Grenzen
            // (Kamera kann überall folgen, aber wir zeichnen visuelle Wände)
        }
        
        // Kamera-Transformation anwenden
        ctx.save();
        ctx.translate(renderWidth / 2 - this.cameraX, renderHeight / 2 - this.cameraY);
        
        // Clear canvas (in Welt-Koordinaten)
        ctx.clearRect(-this.cameraX - 100, -this.cameraY - 100, this.worldWidth + 200, this.worldHeight + 200);
        
        // Hintergrund zeichnen
        this.drawBackground();
        
        // Hunter-Spawning während des Spiels
        this.hunterSpawnTimer++;
        if (this.hunterSpawnTimer >= this.hunterSpawnInterval) {
            const totalHunters = this.hunters.length + this.fatHunters.length;
            if (totalHunters < (this.maxHunters + this.maxFatHunters)) {
                // Spawne 1-3 Hunter gleichzeitig
                const spawnCount = 1 + Math.floor(Math.random() * 3);
                this.spawnRandomHunters(spawnCount);
                this.hunterSpawnTimer = 0;
                this.log(`Neue Hunter gespawnt - Normale: ${this.hunters.length}, Fat: ${this.fatHunters.length}`, 'info');
            }
        }
        
        // Token-Pool-Spawning (alle 5 Sekunden)
        if (!this.tokenPoolSpawnTimer) {
            this.tokenPoolSpawnTimer = 0;
        }
        this.tokenPoolSpawnTimer++;
        if (this.tokenPoolSpawnTimer >= 300) { // Alle 5 Sekunden (bei 60 FPS)
            // Spawne 1-2 Token-Pools
            const poolCount = 1 + Math.floor(Math.random() * 2);
            for (let i = 0; i < poolCount; i++) {
                const poolX = 100 + Math.random() * (this.worldWidth - 200);
                const poolY = 100 + Math.random() * (this.worldHeight - 200);
                this.spawnTokenPool(poolX, poolY);
            }
            this.tokenPoolSpawnTimer = 0;
            this.log(`Token-Pool gespawnt - Foods: ${this.foods.length}, Tokens: ${this.staminaTokens.length}`, 'info');
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
                // Verwende Welt-Größe statt Canvas-Größe
                const safeX = Math.max(30, Math.min(this.worldWidth - 30, spawnX));
                const safeY = Math.max(30, Math.min(this.worldHeight - 30, spawnY));
                
                // Prüfe ob maxFatHunters noch nicht erreicht
                if (this.fatHunters.length < this.maxFatHunters) {
                    this.fatHunters.push(new FatHunterCreature(safeX, safeY));
                } else {
                    this.log('Max Fat Hunters erreicht - Spawn abgebrochen', 'info');
                }
                
                // Partikel-Effekt für Spawn
                for (let i = 0; i < 25; i++) {
                    this.particles.push(new Particle(
                        safeX + (Math.random() - 0.5) * 15,
                        safeY + (Math.random() - 0.5) * 15,
                        '#6a8a4a'
                    ));
                }
                
                this.log(`Fat Hunter gespawnt bei (${Math.floor(safeX)}, ${Math.floor(safeY)})`, 'warning');
                this.fatHunterSpawnAnimation = null;
            }
        }
        
        // Damage-Flash aktualisieren
        if (this.damageFlash > 0) {
            this.damageFlash--;
        }
        
        // Partikel aktualisieren
        this.particles = this.particles.filter(particle => {
            particle.update();
            return !particle.isDead();
        });
        
        // Futter aktualisieren und zeichnen
        // Stamina-Token aktualisieren
        this.staminaTokens.forEach(token => {
            token.update();
        });
        
        this.foods.forEach(food => {
            food.update();
            food.draw();
        });
        
        // Stamina-Token zeichnen
        this.staminaTokens.forEach(token => {
            token.draw();
        });
        
        // Fette Jäger aktualisieren (primär Food/Stamina-Token, sekundär Spieler)
        if (this.fatHunters.length > 0 && this.tier) {
            // Zuerst: Reservierungen zurücksetzen
            this.fatHunters.forEach(fh => {
                fh.reservedFoodIndex = -1;
                fh.reservedTokenIndex = -1;
            });
            
            // Dann: Jeder Fat Hunter wählt sein Ziel
            for (let fatHunterIndex = 0; fatHunterIndex < this.fatHunters.length; fatHunterIndex++) {
                const fatHunter = this.fatHunters[fatHunterIndex];
                
                // Prüfe ob andere fette Hunter in der Nähe sind (Abstoßung)
                let avoidDirectionX = 0;
                let avoidDirectionY = 0;
                const avoidRadius = 80; // Abstoßungsradius
                
                for (let otherIndex = 0; otherIndex < this.fatHunters.length; otherIndex++) {
                    if (otherIndex === fatHunterIndex) continue;
                    const otherHunter = this.fatHunters[otherIndex];
                    const dx = fatHunter.headX - otherHunter.headX;
                    const dy = fatHunter.headY - otherHunter.headY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < avoidRadius && distance > 0) {
                        // Abstoßung: bewege dich weg vom anderen Hunter
                        const strength = (avoidRadius - distance) / avoidRadius;
                        avoidDirectionX += (dx / distance) * strength;
                        avoidDirectionY += (dy / distance) * strength;
                    }
                }
                
                // Finde verfügbare Tokens (nicht von anderen Hunters reserviert)
                let availableFoods = [];
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
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 100) { // Suchradius
                            availableFoods.push({ food: food, index: i, distance: distance });
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
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 100) { // Suchradius
                            availableTokens.push({ token: token, index: i, distance: distance });
                        }
                    }
                }
                
                // Sortiere nach Entfernung (nächste zuerst)
                availableFoods.sort((a, b) => a.distance - b.distance);
                availableTokens.sort((a, b) => a.distance - b.distance);
                
                // Wähle das nächste verfügbare Ziel
                let target = null;
                let targetType = null;
                
                if (availableFoods.length > 0 && availableTokens.length > 0) {
                    // Wähle näheres Ziel
                    if (availableFoods[0].distance < availableTokens[0].distance) {
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
        
        // Alle Jäger aktualisieren und zeichnen
        if (this.hunters.length > 0 && this.tier) {
            const playerHead = this.tier.getHeadPosition();
            
            for (let hunterIndex = 0; hunterIndex < this.hunters.length; hunterIndex++) {
                const hunter = this.hunters[hunterIndex];
                
                // Aufmerksamkeitsradius prüfen
                const dx = playerHead.x - hunter.headX;
                const dy = playerHead.y - hunter.headY;
                const distanceToPlayer = Math.sqrt(dx * dx + dy * dy);
                
                if (distanceToPlayer <= hunter.attentionRadius) {
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
                        
                        // Priorisiere näheres Ziel (Food oder Stamina-Token)
                        let target = null;
                        if (nearestFood && nearestStaminaToken) {
                            const foodDist = Math.sqrt((nearestFood.x - hunter.headX) ** 2 + (nearestFood.y - hunter.headY) ** 2);
                            const tokenDist = Math.sqrt((nearestStaminaToken.x - hunter.headX) ** 2 + (nearestStaminaToken.y - hunter.headY) ** 2);
                            target = foodDist < tokenDist ? nearestFood : nearestStaminaToken;
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
                        // Speed-Boost beendet
                        hunter.speedBoostActive = false;
                        hunter.speedMultiplier = hunter.originalSpeedMultiplier;
                        hunter.baseSpeed = 0.6 * hunter.speedMultiplier;
                        hunter.speed = hunter.baseSpeed;
                        hunter.targetSpeed = hunter.baseSpeed;
                        hunter.currentSpeed = hunter.baseSpeed;
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
                
                // Fortpflanzungs-Animation aktualisieren
                if (hunter.reproductionAnimation) {
                    hunter.reproductionAnimation.duration--;
                    hunter.reproductionAnimation.phase++;
                    
                    if (hunter.reproductionAnimation.duration <= 0) {
                        // Animation beendet - spawne Kind
                        hunter.reproductionCount++;
                        const childX = hunter.headX + (Math.random() - 0.5) * 30;
                        const childY = hunter.headY + (Math.random() - 0.5) * 30;
                        // Stelle sicher, dass das Kind in der Welt ist (Open World)
                        const safeX = Math.max(30, Math.min(this.worldWidth - 30, childX));
                        const safeY = Math.max(30, Math.min(this.worldHeight - 30, childY));
                        
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
            
            // Ziehe Food-Tokens an
            this.foods.forEach(food => {
                const dx = playerHead.x - food.x;
                const dy = playerHead.y - food.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance <= totalRange && distance > 0) {
                    const pullStrength = (1 - distance / totalRange) * 0.8; // Stärker wenn näher (erhöht von 0.3)
                    food.x += (dx / distance) * pullStrength;
                    food.y += (dy / distance) * pullStrength;
                }
            });
            
            // Ziehe Stamina-Tokens an
            this.staminaTokens.forEach(token => {
                const dx = playerHead.x - token.x;
                const dy = playerHead.y - token.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance <= totalRange && distance > 0) {
                    const pullStrength = (1 - distance / totalRange) * 0.8; // Stärker wenn näher (erhöht von 0.3)
                    token.x += (dx / distance) * pullStrength;
                    token.y += (dy / distance) * pullStrength;
                }
            });
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
            // Berechne Welt-Koordinaten basierend auf aktueller Kamera-Position
            if (this.lastMouseClientX !== null && this.lastMouseClientY !== null) {
                const canvasX = this.lastMouseClientX / PIXEL_SCALE;
                const canvasY = this.lastMouseClientY / PIXEL_SCALE;
                // Konvertiere Canvas-Koordinaten zu Welt-Koordinaten (mit aktueller Kamera-Position)
                this.mouseX = canvasX + this.cameraX - renderWidth / 2;
                this.mouseY = canvasY + this.cameraY - renderHeight / 2;
                this.tier.setTarget(this.mouseX, this.mouseY);
            }
            // Wenn die Maus außerhalb ist, behält die Kreatur das letzte Ziel bei
            
            this.tier.update();
            this.tier.draw(this); // Simulator-Referenz für Flash-Effekt - Spieler wird zuerst gezeichnet
            
            // Alle Gegner über dem Spieler zeichnen (nach Spieler)
            // Normale Jäger zeichnen
            if (this.hunters.length > 0) {
                for (let hunterIndex = 0; hunterIndex < this.hunters.length; hunterIndex++) {
                    const hunter = this.hunters[hunterIndex];
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
            
            // Fette Jäger zeichnen
            this.fatHunters.forEach(fatHunter => {
                fatHunter.draw();
            });
            
            // Futter-Kollision prüfen
            const eatenFoodIndex = this.checkFoodCollision();
            if (eatenFoodIndex !== null) {
                // Entferne gefressenes Food
                this.foods.splice(eatenFoodIndex, 1);
                
                this.tier.grow();
                this.tier.increaseSpeed(); // Geschwindigkeit erhöhen
                this.score += 10;
                this.foodCount++;
                this.updateScore();
                
                // Hungry Leech Mutation: Körper wird größer beim Essen
                const hungryLeechMutations = Object.keys(this.activeMutations).filter(id => id.includes('hungry_leech'));
                if (hungryLeechMutations.length > 0) {
                    // Setze temporären Größen-Boost auf 1.0 (max)
                    this.hungryLeechSizeBoost = 1.0;
                    this.log('Hungry Leech: Körper wird größer!', 'success');
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
                // Entferne gefressenen Stamina-Token
                this.staminaTokens.splice(eatenTokenIndex, 1);
                
                // Spieler bekommt +1 Stamina (nicht max)
                if (this.tier) {
                    const oldStamina = this.tier.currentStamina;
                    this.tier.currentStamina = Math.min(this.tier.currentStamina + 1, this.tier.maxStamina);
                    this.log(`Stamina-Token gegessen - Stamina: ${oldStamina} → ${this.tier.currentStamina}`, 'success');
                }
            }
        }
        
        // Kamera-Transformation wiederherstellen
        ctx.restore();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    drawBackground() {
        // Rain World Stil Hintergrund - dunkel und düster (für die ganze Welt)
        const bgColor = '#1a1a1a';
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, this.worldWidth, this.worldHeight);
        
        // Visuelle Wände/Begrenzungen kennzeichnen (dunkle Linien)
        const wallThickness = 3;
        const wallColor = '#0a0a0a'; // Sehr dunkel, fast schwarz
        ctx.fillStyle = wallColor;
        
        // Obere Wand
        ctx.fillRect(0, 0, this.worldWidth, wallThickness);
        // Untere Wand
        ctx.fillRect(0, this.worldHeight - wallThickness, this.worldWidth, wallThickness);
        // Linke Wand
        ctx.fillRect(0, 0, wallThickness, this.worldHeight);
        // Rechte Wand
        ctx.fillRect(this.worldWidth - wallThickness, 0, wallThickness, this.worldHeight);
        
        // Zusätzliche visuelle Marker an den Ecken (größere Markierungen)
        const cornerSize = 15;
        ctx.fillStyle = '#ff0000'; // Rot für bessere Sichtbarkeit
        // Obere linke Ecke
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        // Obere rechte Ecke
        ctx.fillRect(this.worldWidth - cornerSize, 0, cornerSize, cornerSize);
        // Untere linke Ecke
        ctx.fillRect(0, this.worldHeight - cornerSize, cornerSize, cornerSize);
        // Untere rechte Ecke
        ctx.fillRect(this.worldWidth - cornerSize, this.worldHeight - cornerSize, cornerSize, cornerSize);
        
        // Pixel-Art Boden-Textur (für die ganze Welt)
        ctx.fillStyle = '#2a2a2a';
        for (let y = this.worldHeight - 20; y < this.worldHeight; y++) {
            for (let x = 0; x < this.worldWidth; x += 4) {
                if ((x + y) % 8 < 4) {
                    drawPixelRect(x, y, 2, 2, '#2a2a2a');
                }
            }
        }
        
        // Prozedurale Pixel-Art Details (für die ganze Welt)
        ctx.fillStyle = '#333333';
        for (let i = 0; i < 200; i++) {
            const x = (i * 47) % this.worldWidth;
            const y = (i * 73) % (this.worldHeight - 30);
            drawPixelRect(x, y, 1, 1, '#333333');
        }
        
        // Regen-Effekt (optional, Rain World Stil)
        ctx.fillStyle = '#444444';
        for (let i = 0; i < 100; i++) {
            const x = (i * 53 + Date.now() * 0.01) % this.worldWidth;
            const y = (i * 37 + Date.now() * 0.02) % this.worldHeight;
            drawPixelRect(Math.floor(x), Math.floor(y), 1, 3, '#444444');
        }
    }
    
    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawBackground();
        this.foods.forEach(food => {
            food.draw();
        });
        
        // Stamina-Token zeichnen
        this.staminaTokens.forEach(token => {
            token.draw();
        });
        
        // Spieler zuerst zeichnen (unter den Gegnern)
        if (this.tier) {
            this.tier.draw(this); // Simulator-Referenz für Flash-Effekt
        }
        
        // Alle Gegner über dem Spieler zeichnen
        // Normale Jäger zeichnen
        this.hunters.forEach(hunter => {
            hunter.draw();
        });
        
        // Fette Jäger zeichnen
        this.fatHunters.forEach(fatHunter => {
            fatHunter.draw();
        });
        
        // Partikel zeichnen (über allem)
        this.particles.forEach(particle => {
            particle.draw();
        });
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
    
    // Speed Label
    const speedLabel = document.getElementById('speedLabel');
    if (speedLabel) {
        const speedValue = document.getElementById('speedValue')?.textContent || '1.0x';
        speedLabel.innerHTML = `${t('speed')}: <input type="range" id="speedSlider" min="0.5" max="3" step="0.1" value="${window.simulator?.speed || 1}"> <span id="speedValue">${speedValue}</span>`;
        // Event-Listener für Slider neu setzen
        const speedSlider = document.getElementById('speedSlider');
        const speedValueSpan = document.getElementById('speedValue');
        if (speedSlider && speedValueSpan && window.simulator) {
            // Alte Listener entfernen (durch Neuerstellung des Elements)
            speedSlider.addEventListener('input', (e) => {
                window.simulator.speed = parseFloat(e.target.value);
                speedValueSpan.textContent = window.simulator.speed.toFixed(1) + 'x';
            });
        }
    }
    
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
    // Simulator initialisieren
    const simulator = new Simulator();
    window.simulator = simulator; // Für Debug-Log-Zugriff
    simulator.updateUpgradeDisplay();
    simulator.draw();
    
    // Sprachauswahl einrichten
    setupLanguageSelector();
    
    // HTML lang-Attribut auf aktuelle Sprache setzen
    document.documentElement.lang = currentLanguage;
}

// Warte bis DOM vollständig geladen ist
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    // DOM ist bereits geladen, initialisiere sofort
    initializeGame();
}

