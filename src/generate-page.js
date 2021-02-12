const fs = require("fs");

function buildPageShell () {
    const htmlShell =
    `
    <<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="./styles.css">
        <title>${managerData.managerName}'s Team Profile</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper nav-height">
                <a href="#" class="brand-logo center">${managerData.managerName}'s Team Profile</a>
            </div>
        </nav>
        <section>
                <div class="row container">
                    <!--Employee cards go here-->
    
                </div>
        </section>
        <footer class="page-footer">
            <div class="container">
              <div class="row">
                  <h5 class="white-text">Made with ♥ from a command line near you.</h5>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
              © 2021 Copyright
              </div>
            </div>
          </footer>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="https://kit.fontawesome.com/fce42678c9.js" crossorigin="anonymous"></script>
    </body>
    </html>`;
    fs.writeFile("./dist/team-profile.html", html, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("The beginnings of your team profile have been successfully built. Check the Dist folder of this repository.")
        }
    })
}


function addTeamMember () {
    return new Promise (function(resolve, rejected) {

        let memberProfile = "";
    })

    memberProfile = ``
}