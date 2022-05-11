from math import *  # to use math functions

# STRING
print("Hello World")  # console.log
print("Hello\nWorld")
phrase = "Hello World"
print(phrase)
print(phrase.lower())
print(phrase.upper().isupper())
print(len(phrase))  # phrase.length
print(phrase[0])  # the character at the position 0 of the variable ===> H
print(phrase.index("W"))  # .indexOf();
print(phrase.replace("Hello", "Goodbye"))

# BOOLEAN
is_true = True  # boolean with a capital letter  # variable's name isn't like JS camel,  but use underscore.

# NUMBER
print(3 + 4)
my_number = 5
print(my_number)  # 5
# print(my_number + phrase)  ===> error because it's an integer with a string
print(str(my_number) + phrase)  # 5Hello World
print(pow(3, 4))  # 3^4
my_negative_number = -5
print(abs(my_negative_number))  # 5
print(max(4, 12))  # return the max of the selection ===> 12
print(max(4, 12, 6, 39))
print(min(3, 6))
print(round(3.7))  # return 4
# with the math function imported
print(floor(3.7))  # return 3
print(ceil(3.7))  # return 4
print(sqrt(36))  # return 6

# INPUT
name = input("Enter your name here: ")
print("Hello " + name)

num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
result = num1 + num2
print(result)  # the result will convert each number into a string
# and will concatenate with tow string ===> 3 and 5 => 35

result2 = int(num1) + int(num2)  # the result will be a integer this time  ===> 3 and 5 => 8
print(result2)

result3 = float(num1)+float(num2)  # to use decimal number
print(result3)

# let's create a mini game: Madlib

color = input("Enter a color: ")
plural_noun = input("Enter a plural noun: ")
celebrity = input("Enter a celebrity: ")

print("Roses are "+color)
print(plural_noun+" are blue")
print("I love "+celebrity)

