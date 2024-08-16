setTimeout(() => {
  if (window.innerWidth < 800) return;

  const content_skills = document.getElementById("content-skills");
  const projectsSkillFeed = document.getElementById("projectsSkillFeed");
  const content_skill_selected = document.getElementById(
    "content-skill-selected"
  );

  async function get_projects_skill(id) {
    const { data } = await axios.get(
      `http://3.91.21.211//skills/${id}/projects`
    );
    projectsSkillFeed.innerHTML = "";
    console.log(data);
    data.forEach((project) => {
      const div = document.createElement("div");
      const divInfo = document.createElement("div");
      const h4 = document.createElement("h4");
      const a = document.createElement("a");
      const img = document.createElement("img");
      div.classList.add("relative");
      a.href = project.url;
      a.target = "_blank";
      img.src = project.url_img;
      img.classList.add(
        "h-[115px",
        "w-[204.49px",
        "transform",
        "scale-1",
        "hover:scale-110",
        "transition-all"
      );
      a.appendChild(img);
      div.appendChild(a);
      h4.innerText = project.title;
      divInfo.appendChild(h4);
      divInfo.classList.add(
        "bg-white",
        "absolute",
        "top-[50%]",
        "left-[-150px]",
        "z-20",
        "p-[10px]",
        "rounded-lg",
        "shadow-sm",
        "transition-all"
      );
      divInfo.style.opacity = "0%";
      div.appendChild(divInfo);
      div.addEventListener("mouseenter", () => {
        divInfo.style.opacity = "100%";
      });
      div.addEventListener("mouseleave", () => {
        divInfo.style.opacity = "0%";
      });

      projectsSkillFeed.appendChild(div);
    });
  }

  /*
  <div class="relative">
                <div
                  class="bg-white absolute top-[50%] left-[-100px] z-20 p-[10px] rounded-lg shadow-sm"
                >
                  <h4>Portifolio</h4>
                </div>
                <a href="https://youtube.com/" target="_blank">
                  <img
                    src="https://storage.googleapis.com/solar-galaxy-342621.appspot.com/Projects/Project.png"
                    class="h-[115px] w-[204.49px] transform scale-1 hover:scale-110 transition-all"
                    alt=""
                  />
                </a>
              </div>
  */
  function set_Title_Skill_Select(value) {
    const div = document.createElement("div");
    const h6 = document.createElement("h6");
    const h4 = document.createElement("h4");
    h6.innerText = "Avançado";
    h4.innerText = value.title;
    h6.classList.add("TextRoboto", "text-cinza", "text-[16px]");
    h4.classList.add("TextPoppins", "font-medium", "text-[26px]");
    div.appendChild(h6);
    div.appendChild(h4);
    content_skill_selected.innerHTML = "";
    content_skill_selected.appendChild(div);
  }
  function skill_selected(value) {
    value.classList.remove("h-[100px]", "w-[100px]");
    value.classList.add("h-[70px]", "w-[70px]");
    set_Title_Skill_Select(value);
    content_skill_selected.appendChild(value);
    get_projects_skill(value.id);
  }
  function skill_deselect(value) {
    value.classList.remove("h-[70px]", "w-[70px]");
    value.classList.add("h-[100px]", "w-[100px]");
    content_skills.appendChild(value);
  }
  const cardIcon = document.querySelectorAll(".cardIcon");
  var old_value = cardIcon[0];
  cardIcon.forEach((value) => {
    value.addEventListener("click", () => {
      skill_deselect(old_value);

      skill_selected(value);

      old_value = value;
    });
  });
  skill_selected(cardIcon[0]);
}, 1000);
