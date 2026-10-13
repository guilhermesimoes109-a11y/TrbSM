/* =========================================================
   DADOS DOS CASOS
   Cada caso tem: título, notícia (headline, subhead, byline,
   parágrafos), suspeitos, culpado e provas recolhidas.
   ========================================================= */
const cases = [
  {
    title: "O Desafio em Direto: O Caso de Marcus Vance (2018)",
    section: "Atlanta · Crime",
    headline: "Loja de eletrónica assaltada em Atlanta: dono amarrado e alarme desligado com a palavra-passe correta",
    subhead: "A polícia aponta para alguém com acesso interno ao estabelecimento. Cinco pessoas ligadas à loja estão na lista de suspeitos.",
    byline: "Redação · Secção Crime · Atlanta, 2018",
    article: [
      "Uma loja de eletrónica em Atlanta foi assaltada depois da hora de fecho. O proprietário apareceu amarrado e agredido no interior e foi assistido de imediato, ficando sob observação médica. O alarme foi desligado com a palavra-passe correta, sem qualquer sinal de arrombamento.",
      "Desapareceram a caixa de dinheiro e vários iPhones ainda embalados. O assaltante foi direto aos artigos mais caros, o que reforça a hipótese de um conhecimento prévio do espaço e de acesso interno.",
      "A polícia concentrou a investigação em cinco pessoas ligadas à loja: o gerente, com problemas financeiros, a responsável pelo inventário, um estagiário recente, uma assistente do turno da noite e um jovem técnico de reparações que é criador de conteúdos nas redes sociais. Nenhum admitiu envolvimento."
],
    structure: {
      quem: "o proprietário da loja e um assaltante por identificar",
      oque: "assalto à loja, com o dono amarrado e agredido; levaram a caixa e vários iPhones",
      onde: "loja de eletrónica, em Atlanta",
      quando: "depois da hora de fecho (2018)",
      porque: "o assaltante parecia conhecer o espaço e foi direto aos artigos mais caros",
      como: "alarme desligado com a palavra-passe correta, sem sinais de arrombamento",
    },
    suspects: [
      ["Derrick", "Gerente da loja, com acesso total e dificuldades financeiras.", "images/derrick.jpg"],
      ["Chloe", "Responsável pelo inventário, vista a sair antes do fecho.", "images/chloe.jpg"],
      ["Sam", "Estagiário recente que fez horas extra no dia anterior.", "images/sam.jpg"],
      ["Marcus Vance", "Técnico de reparações de 22 anos e criador de conteúdos nas redes sociais.", "images/marcus-vance.jpg"],
      ["Nina", "Assistente de vendas que trabalhava no turno da noite.", "images/nina.jpg"]
    ],
    culprit: "Marcus Vance",
    clues: [
      "A conta oficial da loja confirmou que o alarme foi desligado com a palavra-passe interna.",
      "Uma testemunha disse que o assaltante parecia conhecer muito bem a zona de reparações.",
      "A publicação nas redes sociais apareceu perto das 23:00, depois do fecho.",
      "No vídeo em direto aparecem a caixa de dinheiro e vários iPhones embalados.",
      "Ao fundo do vídeo vê-se o quadro de ferramentas personalizado da loja e um cartão de identificação do gerente."
    ]
  },
  {
    title: "O Check-in da Discórdia: O Caso de Gabriel Santos (2016)",
    section: "Austin · Crime",
    headline: "Casa invadida e garagem incendiada em Austin: dois carros de luxo destruídos pelo fogo",
    subhead: "A polícia investiga pessoas ligadas à família e analisa publicações feitas nas redes sociais momentos antes do incêndio.",
    byline: "Redação · Secção Crime · Austin, 2016",
    article: [
      "Uma casa em Austin foi invadida e vandalizada e, horas depois, a garagem da propriedade foi incendiada, destruindo dois carros de luxo. Não há feridos, mas os prejuízos são avultados. Os bombeiros conseguiram impedir que as chamas chegassem à habitação.",
      "Dentro da casa havia sinais de vandalismo, mas nenhum de roubo, o que leva a polícia a concluir que o ataque foi pessoal e motivado por ressentimento. Um vizinho contou que o incêndio começou poucos minutos depois de uma discussão online envolvendo a família.",
      "Entre os suspeitos estão um ex-sócio que perdeu uma ação judicial contra a família, um empreiteiro despedido, o ex-namorado da filha, um vizinho em disputa sobre os limites do terreno e uma conhecida da família. Os investigadores analisam redes sociais e registos de localização."
],
    structure: {
      quem: "a família proprietária e um autor por identificar",
      oque: "invasão e vandalismo da casa e incêndio da garagem, com dois carros de luxo destruídos",
      onde: "numa casa em Austin",
      quando: "em 2016; o incêndio surgiu horas depois da invasão",
      porque: "ataque pessoal, motivado por ressentimento (não houve roubo)",
      como: "casa vandalizada e garagem incendiada poucos minutos depois de uma discussão online",
    },
    suspects: [
      ["Lucas", "Ex-sócio que perdeu uma ação judicial contra a família.", "images/lucas.jpg"],
      ["Rodrigo", "Empreiteiro despedido depois de um conflito profissional.", "images/rodrigo.jpg"],
      ["Gabriel Santos", "Ex-namorado da filha do proprietário, após uma separação complicada.", "images/gabriel-santos.jpg"],
      ["André", "Vizinho envolvido numa disputa sobre os limites da propriedade.", "images/andre.jpg"],
      ["Marta", "Conhecida da família que tinha estado na casa dias antes.", "images/marta.jpg"]
    ],
    culprit: "Gabriel Santos",
    clues: [
      "Um vizinho confirmou que o incêndio começou poucos minutos depois de uma discussão online.",
      "Lucas e Rodrigo estavam fora da zona segundo registos independentes.",
      "Uma publicação no Facebook usava linguagem de vingança contra a família.",
      "A publicação foi feita pouco antes do primeiro alerta de incêndio.",
      "A geolocalização da conta estava ativa e indicava exatamente a rua da vítima quatro minutos antes do primeiro alerta."
    ]
  },
  {
    title: "A Foto com o “Troféu”: O Caso de Tyler Brooks (2020)",
    section: "Phoenix · Crime",
    headline: "Colecionador de ténis encontrado inconsciente em Phoenix: par raro de Air Jordan, avaliado em mais de 15 mil dólares, desapareceu",
    subhead: "Pouco depois do crime, uma fotografia dos ténis apareceu à venda num marketplace online.",
    byline: "Redação · Secção Crime · Phoenix, 2020",
    article: [
      "Um colecionador de ténis de Phoenix foi encontrado inconsciente em casa e levado para o hospital. Desapareceu um par raro de Nike Air Jordan, avaliado em mais de 15 mil dólares. Não havia sinais de arrombamento e o resto da coleção não foi tocado, o que indica que o autor sabia exatamente o que queria.",
      "Cinco pessoas ficaram na lista de suspeitos: um revendedor que tinha tentado comprar os ténis, um conhecido das convenções de streetwear, um motorista de entregas, um antigo colega de casa com uma chave e outro colecionador que conhecia a coleção.",
      "Algumas horas depois do crime, uma fotografia dos ténis apareceu num anúncio online. Os investigadores estão a estudá-la pormenor a pormenor."
],
    structure: {
      quem: "um colecionador de ténis e um agressor por identificar",
      oque: "agressão e roubo de um par raro de Nike Air Jordan, de mais de 15 mil dólares",
      onde: "no apartamento do colecionador, em Phoenix",
      quando: "em 2020; a foto dos ténis apareceu online horas depois",
      porque: "o autor sabia o que queria: só levou o par mais valioso",
      como: "sem arrombamento e sem tocar no resto da coleção",
    },
    suspects: [
      ["Carlos", "Revendedor que tinha tentado comprar os ténis raros.", "images/carlos.jpg"],
      ["Tyler Brooks", "Conhecido do colecionador em convenções de streetwear.", "images/tyler-brooks.jpg"],
      ["Kevin", "Motorista de entregas que conhecia o edifício.", "images/kevin.jpg"],
      ["Bruno", "Antigo colega de casa que ainda tinha uma chave.", "images/bruno.jpg"],
      ["Evan", "Outro colecionador que conhecia a coleção da vítima.", "images/evan.jpg"]
    ],
    culprit: "Tyler Brooks",
    clues: [
      "Carlos confirmou que tentou comprar os ténis, mas não conseguiu combinar uma visita.",
      "Bruno tinha uma chave antiga, mas a vítima tinha mudado a fechadura.",
      "Uma fotografia dos ténis apareceu num marketplace poucas horas depois.",
      "O anúncio mostrava exatamente o mesmo modelo raro e indicava o número de série.",
      "No reflexo de um espelho vê-se Tyler Brooks a tirar a fotografia no seu próprio quarto."
    ]
  },
  {
    title: "O Treino da Culpa: O Caso de Liam Vance (2021)",
    section: "Manchester · Crime",
    headline: "Incêndio destrói armazém de peças automóveis em Manchester durante a madrugada",
    subhead: "Antigos funcionários conheciam o espaço, os horários de vigilância e os pontos cegos das câmaras.",
    byline: "Redação · Secção Crime · Manchester, 2021",
    article: [
      "Um armazém de peças automóveis em Manchester ficou destruído por um incêndio durante a madrugada. As autoridades concluíram que não foi acidental: o fogo começou na zona traseira, pouco iluminada e fora do alcance da maior parte das câmaras de vigilância.",
      "Quem o provocou parecia conhecer os horários das rondas e os pontos cegos do circuito de câmaras, o que sugere uma ligação anterior ao espaço, como funcionário ou colaborador.",
      "A lista reúne cinco antigos trabalhadores: um ex-mecânico que pratica atletismo, um ex-supervisor de logística, um antigo eletricista, um ex-responsável de compras com dívidas de apostas e um antigo trabalhador que conhecia as entradas laterais. A polícia pediu registos de dispositivos pessoais e todos negam envolvimento."
],
    structure: {
      quem: "o armazém de peças e um autor por identificar",
      oque: "incêndio criminoso que destruiu o armazém",
      onde: "num armazém de peças automóveis, em Manchester",
      quando: "durante a madrugada (2021)",
      porque: "por apurar; o autor parecia ter ligação anterior ao espaço",
      como: "fogo na zona traseira, fora do alcance da maioria das câmaras",
    },
    suspects: [
      ["Liam Vance", "Ex-mecânico e praticante de atletismo ao ar livre."],
      ["Arthur", "Ex-supervisor de logística que conhecia os horários das rondas.", "images/arthur.jpg"],
      ["Hugo", "Antigo eletricista que conhecia os pontos cegos das câmaras.", "images/hugo.jpg"],
      ["Daniel", "Ex-responsável de compras com dívidas relacionadas com apostas.", "images/daniel.jpg"],
      ["Peter", "Antigo trabalhador do armazém que conhecia as entradas laterais.", "images/peter.jpg"]
    ],
    culprit: "Liam Vance",
    clues: [
      "Arthur conhecia os horários das rondas, mas os seus registos indicavam que estava noutra zona.",
      "Hugo conhecia os pontos cegos, mas não tinha acesso ao equipamento desaparecido.",
      "Daniel tinha problemas financeiros, mas não há registo dele perto do armazém.",
      "O smartwatch de Liam registou uma corrida entre a 01:00 e as 02:00.",
      "O GPS mostra que a corrida foi até à traseira do armazém, parou durante oito minutos e regressou; o ritmo cardíaco chegou aos 175 BPM."
    ]
  },
  {
    title: "O Caso do Assassinato de Thomas Thyrion (2014)",
    section: "Milwaukee · Crime",
    headline: "Jovem encontrado morto a tiro em apartamento de Milwaukee depois de uma festa",
    subhead: "A polícia identificou cinco pessoas que estiveram no apartamento durante a noite. Uma delas deixou uma pista digital.",
    byline: "Redação · Secção Crime · Milwaukee, 2014",
    article: [
      "Thomas Thyrion foi encontrado morto a tiro no seu apartamento, em Milwaukee, depois de uma festa. O alerta foi dado por um vizinho, que disse ter ouvido uma discussão antes do silêncio. No local havia sinais da festa, mas nenhuma arma.",
      "A polícia identificou cinco pessoas que estiveram no apartamento: o vizinho que chamou as autoridades, a ex-namorada de Thomas, vista a entrar no prédio à tarde, um amigo com quem tinha uma disputa financeira, um conhecido com antecedentes por posse ilegal de arma e um jovem de 21 anos que se juntara ao grupo havia pouco tempo. Nenhum elemento bastava, por si só, para uma acusação.",
      "Os peritos examinaram o telemóvel da vítima e encontraram atividade recente nas redes sociais, publicada pouco antes da morte."
],
    structure: {
      quem: "Thomas Thyrion e as cinco pessoas que estiveram no apartamento",
      oque: "morte a tiro de Thomas, sem arma no local",
      onde: "no apartamento da vítima, em Milwaukee",
      quando: "depois de uma festa (2014)",
      porque: "por apurar; vários presentes tinham possíveis motivos",
      como: "a tiro; o telemóvel da vítima tinha atividade recente nas redes sociais",
    },
    suspects: [
      ["Michael", "Vizinho que chamou a polícia depois de ouvir discussões.", "images/michael.jpg"],
      ["Jessica", "Ex-namorada de Thomas, vista a entrar no prédio.", "images/jessica.jpg"],
      ["David", "Amigo próximo envolvido numa disputa financeira.", "images/david.jpg"],
      ["Robert", "Conhecido local com histórico de posse ilegal de arma de fogo.", "images/robert.jpg"],
      ["Johnny Sellers", "Membro mais recente do grupo, com 21 anos.", "images/johnny-sellers.jpg"]
    ],
    culprit: "Johnny Sellers",
    clues: [
      "Michael chamou a polícia e disse ter ouvido uma discussão antes do disparo.",
      "Jessica foi vista no edifício, mas outras testemunhas confirmaram que saiu antes do crime.",
      "David tinha um conflito financeiro, mas apresentou registos que o colocavam noutro local.",
      "Robert tinha histórico de posse ilegal de arma, mas a arma específica não foi ligada a ele.",
      "Minutos antes da morte, o Snapchat de Thomas mostrava um convidado no sofá com uma pistola preta e vermelha; a legenda dizia “Olhem só para esta arma”. O convidado usava o casaco amarelo distintivo de Johnny Sellers."
    ]
  }
];

/* =========================================================
   ESTADO
   ========================================================= */
const state = {
  score: 0,
  current: 0,
  completed: 0,
  selected: Array(5).fill(null),
  culpritScored: Array(5).fill(false),
  navOpen: true
};

const tabs = document.getElementById("tabs");
const area = document.getElementById("caseArea");
const nav = document.getElementById("suspectNav");
const list = document.getElementById("suspectList");

/* =========================================================
   NAVEGAÇÃO GERAL
   ========================================================= */
function renderTabs() {
  tabs.innerHTML = cases
    .map((c, i) => `<button class="case-tab ${i === state.current ? "active" : ""}" onclick="openCase(${i})">Caso ${i + 1}</button>`)
    .join("");
}

function openCase(i) {
  state.current = i;
  renderTabs();
  renderCase();
  renderSuspects();
  document.getElementById("game").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* =========================================================
   RENDERIZAÇÃO DO CASO
   ========================================================= */
function renderCase() {
  const i = state.current, c = cases[i];
  area.innerHTML = `
    <div class="case-title">
      <div class="kicker">Caso ${i + 1} de 5</div>
      <h2>${c.title}</h2>
    </div>

    <article class="article">
      <span class="section-tag">${c.section}</span>

      <div class="struct-row">
        <div class="txt">
          <h3 class="headline">${c.headline}</h3>
          <p class="subhead">${c.subhead}</p>
          <div class="byline">${c.byline}</div>
        </div>
        <div class="brace"></div>
        <div class="note"><div class="note-title">Título</div></div>
      </div>

      <div class="struct-row">
        <div class="txt lead-txt"><p>${c.article[0]}</p></div>
        <div class="brace"></div>
        <div class="note">
          <div class="note-title">Lead</div>
          <p><b>Quem?</b> – ${c.structure.quem}</p>
          <p><b>O quê?</b> – ${c.structure.oque}</p>
          <p><b>Onde?</b> – ${c.structure.onde}</p>
          <p><b>Quando?</b> – ${c.structure.quando}</p>
        </div>
      </div>

      <div class="struct-row">
        <div class="txt">${c.article.slice(1).map(p => `<p>${p}</p>`).join("")}</div>
        <div class="brace"></div>
        <div class="note">
          <div class="note-title">Corpo da notícia</div>
          <p><b>Porquê?</b> – ${c.structure.porque}</p>
          <p><b>Como?</b> – ${c.structure.como}</p>
        </div>
      </div>
    </article>

    <section class="evidence">
      <h3>🔎 Provas recolhidas</h3>
      <ol>
        ${c.clues.map(t => `<li>${t}</li>`).join("")}
      </ol>
      <p class="hint">Escolhe o suspeito no painel à direita e confirma a tua escolha.</p>
    </section>

    <div class="result" id="result"></div>
  `;
}

/* =========================================================
   PAINEL LATERAL DE SUSPEITOS
   ========================================================= */
function renderSuspects() {
  const i = state.current, c = cases[i];
  list.innerHTML = c.suspects
    .map((s, j) => `
      <button class="suspect ${state.selected[i] === j ? "selected" : ""}" onclick="selectSuspect(${j})" title="${s[0]}">
        <span class="avatar">${s[0].charAt(0)}${s[2] ? `<img src="${s[2]}" alt="" onerror="this.remove()">` : ""}</span>
        <span class="suspect-info">
          <h4>${s[0]}</h4>
          <p>${s[1]}</p>
        </span>
      </button>`)
    .join("");
}

function toggleNav() {
  state.navOpen = !state.navOpen;
  applyNav();
}

function applyNav() {
  nav.classList.toggle("collapsed", !state.navOpen);
  document.getElementById("navToggle").setAttribute("aria-expanded", String(state.navOpen));
}

function selectSuspect(j) {
  state.selected[state.current] = j;
  document.querySelectorAll(".suspect").forEach((el, k) => el.classList.toggle("selected", k === j));
}

/* =========================================================
   VEREDICTO E PONTUAÇÃO
   ========================================================= */
function checkVerdict() {
  const i = state.current, chosen = state.selected[i];
  const result = document.getElementById("result");

  if (chosen === null) {
    result.className = "result show";
    result.style.borderColor = "var(--ink)";
    result.innerHTML = "<strong>Escolhe primeiro um suspeito no painel lateral.</strong>";
    result.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (state.culpritScored[i]) {
    result.className = "result show";
    result.innerHTML = "<strong>Este caso já foi concluído.</strong>";
    return;
  }

  state.culpritScored[i] = true;
  state.completed++;

  if (cases[i].suspects[chosen][0] === cases[i].culprit) {
    state.score += 100;
    result.innerHTML = `<h3>🎯 Culpado identificado!</h3><p>O culpado era <strong>${cases[i].culprit}</strong>. +100 pontos.</p>`;
    result.style.borderColor = "var(--green)";
  } else {
    result.innerHTML = `<h3>❌ Suspeito errado.</h3><p>O culpado era <strong>${cases[i].culprit}</strong>. Não perdes pontos.</p>`;
    result.style.borderColor = "var(--red)";
  }

  result.className = "result show";
  result.scrollIntoView({ behavior: "smooth", block: "center" });
  updateScore();
  if (state.completed === 5) setTimeout(showFinal, 1200);
}

function updateScore() {
  document.getElementById("score").textContent = state.score;
  document.getElementById("done").textContent = state.completed;
  document.getElementById("bar").style.width = (state.completed / 5 * 100) + "%";
}

function showFinal() {
  document.getElementById("gameLayout").style.display = "none";
  document.getElementById("tabs").style.display = "none";
  document.getElementById("final").classList.add("show");
  document.getElementById("finalText").innerHTML =
    `Terminaste os 5 casos com <strong>${state.score} pontos</strong>.<br><br>` +
    `Máximo possível: <strong>500 pontos</strong> (5 culpados identificados × 100).` +
    `<br><br><span class="small">Os erros não retiraram pontos. O objetivo principal foi identificar os culpados.</span>`;
}

/* =========================================================
   ALTURA DO CABEÇALHO (para o painel lateral colar por baixo)
   ========================================================= */
function syncHeaderHeight() {
  const h = document.getElementById("topbar").offsetHeight;
  document.documentElement.style.setProperty("--header-h", h + "px");
}
window.addEventListener("resize", syncHeaderHeight);

/* =========================================================
   ARRANQUE
   ========================================================= */
if (window.matchMedia("(max-width:800px)").matches) state.navOpen = false;
syncHeaderHeight();
applyNav();
renderTabs();
renderCase();
renderSuspects();
updateScore();
