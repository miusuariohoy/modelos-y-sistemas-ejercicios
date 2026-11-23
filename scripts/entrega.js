/* ============================================================
   entrega.js · modelos-y-sistemas-ejercicios
   Envío cifrado de evaluaciones al repo privado "inform".
   Usa el mismo canal y la misma clave pública que las entregas
   del repo Actividad-HTML-y-Git-hub. Cada página arma el payload
   y llama a window.enviarEntrega(payload).
   ============================================================ */
(function(){
  'use strict';

  const ENTREGA = {
    NTFY_TOPIC: 'py1-inform-7ae6582c6449a0fd',
    CLAVE_PUBLICA: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAy4M/CjOEBBmnmgPc2B+yj5O55KOVGE7voIQ41DWI8OMuuQVNlWgzUPgTxW58x7hOW/my1uiUNbNZvm3oixTZJtBw8Lxi8rMVCv9gRArhU8QELEyY1EjB9VCYxZ0UysC1375+m+J757GB3nweSvjRY5esbKzvYOLwh7Lj+sRY6mNgygm/RkeQKhqQ2u/L+PkIVZ7J9evXDofKYP6MOayW6kM61wqFjh32pE5kjDwMkIBmX73BgTD2elxP8iIfvKhr+dqVgft93Gn9x21SxbF1/Ih0ObpCzzTzbMsl2MRiZKR7PndaO7Wtbt1MxbvtvrpV/nTct6bMx1Rl9amYxtsdRwIDAQAB',
    MATERIA: 'Modelos y sistemas'
  };

  function b64DeBuffer(buffer){
    const bytes = new Uint8Array(buffer);
    let bin = '';
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  function bufferDeB64(texto){
    const bin = atob(texto);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  function comprimir(datos){
    if (!window.CompressionStream || !window.Response || !window.Blob) {
      return Promise.resolve({ datos: datos, z: 0 });
    }
    try {
      const flujo = new Blob([datos]).stream().pipeThrough(new window.CompressionStream('gzip'));
      return new Response(flujo).arrayBuffer().then(function(buffer){
        return { datos: new Uint8Array(buffer), z: 1 };
      }).catch(function(){ return { datos: datos, z: 0 }; });
    } catch (e) {
      return Promise.resolve({ datos: datos, z: 0 });
    }
  }

  function cifrarPayload(payload){
    if (!window.crypto || !window.crypto.subtle) {
      return Promise.reject(new Error('Este navegador no soporta cifrado. Probá con Chrome o Firefox actualizado.'));
    }
    const datos = new TextEncoder().encode(JSON.stringify(payload));
    return comprimir(datos).then(function(paquete){
      return window.crypto.subtle.importKey(
        'spki', bufferDeB64(ENTREGA.CLAVE_PUBLICA),
        { name: 'RSA-OAEP', hash: 'SHA-256' }, false, ['encrypt']
      ).then(function(clavePublica){
        return window.crypto.subtle.generateKey(
          { name: 'AES-GCM', length: 256 }, true, ['encrypt']
        ).then(function(claveAes){
          const iv = window.crypto.getRandomValues(new Uint8Array(12));
          return window.crypto.subtle.encrypt(
            { name: 'AES-GCM', iv: iv }, claveAes, paquete.datos
          ).then(function(cifrado){
            return window.crypto.subtle.exportKey('raw', claveAes).then(function(cruda){
              return window.crypto.subtle.encrypt(
                { name: 'RSA-OAEP' }, clavePublica, cruda
              ).then(function(claveCifrada){
                return {
                  k: b64DeBuffer(claveCifrada),
                  i: b64DeBuffer(iv),
                  d: b64DeBuffer(cifrado),
                  z: paquete.z
                };
              });
            });
          });
        });
      });
    });
  }

  function enviarEntrega(payload){
    const completo = Object.assign({}, payload, {
      materia: payload.materia || ENTREGA.MATERIA,
      momento: payload.momento || new Date().toISOString(),
      navegador: String(navigator.userAgent || '').slice(0, 400),
      origen: payload.origen || location.href
    });
    return cifrarPayload(completo).then(function(sobre){
      return fetch('https://ntfy.sh/' + encodeURIComponent(ENTREGA.NTFY_TOPIC), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(sobre),
        cache: 'no-store'
      }).then(function(r){
        if (!r.ok) throw new Error('El canal respondió ' + r.status);
        return true;
      });
    });
  }

  window.enviarEntrega = enviarEntrega;
  window.ENTREGA_MATERIA = ENTREGA.MATERIA;
})();
