let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
var a=document.getElementById("countries");
var b=document.getElementById("cities");

for(let country=0; country<countries.length;country++){
	var optionItem=document.createElement("option");
	optionItem.text=countries[country];
	a.appendChild(optionItem);
}

function changeFn(){
	var Country=document.getElementById("countries").value;
	
	var cntr1="Kazakhstan";
	var cntr2="Russia";
	var cntr3="England";
	var cntr4="France";
	
	var n1=Country.localeCompare(cntr1);
	var n2=Country.localeCompare(cntr2);
	var n3=Country.localeCompare(cntr3);	
	var n4=Country.localeCompare(cntr4);
	
		if(n1==0){
			let i=cities_by_country["Kazakhstan"];
			for(let g=0;g<10;g++){
					b.remove(b.g);}
			for(let city=0; city<i.length;city++){
				var optionItem1=document.createElement("option");
				optionItem1.text=i[city];
				b.appendChild(optionItem1);
				
		}
	
	}
	
		if(n2==0){
			let i=cities_by_country["Russia"];
			for(let g=0;g<10;g++){
					b.remove(b.g);}
			for(let city=0; city<i.length;city++){
				var optionItem=document.createElement("option");
				optionItem.text=i[city];
				b.appendChild(optionItem);
			
		}
	
	}
	
		if(n3==0){
			let i=cities_by_country["England"];
			for(let g=0;g<10;g++){
					b.remove(b.g);}
			for(let city=0; city<i.length;city++){
				var optionItem1=document.createElement("option");
				optionItem1.text=i[city];
				b.appendChild(optionItem1);
			
		}
	
	}
	
		if(n4==0){
			let i=cities_by_country["France"];
			for(let g=0;g<10;g++){
					b.remove(b.g);}
			for(let city=0; city<i.length;city++){
				var optionItem1=document.createElement("option");
				optionItem1.text=i[city];
				b.appendChild(optionItem1);
			
		}
	
	}
}

changeFn();
document.querySelector("select").addEventListener("change",changeFn);




	
	