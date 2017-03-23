require 'pry'

class Scrabble

  def self.score word
    @@scores = []
    score1 = ['a','e','i','o','u','l','n','r','s','t']
    score2 = ['d','g']
    score3 = ['b','c','m','p']
    score4 = ['f','h','v','w','y']
    score5 = ['k']
    score8 = ['j','x']
    score10 = ['q','z']
    word_array = word.downcase.split("")

    word_array.each do |letter|
      if(score1.include?(letter))
        @@scores << 1
      elsif score2.include?(letter)
        @@scores << 2
      elsif score3.include?(letter)
        @@scores << 3
      elsif score4.include?(letter)
        @@scores << 4
      elsif score5.include?(letter)
        @@scores << 5
      elsif score8.include?(letter)
        @@scores << 8
      elsif score10.include?(letter)
        @@scores << 10
      end
    end
    @@user_score = @@scores.reduce(:+)
    # puts @@scores
    puts "Your word #{word} has scored: #{@@user_score}"
    self
  end

  def self.double
    doubled = @@user_score * 2
    puts "Your score has been doubled to: #{doubled}"
  end

  def self.triple
    tripled = @@user_score * 3
    puts "Your score has been tripled to: #{tripled}"
  end
end


Scrabble.score("cabbage").double
Scrabble.score("Rainbow")
Scrabble.score("genius").triple
