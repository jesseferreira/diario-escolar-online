const storeKey = "diarioEscolarOnline.v1";

const roles = {
  admin: {
    label: "Administrador",
    title: "Painel administrador",
  },
  manager: {
    label: "Gestão escolar",
    title: "Painel da gestão escolar",
  },
  teacher: {
    label: "Professor",
    title: "Área de professores",
  },
  student: {
    label: "Aluno",
    title: "Área de alunos",
  },
  guardian: {
    label: "Responsável",
    title: "Área de responsáveis",
  },
};

const loginUsers = [
  {
    id: "admin_default",
    role: "admin",
    name: "Administrador do sistema",
    email: "admin@diario.com",
    password: "admin123",
  },
  {
    id: "user_jesse",
    role: "admin",
    name: "Jesse Ferreira",
    email: "jesse.ferreira@diario.com",
    password: "admin.123",
  },
  {
    id: "manager_marina",
    role: "manager",
    schoolId: "school_aurora",
    name: "Marina Costa",
    email: "marina.costa@aurora.edu.br",
    password: "gestao123",
    approved: true,
  },
  {
    id: "manager_otavio",
    role: "manager",
    schoolId: "school_rios",
    name: "Otávio Lima",
    email: "otavio.lima@rios.edu.br",
    password: "gestao123",
    approved: true,
  },
  {
    id: "teacher_luana",
    role: "teacher",
    schoolId: "school_aurora",
    name: "Luana Martins",
    email: "luana.martins@aurora.edu.br",
    password: "prof123",
  },
  {
    id: "teacher_rafael",
    role: "teacher",
    schoolId: "school_aurora",
    name: "Rafael Andrade",
    email: "rafael.andrade@aurora.edu.br",
    password: "prof123",
  },
  {
    id: "teacher_bianca",
    role: "teacher",
    schoolId: "school_rios",
    name: "Bianca Nunes",
    email: "bianca.nunes@rios.edu.br",
    password: "prof123",
  },
  {
    id: "student_alice",
    role: "student",
    schoolId: "school_aurora",
    name: "Alice Ferreira",
    email: "alice.ferreira@aurora.edu.br",
    password: "aluno123",
  },
  {
    id: "student_mateus",
    role: "student",
    schoolId: "school_aurora",
    name: "Mateus Ribeiro",
    email: "mateus.ribeiro@aurora.edu.br",
    password: "aluno123",
  },
  {
    id: "student_julia",
    role: "student",
    schoolId: "school_rios",
    name: "Júlia Santos",
    email: "julia.santos@rios.edu.br",
    password: "aluno123",
  },
  {
    id: "guardian_paula",
    role: "guardian",
    schoolId: "school_aurora",
    name: "Paula Ferreira",
    email: "paula.ferreira@email.com",
    password: "resp123",
  },
  {
    id: "guardian_carlos",
    role: "guardian",
    schoolId: "school_aurora",
    name: "Carlos Ribeiro",
    email: "carlos.ribeiro@email.com",
    password: "resp123",
  },
  {
    id: "guardian_renata",
    role: "guardian",
    schoolId: "school_rios",
    name: "Renata Santos",
    email: "renata.santos@email.com",
    password: "resp123",
  },
];

const seedData = {
  schools: [
    {
      id: "school_aurora",
      name: "Escola Municipal Aurora",
      city: "São Paulo",
      state: "SP",
      code: "EMA-001",
      managers: [
        {
          id: "manager_marina",
          schoolId: "school_aurora",
          name: "Marina Costa",
          email: "marina.costa@aurora.edu.br",
          role: "Diretora escolar",
        },
      ],
    },
    {
      id: "school_rios",
      name: "Colégio Rios do Saber",
      city: "Campinas",
      state: "SP",
      code: "CRS-014",
      managers: [
        {
          id: "manager_otavio",
          schoolId: "school_rios",
          name: "Otávio Lima",
          email: "otavio.lima@rios.edu.br",
          role: "Coordenador pedagógico",
        },
      ],
    },
  ],
  teachers: [
    {
      id: "teacher_luana",
      schoolId: "school_aurora",
      name: "Luana Martins",
      email: "luana.martins@aurora.edu.br",
      subject: "Matemática",
      classes: "6º A, 7º B",
    },
    {
      id: "teacher_rafael",
      schoolId: "school_aurora",
      name: "Rafael Andrade",
      email: "rafael.andrade@aurora.edu.br",
      subject: "História",
      classes: "8º A, 9º C",
    },
    {
      id: "teacher_bianca",
      schoolId: "school_rios",
      name: "Bianca Nunes",
      email: "bianca.nunes@rios.edu.br",
      subject: "Português",
      classes: "5º B, 6º C",
    },
  ],
  students: [
    {
      id: "student_alice",
      schoolId: "school_aurora",
      name: "Alice Ferreira",
      grade: "6º A",
      enrollment: "2026-0001",
      guardianId: "guardian_paula",
      status: "Ativo",
    },
    {
      id: "student_mateus",
      schoolId: "school_aurora",
      name: "Mateus Ribeiro",
      grade: "7º B",
      enrollment: "2026-0002",
      guardianId: "guardian_carlos",
      status: "Ativo",
    },
    {
      id: "student_julia",
      schoolId: "school_rios",
      name: "Júlia Santos",
      grade: "5º B",
      enrollment: "2026-0041",
      guardianId: "guardian_renata",
      status: "Ativo",
    },
  ],
  guardians: [
    {
      id: "guardian_paula",
      schoolId: "school_aurora",
      name: "Paula Ferreira",
      email: "paula.ferreira@email.com",
      phone: "(11) 90000-1201",
      studentName: "Alice Ferreira",
    },
    {
      id: "guardian_carlos",
      schoolId: "school_aurora",
      name: "Carlos Ribeiro",
      email: "carlos.ribeiro@email.com",
      phone: "(11) 90000-2231",
      studentName: "Mateus Ribeiro",
    },
    {
      id: "guardian_renata",
      schoolId: "school_rios",
      name: "Renata Santos",
      email: "renata.santos@email.com",
      phone: "(19) 90000-7742",
      studentName: "Júlia Santos",
    },
  ],
  lessons: [
    {
      id: "lesson_math",
      schoolId: "school_aurora",
      className: "6º A",
      subject: "Matemática",
      title: "Frações equivalentes",
      date: "2026-06-02",
      notes: "Exercícios guiados e resolução no quadro.",
    },
    {
      id: "lesson_history",
      schoolId: "school_aurora",
      className: "8º A",
      subject: "História",
      title: "Brasil Império",
      date: "2026-06-02",
      notes: "Leitura orientada e roda de perguntas.",
    },
  ],
};

const state = {
  currentRole: "admin",
  currentUser: null,
  managerTab: "teachers",
  activeSchoolId: "",
  selectedStudentId: "",
  selectedGuardianId: "",
  loginRequests: [],
  data: loadData(),
};

const loginView = document.querySelector("#loginView");
const appView = document.querySelector("#appView");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const screenRoot = document.querySelector("#screenRoot");
const roleLabel = document.querySelector("#roleLabel");
const screenTitle = document.querySelector("#screenTitle");
const schoolSelector = document.querySelector("#schoolSelector");
const toast = document.querySelector("#toast");
const googleModal = document.querySelector("#googleModal");
const googleAccountsList = document.querySelector("#googleAccountsList");

let toastTimer = 0;
let loginErrorTimer = 0;

function loadData() {
  const freshData = JSON.parse(JSON.stringify(seedData));

  try {
    const stored = JSON.parse(localStorage.getItem(storeKey));
    if (!stored) {
      return freshData;
    }

    return {
      schools: Array.isArray(stored.schools) ? stored.schools : freshData.schools,
      teachers: Array.isArray(stored.teachers) ? stored.teachers : freshData.teachers,
      students: Array.isArray(stored.students) ? stored.students : freshData.students,
      guardians: Array.isArray(stored.guardians) ? stored.guardians : freshData.guardians,
      lessons: Array.isArray(stored.lessons) ? stored.lessons : freshData.lessons,
    };
  } catch (error) {
    return freshData;
  }
}

function saveData() {
  localStorage.setItem(storeKey, JSON.stringify(state.data));
}

function getId(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getActiveSchool() {
  return state.data.schools.find((school) => school.id === state.activeSchoolId) || state.data.schools[0];
}

function getSchoolName(schoolId) {
  const school = state.data.schools.find((item) => item.id === schoolId);
  return school ? school.name : "Sem escola";
}

function byActiveSchool(list) {
  return list.filter((item) => item.schoolId === state.activeSchoolId);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

function showLoginError(message) {
  if (!loginError) {
    return;
  }

  window.clearTimeout(loginErrorTimer);
  loginError.textContent = message;
  loginError.classList.add("is-visible");
  loginErrorTimer = window.setTimeout(() => {
    loginError.classList.remove("is-visible");
  }, 4200);
}

function ensureActiveSchool() {
  if (!state.data.schools.length) {
    state.activeSchoolId = "";
    return;
  }

  const exists = state.data.schools.some((school) => school.id === state.activeSchoolId);
  if (!state.activeSchoolId || !exists) {
    state.activeSchoolId = state.data.schools[0].id;
  }
}

function updateLoginRole(role) {
  state.selectedLoginRole = role;
  loginError.textContent = "";
  loginError.classList.remove("is-visible");
  document.querySelectorAll("[data-login-role]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.loginRole === role);
  });
}

function enterApp(role) {
  state.currentRole = role;
  ensureActiveSchool();
  loginView.hidden = true;
  appView.hidden = false;
  renderShell();
}

function leaveApp() {
  state.currentUser = null;
  appView.hidden = true;
  loginView.hidden = false;
  loginForm.reset();
  updateLoginRole(state.selectedLoginRole);
}

function renderShell() {
  ensureActiveSchool();
  const role = roles[state.currentRole];
  const userName = state.currentUser ? ` • ${state.currentUser.name}` : "";
  roleLabel.textContent = `${role.label}${userName}`;
  screenTitle.textContent = role.title;

  document.querySelectorAll("[data-role-nav]").forEach((button) => {
    // Admin can access all role panels; others only see their role
    if (state.currentRole === "admin") {
      button.hidden = false;
      button.classList.toggle("is-active", button.dataset.roleNav === state.currentRole);
    } else {
      const isVisible = button.dataset.roleNav === state.currentRole;
      button.hidden = !isVisible;
      button.classList.toggle("is-active", isVisible);
    }
  });

  renderSchoolSelector();
  renderScreen();
}

function renderSchoolSelector() {
  if (!state.data.schools.length) {
    schoolSelector.innerHTML = '<option value="">Nenhuma escola cadastrada</option>';
    schoolSelector.disabled = true;
    return;
  }

  schoolSelector.disabled = false;
  schoolSelector.innerHTML = state.data.schools
    .map((school) => `<option value="${escapeHtml(school.id)}">${escapeHtml(school.name)}</option>`)
    .join("");
  schoolSelector.value = state.activeSchoolId;
}

function metric(label, value, tone) {
  return `
    <article class="metric ${tone}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </article>
  `;
}

function emptyState(text) {
  return `<div class="empty">${escapeHtml(text)}</div>`;
}

function renderScreen() {
  const renderers = {
    admin: renderAdmin,
    manager: renderManager,
    teacher: renderTeacher,
    student: renderStudent,
    guardian: renderGuardian,
  };

  screenRoot.innerHTML = renderers[state.currentRole]();
}

function renderAdmin() {
  const managerCount = state.data.schools.reduce((total, school) => total + school.managers.length, 0);
  const schoolOptions = state.data.schools
    .map((school) => `<option value="${escapeHtml(school.id)}">${escapeHtml(school.name)}</option>`)
    .join("");
  const schoolRows = state.data.schools.length
    ? state.data.schools.map(renderSchoolRow).join("")
    : emptyState("Nenhuma escola cadastrada.");
  const managerRows = state.data.schools.length
    ? state.data.schools.map(renderManagerGroup).join("")
    : emptyState("Cadastre uma escola para vincular gestores.");

  const pendingManagers = loginUsers.filter((u) => u.role === "manager" && !u.approved);
  const pendingHtml = pendingManagers.length
    ? pendingManagers
        .map(
          (m) => `
            <div class="row pending">
              <div>
                <strong>${escapeHtml(m.name)}</strong>
                <small>${escapeHtml(m.email)} · Pendente</small>
              </div>
              <button class="btn" data-approve-manager="${escapeHtml(m.id)}">Aprovar</button>
            </div>
          `,
        )
        .join("")
    : "";

  return `
    <section class="summary-grid">
      ${metric("Escolas", state.data.schools.length, "teal")}
      ${metric("Gestores escolares", managerCount, "amber")}
      ${metric("Professores", state.data.teachers.length, "green")}
      ${metric("Alunos", state.data.students.length, "coral")}
    </section>

    <section class="dashboard-grid">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Cadastrar escola</h3>
            <p>Dados principais da unidade escolar.</p>
          </div>
        </div>
        <div class="panel-body">
          <form id="schoolForm" class="form-grid" autocomplete="off">
            <label class="full">
              <span>Nome da escola</span>
              <input name="name" placeholder="Nome da unidade" required />
            </label>
            <label>
              <span>Cidade</span>
              <input name="city" placeholder="Cidade" required />
            </label>
            <label>
              <span>UF</span>
              <input name="state" placeholder="SP" maxlength="2" required />
            </label>
            <label class="full">
              <span>CÓDIGO INEP</span>
              <input name="code" placeholder="ESC-001" required />
            </label>
            <div class="form-actions">
              <button type="submit" class="btn primary">Cadastrar escola</button>
            </div>
          </form>
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Escolas cadastradas</h3>
            <p>Unidades disponíveis para gestão.</p>
          </div>
        </div>
        <div class="panel-body list">
          ${schoolRows}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Cadastrar gestor escolar</h3>
            <p>Gestores ficam vinculados a uma escola.</p>
          </div>
        </div>
        <div class="panel-body">
          <form id="managerForm" class="form-grid" autocomplete="off">
            <label class="full">
              <span>Escola</span>
              <select name="schoolId" required ${state.data.schools.length ? "" : "disabled"}>
                ${schoolOptions}
              </select>
            </label>
            <label>
              <span>Nome</span>
              <input name="name" placeholder="Nome completo" required />
            </label>
            <label>
              <span>Cargo</span>
              <input name="role" placeholder="Diretor, coordenador..." required />
            </label>
            <label class="full">
              <span>E-mail</span>
              <input type="email" name="email" placeholder="gestor@escola.com" required />
            </label>
            <div class="form-actions">
              <button type="submit" class="btn primary" ${state.data.schools.length ? "" : "disabled"}>Cadastrar gestor</button>
            </div>
          </form>
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Gestores por escola</h3>
            <p>Responsáveis por cada unidade.</p>
          </div>
        </div>
        <div class="panel-body list">
          ${managerRows}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Gestores pendentes</h3>
            <p>Aprovar novos gestores para liberar acesso.</p>
          </div>
        </div>
        <div class="panel-body list">
          ${pendingHtml || emptyState("Nenhum gestor pendente.")}
        </div>
      </article>
    </section>
  `;
}

function renderSchoolRow(school) {
  return `
    <div class="row">
      <div>
        <strong>${escapeHtml(school.name)}</strong>
        <small>${escapeHtml(school.city)} - ${escapeHtml(school.state)} · ${escapeHtml(school.code)}</small>
      </div>
      <span class="badge">${school.managers.length} gestor${school.managers.length === 1 ? "" : "es"}</span>
    </div>
  `;
}

function renderManagerGroup(school) {
  const managers = school.managers.length
    ? school.managers
        .map(
          (manager) => `
            <div class="row">
              <div>
                <strong>${escapeHtml(manager.name)}</strong>
                <small>${escapeHtml(manager.role)} · ${escapeHtml(manager.email)}</small>
              </div>
              <span class="badge amber">${escapeHtml(school.code)}</span>
            </div>
          `,
        )
        .join("")
    : emptyState("Nenhum gestor vinculado.");

  return `
    <div class="list">
      <p class="meta"><strong>${escapeHtml(school.name)}</strong></p>
      ${managers}
    </div>
  `;
}

function renderManager() {
  const activeSchool = getActiveSchool();
  if (!activeSchool) {
    return emptyState("Cadastre uma escola no painel administrador.");
  }

  const teachers = byActiveSchool(state.data.teachers);
  const students = byActiveSchool(state.data.students);
  const guardians = byActiveSchool(state.data.guardians);

  return `
    <section class="summary-grid">
      ${metric("Escola ativa", activeSchool.code, "teal")}
      ${metric("Professores", teachers.length, "amber")}
      ${metric("Alunos", students.length, "green")}
      ${metric("Responsáveis", guardians.length, "coral")}
    </section>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>${escapeHtml(activeSchool.name)}</h3>
          <p>${escapeHtml(activeSchool.city)} - ${escapeHtml(activeSchool.state)}</p>
        </div>
        <span class="badge">${escapeHtml(activeSchool.code)}</span>
      </div>
      <div class="tabs" role="tablist" aria-label="Cadastros da gestão escolar">
        <button type="button" class="tab-button ${state.managerTab === "teachers" ? "is-active" : ""}" data-manager-tab="teachers">Professores</button>
        <button type="button" class="tab-button ${state.managerTab === "students" ? "is-active" : ""}" data-manager-tab="students">Alunos</button>
        <button type="button" class="tab-button ${state.managerTab === "guardians" ? "is-active" : ""}" data-manager-tab="guardians">Responsáveis</button>
      </div>
      <div class="panel-body">
        ${renderManagerTab()}
      </div>
    </section>
  `;
}

function renderManagerTab() {
  if (state.managerTab === "students") {
    return renderStudentRegistry();
  }

  if (state.managerTab === "guardians") {
    return renderGuardianRegistry();
  }

  return renderTeacherRegistry();
}

function renderTeacherRegistry() {
  const teachers = byActiveSchool(state.data.teachers);
  const rows = teachers.length
    ? teachers
        .map(
          (teacher) => `
            <div class="row">
              <div>
                <strong>${escapeHtml(teacher.name)}</strong>
                <small>${escapeHtml(teacher.subject)} · ${escapeHtml(teacher.classes)} · ${escapeHtml(teacher.email)}</small>
              </div>
              <span class="badge">${escapeHtml(teacher.subject)}</span>
            </div>
          `,
        )
        .join("")
    : emptyState("Nenhum professor cadastrado nesta escola.");

  return `
    <div class="dashboard-grid">
      <form id="teacherForm" class="form-grid" autocomplete="off">
        <label>
          <span>Nome</span>
          <input name="name" placeholder="Nome completo" required />
        </label>
        <label>
          <span>Disciplina</span>
          <input name="subject" placeholder="Matemática" required />
        </label>
        <label>
          <span>Turmas</span>
          <input name="classes" placeholder="6º A, 7º B" required />
        </label>
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder="professor@escola.com" required />
        </label>
        <div class="form-actions">
          <button type="submit" class="btn primary">Cadastrar professor</button>
        </div>
      </form>
      <div class="list">
        ${rows}
      </div>
    </div>
  `;
}

function renderStudentRegistry() {
  const students = byActiveSchool(state.data.students);
  const guardians = byActiveSchool(state.data.guardians);
  const guardianOptions = guardians
    .map((guardian) => `<option value="${escapeHtml(guardian.id)}">${escapeHtml(guardian.name)}</option>`)
    .join("");
  const rows = students.length
    ? students
        .map((student) => {
          const guardian = state.data.guardians.find((item) => item.id === student.guardianId);
          return `
            <div class="row">
              <div>
                <strong>${escapeHtml(student.name)}</strong>
                <small>${escapeHtml(student.grade)} · Matrícula ${escapeHtml(student.enrollment)} · ${escapeHtml(guardian?.name || "Sem responsável")}</small>
              </div>
              <span class="badge green">${escapeHtml(student.status)}</span>
            </div>
          `;
        })
        .join("")
    : emptyState("Nenhum aluno cadastrado nesta escola.");

  return `
    <div class="dashboard-grid">
      <form id="studentForm" class="form-grid" autocomplete="off">
        <label>
          <span>Nome</span>
          <input name="name" placeholder="Nome completo" required />
        </label>
        <label>
          <span>Turma</span>
          <input name="grade" placeholder="6º A" required />
        </label>
        <label>
          <span>Matrícula</span>
          <input name="enrollment" placeholder="2026-0000" required />
        </label>
        <label>
          <span>Responsável</span>
          <select name="guardianId">
            <option value="">Selecionar depois</option>
            ${guardianOptions}
          </select>
        </label>
        <div class="form-actions">
          <button type="submit" class="btn primary">Cadastrar aluno</button>
        </div>
      </form>
      <div class="list">
        ${rows}
      </div>
    </div>
  `;
}

function renderGuardianRegistry() {
  const guardians = byActiveSchool(state.data.guardians);
  const rows = guardians.length
    ? guardians
        .map(
          (guardian) => `
            <div class="row">
              <div>
                <strong>${escapeHtml(guardian.name)}</strong>
                <small>${escapeHtml(guardian.studentName)} · ${escapeHtml(guardian.phone)} · ${escapeHtml(guardian.email)}</small>
              </div>
              <span class="badge coral">Responsável</span>
            </div>
          `,
        )
        .join("")
    : emptyState("Nenhum responsável cadastrado nesta escola.");

  return `
    <div class="dashboard-grid">
      <form id="guardianForm" class="form-grid" autocomplete="off">
        <label>
          <span>Nome</span>
          <input name="name" placeholder="Nome completo" required />
        </label>
        <label>
          <span>Aluno vinculado</span>
          <input name="studentName" placeholder="Nome do aluno" required />
        </label>
        <label>
          <span>Telefone</span>
          <input name="phone" placeholder="(00) 90000-0000" required />
        </label>
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder="responsavel@email.com" required />
        </label>
        <div class="form-actions">
          <button type="submit" class="btn primary">Cadastrar responsável</button>
        </div>
      </form>
      <div class="list">
        ${rows}
      </div>
    </div>
  `;
}

function renderTeacher() {
  const activeSchool = getActiveSchool();
  if (!activeSchool) {
    return emptyState("Cadastre uma escola para abrir a área de professores.");
  }

  const students = byActiveSchool(state.data.students);
  const lessons = byActiveSchool(state.data.lessons);
  const attendanceRows = students.slice(0, 6).map(renderAttendanceRow).join("") || emptyState("Nenhum aluno disponível para chamada.");
  const lessonRows = lessons.length
    ? lessons
        .map(
          (lesson) => `
            <div class="lesson">
              <time>${formatShortDate(lesson.date)}</time>
              <div>
                <strong>${escapeHtml(lesson.title)}</strong>
                <small>${escapeHtml(lesson.className)} · ${escapeHtml(lesson.subject)}</small>
              </div>
              <span class="badge">${escapeHtml(lesson.subject)}</span>
            </div>
          `,
        )
        .join("")
    : emptyState("Nenhuma aula registrada.");

  return `
    <section class="profile-banner">
      <div>
        <h3>${escapeHtml(activeSchool.name)}</h3>
        <p>Registro de aulas, chamada e acompanhamento das turmas.</p>
      </div>
      ${renderMiniCalendar()}
    </section>

    <section class="split-list">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Registrar aula</h3>
            <p>Diário da turma selecionada.</p>
          </div>
        </div>
        <div class="panel-body">
          <form id="lessonForm" class="form-grid" autocomplete="off">
            <label>
              <span>Data</span>
              <input type="date" name="date" value="2026-06-02" required />
            </label>
            <label>
              <span>Turma</span>
              <input name="className" placeholder="6º A" required />
            </label>
            <label>
              <span>Disciplina</span>
              <input name="subject" placeholder="Matemática" required />
            </label>
            <label>
              <span>Título</span>
              <input name="title" placeholder="Conteúdo da aula" required />
            </label>
            <label class="full">
              <span>Anotações</span>
              <textarea name="notes" placeholder="Desenvolvimento da aula, tarefas e observações"></textarea>
            </label>
            <div class="form-actions">
              <button type="submit" class="btn primary">Salvar aula</button>
            </div>
          </form>
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Chamada</h3>
            <p>Presença da aula atual.</p>
          </div>
        </div>
        <div class="panel-body attendance-list">
          ${attendanceRows}
        </div>
      </article>
    </section>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>Aulas recentes</h3>
          <p>Histórico salvo no diário.</p>
        </div>
      </div>
      <div class="panel-body timetable">
        ${lessonRows}
      </div>
    </section>
  `;
}

function renderAttendanceRow(student) {
  return `
    <div class="attendance-item">
      <div>
        <strong>${escapeHtml(student.name)}</strong>
        <small>${escapeHtml(student.grade)}</small>
      </div>
      <label>
        <input type="checkbox" checked />
        Presente
      </label>
    </div>
  `;
}

function renderStudent() {
  const students = byActiveSchool(state.data.students);
  if (!students.length) {
    return emptyState("Nenhum aluno cadastrado nesta escola.");
  }

  if (!state.selectedStudentId || !students.some((student) => student.id === state.selectedStudentId)) {
    state.selectedStudentId = students[0].id;
  }

  const student = students.find((item) => item.id === state.selectedStudentId);
  const options = students
    .map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === student.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`)
    .join("");

  return `
    <section class="profile-banner">
      <div>
        <p class="eyebrow">Aluno</p>
        <h3>${escapeHtml(student.name)}</h3>
        <p>${escapeHtml(student.grade)} · Matrícula ${escapeHtml(student.enrollment)}</p>
      </div>
      <label>
        <span>Aluno</span>
        <select data-student-select>
          ${options}
        </select>
      </label>
    </section>

    <section class="summary-grid">
      ${metric("Média geral", "8,7", "teal")}
      ${metric("Frequência", "96%", "amber")}
      ${metric("Atividades", "12", "green")}
      ${metric("Recados", "3", "coral")}
    </section>

    <section class="split-list">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Desempenho</h3>
            <p>Notas por componente curricular.</p>
          </div>
        </div>
        <div class="panel-body progress-list">
          ${renderProgress("Matemática", 88)}
          ${renderProgress("Português", 84)}
          ${renderProgress("Ciências", 91)}
          ${renderProgress("História", 79)}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Agenda</h3>
            <p>Próximas atividades.</p>
          </div>
        </div>
        <div class="panel-body timetable">
          ${renderAgendaItem("07:30", "Matemática", "Lista de exercícios")}
          ${renderAgendaItem("09:20", "Português", "Leitura orientada")}
          ${renderAgendaItem("13:10", "Ciências", "Experimento em grupo")}
        </div>
      </article>
    </section>
  `;
}

function renderGuardian() {
  const guardians = byActiveSchool(state.data.guardians);
  if (!guardians.length) {
    return emptyState("Nenhum responsável cadastrado nesta escola.");
  }

  if (!state.selectedGuardianId || !guardians.some((guardian) => guardian.id === state.selectedGuardianId)) {
    state.selectedGuardianId = guardians[0].id;
  }

  const guardian = guardians.find((item) => item.id === state.selectedGuardianId);
  const options = guardians
    .map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === guardian.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`)
    .join("");

  return `
    <section class="profile-banner">
      <div>
        <p class="eyebrow">Responsável</p>
        <h3>${escapeHtml(guardian.name)}</h3>
        <p>${escapeHtml(guardian.studentName)} · ${escapeHtml(guardian.phone)}</p>
      </div>
      <label>
        <span>Responsável</span>
        <select data-guardian-select>
          ${options}
        </select>
      </label>
    </section>

    <section class="summary-grid">
      ${metric("Frequência", "96%", "teal")}
      ${metric("Média", "8,7", "amber")}
      ${metric("Pendências", "0", "green")}
      ${metric("Recados", "3", "coral")}
    </section>

    <section class="split-list">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Acompanhamento</h3>
            <p>Resumo pedagógico do estudante.</p>
          </div>
        </div>
        <div class="panel-body progress-list">
          ${renderProgress("Participação", 92)}
          ${renderProgress("Tarefas entregues", 86)}
          ${renderProgress("Frequência", 96)}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3>Recados</h3>
            <p>Comunicados recentes da escola.</p>
          </div>
        </div>
        <div class="panel-body message-list">
          <div class="message">
            <strong>Reunião pedagógica</strong>
            <small>Quinta-feira, 18h30, na coordenação.</small>
          </div>
          <div class="message amber">
            <strong>Atividade de Ciências</strong>
            <small>Material de apoio disponível no diário.</small>
          </div>
          <div class="message coral">
            <strong>Autorização</strong>
            <small>Assinatura pendente para visita externa.</small>
          </div>
        </div>
      </article>
    </section>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>Solicitar atendimento</h3>
          <p>Contato com a gestão escolar.</p>
        </div>
      </div>
      <div class="panel-body">
        <form id="contactForm" class="form-grid">
          <label>
            <span>Assunto</span>
            <input name="subject" placeholder="Assunto" required />
          </label>
          <label>
            <span>Preferência</span>
            <select name="preference">
              <option>WhatsApp</option>
              <option>E-mail</option>
              <option>Ligação</option>
            </select>
          </label>
          <label class="full">
            <span>Mensagem</span>
            <textarea name="message" placeholder="Escreva sua mensagem" required></textarea>
          </label>
          <div class="form-actions">
            <button type="submit" class="btn primary">Enviar solicitação</button>
          </div>
        </form>
      </div>
    </section>
  `;
}

function renderMiniCalendar() {
  return `
    <div class="mini-calendar" aria-hidden="true">
      ${Array.from({ length: 28 }, () => "<span></span>").join("")}
    </div>
  `;
}

function renderProgress(label, value) {
  return `
    <div class="progress-item">
      <div class="progress-label">
        <span>${escapeHtml(label)}</span>
        <strong>${value}%</strong>
      </div>
      <div class="progress-track">
        <span style="--value: ${value}%"></span>
      </div>
    </div>
  `;
}

function renderAgendaItem(time, title, note) {
  return `
    <div class="lesson">
      <time>${escapeHtml(time)}</time>
      <div>
        <strong>${escapeHtml(title)}</strong>
        <small>${escapeHtml(note)}</small>
      </div>
      <span class="badge amber">Hoje</span>
    </div>
  `;
}

function formatShortDate(dateValue) {
  if (!dateValue) {
    return "--/--";
  }

  const [year, month, day] = dateValue.split("-");
  return `${day}/${month}`;
}

function getFormData(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function handleSchoolForm(form) {
  const values = getFormData(form);
  const school = {
    id: getId("school"),
    name: values.name.trim(),
    city: values.city.trim(),
    state: values.state.trim().toUpperCase(),
    code: values.code.trim().toUpperCase(),
    managers: [],
  };

  state.data.schools.push(school);
  state.activeSchoolId = school.id;
  form.reset();
  saveData();
  renderShell();
  showToast("Escola cadastrada.");
}

function handleManagerForm(form) {
  const values = getFormData(form);
  const school = state.data.schools.find((item) => item.id === values.schoolId);

  if (!school) {
    showToast("Selecione uma escola.");
    return;
  }

  const managerId = getId("manager");
  school.managers.push({
    id: managerId,
    name: values.name.trim(),
    role: values.role.trim(),
    email: values.email.trim(),
  });

  // Add a login user entry for the manager in pending state (requires admin approval)
  loginUsers.push({
    id: managerId,
    role: "manager",
    schoolId: values.schoolId,
    name: values.name.trim(),
    email: values.email.trim(),
    password: values.password?.trim() || "",
    approved: false,
  });

  form.reset();
  saveData();
  renderShell();
  showToast("Gestor cadastrado e pendente de aprovação.");
}

function handleTeacherForm(form) {
  const values = getFormData(form);
  state.data.teachers.push({
    id: getId("teacher"),
    schoolId: state.activeSchoolId,
    name: values.name.trim(),
    subject: values.subject.trim(),
    classes: values.classes.trim(),
    email: values.email.trim(),
  });

  form.reset();
  saveData();
  renderShell();
  showToast("Professor cadastrado.");
}

function handleStudentForm(form) {
  const values = getFormData(form);
  const student = {
    id: getId("student"),
    schoolId: state.activeSchoolId,
    name: values.name.trim(),
    grade: values.grade.trim(),
    enrollment: values.enrollment.trim(),
    guardianId: values.guardianId,
    status: "Ativo",
  };

  state.data.students.push(student);
  state.selectedStudentId = student.id;
  form.reset();
  saveData();
  renderShell();
  showToast("Aluno cadastrado.");
}

function handleGuardianForm(form) {
  const values = getFormData(form);
  const guardian = {
    id: getId("guardian"),
    schoolId: state.activeSchoolId,
    name: values.name.trim(),
    studentName: values.studentName.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
  };

  state.data.guardians.push(guardian);
  state.selectedGuardianId = guardian.id;
  form.reset();
  saveData();
  renderShell();
  showToast("Responsável cadastrado.");
}

function handleLessonForm(form) {
  const values = getFormData(form);
  state.data.lessons.unshift({
    id: getId("lesson"),
    schoolId: state.activeSchoolId,
    date: values.date,
    className: values.className.trim(),
    subject: values.subject.trim(),
    title: values.title.trim(),
    notes: values.notes.trim(),
  });

  form.reset();
  saveData();
  renderShell();
  showToast("Aula salva no diário.");
}

function handleContactForm(form) {
  form.reset();
  showToast("Solicitação enviada.");
}

// Login handling: find user by email, allow admin to access all roles
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const values = getFormData(loginForm);
  const email = values.email.trim().toLowerCase();
  const password = values.password || "";

  const user = loginUsers.find((item) => item.email.toLowerCase() === email);

  if (!user) {
    showLoginError("Usuário não encontrado. Tente entrar com sua conta Google ou registre-se.");
    return;
  }

  // If manager, require approval
  if (user.role === "manager" && !user.approved) {
    showLoginError("Conta de gestor pendente de aprovação pelo administrador.");
    return;
  }

  // Password check: allow empty passwords for OAuth-created accounts
  if (user.password && user.password !== password) {
    showLoginError("Senha incorreta.");
    return;
  }

  loginError.textContent = "";
  state.currentUser = user;
  state.currentRole = user.role;

  if (user.schoolId) {
    state.activeSchoolId = user.schoolId;
  }

  enterApp(user.role);
  showToast(`Bem-vindo(a), ${user.name}`);
});

// Simulated Google Sign-In (client-side): prompts for email and signs in or creates pending account
function googleSignIn() {
  const email = (window.prompt("Entre com o e-mail Google para simular sign-in:") || "").trim().toLowerCase();
  if (!email) {
    return showLoginError("E-mail não informado.");
  }

  let user = loginUsers.find((u) => u.email.toLowerCase() === email);
  if (user) {
    if (user.role === "manager" && !user.approved) {
      return showLoginError("Conta de gestor pendente de aprovação.");
    }
    state.currentUser = user;
    state.currentRole = user.role;
    if (user.schoolId) state.activeSchoolId = user.schoolId;
    enterApp(user.role);
    return showToast(`Bem-vindo(a), ${user.name}`);
  }

  // Create a guardian account by default (pending approval)
  const id = getId("guardian");
  const name = email.split("@")[0].replace(/[._]/g, " ");
  const schoolId = state.data.schools[0]?.id || "";

  const newUser = {
    id,
    role: "guardian",
    schoolId,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    email,
    password: "",
    approved: false,
  };

  loginUsers.push(newUser);
  state.data.guardians.push({
    id,
    schoolId,
    name: newUser.name,
    phone: "",
    email,
    studentName: "",
  });
  saveData();

  showToast("Conta criada via Google e pendente de aprovação pelo gestor.");
}

document.getElementById("googleSignInBtn")?.addEventListener("click", googleSignIn);

appView.addEventListener("click", (event) => {
  const roleButton = event.target.closest("[data-role-nav]");
  const managerTab = event.target.closest("[data-manager-tab]");
  const logoutButton = event.target.closest("[data-logout]");

  if (roleButton) {
    state.currentRole = roleButton.dataset.roleNav;
    renderShell();
    return;
  }

  if (managerTab) {
    state.managerTab = managerTab.dataset.managerTab;
    renderShell();
    return;
  }

  if (logoutButton) {
    leaveApp();
  }

  const approveBtn = event.target.closest("[data-approve-manager]");
  if (approveBtn) {
    const id = approveBtn.dataset.approveManager;
    const user = loginUsers.find((u) => u.id === id && u.role === "manager");
    if (user) {
      user.approved = true;
      showToast(`Gestor ${user.name} aprovado.`);
      saveData();
      renderShell();
    }
    return;
  }
});

schoolSelector.addEventListener("change", (event) => {
  state.activeSchoolId = event.target.value;
  state.selectedStudentId = "";
  state.selectedGuardianId = "";
  renderShell();
});

screenRoot.addEventListener("change", (event) => {
  if (event.target.matches("[data-student-select]")) {
    state.selectedStudentId = event.target.value;
    renderShell();
  }

  if (event.target.matches("[data-guardian-select]")) {
    state.selectedGuardianId = event.target.value;
    renderShell();
  }
});

screenRoot.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  if (form.id === "schoolForm") {
    handleSchoolForm(form);
  }

  if (form.id === "managerForm") {
    handleManagerForm(form);
  }

  if (form.id === "teacherForm") {
    handleTeacherForm(form);
  }

  if (form.id === "studentForm") {
    handleStudentForm(form);
  }

  if (form.id === "guardianForm") {
    handleGuardianForm(form);
  }

  if (form.id === "lessonForm") {
    handleLessonForm(form);
  }

  if (form.id === "contactForm") {
    handleContactForm(form);
  }
});

ensureActiveSchool();
updateLoginRole(state.selectedLoginRole);

