
# Answers to Part2

1. line 12 will print 3 because variable i in the for loop has been ++ three times.

2. line 13 will print 150 because the last assignment to this variable is the discounted price of 300, which is 300 * (1 - 0.5) = 150.

3. line 14 will print 150 because the last assignment to variable finalPrice is Math.round(150 * 100) / 100, which is 150.

4. It will return an array containing all three finalPrice of the original price with the original order because the for loop pushes one finalPrice each iteration until all original prices are converted to final price.

5. error, because i is let type and is defined within the for loop and cannot be accessed.

6. error, because discountedPrice is let type and is defined within the for loop and cannot be accessed.

7. Line 14 will print 150 because last assignment to finalPrice is Math.round(150 * 100) / 100, which is 150. Moreover, the variable is defined under the function and can be accessed because they are in the same block.

8. It will return an array containing all three finalPrice of the original price with the original order because the for loop pushes one finalPrice each iteration until all original prices are converted to final price. Moreover, the variable discounted is defined within the same block as the return keyword so it can be accessed.

9. error, because i is let type and is defined within the for loop and cannot be accessed.

10. Line 12 will print 3 because the const variable length returns the length of array prices which is 3.

11. It will return an array containing all three finalPrice of the original price with the original order because the for loop pushes one finalPrice each iteration until all original prices are converted to final price. Even though the variable discounted is const type, we could manipulate it using the push function because we are not reassigning other value to it.\

12.  
    * A student.name
    * B student['Grad Year']
    * C student.greeting()
    * D student['Favorite Teacher'].name
    * E student.courseLoad[0]\

13.  
    * A 32, because integer map to their string representation.
    * B 1, because string is converted to integer doing arithmetic.
    * C 3, because null becomes 0  
    * D 3null, because null becomes 'null'
    * E 4, because true becomes 1  
    * F 0, because false becomes 0 and null becomes 0  
    * G 3undefined, because undefined becomes 'undefined'
    * H NaN, because undefined becomes NaN\

14.  
    * A true, because '2' maps to 2
    * B false, when comparing the first digit, '2' > '1'
    * C true, because '2' becomes 2
    * D false, because the strict comparison does not consider type conversion
    * E false, true becomes 1 and 1 != 2
    * F true, because Boolean(2) is true\

15. == compares two variables with conversion but === is a strict equality operation without type conversion. In other words, == compares value and === compares both value and type.

16. see part2-quesgtion16.js

17. The newArr returned will be [2,4,6]. When we call modifyArray, we pass in two arguments, an array and function doSomething, which double the value of num. In function modifyArray, we iterate through passed in array and call doSomething to double their value and push the new value into the newArr. Therefore, we get an array with double the value of each elements in the original array.

18. see part2-question18.js

19. 1432, because it will print 1 and 4 immediatly with no delay. After that, console.log(3) will be executed and then console.log(3) with delay of 1000ms.
