const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        // if (entry.isIntersecting) {
        //     entry.target.classList.add('show');
        // } else {
        //     entry.target.classList.remove('show')
        // }
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            // entry.target.unobserve
        } else {
            // entry.target.classList.remove("show")
        }
    });
},
{
    // threshold: 1,
    rootMargin: "-100px"
}
);


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// const observerii = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('hidegototop');
//             document.querySelector('.gototop').classList.remove('hideme')
//         } else {
//             entry.target.classList.remove('hidegototop')
//             document.querySelector('.gototop').classList.add('hideme')
//         }
//     });
// });


// const hiddenElementsii = document.querySelectorAll('.navm');
// hiddenElementsii.forEach((el) => observerii.observe(el));

