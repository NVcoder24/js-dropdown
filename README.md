# js-dropdown
a JS script for making dropdowns<br>
requires jquery!

## Usage
```html
<div class="dropdown">
  <button>toggle dropdown</button>
  <ul>
    <li><a href>Item 1</a></li>
    <li><a href>Item 2</a></li>
    <li><a href>Item 3</a></li>
    <li>JS dropdown</li>
  </ul>
</div>
```
###### will toggle ".show" on ul (second child of ".dropdown")

## Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>JS dropdown example</title>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
	<style>
		.dropdown .list {
			display: none;
		}

		.dropdown .show {
			display: block;
		}
	</style>
</head>
<body>
	<!-- dropdown -->
	<div class="dropdown">
		<button>toggle dropdown</button>
		<ul class="list">
			<li><a href>Item 1</a></li>
			<li><a href>Item 2</a></li>
			<li><a href>Item 3</a></li>
	 		<li>JS dropdown</li>
		</ul>
	</div>
	<!-- JS dropdown script -->
	<script>
		function update_dropdowns() {
		  let dropdowns = $(".dropdown");
		  for (let i = 0; i < dropdowns.length; i++) {
		    let childs = dropdowns[i].children
		      $(childs[0]).on("click", function(event) {
		      $(childs[1]).toggleClass("show");
		    });
		  }
		}

		update_dropdowns();
	</script>
</body>
</html>
```
[Open in jsFiddle](https://www.google.com "Open in jsFiddle")
