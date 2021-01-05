# Database Metadata

## Users
- user_id : string
- email : string - regex
- password : hashed_string
- name : string
- gender : string
- city : string
- school : string
- coaching : string
- class : string
- coaching_batch : string
- target_exams : array of strings
- weekly_hours_committed : integer

## Questions
- question_id : string
- text : string
- image_url : string/regex
- options : array of *options*
- tags : array of string
- subject : string
- chapter : array of strings
- difficulty-level : float

## Interactions
- interaction_id : string
- user_id : string
- question_id : string
- options_selected : list of options
- entry_timestamp : timestamp
- exit_timestamp : timestamp

## Options
- option_id : string
- text : string
- image_url : string/url
- question_id : string
- is_correct : boolean
- tags - array of string