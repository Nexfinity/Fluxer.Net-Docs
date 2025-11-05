var inject = `
<div class="header" id="header">
<div class="site-title">Fluxer.Net Docs</div>
<a class="header-button" id="about-header" href="/">Home</a>
<a class="header-button" id="contact-header" href="/contact.html">Contact</a>
<a class="header-button" id="oss-header" href="https://github.com/Nexfinity/Fluxer.Net">Open Source</a>
</div>
<div class="content">
<div class="left-sidebar" id="tutorial-list">
<details open>
    <summary class="tutorial-header" id="tutorial-fb-title">Getting Started</summary>
    <a class="tutorial-item" id="tutorial-fb-create" href="/tutorials/first-bot/1.create.html">Creating a Bot</a>
    <a class="tutorial-item" id="tutorial-fb-message" href="/tutorials/first-bot/2.messages.html">Receiving Messages</a>
    <a class="tutorial-item" id="tutorial-fb-command" href="/tutorials/first-bot/3.commands.html">Your First Command</a>
</details>
<details open>
    <summary class="tutorial-header" id="guides-title">Guides</summary>
    <a class="tutorial-item" id="guide-config" href="/guides/configuration.html">Configuration</a>
    <a class="tutorial-item" id="guide-api" href="/guides/api-client.html">API Client</a>
    <a class="tutorial-item" id="guide-gateway" href="/guides/gateway-client.html">Gateway Client</a>
    <a class="tutorial-item" id="guide-events" href="/guides/events.html">Events Reference</a>
    <a class="tutorial-item" id="guide-ratelimit" href="/guides/rate-limiting.html">Rate Limiting</a>
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
