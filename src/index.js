import RandomStringGenerator from "./utils/random";
import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const randomStringGenerator = new RandomStringGenerator();
  const randomStr = `Random String: <span>${randomStringGenerator.generate()}</span>`;
  window.setTimeout(
    () => (document.getElementsByTagName("h1")[0].innerHTML = randomStr),
    1000
  );
});
