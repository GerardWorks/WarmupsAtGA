require 'pry'
require 'date'


class Robot
  attr_accessor :name, :count, :time
  def initialize
    @name = "#{robot_name_gen}"
    @count = 0
    @time = "#{current_time}"
  end

  def reset
    @name = "#{robot_name_gen}"
  end

  def instruction_count
    @count += 1
  end

  def robot_name_gen
    @array_letters = ('AA'..'ZZ').to_a
    @array_num = ('000'..'999').to_a
    first_letter = @array_letters[rand_index(@array_letters.length-1)]
    robot_num = @array_num[rand_index(@array_num.length-1)]
    robot_name = first_letter + robot_num
    return robot_name
  end

  def current_time
    Time.now
  end
end

def rand_index num
  letter = rand num
end


puts "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name
puts "Robot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name

puts "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
robot3.instruction_count
puts robot3.name
puts robot3.name
puts robot3.count
# time_modified = current_time
# puts robot3.time - time_modified
# robot3.time = time_modified

binding.pry
