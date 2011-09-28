/* jQuery powered code to pull in a github repository list */

function parseRepos(data) {
	var projects = [];

	data = data.data;
	data.sort(function(a, b) { return a.name > b.name; });

	for (repo in data) {
		if (data[repo].name === 'shirk.github.com') {
			continue;
		}
		projects.push('<li><a href="' + data[repo].html_url + '">::' + data[repo].name + '</a></li>');
	}

	container = document.getElementById('ghProjectList');
	if (!(container === undefined)) {
		$('<ul/>', { html : projects.join('') }).appendTo(container);
	}
}

$(document).ready(function(){
	$.getJSON('https://api.github.com/users/Shirk/repos?callback=?', parseRepos)
})

