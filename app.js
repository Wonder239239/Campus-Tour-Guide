const texts = {
  zh: {
    heroTag: "Campus Wayfinding Demo",
    heroTitle: "选择身份与语言，开始校园 AR 导览",
    heroText:
      "先查看校园地图，然后授权定位。系统会判断你是否已经靠近景点，并在到达后引导你进入 AR 讲解。",
    roleLabel: "身份",
    student: "学生",
    visitor: "访客",
    languageLabel: "语言",
    startTourBtn: "开始导览",
    selectionHint: "请先选择身份与语言。",
    mapKicker: "Campus Map",
    flowKicker: "Live Tour Status",
    mapTitle: "校园地图",
    flowTitle: "导览状态",
    locateTitle: "等待开始定位",
    locateBody: "点击“开始导览”后，网页会请求定位权限并检测你与校园景点的距离。",
    arrivalTitle: "未到达景点",
    arrivalBody: "定位完成后，这里会显示最近景点与当前距离。",
    promptBadge: "Arrival Detected",
    promptTitle: "你已到达图书馆",
    promptBody: "点击下方按钮，进入 AR 讲解页面。",
    enterArBtn: "进入 AR 讲解",
    retryBtn: "重新定位",
    demoArrivalBtn: "模拟靠近最近景点",
    cameraKicker: "AR Storytelling",
    cameraTitle: "相机讲解页",
    backBtn: "返回首页",
    narrationLabel: "Now Playing",
    narrationTitle: "图书馆 AR 讲解",
    narrationBody: "欢迎来到图书馆，这里集合了纸质馆藏、数字学习资源和开放自习区。",
    playAudioBtn: "播放讲解",
    stopAudioBtn: "停止语音",
    permissionPending: "正在请求定位权限，请允许浏览器访问你的位置。",
    locating: "定位成功，正在判断你是否靠近校园景点。",
    noNearby: (name, meters) => `你当前离 ${name} 约 ${meters} 米。可重新定位，或用演示模式继续流程。`,
    nearby: (name) => `你已到达${name}，点击进入 AR 讲解。`,
    locationDenied: "未获取到定位权限。请允许定位后重试，或使用演示模式查看效果。",
    cameraDenied: "无法打开相机，将显示演示背景，但 3D 小人与语音仍可播放。",
    tourReady: (role) => `${role === "student" ? "学生" : "访客"} 模式已启用，可以开始导览。`,
    roleRequired: "请选择身份后再开始。",
    library: "图书馆",
    garden: "中央草坪",
    hall: "访客中心",
    speech: (role) =>
      `欢迎来到校园图书馆。这里是${role === "student" ? "学生学习与借阅" : "校园参观与信息了解"}的重要空间，包含数字资源区、协作学习区与静音阅读区。现在你看到的三维讲解员会继续带你完成 AR 导览。`
  },
  en: {
    heroTag: "Campus Wayfinding Demo",
    heroTitle: "Choose a role and language to start the campus AR guide",
    heroText:
      "View the campus map first, then allow location access. The system checks whether you are close to a point of interest and opens the AR explanation when you arrive.",
    roleLabel: "Role",
    student: "Student",
    visitor: "Visitor",
    languageLabel: "Language",
    startTourBtn: "Start Tour",
    selectionHint: "Choose a role and language first.",
    mapKicker: "Campus Map",
    flowKicker: "Live Tour Status",
    mapTitle: "Campus Map",
    flowTitle: "Guide Status",
    locateTitle: "Waiting to request location",
    locateBody: "After you press Start Tour, the page asks for location permission and checks your distance from campus landmarks.",
    arrivalTitle: "No landmark reached yet",
    arrivalBody: "The nearest point of interest and distance will appear here after location is confirmed.",
    promptBadge: "Arrival Detected",
    promptTitle: "You have arrived at the Library",
    promptBody: "Tap below to enter the AR explanation page.",
    enterArBtn: "Open AR Explanation",
    retryBtn: "Try Location Again",
    demoArrivalBtn: "Simulate nearby arrival",
    cameraKicker: "AR Storytelling",
    cameraTitle: "Camera Guide Page",
    backBtn: "Back to Home",
    narrationLabel: "Now Playing",
    narrationTitle: "Library AR Narration",
    narrationBody: "Welcome to the library, home to print collections, digital resources, and open study zones.",
    playAudioBtn: "Play Narration",
    stopAudioBtn: "Stop Audio",
    permissionPending: "Requesting location permission. Please allow browser access to your position.",
    locating: "Location received. Checking whether you are close to a campus landmark.",
    noNearby: (name, meters) => `You are about ${meters} meters away from ${name}. Retry location or continue with demo mode.`,
    nearby: (name) => `You have arrived at ${name}. Tap to enter the AR explanation.`,
    locationDenied: "Location permission was not granted. Please retry or use demo mode to preview the flow.",
    cameraDenied: "Camera access failed. A fallback background is shown, but the 3D guide and narration still work.",
    tourReady: (role) => `${role === "student" ? "Student" : "Visitor"} mode is active. You can start the tour.`,
    roleRequired: "Select a role before starting the tour.",
    library: "Library",
    garden: "Central Lawn",
    hall: "Visitor Center",
    speech: (role) =>
      `Welcome to the campus library. This space supports ${role === "student" ? "study, borrowing, and collaboration" : "campus visits and orientation"}, with digital media zones, quiet reading areas, and flexible learning tables. Your 3D guide will now continue the AR explanation.`
  }
};

const pois = [
  { id: "library", nameKey: "library", lat: 53.76284, lon: -2.70489, radius: 120 },
  { id: "garden", nameKey: "garden", lat: 53.76328, lon: -2.70621, radius: 100 },
  { id: "hall", nameKey: "hall", lat: 53.76236, lon: -2.70703, radius: 110 }
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
      "radial-gradient(circle at top, rgba(15, 118, 110, 0.32), transparent 30%), linear-gradient(180deg, #10252b, #05090b)";
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
  const utterance = new SpeechSynthesisUtterance(texts[state.language].speech(state.role));
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
