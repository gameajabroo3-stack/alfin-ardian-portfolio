const videos = [
  { company: "Pertamina", group: "pertamina", id: "jiBTbnzmpAk" },
  { company: "Pertamina", group: "pertamina", id: "6DZXWf-n-Jo", time: "78s" },
  { company: "Pertamina", group: "pertamina", id: "vrbdnTamcc4", time: "18s" },
  { company: "Pertamina", group: "pertamina", id: "EnrMs8_Z26U" },
  { company: "Pertamina", group: "pertamina", id: "1-UHb_iiyk8" },
  { company: "Pertamina", group: "pertamina", id: "_BBefbQQT-c" },
  { company: "LOOK CREATIVE", group: "look", id: "qpQJXVoW0KQ" },
  { company: "LOOK CREATIVE · INKA", group: "look", id: "SBqfDmJwMrw" },
  { company: "BICARALIVE", group: "bicaralive", id: "Jd-HQ-AcZGY" },
  { company: "BICARALIVE", group: "bicaralive", id: "6m_e2OX-aSk" },
];

const copy = {
  id: {
    navWork: "Karya", navApproach: "Proses", navAbout: "Pengalaman", navProfile: "Profil", navContact: "Kontak",
    heroKicker: "VIDEOGRAPHER / CAMERA OPERATOR", heroKickerRight: "FILM & CREATIVE PORTFOLIO", titleOne: "PORTFOLIO",
    heroEyebrow: "VIDEOGRAFI UNTUK PERUSAHAAN DAN BRAND", heroCopy: "Freelance videographer dengan pengalaman sejak 2014. Menangani pengambilan gambar, B-roll, wawancara, dan pencahayaan untuk berbagai produksi video.", heroAside: "Videographer dan camera operator untuk company profile, iklan, event, musik, dan video produk.", heroLocation: "BERBASIS DI SURAKARTA <b>✳</b>", availability: "TERBUKA UNTUK PROYEK",
    selected: "PILIHAN KARYA", viewProjects: "LIHAT SEMUA VIDEO <span>⟶</span>", processTitle: "PROSES KERJA", toolsTitle: "PERALATAN KERJA",
    process1: "PERSIAPAN", process1copy: "Memahami kebutuhan produksi dan alur kerja bersama tim.", process2: "PENDEKATAN VISUAL", process2copy: "Menentukan framing, komposisi, lensa, dan camera movement.", process3: "PENGATURAN KAMERA", process3copy: "Exposure, white balance, depth of field, log, dan frame rates.", process4: "PENGAMBILAN GAMBAR", process4copy: "Kamera utama, B-roll, wawancara, dan pencahayaan sesuai kebutuhan.", process5: "PENYELESAIAN", process5copy: "Monitoring, media backup, dukungan editing, dan delivery.",
    experienceLabel: "PENGALAMAN FREELANCE", formalProfile: "PROFIL FORMAL <span>⟶</span>", since2025: "2025 - sekarang", since2019: "2019 - sekarang", experienceNote: "Berkarya secara mandiri dan berkolaborasi dalam tim sejak 2014. Proyek berbayar sejak 2015.",
    nextProject: "KONTAK", contactTitle: "Produksi video untuk<br /><em>kebutuhan Anda.</em>", contactOpen: "TERBUKA UNTUK PROYEK BARU", contactCopy: "Hubungi saya untuk membahas kebutuhan, ruang lingkup, dan alur produksi video.", sendMessage: "KIRIM PESAN", footer: "TERIMA KASIH SUDAH BERKUNJUNG <i>✦</i>", backTop: "KEMBALI KE ATAS ↑", project: "VIDEO", watch: "PREVIEW VIDEO ↗", tags: "KAMERA · B-ROLL · WAWANCARA", closeVideo: "TUTUP <span>×</span>", videoFallback: "Jika pemutar tidak tersedia, lanjutkan di YouTube.", watchOnYoutube: "TONTON DI YOUTUBE ↗",
  },
  en: {
    navWork: "Selected Work", navApproach: "Process", navAbout: "Experience", navProfile: "Profile", navContact: "Contact",
    heroKicker: "VIDEOGRAPHER / CAMERA OPERATOR", heroKickerRight: "FILM & CREATIVE PORTFOLIO", titleOne: "PORTFOLIO",
    heroEyebrow: "VIDEOGRAPHY FOR COMPANIES AND BRANDS", heroCopy: "Freelance videographer active since 2014. Handles camera operation, B-roll, interviews, and lighting for video productions.", heroAside: "Videographer and camera operator for company profiles, advertising, events, music videos, and product videos.", heroLocation: "BASED IN SURAKARTA <b>✳</b>", availability: "OPEN FOR PROJECTS",
    selected: "SELECTED WORK", viewProjects: "VIEW ALL VIDEOS <span>⟶</span>", processTitle: "MY PROCESS", toolsTitle: "EQUIPMENT",
    process1: "PREPARATION", process1copy: "Understanding production needs and coordinating the workflow with the team.", process2: "VISUAL APPROACH", process2copy: "Planning framing, composition, lenses, and camera movement.", process3: "CAMERA SETUP", process3copy: "Exposure, white balance, depth of field, log, and frame rates.", process4: "PRODUCTION", process4copy: "Main camera, B-roll, interviews, and lighting for each shoot.", process5: "DELIVERY", process5copy: "Monitoring, media backup, editing support, and delivery.",
    experienceLabel: "FREELANCE EXPERIENCE", formalProfile: "FORMAL PROFILE <span>⟶</span>", since2025: "2025 - present", since2019: "2019 - present", experienceNote: "Working independently and with teams since 2014. Paid projects since 2015.",
    nextProject: "CONTACT", contactTitle: "Video production for<br /><em>your project.</em>", contactOpen: "AVAILABLE FOR NEW PROJECTS", contactCopy: "Contact me to discuss your requirements, project scope, and production workflow.", sendMessage: "CONTACT ME", footer: "THANK YOU FOR VISITING <i>✦</i>", backTop: "BACK TO TOP ↑", project: "VIDEO", watch: "VIDEO PREVIEW ↗", tags: "CAMERA · B-ROLL · INTERVIEWS", closeVideo: "CLOSE <span>×</span>", videoFallback: "If the player is unavailable, continue on YouTube.", watchOnYoutube: "WATCH ON YOUTUBE ↗",
  },
};

const grid = document.querySelector("#projectGrid");
let language = "id";

function renderProjects() {
  grid.innerHTML = videos.map((video, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `<article class="project-card reveal"><div class="project-top"><span class="project-index">${number}</span><span class="project-company">${video.company}</span></div><button class="project-image" type="button" data-video-id="${video.id}" data-video-time="${video.time ? Number.parseInt(video.time, 10) : ""}" data-video-company="${video.company}" data-video-number="${number}" aria-label="${copy[language].watch}: ${video.company} ${number}"><img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="" loading="lazy" /><span class="play-button" aria-hidden="true">▶</span></button><div class="project-caption"><span>${copy[language].tags}</span><span>${copy[language].watch}</span></div></article>`;
  }).join("");
  observeReveals();
}

function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) return items.forEach((item) => item.classList.add("is-visible"));
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[next][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  const toggle = document.querySelector(".language-toggle");
  toggle.innerHTML = next === "id" ? "EN <span>↗</span>" : "ID <span>↗</span>";
  toggle.setAttribute("aria-label", next === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia");
  renderProjects();
}

document.querySelector(".language-toggle").addEventListener("click", () => setLanguage(language === "id" ? "en" : "id"));
const videoModal = document.querySelector("#videoModal");
const videoFrame = videoModal.querySelector("iframe");
const videoModalTitle = document.querySelector("#videoModalTitle");
const videoFallbackLink = videoModal.querySelector(".modal-youtube");
grid.addEventListener("click", (event) => {
  const button = event.target.closest(".project-image[data-video-id]");
  if (!button) return;
  const videoId = button.dataset.videoId;
  const start = button.dataset.videoTime ? Number.parseInt(button.dataset.videoTime, 10) : 0;
  videoModalTitle.textContent = `${button.dataset.videoCompany} · ${copy[language].project} ${button.dataset.videoNumber}`;
  videoFrame.title = videoModalTitle.textContent;
  const playerParams = new URLSearchParams({ autoplay: "1", rel: "0" });
  if (start) playerParams.set("start", String(start));
  if (location.protocol === "http:" || location.protocol === "https:") playerParams.set("origin", location.origin);
  videoFrame.src = `https://www.youtube.com/embed/${videoId}?${playerParams.toString()}`;
  const youtubeUrl = new URL("https://www.youtube.com/watch");
  youtubeUrl.searchParams.set("v", videoId);
  if (start) youtubeUrl.searchParams.set("t", `${start}s`);
  videoFallbackLink.href = youtubeUrl.toString();
  videoModal.showModal();
});
videoModal.querySelector(".modal-close").addEventListener("click", () => videoModal.close());
videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) videoModal.close();
});
videoModal.addEventListener("close", () => {
  videoFrame.src = "";
});
renderProjects();
observeReveals();
