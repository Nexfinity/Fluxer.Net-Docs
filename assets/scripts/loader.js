var inject = `
<div class="header" id="header">
<div class="site-title">Squll.Net Tutorial</div>
<a class="header-button" id="about-header" href="/">About</a>
<div class="header-button" id="copyright-header">Copyright</div>
<a class="header-button" id="contact-header" href="/contact.html">Contact</a>
<div class="header-button" id="oss-header">Open Source</div>
</div>
<div class="content">
<div class="left-sidebar" id="tutorial-list">
<details open>
    <summary class="tutorial-header" id="tutorial-fb-title">Your First Bot</summary>
    <div class="tutorial-item" id="tutorial-fb-create">Creating a Bot</div>
    <div class="tutorial-item" id="tutorial-fb-message">Receiving Messages</div>
    <div class="tutorial-item" id="tutorial-fb-command">Your First Command</div>
</details>
</div>
<div class="true-content">
%content%
</div>
</div>
`

inject = inject.replace('%content%', document.getElementById('content').innerHTML);
document.body.innerHTML = inject + document.body.innerHTML;
const ids = document.getElementById('select').innerHTML.split(' ');
ids.forEach(id => {
    var item = document.getElementById(id);
    item.className += ' selected';
});
