class ButtonClass {
  constructor(linkTo, idButton, idText, buttonText) {
    this.linkTo = linkTo;
    this.idButton = idButton;
    this.idText = idText;
    this.buttonText = buttonText;
  }
}

export const loginButton = new ButtonClass(
  "/login",
  "login",
  "login-text",
  "Login"
);

export const showcaseButton = new ButtonClass(
  "/showcase",
  "showcase",
  "showcase-text",
  "Showcase"
);

export const userButton = new ButtonClass(
  "/user",
  "user",
  "user-text",
  " Register as User"
);

export const creativeButton = new ButtonClass(
  "/creative",
  "creative",
  "creative-text",
  "Register as Creative"
);
