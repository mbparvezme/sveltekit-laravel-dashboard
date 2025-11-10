const enc = new TextEncoder();
const dec = new TextDecoder();

async function encryptString(text, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const keyMaterial = await crypto.subtle.importKey(
    'raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']
  );

  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );

  const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(text));

  const combined = new Uint8Array([...salt, ...iv, ...new Uint8Array(cipher)]);
  return btoa(String.fromCharCode(...combined));
}

async function decryptString(base64, password) {
  try {
    const combined = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    const salt = combined.slice(0, 16);
    const iv = combined.slice(16, 28);
    const data = combined.slice(28);

    const keyMaterial = await crypto.subtle.importKey(
      'raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']
    );

    const key = await crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );

    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
    return dec.decode(decrypted);
  } catch (err) {
    return null;
  }
}

const encVal = await encryptString("myHiddenText", "password")
const decVal = await decryptString(encVal, "password")
const decVal2 = await decryptString(encVal, "password2")

console.log(encVal)
console.log(decVal)
console.log(decVal2)