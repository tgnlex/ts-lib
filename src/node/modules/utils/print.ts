
function print(str: string, placeholder?: string) {
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
