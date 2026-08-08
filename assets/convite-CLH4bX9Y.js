import{t as e}from"./src-BuU_dujX.js";import{t}from"./strings-7lrUkA26.js";import{d as n,f as r,l as i,u as a}from"./index-DF33kWzw.js";var o=`https://luizcmarin.github.io/papiro`;function s(e=o){return`${t.convite.mensagem}\n\n${e}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(e){let{default:t}=await n(async()=>{let{default:e}=await import(`./qrcode-DtWdxa9d.js`);return{default:e}},[],import.meta.url),r=t(0,`M`);return r.addData(e),r.make(),r.createDataURL(6,8)}async function u(e){try{await navigator.clipboard.writeText(s(e)),i(t.convite.copiado)}catch{i(t.leitura.semCopiar,`warning`)}}async function d(n){if(typeof navigator.share!=`function`){await u(n);return}try{await navigator.share({title:e.displayName,text:t.convite.mensagem,url:n})}catch{}}function f(){let n=o,i=``;return a(t.convite.titulo,void 0,(a,o,s)=>(i===``&&l(n).then(e=>{i=e,s()}),r`
        <div class="convite">
          <img class="convite__logo" src="icons/papiro.svg" alt="" aria-hidden="true" />
          <h2 class="convite__nome">${e.displayName}</h2>
          <p class="convite__lema">${t.convite.lema}</p>

          ${i===``?r`<div class="convite__qr convite__qr--vazio"><st-spinner></st-spinner></div>`:r`<img class="convite__qr" src=${i} alt=${t.convite.qrAlt} />`}

          <p class="convite__dica">${t.convite.dica}</p>

          <div class="convite__acoes">
            <st-button variant="success" href=${c(n)} target="_blank">
              <st-icon slot="prefix" name="brand-whatsapp"></st-icon>${t.convite.whatsapp}
            </st-button>
            <st-button variant="primary" @click=${()=>void d(n)}>
              <st-icon slot="prefix" name="share"></st-icon>${t.convite.compartilhar}
            </st-button>
            <st-button @click=${()=>void u(n)}>
              <st-icon slot="prefix" name="copy"></st-icon>${t.convite.copiar}
            </st-button>
          </div>

          <p class="convite__endereco">${n}</p>

          <st-button class="convite__fechar" @click=${()=>a(void 0)}>
            ${t.acoes.fechar}
          </st-button>
        </div>
      `),{semCabecalho:!0,classe:`dialogo-convite`})}export{f as abrirConvite};
//# sourceMappingURL=convite-CLH4bX9Y.js.map