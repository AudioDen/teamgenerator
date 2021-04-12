const Intern = require("../lib/intern");



describe("Intern", ()=> {
  describe("This is how we are instantiating our class objects:", () => {

    it("it should create an instance of an intern object", () => {
      let newObj = new Intern()
      expect(typeof newObj).toBe("object")
    });
    
    it("it should take a name as a property", () => {
      let newName = "Jerry"
      let newObj = new Intern(newName)
      
      expect(newObj.name).toBe(newName)
    })
    
    it("it should take a id as a property", () => {
      let newId = 123
      let newObj = new Intern("Sam", newId)
      
      expect(newObj.id).toBe(newId)
    })
    
    it("it should take a email as a property", () => {
      let newEmail = "asd@asMail"
      let newObj = new Intern("Sam", 123, newEmail)
      
      expect(newObj.email).toBe(newEmail)
    })
    it("it should take a school as a property", () => {
      let newSchool = "school name"
      let newObj = new Intern("Sam", 123,"asd@asMail", newSchool)
      
      expect(newObj.school).toBe(newSchool)
    })
  })
  describe("These are the methods inside of Intern", ()=> {
    
  })
})