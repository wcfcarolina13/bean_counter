class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, presence: true, uniqueness: true

end




# // TODO
# // Add user registration
# // Add saved status tagged to users
# // Add offline tru idle game functionality
# // Add cool SASS and images
# // Add annoying sounds
# // Add more options:
# //  Bean vendor
# //  Bean farm
# //  Beanology research
# //    Bean machines
# //    Bean machien upgrades
# //  Bean awards that give upgrades and display on screen
# // Add leaderboards