class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  after_create :create_couchbase_account

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  

  def create_couchbase_account
  	RestClient.post(COUCHBASE_SYNC_URL + "/" + COUCHBASE_DATABASE +  "/_user/", '{"name": "'+ self.email + '" , "password": "lerwuf"}');
  end
end
