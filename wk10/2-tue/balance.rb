require 'pry'

@alphabet = ('A'..'Z').to_a
@word_array = []
@balance_letter = ''
@balanced = ''

def number_letter(letter)
  cap_letter = letter.upcase
  num_alpha = @alphabet.index(cap_letter) + 1
  return num_alpha
end

def split_word word
  # globals reset
  @word_array = []
  @balance_letter = ''
  @balanced = ''
  # globals reset
  score_array = []
  @word_array = word.split("")

  i = 0
  while (i<@word_array.length) do
    score_array << number_letter(@word_array[i])
    i += 1
  end
  return balance_word(score_array)
end

def balance_word num_array
  i = 1
  while i < num_array.length do
    middle_letter = @word_array[i]
    @word_array_left = @word_array[0..(i-1)]
    @word_array_right = @word_array[(i+1)..num_array.length]
    left_side = num_array[0..(i-1)]
    right_side = num_array[(i+1)..num_array.length]
    l = left_side.reverse.map.with_index { |element, index| element * (index+1) } #maths checker
    r = right_side.map.with_index { |element, index| element * (index+1) } # maths checker
    sum_left_side = left_side.reverse.map.with_index { |element, index| element * (index+1) }.inject(:+)
    sum_right_side = right_side.map.with_index { |element, index| element * (index+1) }.inject(:+)

    if sum_left_side == sum_right_side
      @balanced = @word_array_left.join("") + " " + middle_letter + " " + @word_array_right.join("") + " - " + sum_left_side.to_s
      break
    else
      @balanced = @word_array.join("") + " doesnt balance"
      i+=1
    end
  end
  return @balanced
end


puts split_word "STEAD"
puts split_word "CONSUBSTANTIATION"
puts split_word "WRONGHEADED"
puts split_word "UNINTELLIGIBILITY"
puts split_word "SUPERGLUE"
binding.pry
