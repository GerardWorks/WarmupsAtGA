require 'pry'

class Say
  @@number = {
    1=> "one",
    2=> "two",
    3=> "three",
    4=> "four",
    5=> "five",
    6=> "six",
    7=> "seven",
    8=> "eight",
    9=> "nine"
  }
  @@teens = {
    11=> "eleven",
    12=> "twelve",
    13=> "thirteen",
    14=> "fourteen",
    15=> "fifteen",
    16=> "sixteen",
    17=> "seventeen",
    18=> "eighteen",
    19=> "nineteen"
  }
  @@tens = {
    2=> "twenty",
    3=> "thirty",
    4=> "forty",
    5=> "fifty",
    6=> "sixty",
    7=> "seventy",
    8=> "eighty",
    9=> "ninety"
  }

  def initialize number
    @number = number
  end

  def in_english
    num_array = @number.split("").map { |x| x.to_i  }
    num_array_length = num_array.length
    word = []

    if num_array_length == 1
      word << @@number[num_array[0]]
    elsif num_array_length == 2
      if num_array[0] == 1
      word << @@teens[@number.to_i]
      else
        word << @@tens[num_array[0]]
        word << @@number[num_array[1]]
      end
    end
    return word.join(" ")
  end
end

loop do
  print 'Put a number in which you want to conver to words: '
  number = gets.chomp
  puts Say.new(number).in_english
end
