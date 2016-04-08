---
layout: default
title: Openstack Contribution
---

### Video Lessons
<ul>
	{% for post in site.posts reversed %}

		{% if post.categories contains 'openstack-contri' %}
		
		<li>
			<h4>	
				<a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
			</h4>
		</li>
		{% endif %}
		
	{% endfor %}

</ul>