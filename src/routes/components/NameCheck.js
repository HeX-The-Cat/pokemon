export default function NameCheck(poke) {
  poke = poke
    .trim()
    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
  return poke;
}
