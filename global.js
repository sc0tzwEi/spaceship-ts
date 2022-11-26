let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
let global_rows = 39;
let global_cols = 107;
canvas.style.top = "50px";
canvas.style.left = "50px";
let target_col = 0;
let target_row = 0;
let delay = 10;
let rule_digit_width = 30;
let rule_digit_height = 25;
let pixel_height = (canvas.height - rule_digit_height) / global_rows;
let pixel_width = canvas.width / global_cols;
let rule_down_adjustment = 3;
let rule_right_adjustment = 25;
let neighbors = 5;
let span = Math.floor(neighbors / 2);
let cells = new Array(global_rows * global_cols).fill(0);
let states = 2;
let mountain_mode = false;
let filter_length = Math.pow(states, neighbors);
let filter = new Array(filter_length).fill(0);
let color = ["#000000", "#FFFFFF"];
let Nanum = new FontFace('Nanum', 'url(NanumPenScript-Regular.ttf)');
Nanum.load().then(function (font) {
    document.fonts.add(font);
    console.log('Monoton Font loaded');
});
//# sourceMappingURL=global.js.map