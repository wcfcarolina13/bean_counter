class CreateMonkeys < ActiveRecord::Migration[5.2]
  def change
    create_table :monkeys do |t|
      t.integer :amount

      t.timestamps
    end
  end
end
