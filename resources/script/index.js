const projectsSection = document.querySelector(".projects");
const interestsSection = document.querySelector(".interests");

const backendDiv = projectsSection.querySelector(".backend");
const frontendDiv = projectsSection.querySelector(".frontend");

const headers = document.getElementsByTagName("header");

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    const tags = header.getElementsByClassName("tag");
    const projectTag = tags[0];
    const interestsTag = tags[1];

    projectsSection.addEventListener("mouseenter", e => {
        projectTag.setAttribute("style", "display : block");
    });
    projectsSection.addEventListener("mouseleave", e => {
        projectTag.setAttribute("style", "display : none");
    });

    interestsSection.addEventListener("mouseenter", e => {
        interestsTag.setAttribute("style", "display : block");
    });
    interestsSection.addEventListener("mouseleave", e => {
        interestsTag.setAttribute("style", "display : none");
    });
}



function Project(link, imageUrl, title, description, skills, period) {
    this.link = link;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.period = period;
}

function addProject(project, targetContainer, imageSize, imagePosition) {
    let container;
    if (targetContainer === "backend") {
        container = backendDiv;
    }
    else {
        container = frontendDiv;
    }

    const article = document.createElement("article");
    const a = document.createElement("a");
    const projectImg = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("h6");
    const skills = document.createElement("div");
    const period = document.createElement("span");
    
    article.setAttribute("class", project.title);
    a.setAttribute("href", project.link);
    a.setAttribute("target", "_blank");
    projectImg.setAttribute("class", "project-img");
    projectImg.setAttribute("style", `background: no-repeat ${imagePosition} url('${project.imageUrl}'); background-size: ${imageSize}`);
    title.setAttribute("class", "title");
    title.innerText = project.title;
    description.className = "description";
    description.innerText = project.description;
    skills.setAttribute("class", "skills");
    period.className = "period";
    period.innerText = `${project.period[0]} ~ ${project.period[1]}`;

    a.append(projectImg);
    article.append(a);
    article.append(title);
    article.append(description);
    project.skills.forEach(str => {
        const skill = document.createElement("span");
        skill.innerText = str;
        skills.append(skill);
    });
    article.append(skills);
    article.append(period);

    container.append(article);
}

// Projects 
/*
const sample = new Project(
    "about:blank",
    "/resources/images/yao.gif",
    "sample",
    "sample sample",
    ['ReactJS','Typescript'],
    ['2023.03.09', "2023.04.30"]
);
addProject(sample, "frontend", "cover", "center");
*/

const bookSearch = new Project(
    "/booksearch",
    "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-cartoon-open-book-icon-reading-flipping-through-the-dictionary-open-book-png-image_345000.jpg",
    "Book Search",
    "Book Search and Inquiry Service",
    ['VanilaJS', 'jQeury', 'Kakao Search API'],
    ['2023.03.13', "2023.03.13"]
);

addProject(bookSearch, "frontend", "contain", "center");

const OMOK = new Project(
    "/OMOK",
    "https://png.pngtree.com/png-vector/20211231/ourmid/pngtree-hand-drawn-gobang-design-elements-png-image_4076358.png",
    "OMOK",
    "Mini Game",
    ['VanilaJs'],
    ['2023.03.13', "2023.03.13"]
);

addProject(OMOK, "frontend", "contain", "center");

const atm = new Project(
    "https://github.com/selinkwon/atm.git",
    "https://img.lovepik.com/element/40170/0209.png_860.png",
    "SELIN BANK",
    "Console ATM (Java mini project)",
    ['Java'],
    ['2023.03.13',"2023.03.13"]
);

addProject(atm, "backend", "contain", "center");

const consol_rpg_game = new Project(
    "https://github.com/selinkwon/poly_rpg_game.git",
    "https://thumb.ac-illust.com/53/536f5a3920b07278192be794f0b8a2d8_t.jpeg",
    "RPG GAME",
    "RPG GAME (Java mini game project)",
    ['Java'],
    ['2023.03.13',"2023.03.13"]
);

addProject(consol_rpg_game,"backend","contain","center");