class Robot:
    def __init__(self, name):
        self.original_name = name
        self.name = None  
        self.is_damaged = True

    def speak_name(self):
        if self.name:
            print(f"My name is {self.name}.")
        else:
            print("I... I can't remember my name.")

    def repair(self):
        if self.is_damaged:
            self.name = self.original_name
            self.is_damaged = False
            print(f"{self.original_name} has been repaired and can now speak!")
        else:
            print(f"{self.original_name} is already in perfect condition.")

robot1 = Robot("Tom")
robot2 = Robot("Jerry")

print("Before repair:")
robot1.speak_name()
robot2.speak_name()

print("\nRepairing robots...")
robot1.repair()
robot2.repair()

print("\nAfter repair:")
robot1.speak_name()
robot2.speak_name()