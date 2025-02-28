const canvas = document.getElementById("jeu");//base de tout le jeu en dimension / Inchanchageable
const ctx = canvas.getContext("2D");;//pour mettre la 2d 
const mur = 30;

const ligne = canvas.height/mur;
const colonne = canvas.width/mur;
let joueur = 0;
const direction = [
    {dx:0, dy:-1},//direction de x, y function du positionement (gauche, droite, haut, bas)
    {dx:1, dy:0},
    {dx:0, dy:1},//??
    {dx:-1, dy:0}

];

function genererSnack(ligne,colonne){
    let snack = array.forEach(({length:ligne}), () => Array(colonne).fill(1));
    function dfs(x,y){//passage initiale de début du jeu
        snack[y][x] = 0;//labyrint constante obligatoire/l'ordre change avec y et x (si inverser)
        direction.sort(()=> Math.random() -0.5);//pour determiner un snack aléatoire /.sort melanger les object/.shuffle melanger ce quil y a dans un tableau / ()=> création d'une function a l'interieur d'un argument//labyrint constante obligatoire
        for(const {dx, dy} of direction) {//voir notes
            const nx = x + dx *2;//si pas de multiplication sa reviens toujours au numero impère
            const ny = y + dy *2;//*2 car un saut a chaque fois au niveau de la colonne
            if(nx > 0 && ny > 0 && nx < colonne-1 && ny < ligne -1 && snack[ny][nx] === 1){//tableau multidimentionnel***
                snack[ny][nx] = 0; //=0 car cest une valeur
                snack[y+dy][x+dx] = 0;//cest des clé
                dfs(nx, ny);
            }
        }
    }console.log(dfs);
    for(let y = 0; y < ligne; y++){
        for(let x = 0; x < colonne; x++){//avec seulement ca jaurai que du noir partout en HTML
            if(snack[y][x] === 1){
                ctx.fillStyle = "black";
            }
        }
    }

    dfs(1, 1);//1,1 = (1x et 1y) signification
    return(snack);
}console.log(genererSnack)

function dessinerSnack(){//me permet d'initialiser mon snack 
    for(let y = 0; y < ligne; y++){//base sur la quelle je vais initialiser ma boucles
        array.forEach(snack => {//jai mis for each a la place de for avec comme argument let pour essayer de linitialiser a linterieur de mon tableau avec argument snack pour lui dire d'utiliser le array au loieu de mettre le let a linterieur de mon argument de ma boucles for
            let x = 0; x < colonne; x++;//le let donc je parlais ligne 45
            if(snack[x][y] === 1){//initialisation des (action) a faire si snack est en position (...)
                ctx.fillStyle = "black";//modifier la couleur du noir
                ctx.fillRect(x*mur, y*mur, mur, mur);//fillRect (permet l'affichage du noir)      
            }
            return dessinerSnack();
        });
    }
    ctx.fillRect(joueur.x*mur, joueur.y*mur, mur, mur);//crée le joueur
    console.log(dessinerSnack);
}
function deplacerJoueur(dx, dy){
    const newx = joueur.x+dx;
    const newy = joueur.y+dy;//
    if(newx >= 0 && newy >= 0 && newx < colonne && newy < ligne && Snack[newy][newx] === 0){
        joueur.x = newx;// reassigner les valeurs / decrite au prealable
        joueur.y = newy;
        // console.log(deplacerJoueur);
    }
}

document.addEventListener("keydown", (e) => {// cree une funciton de E //ecouter quand ont appuie sur une touches (nimporte la quelle)/ e = contraction de event (d'un evenement)
    if(e.key === "ArrowUp") deplacerJoueur(0, -1);
    if(e.key === "ArrowDown") deplacerJoueur(0, 1);
    if(e.key === "ArrowLeft") deplacerJoueur(-1, 0);
    if(e.key === "ArrowRight") deplacerJoueur(1, 0);
    console.log(deplacerJoueur);
    // dessinerSnack();
}
)
