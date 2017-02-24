Feature: Invite a player
  As a player
  I want to invite another players
  So that I can play chess

  Scenario: Inviting a player
    Given a player anakin
    And a player luke
    When anakin invite luke
    Then the invite must be created
