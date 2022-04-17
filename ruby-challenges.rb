# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def is_even_or_odd number
    if number.even?
        "#{number} is even"
    else 
        "#{number} is odd"
    end
end

p is_even_or_odd num1
p is_even_or_odd num2
p is_even_or_odd num3

# output:
# "7 is odd"
# "42 is even"
# "221 is odd"



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def dot_delete string
    string.include?("aieouAEIOU")
        string.delete("aieouAEIOU")
end

p dot_delete album1
p dot_delete album2
p dot_delete album3

# output:
# "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def pali string
    if string.downcase === string.downcase.reverse
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end

p pali palindrome_tester1
p pali palindrome_tester2
p pali palindrome_tester3

# Output:
# "Racecar is a palindrome"
# "LEARN is not a palindrome"
# "Rotator is a palindrome"