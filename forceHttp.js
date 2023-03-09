(function() {
    var links = document.getElementsByClassName('ForceHttp');
    for (link of links) {
        link.href = 'https://' + window.location.host + link.getAttribute('href');
    }
})();
