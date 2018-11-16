<html>
<head>
<style>
select{
  width:100%;
  background:white;
  padding:5px;
  border-radius:5px;
  color:#444444;
}
input{
  border-radius:5px;
  padding:5px;
}
input[type='text'],input[type='number']{
  width:calc(100% - 12px);
}
table tr td{
  padding:3px;
}
</style>
</head>
<?php
$makers = ["Toyota","BMW","Mercedes"];
$engine = ["gas","diesel","petroleum"];
?>
<form action="task9_2_submit.php">
<table border="1" style="border-collapse: collapse">
<tr>
<td>Maker:</td>
<td><select name="makers" id="makers">
<?php 
foreach($makers as $m){
		 ?><option><?=$m?></option><?php
}
?>
</select></td></tr>
<tr><td>Year:</td>
<td><select name="years" id="years">
<?php 
	for($y=2018;$y>=1999;$y--){
		echo '<option>'.($y).'</option>';}
?>
</select></td></tr>
<tr><td>Model:</td>
<td>
<input type="text" name="model" id="model" value="Corolla">
</td></tr>
<tr><td>Engine</td>
<td>
 <?php 
	foreach($engine as $e){
          ?><label><input type="radio" name="engine" checked="checked" value=<?=$e?> ><?=$e?></label><?php
}
?>
</select></td></tr>
<tr><td>Price</td>
<td>
<input type="text" name="price" value="300000">
</td></tr>
<tr><td>Additional:</td>
<td>
<input type="checkbox" name="tax_payed" checked="checked">tax payed<br>
<input type="checkbox" name="tech_check">technical check passed<br>
<input type="checkbox" name="investment">doesn't require investment<br>
</td></tr>

    <input type="submit"/>
</form>