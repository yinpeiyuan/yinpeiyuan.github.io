    
    // $(document).ready(function () {
    //     function reP(){ 
        
    //         $('oImg').style.display = "block"
    //         }  
    // })
    
    function reP(img){ 
    var list =document.getElementsByClassName('changeIcon')
    for(var i = 0, l = list.length; i < l; i++) {
        var objTemp = list[i];
        objTemp.style.display="none";
        }
    document.getElementById(img).style.display = "block";  
    var e = e || event;
    stopFunc(e);
    
    }
    document.onclick = function (e) {
        if(document.getElementById('oImg').style.display == "block"){
            
            document.getElementById('oImg').style.display = "none";
        }
        if(document.getElementById('qImg').style.display == "block"){
            
            document.getElementById('qImg').style.display = "none";
        }
        if(document.getElementById('biliImg').style.display == "block"){
            
            document.getElementById('biliImg').style.display = "none";
        }
    }
    function stopFunc(e) {　　　　　　
             e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;　　　　
         }  
    
        
 