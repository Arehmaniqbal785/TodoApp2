var firebaseConfig = {
  apiKey: "AIzaSyC2aJzBZMdiAIn5Y3KYDEOfia7pP2aza3M",
  authDomain: "datland-technologies.firebaseapp.com",
  databaseURL: "https://datland-technologies-default-rtdb.firebaseio.com",
  projectId: "datland-technologies",
  storageBucket: "datland-technologies.appspot.com",
  messagingSenderId: "1034103330185",
  appId: "1:1034103330185:web:ddae3a27ca22a63e2f7d58"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);






var list = document.getElementById("list")



function addTodo() {

    var todo_item = document.getElementById("inputbx");

    var input =document.getElementById("inputbx");

    var userobj ={

        inputbx:input.value,


    }

    firebase.database().ref("YAMAN/Users/").set(userobj)



    // if(todo_item.value === "yaman"){
    //     alert("first enter a value")
    // }else{
    //create li tag with text node
    var li = document.createElement('li')
  
    if (todo_item.value === ""){
        alert("add some text first")
    }else{
        var litext = document.createTextNode(todo_item.value)
        li.appendChild(litext)
        // console.log(litext,"ssssssssss")
    //create delete button
    var delbtn = document.createElement("button")
    var dletetex = document.createTextNode("DELETE")
    delbtn.setAttribute("class", "btn1")
    delbtn.setAttribute("onclick", "deletItem(this)")

    delbtn.appendChild(dletetex)
    list.appendChild(li)
    li.appendChild(delbtn)

    var edtbtn = document.createElement("button")
    var ediettex = document.createTextNode("ediet")
    edtbtn.setAttribute("class", "btn2")
    edtbtn.setAttribute("onclick", "editItem(this)")

    edtbtn.appendChild(ediettex)
    list.appendChild(li)
    li.appendChild(edtbtn)
    todo_item.value = ""
}
}   

function deletItem(e) {
    console.log(e)

    e.parentNode.remove()
}

function editItem(e) {
    
var input = prompt("Enter upgrated value") 
    e.parentNode.firstChild.nodeValue = input  
}

function dleatall() {
    list.innerHTML = ""
}