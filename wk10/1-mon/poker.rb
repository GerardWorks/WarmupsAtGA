require 'pry'
puts 'How Many Players?'
num_players = gets.chomp
puts "You have joined a room with: " + num_players + " players"

@cards = ['Ace' , 2,3,4,5,6,7,8,9,10, 'Jack', 'Queen','King']
@card_type = ['Spades', 'Diamonds', 'Clubs', 'Hearts']

def random_cards(num)
  card_array = []
  i = 0
  number_players_cards = num.to_i * 2
  while i < number_players_cards do
    card_array << @cards.sample
    card_array << @card_type.sample
    i += 1
  end
  return card_array
end

my_hand = random_cards(1)
game_hand = random_cards(num_players)

print my_hand
print game_hand
