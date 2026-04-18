const texts = {
  zh: {
    heroTag: "X·EasyGo",
    heroTitle: "欢迎使用 X·EasyGo",
    languageLabel: "语言",
    goRoleBtn: "进入注册",
    registerTitle: "创建账户",
    registerModeBtn: "注册",
    loginModeBtn: "登录",
    nameLabel: "用户名（3-16 位，仅支持字母和数字）",
    passwordLabel: "密码（至少 6 位）",
    confirmPasswordLabel: "确认密码",
    registerStatus: "请输入用户名和密码，然后创建账户。",
    registerLoading: "正在创建账户，请稍候。",
    registerSubmitBtn: "注册并继续",
    loginTitle: "登录账户",
    loginStatus: "请输入用户名和密码后登录。",
    loginLoading: "正在登录，请稍候。",
    loginSubmitBtn: "登录并继续",
    loginEmpty: "请输入用户名和密码。",
    loginSuccess: "登录成功，现在进入身份选择页面。",
    backToIntroFromRegisterBtn: "返回语言页",
    registerEmpty: "请完整填写用户名、密码和确认密码。",
    invalidUsername: "用户名需为 3-16 位，且只能包含字母和数字。",
    registerMismatch: "两次输入的密码不一致。",
    registerWeak: "密码长度至少需要 6 位。",
    registerSuccess: "注册成功，现在进入身份选择页面。",
    authNotReady: "Supabase 尚未配置完成。请先在 supabase-config.js 中填写你自己的项目参数。",
    usernameTaken: "该用户名已被占用，请更换一个用户名。",
    invalidCredentials: "用户名不存在，或密码不正确。",
    registerFailed: (message) => `注册失败：${message}`,
    roleSaving: "正在保存身份信息，请稍候。",
    roleSaveFailed: (message) => `身份保存失败：${message}`,
    roleLoaded: (role) => `已读取你的身份：${role === "student" ? "新生" : "访客"}。系统将直接进入地图定位页面。`,
    roleTitle: "请选择用户身份",
    student: "新生",
    visitor: "访客",
    selectionHint: "请选择身份后继续。",
    roleReady: (role) => `当前身份：${role === "student" ? "新生" : "访客"}。可进入地图定位阶段。`,
    backToIntroBtn: "返回注册页",
    goMapBtn: "进入功能页面",
  hubTitle: "功能入口 ✨",
  hubCampusMapBtn: "🗺️ Campus Map",
  hubStampBtn: "🏅 Stamp Collection",
  hubMessageBtn: "💬 留言",
  hubUserInfoBtn: "👤 User Information",
    mapKicker: "XJTLU SIP Campus",
    mapTitle: "校园地图与实时定位",
    library: "FB（Foundation Building）",
    garden: "CB（Central Building）",
    hall: "SD（Science Building D）",
    mapStatusLine: "",
    startLocationBtn: "启动实时定位",
    demoArrivalBtn: "演示模式：直接进入 AR",
    openStampBookBtn: "集章页面",
    arrivalKicker: "定位完成",
    arrivalTitle: "已到达目标地点",
    arrivalMessage: "即将进入讲解页面。",
    arrivalLocated: (name) => `已定位到 ${name}，下面进行讲解。`,
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
    scanTitle: "扫码集章",
    scanSignBtn: "扫描标示牌",
    openStampBookFromArBtn: "集章页面",
    ocrStatus: "点击开始扫描。",
    scanOverlayText: "扫描建筑标识牌以收集印章",
    scanDebugPrefix: "OCR 识别结果：",
    closeScanBtn: "关闭扫描",
    ocrProcessing: "正在识别标示牌文字，请稍候。",
    ocrNoMatch: "未识别到可匹配的建筑名称。请尽量让标示牌文字更清晰。",
    ocrMatched: (name) => `OCR 识别成功，已匹配到${name}，正在切换对应讲解与动画。`,
    stampKicker: "Stamp Collection",
    stampTitle: "我的校园集章册",
    backFromStampBtn: "返回",
    openLeaderboardBtn: "排行榜",
    leaderboardKicker: "集章排行榜",
    leaderboardTitle: "收集数量排行榜",
    backFromLeaderboardBtn: "返回",
    leaderboardRankHead: "排名",
    leaderboardUserHead: "用户名",
    leaderboardCountHead: "数量",
    leaderboardLoading: "正在加载排行榜。",
    leaderboardEmpty: "当前还没有可显示的收集记录。",
    leaderboardCount: (count) => `${count} 枚`,
    leaderboardLoadFailed: (message) => `排行榜加载失败：${message}`,
    stampNameCb: "CB 印章",
    stampNameSd: "SD 印章",
    stampNameFb: "FB 印章",
    stampLocked: "暂未收集",
    stampUnlocked: "已收集",
    stampSummary: (count) => `已收集 ${count} / 3 枚印章。`,
    stampCollected: (code) => `恭喜，已成功收集 ${code} 印章。`,
    stampAlreadyCollected: (code) => `${code} 印章已经收集过了。`,
    requestingLocation: "正在请求定位权限，请允许浏览器访问当前设备位置。",
    locating: "定位成功，系统正在判断你是否已进入目标建筑识别范围。",
    noNearby: () => "实时定位中",
    arrived: (name) => `已进入 ${name} 范围，系统正在播放讲解。`,
    locationDenied: "未获取到定位权限。请打开浏览器的站点设置或系统设置，将此网页的位置权限改为允许后重试；也可以先使用演示模式继续展示。"
  },
  en: {
    heroTag: "X·EasyGo",
    heroTitle: "Welcome to X·EasyGo",
    languageLabel: "Language",
    goRoleBtn: "Go To Registration",
    registerTitle: "Create Your Account",
    registerModeBtn: "Register",
    loginModeBtn: "Login",
    nameLabel: "Username (3-16 letters or numbers)",
    passwordLabel: "Password (at least 6 characters)",
    confirmPasswordLabel: "Confirm Password",
    registerStatus: "Enter a username and password to create your account.",
    registerLoading: "Creating account. Please wait.",
    registerSubmitBtn: "Register And Continue",
    loginTitle: "Sign In To Your Account",
    loginStatus: "Enter your username and password to sign in.",
    loginLoading: "Signing in. Please wait.",
    loginSubmitBtn: "Login And Continue",
    loginEmpty: "Please enter your username and password.",
    loginSuccess: "Login succeeded. Continue to identity selection.",
    backToIntroFromRegisterBtn: "Back To Language",
    registerEmpty: "Please complete username, password, and confirm password.",
    invalidUsername: "Username must be 3-16 characters and contain only letters and numbers.",
    registerMismatch: "The two passwords do not match.",
    registerWeak: "Password must be at least 6 characters long.",
    registerSuccess: "Registration succeeded. Continue to identity selection.",
    authNotReady: "Supabase is not configured yet. Replace the placeholder values in supabase-config.js first.",
    usernameTaken: "This username is already taken. Please choose another one.",
    invalidCredentials: "The username does not exist, or the password is incorrect.",
    registerFailed: (message) => `Registration failed: ${message}`,
    roleSaving: "Saving your identity. Please wait.",
    roleSaveFailed: (message) => `Failed to save identity: ${message}`,
    roleLoaded: (role) => `Your saved identity is ${role === "student" ? "New Student" : "Visitor"}. Opening the map page directly.`,
    roleTitle: "Select User Identity",
    student: "New Student",
    visitor: "Visitor",
    selectionHint: "Please select an identity before continuing.",
    roleReady: (role) => `Current identity: ${role === "student" ? "New Student" : "Visitor"}. You can proceed to map positioning.`,
    backToIntroBtn: "Back To Registration",
    goMapBtn: "Enter Service Hub",
  hubTitle: "Service Hub ✨",
  hubCampusMapBtn: "🗺️ Campus Map",
  hubStampBtn: "🏅 Stamp Collection",
  hubMessageBtn: "💬 Message",
  hubUserInfoBtn: "👤 User Information",
    mapKicker: "XJTLU SIP Campus",
    mapTitle: "Campus Map And Live Positioning",
    library: "FB (Foundation Building)",
    garden: "CB (Central Building)",
    hall: "SD (Science Building D)",
    mapStatusLine: "",
    startLocationBtn: "Start Live Positioning",
    demoArrivalBtn: "Demo Mode: Enter AR Directly",
    openStampBookBtn: "Stamp Collection",
    arrivalKicker: "Location Confirmed",
    arrivalTitle: "Arrival Confirmed",
    arrivalMessage: "The narration will begin shortly.",
    arrivalLocated: (name) => `You have arrived at ${name}. The narration will begin next.`,
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
    scanTitle: "Scan to Collect Stamps",
    scanSignBtn: "Scan Sign",
    openStampBookFromArBtn: "Stamp Collection",
    ocrStatus: "Tap to start scanning.",
    scanOverlayText: "Scanning the Building Signboard to collect stamps",
    scanDebugPrefix: "OCR reads:",
    closeScanBtn: "Close Scan",
    ocrProcessing: "Recognizing sign text. Please wait.",
    ocrNoMatch: "No matching building name was recognized. Try to make the sign text clearer.",
    ocrMatched: (name) => `OCR matched ${name}. Switching to the corresponding explanation and animation.`,
    stampKicker: "Stamp Collection",
    stampTitle: "Your Campus Stamp Book",
    backFromStampBtn: "Back",
    openLeaderboardBtn: "Leaderboard",
    leaderboardKicker: "Stamp Leaderboard",
    leaderboardTitle: "Collection Ranking",
    backFromLeaderboardBtn: "Back",
    leaderboardRankHead: "Rank",
    leaderboardUserHead: "Username",
    leaderboardCountHead: "Stamps",
    leaderboardLoading: "Loading leaderboard.",
    leaderboardEmpty: "No collection records are available yet.",
    leaderboardCount: (count) => `${count}`,
    leaderboardLoadFailed: (message) => `Failed to load leaderboard: ${message}`,
    stampNameCb: "CB Stamp",
    stampNameSd: "SD Stamp",
    stampNameFb: "FB Stamp",
    stampLocked: "Not collected yet.",
    stampUnlocked: "Collected",
    stampSummary: (count) => `${count} / 3 stamps collected.`,
    stampCollected: (code) => `${code} stamp collected successfully.`,
    stampAlreadyCollected: (code) => `${code} stamp has already been collected.`,
    requestingLocation: "Requesting location permission. Please allow the browser to access the current device position.",
    locating: "Location received. The system is checking whether you have entered the recognition range of the target building.",
    noNearby: () => "Live positioning active",
    arrived: (name) => `You have entered the ${name} range. The narration is now starting.`,
    locationDenied: "Location permission was not granted. Open this site's browser permission settings or your phone's system settings, change Location to Allow, then try again. You can also continue with demo mode."
  }
};

const poiNarration = {
  zh: {
    library: {
      title: "FB（Foundation Building）讲解",
      body: "FB 是西交利物浦大学最早投入使用的教学楼之一，是了解校园发展起点的重要地点。",
      speech: (role) =>
        role === "student"
          ? "欢迎来到 FB，也就是 Foundation Building。作为大一新生最常上课的地方，FB 几乎承载了你进入大学后的第一段学习经历。从英语课程到基础专业课，这里不仅是学习的起点，也往往是你认识同学、适应大学节奏的第一站。"
          : "欢迎来到 FB，也就是 Foundation Building。FB 是西交利物浦大学最早投入使用的教学楼之一，主要承担基础课程教学任务，建筑风格简洁实用，体现了学校从创立初期到逐步发展的历史起点，是了解校园发展脉络的重要地点。"
    },
    garden: {
      title: "CB（Central Building）讲解",
      body: "CB 是校园最具标志性的建筑之一，也是学校学术与文化交汇的核心枢纽。",
      speech: (role) =>
        role === "student"
          ? "欢迎来到 CB，也就是 Central Building。CB 不仅是你查资料、自习和借书的首选地点，也是办理事务、参加活动和与朋友相遇的校园中心。无论是赶 due 还是放松交流，这里几乎贯穿了你的整个大学生活。"
          : "欢迎来到 CB，也就是 Central Building。CB 是校园最具标志性的建筑之一，其设计灵感来源于中国传统太湖石造型，外观现代且富有艺术感，内部集图书馆、学习空间、行政服务和学生活动区域于一体，是学校学术与文化交汇的核心枢纽。"
    },
    hall: {
      title: "SD（Science Building D）讲解",
      body: "SD 是理科教学与科研楼群的重要组成部分，也是从基础学习迈向专业能力培养的重要场所。",
      speech: (role) =>
        role === "student"
          ? "欢迎来到 SD，也就是 Science Building D。当你从大一进入专业学习阶段后，SD 等理科楼会逐渐成为你的主要学习场所。在这里你将参与实验课程、项目实践和小组合作，是从基础知识迈向专业能力培养的重要阶段。"
          : "欢迎来到 SD，也就是 Science Building D。SD 属于理科教学与科研楼群的一部分，内部设有各类实验室、科研空间和专业教室，体现了学校在科学研究和实践教学方面的投入与实力，是展示理工科教育的重要窗口。"
    }
  },
  en: {
    library: {
      title: "FB (Foundation Building) Narration",
      body: "FB is one of the earliest teaching buildings at XJTLU and an important place for understanding the campus origins.",
      speech: (role) =>
        role === "student"
          ? "Welcome to FB, the Foundation Building. For first-year students, FB is one of the most frequently visited buildings, where most foundation and introductory courses take place. It is not only the starting point of academic learning but also where students begin to meet classmates and adapt to university life."
          : "Welcome to FB, the Foundation Building. The Foundation Building is one of the earliest teaching buildings at Xi'an Jiaotong–Liverpool University. It is mainly used for delivering foundation-level courses, and its simple, functional design reflects the university's early development stage, making it an important place to understand the origins of the campus."
    },
    garden: {
      title: "CB (Central Building) Narration",
      body: "CB is one of the most iconic landmarks on campus and serves as the academic and social hub of the university.",
      speech: (role) =>
        role === "student"
          ? "Welcome to CB, the Central Building. For students, CB is much more than a library. It is the central place for studying, attending activities, handling administrative matters, and socializing. Whether preparing for deadlines or relaxing with friends, CB plays a key role throughout university life."
          : "Welcome to CB, the Central Building. The Central Building is one of the most iconic landmarks on campus. Inspired by the shape of traditional Taihu stones, its design blends modern architecture with cultural elements, and it houses the library, study areas, administrative offices, and student activity spaces, serving as the academic and social hub of the university."
    },
    hall: {
      title: "SD (Science Building D) Narration",
      body: "SD is part of the university's science complex and reflects its emphasis on research and practical learning.",
      speech: (role) =>
        role === "student"
          ? "Welcome to SD, Science Building D. As students progress into their second and third years, SD becomes one of the main places for study. Here, students engage in laboratory work, group projects, and professional training, marking an important transition from foundational learning to advanced specialization."
          : "Welcome to SD, Science Building D. Science Building D is part of the university's science complex, equipped with laboratories, research facilities, and specialized classrooms. It reflects the university's strong emphasis on scientific research and practical learning."
    }
  }
};

const pois = [
  { id: "library", code: "FB", nameKey: "library", lat: 31.2765683, lon: 120.7337931, radius: 85 },
  { id: "garden", code: "CB", nameKey: "garden", lat: 31.2749451, lon: 120.7339179, radius: 85 },
  { id: "hall", code: "SD", nameKey: "hall", lat: 31.274314, lon: 120.735793, radius: 85 }
];

const state = {
  role: "",
  language: "en",
  authMode: "register",
  activePoi: pois[0],
  currentStream: null,
  registeredUser: null,
  collectedStamps: [],
  previousScreen: "map"
};

const stampDefinitions = [
  { id: "cb", code: "CB" },
  { id: "sd", code: "SD" },
  { id: "fb", code: "FB" }
];

function normalizeCollectedStamps(stamps = []) {
  const normalized = stamps
    .map((stamp) => (stamp === "mb" ? "fb" : stamp))
    .filter((stamp) => stampDefinitions.some((entry) => entry.id === stamp));

  return [...new Set(normalized)];
}

const elements = {
  introScreen: document.getElementById("introScreen"),
  registerScreen: document.getElementById("registerScreen"),
  roleScreen: document.getElementById("roleScreen"),
  hubScreen: document.getElementById("hubScreen"),
  mapScreen: document.getElementById("mapScreen"),
  arrivalScreen: document.getElementById("arrivalScreen"),
  arScreen: document.getElementById("arScreen"),
  stampScreen: document.getElementById("stampScreen"),
  leaderboardScreen: document.getElementById("leaderboardScreen"),
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
  hubCampusMapBtn: document.getElementById("hubCampusMapBtn"),
  hubStampBtn: document.getElementById("hubStampBtn"),
  hubMessageBtn: document.getElementById("hubMessageBtn"),
  hubUserInfoBtn: document.getElementById("hubUserInfoBtn"),
  startLocationBtn: document.getElementById("startLocationBtn"),
  demoArrivalBtn: document.getElementById("demoArrivalBtn"),
  openStampBookBtn: document.getElementById("openStampBookBtn"),
  arrivalMessage: document.getElementById("arrivalMessage"),
  leafletMap: document.getElementById("leafletMap"),
  mapStatusLine: document.getElementById("mapStatusLine"),
  distanceItemFb: document.getElementById("distanceItemFb"),
  distanceItemCb: document.getElementById("distanceItemCb"),
  distanceItemSd: document.getElementById("distanceItemSd"),
  distanceValueFb: document.getElementById("distanceValueFb"),
  distanceValueCb: document.getElementById("distanceValueCb"),
  distanceValueSd: document.getElementById("distanceValueSd"),
  backToMapBtn: document.getElementById("backToMapBtn"),
  avatarCard: document.getElementById("avatarCard"),
  avatarViewer: document.getElementById("avatarViewer"),
  scanSignBtn: document.getElementById("scanSignBtn"),
  openStampBookFromArBtn: document.getElementById("openStampBookFromArBtn"),
  ocrStatus: document.getElementById("ocrStatus"),
  scanOverlay: document.getElementById("scanOverlay"),
  scanVideo: document.getElementById("scanVideo"),
  scanCanvas: document.getElementById("scanCanvas"),
  scanOverlayText: document.getElementById("scanOverlayText"),
  scanDebugText: document.getElementById("scanDebugText"),
  closeScanBtn: document.getElementById("closeScanBtn"),
  playAudioBtn: document.getElementById("playAudioBtn"),
  stopAudioBtn: document.getElementById("stopAudioBtn"),
  stampSummary: document.getElementById("stampSummary"),
  openLeaderboardBtn: document.getElementById("openLeaderboardBtn"),
  backFromStampBtn: document.getElementById("backFromStampBtn"),
  backFromLeaderboardBtn: document.getElementById("backFromLeaderboardBtn"),
  leaderboardList: document.getElementById("leaderboardList"),
  leaderboardStatus: document.getElementById("leaderboardStatus"),
  stampSlotCb: document.getElementById("stampSlotCb"),
  stampSlotSd: document.getElementById("stampSlotSd"),
  stampSlotFb: document.getElementById("stampSlotFb"),
  stampDescCb: document.getElementById("stampDescCb"),
  stampDescSd: document.getElementById("stampDescSd"),
  stampDescFb: document.getElementById("stampDescFb")
};

let map;
let userMarker;
let poiMarkers = [];
let poiLines = [];
let watchId = null;
let motionEnabled = false;
let scanStream = null;
let scanIntervalId = null;
let scanBusy = false;

const translatableIds = [
  "heroTag",
  "heroTitle",
  "languageLabel",
  "goRoleBtn",
  "registerTitle",
  "registerModeBtn",
  "loginModeBtn",
  "nameLabel",
  "passwordLabel",
  "confirmPasswordLabel",
  "backToIntroFromRegisterBtn",
  "registerSubmitBtn",
  "roleTitle",
  "selectionHint",
  "backToIntroBtn",
  "goMapBtn",
  "hubTitle",
  "hubCampusMapBtn",
  "hubStampBtn",
  "hubMessageBtn",
  "hubUserInfoBtn",
  "mapKicker",
  "mapTitle",
  "mapStatusLine",
  "startLocationBtn",
  "demoArrivalBtn",
  "openStampBookBtn",
  "arrivalKicker",
  "arrivalTitle",
  "cameraKicker",
  "cameraTitle",
  "backToMapBtn",
  "scanKicker",
  "scanTitle",
  "scanSignBtn",
  "openStampBookFromArBtn",
  "scanOverlayText",
  "closeScanBtn",
  "ocrStatus",
  "playAudioBtn",
  "stopAudioBtn",
  "stampKicker",
  "stampTitle",
  "backFromStampBtn",
  "openLeaderboardBtn",
  "leaderboardKicker",
  "leaderboardTitle",
  "backFromLeaderboardBtn",
  "leaderboardRankHead",
  "leaderboardUserHead",
  "leaderboardCountHead",
  "stampNameCb",
  "stampNameSd",
  "stampNameFb"
];

function showScreen(screen) {
  [elements.introScreen, elements.registerScreen, elements.roleScreen, elements.hubScreen, elements.mapScreen, elements.arrivalScreen, elements.arScreen, elements.stampScreen, elements.leaderboardScreen].forEach((node) => {
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

function renderStampBook() {
  const t = getCopy();
  const stampMap = {
    cb: { slot: elements.stampSlotCb, desc: elements.stampDescCb },
    sd: { slot: elements.stampSlotSd, desc: elements.stampDescSd },
    fb: { slot: elements.stampSlotFb, desc: elements.stampDescFb }
  };

  stampDefinitions.forEach((stamp) => {
    const collected = state.collectedStamps.includes(stamp.id);
    stampMap[stamp.id].slot.classList.toggle("stamp-collected", collected);
    stampMap[stamp.id].desc.textContent = collected ? t.stampUnlocked : t.stampLocked;
  });

  elements.stampSummary.textContent = t.stampSummary(state.collectedStamps.length);
}

function renderLeaderboardRows(rows) {
  const t = getCopy();
  const head = `
    <div class="leaderboard-row leaderboard-row-head">
      <span>${t.leaderboardRankHead}</span>
      <span>${t.leaderboardUserHead}</span>
      <span>${t.leaderboardCountHead}</span>
    </div>
  `;

  if (!rows.length) {
    elements.leaderboardList.innerHTML = `${head}<p class="leaderboard-empty">${t.leaderboardEmpty}</p>`;
    return;
  }

  elements.leaderboardList.innerHTML =
    head +
    rows
      .map(
        (entry, index) => `
          <div class="leaderboard-row${index < 3 ? ` rank-top-${index + 1}` : ""}">
            <span class="leaderboard-rank">#${index + 1}</span>
            <span>${entry.username}</span>
            <span class="leaderboard-count">${t.leaderboardCount(entry.count)}</span>
          </div>
        `
      )
      .join("");
}

async function openLeaderboardScreen() {
  const t = getCopy();
  showScreen(elements.leaderboardScreen);
  elements.leaderboardStatus.textContent = t.leaderboardLoading;
  renderLeaderboardRows([]);

  if (typeof window.authGetLeaderboard !== "function") {
    elements.leaderboardStatus.textContent = t.leaderboardLoadFailed("Leaderboard API is unavailable.");
    return;
  }

  try {
    const rows = await window.authGetLeaderboard();
    renderLeaderboardRows(rows);
    elements.leaderboardStatus.textContent = "";
  } catch (error) {
    elements.leaderboardStatus.textContent = t.leaderboardLoadFailed(getAuthErrorMessage(error));
  }
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
    if (id === "heroTitle") {
      const heroText = String(t.heroTitle);
      const isZh = state.language === "zh";
      const intro = isZh ? "欢迎使用" : "Welcome to";
      const brand = heroText.replace(intro, "").trim() || "X·EasyGo";
      node.innerHTML = `<span class="hero-title-intro">${intro}</span><span class="hero-title-brand">${brand}</span>`;
      return;
    }
    node.textContent = valueMap[id] || t[id];
  });

  elements.studentChip.textContent = t.student;
  elements.visitorChip.textContent = t.visitor;
  syncAuthModeUi();
  elements.selectionHint.textContent = state.role ? t.roleReady(state.role) : t.selectionHint;
  elements.ocrStatus.textContent = t.ocrStatus;
  updateNarration();
  renderStampBook();
}

function syncAuthModeUi() {
  const t = getCopy();
  const isRegister = state.authMode === "register";

  elements.registerModeBtn.classList.toggle("active", isRegister);
  elements.loginModeBtn.classList.toggle("active", !isRegister);
  elements.nameField.classList.remove("hidden");
  elements.confirmPasswordField.classList.toggle("hidden", !isRegister);

  document.getElementById("registerTitle").textContent = isRegister ? t.registerTitle : t.loginTitle;
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

function isValidUsername(username) {
  return /^[A-Za-z0-9]{3,16}$/.test(username);
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

    if (!isValidUsername(name)) {
      elements.registerStatus.textContent = t.invalidUsername;
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
  } else if (!isValidUsername(name)) {
    elements.registerStatus.textContent = t.invalidUsername;
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
    state.collectedStamps = normalizeCollectedStamps(Array.isArray(profile?.stamps) ? profile.stamps : []);

    if (
      Array.isArray(profile?.stamps) &&
      JSON.stringify(state.collectedStamps) !== JSON.stringify(profile.stamps) &&
      typeof window.authSaveProfile === "function"
    ) {
      await persistProfile();
    }

    if (profile?.role) {
      state.role = profile.role;
      elements.roleChips.forEach((chip) => chip.classList.toggle("active", chip.dataset.role === state.role));
      elements.registerStatus.textContent = t.roleLoaded(profile.role);
      showScreen(elements.hubScreen);
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

function createPoiIcon(code) {
  return L.divIcon({
    className: "",
    html: `<div class="map-poi-chip">${code}</div>`,
    iconSize: [44, 32],
    iconAnchor: [22, 16]
  });
}

function renderMap() {
  if (!map) {
    map = L.map(elements.leafletMap, {
      zoomControl: true,
      attributionControl: true
    }).setView([31.27545, 120.73455], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    poiMarkers = pois.map((poi) =>
      L.marker([poi.lat, poi.lon], {
        icon: createPoiIcon(poi.code)
      })
        .addTo(map)
        .bindPopup(poi.code)
    );
  }

  renderDistancePanel();
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

function getDistanceElementSet(code) {
  if (code === "FB") {
    return { item: elements.distanceItemFb, value: elements.distanceValueFb };
  }
  if (code === "CB") {
    return { item: elements.distanceItemCb, value: elements.distanceValueCb };
  }
  return { item: elements.distanceItemSd, value: elements.distanceValueSd };
}

function renderDistancePanel(position = null) {
  pois.forEach((poi) => {
    const refs = getDistanceElementSet(poi.code);
    if (!position) {
      refs.item.classList.remove("in-range");
      refs.value.textContent = "--";
      return;
    }

    const distance = haversineMeters(position.latitude, position.longitude, poi.lat, poi.lon);
    refs.value.textContent = state.language === "zh" ? `${distance} 米` : `${distance} m`;
    refs.item.classList.toggle("in-range", distance <= poi.radius);
  });
}

function renderPoiLines(position) {
  poiLines.forEach((line) => line.remove());
  poiLines = [];

  const userLatLng = [position.latitude, position.longitude];
  poiLines = pois.map((poi) =>
    L.polyline([userLatLng, [poi.lat, poi.lon]], {
      color: "#c9b3ff",
      weight: 2,
      opacity: 0.8,
      dashArray: "8 10"
    }).addTo(map)
  );
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

function openArrivalScreen(poi) {
  state.activePoi = poi;
  const t = getCopy();
  showScreen(elements.arrivalScreen);
  elements.arrivalMessage.textContent = t.arrivalLocated(t[poi.nameKey]);
  window.setTimeout(() => {
    openArScreen(poi);
  }, 5000);
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

function matchStampFromText(rawText) {
  const normalized = rawText
    .toLowerCase()
    .replace(/[|!]/g, "i")
    .replace(/8/g, "b")
    .replace(/5/g, "s")
    .replace(/0/g, "o")
    .replace(/[^a-z0-9]/g, "");

  const matchers = [
    { id: "cb", code: "CB", patterns: [/cb/, /c[b8]/, /[c(]b/] },
    { id: "sd", code: "SD", patterns: [/sd/, /s[d0]/] },
    { id: "fb", code: "FB", patterns: [/fb/, /f[b8]/] }
  ];

  return matchers.find((entry) => entry.patterns.some((pattern) => pattern.test(normalized))) || null;
}

async function persistProfile() {
  if (!state.registeredUser?.id || typeof window.authSaveProfile !== "function") {
    return;
  }

  await window.authSaveProfile({
    uid: state.registeredUser.id,
    role: state.role || null,
    stamps: normalizeCollectedStamps(state.collectedStamps)
  });
}

async function collectStamp(stampMatch) {
  const t = getCopy();

  if (state.collectedStamps.includes(stampMatch.id)) {
    elements.ocrStatus.textContent = t.stampAlreadyCollected(stampMatch.code);
    return true;
  }

  state.collectedStamps = normalizeCollectedStamps([...state.collectedStamps, stampMatch.id]);
  renderStampBook();
  elements.ocrStatus.textContent = t.stampCollected(stampMatch.code);

  try {
    await persistProfile();
  } catch (error) {
    elements.ocrStatus.textContent = t.roleSaveFailed(getAuthErrorMessage(error));
  }

  return true;
}

function buildOcrCanvas(video, sx, sy, cropWidth, cropHeight, options = {}) {
  const { scale = 2, threshold = null } = options;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = cropWidth * scale;
  canvas.height = cropHeight * scale;

  ctx.drawImage(video, sx, sy, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    const contrasted = Math.max(0, Math.min(255, (gray - 128) * 1.35 + 128));
    const value = threshold === null ? contrasted : contrasted > threshold ? 255 : 0;
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas;
}

async function recognizeText(canvas, lang, options = {}) {
  const result = await window.Tesseract.recognize(canvas, lang, options);
  return {
    text: result.data.text || "",
    confidence: Number(result.data.confidence || 0)
  };
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

  const matchedStamp = matchStampFromText(text);
  if (matchedStamp) {
    await collectStamp(matchedStamp);
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

  const cropWidth = Math.round(videoWidth * 0.72);
  const cropHeight = Math.round(videoHeight * 0.28);
  const sx = Math.round((videoWidth - cropWidth) / 2);
  const sy = Math.round((videoHeight - cropHeight) / 2);

  const sourceCanvas = buildOcrCanvas(elements.scanVideo, sx, sy, cropWidth, cropHeight, {
    scale: 2,
    threshold: null
  });
  const binaryLightCanvas = buildOcrCanvas(elements.scanVideo, sx, sy, cropWidth, cropHeight, {
    scale: 2,
    threshold: 152
  });
  const binaryDarkCanvas = buildOcrCanvas(elements.scanVideo, sx, sy, cropWidth, cropHeight, {
    scale: 2,
    threshold: 128
  });

  try {
    const stampPasses = await Promise.all([
      recognizeText(binaryLightCanvas, "eng", {
        tessedit_pageseg_mode: "8",
        tessedit_char_whitelist: "CBSDFcbsdf"
      }),
      recognizeText(binaryDarkCanvas, "eng", {
        tessedit_pageseg_mode: "8",
        tessedit_char_whitelist: "CBSDFcbsdf"
      }),
      recognizeText(sourceCanvas, "eng", {
        tessedit_pageseg_mode: "8",
        tessedit_char_whitelist: "CBSDFcbsdf"
      })
    ]);

    const bestStampPass = stampPasses.sort((a, b) => b.confidence - a.confidence)[0];
    elements.scanDebugText.textContent = `${t.scanDebugPrefix} ${bestStampPass.text.trim() || "N/A"}`;

    for (const pass of stampPasses) {
      const matchedStamp = matchStampFromText(pass.text);
      if (matchedStamp) {
        await collectStamp(matchedStamp);
        closeScanOverlay();
        return;
      }
    }

    const lang = state.language === "zh" ? "eng+chi_sim" : "eng";
    const textPasses = await Promise.all([
      recognizeText(sourceCanvas, lang, { tessedit_pageseg_mode: "6" }),
      recognizeText(binaryLightCanvas, lang, { tessedit_pageseg_mode: "7" }),
      recognizeText(binaryDarkCanvas, lang, { tessedit_pageseg_mode: "7" })
    ]);

    const bestTextPass = textPasses.sort((a, b) => b.confidence - a.confidence)[0];
    elements.scanDebugText.textContent = `${t.scanDebugPrefix} ${bestTextPass.text.trim() || "N/A"}`;
    const matchedPoi = matchPoiFromText(bestTextPass.text);

    if (matchedPoi) {
      state.activePoi = matchedPoi;
      updateNarration();
      elements.ocrStatus.textContent = t.ocrMatched(getCopy()[matchedPoi.nameKey]);
      closeScanOverlay();
      speakNarration();
      return;
    }

    elements.ocrStatus.textContent = `${t.ocrNoMatch} OCR: ${bestTextPass.text.trim().slice(0, 80) || "N/A"}`;
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
    elements.scanDebugText.textContent = "";

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
  elements.scanDebugText.textContent = "";
  elements.scanOverlay.classList.add("hidden");
}

function handleArrival(poi) {
  state.activePoi = poi;
  elements.mapStatusLine.textContent = getCopy().arrived(poi.code);
  openArrivalScreen(poi);
}

function handleLocationSuccess(position) {
  const t = getCopy();
  const nearest = findNearestPoi(position.coords);
  elements.mapStatusLine.textContent = t.noNearby();

  const latLng = [position.coords.latitude, position.coords.longitude];
  if (!userMarker) {
    userMarker = L.marker(latLng, {
      icon: createMapIcon("map-user-dot")
    }).addTo(map);
  } else {
    userMarker.setLatLng(latLng);
  }
  renderDistancePanel(position.coords);
  renderPoiLines(position.coords);
  map.flyTo(latLng, Math.max(map.getZoom(), 18), { duration: 0.8 });

  if (nearest.distance <= nearest.poi.radius) {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      watchId = null;
    }
    handleArrival(nearest.poi);
  }
}

function handleLocationError() {
  elements.mapStatusLine.textContent = getCopy().locationDenied;
}

function requestLocation() {
  renderMap();
  elements.mapStatusLine.textContent = getCopy().requestingLocation;
  renderDistancePanel();

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
  renderDistancePanel();
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
      await persistProfile();
    } catch (error) {
      elements.selectionHint.textContent = getCopy().roleSaveFailed(getAuthErrorMessage(error));
      elements.goMapBtn.disabled = false;
      return;
    } finally {
      elements.goMapBtn.disabled = false;
    }
  }

  showScreen(elements.hubScreen);
});

elements.startLocationBtn.addEventListener("click", requestLocation);
elements.hubCampusMapBtn.addEventListener("click", () => {
  showScreen(elements.mapScreen);
  renderMap();
});
elements.hubStampBtn.addEventListener("click", () => {
  state.previousScreen = "hub";
  renderStampBook();
  showScreen(elements.stampScreen);
});
elements.hubMessageBtn.addEventListener("click", () => {});
elements.hubUserInfoBtn.addEventListener("click", () => {});
elements.backFromHubBtn.addEventListener("click", () => showScreen(elements.roleScreen));
elements.demoArrivalBtn.addEventListener("click", () => openArScreen(state.activePoi));
elements.openStampBookBtn.addEventListener("click", () => {
  state.previousScreen = "map";
  renderStampBook();
  showScreen(elements.stampScreen);
});
elements.openLeaderboardBtn.addEventListener("click", openLeaderboardScreen);
elements.scanSignBtn.addEventListener("click", openScanOverlay);
elements.openStampBookFromArBtn.addEventListener("click", () => {
  state.previousScreen = "ar";
  renderStampBook();
  showScreen(elements.stampScreen);
});
elements.closeScanBtn.addEventListener("click", closeScanOverlay);
elements.playAudioBtn.addEventListener("click", speakNarration);
elements.stopAudioBtn.addEventListener("click", () => window.speechSynthesis.cancel());
elements.backFromStampBtn.addEventListener("click", () => {
  if (state.previousScreen === "ar") {
    showScreen(elements.arScreen);
    return;
  }

  if (state.previousScreen === "hub") {
    showScreen(elements.hubScreen);
    return;
  }

  showScreen(elements.mapScreen);
  renderMap();
});
elements.backFromLeaderboardBtn.addEventListener("click", () => {
  renderStampBook();
  showScreen(elements.stampScreen);
});
elements.backToMapBtn.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  closeScanOverlay();
  showScreen(elements.mapScreen);
  renderMap();
});

applyTranslations();
function syncMapStampButtonToBack() {
  const mapScreen = document.getElementById("mapScreen");
  if (!mapScreen || !elements.hubScreen) {
    return;
  }

  const sourceButton =
    mapScreen.querySelector("#mapStampBtn") ||
    Array.from(mapScreen.querySelectorAll(".ghost-btn")).find((button) => {
      const label = (button.textContent || "").trim().toLowerCase();
      return label.includes("stamp") || label.includes("集章");
    });

  if (!sourceButton) {
    return;
  }

  const nextButton = sourceButton.cloneNode(true);
  nextButton.id = "backToHubBtn";
  nextButton.textContent = state.language === "zh" ? "返回" : "Back";
  sourceButton.replaceWith(nextButton);

  nextButton.addEventListener("click", () => {
    showScreen(elements.hubScreen);
  });
}

const originalApplyTranslationsRef = applyTranslations;
applyTranslations = function (...args) {
  const result = originalApplyTranslationsRef.apply(this, args);
  syncMapStampButtonToBack();
  return result;
};

window.addEventListener("load", syncMapStampButtonToBack);
setTimeout(syncMapStampButtonToBack, 0);
if (elements.backFromHubBtn) {
  elements.backFromHubBtn.addEventListener("click", () => {
    showScreen(elements.roleScreen);
  });
}
