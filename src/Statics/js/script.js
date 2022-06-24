let list_ul = document.querySelectorAll('.asidelinks ul li');
let qayb_faraca = document.querySelectorAll('.qayb_faraca');
let qoraal_hawl = document.querySelectorAll('.last_arin p');
let taps_hawlo = document.querySelectorAll('.last_arin .tps div');
let hawlo_coun = document.querySelectorAll('.hawl_text');
// side nav
list_ul.forEach(function(elem){
    elem.addEventListener('click',function(){
        for(let i = 0; i < list_ul.length; i++){
            list_ul[i].classList.remove('active')
        }
        this.classList.toggle('active')
    })
})



// hawlo
let inex = 1;
taps_hawlo[1].addEventListener('click',function(){
    if(inex < hawlo_coun.length){
        inex++;
        for(let i = 0; i < qoraal_hawl.length; i++){
            qoraal_hawl[i].classList.remove('active')
            qoraal_hawl[inex].classList.add('active');
        }
    }
})

taps_hawlo[0].addEventListener('click',function(){
    inex--;
    if(inex >= 0){
        for(let i = 0; i < qoraal_hawl.length; i++){
            qoraal_hawl[i].classList.remove('active')
            qoraal_hawl[inex].classList.add('active');
        }
    }
})



