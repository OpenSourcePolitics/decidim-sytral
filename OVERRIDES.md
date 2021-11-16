# Overrides

## Reorder meetings indexes
- **app/controllers/decidim/meetings/meetings_controller.rb**
- **app/controllers/decidim/meetings/directory/meetings_controller.rb**
```ruby
def meetings
 @meetings ||= paginate(search.results.order(start_time: params.dig("filter", "date")&.include?("past") ? :desc : :asc))
end
```

## Fix meeting registration double follow
* app/commands/decidim/meetings/join_meeting.rb

## PR #11
* `app/serializers/decidim/meetings/registration_serializer.rb`  
Fix meetings registration serializer
  
* `lib/decidim/forms/user_answers_serializer.rb`  
Fix UserAnswersSerializer for CSV exports

