import './style.css'

  document.addEventListener('alpine:init', () => {
    Alpine.store('accordion', {
      tab: 0
    });

    Alpine.data('accordion', (idx) => ({
      init() {
        this.idx = idx;
      },
      idx: -1,
      handleClick() {
        this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
      },
      handleRotate() {
        return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
      },
      handleToggle() {
        return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
      }
    }));
  })

   // --- Mobile Menu Toggle ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // --- Smooth Scroll + Active Link Highlight ---
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Highlight the clicked link
      navLinks.forEach(l => l.classList.remove('text-blue-600', 'font-medium'));
      this.classList.add('text-blue-600', 'font-medium');

      // Close mobile menu (if open)
      mobileMenu.classList.add('hidden');
    });
  });

  // --- Active Section on Scroll ---
  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // Adjust for navbar height
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-600', 'font-medium');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('text-blue-600', 'font-medium');
      }
    });
  });
