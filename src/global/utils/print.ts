
function print(str?, placeholder?: string) {
  if (str) {
    return `${str}`
  } else {
    if (placeholder) {
      return `${placeholder}`;
    } else {
      return ' ';
    }
  }
}
export default print;
