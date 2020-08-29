<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="calculator.css">
</head>
<?php		
if(isset($_POST['add']))
{
  $x=$_POST["display"];	
  $y=$_POST["display1"];				
}
?>
<body>
    <div class="wrapper">
            <div class="screen">
                <span id="previousnumber" ></span>
                <span id="currentnumber"></span>
            </div>
            <form  class="container" name ="cal" method="post" action="result.php">
                <input type="hidden" name="display" id="calculation">
			    <input type="hidden" name="display1" id="answer">
                <div class=button id="C" >C</div>
                <div class=button id="sign">+/-</div>
                <div class=button id=operatorbutton id="precentage" value="%">%</div>
                <div class=button id=operatorbutton id="divide" value="/">/</div>
                <div class=button id="numbutton" id="seven" value="7">7</div>
                <div class=button id="numbutton" id="eight" value="8">8</div>
                <div class=button id="numbutton" id="nine" value="9">9</div>
                <div class=button id=operatorbutton id="multiplie" value="X">x</div>
                <div class=button id="numbutton" id="four" value="4">4</div>
                <div class=button id="numbutton" id="five" value="5">5</div>
                <div class=button id="numbutton" id="six" value="6">6</div>
                <div class=button id=operatorbutton id="substract" value="-">-</div>
                <div class=button id="numbutton" id="one" value="1">1</div>
                <div class=button id="numbutton" id="two" value="2">2</div>
                <div class=button id="numbutton" id="three" value="3">3</div>
                <div class=button id=operatorbutton id="addition" value="+">+</div>
                <div class=button id="numbutton" id="zero" value="0">0</div>
                <div class=button id="dot" value=".">.</div>
                <div class=button id="del" value="del">Del</div>
                <input id="equal" class=button type="submit"  name="add" onclick="output()" value="="/>
            </form>
    </div>
    <script src="calculator.js"></script>
</body>
</html>