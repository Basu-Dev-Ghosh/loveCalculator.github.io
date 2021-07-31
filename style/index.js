
let arr=["video/video1.mp4","video/video2.mp4","video/video3.mp4","video/video4.mp4","video/video5.mp4","video/video6.mp4","video/video7.mp4","video/video8.mp4","video/video9.mp4","video/video10.mp4"];
function videoPlayer()
{
    var a=document.getElementById("basu");
     a.value="0 %";
     setTimeout(()=>{
          let cont=document.getElementById("content");
          let fu=document.getElementById("fun");
          cont.style.display="none";
          fu.style.display="flex";
          let index=Math.floor(Math.random()*10);
          let v=document.getElementById("vid");
          v.src=arr[index];
     },2000)
}
