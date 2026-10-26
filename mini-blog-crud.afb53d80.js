let e=async()=>{try{let e=await fetch("https://6adf971e8e42963c8d5e3348.mockapi.io/posts");if(!e.ok)throw Error(`HTTP error: ${e.status}`);return await e.json()}catch(e){return console.error("Failed to get posts:",e),null}},t={energy:document.querySelector(".posts__container .posts__list"),java:document.querySelector(".posts__container-java .posts__list"),juice:document.querySelector(".posts__container-juice .posts__list")},s=async()=>{let s=await e();(console.log("Posts:",s),console.log("Array:",Array.isArray(s)),Array.isArray(s))?(Object.values(t).forEach(e=>{e&&(e.innerHTML="")}),s.forEach(e=>{let s=t[e.category];s&&s.insertAdjacentHTML("beforeend",[e].map(e=>`
        <li
          class="posts__item"
  data-post-id="${e.id}"
  data-post-img="${e.img}"
  data-post-category="${e.category}"
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
              <img src="${e.img}" alt="${e.title}" class="posts__img">
            </div>

            <div class="posts__back">
              <h2 class="posts__title">${e.title}</h2>
              <p class="posts__description">${e.description}</p>
            </div>
          </div>
        </li>
      `).join(""))})):console.error("Posts is not an array:",s)},o=async e=>{try{let t={method:"POST",body:JSON.stringify(e)};return await fetch("https://6adf971e8e42963c8d5e3348.mockapi.io/posts",t).then(e=>e.json())}catch(e){console.log(e.message)}},a=async(e,t)=>{e.preventDefault();let a=e.target,r=a.elements,i={title:r.title.value,img:r.img.value,description:r.description.value,category:r.category.value};try{await o(i),await s(),a.reset(),t()}catch(e){console.error("Failed to add post:",e)}},r=async e=>{try{return await fetch(`https://6adf971e8e42963c8d5e3348.mockapi.io/posts/${e}`,{method:"DELETE"})}catch(e){console.log(e.message)}},i=async e=>{try{if(!(await r(e)).ok)throw Error("Failed to delete the post");await s()}catch(e){console.error("Error deleting:",e)}},c=async(e,t)=>{try{return await fetch(`https://6adf971e8e42963c8d5e3348.mockapi.io/posts/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}catch(e){console.log(e.message)}},l=async()=>{try{let e=await fetch("https://6adf971e8e42963c8d5e3348.mockapi.io/users");return await e.json()}catch(e){console.log(e.message)}},n=async e=>{try{let t=await l();if(!Array.isArray(t))return void console.log("Не удалось загрузить пользователей");let s=t.find(t=>t.email===e.email);if(!s||s.password!==e.password)return;return s}catch(e){console.log(e.message)}},d=async e=>{try{let t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},s=await fetch("https://6adf971e8e42963c8d5e3348.mockapi.io/users",t);return await s.json()}catch(e){console.log(e.message)}},u=async e=>{try{let t=await l();if(!Array.isArray(t))return void console.log("Не удалось получить список пользователей");if(t.find(t=>t.email===e.email))return;let s=await d(e);if(s)return s}catch(e){console.log(e.message)}};(async()=>{let e,t,o,r,l,n,d,u,m;await s(),await (console.log("Form:",e=document.querySelector("[data-addPost-form]")),console.log("Edit button:",document.querySelector(".posts__edit-mode")),t=document.querySelectorAll(".posts__add-btn"),o=document.querySelector("[data-addPosts]"),r=document.querySelector("[data-addPost-form]"),l=document.querySelector("[data-backdrop]"),n=document.querySelector(".close-modal"),d=()=>{o.classList.remove("is-open"),l.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.documentElement.classList.remove("no-scroll")},t.forEach(e=>{e.addEventListener("click",()=>{let t=e.closest("[data-category]");r.elements.category.value=t.dataset.category,o.classList.add("is-open"),l.classList.add("is-open"),document.body.classList.add("no-scroll"),document.documentElement.classList.add("no-scroll")})}),console.log(n),null!==n&&(n.addEventListener("click",d),l.addEventListener("click",d)),u=d,void(!(m=document.querySelector(".posts__edit-mode"))?console.log("Кнопка редактирования не найдена"):m.addEventListener("click",()=>{document.body.classList.toggle("editing-mode"),m.textContent=document.body.classList.contains("editing-mode")?"✓ Done":"✎ Edit posts"}),document.addEventListener("click",async e=>{let t=e.target.closest(".posts__edit");if(t){let e=t.closest(".posts__item");if(e.classList.contains("text-editing"))return;let s=e.querySelector(".posts__title"),o=e.querySelector(".posts__description");s.contentEditable="true",o.contentEditable="true",s.classList.add("text-editable"),o.classList.add("text-editable"),e.classList.add("text-editing");return}let o=e.target.closest(".posts__save");if(!o)return;let a=o.closest(".posts__item"),r=a.querySelector(".posts__title"),i=a.querySelector(".posts__description");a.querySelector(".posts__img");let l={title:r.textContent.trim(),description:i.textContent.trim(),img:a.dataset.postImg,category:a.dataset.postCategory};if(!l.title||!l.description)return void alert("Fill in the title and description");try{o.disabled=!0;let e=await c(a.dataset.postId,l);if(!e||!e.ok)throw Error("Failed to save the post");await s()}catch(e){console.error(e),alert("Save error")}finally{o.disabled=!1}}),document.addEventListener("change",e=>{if(!e.target.matches(".posts__img-input"))return;let t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){alert("Выбери файл изображения"),e.target.value="";return}if(t.size>1048576){alert("Выбери изображение размером до 1 МБ"),e.target.value="";return}let s=e.target.closest(".posts__item"),o=s.querySelector(".posts__img"),a=new FileReader;a.onload=()=>{o.src=a.result,s.dataset.postImg=a.result},a.readAsDataURL(t)}),e&&e.addEventListener("submit",e=>{a(e,u)}),document.addEventListener("click",e=>{let t=e.target.closest(".posts__delete");if(!t)return;let s=t.closest(".posts__item");s&&i(s.dataset.postId)})))})(),(()=>{let e=document.querySelector(".header__button"),t=document.querySelector("[data-auth-modal]"),s=document.querySelector("[data-auth-close]"),o=document.querySelector("[data-login-form]"),a=document.querySelector("[data-register-form]"),r=document.querySelector("[data-auth-message]"),i=document.querySelector('[data-auth-tab="login"]'),c=document.querySelector('[data-auth-tab="register"]');if(!e||!t||!s||!o||!a||!i||!c)return;let l=e=>{localStorage.setItem("currentUser",e),t.classList.remove("is-open");let s=document.querySelector(".header__log-in");s.innerHTML=`
    <button class="header__button header__welcome" type="button">
      Hi, ${e}!
    </button>
  `,s.querySelector(".header__welcome").addEventListener("click",()=>{t.classList.add("is-open")})};e.addEventListener("click",()=>{t.classList.add("is-open"),document.body.classList.add("no-scroll"),document.documentElement.classList.add("no-scroll")}),s.addEventListener("click",()=>{t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.documentElement.classList.remove("no-scroll")}),i.addEventListener("click",()=>{o.hidden=!1,a.hidden=!0,i.classList.add("active"),c.classList.remove("active"),r&&(r.textContent="")}),c.addEventListener("click",()=>{o.hidden=!0,a.hidden=!1,c.classList.add("active"),i.classList.remove("active"),r&&(r.textContent="")}),a.addEventListener("submit",async e=>{e.preventDefault();let t=new FormData(a),s={name:t.get("name").trim(),email:t.get("email").trim(),password:t.get("password")},o=await u(s);o?(l(o.name),a.reset()):r&&(r.textContent="This email may already be registered. Please check your details.")}),o.addEventListener("submit",async e=>{e.preventDefault();let t=new FormData(o),s={email:t.get("email").trim(),password:t.get("password")},a=await n(s);a?(l(a.name),o.reset()):r&&(r.textContent="Invalid email or password!")});let d=localStorage.getItem("currentUser");d&&l(d)})();
//# sourceMappingURL=mini-blog-crud.afb53d80.js.map
