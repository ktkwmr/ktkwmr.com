// Shared values for the generated pages.
export const ORIGIN = "https://ktkwmr.com";
export const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
