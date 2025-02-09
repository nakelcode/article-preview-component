const character = document.querySelector(".character");
const removeDiv = document.querySelector("#last-child");
const shareBtn = document.querySelector("#mobile");
const desktopShare = document.querySelector("#desktop-child");
const share = document.querySelector("#desktop");
removeDiv.remove();

function shareActive(){
    character.remove();
    document.querySelector(".main-content").appendChild(removeDiv);
    removeDiv.setAttribute("class", "share-active");
}
shareBtn.addEventListener("click", shareActive);

desktopShare.remove();


function desktop(){
    removeDiv.remove();
    document.querySelector(".main-character").appendChild(desktopShare);
    desktopShare.setAttribute("id", "desktop-share");   
}
share.addEventListener("click", desktop);