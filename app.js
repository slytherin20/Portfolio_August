const endMarker = document.querySelector('.end-marker');
const myName = document.querySelector('.name');
const myJob = document.querySelector('.job');

function changeTitle(){
    if(!myJob.classList.contains('visible')){
        myName.classList.toggle('visible');
    }
    if(!myName.classList.contains('visible')){
        myJob.classList.toggle('visible');
        
    }
}
window.setInterval(changeTitle,1000);


// Marker toggle 
function toggleMarker(){
    endMarker.classList.toggle('hidden-marker');

}
window.setInterval(toggleMarker,700);


