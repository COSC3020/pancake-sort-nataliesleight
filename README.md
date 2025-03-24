# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

For the number of comparisons of pancakes: $T(n) ∈ Θ(\frac{n^2}{2})$

The comparison occurs within a for loop in a for loop in the pancakeSort function. The first for loop runs $n$ times (it goes from 0 to the length of the array). The inner for loop is more tricky, as the upper limit is decremented for each outer for loop. Thus this inner loop runs $n$ times for the first iteration of the outer loop, $n-1$ times for the second iteration of the outer loop, $n-2$ times for the third iteration of the outer loop, etc. until the array length is decremented to 0 (last iteration of outer for loop). So the inner loop runs $n + (n-1) + (n-2) + ... + 1$ times total. This comes out to $(n+1) \frac{n}{2}$. Rewriting this equation gives $\frac{n^2}{2} + \frac{n}{1}$.

For the number of flips: $T(n) ∈ Θ(2n)$

The flips occur at the end of the outer for loop, not hitting any of the inner for loop. The outer for loop runs n times, and the flip function is called twice for each iteration. Thus flip is called $2n$ times.

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight
