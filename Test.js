<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Test Functions</title>
  <script type="text/javascript">
    function writetext(mytext) {
      document.getElementById('output').innerHTML = mytext;
    }

    function addNumber(a, b) {
      var result = a + b;
      return result;
    }
  </script>
</head>
<body>
  <h1>JavaScript Function Tests</h1>
  
  <div id="output">Results will appear here</div>
  
  <input type="button" value="Write Text after click" onclick="writetext('Hello function')">
  <input type="button" value="Add number" onclick="writetext('Result: ' + addNumber(1,3))">
</body>
</html>
