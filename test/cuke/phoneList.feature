Feature: Phone List Feature

    Scenario: The complete list of phones is displayed.
        Given we are at the phone list page
        Then all the phones are displayed
        
        
    Scenario: The list is filtered when entering text on the search box.
        Given we are at the phone list page
        When I enter "motorola" in the search box
        Then 2 phones are listed
        
        
    Scenario: The list is filtered when entering text on the search box.
        Given we are at the phone list page
        When I enter "nexus" in the search box
        Then 1 phones are listed
        
        
    Scenario Outline: Testing filtering through a table.
        Basically, this runs the same tests, but using a table which is a better approach.
        
        Given we are at the phone list page
        When I enter "<term>" in the search box
        Then <count> phones are listed
        
        Examples:
            | term     | count |
            | nexus    | 1     |
            | motorola | 2     |