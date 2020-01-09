/*
<script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
  new Crate({
    server: '299881420891881473',
    channel: '355719584830980096',
    shard: 'https://disweb.dashflo.net'
  })
</script>
*/

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        var s
        s = document.createElement('script')
        s.src = src
        s.onload = resolve
		s.setAttribute('async', 'async')
		s.setAttribute('defer', 'defer')
        s.onerror = reject
        document.head.appendChild(s)
    });
}

loadScript('https://cdn.jsdelivr.net/npm/@widgetbot/crate@3')
.then(() => {
	new Crate({
		server: '628272812439896075',
		channel: '629795557761744896',
		shard: 'https://disweb.dashflo.net'
	})
})
.catch(err => {
	console.log(err)
})
