require 'pry'
array_numbers = [2,6,4,8,1,2,9,5]

def getSquares array
  new_array = array.map { |x| x * x  }.uniq.sort
end

puts getSquares(array_numbers)
