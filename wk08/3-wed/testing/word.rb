class Word
  def initialize
    @letters =
    [
      ['B','O'],
      ['X','K'],
      ['D','Q'],
      ['C','P'],
      ['N','A'],
      ['G','T'],
      ['R','E'],
      ['T','G'],
      ['Q','D'],
      ['F','S'],
      ['J','W'],
      ['H','U'],
      ['V','I'],
      ['A','N'],
      ['E','R'],
      ['F','S'],
      ['L','Y'],
      ['P','C'],
      ['Z','M']
    ]
  end

  def can_make_word(word)
    word_array = word.split("")
    letters_flat = @letters.flatten()
    word_array.each do |letter|
      letters_flat.select do |elem|

      end
    end
  end

end
