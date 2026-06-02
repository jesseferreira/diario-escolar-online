// Google Sign-In with modal account selector
function googleSignIn() {
  googleAccountsList.innerHTML = `
    <button type="button" class="google-account-btn" data-google-email="paulo.santos@email.com">
      <div class="google-account-avatar">PS</div>
      <div class="google-account-info"><div class="google-account-name">Paulo Santos</div><div class="google-account-email">paulo.santos@email.com</div></div>
    </button>
    <button type="button" class="google-account-btn" data-google-email="ana.costa@email.com">
      <div class="google-account-avatar">AC</div>
      <div class="google-account-info"><div class="google-account-name">Ana Costa</div><div class="google-account-email">ana.costa@email.com</div></div>
    </button>
    <button type="button" class="google-account-btn" data-google-email="joao.silva@email.com">
      <div class="google-account-avatar">JS</div>
      <div class="google-account-info"><div class="google-account-name">João Silva</div><div class="google-account-email">joao.silva@email.com</div></div>
    </button>
  `;
  googleModal.hidden = false;
}

function handleGoogleAccountSelect(email) {
  email = email.toLowerCase();
  googleModal.hidden = true;
  let user = loginUsers.find((u) => u.email.toLowerCase() === email);
  if (user) {
    if (user.role === "manager" && !user.approved) return showLoginError("Conta pendente de aprovação.");
    state.currentUser = user;
    state.currentRole = user.role;
    if (user.schoolId) state.activeSchoolId = user.schoolId;
    enterApp(user.role);
    return showToast(`Bem-vindo(a), ${user.name}`);
  }
  const id = getId("loginreq");
  const name = email.split("@")[0].replace(/[._]/g, " ");
  const schoolId = state.data.schools[0]?.id || "";
  state.loginRequests.push({id, email, name: name.charAt(0).toUpperCase() + name.slice(1), schoolId, role: "guardian", status: "pending", createdAt: new Date().toISOString()});
  saveData();
  showLoginError("Conta criada! Aguardando aprovação do gestor da sua escola.");
}

function approveLoginRequest(requestId) {
  const request = state.loginRequests.find((r) => r.id === requestId);
  if (!request) return;
  const newUser = {id: request.id, role: request.role, schoolId: request.schoolId, name: request.name, email: request.email, password: "", approved: true};
  loginUsers.push(newUser);
  state.data.guardians.push({id: request.id, schoolId: request.schoolId, name: request.name, phone: "", email: request.email, studentName: ""});
  request.status = "approved";
  saveData();
  showToast(`Login de ${request.name} foi aprovado.`);
  renderShell();
}

function rejectLoginRequest(requestId) {
  state.loginRequests = state.loginRequests.filter((r) => r.id !== requestId);
  saveData();
  showToast("Solicitação rejeitada.");
  renderShell();
}

// Modal event handlers
googleModal.addEventListener("click", (e) => {
  const accountBtn = e.target.closest(".google-account-btn");
  const closeBtn = e.target.closest(".close-btn");
  const backdrop = e.target.closest(".google-modal-backdrop");
  if (accountBtn) handleGoogleAccountSelect(accountBtn.dataset.googleEmail);
  if (closeBtn || backdrop) googleModal.hidden = true;
});

document.getElementById("googleUseAnotherBtn")?.addEventListener("click", () => {
  const email = window.prompt("Digite o e-mail:")?.trim().toLowerCase();
  if (email) handleGoogleAccountSelect(email);
});

document.getElementById("googleSignInBtn")?.addEventListener("click", googleSignIn);
