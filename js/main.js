/**
 * PT BUMI LANGIT KOMODITAS - Interactive Logic & Bilingual Support
 * Direct Exporter and Spices Supplier
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const langBtns = document.querySelectorAll('.lang-btn');
  const themeToggle = document.getElementById('themeToggle');
  const modalBackdrop = document.getElementById('sampleModal');
  const modalClose = document.getElementById('modalClose');
  const sampleProductSelect = document.getElementById('sampleProductSelect');
  const sampleRequestBtns = document.querySelectorAll('.btn-request-sample');
  const sampleForm = document.getElementById('sampleForm');
  const contactForm = document.getElementById('contactForm');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  // Calculator Elements
  const calcSlider = document.getElementById('calcWeightSlider');
  const calcWeightVal = document.getElementById('calcWeightVal');
  const calcProductSelect = document.getElementById('calcProductSelect');
  const calcPkgTypeSelect = document.getElementById('calcPkgTypeSelect');
  const resNetWeight = document.getElementById('resNetWeight');
  const resPacksCount = document.getElementById('resPacksCount');
  const resCartonsCount = document.getElementById('resCartonsCount');
  const resGrossWeight = document.getElementById('resGrossWeight');
  const resTotalCbm = document.getElementById('resTotalCbm');
  const resRecommendedFreight = document.getElementById('resRecommendedFreight');
  const btnCalcInquiry = document.getElementById('btnCalcInquiry');

  // WhatsApp and Contact Constants from BLK PDF
  const WHATSAPP_PHONE = '6282110771445'; // Rinanda Bagus (+62 821-1077-1445)
  const CONTACT_EMAIL = 'bumilangitkomoditas@outlook.com';

  /* ==========================================
     1. Theme Toggle (Dark / Light)
     ========================================== */
  const savedTheme = localStorage.getItem('blk_theme') || 'light';
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('blk_theme', theme);
    const icon = theme === 'dark' ? '☀️' : '🌙';
    const title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    themeToggleBtns.forEach(btn => {
      btn.innerHTML = icon;
      btn.setAttribute('title', title);
    });
  };
  applyTheme(savedTheme);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  /* ==========================================
     2. Sticky Navbar on Scroll
     ========================================== */
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================
     3. Mobile Menu Toggle
     ========================================== */
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ==========================================
     4. Active Nav Link on Scroll
     ========================================== */
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -50% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  /* ==========================================
     5. Bilingual Translation Engine (EN / ID)
     ========================================== */
  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About Us",
      navProducts: "Products",
      navWhy: "Why Partner",
      navFacilities: "Facilities",
      navCalculator: "Freight Calculator",
      navWorkflow: "Export Process",
      navFaq: "FAQ",
      navContact: "Contact Us",
      btnSample: "Request Sample",
      btnDownloadPdf: "Download PDF Profile",
      btnCatalog: "View Catalogue",
      btnContactWhatsapp: "Chat on WhatsApp",
      
      heroBadge: "Direct Exporter & Spices Supplier",
      heroTitle1: "Direct Farmer Integration &",
      heroTitle2: "Transparent Export Standards",
      heroExpHighlight: "Backed by a core team with over 15+ years of industry experience",
      heroDesc: "We connect Indonesia's finest agricultural harvest directly from farmers to the international market with uncompromising quality standards.",
      statYears: "Years Industry Experience",
      statCapacity: "Monthly Production Capacity",
      statFarmers: "Direct Grassroots Partnership",
      
      trustQuality: "Grade A Planifolia Gourmet",
      trustCapacity: "5 Ton / Month Capacity",
      trustLegal: "Export Docs & Phytosanitary",
      trustDirect: "100% Direct Grassroots Sourcing",

      aboutTag: "Our Journey & Commitment",
      aboutTitle: "About Us",
      aboutP1: "PT BUMI LANGIT KOMODITAS was established to bridge high-quality agricultural yields directly from production centers to the international market. We work hands-on with local farmers at the grassroots level, strictly overseeing selection and post-harvest handling processes.",
      aboutP2: "Through our structured corporate system, we ensure that every shipment, export documentation, and quality standard for our global partners is handled securely, transparently, and professionally.",
      pillar1Title: "Grassroots Integration",
      pillar1Desc: "Direct farmgate engagement with local growers across prime growing regions.",
      pillar2Title: "Rigorous Post-Harvest",
      pillar2Desc: "Standardized curing, humidity testing, and multi-stage manual defect sorting.",
      aboutBadgeTitle: "Export Compliance",
      aboutBadgeDesc: "Phytosanitary, Certificate of Origin, and complete customs clearance readiness.",
      
      productsTag: "Our Product Catalogue",
      productsTitle: "Our Product Catalogue",
      productsSubtitle: "Cultivated in optimal microclimates, hand-sorted, and export-cured to international food & culinary standards.",
      
      p1Title: "PREMIUM NATURAL VANILLA BEANS",
      p1Desc: "Grade A Planifolia gourmet vanilla beans with lush moisture, deep mahogany sheen, and exceptional vanillin content.",
      p1Grade: "Grade A (Dark Brown / Planifolia)",
      p1Length: "Up to 21 cm",
      p1Moisture: "Export Standard / Well-cured (25% - 33%)",
      p1Aroma: "Rich, bold, and consistent aromatic profile, organically cultivated in partnered plantations",
      p1Packaging: "Vacuum-sealed food-grade bags packed in sturdy master cartons",
      p1Capacity: "Up to 5 Ton / Month",
      p1Sample: "Available upon formal inquiry",
      
      p2Title: "PREMIUM PURE VANILLA POWDER",
      p2Desc: "100% pure ground vanilla pods without artificial additives, preservatives, or synthetic enhancers, tailored for industrial use.",
      p2Grade: "100% Pure & Natural Grade",
      p2Comp: "100% pure ground vanilla pods (zero chemicals / zero sugar)",
      p2Texture: "Fine texture with intense authentic aroma, ideal for culinary & food manufacturing",
      p2Packaging: "Vacuum-sealed food-grade bags packed in sturdy master cartons",
      p2Capacity: "Up to 5 Ton / Month",
      p2Sample: "Available upon formal inquiry",

      calcTag: "Shipping & Logistics Estimation",
      calcTitle: "Export Volume & Freight Calculator",
      calcSubtitle: "Estimate master carton requirements, gross shipping weight, and cubic meters (CBM) for your upcoming order.",
      lblCalcProduct: "Select Commodity",
      lblCalcWeight: "Order Net Volume (Kg)",
      lblCalcPkg: "Packaging Option",
      
      whyTag: "Strategic Advantage",
      whyTitle: "WHY PARTNER WITH US?",
      whySubtitle: "Built on operational integrity, reliable volumes, and international trade governance.",
      why1Title: "Verified Facilities",
      why1Desc: "Our post-harvest facility and storage warehouse are managed under excellent supervision, ensuring the quality of our spices are fully maintained right up to the final shipment.",
      why2Title: "Export Ready",
      why2Desc: "All licensing processes, origin documentation, and export administration are managed professionally to ensure seamless cross-border shipments worldwide.",
      why3Title: "Consistent Supply",
      why3Desc: "Through our direct sourcing system and close collaboration with farming communities, we cut down lengthy supply chains, guaranteeing stable product availability.",
      
      facTag: "Infrastructure & Footprint",
      facTitle: "State-of-the-Art Operations & Sourcing",
      facSubtitle: "From high-altitude plantations to verified storage warehouses and certified export packaging.",
      
      faqTag: "Export Knowledge Base",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Key answers regarding our export certifications, minimum order quantities, and international logistics.",

      contactTag: "Connect With Our Export Desk",
      contactTitle: "CONTACT US",
      contactSubtitle: "Ready to order bulk spices or require custom specifications? Reach out directly to our export team.",
      contactPhoneLabel: "Direct Phone & WhatsApp",
      contactEmailLabel: "Official Inquiries Email",
      contactWebLabel: "Official Website",
      contactPhonePill: "Phone",
      contactEmailPill: "Email:",
      contactWebPill: "Website:",
      btnChatWhatsapp: "Chat via WhatsApp (Rinanda Bagus)",
      btnSendEmailDirect: "Send Official Email",
      
      formTitle: "Submit Export Inquiry / Request Sample",
      formSubtitle: "Fill out the form below. Our export sales representative will review and respond promptly.",
      lblFullName: "Full Name",
      lblCompany: "Company / Country",
      lblEmail: "Email Address",
      lblPhone: "WhatsApp / Phone",
      lblProduct: "Product of Interest",
      lblQty: "Estimated Monthly Quantity",
      lblNotes: "Specific Requirements / Inquiries",
      btnSubmitForm: "Send Formal Inquiry",
      
      footerDesc: "PT BUMI LANGIT KOMODITAS is a trusted direct exporter and spices supplier from Indonesia. With over 15+ years of experience providing international-quality vanilla and spices sourced directly from partner farmers.",
      footerFacility: "📍 Indonesia Export Ready Facility",
      footerNavTitle: "Navigation",
      footerLinkProducts: "Product Catalogue",
      footerLinkWhy: "Partner Advantages",
      footerLinkFacilities: "Facilities & Gallery",
      footerProductsTitle: "Featured Products",
      footerProduct1: "Natural Vanilla Beans Grade A",
      footerProduct2: "Pure Vanilla Powder 100%",
      footerProductSample: "Official Sample Request",
      footerContactTitle: "Official Contact",
      footerCopyright: "© 2026 PT BUMI LANGIT KOMODITAS. All Rights Reserved. Direct Exporter and Spices Supplier."
    },
    id: {
      navHome: "Beranda",
      navAbout: "Tentang Kami",
      navProducts: "Produk",
      navWhy: "Keunggulan",
      navFacilities: "Fasilitas",
      navCalculator: "Kalkulator Ekspor",
      navWorkflow: "Alur Ekspor",
      navFaq: "FAQ",
      navContact: "Kontak",
      btnSample: "Minta Sampel",
      btnDownloadPdf: "Unduh PDF Profil",
      btnCatalog: "Lihat Katalog",
      btnContactWhatsapp: "Hubungi WhatsApp",
      
      heroBadge: "Eksportir Langsung & Supplier Rempah",
      heroTitle1: "Integrasi Petani Langsung &",
      heroTitle2: "Standar Ekspor Transparan",
      heroExpHighlight: "Didukung oleh tim inti dengan pengalaman industri lebih dari 15+ tahun",
      heroDesc: "Kami menghubungkan hasil panen rempah terbaik Indonesia langsung dari petani binaan ke pasar internasional dengan standar mutu tanpa kompromi.",
      statYears: "Tahun Pengalaman Industri",
      statCapacity: "Kapasitas Produksi Bulanan",
      statFarmers: "Kemitraan Langsung Petani",
      
      trustQuality: "Grade A Planifolia Gourmet",
      trustCapacity: "Kapasitas 5 Ton / Bulan",
      trustLegal: "Dokumen Ekspor & Fitosanitari",
      trustDirect: "100% Petani Akar Rumput",

      aboutTag: "Komitmen & Integritas",
      aboutTitle: "Tentang Kami",
      aboutP1: "PT BUMI LANGIT KOMODITAS didirikan untuk menjembatani hasil pertanian berkualitas tinggi langsung dari sentra produksi ke pasar internasional. Kami turun langsung mendampingi petani lokal di tingkat akar rumput, mengawasi proses seleksi dan penanganan pasca panen secara ketat.",
      aboutP2: "Melalui struktur perusahaan yang terorganisir, kami memastikan setiap pengiriman, legalitas dokumen ekspor, dan standar mutu bagi mitra global kami tertangani dengan aman, transparan, dan profesional.",
      pillar1Title: "Kemitraan Petani",
      pillar1Desc: "Terjun langsung ke kebun petani di berbagai sentra penghasil vanili unggulan.",
      pillar2Title: "Pasca Panen Ketat",
      pillar2Desc: "Standardisasi curing, uji kadar air, dan sortir manual multi-tahap.",
      aboutBadgeTitle: "Kesiapan Legal Ekspor",
      aboutBadgeDesc: "Sertifikat Fitosanitari, Certificate of Origin (SKA), dan perizinan bea cukai lengkap.",
      
      productsTag: "Katalog Produk Unggulan",
      productsTitle: "Katalog Produk Kami",
      productsSubtitle: "Ditanam pada iklim mikro ideal, disortir cermat, dan dikeringkan secara presisi untuk kebutuhan kuliner serta manufaktur pangan internasional.",
      
      p1Title: "PREMIUM NATURAL VANILLA BEANS (POLONG VANILI)",
      p1Desc: "Polong vanili Planifolia Grade A gourmet dengan aroma pekat, kilau mahoni alami, serta kadar vanilin tinggi.",
      p1Grade: "Grade A (Dark Brown / Planifolia)",
      p1Length: "Hingga 21 cm",
      p1Moisture: "Standar Ekspor / Well-cured (25% - 33%)",
      p1Aroma: "Aroma manis harum pekat konsisten, dibudidayakan secara organik di perkebunan mitra",
      p1Packaging: "Kemasan food-grade kedap udara (vacuum sealed) dalam master karton kokoh",
      p1Capacity: "Hingga 5 Ton / Bulan",
      p1Sample: "Tersedia melalui permintaan resmi",
      
      p2Title: "PREMIUM PURE VANILLA POWDER (BUBUK VANILI)",
      p2Desc: "100% bubuk vanili murni hasil gilingan polong asli tanpa bahan pengawet, pemanis, atau perisa sintetis.",
      p2Grade: "100% Pure & Natural Grade",
      p2Comp: "100% bubuk vanili polong murni (bebas zat aditif sintetis)",
      p2Texture: "Tekstur halus dengan aroma otentik intens, dirancang untuk industri pangan & kuliner",
      p2Packaging: "Kemasan food-grade kedap udara (vacuum sealed) dalam master karton kokoh",
      p2Capacity: "Hingga 5 Ton / Bulan",
      p2Sample: "Tersedia melalui permintaan resmi",

      calcTag: "Estimasi Logistik & Pengiriman",
      calcTitle: "Kalkulator Volume & Kargo Ekspor",
      calcSubtitle: "Hitung estimasi kebutuhan karton master, berat kotor pengiriman, dan volume kubik (CBM) untuk pesanan Anda.",
      lblCalcProduct: "Pilih Komoditas",
      lblCalcWeight: "Volume Bersih Pesanan (Kg)",
      lblCalcPkg: "Opsi Kemasan Primer",
      
      whyTag: "Keunggulan Kompetitif",
      whyTitle: "WHY PARTNER WITH US?",
      whySubtitle: "Dibangun atas fondasi integritas operasional, keandalan suplai, dan tata kelola ekspor terpercaya.",
      why1Title: "Verified Facilities",
      why1Desc: "Fasilitas pasca panen dan gudang penyimpanan kami dikelola di bawah pengawasan ketat, memastikan mutu rempah terjaga prima hingga tahap pengiriman.",
      why2Title: "Export Ready",
      why2Desc: "Seluruh proses perizinan, dokumen asal barang (COO), dan administrasi ekspor ditangani secara profesional untuk memastikan kelancaran pengiriman lintas negara.",
      why3Title: "Consistent Supply",
      why3Desc: "Melalui sistem pengadaan langsung dan kolaborasi erat bersama petani, kami memangkas rantai pasok panjang untuk menjamin kontinuitas pasokan sepanjang musim.",
      
      facTag: "Infrastruktur & Operasional",
      facTitle: "Fasilitas Operasional & Sentra Budidaya",
      facSubtitle: "Dari perkebunan dataran tinggi binaan, hingga fasilitas gudang sortir higienis dan pengemasan standar ekspor.",
      
      faqTag: "Pusat Informasi Ekspor",
      faqTitle: "Pertanyaan yang Sering Diajukan",
      faqSubtitle: "Jawaban komprehensif seputar legalitas ekspor, minimal pemesanan, dan penanganan kargo internasional kami.",

      contactTag: "Hubungi Meja Ekspor Kami",
      contactTitle: "CONTACT US",
      contactSubtitle: "Siap melakukan pemesanan dalam jumlah besar atau memerlukan spesifikasi khusus? Hubungi tim perwakilan ekspor kami sekarang.",
      contactPhoneLabel: "Telepon & WhatsApp Langsung",
      contactEmailLabel: "Email Resmi",
      contactWebLabel: "Situs Web Resmi",
      contactPhonePill: "Phone",
      contactEmailPill: "Email:",
      contactWebPill: "Website:",
      btnChatWhatsapp: "Chat WhatsApp (Rinanda Bagus)",
      btnSendEmailDirect: "Kirim Email Resmi",
      
      formTitle: "Kirim Permintaan Ekspor / Minta Sampel",
      formSubtitle: "Isi formulir di bawah ini. Tim perwakilan ekspor kami akan segera menindaklanjuti permintaan Anda.",
      lblFullName: "Nama Lengkap",
      lblCompany: "Nama Perusahaan / Negara",
      lblEmail: "Alamat Email",
      lblPhone: "Nomor WhatsApp / Telepon",
      lblProduct: "Produk yang Diminati",
      lblQty: "Estimasi Kebutuhan / Bulan",
      lblNotes: "Catatan / Spesifikasi Khusus",
      btnSubmitForm: "Kirim Permintaan Resmi",
      
      footerDesc: "PT BUMI LANGIT KOMODITAS adalah eksportir langsung dan pemasok rempah terpercaya dari Indonesia. Berpengalaman lebih dari 15 tahun menyediakan vanili dan rempah berkualitas internasional langsung dari petani binaan.",
      footerFacility: "📍 Fasilitas Ekspor Siap Kirim Indonesia",
      footerNavTitle: "Navigasi",
      footerLinkProducts: "Katalog Produk",
      footerLinkWhy: "Keunggulan Mitra",
      footerLinkFacilities: "Fasilitas & Galeri",
      footerProductsTitle: "Produk Unggulan",
      footerProduct1: "Natural Vanilla Beans Grade A",
      footerProduct2: "Pure Vanilla Powder 100%",
      footerProductSample: "Permintaan Sampel Resmi",
      footerContactTitle: "Kontak Resmi",
      footerCopyright: "© 2026 PT BUMI LANGIT KOMODITAS. All Rights Reserved. Direct Exporter and Spices Supplier."
    }
  };

  let currentLang = localStorage.getItem('blk_lang') || 'en';

  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('blk_lang', lang);
    document.documentElement.lang = lang;

    langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update calculator labels & results
    updateCalculator();
  };

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      setLanguage(selected);
    });
  });

  setLanguage(currentLang);

  /* ==========================================
     6. Export Volume & Freight Calculator
     ========================================== */
  function updateCalculator() {
    if (!calcSlider) return;
    const netWeight = parseInt(calcSlider.value, 10) || 100;
    if (calcWeightVal) calcWeightVal.textContent = `${netWeight.toLocaleString()} Kg`;

    const pkgPerPack = calcPkgTypeSelect ? parseFloat(calcPkgTypeSelect.value) : 1; // 1 kg or 5 kg
    const packsCount = Math.ceil(netWeight / pkgPerPack);
    const kgPerCarton = 10; // 10 kg per sturdy master carton
    const cartonsCount = Math.ceil(netWeight / kgPerCarton);

    // Tare weight: ~0.8kg per carton + vacuum bags
    const tarePerCarton = 0.85; 
    const grossWeight = netWeight + (cartonsCount * tarePerCarton);

    // Dimension: 40cm x 30cm x 30cm = 0.036 CBM per master carton
    const cbmPerCarton = 0.036;
    const totalCbm = (cartonsCount * cbmPerCarton).toFixed(3);

    let freightRec = '';
    if (currentLang === 'id') {
      freightRec = netWeight < 300 
        ? '✈️ Direkomendasikan: Air Freight (Garuda Cargo / DHL Express)' 
        : '🚢 Direkomendasikan: Ocean Freight LCL / FCL (Tanjung Priok / Tanjung Perak)';
    } else {
      freightRec = netWeight < 300 
        ? '✈️ Recommended: Air Cargo / Express Freight' 
        : '🚢 Recommended: Ocean Freight (LCL / 20ft FCL Container)';
    }

    if (resNetWeight) resNetWeight.textContent = `${netWeight.toLocaleString()} Kg`;
    if (resPacksCount) resPacksCount.textContent = `${packsCount.toLocaleString()} ${currentLang === 'id' ? 'Kemasan Vakum' : 'Vacuum Bags'}`;
    if (resCartonsCount) resCartonsCount.textContent = `${cartonsCount.toLocaleString()} ${currentLang === 'id' ? 'Master Karton' : 'Master Cartons'}`;
    if (resGrossWeight) resGrossWeight.textContent = `± ${grossWeight.toFixed(1)} Kg`;
    if (resTotalCbm) resTotalCbm.textContent = `${totalCbm} CBM (m³)`;
    if (resRecommendedFreight) resRecommendedFreight.textContent = freightRec;
  }

  if (calcSlider) {
    calcSlider.addEventListener('input', updateCalculator);
  }
  if (calcPkgTypeSelect) {
    calcPkgTypeSelect.addEventListener('change', updateCalculator);
  }
  if (calcProductSelect) {
    calcProductSelect.addEventListener('change', updateCalculator);
  }
  updateCalculator();

  if (btnCalcInquiry) {
    btnCalcInquiry.addEventListener('click', () => {
      const netWeight = calcSlider.value;
      const product = calcProductSelect ? calcProductSelect.value : 'Vanilla Beans';
      const cartons = resCartonsCount ? resCartonsCount.textContent : '';
      const cbm = resTotalCbm ? resTotalCbm.textContent : '';

      const msg = 
        `*Halo PT Bumi Langit Komoditas*\n` +
        `Saya ingin meminta penawaran freight & harga ekspor berdasarkan kalkulator:\n\n` +
        `• *Produk:* ${product}\n` +
        `• *Volume Bersih:* ${netWeight} Kg\n` +
        `• *Estimasi Kemasan:* ${cartons}\n` +
        `• *Estimasi Volume:* ${cbm}\n\n` +
        `Mohon informasi harga FOB/CIF dan ketersediaan kuota pengiriman. Terima kasih!`;

      const encodedMsg = encodeURIComponent(msg);
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`, '_blank');
    });
  }

  /* ==========================================
     7. FAQ Accordion Handling
     ========================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all other items
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
        }
      });
    }
  });

  /* ==========================================
     8. Lightbox Modal Handling
     ========================================== */
  const galleryImgs = document.querySelectorAll('.facility-card img, .hero-main-card img, .product-media img');
  galleryImgs.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.textContent = img.alt || 'PT Bumi Langit Komoditas Facility';
        }
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  /* ==========================================
     9. Sample Request Modal Handling
     ========================================== */
  const openModal = (productName = '') => {
    if (sampleProductSelect && productName) {
      sampleProductSelect.value = productName;
    }
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  sampleRequestBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product') || 'Premium Natural Vanilla Beans';
      openModal(product);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalBackdrop && modalBackdrop.classList.contains('active')) closeModal();
      if (lightboxModal && lightboxModal.classList.contains('active')) closeLightbox();
    }
  });

  /* ==========================================
     10. Toast Notification Helper
     ========================================== */
  const showToast = (message) => {
    if (toastMessage) {
      toastMessage.textContent = message;
    }
    if (toastNotice) {
      toastNotice.classList.add('show');
      setTimeout(() => {
        toastNotice.classList.remove('show');
      }, 4500);
    }
  };

  /* ==========================================
     11. Form Submission & WhatsApp Forwarding
     ========================================== */
  const handleInquirySubmit = (e, formType) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('fullName') || '';
    const company = formData.get('company') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const product = formData.get('product') || 'Vanilla';
    const quantity = formData.get('quantity') || 'Sample Request';
    const notes = formData.get('notes') || '';

    const msg = 
      `*Halo PT Bumi Langit Komoditas*\n` +
      `Saya ingin mengajukan inquiry ekspor / permintaan sampel:\n\n` +
      `• *Nama:* ${name}\n` +
      `• *Perusahaan / Asal:* ${company}\n` +
      `• *Email:* ${email}\n` +
      `• *Telepon / WhatsApp:* ${phone}\n` +
      `• *Produk:* ${product}\n` +
      `• *Estimasi Kebutuhan:* ${quantity}\n` +
      (notes ? `• *Keterangan Tambahan:* ${notes}\n\n` : '\n') +
      `Mohon info ketersediaan spesifikasi dan jadwal pengiriman sampel. Terima kasih!`;

    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;

    showToast(currentLang === 'id' 
      ? 'Permintaan Anda telah disiapkan! Mengarahkan ke WhatsApp Export Desk...' 
      : 'Your inquiry has been prepared! Redirecting to WhatsApp Export Desk...');

    if (formType === 'modal') {
      closeModal();
    }
    form.reset();

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1000);
  };

  if (sampleForm) {
    sampleForm.addEventListener('submit', (e) => handleInquirySubmit(e, 'modal'));
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => handleInquirySubmit(e, 'contact'));
  }

  /* ==========================================
     12. Interactive Number Counter Animation
     ========================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const countUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'), 10);
          if (isNaN(target)) return;
          let count = 0;
          const speed = Math.max(10, Math.floor(target / 40));
          const timer = setInterval(() => {
            count += speed;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            const suffix = stat.getAttribute('data-suffix') || '';
            stat.innerHTML = `${count}<span>${suffix}</span>`;
          }, 40);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    countUpObserver.observe(statsSection);
  }
});
