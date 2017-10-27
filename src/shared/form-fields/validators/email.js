const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const email = (value) => (
  (!value || !emailRegex.test(value)) ? 'Invalid Email' : undefined
);

export default email;
