# frozen_string_literal: true

# This migration comes from decidim (originally 20170128140553)

class AddTimestampsToIdentities < ActiveRecord::Migration[5.0]
  def change
    add_timestamps :decidim_identities
  end
end
