const panels = document.querySelectorAll('.panel')
// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }



panels.forEach(function(a){  //a represent the elements of "panels" array(ie.all the elements of panel class)
    a.addEventListener('click', function() {   /*do not write any function name in place of function,function is keyword*/
        removeactiveclass()
        a.classList.add('active');
    });
})

function removeactiveclass() {
    panels.forEach(function(p) {
        p.classList.remove('active');
    });
}

// function ways

// 1) 
// function functionName()
// {
// console.log("good morning");
// }
// functionName()

// 2)
// const functionName= function() {
//     console.log("good morning");
// }
// functionName()

// 3)
// const functionName= () => {
//     console.log("good morning");  OR return("good morning")
// } 
// functionName()
// we do not need to mention function keyword in arrow function. 
// If single expression is there in return then no need for parenthesis and return keyword.
// If there is only 1 argument then no need for parenthesis