function readMore(event) {
	var btnText = event.target;
	console.log(btnText);
	var moreText = btnText.previousElementSibling;
	var dots = moreText.previousElementSibling;
	if (moreText.style.display === "none") {
	  dots.style.display = "none";
	  btnText.innerHTML = "read less";
	  moreText.style.display = "inline";
	} else {
	  dots.style.display = "inline";
	  btnText.innerHTML = "read more";
	  moreText.style.display = "none";
	}
  }
