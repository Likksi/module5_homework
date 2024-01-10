let x = 5,
  res;

switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    res = "x — число";
    break;
  case "string":
    res = "x — строка";
    break;
  case "boolean":
    res = "x — логический тип";
    break;
  default:
    res = "Тип x не определен";
}
console.log(res);
