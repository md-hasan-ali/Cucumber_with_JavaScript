Feature: Is it Friday yet?
    Everybody wants to know when it's Friday

Scenario: Finding some cheese
    Given I am on the Google search page
    When Click on the google icon
    And Click on the new year celebration

Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

    Examples:
        | day            | answer |
        | Friday         | TGIF   |
        | Sunday         | Nope   |
        | anything else! | Nope   |
