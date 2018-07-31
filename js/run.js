var s = data;

var obj = counted;
var arr = arr2;
var canvas = document.getElementById("myCanvas");


/*

CountPeople();
var _newArr = SelectionSort(arr);
arr = _newArr;

console.log(arr);
*/


/*

function SelectionSort(A){ // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { var min = i;
       for (var j = i+1; j < n; j++)
        { if (A[j] < A[min]) min = j; } 
       var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
     }                    
    return A;
}

function CountPeople(){
  for( var i = 0; i < s.length; i++){
    if( (s.charAt(i) === '2' || s.charAt(i) === '1') && s.charAt(i - 1) === '.'){
      if( s.charAt(i + 1) === '9' || s.charAt(i + 1) === '0'){
        if ( s.charAt(i) === '2' && s.charAt(i + 1) === '0') { console.log('sd', s.charAt(i)) }  
        if(+s.charAt(i + 2) && +s.charAt(i + 3)){
              AddCollection(s.charAt(i) + s.charAt(i + 1) + s.charAt(i + 2) + s.charAt(i + 3));
        }        
      }
    }
  }
}



function AddCollection( e ){
  if ( !obj[e] ){
    var s = [];
    obj[e] = s; 
    arr.push(e);
  }
  obj[e].push(e);
}
*/


///// DRAW ////////////

var pap = 0;

var DrawCanvas = {
  step: canvas.getAttribute("width") / arr2.length,
  start: canvas.getAttribute("height"),
  drawContent: function(){
    var k = 0;
      
    for( var i = 0; i < arr2.length; i++){
       
        var count = counted[arr2[i]];
        console.log("counted[arr2[i]]", counted[arr2[i]]);
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect( k , this.start - count - 50, 20 , count);
   
        var year = canvas.getContext("2d");
        year.font = "8px Arial";
        year.fillText(arr2[i], k , 1020 - 10 - 20);
        
        var cnt = canvas.getContext("2d");
        cnt.fillStyle = "#000000";
        cnt.font = "8px Arial";
        cnt.fillText(counted[arr2[i]], k , this.start - count - 60);
  
        pap += counted[arr2[i]];
        k += this.step;
    }
    
  }
}

DrawCanvas.drawContent();

console.log('pap', pap);
