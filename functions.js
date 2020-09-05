const data={
    titleSpan:"We're",
    title:" coming soon",
    description:"Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.",
    inputLabel:"Email Address",
    message: "Provide a valid email"
}
loadData();
function loadData () {
    document.getElementById("title").innerHTML="<span>"+data.titleSpan+"</span> "+data.title;
    document.getElementById("input-text").setAttribute("placeholder",data.inputLabel);
    document.getElementById("description").innerHTML=data.description;
    document.getElementById("message").innerHTML=data.message;
}
function validate(id){
    const a= document.getElementById(id).value
}
