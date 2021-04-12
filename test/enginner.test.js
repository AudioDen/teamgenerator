const Engineer = require("../lib/engineer");



describe("Engineer", ()=> {
  describe("This is how we are instantiating our class objects:", () => {

    it("it should create an instance of an engineer object", () => {
      let newObj = new Engineer()
      expect(typeof newObj).toBe("object")
    });
    
    it("it should take a name as a property", () => {
      let newName = "Jerry"
      let newObj = new Engineer(newName)
      
      expect(newObj.name).toBe(newName)
    })
    
    it("it should take a id as a property", () => {
      let newId = 123
      let newObj = new Engineer("Sam", newId)
      
      expect(newObj.id).toBe(newId)
    })
    
    it("it should take a email as a property", () => {
      let newEmail = "asd@asMail"
      let newObj = new Engineer("Sam", 123, newEmail)
      
      expect(newObj.email).toBe(newEmail)
    })
    it("it should take a Github profile as a property", () => {
      let newGithub = "github profile"
      let newObj = new Engineer('Sam', 123,"asd@asMail", newGithub)
      
      expect(newObj.github).toBe(newGithub)
    })
  })
  describe("These are the methods inside of Engineer", ()=> {
    
  })
})