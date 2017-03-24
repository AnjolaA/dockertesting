Feature: Title check
    I should be able to go to a Forum Website
    and check its Page Title

Scenario: Get the title of Homepage
    Given I go to the website "/"
    Then I expect the title of the page "Admin"
