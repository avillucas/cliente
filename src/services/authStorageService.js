const STORAGE_KEY = "gdp";

export function saveAuth(auth) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
}

export function loadAuth() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // fallback @todo
  }
  return { token: null, user: null };
}

export function clearAuth() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getToken() {
  return loadAuth().token;
}

export function getUser() {
  return loadAuth().user;
}
