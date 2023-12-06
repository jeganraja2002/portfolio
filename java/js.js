
	const loading = document.querySelector(".loader-bg")

	window.addEventListener("load",()=>{
		loading.classList.add("loader-anime")
	})

				var menu=document.getElementById("dropmenu")
				var button1=document.getElementById("button1")
				var button2=document.getElementById("button2")
				var fade=document.getElementById("fade")
				let count=0
				fade.classList.remove("body_after")
				button2.classList.remove("d-lg-none")

		fade.addEventListener("click",()=>{
			menu.classList.remove("d-sms-block","d-mdm-block")
			menu.classList.add("d-sms-none","d-mdm-none")
			fade.classList.remove("body_after")
			button2.classList.remove("d-lg-none")
			button1.classList.add("d-lg-none")
		})

		anchor.addEventListener("click",()=>{
			menu.classList.remove("d-sms-block","d-mdm-block")
			menu.classList.add("d-sms-none","d-mdm-none")
			fade.classList.remove("body_after")
			button2.classList.remove("d-lg-none")
			button1.classList.add("d-lg-none")	
		})

	
		anchor1.addEventListener("click",()=>{
			menu.classList.remove("d-sms-block","d-mdm-block")
			menu.classList.add("d-sms-none","d-mdm-none")
			fade.classList.remove("body_after")
			button2.classList.remove("d-lg-none")
			button1.classList.add("d-lg-none")	
		})
	
		anchor2.addEventListener("click",()=>{
			menu.classList.remove("d-sms-block","d-mdm-block")
			menu.classList.add("d-sms-none","d-mdm-none")
			fade.classList.remove("body_after")
			button2.classList.remove("d-lg-none")
			button1.classList.add("d-lg-none")	
		})
	
		anchor3.addEventListener("click",()=>{
			menu.classList.remove("d-sms-block","d-mdm-block")
			menu.classList.add("d-sms-none","d-mdm-none")
			fade.classList.remove("body_after")
			button2.classList.remove("d-lg-none")
			button1.classList.add("d-lg-none")	
		})


		anchor4.addEventListener("click",()=>{
			menu.classList.remove("d-sms-block","d-mdm-block")
			menu.classList.add("d-sms-none","d-mdm-none")
			fade.classList.remove("body_after")
			button2.classList.remove("d-lg-none")
			button1.classList.add("d-lg-none")	
		})

		function drop() {
			
				menu.classList.remove("d-sms-none","d-mdm-none")
				menu.classList.remove("d-sm-none","d-md-none")
				menu.classList.add("d-sms-block","d-mdm-block")		
				button2.classList.add("d-lg-none")
				button1.classList.remove("d-lg-none")
				fade.classList.add("body_after")
				
		}


		function minin() {
	
				button1.classList.add("d-lg-none")
				button2.classList.remove("d-lg-none")
				menu.classList.remove("d-sms-block","d-mdm-block")
				menu.classList.add("d-sms-none","d-mdm-none")
				fade.classList.remove("body_after")				
		}


	//...................... dark and light........................

				var body=document.getElementById("body")
		
				
				var body_light=document.getElementById("body")

				var light=document.getElementById("light");
				var dark=document.getElementById("dark")
							
				light.classList.remove("d-lg-none")
				dark.classList.remove("d-lg-none")


				const line = document.querySelector(".in-card-html")
				const line_css = document.querySelector(".in-card-css")
				const line_js = document.querySelector(".in-card-js")
				const line_bs = document.querySelector(".in-card-bs")
				const line_react = document.querySelector(".in-card-react")

		function darklight() {
				
				count++
				line.innerHTML=""
				line_css.innerHTML=""
				line_js.innerHTML=""
				line_bs.innerHTML=""
				line_react.innerHTML=""
				Skill()

				body_light.classList.remove("body")

				colors.classList.add("borders")
				colors1.classList.add("borders")
				colors3.classList.add("borders")
				colors4.classList.add("borders")
				colors5.classList.add("borders")
				colors6.classList.add("borders")
				colors8.classList.add("borders")
				colors9.classList.add("borders")
				colors14.classList.add("borders")
				colors15.classList.add("borders")
				colors16.classList.add("borders")
				colors17.classList.add("borders")
				colors18.classList.add("borders")
				colors23.classList.add("borders")
				colors25.classList.add("borders")
				colors27.classList.add("borders")
				colors29.classList.add("borders")
				colors19.classList.add("project-watch1")
				colors20.classList.add("project-watch1")
				colors21.classList.add("project-watch1")
				colors22.classList.add("project-watch1")
				colors24.classList.add("project-watch1")
				colors26.classList.add("project-watch1")
				colors28.classList.add("project-watch1")
				colors30.classList.add("project-watch1")


				// img...........

				imgchange.src="img/b.gif"
				

						// anchor.....

				anchor.classList.add("a1")
				anchor1.classList.add("a1")
				anchor2.classList.add("a1")
				anchor3.classList.add("a1")
				anchor4.classList.add("a1")
				anchor5.classList.add("cv1")

				animation.classList.add("animation_iconr")
				animation1.classList.add("animation_iconr")


				// cursor......

				cursor.classList.add("cursordark")
				cursor2.classList.add("cursor2dark")


				colors.classList.remove("border")
				colors1.classList.remove("border")
				colors3.classList.remove("border")
				colors4.classList.remove("border")
				colors5.classList.remove("border")
				colors6.classList.remove("border")
				colors8.classList.remove("border")
				colors9.classList.remove("border")



				colors14.classList.remove("border")

				colors15.classList.remove("border")
				colors16.classList.remove("border")
				colors17.classList.remove("border")
				colors18.classList.remove("border")
				colors23.classList.remove("border")
				colors25.classList.remove("border")
				colors27.classList.remove("border")
				colors29.classList.remove("border")



				colors19.classList.remove("project-watch")
				colors20.classList.remove("project-watch")
				colors21.classList.remove("project-watch")
				colors22.classList.remove("project-watch")
				colors24.classList.remove("project-watch")
				colors26.classList.remove("project-watch")
				colors28.classList.remove("project-watch")
				colors30.classList.remove("project-watch")


					//anchor...


				anchor.classList.remove("a")
				anchor1.classList.remove("a")
				anchor2.classList.remove("a")
				anchor3.classList.remove("a")
				anchor4.classList.remove("a")
				anchor5.classList.remove("cv")
				


				animation.classList.remove("animation_icon")
				animation1.classList.remove("animation_icon")


					// cursor......

				cursor.classList.remove("cursor")
				cursor2.classList.remove("cursor2")


							// input color....

				light.classList.add("d-lg-none")
				dark.classList.remove("d-lg-none")
		

		}

		function darklight1() {
				count=0

				line.innerHTML=""
				line_css.innerHTML=""
				line_js.innerHTML=""
				line_bs.innerHTML=""
				line_react.innerHTML=""
				Skill()
				
				body_light.classList.add("body")

				colors.classList.remove("borders")
				colors1.classList.remove("borders")
				colors3.classList.remove("borders")
				colors4.classList.remove("borders")
				colors5.classList.remove("borders")
				colors6.classList.remove("borders")
				colors8.classList.remove("borders")
				colors9.classList.remove("borders")
				colors14.classList.remove("borders")

				colors15.classList.remove("borders")
				colors16.classList.remove("borders")
				colors17.classList.remove("borders")
				colors18.classList.remove("borders")
				colors23.classList.remove("borders")
				colors25.classList.remove("borders")
				colors27.classList.remove("borders")
				colors29.classList.remove("borders")
				
				colors19.classList.remove("project-watch1")
				colors20.classList.remove("project-watch1")
				colors21.classList.remove("project-watch1")
				colors22.classList.remove("project-watch1")
				colors24.classList.remove("project-watch1")
				colors26.classList.remove("project-watch1")
				colors28.classList.remove("project-watch1")
				colors30.classList.remove("project-watch1")

				// img..........

				imgchange.src="img/a.gif"


						// anchor.....

				anchor.classList.remove("a1")
				anchor1.classList.remove("a1")
				anchor2.classList.remove("a1")
				anchor3.classList.remove("a1")
				anchor4.classList.remove("a1")
				anchor5.classList.remove("cv1")

				animation.classList.remove("animation_iconr")
				animation1.classList.remove("animation_iconr")

					// cursor....

				cursor.classList.remove("cursordark")
				cursor2.classList.remove("cursor2dark")


				
				colors.classList.add("border")
				colors1.classList.add("border")
				colors3.classList.add("border")
				colors4.classList.add("border")
				colors5.classList.add("border")
				colors6.classList.add("border")
				colors8.classList.add("border")
				colors9.classList.add("border")
				colors14.classList.add("border")
				colors15.classList.add("border")
				colors16.classList.add("border")
				colors17.classList.add("border")
				colors18.classList.add("border")
				colors23.classList.add("border")
				colors25.classList.add("border")
				colors27.classList.add("border")
				colors29.classList.add("border")

				colors19.classList.add("project-watch")
				colors20.classList.add("project-watch")
				colors21.classList.add("project-watch")
				colors22.classList.add("project-watch")
				colors24.classList.add("project-watch")
				colors26.classList.add("project-watch")
				colors28.classList.add("project-watch")
				colors30.classList.add("project-watch")


						// anchor.....

				anchor.classList.add("a")
				anchor1.classList.add("a")
				anchor2.classList.add("a")
				anchor3.classList.add("a")
				anchor4.classList.add("a")
				anchor5.classList.add("cv")


				animation.classList.add("animation_icon")
				animation1.classList.add("animation_icon")


					// cursor......
				
				cursor.classList.add("cursor")
				cursor2.classList.add("cursor2")

						// input color...

				light.classList.remove("d-lg-none")
				dark.classList.add("d-lg-none")
		}


		// .........................my skill........................................



function Skill() {
	
	line.innerHTML=`<div><h3>HTML</h3><h3>50 %</h3></div>`
	line_css.innerHTML=`<div><h3>CSS</h3><h3>70 %</h3></div>`
	line_js.innerHTML=`<div><h3>JS</h3><h3>65 %</h3></div>`
	line_bs.innerHTML=`<div><h3>Bootstrap</h3><h3>70 %</h3></div>`
	line_react.innerHTML=`<div><h3>React Js</h3><h3>60 %</h3></div>`

		let a = 0
		let stop = setInterval(()=>{
			a++
			line.innerHTML+=`<div class="line transform-sm-origin transform-md-origin ${count==0?"borders":"border"} " style="transform:rotate(${3.6*a}deg)"></div>`
			if(a===100) clearInterval(stop)
		})

		let b = 0
		let stop_css = setInterval(()=>{
			b++
			line_css.innerHTML+=`<div class="line-css transform-sm-origin transform-md-origin ${count==0?"borders":"border"}" style="transform:rotate(${3.6*b}deg)"></div>`
			if(b===100) clearInterval(stop_css)
		})

		let c = 0
		let stop_js = setInterval(()=>{
			c++
			line_js.innerHTML+=`<div class="line-js transform-sm-origin transform-md-origin  ${count==0?"borders":"border"} " style="transform:rotate(${3.6*c}deg)"></div>`
			if(c===100) clearInterval(stop_js)
		})

		let d = 0
		let stop_bs = setInterval(()=>{
			d++
			line_bs.innerHTML+=`<div class="line-bs transform-sm-origin transform-md-origin ${count==0?"borders":"border"} "style="transform:rotate(${3.6*d}deg)"></div>`
			if(d===100) clearInterval(stop_bs)
		})

	let e = 0
	let stop_react = setInterval(()=>{
		e++
		line_react.innerHTML+=`<div class="line-react transform-sm-origin transform-md-origin ${count==0?"borders":"border"} " style="transform:rotate(${3.6*e}deg)"></div>`
		if(e===100) clearInterval(stop_react)
	})

}

Skill()


		// ..........................cursor......................

		var cursor=document.querySelector("#cursor")
		var cursor2=document.querySelector("#cursor2")


    document.addEventListener("mousemove",function(e){
		
		      cursor.style.left= e.clientX + "px"
		      cursor.style.top= e.clientY + "px"
		      cursor2.style.left= e.clientX + "px"
		      cursor2.style.top= e.clientY + "px"
	})


    		var apend=document.getElementById("home-bg")

    function lines() {
		 	
		 	let widthAnimation = document.querySelector("#AnimationWidth")
		 	let jegan = widthAnimation.offsetWidth

    		if (count==0) {
	    		var e=document.createElement("div")
	    			e.setAttribute("class","circle")
	    			apend.appendChild(e)
    		}

    		else if( count==1){
    				var e=document.createElement("div")
	    			e.setAttribute("class","circles")
	    			apend.appendChild(e)
    		}

    		var width=Math.random()*12
    		var left=Math.random()*jegan
    		var dur=Math.random()*3

    			e.style.width=2+width+"px"
    			e.style.left=left+ "px"
    			e.style.animationDuration=2+dur+"s"
		
		    setTimeout(function () {
				apend.removeChild(e)  

		    },5000)

	}
		    setInterval(function () {
		    	lines()
		    },200)



		 		var arrow=document.getElementById("ups")

	window.addEventListener("scroll",()=>{

		 		let scroll=window.pageYOffset
		 		
		 		if (scroll>150) {
		 			arrow.classList.remove("up")
		 			arrow.classList.add("up1")
		 		} 
		 		else {
		 			arrow.classList.add("up")
		 			arrow.classList.remove("up1")	
		 		}

	})

