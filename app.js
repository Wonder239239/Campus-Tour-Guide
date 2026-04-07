const texts = {
  zh: {
    heroTag: "XJTLU Campus AR Guide",
    heroTitle: "选择身份与语言，开始西交利物浦大学 AR 导览",
    heroText:
      "先查看西交利物浦大学校园地图，然后授权定位。系统会判断你是否已经靠近校园景点，并在到达后引导你进入 AR 讲解。",
    roleLabel: "身份",
    student: "学生",
    visitor: "访客",
    languageLabel: "语言",
    startTourBtn: "开始导览",
    selectionHint: "请先选择身份与语言。",
    mapKicker: "XJTLU SIP Campus",
    flowKicker: "Live XJTLU Tour",
    mapTitle: "西交利物浦大学校园地图",
    flowTitle: "西浦导览状态",
    locateTitle: "等待开始定位",
    locateBody: "点击“开始导览”后，网页会请求定位权限并检测你与西浦校园景点的距离。",
    arrivalTitle: "未到达景点",
    arrivalBody: "定位完成后，这里会显示最近景点与当前距离。",
    promptBadge: "Arrival Detected",
    promptTitle: "你已到达西浦图书馆",
    promptBody: "点击下方按钮，进入 AR 讲解页面。",
    enterArBtn: "进入 AR 讲解",
    retryBtn: "重新定位",
    demoArrivalBtn: "模拟靠近最近景点",
    cameraKicker: "AR Storytelling",
    cameraTitle: "西浦 AR 讲解页",
    backBtn: "返回首页",
    narrationLabel: "Now Playing",
    narrationTitle: "西浦图书馆 AR 讲解",
    narrationBody: "欢迎来到西浦图书馆。这里位于中心楼内，集合了纸质馆藏、数字资源与开放学习空间。",
    playAudioBtn: "播放讲解",
    stopAudioBtn: "停止语音",
    permissionPending: "正在请求定位权限，请允许浏览器访问你的位置。",
    locating: "定位成功，正在判断你是否靠近西浦校园景点。",
    noNearby: (name, meters) => `你当前离 ${name} 约 ${meters} 米。可重新定位，或用演示模式继续流程。`,
    nearby: (name) => `你已到达${name}，点击进入 AR 讲解。`,
    locationDenied: "未获取到定位权限。请允许定位后重试，或使用演示模式查看效果。",
    cameraDenied: "无法打开相机，将显示演示背景，但 3D 小人与语音仍可播放。",
    tourReady: (role) => `${role === "student" ? "学生" : "访客"} 模式已启用，可以开始导览。`,
    roleRequired: "请选择身份后再开始。",
    library: "西浦图书馆",
    garden: "西浦博物馆",
    hall: "南校区体育中心"
  },
  en: {
    heroTag: "XJTLU Campus AR Guide",
    heroTitle: "Choose a role and language to start the XJTLU AR guide",
    heroText:
      "View the Xi'an Jiaotong-Liverpool University campus map first, then allow location access. The system checks whether you are close to a point of interest and opens the AR explanation when you arrive.",
    roleLabel: "Role",
    student: "Student",
    visitor: "Visitor",
    languageLabel: "Language",
    startTourBtn: "Start Tour",
    selectionHint: "Choose a role and language first.",
    mapKicker: "XJTLU SIP Campus",
    flowKicker: "Live XJTLU Tour",
    mapTitle: "XJTLU Campus Map",
    flowTitle: "XJTLU Guide Status",
    locateTitle: "Waiting to request location",
    locateBody: "After you press Start Tour, the page asks for location permission and checks your distance from XJTLU campus landmarks.",
    arrivalTitle: "No landmark reached yet",
    arrivalBody: "The nearest point of interest and distance will appear here after location is confirmed.",
    promptBadge: "Arrival Detected",
    promptTitle: "You have arrived at the XJTLU Library",
    promptBody: "Tap below to enter the AR explanation page.",
    enterArBtn: "Open AR Explanation",
    retryBtn: "Try Location Again",
    demoArrivalBtn: "Simulate nearby arrival",
    cameraKicker: "AR Storytelling",
    cameraTitle: "XJTLU AR Guide Page",
    backBtn: "Back to Home",
    narrationLabel: "Now Playing",
    narrationTitle: "XJTLU Library AR Narration",
    narrationBody: "Welcome to the XJTLU Library in the Central Building, home to print collections, digital resources, and open study zones.",
    playAudioBtn: "Play Narration",
    stopAudioBtn: "Stop Audio",
    permissionPending: "Requesting location permission. Please allow browser access to your position.",
    locating: "Location received. Checking whether you are close to an XJTLU campus landmark.",
    noNearby: (name, meters) => `You are about ${meters} meters away from ${name}. Retry location or continue with demo mode.`,
    nearby: (name) => `You have arrived at ${name}. Tap to enter the AR explanation.`,
    locationDenied: "Location permission was not granted. Please retry or use demo mode to preview the flow.",
    cameraDenied: "Camera access failed. A fallback background is shown, but the 3D guide and narration still work.",
    tourReady: (role) => `${role === "student" ? "Student" : "Visitor"} mode is active. You can start the tour.`,
    roleRequired: "Select a role before starting the tour.",
    library: "XJTLU Library",
    garden: "XJTLU Museum",
    hall: "South Campus Sports Centre"
  }
};

const poiNarration = {
  zh: {
    library: {
      title: "西浦图书馆 AR 讲解",
      body: "图书馆位于中心楼 3 至 10 层，是支持学习、教学与研究的重要空间。",
      speech: (role) =>
        `欢迎来到西交利物浦大学图书馆。根据西浦官网信息，图书馆位于中心楼三到十层，支持学习、教学与研究，并提供纸质馆藏、电子资源和开放学习区域。${role === "student" ? "如果你是学生，这里是自习、借阅和学术检索的核心场所。" : "如果你是访客，这里能帮助你快速感受西浦开放、国际化的学习环境。"}现在请跟随三维讲解员继续体验 AR 导览。`
    },
    garden: {
      title: "西浦博物馆 AR 讲解",
      body: "西浦博物馆位于中心楼一层，以展览和文化活动呈现学校的发展历程与大学文化。",
      speech: (role) =>
        `欢迎来到西浦博物馆。根据西浦官网信息，博物馆位于中心楼一层，于二零一四年向公众开放，致力于展示学校在高等教育创新方面的探索、实践与标志性成果。${role === "student" ? "对学生来说，这里不仅是了解校园文化的入口，也是参与展览和跨学科活动的重要空间。" : "对访客来说，这里是最快了解西浦办学特色与校园精神的展示窗口。"}现在请继续跟随三维讲解员。`
    },
    hall: {
      title: "南校区体育中心 AR 讲解",
      body: "南校区体育中心拥有攀岩墙、射箭区、跑道以及多类球场，是西浦校园活力的重要代表。",
      speech: (role) =>
        `欢迎来到西浦南校区体育中心。根据西浦官网信息，南校区拥有设施完善的体育空间，包括攀岩墙、射箭区、跑道、健身区域以及篮球、羽毛球、网球、壁球和高尔夫等多类场地。${role === "student" ? "这里是学生锻炼身体、参加社团和建立校园连接的重要场所。" : "这里也能让访客直观感受到西浦重视全面发展和校园活力的一面。"}现在请继续体验 AR 导览。`
    }
  },
  en: {
    library: {
      title: "XJTLU Library AR Narration",
      body: "The Library is located on floors 3 to 10 of the Central Building and supports learning, teaching, and research.",
      speech: (role) =>
        `Welcome to the XJTLU Library. According to the official university site, the Library is located on floors three to ten of the Central Building and supports learning, teaching, and research, with print collections, electronic resources, and open study areas. ${role === "student" ? "For students, it is one of the main spaces for study, borrowing, and academic discovery." : "For visitors, it offers a quick and clear impression of XJTLU's open and international learning environment."} Please continue the AR tour with your 3D guide.`
    },
    garden: {
      title: "XJTLU Museum AR Narration",
      body: "The XJTLU Museum is on the ground floor of the Central Building and presents the University's journey and culture through exhibitions.",
      speech: (role) =>
        `Welcome to the XJTLU Museum. According to the official university site, the Museum is located on the ground floor of the Central Building and opened to the public in 2014. It showcases the University's exploration, practices, and landmark achievements in higher education innovation. ${role === "student" ? "For students, it is an important place to engage with campus culture and interdisciplinary activities." : "For visitors, it is one of the fastest ways to understand XJTLU's distinctive identity and educational vision."} Please continue with the 3D guide.`
    },
    hall: {
      title: "South Campus Sports Centre AR Narration",
      body: "The South Campus Sports Centre features a climbing wall, archery range, running track, fitness area, and multiple courts.",
      speech: (role) =>
        `Welcome to the XJTLU South Campus Sports Centre. According to the official university site, the South Campus includes an extensive sports facility with a climbing wall, archery range, running track, fitness area, and courts for basketball, badminton, tennis, squash, and more. ${role === "student" ? "For students, it is a key place for fitness, clubs, and campus community life." : "For visitors, it shows XJTLU's emphasis on whole-person development and vibrant campus life."} Please continue the AR tour with your 3D guide.`
    }
  }
};

const pois = [
  // Demo geofences centered around the XJTLU SIP campus area.
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
  roleChips: document.querySelectorAll("[data-role]"),
  languageSelect: document.getElementById("languageSelect"),
  startTourBtn: document.getElementById("startTourBtn"),
  selectionHint: document.getElementById("selectionHint"),
  locateCard: document.getElementById("locateCard"),
  arrivalCard: document.getElementById("arrivalCard"),
  arrivalPrompt: document.getElementById("arrivalPrompt"),
  promptTitle: document.getElementById("promptTitle"),
  promptBody: document.getElementById("promptBody"),
  locateTitle: document.getElementById("locateTitle"),
  locateBody: document.getElementById("locateBody"),
  arrivalTitle: document.getElementById("arrivalTitle"),
  arrivalBody: document.getElementById("arrivalBody"),
  enterArBtn: document.getElementById("enterArBtn"),
  retryBtn: document.getElementById("retryBtn"),
  demoArrivalBtn: document.getElementById("demoArrivalBtn"),
  cameraPanel: document.getElementById("cameraPanel"),
  cameraFeed: document.getElementById("cameraFeed"),
  narrationTitle: document.getElementById("narrationTitle"),
  narrationBody: document.getElementById("narrationBody"),
  playAudioBtn: document.getElementById("playAudioBtn"),
  stopAudioBtn: document.getElementById("stopAudioBtn"),
  backBtn: document.getElementById("backBtn")
};

const translatableIds = [
  "heroTag",
  "heroTitle",
  "heroText",
  "roleLabel",
  "languageLabel",
  "startTourBtn",
  "selectionHint",
  "mapKicker",
  "flowKicker",
  "mapTitle",
  "flowTitle",
  "locateTitle",
  "locateBody",
  "arrivalTitle",
  "arrivalBody",
  "promptBadge",
  "promptTitle",
  "promptBody",
  "enterArBtn",
  "retryBtn",
  "demoArrivalBtn",
  "cameraKicker",
  "cameraTitle",
  "backBtn",
  "narrationLabel",
  "narrationTitle",
  "narrationBody",
  "playAudioBtn",
  "stopAudioBtn",
  "poiLibrary",
  "poiGarden",
  "poiHall",
  "legendLibrary"
];

function applyTranslations() {
  const t = texts[state.language];
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";

  translatableIds.forEach((id) => {
    const node = document.getElementById(id);
    if (!node) {
      return;
    }

    const valueMap = {
      poiLibrary: t.library,
      poiGarden: t.garden,
      poiHall: t.hall,
      legendLibrary: t.library
    };

    node.textContent = valueMap[id] || t[id];
  });

  const [studentChip, visitorChip] = elements.roleChips;
  studentChip.textContent = t.student;
  visitorChip.textContent = t.visitor;
  elements.selectionHint.textContent = state.role ? t.tourReady(state.role) : t.selectionHint;
  updateNarrationContent();
  if (!elements.arrivalPrompt.classList.contains("hidden")) {
    showArrival(state.activePoi);
  }
}

function setActiveRole(role) {
  state.role = role;
  elements.roleChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.role === role);
  });
  elements.selectionHint.textContent = texts[state.language].tourReady(role);
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

function updateStatus(step) {
  elements.locateCard.classList.toggle("active", step === "locating");
  elements.arrivalCard.classList.toggle("active", step === "arrival");
}

function getPoiNarration(poi = state.activePoi) {
  return poiNarration[state.language][poi.id];
}

function updateNarrationContent() {
  const content = getPoiNarration();
  elements.narrationTitle.textContent = content.title;
  elements.narrationBody.textContent = content.body;
}

function showArrival(poi) {
  const t = texts[state.language];
  state.activePoi = poi;
  elements.promptTitle.textContent =
    state.language === "zh" ? `你已到达${t[poi.nameKey]}` : `You have arrived at the ${t[poi.nameKey]}`;
  elements.promptBody.textContent = t.nearby(t[poi.nameKey]);
  elements.arrivalTitle.textContent = elements.promptTitle.textContent;
  elements.arrivalBody.textContent = t.promptBody;
  elements.arrivalPrompt.classList.remove("hidden");
  elements.demoArrivalBtn.classList.add("hidden");
  updateNarrationContent();
  updateStatus("arrival");
}

function showNoNearby(poi, distance) {
  const t = texts[state.language];
  state.activePoi = poi;
  elements.arrivalPrompt.classList.add("hidden");
  elements.arrivalTitle.textContent =
    state.language === "zh" ? `最近景点：${t[poi.nameKey]}` : `Nearest landmark: ${t[poi.nameKey]}`;
  elements.arrivalBody.textContent = t.noNearby(t[poi.nameKey], distance);
  elements.demoArrivalBtn.classList.remove("hidden");
  updateNarrationContent();
  updateStatus("arrival");
}

function findNearestPoi(position) {
  const distances = pois.map((poi) => ({
    poi,
    distance: haversineMeters(position.latitude, position.longitude, poi.lat, poi.lon)
  }));

  distances.sort((a, b) => a.distance - b.distance);
  return distances[0];
}

function handleLocationSuccess(position) {
  const coords = position.coords;
  const t = texts[state.language];
  elements.locateTitle.textContent = t.locating;
  elements.locateBody.textContent = `${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}`;

  const nearest = findNearestPoi(coords);
  if (nearest.distance <= nearest.poi.radius) {
    showArrival(nearest.poi);
  } else {
    showNoNearby(nearest.poi, nearest.distance);
  }
}

function handleLocationError() {
  const t = texts[state.language];
  elements.locateTitle.textContent = t.locationDenied;
  elements.locateBody.textContent = t.locateBody;
  elements.demoArrivalBtn.classList.remove("hidden");
  updateStatus("locating");
}

function requestLocation() {
  const t = texts[state.language];
  elements.locateTitle.textContent = t.permissionPending;
  elements.locateBody.textContent = t.locateBody;
  elements.arrivalPrompt.classList.add("hidden");
  updateStatus("locating");

  if (!navigator.geolocation) {
    handleLocationError();
    return;
  }

  navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  });
}

async function startCameraFeed() {
  if (!navigator.mediaDevices?.getUserMedia) {
    elements.selectionHint.textContent = texts[state.language].cameraDenied;
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });
    state.currentStream = stream;
    elements.cameraFeed.srcObject = stream;
  } catch (error) {
    elements.cameraFeed.srcObject = null;
    elements.cameraFeed.style.background =
      "radial-gradient(circle at top, rgba(166, 25, 46, 0.32), transparent 30%), linear-gradient(180deg, #10252b, #05090b)";
    elements.selectionHint.textContent = texts[state.language].cameraDenied;
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

async function enterArExperience() {
  elements.cameraPanel.classList.remove("hidden");
  await startCameraFeed();
  speakNarration();
  elements.cameraPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

elements.roleChips.forEach((chip) => {
  chip.addEventListener("click", () => setActiveRole(chip.dataset.role));
});

elements.languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  applyTranslations();
});

elements.startTourBtn.addEventListener("click", () => {
  if (!state.role) {
    elements.selectionHint.textContent = texts[state.language].roleRequired;
    return;
  }
  requestLocation();
});

elements.retryBtn.addEventListener("click", requestLocation);

elements.demoArrivalBtn.addEventListener("click", () => {
  showArrival(state.activePoi || pois[0]);
});

elements.enterArBtn.addEventListener("click", enterArExperience);
elements.playAudioBtn.addEventListener("click", speakNarration);
elements.stopAudioBtn.addEventListener("click", () => window.speechSynthesis.cancel());
elements.backBtn.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  stopCameraFeed();
  elements.cameraPanel.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

applyTranslations();
