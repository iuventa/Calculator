let changecolor = () => {
    let button = document.getElementById("toggle").innerHTML;

    console.log(button);

    if( button == '<i class="fa-solid fa-toggle-off"></i>'){
        document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';

        document.documentElement.style.setProperty('--bgcolor', 'linear-gradient(to bottom right, #beeaf2 50%, #2f313c 0%)');

        document.documentElement.style.setProperty('--calcbg', '#1a1b28');

        document.documentElement.style.setProperty('--btnmainclr', '#1e2435');

        document.documentElement.style.setProperty('--btnsecondarycolor', '#52c9dc');

        document.documentElement.style.setProperty('--txtcolor', '#ffffff');

        document.documentElement.style.setProperty('--txtcolor2', '#ffffff');

        document.documentElement.style.setProperty('--symbolcolors', '#52c9dc');


    }
    else{
        document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';

        document.documentElement.style.setProperty('--bgcolor', 'linear-gradient(to bottom right, #beeaf2 50%, #2f313c 0%)');

        document.documentElement.style.setProperty('--calcbg', '#ffffff');

        document.documentElement.style.setProperty('--btnmainclr', '#f2f8fc');

        document.documentElement.style.setProperty('--btnsecondarycolor', '#52c9dc');

        document.documentElement.style.setProperty('--txtcolor', '#000000');

        document.documentElement.style.setProperty('--txtcolor2', '#ffffff');

        document.documentElement.style.setProperty('--symbolcolors', '#52c9dc');
    }
}