import turtle
import random

# Setup screen
screen = turtle.Screen()
screen.bgcolor("black")
screen.title("Colorful Shapes with Turtle")

# Create turtle
artist = turtle.Turtle()
artist.speed(0)
artist.pensize(2)

# Define colors and shapes
colors = ["red", "blue", "green", "yellow", "purple", "orange", "cyan", "magenta", "white"]
shapes = {
    "triangle": 3,
    "square": 4,
    "pentagon": 5,
    "hexagon": 6,
    "octagon": 8
}

def draw_shape(sides, length):
    angle = 360 / sides
    for _ in range(sides):
        artist.forward(length)
        artist.right(angle)

# Draw multiple shapes
for i in range(30):
    artist.penup()
    artist.goto(random.randint(-200, 200), random.randint(-200, 200))
    artist.pendown()
    artist.color(random.choice(colors))
    shape_name, sides = random.choice(list(shapes.items()))
    draw_shape(sides, random.randint(30, 100))

# Hide turtle and finish
artist.hideturtle()
screen.mainloop()