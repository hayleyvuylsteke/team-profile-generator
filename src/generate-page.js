function buildPageShell () {
    const htmlShell =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <title>${managerData.managerName}'s Team Profile</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
                <p class="brand-logo">${managerData.managerName}'s Team Profile</p>
            </div>
        </nav>
        <section>
            <div class="team-body-container">
                <div class="row">

                </div>
            </div>
        </section>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>`
}

function addTeamMember () {
    return new Promise (function(resolve, rejected) {

        let memberProfile = "";
    })

    memberProfile = ``
}