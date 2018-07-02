const hs = require('helpstack');
const savejsoncsv = require('savejsoncsv');

module.exports = async (json = {"A": {"C":"1"}, "B": {"D":"2"}}, name = "jsoncsv") => {
  const zuerstZ = true;
  const leerWert = "---";
  const savePath = "/home/micha/Schreibtisch/tests/jsonZuCsv";
  let namejson = [{ name: name, json: json }];
  // hs(json);
  await savejsoncsv(namejson, savePath, zuerstZ, leerWert)
  console.log(`Saved "${name}.json/.csv" in ${savePath}!`);
  return;
}


// await savejsoncsv(namejson, savePath, zuerstZ, leerWert).then(() => {
//   console.log(`Saved "${name}.json/.csv" in ${savePath}!`);
//   return;
// }).catch((e) => console.log("Error: ", e));
