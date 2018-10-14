determinant.addEventListener("click", function(){
	var a=parseInt(document.getElementById(id="s11").value);
	var b=parseInt(document.getElementById(id="s12").value);
	var c=parseInt(document.getElementById(id="s13").value);
	var d=parseInt(document.getElementById(id="s21").value);
	var e=parseInt(document.getElementById(id="s22").value);
	var f=parseInt(document.getElementById(id="s23").value);
	var g=parseInt(document.getElementById(id="s31").value);
	var h=parseInt(document.getElementById(id="s32").value);
	var i=parseInt(document.getElementById(id="s33").value);
	var sum=a*e*i + b*f*g + d*h*c - c*e*g - a*h*f - d*b*i;
	var result = document.getElementById("result").value;
	document.getElementById("result").innerHTML = sum;
	
});

	
	
	