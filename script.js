let titulli = document.getElementById('titulli')
let restartBtn = document.getElementById('restart')
let kutiat = Array.from( document.getElementsByClassName('kutia'))

let indikatoriFitues = getComputedStyle(document.body).getPropertyValue('--kutiat-fituese')


const O_SHKRONJA = "O"
const X_SHKRONJA = "X"
let lojtari = X_SHKRONJA
let spaces = Array(9).fill(null)

function FilloLojen () {
    kutiat.forEach(kutia => kutia.addEventListener('click', kutiaUprek))
}

function kutiaUprek(parametri1) {
   const id = parametri1.target.id

   if(!spaces[id]){
    spaces[id] = lojtari
    parametri1.target.innerText = lojtari

    if(lojtariFiton() !==false){
        lojtariText = `${lojtari} FITORE`
        let kutiatFituese = lojtariFiton()

        kutiatFituese.map( kutia => kutiat[kutia].style.backgroundColor=indikatoriFitues)
        
    }
  
    lojtari = lojtari == X_SHKRONJA ? O_SHKRONJA : X_SHKRONJA

}
    }

const kombinimet = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function lojtariFiton() {
 for (const kushti of kombinimet) {
    let [a, b, c] = kushti

    if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
        return [a,b,c] 
    }
   }
   return false
}    

restartBtn.addEventListener('click', restart)  

function restart() {
    spaces.fill(null)

    kutiat.forEach( kutia => {
        kutia.innerText = ''
        kutia.style.backgroundColor = ''
    })

    lojtariText = 'TIC TAC TOE'

    lojtari = X_SHKRONJA
}

FilloLojen()