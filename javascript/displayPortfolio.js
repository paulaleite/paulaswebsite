// function displayPortfolio() {
//     const section = document.getElementById("portfolio");
//     const row = createCustomElement("div", "row"); 

//     for (var i = 0; i < apps.length; i++) {
//         row.appendChild(createCard(apps[i]));
//     }

//     section.appendChild(row);
// }

// function createCard(app) {
//     const column = createCustomElement("div", "card-column col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch");
//     const card = createCustomElement("div", "card border-0");
    
//     const image = createCustomElement("img", "card-img-top");
//     image.src = app.imagePath;
//     image.alt = app.name + " icon";
//     card.appendChild(image);

//     card.appendChild(createCardBody(app));
//     card.appendChild(createCardFooter(app));
//     column.appendChild(card);

//     return column;
// }

// function createCardFooter(app) {
//     const cardFooter = createCustomElement("div", "card-footer border-0");
//     const textLine = createCustomElement("h5", "");

//     const hasAppStoreLink = (app.appStoreLink != "");
//     const hasGitHubLink = (app.gitHubLink != "");

//     if (hasAppStoreLink) {
//         textLine.appendChild(createLink(app.appStoreLink, "App Store"));   
//     }

//     if (hasGitHubLink) {
//         textLine.appendChild(createLink(app.gitHubLink, "GitHub", hasAppStoreLink));
//     }

//     cardFooter.appendChild(textLine);
//     return cardFooter;

// }

// function createCardBody(app) {
//     const cardBody = createCustomElement("div", "card-body");

//     const appName = createCustomElement("h3", "card-title");
//     appName.innerHTML = app.name;
//     cardBody.appendChild(appName);

//     cardBody.appendChild(createOSLabel(app.platforms));

//     const appDescription = createCustomElement("p", "card-text");
//     appDescription.innerHTML = app.description;
//     cardBody.appendChild(appDescription);

//     cardBody.appendChild(createTextGroup("Roles", app.roles));
//     cardBody.appendChild(createTextGroup("Applied technologies", app.development));

//     return cardBody;
// }

// function createTextGroup(title, body) {
//     const group = createCustomElement("div", "text-group");

//     const titleElement = createCustomElement("h6", "font-weight-bold");
//     titleElement.innerHTML = title;

//     const bodyElement = createCustomElement("p", "");
//     bodyElement.innerHTML = body;

//     group.appendChild(titleElement);
//     group.appendChild(bodyElement);
//     return group;
// }

// function createLink(url, label, spacing = false) {
//     var className = "badge badge-pill badge-light";
//     if (spacing) {
//         className += " ml-2";
//     }

//     const link = createCustomElement("a", className);
//     link.href = url;
//     link.innerHTML = label;
//     return link;
// }

// function createOSLabel(os) {
//     const p = document.createElement("p");
//     const small = document.createElement("small");

//     small.innerHTML = os;
//     p.appendChild(small);

//     return p;
// }

// function createCustomElement(elementName, className) {
//     const element = document.createElement(elementName);
//     element.className = className;
//     return element
// }

function displayPortfolio() {
    const section = document.getElementById("portfolio");

    var langIndex = 0
    if(lang == "pt") {
        langIndex = 1
    }

    var row = createCustomElement("div", "row mb-3 d-flex flex-row justify-content-between");
    for (var i = 0; i < apps.length; i++) {
        if(i % 2 == 0) {
            row = createCustomElement("div", "row mb-3 d-flex flex-row justify-content-between")
        }
        createProjectsCards(apps[i][langIndex], row);
        section.appendChild(row);
    }
}

function createProjectsCards(project, row) {
    const cardWrapper = createCustomElement("div", "col-xs-12 col-md-6 mb-3 mb-xs-5");
    const cardBackground = createCustomElement("div", "card height100 width100 d-flex flex-column justify-content-between px-3 pb-3");
    cardWrapper.appendChild(cardBackground);
    const imageTextDiv = createCustomElement("div", "row p-3 align-items-start");

    const image = createProjectImage(project);

    const titleSubtitleDiv = createCustomElement("div", "col-10")
    const subtitle = createSubtitle(project);
    const title = createTitle(project, "noPadding", "h3");

    imageTextDiv.appendChild(image);
    titleSubtitleDiv.appendChild(title);
    titleSubtitleDiv.appendChild(subtitle);
    imageTextDiv.appendChild(titleSubtitleDiv);

    cardBackground.appendChild(imageTextDiv)

    const description = createDescription(project)
    cardBackground.appendChild(description)

    const linkBox = createElement("div");
    const roles = createTextGroup("Roles: ", project.roles)
    linkBox.appendChild(roles);
    const technologies = createTextGroup("Applied technologies: ", project.development);
    linkBox.appendChild(technologies);

    if (!!project.appStoreLink) {
        const appStore = createLink(project.appStoreLink, "App Store");
        linkBox.appendChild(appStore);
    }
    if (!!project.gitHubLink) {
        const github = createLink(project.gitHubLink, "GitHub", !!project.appStoreLink)
        linkBox.appendChild(github);
    }
    cardBackground.appendChild(linkBox);

    row.appendChild(cardWrapper);
}

function createLink(url, label, spacing = false) {
    var className = "badge badge-pill badge-light";
    if (spacing) {
        className += " ml-3";
    }

    const link = createCustomElement("a", className);
    link.href = url;
    link.innerHTML = label;
    return link;
}

function createProjectImage(project) {
    const img = createCustomElement("img", "col-2 noPadding");
    img.src = project.imagePath;
    img.alt = project.name + " Icon";
    return img
}

function createSubtitle(project) {
    const text = createElement("p");
    text.innerHTML = project.subtitle
    return text
}

function createTitle(highlight, extraClasses, tag = "h2") {
    var className = "mb-3"
    if (!!extraClasses) {
        className += " " + extraClasses
    }
    const text = createCustomElement(tag, className);
    text.innerHTML = highlight.name;
    return text
}

function createDescription(highlight) {
    const text = createElement("p");
    text.innerHTML = highlight.description;
    return text
}

function createTextGroup(title, body) {
    const group = createCustomElement("div", "text-group mb-2");

    const titleElement = createCustomElement("span", "font-weight-bold");
    titleElement.innerHTML = title;

    const bodyElement = createElement("span");
    bodyElement.innerHTML = body;

    group.appendChild(titleElement);
    group.appendChild(bodyElement);
    return group;
}

function createElement(elementName) {
    const element = document.createElement(elementName);
    return element;
}

function createCustomElement(elementName, className) {
    const element = document.createElement(elementName);
    element.className = className;
    return element;
}