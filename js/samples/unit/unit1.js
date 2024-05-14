/**
 *
 * @param {string} name
 */
export const sayHello = (name) => {
  if (!name) {
    return "Hello world !";
  }

  return `Hello ${name}`;
};
