const isAlpha=(c)=>{
    return ((c>='a'&& c<='z') || (c>='A'&& c<='Z')); 
}

const playGame = ()=>{
    document.getElementById("first-name").disabled=true;
    document.getElementById("second-name").disabled=true;
    document.querySelector(".btn").disabled=true;
    const fn = document.getElementById("first-name").value;
    const sn = document.getElementById("second-name").value;
    let firstName="";
    let secondName = "";
    let arr=Array(26).fill(0);
    for(c of fn){
        if(isAlpha(c)){
            let ch = c.toLowerCase()
            firstName+=ch;
            arr[ch.charCodeAt(0)-97]+=1;
        }
    };
    for(c of sn){
        if(isAlpha(c)){
            let ch = c.toLowerCase()
            secondName+=ch;
            arr[ch.charCodeAt(0)-97]-=1;
        }
    };
    let sum = 0;
    for(ele of arr){
        sum+=Math.abs(ele);
    }
    const flamesMap = ['F','L','A','M','E','S'];
    let dummy=sum;
    let idx=0;
    while(flamesMap.length>1){
        let temp=dummy+idx;
        while(temp>flamesMap.length){
            temp-=flamesMap.length;
        }
        temp-=1;
        idx=temp;
        flamesMap.splice(temp,1);
    }
    let res=flamesMap[0];
    let url;
    const data = document.getElementById("contentData");
    if(res==='F'){
        data.innerHTML="FRIENDS 	&#129303;";
        data.style.color="orange"
        url = "/audio/friends.mp3";
    }
    else if(res==='L'){
        data.innerHTML="LOVERS	&#10084; "
        data.style.color="red"
        
        url = "/audio/love.mp3";
    }
    else if(res==='A'){
        data.innerHTML="AFFECTIONATE &#129402;"
        data.style.color="magenta"
        url = "/audio/affectionate.mp3";
    }
    else if(res==='M'){
        data.innerHTML="MARRAIGE &#128146;"
        data.style.color="pink"
        url = "https://github.com/AAKASHMAROJU/flames-game/blob/root/audio/marriage.mp3";
    }
    else if(res==='E'){
        data.innerHTML="ENEMIES &#128520;"
        data.style.color="purple"
        url = "/audio/enemies.mp3";
    }
    else{
        data.innerHTML="SIBLINGS &#129315; "
        data.style.color="blue"
        url = "/audio/siblings.mp3";
    }
    const audio=new Audio(url);
    audio.play();

}
