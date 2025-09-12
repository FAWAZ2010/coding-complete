import turtle
turtle.Screen().bgcolor("Red")
sc = turtle.Screen()
sc.setup(700,300)
turtle.title("Turtle")
board = turtle.Turtle()
for i in range(4):
    board.forward(100)
    board.left(90)
    i = i + 1