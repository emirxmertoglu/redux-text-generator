export const paragraphMapper = (paragraphs) => {
  const splitted = paragraphs.split("\n");
  const filtered = splitted.filter((item) => item !== "");
  return filtered;
};
