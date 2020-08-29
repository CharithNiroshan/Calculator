<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="result.css">
</head>
<?php
	$result = $_POST['display'];
    $result1 = $_POST['display1'];
?>
<body>
	<div class = "main">
		<form name ="cal">
            <input type ='answer' name ='result1' value= "<?php echo $result1; ?>" />
            <br>
            <input type ='text' name ='result' value= "<?php echo $result; ?>" />   
            <input type="text1" name="equal" value = "=">
        </form>
    </div>
</body>
</html>