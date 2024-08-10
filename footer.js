const foo=document.querySelector('.footer')
fetch('footer.html')
.then(res=>res.text())
.then(data=>{
    foo.innerHTML=data
})