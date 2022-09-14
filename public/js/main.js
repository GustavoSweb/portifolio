const card = document.querySelectorAll(".card")

document.addEventListener('scroll', ()=> {
  
  card.forEach(element =>{
  
    
    if(window. screen. width >= 500){
       if (this.scrollY-700 >= element.offsetTop) {
         
      element.classList.add('opacity')
      
    }
    }else{
      
    if (this.scrollY+400 >= element.offsetTop) {
      element.classList.add('opacity')
      console.log("ok")
      
    }}
  })
})
