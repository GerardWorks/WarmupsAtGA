require 'pry'

@roman_num = {
  1=>"I",
  5=>"V",
  10=>"X",
  50=>"L",
  100=>"C",
  500=>"D",
  1000=>"M"
}

def roman num
  roman_num = []
  num_array = num.to_s.split("")
  num_array_length = num_array.length
  binding.pry

  if num_array_length == 4
    thousand = num_array[0].to_i
    hundred = num_array[1].to_i
    ten = num_array[2].to_i
    one = num_array[3].to_i
    if num < 3000
      for i in 1..thousand
        roman_num << @roman_num[1000]
      end

      

    else
      puts "The number is too large for me to convert2"
    end
  elsif num_array_length == 3

  elsif num_array_length == 2

  elsif num_array_length == 1

  else
    puts "The number is too large for me to convert"
  end

return (print roman_num.join("") + "\n")

end

roman 2000
# roman 4000
# roman 1700
# roman 2345
