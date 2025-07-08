// Система переводов
const translations = {
  kz: {
    // Навигация
    nav_home: "Басты бет",
    nav_about: "Өзім туралы",
    nav_achievements: "Жетістіктер",
    nav_concerts: "Концерттер",
    nav_music: "Музыка",
    nav_contact: "Байланыс",

    // Главная страница
    hero_subtitle: "Аранжировщик • DJ • Музыкант",
    hero_cta: "Музыканы тыңдау",

    // О себе
    about_title: "Өзім туралы",
    about_heading: "Музыка әлеміне қош келдіңіз!",
    about_p1:
      'DJ DAKE (Дәулет Нұржанов)-Аранжировщик (саунд продюсер) жәнә Dj. Қазақ эстрадасының танымал жұлдыздарының (МузАрт,Алтынай Жорабаева, Мақпал Жүнісова, Досымжан Таңатаров, Бәйтерек тобы) біршама әндерін әрлеген. DJ DAKE — қазіргі қазақ музыка сахнасында этно-поп пен EDM-дің шекарасын бұзып әкеткен талантты продюсер. Оның тректерінде қазақ домбырасының дүниетанымдық әуені заманауи house, түркиялық мотивтермен жаңа звучание тапқан. Әсіресе, 2023–2024 жылдары шыққан "Домбыра көмей", "Sálem bul Qazaqstan", "Махаббат", "Әлқисса", "Jana zaman", "Oriental miracle", "Илигай" сияқты тағы басқа әндер мен шығармалар жанкүйерлердің жүрегіне жол табуда.',
    about_stat1: "Жыл тәжірибе",
    about_stat2: "Іс-шара",
    about_stat3: "Трек",


    // Концерты
    concerts_title: "Клиптер",
    concert1_title: "Жазғы фестиваль 2023",
    concert1_desc: "Басты сахна, 10,000+ көрермен",
    concert2_title: "Корпоративтік іс-шара",
    concert2_desc: "Белгілі артистпен ынтымақтастық",
    concert3_title: 'Түнгі клуб "Жұлдыз"',
    concert3_desc: "Апта сайынғы өнер көрсету",
    concert3_date: "Әр жұма",

    // Музыка
    music_title: "Менің музыкам",
    track1_title: "Auyldagy Aru Kyz",
    track2_title: "Ertegi Alemi",
    track3_title: "Iligai",
    track4_title: "Mahabbat",
    track5_title: "Jaina",
    track6_title: "Dombyra (remix)",
    track8_title: "Alqissa",
    
    // Загрузка музыки
    upload_title: "Музыканы қалай қосу керек:",
    upload_step1: 'Сайттың түбірінде "music" қалтасын жасаңыз',
    upload_step2: "MP3 файлдарыңызды осы қалтаға жүктеңіз",
    upload_step3: "Төмендегі кодтағы файл жолдарын жаңартыңыз",
    upload_step4: '"covers" қалтасына мұқабаларды қосыңыз',

    // Контакты
    contact_title: "Байланыс",
    contact_heading: "Менімен байланысыңыз",
    contact_desc: "Сіздің іс-шараңызды талқылауға және ұмытылмас атмосфера жасауға дайынмын!",
    social_heading: "Әлеуметтік желілер",

    // Футер
    footer_copyright: "© 2024 DJ DAKE. Барлық құқықтар қорғалған.",

  
    // Telegram CTA
    telegram_cta_title: "Менің Telegram арнамдағы басқа тректерімді тыңдаңыз",
    telegram_cta_desc: "Менің Telegram арнамда сізді эксклюзивті музыка, ремикстер мен жаңалықтар күтіп тұр!",
    telegram_btn_text: "Telegram-ға өту",
  },

  ru: {
    // Навигация
    nav_home: "Главная",
    nav_about: "О себе",
    nav_achievements: "Достижения",
    nav_concerts: "Концерты",
    nav_music: "Музыка",
    nav_contact: "Контакты",

    // Главная страница
    hero_subtitle: "Аранжировщик • DJ • Музыкант",
    hero_cta: "Послушать музыку",

    // О себе
    about_title: "О себе",
    about_heading: "Добро пожаловать в мир музыки!",
    about_p1:
      "DJ DAKE (Даулет Нуржанов) - Аранжировщик (саунд-продюсер) и диджей. Аранжировал ряд песен популярных казахстанских поп-звезд (МузАрт, Алтынай Жорабаева, Макпал Жунисова, Досымжан Танатаров, группа «Байтерек»). DJ DAKE - талантливый продюсер, который раздвинул границы этно-попа и EDM на современной казахской музыкальной сцене.",
    about_stat1: "Лет опыта",
    about_stat2: "Мероприятий",
    about_stat3: "Треков",


    // Концерты
    concerts_title: "Клипы",
    concert1_title: "Летний фестиваль 2023",
    concert1_desc: "Главная сцена, 10,000+ зрителей",
    concert2_title: "Корпоративное мероприятие",
    concert2_desc: "Сотрудничество с известным артистом",
    concert3_title: 'Ночной клуб "Звезда"',
    concert3_desc: "Еженедельные выступления",
    concert3_date: "Каждую пятницу",

    // Музыка
    music_title: "Моя музыка",
    track1_title: "Auyldagy Aru Kyz",
    track2_title: "Ertegi Alemi",
    track3_title: "Iligai",
    track4_title: "Mahabbat",
    track5_title: "Jaina",
    track6_title: "Dombyra (remix)",
    track8_title: "Alqissa",
    

    // Загрузка музыки
    upload_title: "Как добавить музыку:",
    upload_step1: 'Создайте папку "music" в корне сайта',
    upload_step2: "Загрузите ваши MP3 файлы в эту папку",
    upload_step3: "Обновите пути к файлам в коде ниже",
    upload_step4: 'Добавьте обложки в папку "covers"',

    // Контакты
    contact_title: "Контакты",
    contact_heading: "Свяжитесь со мной",
    contact_desc: "Готов обсудить ваше мероприятие и создать незабываемую атмосферу!",
    social_heading: "Социальные сети",

    // Футер
    footer_copyright: "© 2024 DJ DAKE. Все права защищены.",

  
    // Telegram CTA
    telegram_cta_title: "Послушайте мои другие треки в моем Telegram канале",
    telegram_cta_desc: "Больше эксклюзивной музыки, ремиксов и новинок ждут вас в моем Telegram канале!",
    telegram_btn_text: "Перейти в Telegram",
  },

  en: {
    // Навигация
    nav_home: "Home",
    nav_about: "About",
    nav_achievements: "Achievements",
    nav_concerts: "Concerts",
    nav_music: "Music",
    nav_contact: "Contact",

    // Главная страница
    hero_subtitle: "Arranger • DJ • Musician",
    hero_cta: "Listen to Music",

    // О себе
    about_title: "About Me",
    about_heading: "Welcome to the World of Music!",
    about_p1:
      "DJ DAKE (Daulet Nurzhanov) is an arranger (sound producer) and DJ. He has arranged a number of songs by popular Kazakhstani pop stars (MuzArt, Altynai Zhorabaeva, Makpal Zhunisova, Dosymzhan Tanatarov, Baiterek group). DJ DAKE is a talented producer who has pushed the boundaries of ethno-pop and EDM on the modern Kazakh music scene.",
    about_stat1: "Years of Experience",
    about_stat2: "Events",
    about_stat3: "Tracks",


    // Концерты
    concerts_title: "Clips",
    concert1_title: "Summer Festival 2023",
    concert1_desc: "Main stage, 10,000+ audience",
    concert2_title: "Corporate Event",
    concert2_desc: "Collaboration with famous artist",
    concert3_title: 'Night Club "Star"',
    concert3_desc: "Weekly performances",
    concert3_date: "Every Friday",

    // Музыка
    music_title: "My Music",
    track1_title: "Auyldagy Aru Kyz",
    track2_title: "Ertegi Alemi",
    track3_title: "Iligai",
    track4_title: "Mahabbat",
    track5_title: "Jaina",
    track6_title: "Dombyra (remix)",
    track8_title: "Alqissa",

    // Загрузка музыки
    upload_title: "How to add music:",
    upload_step1: 'Create a "music" folder in the site root',
    upload_step2: "Upload your MP3 files to this folder",
    upload_step3: "Update file paths in the code below",
    upload_step4: 'Add covers to the "covers" folder',

    // Контакты
    contact_title: "Contact",
    contact_heading: "Get in Touch",
    contact_desc: "Ready to discuss your event and create an unforgettable atmosphere!",
    social_heading: "Social Media",

    // Футер
    footer_copyright: "© 2024 DJ DAKE. All rights reserved.",

  
    // Telegram CTA
    telegram_cta_title: "Listen to my other tracks on my Telegram channel",
    telegram_cta_desc: "More exclusive music, remixes and new releases are waiting for you on my Telegram channel!",
    telegram_btn_text: "Go to Telegram",
  },
}

// Текущий язык
let currentLanguage = "ru"

// Функция смены языка
function changeLanguage(lang) {
  currentLanguage = lang

  // Обновляем активную кнопку языка
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelector(`[data-lang-btn="${lang}"]`).classList.add("active")

  // Обновляем все элементы с переводами
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang")
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })

  // Сохраняем выбранный язык в localStorage
  localStorage.setItem("selectedLanguage", lang)
}

// Инициализация языка при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  // Загружаем сохраненный язык или используем русский по умолчанию
  const savedLanguage = localStorage.getItem("selectedLanguage") || "ru"
  changeLanguage(savedLanguage)

  // Добавляем обработчики для кнопок языков
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn")
      changeLanguage(lang)
    })
  })
})

// Навигация
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Закрытие меню при клике на ссылку
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Плавная прокрутка
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  })
}

// Обработка кликов по навигации
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})

// Изменение навигации при прокрутке
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(0, 0, 0, 0.95)"
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.9)"
  }
})

// Индивидуальные плееры для каждого трека
class IndividualTrackPlayer {
  constructor() {
    this.currentlyPlaying = null
    this.trackPlayers = new Map()
    this.init()
  }

  init() {
    const trackItems = document.querySelectorAll(".track-item")

    trackItems.forEach((trackItem, index) => {
      const audio = new Audio()
      const playBtn = trackItem.querySelector(".track-play-btn")
      const progressBar = trackItem.querySelector(".track-progress-bar")
      const progress = trackItem.querySelector(".track-progress")
      const currentTimeEl = trackItem.querySelector(".track-current-time")
      const totalTimeEl = trackItem.querySelector(".track-total-time")
      const volumeSlider = trackItem.querySelector(".track-volume-slider")

      // Создаем объект плеера для каждого трека
      const player = {
        audio,
        trackItem,
        playBtn,
        progressBar,
        progress,
        currentTimeEl,
        totalTimeEl,
        volumeSlider,
        isPlaying: false,
        index,
      }

      // Сохраняем плеер в Map
      this.trackPlayers.set(trackItem, player)

      // Настройка аудио
      const trackSrc = trackItem.dataset.src
      if (trackSrc && trackSrc !== "#") {
        audio.src = trackSrc
      }
      audio.volume = 0.5

      // Обработчики событий
      playBtn.addEventListener("click", () => this.togglePlay(player))
      progressBar.addEventListener("click", (e) => this.setProgress(e, player))
      volumeSlider.addEventListener("input", (e) => this.setVolume(e, player))

      // Обработчики аудио
      audio.addEventListener("timeupdate", () => this.updateProgress(player))
      audio.addEventListener("loadedmetadata", () => this.updateDuration(player))
      audio.addEventListener("ended", () => this.onTrackEnd(player))
      audio.addEventListener("play", () => this.onPlay(player))
      audio.addEventListener("pause", () => this.onPause(player))
    })
  }

  togglePlay(player) {
    // Останавливаем другие треки
    if (this.currentlyPlaying && this.currentlyPlaying !== player) {
      this.pauseTrack(this.currentlyPlaying)
    }

    if (player.isPlaying) {
      this.pauseTrack(player)
    } else {
      this.playTrack(player)
    }
  }

  playTrack(player) {
    if (player.audio.src && player.audio.src !== window.location.href) {
      player.audio.play().catch((e) => {
        console.log("Ошибка воспроизведения:", e)
        this.showTrackMessage(player, "Файл не найден или недоступен")
      })
    } else {
      this.showTrackMessage(player, "Аудиофайл не загружен")
    }
  }

  pauseTrack(player) {
    player.audio.pause()
  }

  onPlay(player) {
    player.isPlaying = true
    player.trackItem.classList.add("playing")
    player.playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    player.playBtn.classList.add("playing")
    this.currentlyPlaying = player
  }

  onPause(player) {
    player.isPlaying = false
    player.trackItem.classList.remove("playing")
    player.playBtn.innerHTML = '<i class="fas fa-play"></i>'
    player.playBtn.classList.remove("playing")
    if (this.currentlyPlaying === player) {
      this.currentlyPlaying = null
    }
  }

  onTrackEnd(player) {
    this.onPause(player)
    player.progress.style.width = "0%"
    player.currentTimeEl.textContent = "0:00"
  }

  setProgress(e, player) {
    const width = player.progressBar.clientWidth
    const clickX = e.offsetX
    const duration = player.audio.duration || 0

    if (duration > 0) {
      player.audio.currentTime = (clickX / width) * duration
    }
  }

  updateProgress(player) {
    const duration = player.audio.duration || 0
    const currentTime = player.audio.currentTime || 0

    if (duration > 0) {
      const progressPercent = (currentTime / duration) * 100
      player.progress.style.width = `${progressPercent}%`
    }

    this.updateTimeDisplay(currentTime, player.currentTimeEl)
  }

  updateDuration(player) {
    const duration = player.audio.duration || 0
    this.updateTimeDisplay(duration, player.totalTimeEl)
  }

  setVolume(e, player) {
    const volume = e.target.value / 100
    player.audio.volume = volume
  }

  updateTimeDisplay(time, timeEl) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    timeEl.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  showTrackMessage(player, message) {
    // Создаем временное уведомление
    const notification = document.createElement("div")
    notification.textContent = message
    notification.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 69, 69, 0.9);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 0.9rem;
    z-index: 1000;
    pointer-events: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `

    player.trackItem.style.position = "relative"
    player.trackItem.appendChild(notification)

    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 3000)
  }
}

// Инициализация индивидуальных плееров
document.addEventListener("DOMContentLoaded", () => {
  new IndividualTrackPlayer()
})

// Интерактивный фон, реагирующий на движение мыши
document.addEventListener("DOMContentLoaded", () => {
  const animatedBg = document.querySelector(".animated-bg")
  const musicNotes = document.querySelector(".music-notes")
  const particles = document.querySelector(".particles")
  const notes = document.querySelectorAll(".note")
  const particleElements = document.querySelectorAll(".particle")

  // Функция для обработки движения мыши
  document.addEventListener("mousemove", (e) => {
    // Получаем координаты мыши относительно центра экрана
    const mouseX = e.clientX / window.innerWidth - 0.5
    const mouseY = e.clientY / window.innerHeight - 0.5

    // Применяем эффект параллакса к фону
    animatedBg.style.transform = `translate(${mouseX * -20}px, ${mouseY * -20}px)`

    // Применяем эффект к нотам с разной интенсивностью
    musicNotes.style.transform = `translate(${mouseX * -30}px, ${mouseY * -30}px)`

    // Применяем эффект к частицам
    particles.style.transform = `translate(${mouseX * -40}px, ${mouseY * -40}px)`

    // Добавляем индивидуальное движение для каждой ноты
    notes.forEach((note, index) => {
      const factor = ((index % 3) + 1) * 10
      note.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`
    })

    // Добавляем индивидуальное движение для каждой частицы
    particleElements.forEach((particle, index) => {
      const factor = ((index % 4) + 1) * 15
      particle.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`
    })
  })

  // Добавляем поддержку для мобильных устройств через гироскоп
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (e) => {
      // Получаем наклон устройства
      const tiltX = e.gamma / 30 // Наклон влево-вправо (-90 до 90)
      const tiltY = e.beta / 30 // Наклон вперед-назад (-180 до 180)

      // Применяем эффекты только если есть данные гироскопа
      if (tiltX !== null && tiltY !== null) {
        // Применяем эффект параллакса к фону
        animatedBg.style.transform = `translate(${tiltX * -20}px, ${tiltY * -20}px)`

        // Применяем эффект к нотам
        musicNotes.style.transform = `translate(${tiltX * -30}px, ${tiltY * -30}px)`

        // Применяем эффект к частицам
        particles.style.transform = `translate(${tiltX * -40}px, ${tiltY * -40}px)`

        // Индивидуальное движение для нот и частиц
        notes.forEach((note, index) => {
          const factor = ((index % 3) + 1) * 10
          note.style.transform = `translate(${tiltX * factor}px, ${tiltY * factor}px)`
        })

        particleElements.forEach((particle, index) => {
          const factor = ((index % 4) + 1) * 15
          particle.style.transform = `translate(${tiltX * factor}px, ${tiltY * factor}px)`
        })
      }
    })
  }
})

// Функция открытия видео модального окна
// Обработчики для видео модального окна
// document.addEventListener("DOMContentLoaded", () => {
//   const videoModal = document.getElementById("videoModal")
//   const modalVideo = document.getElementById("modalVideo")
//   const videoClose = document.querySelector(".video-close")

//   // Закрытие модального окна
//   if (videoClose) {
//     videoClose.addEventListener("click", () => {
//       closeVideoModal()
//     })
//   }

//   // Закрытие при клике вне видео
//   if (videoModal) {
//     videoModal.addEventListener("click", (e) => {
//       if (e.target === videoModal) {
//         closeVideoModal()
//       }
//     })
//   }

//   // Закрытие по клавише Escape
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape" && videoModal.style.display === "block") {
//       closeVideoModal()
//     }
//   })

//   function closeVideoModal() {
//     if (modalVideo) {
//       modalVideo.pause()
//       modalVideo.currentTime = 0
//     }
//     if (videoModal) {
//       videoModal.style.display = "none"
//     }
//   }

//   // Обработка ошибок загрузки видео
//   if (modalVideo) {
//     modalVideo.addEventListener("error", () => {
//       console.log("Ошибка загрузки видео в модальном окне")
//     })

//     modalVideo.addEventListener("loadeddata", () => {
//       console.log("Видео успешно загружено в модальном окне")
//     })
//   }
// })

// Обработчики для модальных окон
document.addEventListener("DOMContentLoaded", () => {
  // Функция открытия модального окна
  window.openModal = (modalId) => {
    document.getElementById(modalId).style.display = "block"
  }

  // Закрытие модальных окон
  document.querySelectorAll(".close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
      e.target.closest(".modal").style.display = "none"
    })
  })

  // Закрытие при клике вне модального окна
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none"
    }
  })
})

// Обработчики для видеоплееров концертов
document.addEventListener("DOMContentLoaded", () => {
  const concertVideos = document.querySelectorAll(".concert-video")

  concertVideos.forEach((video, index) => {
    // Обработка ошибок загрузки видео
    video.addEventListener("error", () => {
      console.log(`Ошибка загрузки видео концерта ${index + 1}`)

      // Создаем заглушку при ошибке
      const container = video.closest(".concert-video-container")
      if (container && !container.querySelector(".video-error-message")) {
        const errorMessage = document.createElement("div")
        errorMessage.className = "video-error-message"
        errorMessage.innerHTML = `
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 69, 69, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            text-align: center;
            font-size: 0.9rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 10;
          ">
            <i class="fas fa-exclamation-triangle" style="margin-bottom: 8px; display: block;"></i>
            Видеофайл не найден<br>
            <small>Загрузите видео в папку videos/</small>
          </div>
        `
        container.appendChild(errorMessage)
      }
    })

    // Обработка успешной загрузки
    video.addEventListener("loadeddata", () => {
      console.log(`Видео концерта ${index + 1} успешно загружено`)
    })

    // Пауза других видео при воспроизведении
    video.addEventListener("play", () => {
      concertVideos.forEach((otherVideo) => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause()
        }
      })
    })
  })
})

// Обработчики для видео в секции О себе
document.addEventListener("DOMContentLoaded", () => {
  const profileVideo = document.querySelector(".profile-video")
  const concertVideos = document.querySelectorAll(".concert-video")

  if (profileVideo) {
    // Обработка ошибок загрузки видео
    profileVideo.addEventListener("error", () => {
      console.log("Ошибка загрузки видео в секции О себе")

      const container = profileVideo.closest(".video-container")
      if (container && !container.querySelector(".video-error-message")) {
        const errorMessage = document.createElement("div")
        errorMessage.className = "video-error-message"
        errorMessage.innerHTML = `
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 69, 69, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            text-align: center;
            font-size: 0.9rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 10;
          ">
            <i class="fas fa-exclamation-triangle" style="margin-bottom: 8px; display: block;"></i>
            Видеофайл не найден<br>
            <small>Загрузите djdakevideo.mp4 в корень сайта</small>
          </div>
        `
        container.appendChild(errorMessage)
      }
    })

    // Обработка успешной загрузки
    profileVideo.addEventListener("loadeddata", () => {
      console.log("Видео в секции О себе успешно загружено")
    })

    // Пауза видео концертов при воспроизведении видео О себе
    profileVideo.addEventListener("play", () => {
      concertVideos.forEach((video) => {
        if (!video.paused) {
          video.pause()
        }
      })
    })
  }
})
