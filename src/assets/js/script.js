let inactiveThumbnails = document.getElementsByClassName('product')
let activeThumbnails = document.getElementsByClassName('active')

for (var i=0; i<inactiveThumbnails.length; i++) {

    inactiveThumbnails[i].addEventListener('click', function(){
        
        if (activeThumbnails.length > 0 ){
            activeThumbnails[0].classList.remove('active')
        }
        
        this.classList.add('active')
        document.getElementById('selected').src = this.src
        console.log(this.src)
    })
}