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

if choice == 4:
    print ("You have chosen division")
    print ("What are the numbers you want to divide?")
    number1 = int(input ("Enter the first number: "))
    number2 = int(input ("Enter the second number: "))
    print ("The quotient of number1 and number2 is number1/number2")
    print (f"The quotient of number1 and number2 is:" ,number1/number2)

if choice == 2:
    print ("You have chosen subtraction")
    print ("What are the numbers you want to subtract?")
    number1 = int(input ("Enter the first number: "))
    number2 = int(input ("Enter the second number: "))
    print ("The difference of number1 and number2 is number1-number2")
    print (f"The difference of number1 and number2 is:" ,number1-number2)

if choice ==1:
    print ("You have chosen addition")
    print ("What are the numbers you want to add?")
    number1 = int(input ("Enter the first number: "))
    number2 = int(input ("Enter the second number: "))
    print ("The sum of number1 and number2 is number1+number2")
    print (f"The sum of number1 and number2 is:" ,number1+number2)