$(".btn-c").click(function () {
    $(".hello").html("THANKS FOR THE MESSAGE!");
});

// dynamic weather stuff

var APIKey = "4461bceb6894c2af3ce32c717fa40ac5";
// var IP = "169.234.109.217";
var queryURL = "http://api.ipstack.com/check?access_key=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    // console.log(response);
    $(".bar-city").html(response.city);
    $(".bar-state").html(response.region_name);
    var IP = (response.ip);
    var d = new Date();
    var time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    $(".bar-time").html(time);
    // $(".time-zone").html(response.time_zone[0]);
    console.log(response);

    

});