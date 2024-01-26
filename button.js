class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
    this.props = {};
  }
  onClick() {
    this.props = {
      height: this.height,
      type: this.type,
      color: this.color,
    };

    console.log(this.props);
  }
}

let newButton = new Button("70", "20", "button", "green");

function testButton(eachValue) {
  if (
    eachValue.width === "70" &&
    eachValue.height === "20" &&
    eachValue.type === "button" &&
    eachValue.color === "white"
  ) {
    console.log("great");
  } else {
    console.log("bad");
  }
}

newButton.onClick();
console.log(newButton.width);
testButton(newButton);
