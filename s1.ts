// // This is the decorator function
// function readonlyDecorator(target, property, descriptor) {
//   console.log("Target: " )
//   console.log(target)
  
//   console.log("\nProperty name")
//   console.log(property)
  
//   console.log("\nDescriptor property")
//   console.log(descriptor)
  
//   // This will make property readonly
//   descriptor.writable = false
//   // This descriptor will overwrite getFullName method descriptor
//   return descriptor
// }

// class Human {
  
// constructor(firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
// }

// // Syntax for the decorator
// @readonlyDecorator
// getFullName() {
//   return this.firstName + " " + this.lastName
// }
// }

// let humanObj = new Human("Virat", "Kohli")

// console.log("\ngetFullName property value")
// console.log(humanObj.getFullName)

// // Let's try to modify getFullName property value
// humanObj.getFullName = "Hello"

// // As its read only it will still have the old value not "Hello"
// console.log("\nAfter changing getFullName value")
// console.log(humanObj.getFullName)

