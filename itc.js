
    // farenheit to celcius
function temperatureConvert1(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsiusResult").innerHTML = (valNum-32) / 1.8;
  }
  
  // celcius to farenheit
  function temperatureConverter1(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheitResult").innerHTML=(valNum*1.8)+32;
  }
  
  // feet to meters
  function LengthConvert1(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputMetersResult").innerHTML=valNum/3.2808;
  }
  
  //meters to feet
  function LengthConverter1(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFeetResult").innerHTML=valNum*3.2808;
  }
  
  //Income Tax Calculator
  
  const number = document.getElementById("taxable")
    const result = document.getElementById("text-result")

    function compute(){
      const x = number.value
      let excess, rate, fixed 

      if(x <= 250000){
        excess = 0
        rate = 0
        fixed = 0
      }else if (x <= 400000){
        excess = 250000
        rate = 0.20
        fixed = 0
      }else if(x <= 800000){
        excess = 400000
        rate = 0.25
        fixed = 30000 
      }else if(x <= 2000000){
        excess = 800000
        rate = 0.30
        fixed = 130000
      }else if(x <= 8000000){
        excess = 2000000
        rate = 0.32
        fixed = 490000
      } else{
        excess = 8000000
        rate = 0.35
        fixed = 2410000
      }
      const incomeTax = (x - excess)*rate + fixed
      result.innerHTML = 'The income tax is '+ incomeTax
    }

  // nth factorial
  function factorial()
  {
  var n = document.getElementById("num").value;
  var i=1, f=1; 
  while(n>=i){
    f *= i;
    i++
  }
  document.getElementById("fact").innerHTML = f;
  }
  function sumMo()
  {
  var n = document.getElementById("num1").value;
  var i=1, f=0;
  do{
    f += i;
    i++
  }while(n >= i)
  document.getElementById("sum").innerHTML = f;
  }
  function AverageN()
  {
    var x = document.getElementById("num2").value;
      let nth = 0;

      for(let i = 1; i < x; i++){
        nth += i;
      }
      let sum2 = nth/x
      document.getElementById("sum2").innerHTML = sum2;
  }

  //payroll
  function initcart(){
                    cart=[];
                    document.getElementById("items").value=cart.length;
                    document.getElementById("cart").innerHTML="";        
                }
                function clearcart(){
                    var toclear;
            
                    toclear=confirm("Delete all item(s) from cart ?");
            
                    if (toclear) {
                         initcart();
                    }
                        
                }
                function addtocart(){
                     
                     var cartitem = {
                         "item": "1",
                         "price": 0,
                         "qty": 1,
                         "amount": 0,
                        "itemamount" : function itemamount(){
                             return Math.round(this.price*this.qty*100)/100;  
                           },
                           "netpay" : function netpay(){
                             return Math.round(this.price*this.qty*100)/100-this.amount;  
                           }
                    
                        };
                        
                      cartitem.item=document.getElementById("itemdesc").value; 
                      cartitem.qty=document.getElementById("qty").value;
                      cartitem.price=document.getElementById("price").value;
                      cartitem.amount=document.getElementById("amount").value;
                     
            
                      console.log(cartitem.item);
                      console.log(cartitem.qty);
                      console.log(cartitem.price);
                      console.log(cartitem.amount);
                     
                
            
                       cart.push(cartitem);
            
                      console.log(cart.length);
                      document.getElementById("items").value=cart.length;
            
                      showcart();
            
                }
                
                

                function deleteitem(){
                    var todelete;
                    var itemno;
            
                    itemno=document.getElementById("delitem").value;
            
                    todelete=confirm("Delete item no. "+itemno+"?");
            
                    if (todelete) {
            
                         cart.splice(itemno-1,1);
                         document.getElementById("items").value=cart.length;
                         showcart();   
                    }
            
                }
            
                function showcart(){
            
                    var i,l,carttext,totalamount,ln;
                    var theader,tbody,tb,tfooter;
            
                

                    theader ="<thead>";
                    theader+="<tr>";
                    theader+="<th>No.</th>";
                    theader+='<th style="text-align:left" >Employee Name</th>';
                    theader+="<th>Days Worked</th>";
                    theader+='<th style="text-align:right">Daily Rate</th>';
                    theader+="<th>Gross Pay</th>";
                    theader+="<th>Deduction Amount</th>";
                    theader+="<th>Net Pay</th>";
                    theader+="</tr>";
                    theader+="</thead>";
                    

                    l = cart.length;
                  
                    

                    for (i=0,totalamount=0,carttext="",tbody='';i<l;i++){
                        ln=i+1;
                        tbody += "<tr>"
                            +'<td>'+ln+' </td>'
                            +'<td>'+cart[i].item+' </td>'
                            +'<td style="text-align:right">'+cart[i].qty+'</td>'
                            +'<td style="text-align:right">'+cart[i].price+'</td>'
                            +'<td style="text-align:right">'+cart[i].itemamount()+'</td>'  
                            +'<td style="text-align:right">'+cart[i].amount+'</td>'  
                            +'<td style="text-align:right">'+cart[i].netpay()+'</td>' 		
                            +"</tr>";
                        
            
                    }
            
                    tfooter ="<tfoot>";
                    tfooter+="<tr>";
                     tfooter+='<th></th>';
                    tfooter+='<th style="text-align:left"></th>';
                    tfooter+='<th></th>';
                    tfooter+='<th></th>';
                    tfooter+='<th></th>';
                    tfooter+='<th></th>';
                    tfooter+='<th></th>';
                    tfooter+="</tr>";
                    tfooter+="</tfoot>";
            
                   console.log(theader+tbody+tfooter);
                    document.getElementById("cart").innerHTML=
                       '<table>'+theader+tbody+tfooter+'</table>';
            
            
                }

            var cart = [];
