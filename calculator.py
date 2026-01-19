#this is a simple calculator

print ("Welcome to the greatest calculator\n")

print ("What type of calculation do you want to perform?\n")

print ("1. Addition\n")
print ("2. Subtraction\n")
print ("3. Multiplication\n")
print ("4. Division\n")

choice = int(input ("Enter your choice: "))



print ("Your choice is:" , choice)

if choice == 3:
    print ("You have chosen multiplication")
    print ("What are the numbers you want to multiply?")
    number1 = int(input ("Enter the first number: "))
    number2 = int(input ("Enter the second number: "))
    print ("The product of number1 and number2 is number1*number2")
    print (f"The product of number1 and number2 is:" ,number1*number2)