function getReview(){
    var request = new XMLHttpRequest();
    var url= 'https://imdb-api.com/en/API/UserRatings/k_6ek9hz83/tt1375666';
    request.open('GET',url,true);
    request.onload=function()
    {
        var result=JSON.parse(this.response);
        console.log(result.ratings[3].rating);
    }
    request.send();
}