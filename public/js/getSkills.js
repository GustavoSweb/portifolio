const content_skills = document.getElementById("content-skills");

async function getSkills() {
  try {
    const skills = await axios.get(
      "https://projects-api-three.vercel.app/skills"
    );
    return skills.data;
  } catch (err) {
    console.error(err);
  }
}

async function appendChildSkills() {
  try {
    const skills = await getSkills();

    skills.forEach((skill) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      div.classList.add(
        "cardIcon",
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
