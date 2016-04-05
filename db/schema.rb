# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160405172958) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.integer  "location_id"
    t.text     "text"
    t.text     "image_url"
    t.string   "category"
    t.float    "height"
    t.float    "width"
    t.float    "x"
    t.float    "y"
    t.string   "shape"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "locations", force: :cascade do |t|
    t.integer  "street_id"
    t.float    "lat"
    t.float    "long"
    t.string   "image"
    t.integer  "order"
    t.float    "bumpiness"
    t.string   "reading_device_id"
    t.datetime "reading_timestamp"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "annotation_count"
  end

  create_table "streets", force: :cascade do |t|
    t.string   "street_name"
    t.float    "average_bumpiness"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.integer  "location_count"
    t.integer  "annotated_location_count"
  end

end
