export const getScreenSize = window.addEventListener("resize", getWindowSize);

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
