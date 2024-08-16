const content_skills = document.getElementById("content-skills");

async function getSkills() {
  try {
    const skills = await axios.get("http://3.91.21.211/skills");
    return skills.data;
  } catch (err) {
    console.error(err);
  }
}

async function appendChildSkills() {
  try {
    const skills = await getSkills();

    skills.forEach((skill) => {
      console.log(skill);
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = skill.background_url;
      img.classList.add("w-[70%]", "h-[70%]");
      div.id = skill.id;
      div.title = skill.title;
      div.classList.add(
        "h-[100px]",
        "w-[100px]",
        "cardIcon",
        "flex",
        "justify-center",
        "items-center",
        "relative",
        "right-0",
        "top-0",
        "transition-all",
        "w-[120px]",
        "h-[120px]",
        "rounded-xl",
        "shadow-md",
        "bg-white",
        "transform",
        "hover:scale-110",
        "hover:bg-whiteNeve",
        "hover:shadow-xl"
      );
      div.appendChild(img);
      content_skills.appendChild(div);
    });
  } catch (err) {
    console.error(err);
  }
}
appendChildSkills();
