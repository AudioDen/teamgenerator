const Manager = require("../lib/manager");



describe("Manager", ()=> {
  describe("This is how we are instantiating our class objects:", () => {

    it('it should create an instance of an engineer object', () => {
      let newObj = new Manager()
      expect(typeof newObj).toBe('object')
    });
    
    it('it should take a name as a property', () => {
      let newName = "Jerry"
      let newObj = new Manager (newName)
      
      expect(newObj.name).toBe(newName)
    })
    
    it('it should take a id as a property', () => {
      let newId = 123
      let newObj = new Manager('Sam', newId)
      
      expect(newObj.id).toBe(newId)
    })
    
    it('it should take a email as a property', () => {
      let newEmail = "asd@asMail"
      let newObj = new Manager('Sam', 123, newEmail)
      
      expect(newObj.email).toBe(newEmail)
    })
    it('it should take a office number profile as a property', () => {
      let newOfficeNumber = "office number"
      let newObj = new Manager('Sam', 123,"asd@asMail", newOfficeNumber)
      
      expect(newObj.officeNumber).toBe(newOfficeNumber)
    })
  })
  describe("These are the methods inside Manager", ()=> {
    
  })
})