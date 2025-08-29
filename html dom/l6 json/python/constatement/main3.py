num = int(input("Enter number to check:"))

if num <50:
    print("Number is greater than 50")
    if num %2==0:
        print("Number is even too")
    else:
        print("Number is odd too")
else:
    print("Number is less than 50")