async function getProjects() {
  try {
    const projects = await axios.get(
      "https://projects-api-q2ba.onrender.com/projects"
    );
    return projects.data;
  } catch (err) {
    console.error(err);
  }
}
async function createFeed() {
  const projects = await getProjects();

  var decoration = "";
  var feedProject = projects.map((project) => {
    decoration += `
  <div class="relative" ><div class="h-[20px] w-[20px] transform rotate-45 bg-white border-2 border-dourado"></div>
  <div>
  <div class="bg-white absolute flex p-[10px] top-[-35px] left-[100px] w-[150px] h-[75px] border-2 border-[#FFC70040] rounded-lg ">
  <p class="z-30 absolute text-[14px] text-cinza">Produzido em ${new Date(
    project.date_finalized
  ).toLocaleDateString("pt-BR")}</p>
  </div>
  <div class="h-[20px] w-[20px] transform rotate-45 bg-white absolute top-[0px] left-[93px] z-10"></div>
  <div class="h-[20px] w-[20px] transform rotate-45 bg-white border-2 border-[#FFC70040] absolute top-[0px] left-[90px]"></div>
  </div>
  
  </div>
  `;
    var skills = project.skills.map((skill) => {
      return `
        
    <img
      src="${skill.urlBackground}"
      alt=""
      class="h-[20px] "
    />
        `;
    });
    var feedSkills = "";
    for (var skill of skills) {
      feedSkills += skill;
    }
    return `
    
<div
              class="CardProjects max-w-[90vw] lg:max-w-[872px] flex flex-col lg:flex-row bg-white rounded-sm shadow-sm lg:p-[22px]"
            >
              <div
                class="lg:pr-[44px] min-w-[100%] min-h-[100%] lg:min-h-0 lg:min-w-0 flex flex-col items-center"
              >
                <img
                  src="${project.urlBackground}"
                  alt=""
                  class="w-[100%] h-[100%] lg:max-w-[223px] lg:max-h-[120px]"
                />
                <div class="SkillsProjects gap-[10px] mt-[22px] hidden md:flex">
                ${feedSkills}
  </div>

              </div>
              <div class="p-[22px] lg:p-0">
                <div class="HeaderCardProjects flex justify-between">
                  <div class="flex-col">
                    <h6 class="text-cinza hidden lg:block">
                      Construção: ${project.production_time}
                    </h6>
                    <h4 class="text-[30px] TextPoppins font-medium">
                      ${project.name}
                    </h4>
                    
                  </div>
                  <div class="hidden gap-[22px] lg:flex">
                    <a href="${project.url}" target="_blank">
                      <div
                        class="transform scale-1 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer gap-[16px] bg-dourado px-[16px] py-[8px] rounded-[10px] flex justify-center items-center"
                      >
                        <p
                          class="TextRoboto font-semibold text-emphaseTextDourado"
                        >
                          VEJA
                        </p>
                        <svg
                          width="17"
                          height="23"
                          viewBox="0 0 17 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.5833 14.375H17V18.6875C17 19.4781 16.3625 20.125 15.5833 20.125H1.41667C0.6375 20.125 0 19.4781 0 18.6875V4.3125C0 3.52187 0.6375 2.875 1.41667 2.875H5.66667V4.3125H1.41667V18.6875H15.5833V14.375ZM8.5 2.875L11.6875 6.10938L7.08333 10.7812L9.20833 12.9375L13.8125 8.26562L17 11.5V2.875H8.5Z"
                            fill="#6B5400"
                          />
                        </svg>
                      </div>
                    </a>
                    <a href="${project.repository}" target="_blank">
                      <div
                        class="border-2 border-[#686868] p-[7px] rounded-[10px] transform scale-1 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_466_82)">
                            <path
                              d="M9 19.0001C4 20.5001 4 16.5001 2 16.0001M16 22.0001V18.1301C16.0375 17.6532 15.9731 17.1739 15.811 16.7239C15.6489 16.2738 15.3929 15.8635 15.06 15.5201C18.2 15.1701 21.5 13.9801 21.5 8.52006C21.4997 7.12389 20.9627 5.78126 20 4.77006C20.4559 3.54857 20.4236 2.19841 19.91 1.00006C19.91 1.00006 18.73 0.65006 16 2.48006C13.708 1.85888 11.292 1.85888 9 2.48006C6.27 0.65006 5.09 1.00006 5.09 1.00006C4.57638 2.19841 4.54414 3.54857 5 4.77006C4.03013 5.78876 3.49252 7.14352 3.5 8.55006C3.5 13.9701 6.8 15.1601 9.94 15.5501C9.611 15.89 9.35726 16.2955 9.19531 16.74C9.03335 17.1845 8.96681 17.6581 9 18.1301V22.0001"
                              stroke="#686868"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_466_82">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <p
                  class="max-w-[600px] TextOpenSans font-[15px] text-cinza mt-[15px]"
                >
                  ${project.description}
                </p>
                <div class="SkillsProjects gap-[10px] mt-[22px] flex md:hidden">
                  ${feedSkills}
    </div>
                <div class="flex gap-[22px] mt-[20px] lg:hidden">
                  <a href="https://www.youtube.com/" target="_blank">
                    <div
                      class="transform scale-1 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer gap-[16px] bg-dourado px-[16px] py-[8px] rounded-[10px] flex justify-center items-center"
                    >
                      <p
                        class="TextRoboto font-semibold text-emphaseTextDourado"
                      >
                        VEJA
                      </p>
                      <svg
                        width="17"
                        height="23"
                        viewBox="0 0 17 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.5833 14.375H17V18.6875C17 19.4781 16.3625 20.125 15.5833 20.125H1.41667C0.6375 20.125 0 19.4781 0 18.6875V4.3125C0 3.52187 0.6375 2.875 1.41667 2.875H5.66667V4.3125H1.41667V18.6875H15.5833V14.375ZM8.5 2.875L11.6875 6.10938L7.08333 10.7812L9.20833 12.9375L13.8125 8.26562L17 11.5V2.875H8.5Z"
                          fill="#6B5400"
                        />
                      </svg>
                    </div>
                  </a>
                  <a href="">
                    <div
                      class="border-2 border-[#686868] p-[7px] rounded-[10px] transform scale-1 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_466_82)">
                          <path
                            d="M9 19.0001C4 20.5001 4 16.5001 2 16.0001M16 22.0001V18.1301C16.0375 17.6532 15.9731 17.1739 15.811 16.7239C15.6489 16.2738 15.3929 15.8635 15.06 15.5201C18.2 15.1701 21.5 13.9801 21.5 8.52006C21.4997 7.12389 20.9627 5.78126 20 4.77006C20.4559 3.54857 20.4236 2.19841 19.91 1.00006C19.91 1.00006 18.73 0.65006 16 2.48006C13.708 1.85888 11.292 1.85888 9 2.48006C6.27 0.65006 5.09 1.00006 5.09 1.00006C4.57638 2.19841 4.54414 3.54857 5 4.77006C4.03013 5.78876 3.49252 7.14352 3.5 8.55006C3.5 13.9701 6.8 15.1601 9.94 15.5501C9.611 15.89 9.35726 16.2955 9.19531 16.74C9.03335 17.1845 8.96681 17.6581 9 18.1301V22.0001"
                            stroke="#686868"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_466_82">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>


    `;
  });
  let finalFeedHTML = "";
  const DecorationProjects = document.getElementById("DecorationProjects");
  DecorationProjects.innerHTML = decoration;
  for (const itemProject of feedProject) {
    finalFeedHTML += itemProject;
  }
  document.getElementById("ProjectsFeed").innerHTML = finalFeedHTML;
}

createFeed();
