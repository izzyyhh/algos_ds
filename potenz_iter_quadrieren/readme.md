# time complexity  
the count of multiplication is quite the same as length(binary_representation) -1 + count(ones_in_binary_representation) - 1

  
  
length of binary representation of number n is estimated as: log2(n), thus roughly log2(n) multiplications

  
e.g. A^13

A^13  
(A^6)^2 * A  
((A^3)^2)^2 * A  
((A^2 * A)^2)^2 * A  
  
here we have 5 multiplications at the end for A^13 instead of 12
