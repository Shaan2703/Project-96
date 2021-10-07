
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBbta2qPpZgwsiUpGb7_9AaeEdSgGwOqKo",
      authDomain: "kwitter-86f6c.firebaseapp.com",
      databaseURL: "https://kwitter-86f6c-default-rtdb.firebaseio.com",
      projectId: "kwitter-86f6c",
      storageBucket: "kwitter-86f6c.appspot.com",
      messagingSenderId: "1017639377761",
      appId: "1:1017639377761:web:84454dac5698c040c40320"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

  function addRoom() {
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room"
});

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
} 

function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}