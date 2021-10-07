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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send() {
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0

});
document.getElementById("msg").value="";
  }












function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img src='tick.png'class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4' >"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function updateLike(msg_id) {
console.log("click on like button"+msg_id);
button_id=msg_id;
likes=document.getElementById(msg_id).value;
update_likes=Number(likes)+1;
console.log(update_likes);
firebase.database().ref(room_name).child(msg_id).update({
      like:update_likes
});
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
     }

     function back() {
           window.location="kwitter_room.html";
     }