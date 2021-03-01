
var date = null;
var appendToSpan = null;
//var tasks = document.querySelector(".textarea");
var button = document.querySelector(".saveBtn");
//var myTasks = document.querySelector("textarea[name='text']").value;
var myTasks = document.getElementById("taskText").value

var savedTasksArray = [];


//time and date logic
var update = function() {
    var date = moment(new Date());
    var appendToSpan = document.querySelector("#my-Date")
 appendToSpan.textContent = date.format("MMM DD, YYYY - hh:mm:ss a");
}

$(document).ready(function() {
dateTime = $("#my-date")
update();
setInterval(update, 1000);
});

;



 var toArray = function() {
     var myTaskData = {
         id: "happy days",
         title: document.getElementById("taskText").value
     }; 
     savedTasksArray.push(myTaskData);
     console.log(myTaskData);
 };





var save = function() {
    toArray();
      var myContent=
    document.getElementById("taskText").value;
    localStorage.setItem("myTaskdata", myContent);
}



button.addEventListener("click",save)











