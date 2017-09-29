require 'minitest/autorun'
require "minitest/reporters" # optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new() # optional

require_relative 'word'

class WordTest < MiniTest::Test

  # def test_cleans_number
  #   number = Phone.new("(123) 456-7890").number
  #   assert_equal "1234567890", number
  # end

  def single_letter
    word = Word.new.can_make_word("A")
    assert_equal "A", word
    # => true

  end
  def can_make_word("BARK")
  # => true
  end
  def can_make_word("BOOK")
    # => false
  end
  def can_make_word("TREAT")
    # => true
  end
  def can_make_word("COMMON")
    # => false
  end
  def can_make_word("SQUAD")
    # => true
  end
  def can_make_word("CONFUSE")
    # => true
  end
  def can_make_word("BOUGHT")
    # => false
  end

end
