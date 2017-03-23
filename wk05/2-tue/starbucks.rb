require 'pry'

class Coffee

  attr_reader :type, :sugar, :size, :name, :time, :collect

  @@coffee_orders = []

  def initialize type,sugar,size,name
    @type = type
    @sugar = sugar
    @size = size
    @name = "#{name_error(name)}"
    @time = current_time
    @collect = false
    @@coffee_orders << self
  end

  def self.orders
    @@coffee_orders
  end


  def to_s
    "#{@name}\'s #{@type}, #{@size}, #{@sugar}"
  end

  def name_error name_input
    name_array = name_input.split("")
    retarded_name = name_array.shuffle.join("")
    return retarded_name
  end

  def ready
    time_difference = (Time.now.round - @time)/60

    if( time_difference > 2 )
      to_s
    else
      "you need to get yo ass back in line"
    end
  end

  def current_time
    Time.now.round
  end

  def collected
    @collect = true
    Coffee.orders.each do |order|
      if(order.collect == false)
        puts "get back in line before i bust yo ass"
      else
        puts "here ya go #{order.name}.... NEXT!!!!"
      end
    end
  end

end

c1 = Coffee.new('latte','2 sugars','medium','ShaNayNay')
c2 = Coffee.new('cap','1 sugar','mug','Laquisha')
c3 = Coffee.new('espresso','1 sugar','shot','Shantell')
c4 = Coffee.new('mocha','3 sugars','mug','Antwaine')

binding.pry
