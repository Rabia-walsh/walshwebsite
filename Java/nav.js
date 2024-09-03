document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown > a');
    var subDropdowns = document.querySelectorAll('.sub-dropdown > a');

    // Toggle main dropdowns (Departments, Programs)
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            e.preventDefault();
            var parent = this.parentElement;
            var isActive = parent.classList.contains('active');

            // Close all main dropdowns
            document.querySelectorAll('.nav-links > li').forEach(function (li) {
                li.classList.remove('active');
            });

            // Toggle the clicked dropdown
            if (!isActive) {
                parent.classList.add('active');
            }
        });
    });

    // Toggle sub-dropdowns (UG, PG, Doctoral)
    subDropdowns.forEach(function (subDropdown) {
        subDropdown.addEventListener('click', function (e) {
            e.preventDefault();
            var parent = this.parentElement;
            var isActive = parent.classList.contains('active');

            // Close all sub-dropdowns under the same parent
            parent.parentElement.querySelectorAll('.sub-dropdown').forEach(function (subli) {
                subli.classList.remove('active');
            });

            // Toggle the clicked sub-dropdown
            if (!isActive) {
                parent.classList.add('active');
            }
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.navbar')) {
            document.querySelectorAll('.nav-links li').forEach(function (li) {
                li.classList.remove('active');
            });
        }
    });
});
