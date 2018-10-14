function BigImages(event){
document.getElementsByTagName("img")[0].src=event.currentTarget.src;
}
	const image=document.querySelectorAll("img");
	for(i=0; i<6; i++){
		image[i].addEventListener("click",BigImages);
	}
		




	