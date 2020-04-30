// 3000
// 3,000.12
// 3.000,12
// #,###.##
// $#,###.##

function currency(value, format) {
  var currencyUnit = "";
  if (format.substring(0, 1) != "#") {
    currencyUnit = format.substring(0, 1);
  }

  var groupingSeparator = ",";
  var maxFractionDigits = 0;
  var decimalSeparator = ".";

  // #,###.##
  // #.###,##
  if (format.indexOf(",") < format.indexOf(".")) {
    maxFractionDigits = format.length - format.indexOf(".") - 1;
  } else {
    groupingSeparator = ".";
    decimalSeparator = ",";
    maxFractionDigits = format.length - format.indexOf(",") - 1;
  }

  var prefix = "";
  var d = "";
  var dec = 1;
  for (var i = 0; i < maxFractionDigits; i++) {
    dec = dec * 10;
  }

  //-1324.123
  var v = String(Math.round(parseFloat(value) * dec) / dec);

  if (v.startsWith("-")) {
    prefix = "-";
    v = v.substring(1);
  }

  if (maxFractionDigits > 0 && format.substring(format.length - 1) == "0") {
    v = String(parseFloat(v).toFixed(maxFractionDigits));
  }

  if (maxFractionDigits > 0 && v.indexOf(".") > -1) {
    d = v.substring(v.indexOf(".")); //.123
    d = d.replace(".", decimalSeparator); //,123
    v = v.substring(0, v.indexOf(".")); //1324
  }

  var r = /(\d+)(\d{3})/;
  while (r.test(v)) { //5421338
    v = v.replace(r, "$1" + groupingSeparator + "$2"); //$1=5421, $2=338 =>5421,338, $1=5. $2=421
    // console.log(v);
  }

  return prefix + currencyUnit + String(v) + String(d);
}

console.log(currency(5421338, "$#,###.#0"));
console.log(currency(5421338.1, "$#,###.#0"));
console.log(currency(-5421338.12, "$#.###,##"));