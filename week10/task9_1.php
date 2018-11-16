<?php
$usernames = ["billgates","johndoe","stevejobs"];
$Name=filter_input(INPUT_POST,'Name');
$Password=filter_input(INPUT_POST,'Password');
$ConfPassw=filter_input(INPUT_POST,'ConfPassw');
if(in_array($Name,$usernames)){
	echo "<div class='error'>";
	echo "This username " .$Name . "is already reserved!!!";
	echo "</div>" ;
	echo "<br>";
}
if($Name==""){
	echo "<div class='error'>"; 
	echo "Username shouldn't be empty!!!";
	echo "</div>" ;
	echo "<br>";
}
if($Password!=$ConfPassw){
	echo "<div class='error'>"; 
	echo "Password and Confirm password does not equal to each other";
	echo "</div>";
	echo "<br>";
}
if($Password=="" && $ConfPassw ==""){
	print "<div class='error'>"; 
	print "Password and Confirm password shouldn't be empty!!!";
	print "</div>";
	print "<br>";
}
?>

<html>
<head><style>
.error{
	border:1px solid red;
	font-weight:bold;
	padding:5px;
	width:400px;
	margin:4px;
}
</style></head>
<body>
<form action="task9_1.php" method="post">

<label>Username:</label>
<input type="text" name = "Name"><br>
<label>Password:</label>
<input type="password" name = "Password"><br>
<label>Confirm Password:</label>
<input type="password" name = "ConfPassw"><br>

<input type="submit"/>
</form>
</body>
</html>