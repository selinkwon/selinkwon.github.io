const map = document.querySelector("#map");
const size = 10;
let win = 0;
let turn = 1;
let mark = [];

const [one, two] = [
    "https://em-content.zobj.net/thumbs/240/whatsapp/326/black-circle_26ab.png","https://em-content.zobj.net/thumbs/240/whatsapp/326/white-circle_26aa.png"
];
setMap();
function setMap() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const id = `y${i}X${j}`;
            const box = document.createElement("div");
            const img = document.createElement("img");
            box.setAttribute("id", id);
            box.setAttribute("class", "box");
            mark.push(i,j);
            box.addEventListener("click", e => {
                if(mark[i,j]===0){           
                    if(turn === 1){
                        img.setAttribute("src",one);
                    }
                    else{
                        img.setAttribute("src",two);
                    }
                    mark[i,j] = turn;
                    // checkWin();
                    turn = turn == 1? 2:1;
                    box.append(img);
                }  
                console.log(mark[i,j]);
            })
            map.append(box);
        }
    }
    console.log(mark);
}