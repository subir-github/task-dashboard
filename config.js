// ─────────────────────────────────────────────────────────────────
//  Task Dashboard — Configuration File
//  Edit the values below, then save this file.
//  The dashboard reads these on every page load.
// ─────────────────────────────────────────────────────────────────

window.DASHBOARD_CONFIG = {

  // ── Google Sheets ──────────────────────────────────────────────
  sheetId:    "",
  apiKey:     "",
  sheetTab:   "Sheet1",
  oauthToken: "",

  // ── EmailJS ────────────────────────────────────────────────────
  emailjsPublicKey:  "",
  emailjsServiceId:  "",
  emailjsTemplateId: "template_m0zs897",
  emailjsSenderName: "Subir - Team Lead",

  // ── Team Members ───────────────────────────────────────────────
  team: [
    { name: "akash", email: "akash.tarafdar@codeclouds.co.in" },
    { name: "koyal", email: "koyal.das@codeclouds.in" },
    { name: "arnab", email: "arnab.sikdar@codeclouds.com" },
    { name: "sandeep", email: "sandeep.prasad@codeclouds.in" },
    { name: "shamik", email: "shamik.mitra@codeclouds.com" },
    { name: "sanjib", email: "sanjib.chanda@codeclouds.in" },
  ],

};
