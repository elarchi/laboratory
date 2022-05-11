from math import *  # to use math functions

# ---------------------------------------------------------------------------------
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
# ---------------------------------------------------------------------------------
# BOOLEAN
is_true = True  # boolean with a capital letter  # variable's name isn't like JS camel
# but use underscore.
# ---------------------------------------------------------------------------------
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
# ---------------------------------------------------------------------------------
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

result3 = float(num1) + float(num2)  # to use decimal number
print(result3)
# ---------------------------------------------------------------------------------
# let's create a mini game: Madlib
color = input("Enter a color: ")
plural_noun = input("Enter a plural noun: ")
celebrity = input("Enter a celebrity: ")

print("Roses are " + color)
print(plural_noun + " are blue")
print("I love " + celebrity)
# ---------------------------------------------------------------------------------
# LIST
# contain different kind of data: str, int, boolean
lucky_numbers = [4, 8, 15, 16, 23, 42]
friends = ["Lucas", "Juary", "Victor", "Alice", "Jayne", "Jayne"]

print(friends)
print(friends[1])  # Juary
print(friends[-2])  # Jayne  (only one value 0)
print(friends[1:])  # Juary, Victor, Alice, Jayne, Jayne
print(friends[1:3])  # Juary Victor, not Alice etc
friends.sort()  # we have to do the function before print the result
# we can't do print(friends.sort())
print(friends)  # return the list in alphabetic order

friends[1] = "Mike"  # will update our list
print(friends)
friends.extend(lucky_numbers)
print(friends)  # return Alice, Mike, Jayne, Juary, Lucas, Victor, 4, 8, 15, 16, 23, 42
friends.append("Manu")  # append means add, "apposer"
print(friends)  # will add Manu at the end of the list
friends.insert(1, "Kelly")
print(friends)  # will add Kelly at the index 1
friends.remove("Victor")
print(friends)  # will remove Victor
friends.pop()
print(friends)  # will pop/remove the last element of the list

print(friends.index("Lucas"))  # give the index of the element
# return an error if the element doesn't exist in the list
print(friends.count("Jayne"))  # will counts the number of times the element appears
lucky_numbers.sort()
print(lucky_numbers)  # return the list by ascendant order
lucky_numbers.reverse()
print(lucky_numbers)  # return the list in the reverse order

friends2 = friends.copy()
print(friends2)
friends.clear()  # will return an empty list
print(friends)

# I guest if I update the list, I need to use the function outside of the print one
# lucky_numbers.sort()
# print(lucky_numbers)
# If I just want some info from the list, I can use the function inside the list
# print(friends.index("Lucas"))

# ---------------------------------------------------------------------------------
# TUPLES
# can't be changed or modified
# used for data that will never change
coordinates = (4, 5)

print(coordinates[0])  # 4
print(coordinates[1])  # 5
# coordinates[1] = 10  # return an error, because we can't change a tuple
# ---------------------------------------------------------------------------------
# LIST AND TUPLES
coordinates2 = [(4, 5), (6, 7), (80, 34)]


# most of the time we use LIST
# ---------------------------------------------------------------------------------
# FUNCTION
# def is the key word
def say_hi(user_name, user_age):
    print("Hello " + user_name + ". You are " + str(user_age))  # if user_age alone, we can't add number into a string
    # we need to add str(user_age)


say_hi("Mike", 67)
say_hi("Steve", 89)


# ---------------------------------------------------------------------------------
# RETURN STATEMENT
def cube(num):
    return num * num * num


result = cube(4)
print(result)
# ---------------------------------------------------------------------------------
