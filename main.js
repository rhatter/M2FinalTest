/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
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
  ]

  let risultati = {
    result : [],
    count : 0
  }

  
  function findJob(title,location){
    risultati = {
      result : [],
      count : 0
    }
    console.log(title)
    for(job of jobs ){
        if(job.title.toLowerCase().includes(title.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase()))
            risultati.result.push({title: job.title,location: job.location})
        }
    risultati.count = risultati.result.length
    }

findJob('en','')
console.log(risultati)

function createList(a){
    let ul = document.createElement('ul')
  if(document.querySelector('#dataList')){
    document.querySelector('#dataList').remove()
  }
    ul.setAttribute('id','dataList')
    for(res of a.result){
        let li = document.createElement('li')
        let span1 = document.createElement('span')
        span1.textContent = res.title
        li.appendChild(span1)
        let span2 = document.createElement('span')
        span2.textContent = res.location
        li.appendChild(span2)
        ul.appendChild(li)
    }
    let dest = document.querySelector('#resultBox')
    dest.appendChild(ul)
    scroll()
}

function go(){
  let locationInput = document.querySelector('#locationInput')
  let titleInput = document.querySelector('#titleInput')
  console.log(titleInput);
  findJob(titleInput.value,locationInput.value)
  createList(risultati)
}

function assignPreCard(buttons){
  for(button of buttons){
    button.addEventListener('click',e=>{
      let titleInputVal = ''
      if(e.target.localName === 'span'){
        titleInputVal = e.srcElement.innerText
      } else if( e.target.localName === 'div'){
        titleInputVal = e.srcElement.firstElementChild.innerHTML
      }
      if( document.querySelector('.lineArea').style.left === '-100%'){
        findJob('',titleInputVal)
      } else { findJob(titleInputVal,'')}
      createList(risultati)
    })
  }

}

function scroll(){
  var scrollDiv = document.querySelector('.usableArea').clientHeight;
  window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}

function attrClick(){
  let locationInput = document.querySelector('#locationInput')
  locationInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("find").click();
    }
  })
  let titleInput = document.querySelector('#titleInput')
  titleInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("find").click();
    }
  })
}

window.onload = function(){
  let findButton = document.querySelector('#find')
  findButton.addEventListener('click', go)
  let prebuttons = document.querySelectorAll('.preCard')
  assignPreCard(prebuttons)
  let locationFilt = document.querySelector('.locationFilt')
  let lavoriFilt = document.querySelector('.lavoriFilt')
  locationFilt.addEventListener('click', e=>{ cangePreLine(e,1,locationFilt,lavoriFilt)})
  lavoriFilt.addEventListener('click', e=>{ cangePreLine(e,2,lavoriFilt,locationFilt)})
  document.querySelector('.lineArea').style.left = '-100%'
  attrClick()
}

function cangePreLine(e,i,aButt,iButt){
  let lineArea = document.querySelector('.lineArea')
  aButt.style.backgroundColor = 'rgb(0, 166, 255)'
  iButt.style.backgroundColor = 'rgb(0, 0, 0)'
if(i === 1){
  lineArea.style.left = '-100%'
} else {
  lineArea.style.left = 0 
}

}