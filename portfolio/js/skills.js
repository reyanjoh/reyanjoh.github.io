
function skills() {
    const ul = document.querySelectorAll('.ul');
    let ulLength = ul.length;

    for (let i = 0; i < ulLength; i++) {

        let lists = ul[i].children;
        let listsLength = lists.length;
        
        for (let l = 0; l < listsLength; l++) {

            let value = lists[l].lastElementChild.firstElementChild.firstElementChild.textContent;
            lists[l].lastElementChild.firstElementChild.style.width = value;

        }   
    }
}




// function skills() {
//     const ul = document.querySelector('ul');

//     let lis = ul.children;
//     let liCount = lis.length;


//     for (let i = 0; i < liCount; i++) {
//         let value =  lis[i].lastElementChild.lastElementChild.lastElementChild.textContent;

//         lis[i].lastElementChild.lastElementChild.style.width = value;    
//     }
// }