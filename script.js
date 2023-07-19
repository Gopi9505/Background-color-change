function changeBG(val){
    console.log(val.innerHTML);
    document.body.style.background = val.innerHTML;
}

function magic(){
    var color = ['Red','Yellow','Brown','Blue','Pink','Green','Orange','Violet','Indigo'];
    var button = document.getElementById("btn");
    var i=0;
    function fun(){
        setTimeout(()=>{
            document.body.style.background = color[i];
            button.style.backgroundColor = color[i];
            button.innerText = color[i];
            i++;
            if(i<=color.length){
                fun();
            }else{
                button.innerText = 'click me';
                button.style.backgroundColor = 'white';
                document.body.style.background = 'darkgray';
            }
        },1000)
    }
    fun();
}
