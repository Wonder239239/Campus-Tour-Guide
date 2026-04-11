const texts = {
  zh: {
    heroTag: "XJTLU Campus Guide",
    heroTitle: "西交利物浦大学智慧校园 AR 导览系统",
    heroText:
      "本系统面向校园参观与信息导览场景设计。用户将依次完成语言选择、身份确认、地图定位与 AR 讲解体验，在到达目标建筑后自动进入沉浸式介绍页面。",
    languageLabel: "语言",
    goRoleBtn: "进入注册",
    registerKicker: "Supabase Authentication",
    registerTitle: "创建账户",
    registerText: "请先完成注册，再进入后续校园导览流程。",
    registerModeBtn: "注册",
    loginModeBtn: "登录",
    nameLabel: "用户名",
    passwordLabel: "密码",
    confirmPasswordLabel: "确认密码",
    registerStatus: "请输入用户名和密码，然后创建账户。",
    registerLoading: "正在创建账户，请稍候。",
    registerSubmitBtn: "注册并继续",
    loginTitle: "登录账户",
    loginText: "已注册用户可直接登录，然后进入后续校园导览流程。",
    loginStatus: "请输入用户名和密码后登录。",
    loginLoading: "正在登录，请稍候。",
    loginSubmitBtn: "登录并继续",
    loginEmpty: "请输入用户名和密码。",
    loginSuccess: "登录成功，现在进入身份选择页面。",
    backToIntroFromRegisterBtn: "返回语言页",
    registerEmpty: "请完整填写用户名、密码和确认密码。",
    registerMismatch: "两次输入的密码不一致。",
    registerWeak: "密码长度至少需要 6 位。",
    registerSuccess: "注册成功，现在进入身份选择页面。",
    authNotReady: "Supabase 尚未配置完成。请先在 supabase-config.js 中填写你自己的项目参数。",
    usernameTaken: "该用户名已被占用，请更换一个用户名。",
    invalidCredentials: "用户名不存在，或密码不正确。",
    registerFailed: (message) => `注册失败：${message}`,
    roleSaving: "正在保存身份信息，请稍候。",
    roleSaveFailed: (message) => `身份保存失败：${message}`,
    roleLoaded: (role) => `已读取你的身份：${role === "student" ? "学生" : "访客"}。系统将直接进入地图定位页面。`,
    roleKicker: "User Identity",
    roleTitle: "请选择用户身份",
    roleText: "系统将根据不同用户类型展示统一的导览流程，并在下一步进入校园地图与实时定位页面。",
    student: "学生",
    visitor: "访客",
    selectionHint: "请选择身份后继续。",
    roleReady: (role) => `当前身份：${role === "student" ? "学生" : "访客"}。可进入地图定位阶段。`,
    backToIntroBtn: "返回注册页",
    goMapBtn: "进入地图定位",
    mapKicker: "XJTLU SIP Campus",
    mapTitle: "校园地图与实时定位",
    backToRoleBtn: "返回身份页",
    library: "西浦图书馆",
    garden: "西浦博物馆",
    hall: "南校区体育中心",
    mapStatusLine: "点击“启动实时定位”后，系统将获取当前位置并持续判断你与目标建筑的距离。",
    startLocationBtn: "启动实时定位",
    demoArrivalBtn: "演示模式：直接进入 AR",
    cameraKicker: "AR Storytelling",
    cameraTitle: "虚拟讲解页面",
    backToMapBtn: "返回地图定位页",
    narrationLabel: "Audio Guide",
    playAudioBtn: "重新播放讲解",
    stopAudioBtn: "停止讲解",
    motionEnabled: "体感控制已开启，虚拟人会跟随手机轻微倾斜。",
    motionDenied: "设备未授予体感权限，无法启用倾斜跟随。",
    motionUnsupported: "当前设备或浏览器不支持体感倾斜控制。",
    scanKicker: "OCR Trigger",
    scanTitle: "扫描建筑标示牌",
    scanSignBtn: "扫描标示牌",
    ocrStatus: "点击下方按钮打开扫描模式。系统会通过 OCR 自动识别标示牌文字，并触发对应建筑的讲解动画。",
    scanOverlayText: "请将建筑标示牌置于扫描框内，系统会自动进行 OCR 识别。",
    closeScanBtn: "关闭扫描",
    ocrProcessing: "正在识别标示牌文字，请稍候。",
    ocrNoMatch: "未识别到可匹配的建筑名称。请尽量让标示牌文字更清晰。",
    ocrMatched: (name) => `OCR 识别成功，已匹配到${name}，正在切换对应讲解与动画。`,
    requestingLocation: "正在请求定位权限，请允许浏览器访问当前设备位置。",
    locating: "定位成功，系统正在判断你是否已进入目标建筑识别范围。",
    noNearby: (name, meters) => `当前距离 ${name} 约 ${meters} 米。请继续靠近目标建筑，或使用演示模式直接进入 AR 页面。`,
    arrived: (name) => `识别成功：你已到达${name}，系统正在打开 AR 讲解页面。`,
    locationDenied: "未获取到定位权限。请在浏览器中允许定位访问后重试，或使用演示模式继续展示。"
  },
  en: {
    heroTag: "XJTLU Campus Guide",
    heroTitle: "XJTLU Smart Campus AR Guide System",
    heroText:
      "This system is designed for campus visiting and information guidance scenarios. Users proceed through language selection, identity confirmation, map-based positioning, and AR explanation, then automatically enter an immersive building introduction page upon arrival.",
    languageLabel: "Language",
    goRoleBtn: "Go To Registration",
    registerKicker: "Supabase Authentication",
    registerTitle: "Create Your Account",
    registerText: "Register before entering the campus guide flow.",
    registerModeBtn: "Register",
    loginModeBtn: "Login",
    nameLabel: "Username",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm Password",
    registerStatus: "Enter a username and password to create your account.",
    registerLoading: "Creating account. Please wait.",
    registerSubmitBtn: "Register And Continue",
    loginTitle: "Sign In To Your Account",
    loginText: "Existing users can sign in directly and continue to the campus guide flow.",
    loginStatus: "Enter your username and password to sign in.",
    loginLoading: "Signing in. Please wait.",
    loginSubmitBtn: "Login And Continue",
    loginEmpty: "Please enter your username and password.",
    loginSuccess: "Login succeeded. Continue to identity selection.",
    backToIntroFromRegisterBtn: "Back To Language",
    registerEmpty: "Please complete username, password, and confirm password.",
    registerMismatch: "The two passwords do not match.",
    registerWeak: "Password must be at least 6 characters long.",
    registerSuccess: "Registration succeeded. Continue to identity selection.",
    authNotReady: "Supabase is not configured yet. Replace the placeholder values in supabase-config.js first.",
    usernameTaken: "This username is already taken. Please choose another one.",
    invalidCredentials: "The username does not exist, or the password is incorrect.",
    registerFailed: (message) => `Registration failed: ${message}`,
    roleSaving: "Saving your identity. Please wait.",
    roleSaveFailed: (message) => `Failed to save identity: ${message}`,
    roleLoaded: (role) => `Your saved identity is ${role === "student" ? "Student" : "Visitor"}. Opening the map page directly.`,
    roleKicker: "User Identity",
    roleTitle: "Select User Identity",
    roleText: "The system presents a unified guidance flow for different user groups and then enters the campus map and live positioning page.",
    student: "Student",
    visitor: "Visitor",
    selectionHint: "Please select an identity before continuing.",
    roleReady: (role) => `Current identity: ${role === "student" ? "Student" : "Visitor"}. You can proceed to map positioning.`,
    backToIntroBtn: "Back To Registration",
    goMapBtn: "Enter Map Positioning",
    mapKicker: "XJTLU SIP Campus",
    mapTitle: "Campus Map And Live Positioning",
    backToRoleBtn: "Back To Identity",
    library: "XJTLU Library",
    garden: "XJTLU Museum",
    hall: "South Campus Sports Centre",
    mapStatusLine: "After starting live positioning, the system gets the current location and continuously evaluates your distance from the target building.",
    startLocationBtn: "Start Live Positioning",
    demoArrivalBtn: "Demo Mode: Enter AR Directly",
    cameraKicker: "AR Storytelling",
    cameraTitle: "Virtual Guide Explanation Page",
    backToMapBtn: "Back To Positioning Page",
    narrationLabel: "Audio Guide",
    playAudioBtn: "Replay Narration",
    stopAudioBtn: "Stop Narration",
    motionEnabled: "Motion control is enabled. The virtual guide now tilts gently with your phone.",
    motionDenied: "Motion permission was not granted, so tilt-follow cannot be enabled.",
    motionUnsupported: "This device or browser does not support motion-based tilt control.",
    scanKicker: "OCR Trigger",
    scanTitle: "Scan Building Sign",
    scanSignBtn: "Scan Sign",
    ocrStatus:
      "Tap the button below to open scan mode. OCR text recognition runs automatically and triggers the matching building explanation animation.",
    scanOverlayText: "Align the building sign inside the frame. OCR scanning runs automatically.",
    closeScanBtn: "Close Scan",
    ocrProcessing: "Recognizing sign text. Please wait.",
    ocrNoMatch: "No matching building name was recognized. Try to make the sign text clearer.",
    ocrMatched: (name) => `OCR matched ${name}. Switching to the corresponding explanation and animation.`,
    requestingLocation: "Requesting location permission. Please allow the browser to access the current device position.",
    locating: "Location received. The system is checking whether you have entered the recognition range of the target building.",
    noNearby: (name, meters) => `You are about ${meters} meters away from ${name}. Please continue approaching the target building, or use demo mode to enter the AR page directly.`,
    arrived: (name) => `Recognition successful: you have arrived at ${name}. The system is now opening the AR explanation page.`,
    locationDenied: "Location permission was not granted. Please allow location access in the browser and try again, or use demo mode to continue the presentation."
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
  language: "en",
  authMode: "register",
  activePoi: pois[0],
  currentStream: null,
  registeredUser: null
};

const elements = {
  introScreen: document.getElementById("introScreen"),
  registerScreen: document.getElementById("registerScreen"),
  roleScreen: document.getElementById("roleScreen"),
  mapScreen: document.getElementById("mapScreen"),
  arScreen: document.getElementById("arScreen"),
  languageSelect: document.getElementById("languageSelect"),
  goRoleBtn: document.getElementById("goRoleBtn"),
  registerForm: document.getElementById("registerForm"),
  registerModeBtn: document.getElementById("registerModeBtn"),
  loginModeBtn: document.getElementById("loginModeBtn"),
  nameField: document.getElementById("nameField"),
  nameInput: document.getElementById("nameInput"),
  passwordInput: document.getElementById("passwordInput"),
  confirmPasswordField: document.getElementById("confirmPasswordField"),
  confirmPasswordInput: document.getElementById("confirmPasswordInput"),
  registerStatus: document.getElementById("registerStatus"),
  backToIntroFromRegisterBtn: document.getElementById("backToIntroFromRegisterBtn"),
  registerSubmitBtn: document.getElementById("registerSubmitBtn"),
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
  mapStatusLine: document.getElementById("mapStatusLine"),
  backToMapBtn: document.getElementById("backToMapBtn"),
  avatarCard: document.getElementById("avatarCard"),
  avatarViewer: document.getElementById("avatarViewer"),
  scanSignBtn: document.getElementById("scanSignBtn"),
  ocrStatus: document.getElementById("ocrStatus"),
  scanOverlay: document.getElementById("scanOverlay"),
  scanVideo: document.getElementById("scanVideo"),
  scanCanvas: document.getElementById("scanCanvas"),
  scanOverlayText: document.getElementById("scanOverlayText"),
  closeScanBtn: document.getElementById("closeScanBtn"),
  playAudioBtn: document.getElementById("playAudioBtn"),
  stopAudioBtn: document.getElementById("stopAudioBtn")
};

let map;
let userMarker;
let watchId = null;
let motionEnabled = false;
let scanStream = null;
let scanIntervalId = null;
let scanBusy = false;

const translatableIds = [
  "heroTag",
  "heroTitle",
  "heroText",
  "languageLabel",
  "goRoleBtn",
  "registerKicker",
  "registerTitle",
  "registerText",
  "registerModeBtn",
  "loginModeBtn",
  "nameLabel",
  "passwordLabel",
  "confirmPasswordLabel",
  "backToIntroFromRegisterBtn",
  "registerSubmitBtn",
  "roleKicker",
  "roleTitle",
  "roleText",
  "selectionHint",
  "backToIntroBtn",
  "goMapBtn",
  "mapKicker",
  "mapTitle",
  "backToRoleBtn",
  "mapStatusLine",
  "startLocationBtn",
  "demoArrivalBtn",
  "cameraKicker",
  "cameraTitle",
  "backToMapBtn",
  "scanKicker",
  "scanTitle",
  "scanSignBtn",
  "scanOverlayText",
  "closeScanBtn",
  "ocrStatus",
  "playAudioBtn",
  "stopAudioBtn"
];

function showScreen(screen) {
  [elements.introScreen, elements.registerScreen, elements.roleScreen, elements.mapScreen, elements.arScreen].forEach((node) => {
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
  updateAvatarMode();
}

function updateAvatarMode() {
  elements.avatarCard.classList.remove("avatar-library", "avatar-garden", "avatar-hall");
  elements.avatarCard.classList.add(`avatar-${state.activePoi.id}`);
}

function applyTilt(beta = 0, gamma = 0) {
  const clampedGamma = Math.max(-18, Math.min(18, gamma));
  const clampedBeta = Math.max(-18, Math.min(18, beta - 45));
  elements.avatarCard.style.transform =
    `translate(-50%, -50%) rotateY(${(clampedGamma / 18) * 10}deg) rotateX(${(-clampedBeta / 18) * 8}deg)`;
}

function handleDeviceOrientation(event) {
  if (!motionEnabled) {
    return;
  }
  applyTilt(event.beta ?? 0, event.gamma ?? 0);
}

async function enableMotionControl() {
  const t = getCopy();

  if (typeof window === "undefined" || typeof window.DeviceOrientationEvent === "undefined") {
    return;
  }

  try {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      const result = await DeviceOrientationEvent.requestPermission();
      if (result !== "granted") {
        return;
      }
    }

    if (!motionEnabled) {
      window.addEventListener("deviceorientation", handleDeviceOrientation, true);
      motionEnabled = true;
    }

    elements.avatarCard.classList.add("motion-active");
    applyTilt(0, 0);
  } catch {
    return;
  }
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
  syncAuthModeUi();
  elements.selectionHint.textContent = state.role ? t.roleReady(state.role) : t.selectionHint;
  elements.ocrStatus.textContent = t.ocrStatus;
  updateNarration();
}

function syncAuthModeUi() {
  const t = getCopy();
  const isRegister = state.authMode === "register";

  elements.registerModeBtn.classList.toggle("active", isRegister);
  elements.loginModeBtn.classList.toggle("active", !isRegister);
  elements.nameField.classList.toggle("hidden", !isRegister);
  elements.confirmPasswordField.classList.toggle("hidden", !isRegister);

  document.getElementById("registerTitle").textContent = isRegister ? t.registerTitle : t.loginTitle;
  document.getElementById("registerText").textContent = isRegister ? t.registerText : t.loginText;
  elements.registerSubmitBtn.textContent = isRegister ? t.registerSubmitBtn : t.loginSubmitBtn;
  elements.registerStatus.textContent = isRegister ? t.registerStatus : t.loginStatus;
}

function setAuthMode(mode) {
  state.authMode = mode;
  syncAuthModeUi();
}

function getAuthErrorMessage(error) {
  const code = error?.code || "";
  const messages = {
    "auth/username-already-in-use": getCopy().usernameTaken,
    "23505": getCopy().usernameTaken,
    "email_exists": getCopy().usernameTaken,
    "auth/weak-password": state.language === "zh" ? "密码强度不足，请至少使用 6 位字符。" : "Password is too weak. Use at least 6 characters.",
    "auth/network-request-failed": state.language === "zh" ? "网络请求失败，请检查网络连接。" : "Network request failed. Check your connection.",
    "auth/invalid-credential": getCopy().invalidCredentials,
    "auth/user-not-found": getCopy().invalidCredentials,
    "auth/wrong-password": getCopy().invalidCredentials,
    "invalid_credentials": getCopy().invalidCredentials,
    "email_not_confirmed": state.language === "zh" ? "Supabase 邮箱确认尚未关闭，请在控制台关闭确认邮箱后再试。" : "Email confirmation is still enabled in Supabase. Disable email confirmation in the dashboard and try again."
  };
  return messages[code] || error?.message || "Unknown error.";
}

async function submitRegistration() {
  const t = getCopy();
  const name = elements.nameInput.value.trim();
  const password = elements.passwordInput.value;
  const isRegister = state.authMode === "register";
  const confirmPassword = elements.confirmPasswordInput.value;

  if (!window.authProviderState?.ready) {
    elements.registerStatus.textContent = window.authProviderState?.message || t.authNotReady;
    return;
  }

  if (isRegister) {
    if (!name || !password || !confirmPassword) {
      elements.registerStatus.textContent = t.registerEmpty;
      return;
    }

    if (password !== confirmPassword) {
      elements.registerStatus.textContent = t.registerMismatch;
      return;
    }

    if (password.length < 6) {
      elements.registerStatus.textContent = t.registerWeak;
      return;
    }
  } else if (!name || !password) {
    elements.registerStatus.textContent = t.loginEmpty;
    return;
  }

  elements.registerSubmitBtn.disabled = true;
  elements.registerStatus.textContent = isRegister ? t.registerLoading : t.loginLoading;

  try {
    const user = isRegister
      ? await window.authRegister({ name, password })
      : await window.authLogin({ name, password });
    state.registeredUser = user;
    const profile = typeof window.authGetProfile === "function" ? await window.authGetProfile(user.id) : null;

    if (profile?.role) {
      state.role = profile.role;
      elements.roleChips.forEach((chip) => chip.classList.toggle("active", chip.dataset.role === state.role));
      elements.registerStatus.textContent = t.roleLoaded(profile.role);
      showScreen(elements.mapScreen);
      renderMap();
    } else {
      elements.registerStatus.textContent = isRegister ? t.registerSuccess : t.loginSuccess;
      showScreen(elements.roleScreen);
    }
  } catch (error) {
    elements.registerStatus.textContent = t.registerFailed(getAuthErrorMessage(error));
  } finally {
    elements.registerSubmitBtn.disabled = false;
  }
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
  enableMotionControl();
  speakNarration();
}

function matchPoiFromText(rawText) {
  const text = rawText.toLowerCase().replace(/\s+/g, " ");
  const matchers = [
    { poi: pois[0], keywords: ["library", "xjtlu library", "图书馆", "西浦图书馆"] },
    { poi: pois[1], keywords: ["museum", "xjtlu museum", "博物馆", "西浦博物馆"] },
    { poi: pois[2], keywords: ["sports centre", "sports center", "sports", "体育中心", "南校区体育中心"] }
  ];

  return matchers.find((entry) => entry.keywords.some((keyword) => text.includes(keyword)))?.poi || null;
}

async function runOcrOnImage(file) {
  const t = getCopy();
  elements.ocrStatus.textContent = t.ocrProcessing;

  const lang = state.language === "zh" ? "eng+chi_sim" : "eng";
  let text = "";

  if (window.Tesseract?.recognize) {
    const result = await window.Tesseract.recognize(file, lang, {
      logger: (message) => {
        if (message.status === "recognizing text" && typeof message.progress === "number") {
          elements.ocrStatus.textContent = `${t.ocrProcessing} ${Math.round(message.progress * 100)}%`;
        }
      }
    });
    text = result.data.text || "";
  } else {
    elements.ocrStatus.textContent = t.ocrNoMatch;
    return;
  }

  const matchedPoi = matchPoiFromText(text);
  if (!matchedPoi) {
    elements.ocrStatus.textContent = `${t.ocrNoMatch} OCR: ${text.trim().slice(0, 80) || "N/A"}`;
    return;
  }

  state.activePoi = matchedPoi;
  updateNarration();
  elements.ocrStatus.textContent = t.ocrMatched(getCopy()[matchedPoi.nameKey]);
  speakNarration();
}

async function runOcrOnCanvas() {
  if (scanBusy || !window.Tesseract?.recognize) {
    return;
  }

  const { videoWidth, videoHeight } = elements.scanVideo;
  if (!videoWidth || !videoHeight) {
    return;
  }

  scanBusy = true;
  const t = getCopy();
  elements.ocrStatus.textContent = t.ocrProcessing;

  const canvas = elements.scanCanvas;
  const ctx = canvas.getContext("2d");
  const cropWidth = Math.round(videoWidth * 0.72);
  const cropHeight = Math.round(videoHeight * 0.18);
  const sx = Math.round((videoWidth - cropWidth) / 2);
  const sy = Math.round((videoHeight - cropHeight) / 2);

  canvas.width = cropWidth;
  canvas.height = cropHeight;
  ctx.drawImage(elements.scanVideo, sx, sy, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

  try {
    const lang = state.language === "zh" ? "eng+chi_sim" : "eng";
    const result = await window.Tesseract.recognize(canvas, lang);
    const text = result.data.text || "";
    const matchedPoi = matchPoiFromText(text);

    if (matchedPoi) {
      state.activePoi = matchedPoi;
      updateNarration();
      elements.ocrStatus.textContent = t.ocrMatched(getCopy()[matchedPoi.nameKey]);
      closeScanOverlay();
      speakNarration();
    }
  } finally {
    scanBusy = false;
  }
}

async function openScanOverlay() {
  const t = getCopy();
  if (!navigator.mediaDevices?.getUserMedia) {
    elements.ocrStatus.textContent = t.ocrNoMatch;
    return;
  }

  try {
    scanStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });

    elements.scanVideo.srcObject = scanStream;
    elements.scanOverlay.classList.remove("hidden");
    elements.scanOverlayText.textContent = t.scanOverlayText;

    if (scanIntervalId) {
      clearInterval(scanIntervalId);
    }

    scanIntervalId = window.setInterval(runOcrOnCanvas, 1800);
  } catch {
    elements.ocrStatus.textContent = t.ocrNoMatch;
  }
}

function closeScanOverlay() {
  if (scanIntervalId) {
    clearInterval(scanIntervalId);
    scanIntervalId = null;
  }

  if (scanStream) {
    scanStream.getTracks().forEach((track) => track.stop());
    scanStream = null;
  }

  elements.scanVideo.srcObject = null;
  elements.scanOverlay.classList.add("hidden");
}

function handleArrival(poi) {
  state.activePoi = poi;
  elements.mapStatusLine.textContent = getCopy().arrived(getCopy()[poi.nameKey]);
  setTimeout(() => {
    openArScreen(poi);
  }, 900);
}

function handleLocationSuccess(position) {
  const t = getCopy();
  const nearest = findNearestPoi(position.coords);
  elements.mapStatusLine.textContent = `${t.locating} ${position.coords.latitude.toFixed(5)}, ${position.coords.longitude.toFixed(5)}`;

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
    elements.mapStatusLine.textContent = t.noNearby(t[nearest.poi.nameKey], nearest.distance);
  }
}

function handleLocationError() {
  elements.mapStatusLine.textContent = getCopy().locationDenied;
}

function requestLocation() {
  renderMap();
  elements.mapStatusLine.textContent = getCopy().requestingLocation;

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
  showScreen(elements.registerScreen);
});

elements.registerModeBtn.addEventListener("click", () => setAuthMode("register"));
elements.loginModeBtn.addEventListener("click", () => setAuthMode("login"));
elements.backToIntroFromRegisterBtn.addEventListener("click", () => showScreen(elements.introScreen));
elements.registerSubmitBtn.addEventListener("click", submitRegistration);
elements.registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitRegistration();
});

elements.roleChips.forEach((chip) => {
  chip.addEventListener("click", () => setRole(chip.dataset.role));
});

elements.backToIntroBtn.addEventListener("click", () => showScreen(elements.registerScreen));

elements.goMapBtn.addEventListener("click", async () => {
  if (!state.role) {
    elements.selectionHint.textContent = getCopy().selectionHint;
    return;
  }

  if (state.registeredUser?.id && typeof window.authSaveProfile === "function") {
    elements.goMapBtn.disabled = true;
    elements.selectionHint.textContent = getCopy().roleSaving;

    try {
      await window.authSaveProfile({
        uid: state.registeredUser.id,
        role: state.role
      });
    } catch (error) {
      elements.selectionHint.textContent = getCopy().roleSaveFailed(getAuthErrorMessage(error));
      elements.goMapBtn.disabled = false;
      return;
    } finally {
      elements.goMapBtn.disabled = false;
    }
  }

  showScreen(elements.mapScreen);
  renderMap();
});

elements.backToRoleBtn.addEventListener("click", () => showScreen(elements.roleScreen));
elements.startLocationBtn.addEventListener("click", requestLocation);
elements.demoArrivalBtn.addEventListener("click", () => openArScreen(state.activePoi));
elements.scanSignBtn.addEventListener("click", openScanOverlay);
elements.closeScanBtn.addEventListener("click", closeScanOverlay);
elements.playAudioBtn.addEventListener("click", speakNarration);
elements.stopAudioBtn.addEventListener("click", () => window.speechSynthesis.cancel());
elements.backToMapBtn.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  closeScanOverlay();
  showScreen(elements.mapScreen);
  renderMap();
});

applyTranslations();
