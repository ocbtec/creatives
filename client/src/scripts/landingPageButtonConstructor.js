class Button {
  constructor(linkTo, idButton, idText, buttonText) {
    this.linkTo = linkTo;
    this.idButton = idButton;
    this.idText = idText;
    this.buttonText = buttonText;
  }
}

export const loginButton = new Button("/login", "login", "login-text", "Login");

export const showcaseButton = new Button(
  "/showcase",
  "showcase",
  "showcase-text",
  "Showcase"
);

export const userButton = new Button(
  "/user",
  "user",
  "user-text",
  " Register as User"
);

export const creativeButton = new Button(
  "/creative",
  "creative",
  "creative-text",
  "Register as Creative"
);
