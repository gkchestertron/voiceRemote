window.onload = function () {                                               
    voiceRemote = {
        recognition: new webkitSpeechRecognition()
    };
    voiceRemote.recognition.continuous     = true;                               
    voiceRemote.recognition.interimResults = true;                               
    voiceRemote.recognition.onresult = function (event) {                        
        var results    = event.results,                                     
            transcript = event.results[results.length - 1][0].transcript.trim();

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, transcript: transcript);
        });
    }                                                                       
    voiceRemote.recognition.start();                                             
}                                                                           
