/* ============================================
   AstroLab - 考试资料售卖
   ============================================ */

/* ---------- 资料包数据 ---------- */
const materialCategories = [
  {
    name: "🔥 公考主打",
    icon: "",
    items: [
      { name: "2027 粉笔国考 1280 系统班（行测+申论）", note: "官方售价 ¥1280，含全部课程视频+讲义", price: "¥19.9" },
      { name: "2027 超格行测+申论全家桶（精讲桶）", note: "超格全套课程，五合一超大杯", price: "¥19.9" },
      { name: "2027 国省考名师合集（花生十三/上岸村/李铁/郑为远 等）", note: "多位名师笔试系统班打包，含讲义", price: "¥25.9" },
      { name: "行测 5000 题 + 申论 100 题（2026-2027 最新版）", note: "粉笔出品，含详细解析，刷题必备", price: "¥9.9" },
    ]
  },
  {
    name: "📝 行测专项",
    icon: "",
    items: [
      { name: "言语理解专项包（阿里木江/雨菲/大懒猫/郭熙/花生十三）", note: "系统班+刷题课+600题+成语300词", price: "¥12.9" },
      { name: "判断推理专项包（花生十三/程意/陈怀安/P神笔记）", note: "类比推理+逻辑判断+图形推理全覆盖", price: "¥12.9" },
      { name: "数资专项包（齐麟/花生十三/高照）", note: "数量关系+资料分析，含真题刷题800道", price: "¥12.9" },
      { name: "常识&政治理论专项（杨攀/超格/李梦圆）", note: "政治理论一课通+常识判断冲刺", price: "¥9.9" },
      { name: "行测全科刷题包（2800题+1300题+领跑营套题）", note: "粉笔名师带刷2800题+精选1300题+套题实战", price: "¥15.9" },
    ]
  },
  {
    name: "✍️ 申论专项",
    icon: "",
    items: [
      { name: "袁东申论全套（方法实战+领跑营+大作文+超大杯刷题）", note: "国省考申论最全合集，含规范词+高分范文", price: "¥15.9" },
      { name: "飞扬申论全套（笔试系统班+早课+分析理解题）", note: "花生十三团队，申论全流程教学", price: "¥12.9" },
      { name: "申论大作文专项（袁东+飞扬+刘大师+站长）", note: "大作文写作技巧+真题带练+范文素材", price: "¥9.9" },
      { name: "申论真题 100 题 + 刷题包", note: "半月谈+粉笔，含解析", price: "¥6.9" },
    ]
  },
  {
    name: "📰 时政&押题",
    icon: "",
    items: [
      { name: "2026-2027 全年时政汇总（粉笔+中公+华图+超格+四海+秦明+丹丹）", note: "7大机构全年时政课一站打包，含晨读材料+新年贺词+全会解读", price: "¥12.9" },
      { name: "押题密卷合集（粉笔 6280 精品卷+超格 2480 模拟卷+封闭进阶卷）", note: "多家机构高端押题卷，含解析", price: "¥14.9" },
      { name: "国考/省考考前冲刺包（时政400题+常识预测+申论热点）", note: "考前突击必备", price: "¥8.9" },
    ]
  },
  {
    name: "📋 真题&面试",
    icon: "",
    items: [
      { name: "国考+省考真题大全（2000-2025，含解析 PDF）", note: "34省行测+申论历年真题，备考核心资料", price: "¥9.9" },
      { name: "公务员面试终极包（结构化+无领导+逐字稿+黄金模板）", note: "含老夏说面试+杨柳岸+相丽君+袁东+卷心菜 等名师课程", price: "¥15.9" },
      { name: "公安专项（真题+公安专业知识+省考公安）", note: "近五年省考公安真题及答案", price: "¥9.9" },
    ]
  },
  {
    name: "🏛️ 事业编&其他",
    icon: "",
    items: [
      { name: "事业单位联考全套（职测+综应+公基，粉笔+超格+华图）", note: "含ABCD类，多机构课程打包", price: "¥19.9" },
      { name: "三支一扶/选调/遴选专项", note: "含超格系统班+各省专项资料", price: "¥9.9" },
      { name: "国企招聘资料包（烟草/电网/银行/石油等）", note: "202套资料，含笔试题库+面试经", price: "¥12.9" },
    ]
  },
  {
    name: "🎓 考研&升学",
    icon: "",
    items: [
      { name: "考研资料包（政治+英语+数学）", note: "全程班+真题精讲，35套", price: "¥12.9" },
      { name: "高考资料（2023总复习全套+各地模拟卷）", note: "13套", price: "¥8.9" },
      { name: "自考/专升本资料", note: "含法学类+经管类等", price: "¥6.9" },
    ]
  },
  {
    name: "💼 考证&技能",
    icon: "",
    items: [
      { name: "教资教招合集（笔试+面试，115套）", note: "含粉笔+超格等课程", price: "¥12.9" },
      { name: "会计财务合集（初级/中级/注会，33套）", note: "初级会计全程班+押题班+之了冲刺班", price: "¥9.9" },
      { name: "英语考试合集（四六级/雅思/CATTI/学位英语）", note: "15套，含真题+VIP课程", price: "¥9.9" },
      { name: "建筑考试合集（一建/二建/消防/安全）", note: "15套", price: "¥9.9" },
      { name: "书籍读物（39本精选电子书）", note: "自我提升必读", price: "¥6.9" },
    ]
  }
];

/* ---------- 渲染资料卡 ---------- */
function renderMaterials(idx) {
  var tabs = document.getElementById("materialsTabs");
  var grid = document.getElementById("materialsGrid");
  var activeIdx = idx == null ? 0 : idx;

  tabs.innerHTML = "";
  materialCategories.forEach(function(cat, i) {
    var btn = document.createElement("button");
    btn.className = "materials-tab" + (i === activeIdx ? " active" : "");
    btn.textContent = cat.name;
    btn.addEventListener("click", function(){ renderMaterials(i); });
    tabs.appendChild(btn);
  });

  var cat = materialCategories[activeIdx];
  grid.innerHTML = "";
  cat.items.forEach(function(item) {
    var card = document.createElement("div");
    card.className = "material-card";
    var html = '<h4 class="material-name">' + item.name + "</h4>";
    if (item.note) html += '<p class="material-note">' + item.note + "</p>";
    html += '<div class="material-footer"><span class="material-price">' + item.price + "</span></div>";
    card.innerHTML = html;
    grid.appendChild(card);
  });
}

/* ---------- 导航 ---------- */
var navbar = document.getElementById("navbar");
var navToggle = document.getElementById("navToggle");
var navLinks = document.getElementById("navLinks");
var backToTop = document.getElementById("backToTop");

navToggle.addEventListener("click", function() {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
  });
});

window.addEventListener("scroll", function() {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  backToTop.classList.toggle("visible", window.scrollY > 600);
  var current = "";
  document.querySelectorAll("section[id]").forEach(function(sec) {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute("id");
  });
  navLinks.querySelectorAll("a").forEach(function(a) {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

backToTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* ---------- 滚动动画 ---------- */
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) entry.target.classList.add("revealed");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".material-card,.contact-card").forEach(function(el) {
  el.classList.add("reveal");
  observer.observe(el);
});

/* ---------- 粒子背景 ---------- */
(function() {
  var dots = document.querySelector(".hero-dots");
  if (!dots) return;
  var html = "";
  for (var i = 0; i < 50; i++) {
    var x = Math.random() * 100;
    var y = Math.random() * 100;
    var delay = Math.random() * 3;
    var size = 2 + Math.random() * 4;
    html += '<div style="left:' + x + "%;top:" + y + "%;animation-delay:" + delay + "s;width:" + size + "px;height:" + size + 'px;"></div>';
  }
  dots.innerHTML = html;
})();

/* ---------- 启动 ---------- */
renderMaterials();
