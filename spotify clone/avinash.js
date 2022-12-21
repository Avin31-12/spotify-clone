
console.log('i am avin@niva');
let songIndex=0;
//intialise the variable
// let audioElement= new Audio('Meet Arijit Singh.mp3')
let audioElement= new Audio('songs/1.mp3');

let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gift=document.getElementById('gift');
let nibha=document.getElementById('nibha');
let songItem=Array.from(document.getElementsByClassName('songItem'));


let songs=
[
    {songname:"Mungrda gali nhi to main ye",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songname:"Naine Na jodi wasta khudha da",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songname:"Naina da kya Kasoorye",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songname:"Tuhi Meri Meet Hai",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songname:"Eribole le nalage bhal",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songname:"Sajan Bari Sanki bajawe Ghanti",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songname:"Dil ye Hawa me Urne lage",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songname:"Ee khari Mat ",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songname:"Jag Ghumaya thare jaisa na koi  ",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songname:"Tera Jaisa Mujhko Banade ",filePath:"songs/0.mp3",coverPath:"covers/2.jpg"},
]

songItem.forEach((element,i) => {
    // console.log(element,i)      
    element.getElementsByTagName("img")[0].src=songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;   



});
// audioElement. play();

masterplay.addEventListener('click',()=>{
    if (audioElement.paused|| audioElement.currentTime<=0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
    gift.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
    gift.style.opacity=1;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seeker
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})


myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('sonitemplay')).forEach((element)=>{
     element.classList .remove('fa-circle-pause');
     element.classList.add('fa-circle-play');

})
}
 Array.from(document.getElementsByClassName('sonitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeallplays();
    nibha.innerText=songs[songIndex].songname;

        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gift.style.opacity=1;
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');

    })
})



document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
    songIndex=0;
    }
    else{
   songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    nibha.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    element.classList.remove('fa-circle-play');
    element.classList.add('fa-circle-pause');

})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
    songIndex=0;
    }
    else{
   songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    nibha.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    element.classList.remove('fa-circle-play');
    element.classList.add('fa-circle-pause');

})
