class Dog < ActiveRecord::Base
  def get_all_dogs
    @dogs = Dog.all
  end

end
