import random

def guess_the_number():
    secret_number = random.randint(1, 10)
    print("I've picked a number between 1 and 10. Can you guess it?")

    # Get user input
    try:
        user_guess = int(input("Enter your guess: "))
        if user_guess == secret_number:
            print("True ✅ You guessed it!")
        else:
            print(f"False ❌ The correct number was {secret_number}.")
    except ValueError:
        print("Please enter a valid integer.")

if __name__ == "__main__":
    guess_the_number()
