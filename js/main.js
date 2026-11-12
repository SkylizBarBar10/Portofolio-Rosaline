/* ══════════════════════════════════════════════
   Rosaline Joy Miracle Lombogia — Portfolio JS
   ══════════════════════════════════════════════ */

'use strict';

/* ───────── Data pengalaman (dari CV) ───────── */
const PROJECTS = [
  {
    index: '01',
    title: 'Balai Kekarantinaan Kelas I Manado',
    desc: 'Apr 2026 — Penyuluhan Sistem Lapor Jentik di Desa Winetin, Kab. Minahasa Utara; pengendalian vektor & identifikasi nyamuk di area kantor BKK; Inspeksi Kesehatan Lingkungan (air, kebisingan, pencahayaan) dan pengendalian vektor di Asrama Haji Tuminting; Inspeksi Sanitasi Kapal bersama BKK Wilker Pelabuhan di Pelabuhan Manado.',
    tech: 'Pengendalian Vektor · Inspeksi Sanitasi · Apr 2026'
  },
  {
    index: '02',
    title: 'RS Sentra Medika Minahasa Utara',
    desc: 'Apr 2026 — Mempelajari alur K3 rumah sakit; monitoring berkala air bersih (tangki penampungan hingga kamar pasien) sesuai baku mutu; alur housekeeping & pengangkutan linen kotor hingga distribusi linen bersih; alur CSSD (pembersihan, sterilisasi, packing); pemeriksaan kebisingan, pencahayaan, suhu & kelembaban; pelaporan pengangkutan sampah medis dan limbah B3 dengan pihak ketiga.',
    tech: 'K3 · IPAL · Limbah Medis & B3 · Apr 2026'
  },
  {
    index: '03',
    title: 'Labkesmas Manado',
    desc: 'Apr 2026 — Praktik pengambilan sampel air bersih & air minum serta sampel makanan dan minuman; monitoring berkala suhu dan kelembaban; pengukuran kebisingan dan pencahayaan di ruang kerja karyawan.',
    tech: 'Sampling · Laboratorium · Monitoring · Apr 2026'
  },
  {
    index: '04',
    title: 'Puskesmas Wenang',
    desc: 'Apr 2026 — Pengalaman magang di layanan kesehatan tingkat pertama di Kota Manado, sebagai bagian dari rangkaian praktik kerja lapangan Rosaline.',
    tech: 'Pelayanan Primer · PKL · Apr 2026'
  }
];

/* ───────── Creative & Tech Stack (dari CV) ───────── */
const STACK = [
  { name: 'Sampling', type: 'Pengambilan Sampel', cls: 'c-teal', svg: '<path d="M12 3s6 6.6 6 11a6 6 0 1 1-12 0c0-4.4 6-11 6-11z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' },
  { name: 'Epidemiology', type: 'Analisis Penyakit', cls: 'c-violet', svg: '<path d="M3 12h4l2.5-6L13 18l2.5-6H21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' },
  { name: 'K3', type: 'Keselamatan & Kesehatan Kerja', cls: 'c-rose', svg: '<path d="M12 3 4.5 6.5v5c0 4.8 3.2 8.4 7.5 10 4.3-1.6 7.5-5.2 7.5-10v-5L12 3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9.5 12l2 2 3.5-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' },
  { name: 'Health Promotion', type: 'Promosi Kesehatan', cls: 'c-cyan', svg: '<path d="M4 11v3a1 1 0 0 0 1 1h2l3 5h2l-2-5h1l8 5V5l-8 5H5a1 1 0 0 0-1 1z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' },
  { name: 'Environmental Health', type: 'Fokus Utama', cls: 'c-emerald', svg: '<path d="M12 21c-5 0-8-3.5-8-9 6 0 12 1.5 12 9M12 12C12 7 14 4 19 3c0 6-2.5 9-7 9z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' },
  { name: 'Health Administration', type: 'Administrasi Kesehatan', cls: 'c-blue', svg: '<rect x="6" y="4" width="12" height="17" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 9h6M9 13h6M9 17h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' },
  { name: 'Graphic Design', type: 'Visual & Feeds', cls: 'c-orange', svg: '<path d="M4 20l4.5-1L20 7.5a2.1 2.1 0 0 0-3-3L5.5 16 4 20z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M13.5 6.5l3 3" stroke="currentColor" stroke-width="1.6"/>' },
  { name: 'Canva', type: 'Desain & Poster', cls: 'c-cyan', svg: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 14c1 1.4 2 2 3 2s2-.7 2-2-1-4-3-4-2.6 2.4-2.6 4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  { name: 'CapCut', type: 'Video Editor', cls: 'c-violet', svg: '<rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10.5 9.5v5l4.5-2.5-4.5-2.5z" fill="currentColor"/>' },
  { name: 'Fotografi', type: 'Photography', cls: 'c-white', svg: '<path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.5" stroke="currentColor" stroke-width="1.6"/>' },
  { name: 'MS Office', type: 'Word & PowerPoint', cls: 'c-blue', svg: '<path d="M4 4h16v16H4z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 10h16M4 15h16M10 4v16" stroke="currentColor" stroke-width="1.6"/>' },
  { name: 'Google Drive', type: 'Kolaborasi & IT', cls: 'c-yellow', svg: '<path d="M8 4h8l4 7-2.5 4.5h-11L4 11 8 4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 15.5 4 22M16 15.5 20 22" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' }
];

const TYPED_ROLES = {
  id: ['Environmental Health', 'Sanitasi Lingkungan'],
  en: ['Environmental Health', 'Sanitation & Hygiene']
};

/* ───────── i18n ───────── */
const I18N = {
  id: {
    nav_home: 'Beranda', nav_about: 'Tentang', nav_exp: 'Pengalaman', nav_edu: 'Pendidikan', nav_contact: 'Kontak',
    hero_greet: 'Halo, Saya', hero_seorang: 'Seorang',
    hero_desc: 'Fresh graduate D4 Kesehatan Lingkungan Poltekkes Kemenkes Manado — fokus pada pengendalian vektor & penyakit lingkungan, K3, IPAL, dan pemberdayaan masyarakat.',
    hero_btn_exp: 'Lihat Pengalaman', hero_btn_contact: 'Kontak Saya', hero_contact_me: 'Contact Me',
    about_title: 'Tentang', about_subtitle: 'Saya', about_desc: 'Fresh graduate Kesehatan Lingkungan · IPK 3,86',
    about_bio1: 'Saya adalah lulusan D4 Kesehatan Lingkungan Poltekkes Kemenkes Manado dengan IPK 3,86, berfokus pada pengendalian dan pencegahan vektor dan penyakit di lingkungan, K3, IPAL, dan Pemberdayaan Masyarakat Pemukiman.',
    about_bio2: 'Saya memiliki pengalaman magang di RS Sentra Medika Minahasa Utara, Labkesmas Manado, Puskesmas Wenang, dan Balai Kekarantinaan. Saya aktif dalam organisasi kampus serta pengabdian kepada masyarakat — mengembangkan skill komunikasi, perencanaan, dan kepemimpinan, dengan minat pada editing, desain poster, grafis, feeds, media sosial, dan fotografi.',
    about_download: 'Unduh CV',
    stat_gpa: 'IPK D4 Sanitasi Lingkungan', stat_intern: 'Magang / PKL', stat_cert: 'Sertifikasi Kompetensi Aktif',
    exp_tag: 'Pengalaman', exp_title: 'Pengalaman', exp_subtitle: 'Magang', exp_desc: 'Empat penempatan magang / PKL pada April 2026.', exp_btn_all: 'Lihat Semua Detail',
    edu_tag: 'Pendidikan & Sertifikasi', edu_title: 'Latar', edu_subtitle: 'Pendidikan', ach_title: 'Pencapaian & Organisasi',
    contact_title: 'Mari', contact_subtitle: 'Terhubung', contact_desc: 'Saya selalu terbuka untuk peluang kerja, magang lanjutan, atau sekadar obrolan. Kirimkan sinyal Anda.',
    sys_online: 'SYSTEM STATUS: ONLINE', box_email: 'Frekuensi Email', box_phone: 'Frekuensi Telepon / WA', box_loc: 'Lokasi', sys_footer: 'ALL SYSTEMS OPERATIONAL',
    form_title: 'INISIASI PENGIRIMAN DATA', form_name: 'ID Pengirim / Nama', form_email: 'Frekuensi Email', form_msg: 'Data Transmisi / Pesan', form_send: 'INISIASI TRANSMISI',
    success_title: 'Pesan Terkirim!', success_desc: 'Terima kasih, pesan kamu sudah masuk. Saya akan segera membalas.'
  },
  en: {
    nav_home: 'Home', nav_about: 'About', nav_exp: 'Experience', nav_edu: 'Education', nav_contact: 'Contact',
    hero_greet: 'Hi, I am', hero_seorang: 'An',
    hero_desc: 'Fresh graduate of the D4 Environmental Health program at Poltekkes Kemenkes Manado — focused on vector & environmental disease control, occupational health & safety, WWTPs, and community empowerment.',
    hero_btn_exp: 'See Experience', hero_btn_contact: 'Contact Me', hero_contact_me: 'Contact Me',
    about_title: 'About', about_subtitle: 'Me', about_desc: 'Environmental Health fresh graduate · GPA 3.86',
    about_bio1: 'I graduated from the D4 Environmental Health program at Poltekkes Kemenkes Manado with a 3.86 GPA, focusing on the control and prevention of environmental vectors and diseases, occupational health & safety, wastewater treatment, and human settlement empowerment.',
    about_bio2: 'I completed internships at RS Sentra Medika Minahasa Utara, Labkesmas Manado, Puskesmas Wenang, and the Balai Kekarantinaan (Quarantine Office). I was active in campus organizations and community service — building communication, planning, and leadership skills, with an interest in editing, poster design, graphics, feeds, social media, and photography.',
    about_download: 'Download CV',
    stat_gpa: 'D4 GPA — Sanitation & Environmental Health', stat_intern: 'Internships', stat_cert: 'Active Professional Certifications',
    exp_tag: 'Experience', exp_title: 'Selected', exp_subtitle: 'Internships', exp_desc: 'Four internship placements from April 2026.', exp_btn_all: 'Get All the Details',
    edu_tag: 'Education & Certifications', edu_title: 'Educational', edu_subtitle: 'Background', ach_title: 'Achievements & Organizations',
    contact_title: "Let's", contact_subtitle: 'Connect', contact_desc: 'I am always open to job opportunities, further internships, or just a chat. Send your signal.',
    sys_online: 'SYSTEM STATUS: ONLINE', box_email: 'Email Frequency', box_phone: 'Phone / WA Frequency', box_loc: 'Location', sys_footer: 'ALL SYSTEMS OPERATIONAL',
    form_title: 'INITIATE DATA TRANSMISSION', form_name: 'Sender ID / Name', form_email: 'Email Frequency', form_msg: 'Transmission Data / Message', form_send: 'INITIATE TRANSMISSION',
    success_title: 'Message Sent!', success_desc: 'Thank you — your message has been received. I will get back to you soon.'
  }
};

let currentLang = localStorage.getItem('lang') || 'id';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = I18N[lang][el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  typedState.roles = TYPED_ROLES[lang];
  typedState.roleIndex = 0;
  typedState.charIndex = 0;
  typedState.deleting = false;
}

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => applyLang(currentLang === 'id' ? 'en' : 'id'));
}

/* ───────── Langit: bintang berkelip + bintang jatuh ───────── */
const sky = document.getElementById('sky');
if (sky) {
  const rand = (min, max) => Math.random() * (max - min) + min;

  // Bintang berkelip — 110 titik tersebar di seluruh langit
  for (let i = 0; i < 110; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    const size = rand(1, 2.6);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${rand(0, 100)}%`;
    star.style.top = `${rand(0, 92)}%`;
    star.style.setProperty('--o', rand(0.45, 0.95).toFixed(2));
    star.style.setProperty('--d', `${rand(2.2, 5.5).toFixed(2)}s`);
    star.style.setProperty('--delay', `${rand(0, 4).toFixed(2)}s`);
    sky.appendChild(star);
  }

  // Bintang jatuh — muncul acak setiap beberapa detik
  if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    const spawnShootingStar = () => {
      const shooter = document.createElement('span');
      shooter.className = 'shooting-star';
      shooter.style.left = `${rand(55, 98)}%`;
      shooter.style.top = `${rand(4, 26)}%`;
      sky.appendChild(shooter);
      shooter.addEventListener('animationend', () => shooter.remove());
    };
    spawnShootingStar(); // satu langsung saat halaman dibuka
    (function scheduleShootingStar() {
      setTimeout(() => {
        spawnShootingStar();
        scheduleShootingStar();
      }, rand(3500, 8000));
    })();
  }
}

/* ───────── Tahun berjalan ───────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ───────── Render kartu pengalaman ───────── */
const projectGrid = document.getElementById('projectGrid');
if (projectGrid) {
  projectGrid.innerHTML = PROJECTS.map(p => `
    <article class="project-card reveal">
      <span class="project-index">${p.index}</span>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <p class="project-tech">${p.tech}</p>
    </article>`).join('');
}

/* ───────── Render Creative & Tech Stack ───────── */
const stackGrid = document.getElementById('stackGrid');
if (stackGrid) {
  stackGrid.innerHTML = STACK.map(item => `
    <div class="stack-item reveal" title="${item.type}">
      <span class="stack-icon ${item.cls}">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${item.svg}</svg>
      </span>
      <span class="stack-name">${item.name}</span>
      <span class="stack-type">${item.type}</span>
    </div>`).join('');
}

/* ───────── Navbar & back to top ───────── */
const navbar = document.getElementById('navbar');
const toTop = document.getElementById('toTop');

function onScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  navbar.classList.toggle('scrolled', y > 60);
  toTop.classList.toggle('visible', y > 400);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ───────── Hamburger / mobile menu ───────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ───────── Reveal on scroll ───────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeReveals() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}
observeReveals();

/* Safety net: kalau observer tidak jalan (screenshot/JS lamban), tampilkan semua */
setTimeout(() => document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible')), 1500);

/* ───────── Active nav link ───────── */
const sectionIds = ['beranda', 'tentang', 'pengalaman', 'pendidikan', 'kontak'];
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
sectionIds.forEach(id => { const el = document.getElementById(id); if (el) sectionObserver.observe(el); });

/* ───────── Typewriter ───────── */
const typedEl = document.getElementById('typed');
const typedState = { roles: TYPED_ROLES[currentLang], roleIndex: 0, charIndex: 0, deleting: false };

(function typeLoop() {
  if (!typedEl) return;
  function tick() {
    const word = typedState.roles[typedState.roleIndex];
    typedEl.textContent = word.slice(0, typedState.charIndex);

    if (!typedState.deleting && typedState.charIndex < word.length) {
      typedState.charIndex++;
      return setTimeout(tick, 55);
    }
    if (!typedState.deleting) {
      typedState.deleting = true;
      return setTimeout(tick, 1800);
    }
    if (typedState.charIndex > 0) {
      typedState.charIndex--;
      return setTimeout(tick, 28);
    }
    typedState.deleting = false;
    typedState.roleIndex = (typedState.roleIndex + 1) % typedState.roles.length;
    setTimeout(tick, 350);
  }
  tick();
})();

// Apply saved/initial language after everything is mounted
applyLang(currentLang);

/* ───────── Counter statistik ───────── */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.target || 0);
    const duration = 1400;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(2, -8 * progress);
      el.textContent = Math.round(target * (progress === 1 ? 1 : eased)) + '+';
      if (progress < 1) requestAnimationFrame(frame);
      else el.textContent = target + '+';
    }
    requestAnimationFrame(frame);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));

/* ───────── PC card: tilt + holo glare mengikuti pointer ─────────
   Bekerja di mouse DAN sentuhan (touch-action: none di CSS). */
const avatarCard = document.getElementById('avatarCard');
if (avatarCard && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const MAX_TILT = 12;

  const setGlare = (e) => {
    const rect = avatarCard.getBoundingClientRect();
    const x = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    const y = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
    avatarCard.style.setProperty('--px', `${(x * 100).toFixed(1)}%`);
    avatarCard.style.setProperty('--py', `${(y * 100).toFixed(1)}%`);
    avatarCard.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`);
    avatarCard.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`);
  };

  const applyMove = (e) => {
    avatarCard.style.setProperty('--glare', '1');
    setGlare(e);
    const rect = avatarCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    avatarCard.style.transform = `rotateY(${x * MAX_TILT}deg) rotateX(${-y * MAX_TILT}deg) translateY(-4px)`;
  };

  const resetCard = () => {
    avatarCard.style.setProperty('--glare', '0');
    avatarCard.style.transform = 'rotateY(0) rotateX(0) translateY(0)';
  };

  avatarCard.addEventListener('pointerenter', applyMove);
  avatarCard.addEventListener('pointermove', applyMove);
  avatarCard.addEventListener('pointerdown', applyMove);
  avatarCard.addEventListener('pointerup', () => {
    /* di HP, jari dilepas — tetap tampilkan kilau lalu pudar */
    setTimeout(() => avatarCard.style.setProperty('--glare', '0'), 600);
  });
  avatarCard.addEventListener('pointercancel', resetCard);
  avatarCard.addEventListener('pointerleave', resetCard);
}

/* ───────── Modal sertifikat (lightbox) ───────── */
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certModalCaption = document.getElementById('certModalCaption');
const certModalClose = document.getElementById('certModalClose');

function openCertModal(src, title) {
  certModalImg.src = src;
  certModalImg.alt = title;
  certModalCaption.textContent = title;
  certModal.hidden = false;
  document.body.style.overflow = 'hidden';
  certModalClose.focus();
}

function closeCertModal() {
  certModal.hidden = true;
  certModalImg.src = '';
  document.body.style.overflow = '';
}

if (certModal) {
  document.querySelectorAll('.cert-img-btn').forEach(btn => {
    btn.addEventListener('click', () => openCertModal(btn.dataset.src, btn.dataset.title));
  });
  certModalClose.addEventListener('click', closeCertModal);
  certModal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeCertModal));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !certModal.hidden) closeCertModal();
  });
}

/* ───────── Toast ───────── */
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ───────── Form kontak ─────────
   Dua mode:
   1. FORMSPREE_ENDPOINT diisi  → pesan terkirim langsung ke email kamu,
      tanpa buka aplikasi email (gratis di formspree.io).
   2. Kosong (default)          → buka aplikasi email pengirim (mailto) + notifikasi sukses.
   Untuk mengaktifkan mode 1: daftar di https://formspree.io, buat form baru,
   lalu tempel URL-nya di bawah. Contoh: 'https://formspree.io/f/xabc1234' */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaeonooq'; // ← tempel endpoint Formspree di sini kalau sudah punya
const CONTACT_EMAIL = 'dnljoy77@gmail.com';

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const formSuccess = document.getElementById('formSuccess');
const formSuccessDesc = document.getElementById('formSuccessDesc');
const sendBtn = contactForm ? contactForm.querySelector('.send-btn') : null;

function showSuccess(message) {
  if (formSuccessDesc && message) formSuccessDesc.textContent = message;
  formSuccess.hidden = false;
  formNote.textContent = '';
  showToast(currentLang === 'id' ? 'Pesan berhasil terkirim!' : 'Message sent successfully!');
}

function showError(message) {
  formNote.textContent = message;
  formNote.style.color = '#f43f5e';
  showToast(currentLang === 'id' ? 'Gagal mengirim pesan. Coba lagi.' : 'Failed to send message. Please try again.');
}

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const nama = document.getElementById('fNama');
    const email = document.getElementById('fEmail');
    const pesan = document.getElementById('fPesan');

    if (!contactForm.checkValidity()) {
      formNote.textContent = currentLang === 'id' ? 'Mohon lengkapi semua kolom dengan benar.' : 'Please fill in all fields correctly.';
      formNote.style.color = '#f43f5e';
      return;
    }

    formSuccess.hidden = true;
    formNote.style.color = '';

    /* ── Mode 1: Formspree (email langsung masuk, tanpa buka mail app) ── */
    if (FORMSPREE_ENDPOINT) {
      const originalBtnHtml = sendBtn.innerHTML;
      sendBtn.disabled = true;
      sendBtn.innerHTML = currentLang === 'id' ? 'MENGIRIM…' : 'SENDING…';
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ nama: nama.value, email: email.value, pesan: pesan.value })
        });
        if (response.ok) {
          showSuccess(currentLang === 'id'
            ? 'Terima kasih! Pesan kamu sudah masuk dan saya akan segera membalas.'
            : 'Thanks! Your message has been received — I will reply soon.');
          contactForm.reset();
        } else {
          showError(currentLang === 'id' ? 'Gagal mengirim. Coba lagi nanti.' : 'Could not send. Please try again later.');
        }
      } catch (err) {
        showError(currentLang === 'id' ? 'Koneksi bermasalah. Coba lagi nanti.' : 'Connection problem. Please try again later.');
      } finally {
        sendBtn.disabled = false;
        sendBtn.innerHTML = originalBtnHtml;
      }
      return;
    }

    /* ── Mode 2: mailto (default) — buka app email + tampilkan notifikasi ── */
    const subject = encodeURIComponent(`Portfolio — ${nama.value}`);
    const body = encodeURIComponent(`Nama: ${nama.value}\nEmail: ${email.value}\n\n${pesan.value}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    showSuccess(currentLang === 'id'
      ? 'Aplikasi email kamu sudah terbuka — tekan “Kirim” di sana. Terima kasih!'
      : 'Your email app has been opened — press “Send” there. Thank you!');
    contactForm.reset();
  });
}
