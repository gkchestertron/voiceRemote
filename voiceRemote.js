window.onload = function () {                                               
    function(request, sender, sendResponse) {
        var transcript = request.transcript,
            link       = $('button, a').filter(function () {
                return $(this).text().toLowerCase().match(transcript);
            });

        if (transcript === 'back') history.back();
        if (this.transcript !== transcript) link[0].click();
        this.transcript = transcript;
        console.log(transcript);
    }                                                                       
    voiceRemote.recognition.start();                                             
}                                                                           
