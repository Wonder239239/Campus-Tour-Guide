const texts = {
  zh: {
    heroTag: "XJTLU Campus Guide",
    heroTitle: "西交利物浦大学智慧校园 AR 导览系统",
    heroText:
      "本系统面向校园参观与信息导览场景设计。用户将依次完成语言选择、身份确认、地图定位与 AR 讲解体验，在到达目标建筑后自动进入沉浸式介绍页面。",
    languageLabel: "语言",
    goRoleBtn: "开始体验",
    roleKicker: "User Identity",
    roleTitle: "请选择用户身份",
    roleText: "系统将根据不同用户类型展示统一的导览流程，并在下一步进入校园地图与实时定位页面。",
    student: "学生",
    visitor: "访客",
    selectionHint: "请选择身份后继续。",
    roleReady: (role) => `当前身份：${role === "student" ? "学生" : "访客"}。可进入地图定位阶段。`,
    backToIntroBtn: "返回语言页",
    goMapBtn: "进入地图定位",
    mapKicker: "XJTLU SIP Campus",
    mapTitle: "校园地图与实时定位",
    backToRoleBtn: "返回身份页",
    library: "西浦图书馆",
    garden: "西浦博物馆",
    hall: "南校区体育中心",
    locateTitle: "定位服务待启动",
    locateBody: "点击下方按钮后，系统将请求定位权限，并实时判断用户与目标建筑之间的距离。",
    arrivalTitle: "等待到达目标建筑",
    arrivalBody: "当用户进入西浦图书馆、西浦博物馆或南校区体育中心的识别范围时，系统将自动跳转到 AR 讲解页面。",
    startLocationBtn: "启动实时定位",
    demoArrivalBtn: "演示模式：直接进入 AR",
    cameraKicker: "AR Storytelling",
    cameraTitle: "AR 建筑讲解页面",
    backToMapBtn: "返回地图定位页",
    narrationLabel: "Audio Guide",
    playAudioBtn: "重新播放讲解",
    stopAudioBtn: "停止讲解",
    requestingLocation: "正在请求定位权限，请允许浏览器访问当前设备位置。",
    locating: "定位成功，系统正在判断你是否已进入目标建筑识别范围。",
    noNearby: (name, meters) => `当前距离 ${name} 约 ${meters} 米。请继续靠近目标建筑，或使用演示模式直接进入 AR 页面。`,
    arrived: (name) => `识别成功：你已到达${name}，系统正在打开 AR 讲解页面。`,
    locationDenied: "未获取到定位权限。请在浏览器中允许定位访问后重试，或使用演示模式继续展示。",
    cameraDenied: "相机暂未成功开启，当前将显示演示背景，但虚拟讲解员与语音讲解仍可继续播放。"
  },
  en: {
    heroTag: "XJTLU Campus Guide",
    heroTitle: "XJTLU Smart Campus AR Guide System",
    heroText:
      "This system is designed for campus visiting and information guidance scenarios. Users proceed through language selection, identity confirmation, map-based positioning, and AR explanation, then automatically enter an immersive building introduction page upon arrival.",
    languageLabel: "Language",
    goRoleBtn: "Start Experience",
    roleKicker: "User Identity",
    roleTitle: "Select User Identity",
    roleText: "The system presents a unified guidance flow for different user groups and then enters the campus map and live positioning page.",
    student: "Student",
    visitor: "Visitor",
    selectionHint: "Please select an identity before continuing.",
    roleReady: (role) => `Current identity: ${role === "student" ? "Student" : "Visitor"}. You can proceed to map positioning.`,
    backToIntroBtn: "Back To Language",
    goMapBtn: "Enter Map Positioning",
    mapKicker: "XJTLU SIP Campus",
    mapTitle: "Campus Map And Live Positioning",
    backToRoleBtn: "Back To Identity",
    library: "XJTLU Library",
    garden: "XJTLU Museum",
    hall: "South Campus Sports Centre",
    locateTitle: "Positioning service pending",
    locateBody: "Press the button below to request location permission. The system will then measure the distance between the user and the target building in real time.",
    arrivalTitle: "Waiting to reach the target building",
    arrivalBody: "When the user enters the recognition range of the Library, Museum, or South Campus Sports Centre, the system automatically jumps to the AR explanation page.",
    startLocationBtn: "Start Live Positioning",
    demoArrivalBtn: "Demo Mode: Enter AR Directly",
    cameraKicker: "AR Storytelling",
    cameraTitle: "AR Building Explanation Page",
    backToMapBtn: "Back To Positioning Page",
    narrationLabel: "Audio Guide",
    playAudioBtn: "Replay Narration",
    stopAudioBtn: "Stop Narration",
    requestingLocation: "Requesting location permission. Please allow the browser to access the current device position.",
    locating: "Location received. The system is checking whether you have entered the recognition range of the target building.",
    noNearby: (name, meters) => `You are about ${meters} meters away from ${name}. Please continue approaching the target building, or use demo mode to enter the AR page directly.`,
    arrived: (name) => `Recognition successful: you have arrived at ${name}. The system is now opening the AR explanation page.`,
    locationDenied: "Location permission was not granted. Please allow location access in the browser and try again, or use demo mode to continue the presentation.",
    cameraDenied: "The camera could not be started. A fallback background will be shown, while the virtual presenter and narration remain available."
  }
};

const poiNarration = {
  zh: {
    library: {
      title: "西浦图书馆 AR 讲解",
      body: "图书馆位于中心楼 3 至 10 层，是支持学习、教学与研究的重要空间。",
      speech: (role) =>
        `欢迎来到西交利物浦大学图书馆。根据西浦官网信息，图书馆位于中心楼三到十层，支持学习、教学与研究，并提供纸质馆藏、电子资源和开放学习区域。${role === "student" ? "如果你是学生，这里是自习、借阅和学术检索的核心场所。" : "如果你是访客，这里能帮助你快速感受西浦开放、国际化的学习环境。"}`
    },
    garden: {
      title: "西浦博物馆 AR 讲解",
      body: "西浦博物馆位于中心楼一层，以展览和文化活动呈现学校的发展历程与大学文化。",
      speech: (role) =>
        `欢迎来到西浦博物馆。根据西浦官网信息，博物馆位于中心楼一层，于二零一四年向公众开放，致力于展示学校在高等教育创新方面的探索、实践与标志性成果。${role === "student" ? "对学生来说，这里不仅是了解校园文化的入口，也是参与展览和跨学科活动的重要空间。" : "对访客来说，这里是最快了解西浦办学特色与校园精神的展示窗口。"}`
    },
    hall: {
      title: "南校区体育中心 AR 讲解",
      body: "南校区体育中心拥有攀岩墙、射箭区、跑道以及多类球场，是西浦校园活力的重要代表。",
      speech: (role) =>
        `欢迎来到西浦南校区体育中心。根据西浦官网信息，南校区拥有设施完善的体育空间，包括攀岩墙、射箭区、跑道、健身区域以及篮球、羽毛球、网球、壁球和高尔夫等多类场地。${role === "student" ? "这里是学生锻炼身体、参加社团和建立校园连接的重要场所。" : "这里也能让访客直观感受到西浦重视全面发展和校园活力的一面。"}`
    }
  },
  en: {
    library: {
      title: "XJTLU Library AR Narration",
      body: "The Library is located on floors 3 to 10 of the Central Building and supports learning, teaching, and research.",
      speech: (role) =>
        `Welcome to the XJTLU Library. According to the official university site, the Library is located on floors three to ten of the Central Building and supports learning, teaching, and research, with print collections, electronic resources, and open study areas. ${role === "student" ? "For students, it is one of the main spaces for study, borrowing, and academic discovery." : "For visitors, it offers a quick and clear impression of XJTLU's open and international learning environment."}`
    },
    garden: {
      title: "XJTLU Museum AR Narration",
      body: "The XJTLU Museum is on the ground floor of the Central Building and presents the University's journey and culture through exhibitions.",
      speech: (role) =>
        `Welcome to the XJTLU Museum. According to the official university site, the Museum is located on the ground floor of the Central Building and opened to the public in 2014. It showcases the University's exploration, practices, and landmark achievements in higher education innovation. ${role === "student" ? "For students, it is an important place to engage with campus culture and interdisciplinary activities." : "For visitors, it is one of the fastest ways to understand XJTLU's distinctive identity and educational vision."}`
    },
    hall: {
      title: "South Campus Sports Centre AR Narration",
      body: "The South Campus Sports Centre features a climbing wall, archery range, running track, fitness area, and multiple courts.",
      speech: (role) =>
        `Welcome to the XJTLU South Campus Sports Centre. According to the official university site, the South Campus includes an extensive sports facility with a climbing wall, archery range, running track, fitness area, and courts for basketball, badminton, tennis, squash, and more. ${role === "student" ? "For students, it is a key place for fitness, clubs, and campus community life." : "For visitors, it shows XJTLU's emphasis on whole-person development and vibrant campus life."}`
    }
  }
};

const pois = [
  { id: "library", nameKey: "library", lat: 31.2752, lon: 120.7419, radius: 160 },
  { id: "garden", nameKey: "garden", lat: 31.2748, lon: 120.7425, radius: 150 },
  { id: "hall", nameKey: "hall", lat: 31.2744, lon: 120.7432, radius: 170 }
];

const state = {
  role: "",
  language: "zh",
  activePoi: pois[0],
  currentStream: null
};

const elements = {
  introScreen: document.getElementById("introScreen"),
  roleScreen: document.getElementById("roleScreen"),
  mapScreen: document.getElementById("mapScreen"),
  arScreen: document.getElementById("arScreen"),
  languageSelect: document.getElementById("languageSelect"),
  goRoleBtn: document.getElementById("goRoleBtn"),
  roleChips: document.querySelectorAll("[data-role]"),
  studentChip: document.getElementById("studentChip"),
  visitorChip: document.getElementById("visitorChip"),
  selectionHint: document.getElementById("selectionHint"),
  backToIntroBtn: document.getElementById("backToIntroBtn"),
  goMapBtn: document.getElementById("goMapBtn"),
  backToRoleBtn: document.getElementById("backToRoleBtn"),
  startLocationBtn: document.getElementById("startLocationBtn"),
  demoArrivalBtn: document.getElementById("demoArrivalBtn"),
  leafletMap: document.getElementById("leafletMap"),
  locateTitle: document.getElementById("locateTitle"),
  locateBody: document.getElementById("locateBody"),
  arrivalTitle: document.getElementById("arrivalTitle"),
  arrivalBody: document.getElementById("arrivalBody"),
  backToMapBtn: document.getElementById("backToMapBtn"),
  arrivalBanner: document.getElementById("arrivalBanner"),
  cameraFeed: document.getElementById("cameraFeed"),
  narrationTitle: document.getElementById("narrationTitle"),
  narrationBody: document.getElementById("narrationBody"),
  playAudioBtn: document.getElementById("playAudioBtn"),
  stopAudioBtn: document.getElementById("stopAudioBtn")
};

let map;
let userMarker;
let watchId = null;

const translatableIds = [
  "heroTag",
  "heroTitle",
  "heroText",
  "languageLabel",
  "goRoleBtn",
  "roleKicker",
  "roleTitle",
  "roleText",
  "selectionHint",
  "backToIntroBtn",
  "goMapBtn",
  "mapKicker",
  "mapTitle",
  "backToRoleBtn",
  "locateTitle",
  "locateBody",
  "arrivalTitle",
  "arrivalBody",
  "startLocationBtn",
  "demoArrivalBtn",
  "cameraKicker",
  "cameraTitle",
  "backToMapBtn",
  "narrationLabel",
  "playAudioBtn",
  "stopAudioBtn"
];

function showScreen(screen) {
  [elements.introScreen, elements.roleScreen, elements.mapScreen, elements.arScreen].forEach((node) => {
    node.classList.add("hidden");
    node.classList.remove("screen-active");
  });
  screen.classList.remove("hidden");
  screen.classList.add("screen-active");
}

function getCopy() {
  return texts[state.language];
}

function getPoiNarration(poi = state.activePoi) {
  return poiNarration[state.language][poi.id];
}

function updateNarration() {
  const content = getPoiNarration();
  elements.narrationTitle.textContent = content.title;
  elements.narrationBody.textContent = content.body;
  elements.arrivalBanner.textContent = getCopy().arrived(getCopy()[state.activePoi.nameKey]);
}

function applyTranslations() {
  const t = getCopy();
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";

  translatableIds.forEach((id) => {
    const node = document.getElementById(id);
    if (!node) {
      return;
    }
    const valueMap = {
      poiLibrary: t.library,
      poiGarden: t.garden,
      poiHall: t.hall
    };
    node.textContent = valueMap[id] || t[id];
  });

  elements.studentChip.textContent = t.student;
  elements.visitorChip.textContent = t.visitor;
  elements.selectionHint.textContent = state.role ? t.roleReady(state.role) : t.selectionHint;
  updateNarration();
}

function setRole(role) {
  state.role = role;
  elements.roleChips.forEach((chip) => chip.classList.toggle("active", chip.dataset.role === role));
  elements.selectionHint.textContent = getCopy().roleReady(role);
}

function createMapIcon(className) {
  return L.divIcon({
    className: "",
    html: `<div class="${className}"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });
}

function renderMap() {
  if (!map) {
    map = L.map(elements.leafletMap, {
      zoomControl: true,
      attributionControl: true
    }).setView([31.2749, 120.7425], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
  }

  setTimeout(() => map.invalidateSize(), 150);
}

function haversineMeters(lat1, lon1, lat2, lon2) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadius = 6371000;
  const latDiff = toRadians(lat2 - lat1);
  const lonDiff = toRadians(lon2 - lon1);
  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(lonDiff / 2) ** 2;
  return Math.round(2 * earthRadius * Math.asin(Math.sqrt(a)));
}

function findNearestPoi(position) {
  return pois
    .map((poi) => ({
      poi,
      distance: haversineMeters(position.latitude, position.longitude, poi.lat, poi.lon)
    }))
    .sort((a, b) => a.distance - b.distance)[0];
}

async function startCameraFeed() {
  if (!navigator.mediaDevices?.getUserMedia) {
    elements.arrivalBanner.textContent = getCopy().cameraDenied;
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });
    state.currentStream = stream;
    elements.cameraFeed.srcObject = stream;
  } catch {
    elements.cameraFeed.srcObject = null;
    elements.arrivalBanner.textContent = getCopy().cameraDenied;
  }
}

function stopCameraFeed() {
  if (!state.currentStream) {
    return;
  }
  state.currentStream.getTracks().forEach((track) => track.stop());
  state.currentStream = null;
  elements.cameraFeed.srcObject = null;
}

function speakNarration() {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(getPoiNarration().speech(state.role));
  utterance.lang = state.language === "zh" ? "zh-CN" : "en-US";
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

async function openArScreen(poi) {
  state.activePoi = poi;
  updateNarration();
  showScreen(elements.arScreen);
  await startCameraFeed();
  speakNarration();
}

function handleArrival(poi) {
  state.activePoi = poi;
  elements.arrivalTitle.textContent = getCopy().arrived(getCopy()[poi.nameKey]);
  elements.arrivalBody.textContent = getCopy().arrived(getCopy()[poi.nameKey]);
  setTimeout(() => {
    openArScreen(poi);
  }, 900);
}

function handleLocationSuccess(position) {
  const t = getCopy();
  const nearest = findNearestPoi(position.coords);
  elements.locateTitle.textContent = t.locating;
  elements.locateBody.textContent = `${position.coords.latitude.toFixed(5)}, ${position.coords.longitude.toFixed(5)}`;

  const latLng = [position.coords.latitude, position.coords.longitude];
  if (!userMarker) {
    userMarker = L.marker(latLng, {
      icon: createMapIcon("map-user-dot")
    }).addTo(map);
  } else {
    userMarker.setLatLng(latLng);
  }
  map.flyTo(latLng, Math.max(map.getZoom(), 18), { duration: 0.8 });

  if (nearest.distance <= nearest.poi.radius) {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      watchId = null;
    }
    handleArrival(nearest.poi);
  } else {
    state.activePoi = nearest.poi;
    elements.arrivalTitle.textContent =
      state.language === "zh" ? `最近建筑：${t[nearest.poi.nameKey]}` : `Nearest building: ${t[nearest.poi.nameKey]}`;
    elements.arrivalBody.textContent = t.noNearby(t[nearest.poi.nameKey], nearest.distance);
    elements.demoArrivalBtn.classList.remove("hidden");
  }
}

function handleLocationError() {
  elements.locateTitle.textContent = getCopy().locationDenied;
  elements.locateBody.textContent = getCopy().requestingLocation;
  elements.demoArrivalBtn.classList.remove("hidden");
}

function requestLocation() {
  renderMap();
  elements.locateTitle.textContent = getCopy().requestingLocation;
  elements.locateBody.textContent = getCopy().locateBody;
  elements.demoArrivalBtn.classList.add("hidden");

  if (!navigator.geolocation) {
    handleLocationError();
    return;
  }

  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
  }

  watchId = navigator.geolocation.watchPosition(handleLocationSuccess, handleLocationError, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  });
}

elements.languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  applyTranslations();
});

elements.goRoleBtn.addEventListener("click", () => {
  showScreen(elements.roleScreen);
});

elements.roleChips.forEach((chip) => {
  chip.addEventListener("click", () => setRole(chip.dataset.role));
});

elements.backToIntroBtn.addEventListener("click", () => showScreen(elements.introScreen));

elements.goMapBtn.addEventListener("click", () => {
  if (!state.role) {
    elements.selectionHint.textContent = getCopy().selectionHint;
    return;
  }
  showScreen(elements.mapScreen);
  renderMap();
});

elements.backToRoleBtn.addEventListener("click", () => showScreen(elements.roleScreen));
elements.startLocationBtn.addEventListener("click", requestLocation);
elements.demoArrivalBtn.addEventListener("click", () => openArScreen(state.activePoi));
elements.playAudioBtn.addEventListener("click", speakNarration);
elements.stopAudioBtn.addEventListener("click", () => window.speechSynthesis.cancel());
elements.backToMapBtn.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  stopCameraFeed();
  showScreen(elements.mapScreen);
  renderMap();
});

applyTranslations();
