module.exports = function (){
  return {
    greet: function(){
        console.log("we are now using a module!");
    },
    add: function(num1, num2) { 
         sum = num1 + num2;
         console.log(sum);
    },
    multiply: function(num1, num2) {
         var product = num1 * num2;
         console.log(product);
    },
    square: function(num) {
         var awnser = num * num;
         console.log(awnser)
    },
    random: function(num1, num2) {
         var range = num1 - num2;
         var ran = (Math.random()*range) + num2;
         console.log(ran)
    }
  }
};
