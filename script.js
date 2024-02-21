var istatus= document.querySelector("h5")

var addFriend=document.querySelector("#add")
var check=0

addFriend.addEventListener("click",function(){
    if(check==0){
    istatus.innerHTML=" Add Friends Successful"
    istatus.style.color="green"
    addFriend.innerHTML="Remove Friend"
    check=1
    }else{
        istatus.innerHTML="Remove Friends Successful"
        istatus.style.color="red"
        addFriend.innerHTML="Add Friend"
        check=0
    }
})