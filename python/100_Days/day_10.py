"""
Day 10
Functions with output
"""


def format_name(f_name, l_name):
    formatted_f_name = f_name.title()
    formatted_l_name = l_name.title()
    # print(f"{formatted_f_name} {formatted_l_name}")
    return f"{formatted_f_name} {formatted_l_name}"


format_name("johnny", "CASH")

print(format_name("johnny", "CASH"))
