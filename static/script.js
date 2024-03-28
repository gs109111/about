setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;

    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    let time = hours + ':' + minutes + ' ' + ampm;

    document.getElementById('time').innerHTML = time;
}, 1000);

// This code is for the 'application' launching part
// This allows me to easily create more 'applications' without writing more js (Handles the closing and launching part)

document.getElementById("reload").onclick = () => {
    window.location.reload();
}


var event = new MouseEvent('dblclick', {
    'view': window,
    'bubbles': true,
    'cancelable': true
});


window.onload = () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'ease-in all 0.5s';
    setTimeout(() => {
        document.body.style.opacity = 1;
        document.getElementById("startup").play();

    }, 1500);
    setTimeout(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (!isMobile) {
            document.getElementById("introduction").dispatchEvent(event);
        } else {
            document.getElementById("mobile").dispatchEvent(event);
            document.getElementById("taskbar-app").style.display = 'none';
        }
    }, 2500)

}

document.oncontextmenu = () => {
    return false;
}

for (let i = 0; i < document.querySelectorAll('.app').length; i++) {
    let app = document.querySelectorAll('.app')[i].id;

    document.getElementById("click-handler").onclick = () => {


        console.log(i)

        for (let click = 0; click < document.querySelectorAll('.app').length; click++) {
            document.querySelectorAll(".app p")[click].style.background = 'transparent';
            document.querySelectorAll(".app img")[click].style.opacity = '100'
            document.querySelectorAll(".app p")[click].style.border = 'none';
        }

    }

    document.getElementById(app).onclick = () => {



        document.querySelectorAll(".app p")[i].style.background = 'blue';
        document.querySelectorAll(".app p")[i].style.border = '1.2px dotted white';
        document.querySelectorAll(".app img")[i].style.opacity = '.65'





    }


    document.getElementById(app).ondblclick = () => {


        document.querySelectorAll(".app p")[i].style.background = 'transparent';
        document.querySelectorAll(".app img")[i].style.opacity = '100'
        document.querySelectorAll(".app p")[i].style.border = 'none';

        document.getElementById("taskbar-app").innerHTML = app.charAt(0).toUpperCase() + app.slice(1)
        document.getElementById("taskbar-app").style.display = 'inline-block';



        document.getElementById("app_name").innerText = app.charAt(0).toLocaleUpperCase() + app.substring(1);
        try {
            for (let i = 0; i < document.querySelectorAll('.window').length; i++) {
                document.getElementsByClassName('window')[i].style.display = 'none';
            }
            document.getElementById('window' + app).style.display = 'block';

            document.getElementById(app + 'close').onclick = () => {
                document.getElementById('window' + app).style.display = 'none';
                document.querySelectorAll(".app p")[i].style.background = 'transparent';
                document.querySelectorAll(".app img")[i].style.opacity = '100'
                document.querySelectorAll(".app p")[i].style.border = 'none';
                document.getElementById("taskbar-app").style.display = 'none';

            }

        } catch (e) {
            document.getElementById('windowerror').style.display = 'block';

            document.getElementById('errorclose').onclick = () => {
                document.getElementById('windowerror').style.display = 'none';
                document.querySelectorAll(".app p")[i].style.background = 'transparent';
                document.querySelectorAll(".app img")[i].style.opacity = '100'
                document.querySelectorAll(".app p")[i].style.border = 'none';
                document.getElementById("taskbar-app").style.display = 'none';

            }


        }

    }



}