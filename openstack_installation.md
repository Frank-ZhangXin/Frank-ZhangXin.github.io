---
layout: page
title: Openstack Installation
---

## Video Lessons
<ul>
	{% for post in site.posts reversed %}

		{% if post.categories contains 'openstack-install' %}
		
		<li>
			<h3>	
				<i class="em em-movie_camera"></i>
				<a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
			</h3>
		</li>
		{% endif %}
		
	{% endfor %}

</ul>