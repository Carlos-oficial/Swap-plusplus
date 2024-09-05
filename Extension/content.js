shortNames = {
  "Álgebra Linear para a Engenharia": "AL",
  "Cálculo para a Engenharia": "Cálculo",
  "Laboratórios de Informática I": "LI1",
  "Programação Funcional": "PF",
  "Tópicos de Matemática Discreta": "TMD",
  "Análise Matemática para Engenharia": "Análise",
  "Elementos de Probabilidades e Teoria de Números": "EPTN",
  "Laboratórios de Informática II": "LI2",
  "Lógica": "Lógica",
  "Programação Imperativa": "PI",
  "Sistemas de Computação": "SC",
  "Algoritmos e Complexidade": "AlgC",
  "Arquitetura de Computadores": "ArqC",
  "Estatística Aplicada": "EA",
  "Física Moderna": "FM",
  "Fundamentos de Comunicação de Dados": "FCD",
  "Laboratórios de Informática III": "LI3",
  "Bases de Dados": "BD",
  "Investigação Operacional": "IO",
  "Métodos Numéricos e Otimização Não Linear": "MNOnL",
  "Programação Orientada aos Objetos": "POO",
  "Redes de Computadores": "RC",
  "Sistemas Operativos": "SO",
  "Cálculo de Programas": "CP",
  "Comunicações por Computador": "CC",
  "Desenvolvimento de Sistemas de Software": "DSS",
  "Inteligência Artificial": "IA",
  "Laboratórios de Informática IV": "LI4",
  "Sistemas Distribuídos": "SD",
  "Aprendizagem e Decisão Inteligentes": "ADI",
  "Computação Gráfica": "CG",
  "Interface Pessoa-Máquina": "IPM",
  "Processamento de Linguagens": "PL",
  "Segurança de Sistemas Informáticos": "SSI",
  "Análise de Projetos": "AProj",
  "Engenharia Web": "EngWeb",
  "Mecânica Quântica": "MQ",
  "Análise e Teste de Software": "ATS",
  "Aplicações e Serviços de Computação em Nuvem": "ASCN",
  "Computação Paralela": "CPar",
  "Dados e Aprendizagem Automática": "DAA",
  "Engenharia de Serviços em Rede": "ESR",
  "Métodos Formais em Engenharia de Software": "MFES",
  "Requisitos e Arquiteturas de Software": "RAS",
  "Agentes e Sistemas Multiagente": "ASM",
  "Análise Inteligente em Sistemas de 'Big Data'": "AISBD",
  "Arquiteturas Aplicacionais": "AA",
  "Engenharia de Segurança": "ES",
  "Engenharia Gramatical": "EG",
  "Experimentação em Engenharia de Software": "EES",
  "Gestão e Segurança de Redes": "GSR",
  "Redes Definidas por Software": "RDS",
  "Sistemas Distribuídos em Grande Escala": "SDGE",
  "Verificação Formal": "VF",
  "Visão por Computador e Processamento de Imagem": "VCPI",
  "Administração de Bases de Dados": "ABD",
  "Aprendizagem Profunda": "AProf",
  "Bases de Dados NoSQL":
    "short_n  NoSQL",
  "Estruturas Criptográficas": "EC",
  "Interligação de Redes IP": "IRIP",
  "Manutenção e Evolução de Software": "MES",
  "Programação Ciber-Física": "PCF",
  "Redes Fixas e Móveis": "RFM",
  "Scripting no Processamento de Linguagem Natural": "SPLN",
  "Tolerância a Faltas": "TF",
  "Visualização e Iluminação": "VI",
  "Cálculo de Sistemas de Informação": "CSI",
  "Mineração de Dados": "MD",
  "Novos Paradigmas de Rede": "NPR",
  "Paradigmas de Sistemas Distribuídos": "PSD",
  "Qualidade de Serviço na Internet": "QSI",
  "Representação e Processamento de Conhecimento na Web": "RPCW",
  "Sensorização e Ambiente": "SA",
  "Sistemas Interativos Confiáveis": "SIC",
  "Tecnologias de Segurança": "TS",
  "Tópicos de Desenvolvimento de Software": "TDS",
  "Visualização em Tempo Real": "VTR",
  "Bilinguismo": "Bilinguismo",
  "Cidadania Digital": "CD",
  "Democracia Plena, Responsabilidade e Estado de Direito": "DPRED",
  "Direito Laboral": "DL",
  "Educação e Cidadania Global Criativa": "ECGC",
  "Educação, Cidadania e Direitos Humanos": "ECDH",
  "Inglês Académico": "IngA",
  "Introdução à Língua e Cultura Russa": "ILCR",
  "Literacia Fotográfica da Física à Mensagem": "LFFM",
  "Matemática das Coisas": "MC",
  "Princípios de Gestão de Inventários": "PGI",
  "Substâncias que Mudaram o Mundo": "SMM",
  "Sustentabilidade Ambiental, Social e Económica": "SASE",
  "Temas de Direito da Igualdade e Não Discriminação": "TDIND",
  "Tópicos de Astronomia e Cosmologia": "TAC",
  "Projeto de Informática": "ProjInf",
  "Dissertação": "D"
}


function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const dp = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(null));

  for (let i = 0; i <= len1; i++) dp[i][0] = i;
  for (let j = 0; j <= len2; j++) dp[0][j] = j;

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,    // Deletion
        dp[i][j - 1] + 1,    // Insertion
        dp[i - 1][j - 1] + cost  // Substitution
      );
    }
  }
  return dp[len1][len2];
}


function parsePage() {
  let array = document.getElementsByTagName('tr');
  let filteredArray = Array.from(array).filter(tr => {
    let children = Array.from(tr.children);
    return children.some(child => child.tagName.toLowerCase() === 'td');
  });
  let arr = (filteredArray.map((x) => {
    let arr = (Array.from(x.getElementsByTagName('td')))
    return ({ course: arr[1].textContent.replace('(Teórica)', '').trim().replace('(Teórica', ''), shift: arr[2].textContent.trim() })
  }));

  // Define the Object.groupBy function
  Object.groupBy = function (array, key) {
    return array.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x.shift);
      return rv;
    }, {});
  };

  let groupedByCourse = arr.reduce(function (rv, x) {
    (rv[x['course']] = rv[x['course']] || []).push(x.shift);
    return rv;
  }, {})
  return(groupedByCourse);
}

function getClosestShortName(scrapedName) {
  let closestName = null;
  let smallestDistance = Infinity;

  // Iterate over the long names and find the one with the smallest distance
  for (const longName in shortNames) {
      const distance = levenshteinDistance(scrapedName, longName);
      if (distance < smallestDistance) {
          smallestDistance = distance;
          closestName = longName;
      }
  }

  // Return the corresponding short name
  return shortNames[closestName];
}


const navbar = document.querySelector('.navbar');
const button = document.createElement('button')
button.classList.add('btn-sm');
button.style.backgroundColor = '#543780';
button.style.border = 'none';
button.onclick = () => {
  groupedByCourse = parsePage();
  shiftString = ""
  Object.keys(groupedByCourse).map(name => {
    const shortName = getClosestShortName(name);
    shiftString += (`${shortName}=${groupedByCourse[name]}&`);
});
  navigator.clipboard.writeText(shiftString);
  alert('Copied the text: ' + shiftString);
}

const logo = document.createElement('img');
logo.src = "https://calendario.cesium.di.uminho.pt/favicon-calendarium.ico"
logo.alt = "Calendarium"
logo.style.height = "2rem"

navbar.appendChild(button)
button.appendChild(logo)
