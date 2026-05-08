"use strict";
// const body = document.querySelector('body');
const thisIs = document.createElement("div");
thisIs.className = "message";
thisIs.innerText = "Promise was resolved!";
const promise1 = new Promise((resolve, reject)=>{
    document.querySelector(".logo").addEventListener("click", ()=>{
        resolve();
    });
});
function isReject() {
    const thisIsBad = document.createElement("div");
    thisIsBad.className = "message error-message";
    thisIsBad.innerText = "Promise was rejected!";
    document.querySelector("body").append(thisIsBad);
}
promise1.then(()=>{
    const div = document.createElement("div");
    div.className = "message";
    div.textContent = "Promise was resolved!";
    document.body.appendChild(div);
}).catch(()=>{
// ерорщина
});
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("Promise was rejected!"));
    }, 3000);
});
promise2.then(()=>{}).catch(isReject);

//# sourceMappingURL=index.f75de5e1.js.map
