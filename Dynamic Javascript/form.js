var i = 0;
function increment(){
    i += 1;
}
function removeElement(parentDiv,childDiv){
    if(childDiv == parentDiv){
        alert("The parent div cannot be removed");
    }
    else if(document.getElementById(childDiv)){
        var child = document.getElementById(childDiv);
        var parent = document.getElementById(parentDiv);
        parent.removeChild(child);
            }
    else{
        alert("Child div has already been removed or doesnot exist.");
        return false;
    }
}
function nameFunction() {
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Name");
    var g = document.createElement("IMG");
    g.setAttribute("src", "delete.png");
    g.setAttribute("alt","delete");
    g.setAttribute("width","15px");
    g.setAttribute("height","15px");
        increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onClick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);

    }
function emailFunction()    {
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Email");
    var g = document.createElement("IMG");
    g.setAttribute("src", "delete.png");
    g.setAttribute("width","15px");
    g.setAttribute("height","15px");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    r.setAttribute("id", "id_" + i);
    g.setAttribute("onClick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    document.getElementById("myForm").appendChild(r);

}
function contactFunction() {
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "contact");
    var g = document.createElement("IMG");
    g.setAttribute("src", "delete.png");
    g.setAttribute("width","15px");
    g.setAttribute("height","15px");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onClick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);

}
function textareaFunction() {
    var r = document.createElement('span') ;
    var y =document.createElement("TEXTAREA");
        y.setAttribute("placeholder", "message.." );
    var g = document.createElement("IMG");
    g.setAttribute("src", "delete.png");
    g.setAttribute("width","15px");
    g.setAttribute("height","15px");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onClick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);

}
function resetFunction(){
    document.getElementById("myForm").innerHTML="       ";
}


