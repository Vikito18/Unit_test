/**
 *
 * @param {string} name
 */
export const sayHello = (name) => {
  if (!name) {
    return "Hello world !";
  }

  if (name === "Victor") {
    return "Bonjour, Victor";
  }

  return `Hello ${name}`;
};
