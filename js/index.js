const showprojects = true; // show projects or not
let isClicked = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

async function changeTitle() {
    document.title = "w";
    await sleep(250);
    document.title = "wr";
    await sleep(250);
    document.title = "wra";
    await sleep(250);
    document.title = "wrai";
    await sleep(250)
    document.title = "wrait";
    await sleep(250)
    document.title = "wraith";
    await sleep(250)
    document.title = "wraith ";
    await sleep(250)
    document.title = "wraith <"
    await sleep(250)
    document.title = "wraith < "
    await sleep(250)
    document.title = "wraith < P"
    await sleep(250)
    document.title = "wraith < Po"
    await sleep(250)
    document.title = "wraith < Por"
    await sleep(250)
    document.title = "wraith < Port"
    await sleep(250)
    document.title = "wraith < Portf"
    await sleep(250)
    document.title = "wraith < Portfo"
    await sleep(250)
    document.title = "wraith < Portfol"
    await sleep(250)
    document.title = "wraith < Portfoli"
    await sleep(250)
    document.title = "wraith < Portfolio"
}

changeTitle();

if (showprojects == false) {
    console.log("info: hiding projects")
    window.onload = function() {
        document.getElementById('projects').style.display = 'none';
    }
} else if (showprojects == true){
    console.log("info: showing projects")
    window.onload = function() {
        document.getElementById('projects').style.display = 'block';
    }
}



//** old mouse effect **//
// async function createCircle() {
//     const circle = document.createElement("div");
//     circle.style.position = "absolute";
//     circle.style.borderRadius = "50%";
//     circle.style.width = "8px";
//     circle.style.height = "8px";
//     circle.style.backgroundColor = "blue";
//     circle.style.opacity = "0.5";
//     circle.style.pointerEvents = "none";
//     circle.style.boxShadow = "0 0 10px blue, 0 0 20px blue, 0 0 30px blue, 0 0 40px blue, 0 0 50px blue";
//     circle.style.transition = "width 0.2s, height 0.2s";
//     document.body.appendChild(circle);

//     let opacity = 0.5;
//     let increasing = true;


//     while (true) {
//         await sleep(1);

//         document.addEventListener("mousemove", e => {
//             circle.style.left = e.pageX - circle.offsetWidth / 2 + "px";
//             circle.style.top = e.pageY - circle.offsetHeight / 2 + "px";
//         });
    
//         document.addEventListener("contextmenu", e => {
//             e.preventDefault();
//         });

//         document.addEventListener("mousedown", e => {
//             isClicked = true; 
//             circle.style.backgroundColor = getRandomColor();
//             circle.style.boxShadow = `0 0 10px ${circle.style.backgroundColor}, 0 0 20px ${circle.style.backgroundColor}, 0 0 30px ${circle.style.backgroundColor}, 0 0 40px ${circle.style.backgroundColor}, 0 0 50px ${circle.style.backgroundColor}`;
//         });

//         document.addEventListener("mouseup", e => {
//             isClicked = false; 
//             circle.style.boxShadow = `0 0 10px ${circle.style.backgroundColor}, 0 0 20px ${circle.style.backgroundColor}, 0 0 30px ${circle.style.backgroundColor}, 0 0 40px ${circle.style.backgroundColor}, 0 0 50px ${circle.style.backgroundColor}`;
//         });

//         if (isClicked) {
//             circle.style.width = "65px";
//             circle.style.height = "65px";
//         } else {
//             circle.style.width = "40px";
//             circle.style.height = "40px";
//         }

//         if (increasing) {
//             opacity += 0.01;
//             if (opacity >= 1) {
//                 increasing = false;
//             }
//         } else {
//             opacity -= 0.01;
//             if (opacity <= 0.5) {
//                 increasing = true;
//             }
//         }

//         circle.style.opacity = opacity.toString();
//     }
// }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// window.onload = async function() {
//     createCircle();
// }
//** **//
 
