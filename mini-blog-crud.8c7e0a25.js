let t=async t=>{try{let t=await fetch("http://localhost:3000/posts");return await t.json()}catch(t){console.log(t.message)}},e={energy:document.querySelector(".posts__container .posts__list"),java:document.querySelector(".posts__container-java .posts__list"),juice:document.querySelector(".posts__container-juice .posts__list")},s=async()=>{await t().then(t=>{console.log(t),Object.values(e).forEach(t=>{e.innerHTML=""}),t.forEach(t=>{let s=e[t.category];s&&s.insertAdjacentHTML("beforeend",[t].map(t=>`
        <li
          class="posts__item"
  data-post-id="${t.id}"
  data-post-img="${t.img}"
  data-post-category="${t.category}"
        >
       <label class="posts__change-img">
  Photo
  <input
    type="file"
    class="posts__img-input"
    accept="image/*"
    hidden
  >
</label>
          <button class="posts__edit" type="button" aria-label="Edit">
            ✎
          </button>

          <button class="posts__delete" type="button" aria-label="Delete">
            &times;
          </button>

          <button class="posts__save" type="button">
           Save
          </button>

          <div class="posts__card">
            <div class="posts__front">
              <img src="${t.img}" alt="${t.title}" class="posts__img">
            </div>

            <div class="posts__back">
              <h2 class="posts__title">${t.title}</h2>
              <p class="posts__description">${t.description}</p>
            </div>
          </div>
        </li>
      `).join(""))})})},o=async t=>{try{let e={method:"POST",body:JSON.stringify(t)};return await fetch("http://localhost:3000/posts",e).then(t=>t.json())}catch(t){console.log(t.message)}},a=async(t,e)=>{t.preventDefault();let a=t.target,r=a.elements,l={title:r.title.value,img:r.img.value,description:r.description.value,category:r.category.value};try{await o(l),await s(),a.reset(),e()}catch(t){console.error("Failed to add post:",t)}},r=async t=>{try{return await fetch(`http://localhost:3000/posts/${t}`,{method:"DELETE"})}catch(t){console.log(t.message)}},l=async t=>{try{if(!(await r(t)).ok)throw Error("Failed to delete the post");await s()}catch(t){console.error("Error deleting:",t)}},i=async(t,e)=>{try{return await fetch(`http://localhost:3000/posts/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t.message)}},c=async()=>{try{let t=await fetch("http://localhost:3000/users");return await t.json()}catch(t){console.log(t.message)}},n=async t=>{try{let e=await c();if(!Array.isArray(e))return void console.log("Не удалось загрузить пользователей");let s=e.find(e=>e.email===t.email);if(!s||s.password!==t.password)return;return s}catch(t){console.log(t.message)}},d=async t=>{try{let e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},s=await fetch("http://localhost:3000/users",e);return await s.json()}catch(t){console.log(t.message)}},u=async t=>{try{let e=await c();if(!Array.isArray(e))return void console.log("Не удалось получить список пользователей");if(e.find(e=>e.email===t.email))return;let s=await d(t);if(s)return s}catch(t){console.log(t.message)}};(async()=>{let t,e,o,r,c,n,d,u,m;await s(),await (t=document.querySelector("[data-addPost-form]"),e=document.querySelectorAll(".posts__add-btn"),o=document.querySelector("[data-addPosts]"),r=document.querySelector("[data-addPost-form]"),c=document.querySelector("[data-backdrop]"),n=document.querySelector(".close-modal"),d=()=>{o.classList.remove("is-open"),c.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.documentElement.classList.remove("no-scroll")},e.forEach(t=>{t.addEventListener("click",()=>{let e=t.closest("[data-category]");r.elements.category.value=e.dataset.category,o.classList.add("is-open"),c.classList.add("is-open"),document.body.classList.add("no-scroll"),document.documentElement.classList.add("no-scroll")})}),console.log(n),null!==n&&(n.addEventListener("click",d),c.addEventListener("click",d)),u=d,void((m=document.querySelector(".posts__edit-mode")).addEventListener("click",()=>{document.body.classList.toggle("editing-mode"),m.textContent=document.body.classList.contains("editing-mode")?"✓ Done":"✎ Edit posts"}),document.addEventListener("click",async t=>{let e=t.target.closest(".posts__edit");if(e){let t=e.closest(".posts__item");if(t.classList.contains("text-editing"))return;let s=t.querySelector(".posts__title"),o=t.querySelector(".posts__description");s.contentEditable="true",o.contentEditable="true",s.classList.add("text-editable"),o.classList.add("text-editable"),t.classList.add("text-editing");return}let o=t.target.closest(".posts__save");if(!o)return;let a=o.closest(".posts__item"),r=a.querySelector(".posts__title"),l=a.querySelector(".posts__description");a.querySelector(".posts__img");let c={title:r.textContent.trim(),description:l.textContent.trim(),img:a.dataset.postImg,category:a.dataset.postCategory};if(!c.title||!c.description)return void alert("Fill in the title and description");try{o.disabled=!0;let t=await i(a.dataset.postId,c);if(!t||!t.ok)throw Error("Failed to save the post");await s()}catch(t){console.error(t),alert("Save error")}finally{o.disabled=!1}}),document.addEventListener("change",t=>{if(!t.target.matches(".posts__img-input"))return;let e=t.target.files[0];if(!e)return;if(!e.type.startsWith("image/")){alert("Выбери файл изображения"),t.target.value="";return}if(e.size>1048576){alert("Выбери изображение размером до 1 МБ"),t.target.value="";return}let s=t.target.closest(".posts__item"),o=s.querySelector(".posts__img"),a=new FileReader;a.onload=()=>{o.src=a.result,s.dataset.postImg=a.result},a.readAsDataURL(e)}),t.addEventListener("submit",t=>{a(t,u)}),document.addEventListener("click",t=>{let e=t.target.closest(".posts__delete");if(!e)return;let s=e.closest(".posts__item");s&&l(s.dataset.postId)})))})(),(()=>{let t=document.querySelector(".header__button"),e=document.querySelector("[data-auth-modal]"),s=document.querySelector("[data-auth-close]"),o=document.querySelector("[data-login-form]"),a=document.querySelector("[data-register-form]"),r=document.querySelector("[data-auth-message]"),l=document.querySelector('[data-auth-tab="login"]'),i=document.querySelector('[data-auth-tab="register"]');if(!t||!e||!s||!o||!a||!l||!i)return;let c=t=>{localStorage.setItem("currentUser",t),e.classList.remove("is-open");let s=document.querySelector(".header__log-in");s.innerHTML=`
    <button class="header__button header__welcome" type="button">
      Hi, ${t}!
    </button>
  `,s.querySelector(".header__welcome").addEventListener("click",()=>{e.classList.add("is-open")})};t.addEventListener("click",()=>{e.classList.add("is-open"),document.body.classList.add("no-scroll"),document.documentElement.classList.add("no-scroll")}),s.addEventListener("click",()=>{e.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.documentElement.classList.remove("no-scroll")}),l.addEventListener("click",()=>{o.hidden=!1,a.hidden=!0,l.classList.add("active"),i.classList.remove("active"),r&&(r.textContent="")}),i.addEventListener("click",()=>{o.hidden=!0,a.hidden=!1,i.classList.add("active"),l.classList.remove("active"),r&&(r.textContent="")}),a.addEventListener("submit",async t=>{t.preventDefault();let e=new FormData(a),s={name:e.get("name").trim(),email:e.get("email").trim(),password:e.get("password")},o=await u(s);o?(c(o.name),a.reset()):r&&(r.textContent="This email may already be registered. Please check your details.")}),o.addEventListener("submit",async t=>{t.preventDefault();let e=new FormData(o),s={email:e.get("email").trim(),password:e.get("password")},a=await n(s);a?(c(a.name),o.reset()):r&&(r.textContent="Invalid email or password!")});let d=localStorage.getItem("currentUser");d&&c(d)})();
//# sourceMappingURL=mini-blog-crud.8c7e0a25.js.map
