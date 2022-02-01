		var colors=["rgb(231, 16, 130)","rgb(17, 251, 110)","rgb(35, 124, 248)","rgb(95, 125, 203)","rgb(20, 140, 48)","rgb(249, 85, 127)"];
		var squares=document.querySelectorAll(".square");
		var pickedColor;//=colors[2];
		var colorDisplay=document.getElementById('colorDisplay');
		var h1=document.querySelector("h1");
		var message=document.querySelector("#message");
		var body=document.querySelector("body");
		var reset=document.querySelector("#reset");


		function recorreSquare(){
			for(var i=0; i < squares.length; i++){
				squares[i].style.backgroundColor=colors[i];
			}
		}
		recorreSquare();

		function displayColor(){
			colorDisplay.textContent=pickedColor;
			//h1.style.backgroundColor=pickedColor;
		}
		displayColor();

		
		for(var i =0; i<squares.length; i++){
			squares[i].addEventListener("click", function(){
				let clickedColor=this.style.backgroundColor;
					if (clickedColor==pickedColor){
						//this.style.backgroundColor=clickedColor;
						h1.style.backgroundColor=clickedColor;
						message.textContent="Correcto!!";
						changeColors(clickedColor);
						reset.textContent="¿jugar de nuevo?"
					}else{
						this.style.backgroundColor=body.style.backgroundColor; //#232323;
						message.textContent="intentalo nuevamente";
					}
			});
		}
		function changeColors(color){
			for(var i =0; i<squares.length; i++){
				squares[i].style.backgroundColor=color;
			}
		}
		
		function randomColor(){
			let r=Math.floor(Math.random()*256);
			let g=Math.floor(Math.random()*256);
			let b=Math.floor(Math.random()*256);
			return "rgb("+r+", "+g+", "+b+")";	
		}

		function generateRandomColors(numero){
			for(var i=0; i<numero; i++){
				colors[i]=randomColor();	
			}
			for(var i=0; i<squares.length; i++){
				squares[i].style.backgroundColor=colors[i];
			}
		}
		generateRandomColors(6);

		function pickColor(random){
    		pickedColor=colors[random] //toma el color en la posicion y la coloca en h1
        	colorDisplay.textContent=pickedColor;
      	}
      	pickColor(Math.floor(Math.random()*6))
	

		hard.addEventListener("click", function(){
			hard.classList.add("selected");
			easy.classList.remove("selected");
			generateRandomColors(6);
			pickColor(Math.floor(Math.random()*6));
			squares[3].style.display="block";
			squares[4].style.display="block";
			squares[5].style.display="block";

		})
		easy.addEventListener("click", function(){
			generateRandomColors(3);
			pickColor(Math.floor(Math.random()*3));
			easy.classList.add("selected");
			hard.classList.remove("selected");
			squares[3].style.display="none";
			squares[4].style.display="none";
			squares[5].style.display="none";
		})
		
		reset.addEventListener("click", function(){
    	h1.style.backgroundColor="#C0392B";
    	reset.textContent="Nuevos Colores"
    	message.textContent="";
   			if(hard==6){
    		generateRandomColors();
    		pickColor(Math.floor(Math.random()*6));
    		}else{
       		generateRandomColors(3);
    		pickColor(Math.floor(Math.random()*3));
   			}
    
		})