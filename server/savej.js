const fs = require('fs');
const path = require('path');

module.exports = (json = { "A": { "C": "1" }, "B": { "D": "2" } }, name = "json", savePath = "/home/micha/Schreibtisch/tests/jsonZuCsv") => {
  if (!fs.existsSync(savePath)) fs.mkdirSync(path.resolve(savePath)); // Ergebnispfad erzeugen
  const content = JSON.stringify(json);
  fs.writeFile(path.join(savePath, name + '.json'), content, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  }); 
}

// sync
const savesync = (json = { "A": { "C": "1" }, "B": { "D": "2" } }, name = "json", savePath = "/home/micha/Schreibtisch/tests/jsonZuCsv") => {
  if (!fs.existsSync(savePath)) fs.mkdirSync(path.resolve(savePath)); // Ergebnispfad erzeugen
  fs.writeJsonSync(path.join(savePath, name + '.json'), json);
  console.log(`Saved "${name}.json" in ${savePath}!`);
  return;
}

// async
const saveasync = async (json = { "A": { "C": "1" }, "B": { "D": "2" } }, name = "json", savePath = "/home/micha/Schreibtisch/tests/jsonZuCsv") => {
  if (!fs.existsSync(savePath)) fs.mkdirSync(path.resolve(savePath)); // Ergebnispfad erzeugen
  await fs.writeJson(path.join(savePath, name + '.json'), json);
}

// Kopie aus fileobj
const savejsoncsv = async (namejson = [{ name, json }], savePath = resPath, zuerstZ = false) => {
  if (!fs.existsSync(savePath)) fs.mkdirSync(path.resolve(savePath)); // Ergebnispfad erzeugen
  let csv;
  namejson.forEach(async ({ name, json, csv }) => {
    csv = csvAusJson(json, zuerstZ);
    await fs.writeJson(path.join(savePath, name + '.json'), json);
    await fs.writeFile(path.join(savePath, name + '.csv'), csv); // csv-Datei speichern
  });
};


// await savejsoncsv(namejson, savePath, zuerstZ, leerWert).then(() => {
//   console.log(`Saved "${name}.json/.csv" in ${savePath}!`);
//   return;
// }).catch((e) => console.log("Error: ", e));
