const countElement = document.querySelector("#reviewcount");
let reviewCount = 0;

try {
  reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;
  reviewCount += 1;
  window.localStorage.setItem("reviewCount", String(reviewCount));
} catch (error) {
  reviewCount = 1;
}

countElement.textContent = reviewCount;

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
