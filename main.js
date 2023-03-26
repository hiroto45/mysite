'use strict';

{

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;
  
  function play(){
      setTimeout(() =>{
        images[currentIndex].classList.remove('current');
        currentIndex++;
        if(currentIndex > images.length -1){
          currentIndex = 0
        }
        images[currentIndex].classList.add('current');
        play();
      } 
      , 5000);
     
  };

  play();

  // API
  const targets = document.querySelectorAll('.items');

  function ItemCallback (entries,obs){
    entries.forEach((entry) => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  };

  const options = {
    threshold: 0.1,
  }
  const itemsObserver = new IntersectionObserver(ItemCallback , options);
  targets.forEach(target =>{
    itemsObserver.observe(target);
  })

  // up
  
  const up = document.querySelector('.up');
  up.addEventListener('click' , () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }
  )
  }); 

}