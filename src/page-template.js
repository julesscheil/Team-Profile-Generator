const generateTeam = team => {
    const  generateManager = manager = {
        // ` return ${manager.getName()} etc etc`
    }
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
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