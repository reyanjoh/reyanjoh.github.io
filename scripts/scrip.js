// window.addEventListener('load', () =>{

//     setTimeout(() =>{

//         // window.location = 'contact'
//         document.querySelector('#display-none').style.display= 'block';
//     },2000);
    
// });

const loader = document.querySelector('#loader-in');


addEventListener('click', (e) => {
    

    if(e.target.classList.contains('contact')){

        document.querySelector('.typing-animation').style.color = 'transparent';
        document.querySelector('.typing-animation').innerText = 'Portfolio';
        document.querySelector('.loader-in').classList.add("loader-in-animation");
        setTimeout(() =>{
            document.querySelector('.typing-animation').style.backgroundColor = '#8E8E8E';
        },2000);
                
        setTimeout(() =>{
            // window.location.assign('http://127.0.0.1:5500/contact');
            window.location.assign('https://reyanjoh.github.io/contact');
        },2000);
    }

    if(e.target.classList.contains('projects')){

        document.querySelector('.typing-animation').style.color = 'transparent';
        document.querySelector('.typing-animation').innerText = 'Portfolio';
        document.querySelector('.loader-in').classList.add("loader-in-animation");
        setTimeout(() =>{
            document.querySelector('.typing-animation').style.backgroundColor = '#8E8E8E';
        },2000);
                
        setTimeout(() =>{
            // window.location.assign('http://127.0.0.1:5500/projects');
            window.location.assign('https://reyanjoh.github.io/projects');
        },2000);
    }

    
});