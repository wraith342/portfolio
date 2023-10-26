const showprojects = true; // show projects or not
let isClicked = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

async function changeTitle() {
    document.title = "L";
    await sleep(250);
    document.title = "Le";
    await sleep(250);
    document.title = "Leo";
    await sleep(250);
    document.title = "Leo ";
    await sleep(250)
    document.title = "Leo <"
    await sleep(250)
    document.title = "Leo < "
    await sleep(250)
    document.title = "Leo < P"
    await sleep(250)
    document.title = "Leo < Po"
    await sleep(250)
    document.title = "Leo < Por"
    await sleep(250)
    document.title = "Leo < Port"
    await sleep(250)
    document.title = "Leo < Portf"
    await sleep(250)
    document.title = "Leo < Portfo"
    await sleep(250)
    document.title = "Leo < Portfol"
    await sleep(250)
    document.title = "Leo < Portfoli"
    await sleep(250)
    document.title = "Leo < Portfolio"
}

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


async function createCircle() {
    const circle = document.createElement("div");
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.width = "10px";
    circle.style.height = "10px";
    circle.style.backgroundColor = "blue";
    circle.style.opacity = "0.5";
    circle.style.pointerEvents = "none";
    document.body.appendChild(circle);

    document.addEventListener("mousemove", e => {
        circle.style.left = e.pageX - 25 + "px";
        circle.style.top = e.pageY - 25 + "px";
    });

    document.addEventListener("contextmenu", e => {
        e.preventDefault();
    });

    while (true) {
        await sleep(10);

        document.addEventListener("mousedown", e => {
            isClicked = true; 
        });

        document.addEventListener("mouseup", e => {
            isClicked = false; 
        });

        if (isClicked) {
            circle.style.width = "75px";
            circle.style.height = "75px";
        } else {
            circle.style.width = "50px";
            circle.style.height = "50px";
        }
    }
}

window.onload = async function() {
    createCircle();
}

changeTitle(); 
