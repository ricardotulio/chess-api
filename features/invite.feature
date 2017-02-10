Feature: Inviting a player
  As a chess player
  I want to invite an another player
  So that I can play chess

  Scenario: Inviting a player
    Given a player named "John"
    And another player named "Jennifer"
    When "John" invite "Jennifer" to play
    Then "Jennifer" must receive the invite

