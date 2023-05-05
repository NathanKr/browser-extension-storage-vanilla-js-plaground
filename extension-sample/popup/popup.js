console.log("popup.js is invoked !!");

const KEY = 'key1';

const buttonSetElem = document.querySelector("#idSet");
const buttonGetElem = document.querySelector("#idGet");
const inputElem = document.querySelector("input");

async function saveClickHandle() {
  const value = inputElem.value;
  const result = await chrome.storage.local.set({ key1: value });
  console.log(result);
}

async function getClickHandle() {
    const obj = await chrome.storage.local.get(KEY);
    alert(obj[KEY]);
  }

  
buttonSetElem.addEventListener("click", saveClickHandle);
buttonGetElem.addEventListener("click", getClickHandle);
