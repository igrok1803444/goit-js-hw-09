var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},e.parcelRequired7c6=t);var n=t("7Y9D8");const i=document.querySelector(".form");let l=0,u=0,d=0;function s(e,r){new Promise(((o,t)=>{const i=Math.random()>.3;setTimeout((()=>{i?o(n.Notify.success(`Fulfilled promise ${e} in ${r}ms`)):t(n.Notify.failure(`Rejected promise ${e} in ${r}ms`))}),r)}))}i.addEventListener("submit",(e=>{e.preventDefault(),l=Number(i.delay.value),u=Number(i.step.value),d=Number(i.amount.value);for(let e=0;e<d;e++)s(e,l),l+=u}));
//# sourceMappingURL=03-promises.113dce71.js.map
