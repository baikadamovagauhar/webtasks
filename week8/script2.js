 function process(responses){
      for (var i = 0; i < responses.length; i++) {
         
		 var card = document.createElement('div');
         card.setAttribute("class","card");
         
		 var title = document.createElement('div');
         title.setAttribute("class","title");
         title.innerHTML=(responses[i].maker+" "+responses[i].model)
         card.appendChild(title);
         
		 var price = document.createElement('div');
         price.setAttribute('class','price');
         price.innerHTML=(responses[i].price);
         card.appendChild(price);
         document.getElementById("cards").appendChild(card);
      }
    }
    
    function onSuccess(response){
		if(response.ok){
			return response.json().then(process);
    }
		else{
			err()
			return;
		}
	}
    
  
    
    function onFail(response){
      document.getElementById("loading").style.display="none";
	  const buton=document.querySelectorAll("button");
	  buton[0].textContent="Error";
    }
    
    function LoadData(event){
      document.getElementById('loading').style.display = 'block';
      document.getElementById('load').innerHTML="Loading...";
      setTimeout(function(){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('load').innerHTML="Items are loaded"
        fetch("http://demo4296963.mockable.io/listCars").then(onSuccess,onFail);
      }, 2000);
    }
      
  
const btn=document.querySelectorAll("button");
for (const b of btn){
	b.addEventListener("click",LoadData);
}