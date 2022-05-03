"use strict"

const socket = io();

// 4개의 dom
const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")

// 이벤트 세팅
sendButton.addEventListener("click", ()=>{
  const param = {
    name: nickname.value,
    msg: chatInput.value
  }
  socket.emit("chatting", param);
})

socket.on("chatting", (data) => {
  li.innerText = `${data.name}님이 -  ${data.msg}`;
  chatList.appendChild(li)
})

function LiModel(name, msg, time) {
  this.name = name;
  this.msg - msg;
  this.time - time;

  this.makeLi = ()=>{
    const li = document.createElement("li");
  }
}