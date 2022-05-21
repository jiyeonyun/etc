'use strict';

navigator.getUserMedia = navigator.getUserMedia ||
	navigator.webkitGetUserMedia || navigator.mozGetUserMedia; // 아직 최신기술이기 때문에 브라우저 맨앞에 prefixedname이 필요함

    var constraints = {
        audio: false,
        video:  {
            "width": {
                "min": "300",
                "max": "640",
            },
            "height": {
                "min": "200",
                "max": "480",
            }
            -webkit-filter: blur(4px) invert(1) opacity(0.5);
        }
    }; // 어떤 미디어를 허용 할것 인지
    
    var video = document.querySelector('video');
    
    function successCallback(stream) {
        window.stream = stream; // console에서 stream이 가능하게
        if (window.URL) {
            video.src = window.URL.createObjectURL(stream);
        } else {
            video.src = stream;
        }
    }
    
    function errorCallback(error) {
        console.log('navigator.getUserMedia error: ', error);
    }
    
    // navigator.getUserMedia 사용법
    navigator.getUserMedia(constraints, successCallback, errorCallback);