function openTab(evt, cityName) {
    var i, tabcontent, tabLink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" tab_active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " tab_active";
}