var http_request = new XMLHttpRequest();

var base_url = 'http://httpbin.org/html';





function log(message){

    console.log(message);
    confirm(message);
    
}

function add_to_dom(){
    window.createDocument(base_url);


}