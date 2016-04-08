---
layout: default
title: Openstack Installation
---

### Video Lessons
<ul>
	{% for post in site.posts reversed %}

		{% if post.categories contains 'openstack-install' %}
		
		<li>
			<h4>	
				<i class="em em-movie_camera"></i>
				<a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
			</h4>
		</li>
		{% endif %}
		
	{% endfor %}

</ul>