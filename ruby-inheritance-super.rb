class Fruit
  def initialize color# 3
    @color = color # 4
  end

  def show_color
    @color # 5
  end
end


class Apple < Fruit
  def initialize (flavor, color)  # 1
    super(color) # 2
    @flavor = flavor
  end

  def change_color color
    @color = color
  end

  def show_info
    "This apple is #{ @flavor } and #{ @color }."
  end

  def show_test_info
    "#{ @test1 } #{ @test2 }"
  end
end

apple1 = Apple.new("sour", "green")
p apple1.show_info
apple1.change_color "yellow"
p apple1.show_info
apple2 = Apple.new("red", "sweet")
p apple2.show_color
p apple2.show_info
