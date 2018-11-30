<html>
<head>
<link rel="stylesheet" href="style1.css">
</head>
<body>
<a href="task2.php?maker=all">All</a>
<a href="task2.php?maker=t">Toyota</a>
<a href="task2.php?maker=b">BMW</a>
<p></p>

<?php
$host = 'localhost';
$username ='root';
$password = '';
$db = 'webtask1';

$conn = mysqli_connect($host,$username,$password,$db);

$conn_error = mysqli_connect_error();
if ($conn_error != null){
    echo "There is error:<p>  $conn_error </p>";
}

$all="SELECT * FROM `cars`;";
$toyota="SELECT * FROM `cars` WHERE `maker`='Toyota';";
$bmw="SELECT * FROM `cars` WHERE `maker`='BMW';";
if($_GET['maker']=='t'){
    $query=$toyota;
}
elseif($_GET['maker']=='b'){
    $query=$bmw;
}
else{
    $query=$all;
}

$results = mysqli_query($conn, $query);
while ($row = mysqli_fetch_array($results)) {
    echo "<div class='car'>";
    echo "<img src=".$row['url'].">";
    echo "<div class='opis'>";
    echo "<b>".$row['maker']." ".$row['model']."</b>";
    echo "<p>".$row['price']."</p>";
    echo $row['year']." year ";
    echo "</div>";
    echo "</div>";
}
mysqli_close($conn);

?>
</body>
</html>
