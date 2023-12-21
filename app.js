


document.getElementById("button").addEventListener('click', this.openWin);

function openWin(ev){
    console.log('popup')
    let win=window.open("form.html ", null, 
    'popup, width=400 height=600, left=300, top=500');

    win.onload = () => {

        let timmy=setInterval(() => {
            let w = Math.random() * parseInt(window.screen.availWidth);
            let w1 = Math.random() * parseInt(window.screen.availHeight);
            win.resizeTo(w,h);
        }, 1000);

        setTimeout(() => {
            win.close();
        }, 6000);

       };
   
}


