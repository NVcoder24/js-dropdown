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
