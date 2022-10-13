export const signUpConfig = {
  header: "Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Username",
      key: "username",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "email",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    },
  ],
};
