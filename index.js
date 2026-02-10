<!DOCTYPE html>
<html>
<head>
    <title>Simple JS</title>
</head>
<body>

    <h2 id="text">Hello</h2>
    <button onclick="changeText()">Click Me</button>

    <script>
        function changeText() {
            document.getElementById("text").innerHTML = "Hello JavaScript!";
        }
    </script>

</body>
</html>