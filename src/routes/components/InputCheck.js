export default function inputCheck(poke) {
  poke = poke
    .trim()
    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
  return poke;
}
