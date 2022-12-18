// window.addEventListener('load', () =>{

//     setTimeout(() =>{

//         // window.location = 'contact'
//         document.querySelector('#display-none').style.display= 'block';
//     },2000);
    
// });

const loader = document.querySelector('#loader-in');


addEventListener('click', (e) => {
    

    if(e.target.classList.contains('contact')){

        // document.querySelector('.typing-animation').style.color = 'transparent';
        document.querySelector('.typing-animation').innerText = 'Portfolio';
        document.querySelector('.loader-in').classList.add("loader-in-animation");
        setTimeout(() =>{
            document.querySelector('.typing-animation').style.backgroundColor = '#8E8E8E';
        },2000);
                
        setTimeout(() =>{
            window.location.assign('https://reyanjoh.github.io/portfolio/contact');
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
            window.location.assign('https://reyanjoh.github.io/portfolio/projects');
        },2000);
    }

    
});