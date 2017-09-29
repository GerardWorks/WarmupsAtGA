require 'pry'
# class Allergies
#   def initialize num
#     @num = num
#     @items = {
#       1=> "egg",
#       2=> "peanuts",
#       4=> "shellfish",
#       8=> "strawberries",
#       16=> "tomatoes",
#       32=> "chocolate",
#       64=> "pollen",
#       128=> "cats"
#     }
#     @allergie_array = calc(num)
#   end
#
#   def calc num
#     binary_array = @items.keys.map{|x|x.to_s(2).to_i}
#     conv_num = num.to_s(2).to_i
#     if num < 128
#       result = binary_array.combination(3).find_all { |x, y| x + y == conv_num } || []
#       types_of_allergie = result.flatten.map{|x|@items[x.to_s.to_i(2)]}
#       return types_of_allergie
#     end
#   end
#
#   def allergic_to? question
#     return @allergie_array.include?(question)
#   end
#
#   def list
#     return @allergie_array
#   end
#
# end


class Allergies
  attr_accessor :score, :list
  @@allergies_list = {
    'eggs' => 1,
    'peanuts' => 2,
    'shellfish' => 4,
    'strawberries' => 8,
    'tomatoes' => 16,
    'chocolate' => 32,
    'pollen' => 64,
    'cats' => 128
  }

  def initialize(score)
    @score = score
    @list = []
    @@allergies_list.each do | key, value |
      if @score & value > 0
        binding.pry
        list << key
      end
    end
  end

  def allergic_to?(stuff)
    item_score = @@allergies_list[stuff]
    if item_score &  @score
      TRUE
    else
      FALSE
    end
  end

end

# puts allergie =  Allergies.new(34)
puts allergie2 =  Allergies.new(35)
# binding.pry
