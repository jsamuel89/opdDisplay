var divs = $("div[id^='content']").hide();
var i = 0;
cycle();
function cycle() {
    $("#displayArea").html(divs.eq(i).html());
    i = ++i % divs.length; // increment i, and reset to 0 when it equals divs.length
  // alert(divs.length);
}

setInterval(cycle, 30000); //Change DIV every 30 seconds
