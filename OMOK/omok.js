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
            mark.push(0);
            box.addEventListener("click", e => {
                if (mark[i] === 0,mark[j]===0) {
                    if (turn === 1) {
                        img.setAttribute("src", one);
                    }
                    else {
                        img.setAttribute("src", two);
                    }
                    mark[i] = turn;
                    checkWin();
                    turn = turn == 1 ? 2 : 1;
                    box.append(img);
                }
            })
            map.append(box);
        }
    }
    const map1 = document.createElement("div");
    const body = document.querySelector("body");
    body.append(map1);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {            
            const box = document.createElement("div");
            box.setAttribute("class", "box1");
            
            map.append(box);
        }
    }

}

function checkWin(){
    for(let i=0;i<size;i++) {
        let cnt = 0;
        for(let j=0;j<size;j++) {
            if(map[i][j] == turn) {
                cnt ++;
            }
            else {
                cnt = 0;
            }
            if (cnt == 5) {
                win = turn;
            }
        }
    }

    for(let i=0;i<size;i++) {
        let cnt = 0;
        for(let j=0;j<size;j++) {
            if(map[j][i] == turn) {
                cnt ++;
            }
            else {
                cnt = 0;
            }
            if (cnt == 5) {
                win = turn;
            }
        }
    }

    for(let i=0;i<size-4;i++) {
        for(let j=0;j<size-4;j++) {
            if(map[i][j] == turn) {
                let cnt = 0;
                for(let k=0;k<5;k++) {
                    if(map[i+k][j+k]==turn)
                        cnt ++;
                }
                if(cnt == 5) {
                    win = turn;
                }
            }
        }
    }

    for(let i=4;i<size;i++) {
        for(let j=0;j<size-4;j++) {
            if(map[i][j] == turn) {
                let cnt = 0;
                for(let k=0;k<5;k++) {  
                     if(map[i-k][j+k]==turn)
                        cnt ++;
                }
                if(cnt == 5) {
                    win = turn;
                }
            }
        }
    }
}

function reset(){
    turn = 1;
    win = 0;
    location.reload();
}