const canvas = document.getElementById("toileDeJeu");//base de tout le jeu en dimension / Inchanchageable
const ctx = canvas.getContext("2D");;//pour mettre la 2d 
const mur = 30;

const ligne = canvas.height/mur;
const colonne = canvas.width/mur;
// function genererLabyrinth(ligne,colonne){
let labyrinth = Array.from(({length:ligne}), () => Array(colonne).fill(1));
const direction = [
    {dx:0, dy:-1},//direction de x, y function du positionement (gauche, droite, haut, bas)
    {dx:1, dy:0},
    {dx:0, dy:1},//??
    {dx:-1, dy:0}

];


function genererSnack(ligne,colonne){
    function dfs(x,y){//passage initiale de début du jeu
        snack[y][x] = 0;//labyrint constante obligatoire/l'ordre change avec y et x (si inverser)
        direction.sort(()=> Math.random() -0.5);//pour determiner un labyrinth aléatoire /.sort melanger les object/.shuffle melanger ce quil y a dans un tableau / ()=> création d'une function a l'interieur d'un argument//labyrint constante obligatoire
        for(const {dx, dy} of direction) {//voir notes
            const nx = x + dx *2;//si pas de multiplication sa reviens toujours au numero impère
            const ny = y + dy *2;//*2 car un saut a chaque fois au niveau de la colonne
            if(nx > 0 && ny > 0 && nx < colonne-1 && ny < ligne -1 && snack[ny][nx] === 1){//tableau multidimentionnel***
                snack[ny][nx] = 0; //=0 car cest une valeur
                snack[y+dy][x+dx] = 0;//cest des clé
                dfs(nx, ny);
            }
        }
    }

    dfs(1, 1);//1,1 = (1x et 1y) signification
    return(labyrinth);
}






// function dessinerSnack(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);//rend un tableau tout blanc/ clearRect permet de dessiner un carré
//     for(let y = 0; y < ligne; y++){
//         for(let x = 0; x < colonne; x++){//avec seulement ca jaurai que du noir partout en HTML
//             if(snack[y][x] === 1){
//                 ctx.fillStyle = "black";
//                 ctx.fillRect(x*mur, y*mur, mur, mur);//fillRect (permet l'affichage du noir)      
//             }
//         }
//     }
//     ctx.fillStyle = "blue";
//     ctx.fillRect(joueur.x*mur, joueur.y*mur, mur, mur);//crée le joueur
//     ctx.fillStyle = "red";
//     ctx.fillRect(sortie.x*mur+4, sortie.y*mur+4, mur-8, mur-8);//emplacement HTML/valeur (peux imorte 4 ou pas )
// }

// while(snack[sortie.y][sortie.x] === 1){
//     sortie = {x: Math.floor(Math.random()*(colonne-2))+1,y: Math.floor(Math.random()*(ligne-2))+1}
// }
// function genererSnack(){
//     let snack = Array.from(({length:ligne}), () => Array(colonne).fill(1));
//     snack[y][x] = 0;//labyrint constante obligatoire/l'ordre change avec y et x (si inverser)
//     if(nx > 0 && ny > 0 && nx < colonne-1 && ny < ligne -1 && snack[ny][nx] === 1){//tableau multidimentionnel***
//         snack[ny][nx] = 0; //=0 car cest une valeur
//         snack[y+dy][x+dx] = 0;//cest des clé
//         dfs(nx, ny);
//     }
    
//     direction.sort(()=> Math.random() -0.5);
//     const direction = [
//         {dx:0, dy:-1},//direction de x, y function du positionement (gauche, droite, haut, bas)
//         {dx:1, dy:0},
//         {dx:0, dy:1},//??
//         {dx:-1, dy:0}

//     ];
// }
