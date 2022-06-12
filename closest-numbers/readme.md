Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.

Example:

arr = [5, 2, 3, 4, 1]

sorted arr = [1, 2, 3, 4, 5]. Several pairs have the minimum difference of 1: [(1,2), (1,3), (3,4), (4,5)]. Return the array [1, 2, 2, 3, 3, 4, 4, 5].

Note

As shown in the example, pairs may overlap.

Given a list of unsorted integers, arr, find the pair of elements that have the smallest absolute difference between them. If there are multiple pairs, find them all.

Function Description

Complete the closestNumbers function in the editor below.

closestNumbers has the following parameter(s):

int arr[n]: an array of integers.

Returns
- int[]: an array of integers as described.