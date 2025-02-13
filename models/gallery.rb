class Gallery < ActiveRecord::Base
  #ActiveRecord::Base.pluralize_table_names = false
  belongs_to :doggy
end
