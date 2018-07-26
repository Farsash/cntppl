var s = data;

var obj = {};
var arr = [];

var canvas = document.getElementById("myCanvas");

CountPeople();


var _newArr = SelectionSort(arr);
arr = _newArr;

console.log(arr);

function SelectionSort(A){                               // отсортировать по возрастанию.
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
    if( s.charAt(i) === '1' && s.charAt(i - 1) === '.'){
      if( s.charAt(i + 1) === '9' ){
        if(+s.charAt(i + 2) && +s.charAt(i + 3)){
              console.log(s.charAt(i - 1));
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



///// DRAW ////////////

var DrawCanvas = {
  step: canvas.getAttribute("width") / arr.length,
  start: canvas.getAttribute("height"),
  maxHeight: function(){
    var m = 0;
    for( var i = 0; i < arr.length; i++){
        if (obj[arr[i]].length > m ){
          m = obj[arr[i]].length;
        }
    }
    
    this.max = m;
    return m;

  },
  drawContent: function(){
    var k = 0;
    for( var i = 0; i < arr.length; i++){
        var count = obj[arr[i]].length * 1.4;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect( k , this.start - count - 50, 10 , count);
      
        var year = canvas.getContext("2d");
        year.font = "8px Arial";
        year.fillText(arr[i], k , 1020 - 10 - 20);
        
        var cnt = canvas.getContext("2d");
        cnt.fillStyle = "#000000";
        cnt.font = "8px Arial";
        cnt.fillText(obj[arr[i]].length, k , this.start - count - 60);
      
      
        k += this.step;
    }
    
  }
}

DrawCanvas.drawContent();
