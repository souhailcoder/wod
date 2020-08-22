$.each($(&quot;a[name]&quot;), function(i, e) { 
var elem = $(e).parent().find(&quot;#postviews&quot;); 
var blogStats = new Firebase(&quot;https://watx-7c150.firebaseio.com/pages/id/&quot; + $(e).attr(&quot;name&quot;)); 
blogStats.once(&quot;value&quot;, function(snapshot) { 
var data = snapshot.val(); 
var isnew = false; 
if(data == null) { 
data= {}; 
data.value = 0; 
data.url = window.location.href; 
data.id = $(e).attr(&quot;name&quot;); 
isnew = true; 
} 
elem.text(data.value); 
data.value++; 
if(window.location.pathname!=&quot;/&quot;) 
{ 
if(isnew) 
blogStats.set(data); 
else 
blogStats.child(&quot;value&quot;).set(data.value); 
} 
}); 
}); 
