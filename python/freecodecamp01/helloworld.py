from math import *

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

# NUMBERS
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

is_true = True  # boolean with a capital letter  # variable's name isn't like JS camel,  but use underscore.
