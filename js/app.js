const loadPhones = async(searchText , dataLimit) =>{
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data , dataLimit)
}

const displayPhones = (phones , dataLimit) =>{
   // console.log(phones)

   const phoneContainer = document.getElementById('phone-container')
   phoneContainer.innerText = ``;

//    display 20 phones only
          const showall = document.getElementById('show-all')

        if(dataLimit && phones.length > 20){

          phones = phones.slice(0,20);

          showall.classList.remove('d-none')

      }

      else{

        showall.classList.add('d-none')
      }

   

   // display no phone found 

   const nophone = document.getElementById('no-found-message')

   if(phones.length === 0){

    nophone.classList.remove('d-none')

   }
   else{
    nophone.classList.add('d-none')
   }

     

   // display all phone 

   phones.forEach(phone => {

    const phoneDiv = document.createElement('div')
    phoneDiv.classList.add('col')
    phoneDiv.innerHTML = `     

    <div class="card p-4">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
    
    `;
    phoneContainer.appendChild(phoneDiv)
    
   });

   // stop spinner loader

   toggleSpinner(false)
}

const processSerach = (dataLimit) =>{
    toggleSpinner(true);
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit)
}


// handle search button click
document.getElementById('btn-serach').addEventListener('click', function(){

    // start loader 
           processSerach(20);
});

const toggleSpinner = isLoading =>{

    const loaderSection = document.getElementById('loader')

    if(isLoading){
        loaderSection.classList.remove('d-none')
    }

    else{
     loaderSection.classList.add('d-none')
        
    }

    
}

document.getElementById('btn-show-all').addEventListener('click', function(){

     processSerach();

});

//loadPhones()