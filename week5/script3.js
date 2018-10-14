addStudent.addEventListener("click",function(){
	var Table=document.getElementById("students");
	var tr=document.createElement("tr");
	var td0=document.createElement("td");
	var td1=document.createElement("td");
	var td2=document.createElement("td");
	var name=document.getElementById("name").value;
	var surname=document.getElementById("surname").value;
	var inputName=document.createTextNode(name);
	var inputSurname=document.createTextNode(surname);

	var str1="";
	var n=name.localeCompare(str1);
	var s=surname.localeCompare(str1);
	
	if(n==0){
		document.getElementById("name").style.border="5px solid red";
	}
	else if(n!=0 && s!=0){
		td0.appendChild(inputName);
		tr.appendChild(td0);
		Table.appendChild(tr);
	}
	
	if(s==0){
		document.getElementById("surname").style.border="5px solid red";
	}
	else if(s!=0 && n!=0){
		td1.appendChild(inputSurname);
		tr.appendChild(td1);
		Table.appendChild(tr);
	}
	var fac = document.getElementById('faculty');
	var faculty1 = fac.options[fac.selectedIndex].text;
	var facstr = document.createTextNode(faculty1);
		
		
	
		if(s!=0 && n!=0) {
			td2.appendChild(facstr);
			tr.appendChild(td2);
			Table.appendChild(tr);
	}
	
});