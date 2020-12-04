const findSign = function(x,y,z){
    if(x>0 && y>0 && z>0){
        document.write(alert("Hello"))
    } else if(x>0 && y>0 && z<0) {
        document.write(alert("this is minus,(-)"))
    }
        else if(x>0 && y<0 && z>0){
            document.write(alert("this is minus(-)"))
        } else if (x<0 && y>0 && z>0){
            document.write(alert("this is minus(-)"))
        }

    }

    document.write(findSign(-1,6,3))