import fs from "fs"; //pacchetto usato per leggere docx files
import path from "path";
import slash from "slash";

export const mapArchive = async ({ state, envSlash, updateState }) => {
  function* getFiles(dir) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    for (const dirent of dirents) {
      const fullpath = path.resolve(dir, dirent.name);
      if (dirent.isDirectory()) {
        yield* getFiles(fullpath);
      } else {
        const yieldValue = {
          fullpath: fullpath,
          linuxfullpath: slash(fullpath),
          relativepath: fullpath.split("public" + envSlash)[1],
          linuxpath: slash(fullpath.split("public" + envSlash)[1]),
          filename: dirent.name,
        };
        yield yieldValue;
      }
    }
  }
  (async () => {
    let startDirectory = "public/archive";
    for (const f of getFiles(startDirectory)) {
      const updatedFilesToAnalyze = [...state.global.filesToAnalyze, f];
      updateState("global", "filesToAnalyze", updatedFilesToAnalyze);
    }
  })();
};
