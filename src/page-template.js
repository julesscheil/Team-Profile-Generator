// create generate team variable and function to pass team
const generateTeam = team => {

    // create manager html
    const generateManager = manager => {
        return `
        <div class="card bg-light mb-3" style="min-width: 20rem;">
                <div class="card-header p-3 mb-2 bg-primary text-white">
                    <h3>${manager.getName()}</h3>
                    <p><i class="fas fa-mug-hot"></i> ${manager.getRole()}</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getID()}</li>
                        <li class="list-group-item">Email: ${manager.getEmail()}</li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>`;
    };
    // create engineer html
    const generateEngineer = engineer => {
        return `
        <div class="card bg-light mb-3" style="min-width: 20rem;">
        <div class="card-header p-3 mb-2 bg-primary text-white">
            <h3>${engineer.getName()}</h3>
            <p><i class="fas fa-glasses"></i> ${engineer.getRole()}</p>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getID()}</li>
                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                <li class="list-group-item">GitHub: ${engineer.getGitHub()}</li>
            </ul>
        </div>
    </div>`;
    };
    // create intern html
    const generateIntern = intern => {
        return `
        <div class="card bg-light mb-3" style="min-width: 20rem;">
        <div class="card-header p-3 mb-2 bg-primary text-white">
            <h3>${intern.getName()}</h3>
            <p><i class="fas fa-user-graduate"></i> ${intern.getRole()}</p>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getID()}</li>
                <li class="list-group-item">Email: ${intern.getEmail()}</li>
                <li class="list-group-item">GitHub: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
    };
    // push the html from above
    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager)));
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)));
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern)));
    // join together
    return html.join("");
}

//export html function
module.exports = team => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />

</head>

<body>
    <header>
        <div class="jumbotron p-3 mb-2 bg-danger text-white">
            <h1 class="text-center">Engineering Team</h1>
        </div>
    </header>
    <main>
        <div class="d-flex justify-content-around flex-wrap">
            ${generateTeam(team)}
            
        </div>

    </main>
</body>

</html>
    `
}