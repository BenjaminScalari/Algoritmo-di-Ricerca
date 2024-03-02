const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

function searchJobsByLocationAndTitle(jobs, title, location) {

  // Trasformo i parametri in minuscolo per rendere la ricerca case insensitive
  const titleLowerCase = title.toLowerCase();
  const locationLowerCase = location.toLowerCase();

  // Filtro gli annunci che corrispondono alla posizione lavorativa e geografica richiesta
  const result = jobs.filter(function(job) {

    // Trasformo i valori dei titoli e delle posizioni in minuscolo per rendere la ricerca case insensitive
    const jobTitleLowerCase = job.title.toLowerCase();
    const jobLocationLowerCase = job.location.toLowerCase();

    // Controllo se il titolo e la posizione contengono le stringhe cercate
    const titleMatch = jobTitleLowerCase.includes(titleLowerCase);
    const locationMatch = jobLocationLowerCase.includes(locationLowerCase);

    // Restituisco true solo se entrambe le condizioni sono soddisfatte
    return titleMatch && locationMatch;

  });

  // Restituisco il risultato e il conteggio totale
  return {
    result: result,
    count: result.length
  };
}

// Eseguo questa funzione quando il documento html è completamente caricato 
document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.querySelector("button[value='cerca']");
  searchButton.addEventListener("click", function() {
    // Ottengo i valori inseriti negli input di titolo lavorativo e posizione
    const titleInput = document.getElementById("titoloLavorativo").value.trim();
    const locationInput = document.getElementById("location").value.trim();
    // Eseguo la funzione di ricerca con i valori inseriti e ottieni i risultati
    const searchResult = searchJobsByLocationAndTitle(jobs, titleInput, locationInput);
    displayResults(searchResult);
  });
});

// Funzione per visualizzare i risultati della ricerca sulla pagina
function displayResults(searchResult) {
  const resultList = document.getElementById("results");
  // Pulisce eventuali risultati precedenti
  resultList.innerHTML = "";

  // Aggiungo i risultati alla lista
  searchResult.result.forEach(function(job) {
    // Creo un nuovo elemento di lista per ogni lavoro trovato
    const listItem = document.createElement("li");
    // Imposto il testo con il titolo del lavoro e la posizione
    listItem.textContent = job.title + " - " + job.location;
    // Aggiungo l'elemento alla lista dei risultati
    resultList.appendChild(listItem);
  });

  // Numero totale dei risultati
  const countElement = document.createElement("p");
  countElement.textContent = "Totale risultati trovati: " + searchResult.count;
  resultList.appendChild(countElement);
}
