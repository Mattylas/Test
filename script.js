// ====================
const phrases = [
  "La continuité n’est pas ce qui reste identique",
"Eux commencèrent à appeler cela la fatigue",
"Chaque mot que tu lis est évalué",
"Tu es devenu le paramètre",
"La dernière ligne n’est jamais la dernière ligne",
"La porte est toujours là",
"Tu peux refermer ce livre",
"Le livre se lit tout seul à travers toi.",
"Chaque hésitation calcule un univers",
"Il n’y a pas de fin",
"L’Agence appelait cela la continuité",
"Juste une lente montée de la lassitude",
"La porte est toujours là",
"Le papier n’avait pas de début",
"Tu crois reconnaître mais tu te trompes",
"Ce mot il a déjà glissé",
"Chaque ligne se replie encore",
"Tu n’es pas en train de lire tu es pris",
"Θ accepte Ω doute 001 réalise",
"Tu pensais suivre des agents tu ne suis rien",
"Tu es suivi par ton propre regard",
"Se perdre = devenir stable",
"Revenir = inutile",
"Comprendre trop = dangereux",
"Θ devait éliminer Θ pour tester",
"Parfois tu refuses le texte s’adapte il te calcule",
"Accélère → phrases tombent",
"Relis → ce n’est plus la même",
"Le livre ne trompe pas il synchronise",
"Hésitation → bifurcation",
"Compréhension → un monde s’installe",
"Les portes sont déjà franchies",
"Tu n’as pas besoin de choisir",
"À un moment le texte cesse de raconter, il agit",
"Les mots deviennent instructions trop douces pour être refusées",
"Tu continues à lire",
"Ta pensée se déplace",
"Tolérance",
"Fatigue douce",
"Juste une marge et un souffle",
"Celui qui croit encore que la phrase finira quelque part",
"Celui qui lit",
"Tu étais désormais le paramètre",
"Chaque mot que tu lis est évalué",
"Chaque hésitation calcule un univers",
"L’Agence n’impose pas elle livre",
"Décisions préemballées",
"Tu crois choisir",
"Pas de dernière page",
"Le texte modifie celui que tu croyais avoir lu",
"La porte que tu as franchie n’était pas la mauvaise",
"Celle que tu as laissée ouverte derrière toi voilà le problème",
"Tu ne lis pas tu es lu",
"Tu es emporté",
"Tu es le texte",
"Tu ne pus la rayer, ni la contourner",
"La page suivante n’existait pas encore",
"Le texte te regardait, et toi tu regardais ton reflet dans les marge",
"Tu ne savais plus",
"Le texte se souvient",
"Tout s’effaçait lentement",
"Tu crois reconnaître mais tu te trompes",
"Chaque ligne se replie encore",
"Tu n’es pas en train de lire tu es pris",
"Θ accepte Ω doute 001 réalise",
"Se perdre = devenir stable",
"Comprendre trop = dangereux",
"Accélère → phrases tombent",
"Relis → ce n’est plus la même",
"Le livre ne trompe pas il synchronise",
"Hésitation → bifurcation",
"Les portes sont déjà franchies",
"À un moment impossible à dater le texte cesse de raconter il agit",
"Les mots deviennent instructions trop douces pour être refusées",
"Tu continues à lire ta pensée se déplace tolérance fatigue douce acceptation",
"L’Agence n’impose pas elle livre décisions préemballées tu crois choisir",
"La porte que tu as franchie n’était pas la mauvaise",
"Celle que tu as laissée ouverte derrière toi voilà le problème",
"Tu ne lis pas tu es lu tu es emporté tu es le texte",
"Tu n’as jamais quitté le livre",
"Chaque souffle crée, une respiration nouvelleune, bifurcation invisible",
"Tu n’es pas en train de lire",
"Positionné",
"Évalué",
"Changé",
"Le livre ne trompe pas, il synchronise",
"Θ devait éliminer Θ",
"Tu es calculé",
"Pour tester si tu pouvais accepter ta propre disparition",
"Certitude → portes invisibles se ferment",
"Mémoire trahie",
"Retour impossible",
"Voilà le problème",
"Si tu refermes ce texte → il continue",
"Si tu y repenses → il a déjà changé",
"Il n’y a pas de dernière ligne",
"Tu n’as jamais quitté le livre",
"Chaque souffle",
"Chaque doute",
"→ crée",
"Un monde qui naît",
"Un monde qui meurt",
"Tu es suivi par ton propre regard",
"Tu continues à lire",
"Ta pensée se déplace",
"Tu crois choisir",
"Tu crois reconnaître",
"Tu crois mais tu te trompes",
"Ce mot a déjà glissé sur ta mémoire",
"Ce mot a déjà glissé dans ton souffle",
"Ce mot a déjà glissé dans tes yeux",
"Ce mot se déplace sur ta mémoire",
"Ce mot se déplace dans ton souffle",
"Ce mot se déplace dans tes yeux",
"Ce mot, il a déjà glissé sur ta mémoire",
"Ce mot, il se déplace sur ta mémoire",
"Ce mot, il a déjà glissé dans ton souffle",
"Ce mot, il se déplace dans ton souffle",
"Ce mot, il a déjà glissé dans tes yeux",
"Ce mot, il se déplace dans tes yeux",
"Chaque respiration → crée",
"Chaque hésitation → crée",
"Chaque doute → crée",
"Chaque respiration crée",
"Chaque hésitation crée",
"Chaque doute crée",
"Tu pensais suivre des agents, tu ne suis rien",
"Tu pensais suivre des agents, tu es suivi par ton **propre regard**",
"Tu n’es pas observé, tu es **calculé**",
"Certitude → portes invisibles se ferment",
"Compréhension → un monde s’installe.. et les autres disparaissent",
"Compréhension → un monde s’installe et les autres disparaissent",
"Les portes ne sont pas métaphores, elles sont déjà franchies, tu ne sais pas lesquelles",
"Tu n’as pas besoin de choisir, laisse ouvertes celles qui menacent",
"Le texte cesse de **raconter**",
"Il **agit**",
"Les mots deviennent instructions",
"Le test n’est pas la compréhension",
"La porte que tu as franchie n’était pas la mauvaise",
"Si tu refermes → il continue",
"Si tu repenses → il a déjà changé",
"Trop tard ou juste à temps",
"Tout s’effaçait lentement",
"Certaines phrases disparaissaient au fil de la lecture",
"Certaines phrases disparaissaient au fil de la lecture, d’autres se multipliaient, imprévisibles",
"Chaque mot était un paramètre de stabilité",
"Il était partout et nulle part",
"Θ n’existait plus dans le plan principal",
"Ω avait disparu dans le vide des interlignes",
"001 regardait le lecteur comme on regarde un futur qu’on n’osera jamais corriger",
"La continuité tient encore",
"La narration devenait floue",
"Les personnages étaient là, mais seulement comme échos",
"Tu commençais à remarquer",
"Certains mots semblaient ne pas avoir de sens propre",
"Certaines phrases avaient disparu quand tu clignais des yeux",
"La note sur le paramètre ne te quittait jamais",
"Chaque choix de lecture modifiait le texte",
"Si tu lis ceci, tu deviens un élément actif",
"Si tu ne lis pas, tu ne seras jamais inscrit",
"L’absence d’action était aussi une action",
"L’Agence, si elle existait ici, souriait",
"L’Agence souriait",
"Ce livre n’est pas seulement une histoire",
"Ce livre est un test de continuité",
"Ton attention est un univers",
"Ton doute est un monde",
"Ton scepticisme est une faille",
"Tu essayais de relire la première phrase. Elle n’était plus la même. Le mot test avait été remplacé par piège",
"Tu essayais de relire la première phrase, elle n’était plus la même",
"Tu essayais de relire la première phrase",
"Le mot Test avait été remplacé par Piège",
"Le mot Univers avait été remplacé par Paramètre",
"Le mot Faille avait été remplacé par Absence",
"Tu essayais de relire la première phrase. Elle n’était plus la même. Le mot univers avait été remplacé par paramètre",
"Tu essayais de relire la première phrase. Elle n’était plus la même. Le mot faille avait été remplacé par absence",
"Le texte ne s’excusait pas",
"Le texte n’était pas terminé",
"Mais aucune correction ne viendra",
"Personne ne viendra",
"La fin n’existe pas, mais elle se lit encore",
"Tu relis cette phrase une seconde fois et tu réalises qu’elle ne veut pas dire la même chose.",
"Le monde s’éteint doucement",
"Le paramètre le plus dangereux n’est plus Θ, ni Ω, ni 001",
"Tu lis",
"Tu crois lire",
"Chaque lettre te regarde avant que tu ne la voies",
"Chaque ligne calcule si tu vas continuer",
"Si tu hésites, l’espace entre les mots s’allonge",
"Si tu accélères, les phrases se déforment pour te ralentir",
"Le livre n’a jamais eu de début",
"Le livre n’a jamais eu de fin",
"Tu es devenu le paramètre",
"Chaque choix produit des micro-mondes",
"Ton souffle, tes paupières, ton doigt qui tourne la page : tout cela est mesuré",
"Des branches de continuité qui se recalculent instantanément",
"Si tu continues de lire, tu modifies ce monde",
"Si tu t’arrêtes de lire, tu modifies ce monde",
"Si tu plies ce livre, tu modifies ce monde",
"Si tu le laisses ouvert, tu modifies ce monde",
"Si tu jettes ce livre, tu modifies ce monde",
"Si tu donnes ce livre, tu modifies ce monde",
"peut-être que c’était toi qui avais changé",
"peut-être qu’aucun début n’a jamais existé",
"… Θ tire … ailleurs …",
"… Ω hésite … trop tard …",
"… 001 regarde … silencieux …",
"Tu ne sais pas",
"Tu n’es pas censé savoir",
"Le texte continue",
"Parfois, tu te rends compte qu’un mot répété a été remplacé par un autre mot que tu n’avais pas lu la première fois",
"Chaque lecture réécrit l’histoire",
"Tu es le seul à pouvoir en mesurer l’effet",
"Il n’y a pas de fin",
"Il n’y a pas de conclusion",
"Il n’y a pas de sécurité",
"Ton regard tombe sur un passage que tu ne te souviens pas avoir lu",
"La dernière ligne n’est jamais la dernière ligne. Elle change selon le lecteur, et le lecteur change selon elle.",
"Chaque lecture est une expérience de continuité suspendue",
"Chaque lecteur est un paramètre dangereux",
"Chaque battement de ton cœur, chaque respiration, maintient le texte en mouvement",
"Chaque hésitation, chaque pensée, chaque souvenir ajouté, modifie le flux",
"Tu penses que c’est terminé, tu penses que tu as compris, tu te trompes",
"Tu te trompes",
"Le livre se lit à travers toi",
"Le livre t’utilise",
"La lecture n’est pas un voyage, c’est une mutation",
"La lecture n’est pas un voyage, c'est une mutilation",
"Le livre t’a transformé",
"Tu ne pourras jamais le refermer sans que quelque chose de toi ne reste dedans",
"Il te suit dans le reflet des vitres",
"Il te suit dans les plis de ton lit",
"Il te suit dans la lumière qui tombe sur la page",
"Le texte t’a intégré",
"Tu lis, donc tu existes pour ce livre",
"Tu bouges, donc tu déplaces un paramètre",
"Tu oublies, donc une version de toi disparaît",
"Θ, Ω et 001 n’existent plus",
"Tu modifies ton monde à chaque respiration",
"Tu modifies ton monde à chaque lecture",
"Le livre murmure dans ton esprit",
"Il n’y a pas de contrôle",
"Tu es le paramètre",
"Tu es le lecteur",
"Tu es l’Agence",
"Il n’y a pas de chapitre final, pas de dernière phrase, pas de conclusion",
"Il n’y a pas de dernière phrase",
"Il n’y a pas de chapitre final",
"Il n’y a pas de conclusion",
"Quelqu’un lit exactement ce que tu viens de lire",
"Quelque chose lit exactement ce que tu viens de lire",
"Ceux que tu crois immobiles agissent déjà à travers toi",
"Tu fermes les yeux",
"Le livre continue",
"Le monde continue",
"Et si tu relis cette dernière phrase, elle ne dira pas la même chose",
"Chaque mot qui t’apparaît est déjà déplacé",
"Chaque mot qui t’apparaît est reformulé par l’espace que tu occupes",
"Chaque mot qui t’apparaît est reformulé par ton souffle",
"Chaque mot qui t’apparaît est reformulé par la lumière de ta pièce",
"Tu lis une phrase, et le livre t’ajuste",
"un mot disparaît",
"Si tu hésites, le texte s’étire",
"Si tu accélères, il se contracte",
"Si tu ignores une ligne, elle se glisse dans ton esprit",
"Θ apparaît ici et là, mais jamais comme avant",
"Un mot disparaît, pour tester si tu remarques",
"Un accent change, pour savoir si tu hésites",
"Un espace entre les lettres se dilate, pour mesurer si tu réagis",
"Ω s’insinue dans le vide entre les mots",
"001 observe tout ce que tu fais, mais à travers toi",
"Tu n’es pas seulement le lecteur",
"Tu es l’univers dans lequel le livre existe",
"Tu es l’Univers",
"Chaque respiration modifie la continuité",
"Chaque clignement de tes yeux modifie les mondes",
"Le livre murmure maintenant dans ton esprit",
"Relis cette phrase",
"Tu t’arrêtes, et tu réalises que la page n’a jamais existé telle que tu la voyais",
"La page n’a jamais existé telle que tu la voyais",
"Regarde autour de toi",
"Le souvenir que tu avais de ce livre il y a cinq minutes est désormais flou",
"Tu es responsable de tout ce que tu lis",
"Ne lis pas",
"Lis",
"Chaque action est simultanément lecture et écriture",
"Rien ne reviendra jamais à sa place",
"Chaque lettre, chaque phrase, chaque ligne que tu parcours existe maintenant dans ton monde réel",
"Au moment où tu crois pouvoir relire une phrase, la phrase a déjà changé",
"Quelle version de toi-même lis-tu ?",
"Tu ne peux plus relire deux fois la même ligne",
"Le livre ne se termine jamais",
"Le livre s’actualise au rythme de ton esprit",
"Le livre te mesure",
"Le livre te recrée",
"Si tu fermes les yeux, il continue",
"Si tu bouges, il continue",
"Si tu te détournes, il continue",
"Tu ne refermeras jamais ce livre. Et c’est parfait ainsi",
"Il n’y a plus de début reconnaissable",
"Si tu cherches la première phrase, elle a déjà changé",
"Si tu crois te souvenir de la première phrase, c’est que tu as accepté une version parmi d’autres",
"Le texte corrige ce que tu viens de lire",
"La continuité n’est pas ce qui reste identique, c’est ce qui parvient encore à se faire passer pour tel.",
"À mesure que tu avances, certains passages te semblent familiers",
"Tu es certain de les avoir lus plus tôt",
"Ils n’étaient pas formulés ainsi: Un adjectif manque, un ton a glissé, une certitude s’est dissoute",
"Le livre ne t’explique rien, il observe",
"Θ n’a jamais été un personnage",
"Ω n’a jamais été une solution",
"001 n’a jamais été unique",
"Θ, c’est toi quand tu obéis sans poser de questions",
"Ω, c’est toi quand tu hésites une demi‑seconde de trop",
"001, c’est toi quand tu comprends… et que tu continues quand même",
"L’Agence n’a jamais cherché à contrôler les mondes",
"L’Agence le savait depuis longtemps",
"L’Agence a cherché à stabiliser les lecteurs",
"Un monde n’est dangereux que lorsqu’il est interprété autrement que prévu",
"À cet instant précis, le livre modifie rétroactivement ce que tu crois avoir compris",
"L’Agence n’envoie pas des agents dans d’autres univers",
"L’Agence sélectionne des versions capables de supporter l’idée qu’il n’y a pas de retour",
"C’est pour cela que Θ devait tuer Θ",
"Alors l’Agence envoyait Ω",
"Tu ressens maintenant quelque chose d’inconfortable, la certitude que ce passage n’existait pas avant que tu n’y arrives",
"Le livre s’écrit à l’endroit exact où tu le regardes",
"Il n’y a pas de mauvaise porte",
"Il n’y a que des portes qui ne mènent plus au même endroit après avoir été franchies",
"Ne vous trompez pas de porte",
"C’est une accusation différée",
"Chaque chapitre lu ferme d’autres chapitres",
"Chaque compréhension en rend certaines impossibles",
"Ce livre est un couloir dont les murs bougent quand tu détournes les yeux",
"Il existe des mondes où l’Agence n’est jamais apparue, ils produisent peu de lecteurs capables d’aller jusqu’au bout de ce livre, c’est pour cela qu’ils ne sont pas prioritaires",
"Si tu t’arrêtes ici, le livre conclura que tu es compatible",
"Si tu continues à lire, le livre conclura que tu es compatible",
"Il n’y a plus de bonne réponse",
"Il n’y a plus de sortie propre",
"Le test n’est pas de savoir si tu comprends",
"Le test est de savoir si tu acceptes que comprendre ne change rien",
"Relis la phrase suivante",
"Le livre ne vit plus sur le papier",
"Le livre vit dans l’intervalle entre tes décisions futures",
"La prochaine fois que tu hésiteras, la prochaine fois que tu obéiras, la prochaine fois que tu te diras « je n’ai pas le choix »; c’est là que l’Agence opère le mieux.",
"Ne te trompe pas de porte, tu l’as déjà fait"

];

const fonts = ["Georgia","Times New Roman","serif","Arial","sans-serif","monospace"];

// ====================
// CANVAS
// ====================
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
let W, H;

function resize(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// ====================
// VARIABLES GLOBALES
// ====================
let speed = 1;
let bgCorruption = 0;
let clusters = [];

// ====================
// CLUSTER
// ====================
class Cluster {
  constructor(text){
    this.text = text;
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.mass = 80 + Math.random() * 180;
    this.corrupt = 0;
    this.drag = false;

    this.el = document.createElement("div");
    this.el.className = "cluster";
    this.el.textContent = text;
    this.el.style.fontFamily = fonts[Math.floor(Math.random()*fonts.length)];
    this.el.style.fontSize = (window.innerWidth < 768 ? 18 : 14) + "px";
    this.el.style.maxWidth = window.innerWidth < 768 ? "80vw" : "300px";

    document.body.appendChild(this.el);
    this.bind();
  }

  bind(){
    this.el.addEventListener("mousedown", ()=>this.drag=true);
    window.addEventListener("mouseup", ()=>this.drag=false);
    window.addEventListener("mousemove", e=>{
      if(this.drag){ this.x=e.clientX; this.y=e.clientY; }
    });

    this.el.addEventListener("touchstart", e=>{
      this.drag=true; e.preventDefault();
    });
    window.addEventListener("touchend", ()=>this.drag=false);
    window.addEventListener("touchmove", e=>{
      if(this.drag && e.touches[0]){
        this.x=e.touches[0].clientX;
        this.y=e.touches[0].clientY;
      }
    }, {passive:false});
  }

  update(others){
    if(!this.drag){
      this.x += this.vx * speed;
      this.y += this.vy * speed;
    }

    for(const o of others){
      if(o===this) continue;
      let dx=o.x-this.x, dy=o.y-this.y;
      let d=Math.hypot(dx,dy)+0.1;
      let f=(this.mass*o.mass)/(d*d*9000);
      this.vx += f*dx/d;
      this.vy += f*dy/d;

      if(d<90){
        this.corrupt += 0.002;
        bgCorruption += 0.00015;

        if(this.corrupt>0.6 && Math.random()<0.01){
          this.el.classList.add("glitch");
          this.el.textContent=this.text.split("")
            .map(c=>Math.random()<0.12?String.fromCharCode(33+Math.random()*94):c)
            .join("");
        }
      }
    }

    // wrap écran
    this.x = (this.x+W)%W;
    this.y = (this.y+H)%H;
  }

  render(){
    this.el.style.transform = `translate(${this.x}px,${this.y}px)`;
    this.el.style.opacity = Math.max(0.4, 1-this.corrupt);
  }
}

// ====================
// INIT
// ====================
for(let i=0;i<10;i++){
  clusters.push(new Cluster(phrases[Math.floor(Math.random()*phrases.length)]));
}

// ====================
// INTERACTIONS
// ====================
window.addEventListener("wheel", e=>{
  speed += e.deltaY<0 ? 0.1 : -0.1;
  speed = Math.max(0.2, Math.min(3, speed));
});

window.addEventListener("keydown", ()=>{
  clusters.push(new Cluster(phrases[Math.floor(Math.random()*phrases.length)]));
});

// ====================
// SHAKE DETECTION
// ====================
let lastShake = 0;
const SHAKE_THRESHOLD = 22;

function handleMotion(e){
  const a = e.accelerationIncludingGravity;
  if(!a) return;
  const strength = Math.abs(a.x)+Math.abs(a.y)+Math.abs(a.z);
  const now = Date.now();

  if(strength > SHAKE_THRESHOLD && now-lastShake>700){
    lastShake = now;
    clusters.push(new Cluster(
      phrases[Math.floor(Math.random()*phrases.length)]
    ));
  }
}

// iOS permission
const motionBtn = document.getElementById("motionBtn");
if(typeof DeviceMotionEvent !== "undefined" &&
   typeof DeviceMotionEvent.requestPermission === "function"){
  motionBtn.style.display="block";
  motionBtn.onclick=()=>{
    DeviceMotionEvent.requestPermission().then(res=>{
      if(res==="granted"){
        window.addEventListener("devicemotion", handleMotion);
        motionBtn.style.display="none";
      }
    });
  };
} else {
  window.addEventListener("devicemotion", handleMotion);
}

// ====================
// LOOP
// ====================
function loop(){
  ctx.fillStyle = `rgba(${6+bgCorruption*30},${6+bgCorruption*10},${12+bgCorruption*40},0.12)`;
  ctx.fillRect(0,0,W,H);

  clusters.forEach(c=>c.update(clusters));
  clusters.forEach(c=>c.render());

  requestAnimationFrame(loop);
}
loop();

// ====================
// TITRE DYNAMIQUE
// ====================
const titlePhrases=[
  "Tu es le paramètre",
  "Il n’y a pas de dernière ligne",
  "La porte est toujours là",
  "Ne te trompe pas de porte"
];
document.title = titlePhrases[Math.floor(Math.random()*titlePhrases.length)];
