

        // إغلاق Offcanvas عند النقر على رابط
        document.querySelectorAll('.offcanvas-custom .navheader').forEach(link => {
            link.addEventListener('click', function() {
                const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('mobileMenu'));
                offcanvas.hide();
            });
        });
