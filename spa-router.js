function singlePageRouter() {
  window.addEventListener("hashchange", viewChange);
}

function viewChange() {
  let hashLink = "welcome-page";

  if (location.hash) {
    hashLink = location.hash;
  }

  hideAllViews();
  document.querySelector(hashLink).class.classList.add("active");
  setActiveLink();
}

function setActiveLink(view) {
  const link = document.querySelector(`a.view-link[href="${view}"]`);

  console.log(link);

  if (link) {
    link.classList.add("active");
  }
}

function hideAllViews() {
  document
    .querySelector(".view-link")
    .forEach((link) => link.classList.remove("active"));
  document
    .querySelector(".view-link")
    .forEach((link) => link.classList.remove("active"));
}

export { singlePageRouter };
