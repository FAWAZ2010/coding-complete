from turtle import *

speed(0)
bgcolor("blue")

#Grass
penup()
goto(-400,-100)
pendown()
color("limegreen")
begin_fill()
for i in range(2):
    forward(800)
    right(90)
    forward(300)
    right(90)
end_fill()

#  Left Mountain
penup()
goto(-400,-100)
pendown()
color("dimgray")
begin_fill()
for i in range(3):
    forward(300)
    left(120)
end_fill()
    
  
#  Right Mountain
penup()
goto(100,-100)
pendown()
begin_fill()
for i in range(3):
    forward(300)
    left(120)
end_fill()  
        
# middle Mountain
penup()
goto(-160,-100)
pendown()
color("gray")
begin_fill()
for i in range(3):
    forward(400)
    left(120)
end_fill()        
   
    