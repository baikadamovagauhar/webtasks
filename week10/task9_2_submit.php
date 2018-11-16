<?php
	$makers = $_REQUEST["makers"];
	$years = $_REQUEST["years"];
	$model = $_REQUEST["model"];
	$engine = $_REQUEST["engine"];
	$price = $_REQUEST["price"];
	if(empty($tax_pay)){
    $tax_pay = 'no';
} 
	if(empty($tech_ch)){
    $tech_ch = 'no';
} 
	if(empty($invest)){
    $invest = 'no';
} 
echo "You added new item: ";?> <strong><?=$makers." ".$model?></strong><br><?php 
echo "produced in "?><?=$years?><?php echo " ("?><?php echo 2018-intval($years) . "years old) with " . $engine . " engine"?><br><?php
echo "Tax payed: "?> <strong><?=$tax_pay?></strong><br><?php
echo "Technical check passed: "?> <strong><?=$tech_ch?></strong><br><?php
echo "Doesn't require investment: "?> <strong><?=$invest?></strong><br><?php
echo "$ ".$price;
?>