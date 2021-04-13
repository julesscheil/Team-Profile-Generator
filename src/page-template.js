const generateTeam = team => {

    // create manager html
    const generateManager = manager => {
        // ` return ${manager.getName()} etc etc`
        return `
        <div> <h1>Manager Stuff</h1></div>
        <h2>${manager.getName()}</h2>`;
    };
    // create manager html
    const generateEngineer = engineer => {
        // ` return ${manager.getName()} etc etc`
        return `
    <div> <h1>Engineer Stuff</h1></div>
    <h2>${engineer.getName()}</h2>`;
    };
    // create manager html
    const generateIntern = intern => {
        // ` return ${manager.getName()} etc etc`
        return `
    <div> <h1>Manager Stuff</h1></div>
    <h2>${intern.getName()}</h2>`;
    };

    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );
    return html.join("");
}




module.exports = team => {
    //   HTML TEMPLATE
    //       WHERE YOU WANT TO SHOW THE USER CONTENT
    //     <div>
    //       ${generateTeam(team)}
    //     </div>
}