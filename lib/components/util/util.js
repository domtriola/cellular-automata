const Util = {
  randomColor: function() {
    return [Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)];
  },

  rgbToHex: function(rgb) {
    let hex = rgb.map(num => num.toString(16));
    return '#' + hex.map(val => val.length < 2 ? '0' + val : val).join('');
  },

  hexToRGB: function(hex) {
    let rgb = [];
    
    rgb[0] = parseInt(hex.slice(1, 3), 16);
    rgb[1] = parseInt(hex.slice(3, 5), 16);
    rgb[2] = parseInt(hex.slice(5, 7), 16);

    return rgb;
  }
};

export default Util;
