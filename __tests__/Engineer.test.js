// require engineer subclass file
const Engineer = require('../lib/Engineer');

describe("tests if sub class exists", () => {
    // test it comes as an object
    it('should be an object', () => {
        //arrange
        //act
        const engineerObject = new Engineer();
        //assert 
        expect(typeof (engineerObject)).toBe('object');
    })
    // test a name is taken in
    it('should take in a name', () => {
        const name = "jules"
        const engineerObject = new Engineer("jules");
        expect(engineerObject.name).toBe(name);
    })
    // test an id is taken in
    it('should take in an id', () => {
        const id = 1
        const engineerObject = new Engineer("jules", 1);
        expect(engineerObject.id).toBe(id);
    })
    // test an email is taken in
    it('should take in an email', () => {
        const email = "jules@gmail.com"
        const engineerObject = new Engineer("jules", 1, "jules@gmail.com");
        expect(engineerObject.email).toBe(email);
    })
    // test a github username is taken in
    it('should take in a GitHub username', () => {
        const gitHub = "julesscheil"
        const engineerObject = new Engineer("jules", 1, "jules@gmail.com", "julesscheil");
        expect(engineerObject.gitHub).toBe(gitHub);
    })
})