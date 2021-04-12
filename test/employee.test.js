const Employee = require("../lib/employee");

describe("Employee", ()=> {
  describe("This is how we are instantiating our class objects:", () => {

    it('it should create an instance of an employee object', () => {
      let newObj = new Employee()
      expect(typeof newObj).toBe('object')
    });
    
    it('it should take a name as a property', () => {
      let newName = "Jerry"
      let newObj = new Employee(newName)
      
      expect(newObj.name).toBe(newName)
    })
    
    it('it should take a id as a property', () => {
      let newId = 123
      let newObj = new Employee('Sam', newId)
      
      expect(newObj.id).toBe(newId)
    })
    
    it('it should take a email as a property', () => {
      let newEmail = "asd@asMail"
      let newObj = new Employee('Sam', 123, newEmail)
      
      expect(newObj.email).toBe(newEmail)
    })
  })
  describe("These are the methods inside of Employee:", ()=> {
    
  })
})