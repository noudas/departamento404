// JavaScript Document
// suppose, we know width, height and rotation angle (deg)
var width, height, angle;

var rad = angle * Math.PI / 180,
    sin = Math.sin(rad),
    cos = Math.cos(rad);

var newWidth  = Math.abs(width * cos) + Math.abs(height * sin),
    newHeight = Math.abs(width * sin) + Math.abs(height * cos);