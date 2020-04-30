<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <input type="text" id="speech_result" />
  <button type="button" onclick="startSpeechRecognition();">Start Record</button>
  <button type="button" onclick="endSpeechRecognition();">Stop Record</button>
  <script>
    let recognition = null;

    function checkCompatibility() {
      recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "en";
      recognition.maxAlternatives = 5;

      if (!recognition) {
        alert("You cannot use speech api.");
      }
    }

    function startSpeechRecognition() {
      console.log('Start');

      recognition.addEventListener("speechstart", () => {
        console.log('Speech Start');
      });

      recognition.addEventListener("speechend", () => {
        console.log('Speech End');
      });

      recognition.addEventListener("result", (event) => {
        console.log('Speech Result', event.results);
        const text = event.results[0][0].transcript;
        document.getElementById("speech_result").value = text;
      });

      recognition.start();
    }

    function endSpeechRecognition() {
      recognition.stop();
    }

    window.addEventListener('load', checkCompatibility);
  </script>
</body>

</html>