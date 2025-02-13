class Doggy < ActiveRecord::Base
  belongs_to :dog_parent
  has_many :galleries
  def get_all_dogs
    @dogs = Doggy.all
  end

  def get_dog(doggy_id)
    @dog = Doggy.find(doggy_id)
  end

end
