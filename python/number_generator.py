"""
random number generator with unser input
"""

import random

def number_generator():
    print("Welcome to the random number generator!")

    start= int(input("What number do you want to start with? "))
    end = int(input("What number do you want to end with? "))

    print("Your random number is {}".format(random.randint(start, end)))


number_generator()