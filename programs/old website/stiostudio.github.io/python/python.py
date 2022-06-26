
from random import *
from turtle import *
from keyboard import *
from pygame import *
from math import *
from time import *

x = 0
y = 0
r = 90


pensize(5)
speed(10)


def line(x1,y1,x2,y2):
    penup()
    goto(x1,y1)
    pendown()
    goto(x2,y2)
    penup()


while True:
    
    if (is_pressed("esc")):
        print(cos(180))
        sleep(1)
        
