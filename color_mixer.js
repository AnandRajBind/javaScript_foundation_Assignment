// color Mixer
function colorMixer(color1, color2){


    if(color1 == "red" && color2 == "blue"){
        console.log("purple");
    }
    else if(color1 == "red" && color2 == "yellow"){
    console.log("orange");
    }
    else if(color1 == "blue" && color2 == "yellow"){
        console.log("green");
        }
    
        else{
            console.log("Invalid color");
        }
    }
    
    colorMixer("red", "blue");
    colorMixer("red", "yellow");
    colorMixer("blue", "yellow");
    colorMixer("blue", "red");
    