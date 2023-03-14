const map = document.querySelector("#map");
const size = 9;
let win = 0;
let turn = 1;
const mark = [];

const [one, two] = [
    "https://em-content.zobj.net/thumbs/240/whatsapp/326/black-circle_26ab.png","https://em-content.zobj.net/thumbs/240/whatsapp/326/white-circle_26aa.png"
];
setMap();
playsetMap();
function setMap() {
    for (let i = 0; i < size+1; i++) {
        for (let j = 0; j < size+1; j++) {
            const id = `y${i}X${j}`;
            const box = document.createElement("div");
            box.setAttribute("id", id);
            box.setAttribute("class", "box");
            map.append(box);
        }
    }
    
}

function playsetMap(){
    const map1 = document.createElement("div");
    map.append(map1);
    map1.setAttribute("class", "map1");
    for (let i = 0; i < size; i++) {
        const marking = [];
        mark.push(marking);
        for (let j = 0; j < size; j++) { 
            marking.push(0);           
            const box = document.createElement("div");
            box.setAttribute("class", "box1");
            const img = document.createElement("img");
            
            console.log(mark[i][j]);
            box.addEventListener("click", e => {
                if (mark[i][j] === 0) {
                    if (turn === 1) {
                        img.setAttribute("src", one);
                    }
                    else {
                        img.setAttribute("src", two);
                    }
                    mark[i][j] = turn;
                    checkWin();
                    turn = turn == 1 ? 2 : 1;
                    box.append(img);
                }
            })
            map1.append(box);
        }
    }
    
}

function checkWin(){
    for(let i=0;i<size;i++) {
        let cnt = 0;
        for(let j=0;j<size;j++) {
            if(mark[i][j] === turn) {
                cnt ++;
            }
            else {
                cnt = 0;
            }
            if (cnt === 5) {
                win = turn;
            }
        }
    }

    for(let i=0;i<size;i++) {
        let cnt = 0;
        for(let j=0;j<size;j++) {
            if(mark[j][i] === turn) {
                cnt ++;
            }
            else {
                cnt = 0;
            }
            if (cnt === 5) {
                win = turn;
            }
        }
    }

    for(let i=0;i<size-4;i++) {
        for(let j=0;j<size-4;j++) {
            if(mark[i][j] === turn) {
                let cnt = 0;
                for(let k=0;k<5;k++) {
                    if(mark[i+k][j+k]===turn)
                        cnt ++;
                }
                if(cnt === 5) {
                    win = turn;
                }
            }
        }
    }

    for(let i=4;i<size;i++) {
        for(let j=0;j<size-4;j++) {
            if(mark[i][j] === turn) {
                let cnt = 0;
                for(let k=0;k<5;k++) {  
                     if(mark[i-k][j+k]===turn)
                        cnt ++;
                }
                if(cnt === 5) {
                    win = turn;
                }
            }
        }
    }

    if (win != 0) {
        alert(`P${win} WIN!!!`)
    }
}

function reset(){
    turn = 1;
    win = 0;
    location.reload();
}