var http_request = new XMLHttpRequest();
var base_url = 'http://httpbin.org/';

var image_container;
var image_data;
var image_url;
var image_base_64;

var http_status_number;

function log_to_dom(message_to_log) {
        
        console.log(message_to_log);
        
}

function add_data_to_dom() {

    image_container = document.createElement('img');
    image_container.src = image_url;
    
    document.body.appendChild(image_container);

}

function http_status(http_status_number){

    switch(http_status_number){
        
            case 0:
                log_to_dom('unsent');
            break;
            case 1:
                log_to_dom('sent');
            break;
            case 2:
                log_to_dom('connected');
            break;
            case 3:
                log_to_dom('loading');
            break;
            case 4:
                log_to_dom('complete');
            break;
        }

}

function request_state(http_request){
    
        http_request.onreadystatechange = function (event){
        
            log_to_dom(event.target.readyState);
            http_status_number = event.target.readyState;
            http_status(http_status_number);
        } 
        
     
        
}

function async_image_download(){

    http_request.open('GET', image_url);
    
    http_request.responseType = 'arraybuffer';

http_request.onload = function(event){

    image_data = new Blob([this.response], {type:'image/jpeg'});
    image_url = window.URL.createObjectURL(image_data);

}
    
    http_request.send();
    
    request_state(http_request);
    
    add_data_to_dom():

    
}


document.addEventListener('DOMContentLoaded', function (event) {

    input = document.createElement('input');
    input.addEventListener('keyup', function(event){
    
    if(event.keyCode == 13){
    log_to_dom(input.value);
        image_url = input.value;
        async_image_download();
    
    }
    
    });
    
  document.body.appendChild(input);

});