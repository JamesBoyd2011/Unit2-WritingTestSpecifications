/*
A function called "multiplication" that returns the product of the two input numbers.

function multiplication(a,b){
    return a*b
}

Expect multiplication(2, 3) to be a number
Expect multiplication(2, 3) to be equal to 6
Expect multiplication("a", 3) to be an error


A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
...should result in [-1, 1, 3, 9, 15]
*/
concatOdds([3,2,1],[9, 1, 1, 1, 4, 15, -1])
function concatOdds(arr1=[],arr2=[]){
    let value = [...new Set(arr1.concat(arr2).filter(num=>Math.abs(num) % 2 === 1))].sort((a,b)=> a<b ? -1 : 1)
    console.log(value)
    return value;
}
/*
Expect concatOdds([1,2,3], [4,5,6]) to be array
Expect concatOdds([1,2,3], [4,5,6]) to return [1,3,5]
Expect concatOdds([1,2,3], 4) to be an error

Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
What should happen with unexpected inputs?
What kinds of unexpected inputs should we worry about?
What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)
Functional Tests:
A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
What should happen if the cart is empty?
What needs to be shown to the user at each step of check out?
What behaviors of this feature does the prompt miss or gloss over?
Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!*/