var _ = {
   map: function(arr, callback, num) {
     //code here;
     var new_arr = [];
     for (var i = 0; i < arr.length; i++) {
       new_arr.push(arr[i]*num)
     }
     return new_arr
   },
   reduce: function(arr, callback) { 
     // code here;
     var sum
     for (var i = 0; i <= arr.length; i++) {
       sum += arr[i]
     }
     return sum
   },
   find: function(arr, callback) {   
     // code here;
     for (var i = 0; i <= arr.length; i++){
      if(callback(arr[i]) == true){
        return arr[i]
      }
     }
   },
   filter: function(arr, callback) { 
     // code here;
     var new_arr = []
     for (var i = 0; i <= arr.length; i++) {
       if (callback(arr[i]) == true) {
        new_arr.push(arr[i])
       }
     }
     return new_arr
   },
   reject: function() { 
     // code here;
     var new_arr = []
     for (var i = 0; i <= arr.length; i++){
      if (callback(arr[i]) == false) {
        new_arr.push(arr[i])
      }
     }
     return new_arr
   }
 }
// you just created a library with 5 methods!
