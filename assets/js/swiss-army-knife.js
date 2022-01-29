const swiss1 = document.querySelector('.swiss-1');
const swiss2 = document.querySelector('.swiss-2');
const swiss3 = document.querySelector('.swiss-3');
const swiss4 = document.querySelector('.swiss-4');
const swiss5 = document.querySelector('.swiss-5');
const swiss6 = document.querySelector('.swiss-6');
const swiss7 = document.querySelector('.swiss-7');
const swiss8 = document.querySelector('.swiss-8');

document.getElementById('anim').addEventListener('click',()=>{
    swiss1.classList.remove('swiss-1-anim-backwards')
    swiss1.classList.add('swiss-1-anim-forwards')
    
    swiss2.classList.remove('swiss-2-anim-backwards')
    swiss2.classList.add('swiss-2-anim-forwards')

    swiss3.classList.remove('swiss-3-anim-backwards')
    swiss3.classList.add('swiss-3-anim-forwards')

    swiss4.classList.remove('swiss-4-anim-backwards')
    swiss4.classList.add('swiss-4-anim-forwards')

    swiss5.classList.remove('swiss-5-anim-backwards')
    swiss5.classList.add('swiss-5-anim-forwards')

    swiss6.classList.remove('swiss-6-anim-backwards')
    swiss6.classList.add('swiss-6-anim-forwards')

    swiss7.classList.remove('swiss-7-anim-backwards')
    swiss7.classList.add('swiss-7-anim-forwards')

    swiss8.classList.remove('swiss-8-anim-backwards')
    swiss8.classList.add('swiss-8-anim-forwards')

})
document.getElementById('unanim').addEventListener('click',()=>{
    swiss1.classList.remove('swiss-1-anim-forwards')
    swiss1.classList.add('swiss-1-anim-backwards')

    swiss2.classList.remove('swiss-2-anim-forwards')
    swiss2.classList.add('swiss-2-anim-backwards')

    swiss3.classList.remove('swiss-3-anim-forwards')
    swiss3.classList.add('swiss-3-anim-backwards')

    swiss4.classList.remove('swiss-4-anim-forwards')
    swiss4.classList.add('swiss-4-anim-backwards')

    swiss5.classList.remove('swiss-5-anim-forwards')
    swiss5.classList.add('swiss-5-anim-backwards')

    swiss6.classList.remove('swiss-6-anim-forwards')
    swiss6.classList.add('swiss-6-anim-backwards')

    swiss7.classList.remove('swiss-7-anim-forwards')
    swiss7.classList.add('swiss-7-anim-backwards')

    swiss8.classList.remove('swiss-8-anim-forwards')
    swiss8.classList.add('swiss-8-anim-backwards')


})