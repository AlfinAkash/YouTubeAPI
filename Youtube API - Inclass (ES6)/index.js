const API="AIzaSyBN-LGLeT7-Uga-0Nn8YZVhxH94T3sWwR0";

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=moon%20knight&key=[YOUR_API_KEY]



let search = async () =>{
    let q=document.getElementById("query").value;
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${API}`;
    try{
        let there = await fetch(url);
        let find = await there.json();
        document.getElementById("container").innerHTML=null;
        // console.log(find.items);
        append(find.items);
    }
    catch(err){
        console.log(err);
    }
}

// iframe is an html tag for videos
let append = (data) =>{
    let container=document.getElementById("container");
    data.forEach(({id: {videoId}, snippet:{title, description, channelTitle, thumbnails:{default:{url}}}}) =>{
        let dubba=document.createElement("div");
        dubba.setAttribute("id", "dubba");

        let channel = document.createElement("h3");
        channel.innerText=channelTitle;

        let image = document.createElement("img");
        image.src=url;

        let image_dubba=document.createElement("div");
        image_dubba.append(image);
        

        let para=document.createElement("p");
        para.innerText=title;

        let details = document.createElement("div");
        details.append(para, channel);

        dubba.addEventListener("click", function(){
            addToStorage(videoId, title, description, channelTitle);
        })
        // console.log(videoId);
        // console.log(title);
        // console.log(thumbnails);
        dubba.append(image_dubba, details);

        container.append(dubba);
    })
}



function addToStorage(id, title, description, channelname){
    localStorage.removeItem("playData");
    let arr=[];
    arr.push(id, title, description, channelname);
    localStorage.setItem("playData", JSON.stringify(arr));
    window.location.href="play.html";
    // console.log(arr);
}




async function mostPopular(){
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&regionCode=in&key=${API}`;
    try{
        let there = await fetch(url);
        let data = await there.json();
        console.log(data.items);
        append(data.items);
    }
    catch(err){
        console.log(err);
    }
}


mostPopular();
