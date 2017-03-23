require 'pry'

class Dice

  def self.roll (number=1)
    @@roll_array = []
    number.times do
      @@roll_array << rand(1..6)
    end
    puts @@roll_array
    self
  end

  def self.sum
    new_array = []
    sum_num = @@roll_array.reduce(:+)
    new_array.push(@@roll_array).push(sum_num)
    return new_array
  end

end

# try to avoid this unless really needed
# class Array
#   def sum
#     new_array = []
#     sum_num = self.reduce(:+)
#     new_array.push(self).push(sum_num)
#     return new_array
#   end
# end

binding.pry
