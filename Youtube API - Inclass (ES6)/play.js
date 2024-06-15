let data = JSON.parse(localStorage.getItem("playData"));
// console.log(id);


showVideo(data);



function showVideo(data){
    let iframe=document.createElement("iframe");
    iframe.allow="fullscreen";
    iframe.src=`https://www.youtube.com/embed/${data[0]}`;

    let para = document.createElement("p");
    para.innerText=data[1];

    let channel = document.createElement("h3");
    channel.innerText=data[3];

    let describe = document.createElement("p");
    describe.innerText=data[2];

    document.getElementById("player").append(iframe, para, channel, describe);
}