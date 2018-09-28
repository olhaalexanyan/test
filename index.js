function Constr(params){
 	var maney=0
 	this.addCash= function(summ){
		maney+=summ
	}
	this.payment=function(summ,pin){
		if(pin!==pinCode) return "Access denied"
		if(sum>money) return "Cash not enought"
		money-=sum
		return sum
	}
var pinCode=params? (params.pin ?params.pin : "0000") : "0000"
this.name=params?(params.name?params.name:"***"):"***"
}
undefined
var sample = new Constr ( {name: "olha", pin: "1111"} )
undefined
sample
Constr {addCash: ƒ, payment: ƒ, name: "olha"}addCash: ƒ (summ)name: "olha"payment: ƒ (summ,pin)__proto__: Object
sample.addCash(300)
undefined
sample.payment(500)
"Access denied"
sample.payment(500,"1111")
VM2336:8 Uncaught ReferenceError: sum is not defined
    at Constr.payment (<anonymous>:8:3)
    at <anonymous>:1:8
Constr.payment @ VM2336:8
(anonymous) @ VM2532:1








function Constr(params){
 	var maney=0
 	this.addCash= function(summ){
		maney+=summ
	}
	this.payment=function(summ,pin){
		if(pin!==pinCode) return "Access denied"
		if(summ>maney) return "Cash not enought"
		maney-=summ
		return summ
	}
var pinCode=params? (params.pin ?params.pin : "0000") : "0000"
this.name=params?(params.name?params.name:"***"):"***"
}
var sample = new Constr ( {name: "olha", pin: "1111"} )


sample

sample.payment(200,"1111")

sample.addCash(1000)

sample.payment(200,"1111")
200




function Constr(params){
 	var maney=0
	function getInfo(){
		return maney
	}
 	this.addCash= function(summ){
		maney+=summ
	}
	this.payment=function(summ,pin){
		if(pin!==pinCode) return "Access denied"
		if(summ>maney) return "Cash not enought:"+ getInfo ()
		maney-=summ
		return summ
	}
var pinCode=params? (params.pin ?params.pin : "0000") : "0000"
this.name=params?(params.name?params.name:"***"):"***"
}

var sample = new Constr ( {name: "olha", pin: "1111"} )

sample.payment(99,"1111")

"Cash not enought:0"
/*спрятать можно только с помошью конструктора , с помощью литерала нельзя*/
