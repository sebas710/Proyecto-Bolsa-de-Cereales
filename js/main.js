document.getElementById("header").innerHTML=` <nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">

</div>
</nav>
`
if (sessionStorage.getItem("adm")!="1"){
    document.querySelector("#crud").setAttribute('style', 'display:none')
}else{
    document.querySelector("#crud").setAttribute('style', 'display:on')
}