// this is edited by me (hemanth).
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// hemant is not a good boy
inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("quiz_img.png"));

    fs.writeFile("URL-quiz.txt", url, (err) => {
      if (err) throw err;
      console.log("succesfully inserted");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
