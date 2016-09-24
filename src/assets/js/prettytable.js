document.addEventListener('DOMContentLoaded', function() {
    tables = document.querySelectorAll("article table");
    [].forEach.call(tables, function(table) {
      table.classList.add("mui-table");
      table.classList.add("mui-table--bordered");

      var wrapper = document.createElement('div');
      wrapper.classList.add("cube-table--responsive");

      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
}, false);
