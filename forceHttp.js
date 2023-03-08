(function() {
    var links = document.getElementsByClassName('ForceHttp');
    for (link of links) {
        link.href = 'http://' + window.location.host + link.getAttribute('href');
    }
})();
