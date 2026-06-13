<script>
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Hapus class 'active' dari semua link
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            // Tambahkan class 'active' ke link yang diklik
            this.classList.add('active');
        });
    });
</script>