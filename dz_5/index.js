var elem = document.body.appendChild(
		document.createElement('p')
)
elem.innerText = "Click"
elem.onclick = function(event){
	var pic = document.createElement("img")
	pic.src="https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
	pic.width = "100"
    pic.style.transition = "all 0.5s"
	document.body.appendChild(pic)
    elem.onclick = function(event){
        this.remove()
    }
    pic.onmouseover = function(event){
        this.style.width="200px"
    }
    pic.onmouseout=function(event){
        this.style.width="100px"
    }
}
