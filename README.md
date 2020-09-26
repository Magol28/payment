# payment

## Statement
The company ACME offers their employees the flexibility to work the hours they want. They will pay for the hours worked based on the day of 
the week and time of day, according to the following table:

| Monday - Friday| Saturday and Sunday |
| -------------  | ------------- |
| 00:01 - 09:00 25 USD   | 00:01 - 09:00 30 USD  |
| 09:01 - 18:00 15 USD  | 09:01 - 18:00 20 USD  |
| 18:01 - 00:00 20 USD | 18:01 - 00:00 25 USD |


The goal of this exercise is to calculate the total that the company has to pay an employee, based on the hours they worked and the times 
during which they worked. The following abbreviations will be used for entering data:
 
 | Data  | 
| ------------- |
|MO: Monday | 
| TU: Tuesday  |
| WE: Wednesday  |
|TH: Thursday |
| FR: Friday  |
| SA: Saturday  |
|SU: Sunday |

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our two examples below.

Output: indicate how much the employee has to be paid
### Author
> Miguel Angel Guaño Ochoa


### Development
> I used Node Js to develop it.
> I used yarn as a  package manager.
### Solution
my solution is very simple.
- Read the txt file, line by line
- Each line calls a function to calculate the payment.
- The "calculatePayment" function separates the name from the information and decides what type of day it is, and sends the getPayments function the start and end time of the job, for each day.
- The getPayments function gets how many hours you work in each range of hours, and calculates how much money it is. 
- Finally, just add up all the values and return the amount for each employee
### Testing 
> I used mocha with chai like a testing framework.
> I created 23 tests for this application
### Instructions how to run the program locally.
- Clone the repository
- run yarn install to install all dependencies for the project.
- You can use either "yarn start" to run the proyect or node index, inside of the folder.
- You can use yarn test to run all test.

The txt file is inside of assets, its name is data.txt

