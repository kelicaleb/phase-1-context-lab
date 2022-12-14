/* Your Code Here */

// Your code here
const createEmployeeRecord = function (arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  const createEmployeeRecords = function (employeesData) {
    return employeesData.map((eachData) => {
      return createEmployeeRecord(eachData);
    })
  }
  
  const createTimeInEvent = function (timeStamp) {
    const [date, punchedInStamp] = timeStamp.split(' ');
  
    this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(punchedInStamp),
      date: date
    })
  
    return this;
  }
  
  const createTimeOutEvent = function (timeStamp) {
    const [date, punchedOutStamp] = timeStamp.split(' ');
  
    this.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(punchedOutStamp),
      date: date
    })
  
    return this;
  }
  
  const hoursWorkedOnDate = function (givenDate) {
    const timeIn = this.timeInEvents.find((e) => {
      return e.date === givenDate;
    });
  
    const timeOut = this.timeOutEvents.find((e) => {
      return e.date === givenDate;
    });
  
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  const wagesEarnedOnDate = function (givenDate) {
    const totalHoursWorked = hoursWorkedOnDate.call(this, givenDate)
  
    return totalHoursWorked * this.payPerHour;
  }
  
  const calculatePayroll = function (employeeRecords) {
    return employeeRecords.reduce((sum, employee) => {
      return sum + allWagesFor.call(employee);
    }, 0);
  }
  
  const findEmployeeByFirstName =  (collection, firstNameString) => {
    return collection.find((employee) => {
      return employee.firstName === firstNameString;
    })
  }
  
  
  const allWagesFor = function () {
      const eligibleDates = this.timeInEvents.map(function (e) {
          return e.date
      })
  
      const payable = eligibleDates.reduce(function (memo, d) {
          return memo + wagesEarnedOnDate.call(this, d)
      }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
  
      return payable
  }
  